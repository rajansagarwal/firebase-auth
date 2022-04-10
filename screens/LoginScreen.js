import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behaviour="padding"
    >
        <View style={styles.heading}>
            <Text style={styles.header}>
                name.
            </Text>
        </View>

        <View style={styles.inputContainer}>
            <TextInput
                placeholder="email"
                placeholderTextColor={'#6a6a6a'}
                // </View>value={email}
                // onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="password"
                placeholderTextColor={'#6a6a6a'}
                // </View>value={email}
                // onChangeText={text => setEmail(text)}
                style={styles.input}
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                // onPress{...() => {}}
                style={styles.button}>
                    <Text
                    style={styles.buttonLogin}>
                        login
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                // onPress{...() => {}}
                style={styles.button}>
                    <Text
                    style={styles.buttonLogin}>
                        register
                    </Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    heading: {
        marginTop: 30,
    },
    header: {
        fontWeight: '700',
        fontSize: 30,
        color: '#ffffff'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        marginVertical: 4,
        fontWeight: '400',
        fontSize: 18,
        color: '#ffffff'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    buttonLogin: {
        marginHorizontal: 90,
        color: '#4a4a4a'
    },
    buttonContainer: {
        marginTop: 600,
        display: 'flex',
        flexDirection: 'row',
    },
})