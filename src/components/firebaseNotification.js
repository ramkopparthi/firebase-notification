import React, { Component } from 'react';

// Your web app's Firebase configuration
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCH1sBEApvmHHIERIZeGW2__s1is70X84s",
  authDomain: "fir-notification-7e029.firebaseapp.com",
  projectId: "fir-notification-7e029",
  storageBucket: "fir-notification-7e029.appspot.com",
  messagingSenderId: "867686327632",
  appId: "1:867686327632:web:dbc2e7bff9b8282ae1f855"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service

class FirebaseNotification extends Component {
    state = {
        token: "",
    }

    fetchToken = () =>{
        const msg = firebase.messaging();
        msg.requestPermission().then(()=>{
            return msg.getToken();
          }).then((data)=>{
            console.warn("token",data)
            this.setState({
                token: data
            })
          })
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchToken}>Click here for Notification</button>
                {this.state.token ? <p>token: {this.state.token}</p> : ''}
            </div>
        )
    }

}

export default FirebaseNotification;