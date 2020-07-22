const firebase = require('firebase');

const firebasAPP = firebase.initializeApp({
    apiKey: 'AIzaSyDeETNQ9iDKBwsR7FXQf7a8vwWTnZa4AYQ',
    authDomain: 'instgram-clone-pro.firebaseapp.com',
    databaseURL: 'https://instgram-clone-pro.firebaseio.com',
    projectId: 'instgram-clone-pro',
    storageBucket: 'instgram-clone-pro.appspot.com',
    messagingSenderId: '538805947304',
    appId: '1:538805947304:web:5f3b02043d7ff09477eb9d',
    measurementId: 'G-MEM76B2689',
});

const db = firebasAPP.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

// get data from firebase
const getData = () => {
    db.collection('posts').onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
            console.log(doc.data(), doc.id);
        })
    })
}

// add data from database
const addData = () => {
    db.collection('posts').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: "i am full stack devleloper",
        imageUrl: "https://images.pexels.com/photos/3632705/pexels-photo-3632705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        username: "nayyab"
    })
}
// delee data from firebase
const removeData = () => {
    const posts = db.collection("posts").doc("WQ8tiigmheD7WbiRBgpY").delete();

}

// updat data from firebase
const updateData = () => {
    db.collection("posts").doc("1bhkPXV0XNgodSqJ4hHb").set({
        "caption": "update house",
        "username": "update name",
        "imageUrl": "htpp:\\google.com"
    })
}

// removeData();
// getData();
// updateData();
// addData();


// authentication


// register user or SignUp
const signUp = () => {
    auth.createUserWithEmailAndPassword("hanan@gmail.com", "123456").catch(err => console.log(err.message));
}

// login user or SignIn
const signIn = () => {
    auth.signInWithEmailAndPassword("hanan@gmail.com", "123456").catch(err => console.log(err));
    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log(user.email, user.uid);
        } else {
            console.log("user has no login in");
        }
    });

}

// logou
const logout = () => {
    auth.signOut();
}

// signUp();
signIn();