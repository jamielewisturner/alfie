##Setup

#NPM
Donwload NVM https://github.com/coreybutler/nvm-windows/releases nvm-setup.exe
In any command prompt
Run `nvm install latest`
Run `nvm use latest`
This will install node

#Download the repo
You can either just download it as a zip file or fork the repo into your own repository and then clone it

##Running the app
Open the the folder in VSCode
Set default terminal to Command Prompt in VSCode (otherwise it will be powershell and the commands will not work) (just google how to do this)
Open a terminal in VSCode or any terminal thats in the same folder as your project
Run `npm install` to install all the packages for this project
Run `npm run start`
If it asks you to install more packages e.g. ngrok just say yes
Then download ExpoGo on your phone and scan the QR code displayed in the terminal on a camera app

##App layout

There is lots of files, don't worry about most of them as they were automatically generated
You are mainly interested in:
App.tsx - where you define the new screens
src/routes.ts - where you define properties about the screens e.g. parameters you pass between them
src/screens - where all the screens I made are

Don't worry about the other files for now
Enjoy


