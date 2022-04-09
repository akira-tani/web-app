import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBPEn78-fOEwfS_79oSb98oVn9JrehgI4g",
      authDomain: "fir-pj-6d2af.firebaseapp.com",
      projectId: "fir-pj-6d2af",
      storageBucket: "fir-pj-6d2af.appspot.com",
      messagingSenderId: "273962950469",
      appId: "1:273962950469:web:2611b70c15d1aafb9ee82c",
      measurementId: "G-JDGWEQER4S"
    }
  )
}
  
export default firebase