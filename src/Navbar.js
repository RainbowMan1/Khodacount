import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {useContext} from 'react';
import {AuthContext} from './AuthProvider';
import firebase from "./firebase";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const db = getFirestore(firebase);
const auth = getAuth(firebase);
const provider = new GoogleAuthProvider();


export default function NavBar() {
    const { currentUser } = useContext(AuthContext);

    const onLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            var user = result.user;
            db.collection("Users")
              .doc(user.uid)
              .set({ name: user.displayName }, { merge: true });
          })
          .catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
          });
      };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        KhodaCount
                    </Typography>
                    {currentUser ? ( 
                        <Typography>
                            {currentUser.displayName}
                        </Typography>
                        ) : (
                        <Button style={{"color": "white"}} onClick={onLogin}>
                            Login
                        </Button>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    );
}