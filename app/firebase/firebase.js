/*
  File for working with firebase
*/
import * as firebase from 'firebase';
import '@firebase/firestore';
import FirebaseConfig from '../constants/ApiKeys'

/*
  Configure firebase
*/
// const firebaseConfig = {
//   apiKey: "AIzaSyBn2Qimf2zC6g9FP3GFQs8of43M_oivlN0",
//   authDomain: "endoscopy-explorer-app.firebaseapp.com",
//   databaseURL: "https://endoscopy-explorer-app.firebaseio.com",
//   storageBucket: "endoscopy-explorer-app.appspot.com",
//   projectId: "endoscopy-explorer-app"
// };

firebase.initializeApp(FirebaseConfig);
const events = firebase.firestore().collection('events');
const users = firebase.firestore().collection('users');

export {
  firebase,
  events,
  users
};
