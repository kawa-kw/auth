import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Button, Header, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: null}
        //null means that we dont know if the user is logged in or not
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCL5Jy8AdoQtfmdoqhnX7FT-ZsYM9FjJ6o',
            authDomain: 'auth-f68e2.firebaseapp.com',
            databaseURL: 'https://auth-f68e2.firebaseio.com',
            projectId: 'auth-f68e2',
            storageBucket: 'auth-f68e2.appspot.com',
            messagingSenderId: '699694554417'
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                console.log(this.state)
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Wyloguj</Button>
                )
            case false:
                console.log(this.state)
                return <LoginForm />
            default:
                console.log(this.state)
                return <Spinner size='large' />
        }
    }

    render () {
        return (
            <View>
                <Header headerTitle='Authenticationnnnn' />
                {this.renderContent()}
            </View>
        )
    }
}

export default App;
