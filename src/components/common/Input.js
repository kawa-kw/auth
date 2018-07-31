import React from 'react'
import { Text, TextInput, View } from 'react-native'

const Input = (props) => {
    const {
        containerStyle,
        inputStyle,
        labelStyle
    } = styles

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{props.label}</Text>
            <TextInput
                autoCorrect={false}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                style={inputStyle}
            />
        </View>
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    inputStyle: {
        flex: 3,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        color: '#000',
        backgroundColor: '#ccc',
    },
    labelStyle: {
        flex: 1,
        paddingLeft: 20,
        fontSize: 18,
        backgroundColor: '#ddd',
    },
}

export { Input }

// The same thing but with destructurize approach:
//
// const Input = ({ label, value, onChangeText }) => {
//     return (
//         <View>
        //     <Text>{label}</Text>
        //     <TextInput
        //         value={value}
        //         onChangeText={onChangeText}
        //         style={{ height: 20, width: 100, backgroundColor: '#ccc'}}
        //     />
        // </View>
//     )
// }
