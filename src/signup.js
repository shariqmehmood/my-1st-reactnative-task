import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, Button, TextInput, Text, View, Touchable } from 'react-native';
import { auth, createUserWithEmailAndPassword, db,doc ,setDoc} from "../src/firebase"

export default function Signup({ navigation }) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errMsg, setErrMsg] = useState('');

    const regesterme =  async () => {
    try {
       
        
        let { user } = await createUserWithEmailAndPassword(auth, email, password);
        let dataRef = doc(db, 'users', user.uid)
        
        navigation.navigate('SignIn')
        await setDoc(dataRef, {
            email: user.email,
            uid: user.uid,
            name:name,
        });
       
      
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
                Sign-Up
            </Text><Text style={styles.Are}>
                Are U Regester
                 <TouchableOpacity>
                    <Text onPress={()=>{ navigation.navigate('SignIn')}} style={styles.Signin}>
                        signin
                    </Text>
                </TouchableOpacity>
            </Text>
            <TextInput value={name} style={styles.input} placeholder="Your Name" onChangeText={text => (setname(text))}></TextInput>
            <TextInput style={styles.input} placeholder="Your G-mail" onChangeText={text => (setemail(text))}></TextInput>
            <TextInput style={styles.input} placeholder="Your Password" onChangeText={text => (setpassword(text))}></TextInput>
            <TouchableOpacity>

                <Text onPress={regesterme} style={{ textAlign: "center", backgroundColor: "#841584", color: "Black", height: 40, width: 100, paddingTop: 10, marginLeft: "35%", fontWeight: "bold", fontSize: 20, borderColor: "#841584", borderRadius: 10, }} > SignUp</Text>
            </TouchableOpacity>

            {errMsg ? <Text style={{color:"red",textAlign:"center",fontSize:15,fontWeight:"bold"}}>{errMsg}</Text> : null}
            <Text style={{ marginTop: 5, color: "grey", fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
                OR Countinue With
            </Text>


            <View>
                <TouchableOpacity>
                    <View style={{ backgroundColor: "#841584", width: 200, marginLeft: "25%", marginTop: 10, height: 50, borderColor: "#841584", borderRadius: 10 }}>
                        <Text onPress={() => { alert("Facebook") }} style={{ color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>
                            Facebook
                        </Text>
                    </View>
                </TouchableOpacity>


            </View>
            <View>
                <TouchableOpacity>
                    <View style={{ backgroundColor: "#841584", width: 200, marginLeft: "25%", marginTop: 10, height: 50, borderColor: "#841584", borderRadius: 10, }}>
                        <Text onPress={() => { alert("Facebook") }} style={{ color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>
                            Google
                        </Text>
                    </View>
                </TouchableOpacity>


            </View>






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
        marginTop: 18,
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


