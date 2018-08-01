import React from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'

import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            error: '',
            loading: false,
            password: '',
        }
        this.onButtonPress = this.onButtonPress.bind(this)
        this.onLoginSuccess = this.onLoginSuccess.bind(this)
        this.onLoginFail = this.onLoginFail.bind(this)
    }

    onButtonPress() {
        const { email, error, loading, password } = this.state

        // After each button press, any existing errors are cleared and spinner is fired
        this.setState({ error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess)
                    .catch(this.onLoginFail)
            })

            //.catch((err) => {}) = called when .signInWithEmailAndPassword() fails. The same is with .createUserWithEmailAndPassword()
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            error: '',
            loading: false,
            password: '',
        })
    }

    onLoginFail() {
        this.setState({ error: 'Everything went wrong.', loading: false })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        }

        // otherwise return <Button>. But it can be clasic if else statement
        return (
            <Button onPress={this.onButtonPress}>Log in</Button>
        )
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='E-mail:'
                        placeholder='Wpisz email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Hasło:'
                        placeholder='password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;


// On the top, there is the same approach, but condensed by ES6:
//onChangeText={email => this.setState({ email: email })}
