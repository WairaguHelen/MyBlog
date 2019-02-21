import firebase from 'firebase'
import 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwvMQ_47F3DIaty0oVfeHmh-EhsEhO1NU",
    authDomain: "myblog-349d7.firebaseapp.com",
    databaseURL: "https://myblog-349d7.firebaseio.com",
    projectId: "myblog-349d7",
    storageBucket: "myblog-349d7.appspot.com",
    messagingSenderId: "980591726160"
  };
  firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}