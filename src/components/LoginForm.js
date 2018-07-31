import React from 'react'

import { Button, Card, CardSection, Input } from './common'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' }
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='E-mail:'
                        placeholder='Wpisz email'
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>

                <CardSection />
                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;


// On the top, there is the same approach, but condensed by ES6:
//onChangeText={text => this.setState({ text: text })}
