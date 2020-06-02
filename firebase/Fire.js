import firebase from 'firebase';

class Fire {
    constructor() {
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

    login = async (user, success_callback, failed_callback) => {
        await firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(success_callback, failed_callback);
    };

    refOn = callback => {
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));
    }

    createAccount = async user => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(
                function () {
                    console.log(
                        'created user successfully. User email:' +
                        user.email +
                        ' name:' +
                        user.name
                    );
                    var userf = firebase.auth().currentUser;
                    userf.updateProfile({ displayName: user.name }).then(
                        function () {
                            console.log('Updated displayName successfully. name:' + user.name);
                            alert(
                                'User ' + user.name + ' was created successfully. Please login.'
                            );
                        },
                        function (error) {
                            //console.warn('Error update displayName.');
                        }
                    );
                },
                function (error) {
                    //console.error('got error:' + typeof error + ' string:' + error.message);
                    alert('Create account failed. Error: ' + error.message);
                }
            );
    };
}

export default Fire;