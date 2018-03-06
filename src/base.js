import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAX0ujybfBiaXJQeR0HIQODAs7olvzKYIM',
  authDomain: 'catch-of-the-dat-alex.firebaseapp.com',
  databaseURL: 'https://catch-of-the-dat-alex.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
