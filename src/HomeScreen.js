import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export default function DecideDish() {
    const [dish1, setdish1] = useState('');
    const [dish2, setdish2] = useState('');
    const [dish3, setdish3] = useState('');
   const salectDish=()=>{
       let num=Math.random()
       console.log()
   }
    return (
        <View>
            <Text style={{ color: "#841584", textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
                Dish Selecter
            </Text>


            <View>
                <TextInput value={dish1} style={styles.input} placeholder=" Dish 1" onChangeText={text => (setdish1(text))}></TextInput>
                <TextInput value={dish2} style={styles.input} placeholder="Dish 2" onChangeText={text => (setdish2(text))}></TextInput>
                <TextInput value={dish3} style={styles.input} placeholder="Dish 3" onChangeText={text => (setdish3(text))}></TextInput>
            </View>



            <View>
                <TouchableOpacity>
                    <View style={{ backgroundColor: "#841584", width: 230, marginLeft: "20%", marginTop: 10, height: 50, borderColor: "#841584", borderRadius: 10, }}>
                        <Text onPress={ salectDish} style={{ color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>
                            Cheak Disigion
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

});