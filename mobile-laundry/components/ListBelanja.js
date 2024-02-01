import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";

const FAKE_BELANJAAN = [
    {
        id: 1,
        nama: "Sayur 01"
    },
    {
        id: 2,
        nama: "Sayur 02"
    },
    {
        id: 3,
        nama: "Sayur 03"
    },
]

const ListBelanja = () => {
    const [daftarBelanja] = useState(FAKE_BELANJAAN);
    const [carts, setCarts] = useState([])

    const showInfo = (nama) => {
        Alert.alert(nama)
    }

    const addToCart = (item) => {
        let newCarts = [...carts, item]
        setCarts(newCarts)
    }

    return ( 
        <View style={styles.container}>
            {daftarBelanja.map((value, index) => {
                return(
                    <TouchableOpacity 
                        style={styles.item} 
                        key={index} 
                        onPress={() => {
                        addToCart(value)
                    }}>
                        <Text>{value.nama}</Text>
                    </TouchableOpacity>
                )
            })}

            {carts.map((value, index) => {
                return(
                    <TouchableOpacity 
                        style={styles.carts} 
                        key={index} 
                        onPress={() => {
                        showInfo(value.nama)
                    }}>
                        <Text>{value.nama}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "tomato"
    },
    carts: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "green"
    }
})
 
export default ListBelanja;