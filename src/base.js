import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "chatbox-35f83.firebaseapp.com",
    databaseURL: "https://chatbox-35f83.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base