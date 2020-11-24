import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export class DBConnector {
  myApp = firebase.initializeApp({
    apiKey: 'AIzaSyALNWIo9jZgRxBxvyHhClV-NDDjN2vnx0A',
    authDomain: 'data-meters.firebaseapp.com',
    databaseURL: 'https://data-meters.firebaseio.com',
    projectId: 'data-meters',
    storageBucket: 'data-meters.appspot.com',
    messagingSenderId: '339430419698',
    appId: '1:339430419698:web:df08c75625392cb96cf46b'
  });

  db = firebase.database(this.myApp);

  getAll = async () => {
    const snapshot = await this.db.ref().once('value');
    snapshot.forEach((childSnapShot) => {
      console.log(childSnapShot.val());
    });

    return await snapshot.child('data').val();
  };

}