import prisma from '../../../prisma-client';

export default async function storeMessageInDb(messageData) {
   try {
      await prisma.chatMessage.create({
         data: messageData,
      });
   } catch (error) {
      console.error('Error storing message in database:', error);
   }
}
