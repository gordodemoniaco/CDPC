import React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, LayoutAnimation } from 'react-native'
import Style from '../styles/LoginRegister'

class Login extends React.Component {
    render() {
        LayoutAnimation.easeInEaseOut()
        return (
            <View style={Style.container}>

                <Image
                    source={require('../assets/img/cdpc-circular.png')}
                    style={Style.logo}
                ></Image>

                <Text style={Style.greetingLogin}>{`Seja bem vindo,\nao aplicativo do CDPC`}</Text>

                <View style={Style.form}>
                    <View>
                        <Text style={Style.inputTitle}>Email</Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='Digite o seu email'></TextInput>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={Style.inputTitle}>Senha</Text>
                        <TextInput style={Style.input} secureTextEntry autoCapitalize='none' placeholder='Digite a sua senha'></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={Style.button}>
                    <Text style={Style.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }}>
                    <Text style={Style.text}>
                        É novo no CDPC? <Text style={Style.registerText}>Faça seu cadastro</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
export default Login