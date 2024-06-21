import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
//   import { initializeApp } from "firebase/app";
//   import { getAnalytics } from "firebase/analytics";

//   // Import the functions you need from the SDKs you need

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBqPQN4JNVRB-HxKnzeIQM7GBQ12BDXkL0",
//   authDomain: "ui-app-30f8e.firebaseapp.com",
//   projectId: "ui-app-30f8e",
//   storageBucket: "ui-app-30f8e.appspot.com",
//   messagingSenderId: "871100955617",
//   appId: "1:871100955617:web:ab834e42095467db75f0a0",
//   measurementId: "G-5K11VH4L29"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);