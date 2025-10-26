# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash 
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# Accelerate MX React Native Mobile App

See the package.json for scripts to run

## Notes and TODO Items

1. There are many more chat components we should create:
   - List of inventory locations (with barcode)
   - Add barcode to physical inventory item
   - List of work orders
   - Single work order
   - Create discrepancy
   - Sign off on work performed
   - List of work performed
   - Sign off on work order
   - List of purchase orders
   - Single purchase order
2. We need to put in authentication: Adam should we use Cognito or Auth0?
3. Need to add user settings
4. What other actions should the user have besides Chat (if any)?
5. We should automate the deployment more, currently this is what we need to do:
   - Build from CLI (see production ios build script)
   - Expo launches a hosted build
   - Once it finishes (10-13 mins), need to download the IPA file locally
   - Open the IPA file using Transport on Mac (submits to apple developer account)
   - Test Flight picks up the new version and submits allows it to be updated on devices running Test Flight app. We have not yet submitted anything to the store.
6. We need app descriptions, screenshots, and other store submission documentation.
7. If we are going to deploy app to the app store as a company, we need to provide company information (will this exist under MadeLabs?).
