import firebase from 'firebase';

class Fire {
    constructor() {
        this.init();
        this.checkAuth();
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCbfxXup_hgJdTcjWSRtdL6mtEtiZSN2sU",
                authDomain: "fir-auth-7e01a.firebaseapp.com",
                databaseURL: "https://fir-auth-7e01a.firebaseio.com",
                projectId: "fir-auth-7e01a",
                storageBucket: "fir-auth-7e01a.appspot.com",
                messagingSenderId: "611165447969",
                appId: "1:611165447969:web:3aaef24c1b79172f9b8060",
                measurementId: "G-8F24CYG0YY"
            })
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message);
        })
    }

    parse = message => {
        const { user, text, timestamp } = message.val()
        const { key: _id } = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)))
    }

    off() {
        this.db.off();
    }

    get db() {
        return firebase.database().ref('messages')
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}


export default new Fire();