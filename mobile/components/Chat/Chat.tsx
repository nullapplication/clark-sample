import React, { useState } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import Markdown from "react-native-markdown-display";
import Icon from "@expo/vector-icons/Feather";
import uuid from "react-native-uuid";
import ChatComponentSelector from "./ChatComponentSelector";
import ImageUploader from "../ImageUploader/ImageUploader";

interface Message {
  id: string;
  text: string;
  data: any | null;
  html: string | null;
  image: string | null;
  renderCode: string | null;
  sender: "ai" | "user";
  action: "message" | "confirm";
  showSupportingHtml: boolean;
}

const Chat = () => {
  const initialGreetings = [
    "Another day, another squawk.",
    "What's on the board today?",
    "You ready to turn some wrenches?",
    "Hey, how's it going?",
    "Let's see what broke overnight.",
  ];

  const getRandomGreeting = () => {
    return initialGreetings[
      Math.floor(Math.random() * initialGreetings.length)
    ];
  };

  const randomGreeting = getRandomGreeting();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuid.v4(),
      text: randomGreeting,
      data: null,
      html: null,
      image: null,
      renderCode: null,
      sender: "ai",
      action: "message",
      showSupportingHtml: false,
    },
  ]);
  const [userInputText, setUserInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatedTriggerHack, setUpdatedTriggerHack] = useState(new Date());

  const sendMessage = async (
    message: { text: string } | null = null,
    isConfirmed = false
  ) => {
    let text = message?.text || userInputText;
    if (text.trim().length === 0) return;

    if (!isConfirmed) {
      const userMessage: Message = {
        id: uuid.v4(),
        text: userInputText,
        data: null,
        html: null,
        renderCode: null,
        sender: "user",
        action: "message",
        showSupportingHtml: false,
        image: null,
      };

      setMessages((prevMessages) => [userMessage, ...prevMessages]);
      setUserInputText("");
    }
    setLoading(true);

    try {
      const url = `${process.env.EXPO_PUBLIC_API_URL}/ai/ask`;
      console.log("url", url);
      const response = await fetch(url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: text, isConfirmed }),
        }
      );

      if (response.ok) {
        const payload = await response.json();
        const aiMessage: Message = {
          id: uuid.v4(),
          text: payload.response,
          data: payload.data,
          html: payload.html,
          renderCode: payload.renderCode,
          sender: "ai",
          action: payload.requiresConfirmation ? "confirm" : "message",
          showSupportingHtml: false,
          image: null,
        };

        setMessages((prevMessages) => [aiMessage, ...prevMessages]);
      } else {
        console.error("API Error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUploadStart = () => {
    setLoading(true);

    const userMessage: Message = {
      id: uuid.v4(),
      text: "Uploading image...",
      data: null,
      html: null,
      renderCode: null,
      sender: "user",
      action: "message",
      showSupportingHtml: false,
      image: null,
    };

    setMessages((prevMessages) => [userMessage, ...prevMessages]);
  };

  const handleImageUploadComplete = async (payload: any, image: string) => {
    setLoading(false);

    let aiMessage: Message = {
      id: uuid.v4(),
      html: null,
      sender: "ai",
      action: "message",
      showSupportingHtml: false,
      text: "",
      data: null,
      image: null,
      renderCode: null,
    };

    if (payload) {
      aiMessage.text = payload.subject;
      aiMessage.data = payload.data;
      aiMessage.renderCode = payload.renderCode;
      // aiMessage.image = image;
    } else {
      aiMessage.text = "I couldn't process that image. Please try again.";
    }

    setMessages((prevMessages) => {
      if (prevMessages.length === 0) return [aiMessage];

      const updatedMessages = [...prevMessages];

      // update last message
      updatedMessages[0] = {
        ...updatedMessages[0],
        text: "Uploaded image",
        image: image,
        renderCode: "image",
      };

      // add new message
      return [aiMessage, ...updatedMessages];
    });

    setUpdatedTriggerHack(new Date());
  };

  const showSupportingHtml = (idx: number) => {
    setMessages((prevMessages) => {
      return prevMessages.map((msg, i) =>
        i === idx
          ? { ...msg, showSupportingHtml: !msg.showSupportingHtml }
          : msg
      );
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <View style={styles.inner}>
        <View style={styles.messageList}>
          <FlatList
            data={messages}
            extraData={updatedTriggerHack}
            renderItem={({ item, index }) => (
              <View key={item.id}>
                <View
                  key={item.id}
                  style={[
                    styles.messageContainer,
                    item.sender === "user"
                      ? styles.userMessage
                      : styles.aiMessage,
                  ]}
                >
                  <Markdown>{item.text}</Markdown>
                  <ChatComponentSelector
                    sender={item.sender}
                    renderCode={item.renderCode}
                    data={item.data}
                    image={item.image}
                  />

                  {item.html && (
                    <>
                      <button onClick={() => showSupportingHtml(index)}>
                        {item.showSupportingHtml
                          ? "Hide reference information"
                          : "See reference information"}
                      </button>
                      {item.showSupportingHtml && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                          style={styles.supportingHtml}
                        />
                      )}
                    </>
                  )}
                  {item.action === "confirm" && (
                    <Pressable
                      onPress={() => sendMessage(messages[index], true)}
                      style={styles.confirmButton}
                    >
                      <Text style={styles.confirmText}>Confirm</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1 }}
            inverted
            keyboardShouldPersistTaps="handled"
          />
        </View>

        <View style={styles.inputContainer}>
          <ImageUploader
            onUploadImageStart={handleImageUploadStart}
            onUploadImageComplete={handleImageUploadComplete}
          />
          <TextInput
            placeholder="Type a message"
            placeholderTextColor={"#A9A9A9"}
            value={userInputText}
            onChangeText={setUserInputText}
            style={styles.messageBox}
            multiline
          />
          <Pressable
            style={styles.sendButton}
            onPress={() => sendMessage()}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Icon name="send" size={20} color="white" />
            )}
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    padding: 10,
  },
  messageList: {
    flex: 1,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    maxWidth: "80%",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  userMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  aiMessage: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    marginBottom: 10,
  },
  messageBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    textAlignVertical: "top",
  },
  sendButton: {
    backgroundColor: "#3C80CD",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: "#3C80CD",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  confirmText: {
    color: "#fff",
  },
  supportingHtml: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Chat;
