import React, { useState } from "react";
import { StyleSheet,ScrollView, TouchableOpacity, Button, TextInput, Text, View, Touchable, _ScrollView } from 'react-native';
import { auth, signInWithEmailAndPassword} from '../src/firebase';


export default function SignIn({ navigation }) {


   
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [errMsg, setErrMsg] = useState('');
    
    
    const sign = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('DecideDish')
                setErrMsg("user auth sucess");
                setTimeout(() => {
                    setErrMsg('');
                }, 5000)
                
                
            } catch (err) {
                setErrMsg(err.message);
                setTimeout(() => {
                    setErrMsg('');
                }, 5000)
            }
        }

    return (
        
        <View>
            <Text style={styles.Signup}>
                Sign-In
            </Text><Text style={styles.Are}>
                Not  Regester <TouchableOpacity>
                    <Text style={styles.Signin}>
                        signUp
                    </Text>
                </TouchableOpacity>
            </Text>
           
            <TextInput style={styles.input} placeholder="Your G-mail" onChangeText={text => (setemail(text))}></TextInput>
            <TextInput style={styles.input} placeholder="Your Password" onChangeText={text => (setpassword(text))}></TextInput>
            <TouchableOpacity>

                <Text onPress={sign} style={{ textAlign: "center", backgroundColor: "#841584", color: "Black", height: 40, width: 100, paddingTop: 10, marginLeft: "35%", fontWeight: "bold", fontSize: 20, borderColor: "#841584", borderRadius: 10, }} > SignIn</Text>
            </TouchableOpacity>
            {errMsg ? <Text style={{color:"red",textAlign:"center",fontSize:15,fontWeight:"bold"}}>{errMsg}</Text> : null}
        </View>
      
    )
}





const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#841584",
        padding: 10,
        marginTop: 20,
        color: "#841584",
        borderRadius: 9,
    },
    Signup: {
        fontSize: 30,
        
        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center",
        color: "#841584"

    }, Are: {
        fontSize: 30,
    
        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center",
        color: "grey",
    },
    Signin: {
        fontSize: 25,
        color: "blue",
        textAlign: "center",
      
    },
});
