import React, {useState, useRef} from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native';  
import Header  from '../../components/Header'
import { colors, paramaters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Icon, Button} from "@rneui/themed";

const SignInScreen = () => {

    const [textInput2Focussed, setTextInput2Focussed] = useState(false);

    const textInput1 = useRef(1);
    const textInput2 = useRef(2);


  return (
    <View style={styles.container}>
      <Header title="My Account"  type={'arrow-left'}/>
      <View style={{marginLeft: 20, marginTop: 10}}>
          <Text style={title}>Sign-In</Text>
      </View>
      <View style={{alignItems: "center", marginTop: 10}}>
          <Text style={styles.text1}>Please enter email and password</Text>
          <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
          <View>
              <TextInput
                style={styles.textInput1}
                placeholder="Email"
                ref={textInput1} 
              />
          </View>
          <View style={styles.textInput2}>
            <Animatable.View animation={textInput2Focussed ? "" : "fadeInLeft"} duration={400}>
                <Icon
                    name="lock"
                    iconStyle={{color: colors.grey3}}
                    type="material" 
                />
            </Animatable.View>
            <TextInput
                style={{width: "80%"}}
                placeholder="Password" 
                ref={textInput2} 
                onFocus={() => {
                    setTextInput2Focussed(false)
                }}
                onBlur={() => {
                    setTextInput2Focussed(true)
                }}
            />
            <Animatable.View animation={textInput2Focussed ? "" : "fadeInLeft"} duration={400}>
                <Icon
                        name="visibility-off"
                        iconStyle={{color: colors.grey3}}
                        type="material"
                        style={{marginRight:10}} 
                />
            </Animatable.View>
          </View>
      </View>

      <View>
                <Button
                    title="SIGN IN"
                    buttonStyle={paramaters.buttonStyle}
                    titleStyle={paramaters.buttonTitle}
                />
      </View>

    </View>
  )
}

export default SignInScreen

const styles =  StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize: 16
    },
    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    textInput2: {
        borderWidth: 1,
        borderRadius: 2,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15
    }
})