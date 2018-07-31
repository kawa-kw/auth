import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCL5Jy8AdoQtfmdoqhnX7FT-ZsYM9FjJ6o',
            authDomain: 'auth-f68e2.firebaseapp.com',
            databaseURL: 'https://auth-f68e2.firebaseio.com',
            projectId: 'auth-f68e2',
            storageBucket: 'auth-f68e2.appspot.com',
            messagingSenderId: '699694554417'
        })
    }

    render () {
        return (
            <View>
                <Header headerTitle='Authenticationnnnn' />
                <LoginForm />
            </View>
        )
    }
}

export default App;
