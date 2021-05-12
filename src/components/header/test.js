import firebase from 'firebase/app';
import 'firebase/firestore';


const firestore = firebase.firestore();


firestore.collection('users').doc('5iiWKytsVOpGM0wwNApJ')
firestore.doc(/user/5iiWKytsVOpGM0wwNApJ);
firestore.collection('/user/5iiWKytsVOpGM0wwNApJ');