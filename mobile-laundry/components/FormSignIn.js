import { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"

const FormSignIn = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const handleChangeUser = (text, field) => {
        let userTemp = user;
        userTemp[field] = text
        setUser(userTemp)
    }

    const SignIn = () => {
        alert(`${user.username} ${user.password}`)
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.signInWrapper}>
                <View style={styles.formControl}> 
                    <Text style={styles.label}>Username</Text>
                    <TextInput 
                        placeholder="Username.." 
                        autoCapitalize="none" 
                        placeholderTextColor={"#ced4da"}
                        onChangeText={(text) => handleChangeUser(text, "username")}
                        style={styles.input}
                        />
                </View>

                <View style={styles.formControl}> 
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        placeholder="password.."                     
                        autoCapitalize="none" 
                        placeholderTextColor={"#ced4da"}
                        onChangeText={(text) => handleChangeUser(text, "password")}
                        style={styles.input}
                        secureTextEntry={true}
                        />
                </View>

                <View style={styles.formControl}>
                    <TouchableOpacity 
                        onPress={SignIn}                         
                        >
                        <Text style={styles.btn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#001524"
    },
    signInWrapper: {
        width: "70%",        
    },
    formControl: {
        paddingVertical: 4,
    },
    label: {
        marginVertical: 10,
        color: "#ffecd1",
    },
    input: {
        backgroundColor: "#15616d",
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 15,
        borderRadius: 5,
        color: "#ffecd1"
    },
    btn: {
        textAlign: "center",
        width: "100%",
        backgroundColor: "#ff7f00",
        paddingVertical: 16,
        fontWeight: "bold",
        color: "#001524",
        marginVertical: 10,
        borderRadius: 10
    }
})
 
export default FormSignIn;