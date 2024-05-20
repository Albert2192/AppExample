import { StyleSheet, Text, View, Modal, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ModalEjemplo() {

    const [modalVisible, setModalVisible] = useState(false);

    const data = [
        {
            id: 1,
            descripcion: "Este es un item",
            price: 5000
        },
        {
            id: 2,
            descripcion: "Este es un item",
            price: 5000
        },
        {
            id: 3,
            descripcion: "Este es un item",
            price: 5000
        },
        {
            id: 4,
            descripcion: "Este es un item",
            price: 5000
        },
        {
            id: 5,
            descripcion: "Este es un item",
            price: 5000
        },
        {
            id: 6,
            descripcion: "Este es un item",
            price: 5000
        },
        {
            id: 7,
            descripcion: "Este es un item",
            price: 5000
        },
        {
            id: 8,
            descripcion: "Este es un item",
            price: 5000
        },
        {
            id: 9,
            descripcion: "Este es un item",
            price: 5000
        },
        {
            id: 10,
            descripcion: "Este es un item",
            price: 5000
        },
    ];

    return (
        <View style={styles.container}>
            <Text>Modal de ejemplo</Text>
            <Button title='Ver Modal' color="midnightblue" onPress={() => setModalVisible(true)} />

            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType="slide"
                //presentationStyle='fullScreen'
                transparent={true}
            >
                <View
                    style={styles.modalContainer}
                >
                    <View style={styles.modalView}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Este es un Modal</Text>

                        <ScrollView style={{ marginVertical: 10, width: "80%" }}>
                            {data.map((item, index) => (
                                <View key={item.id} style={styles.itemContainer}>
                                    <Text>{item.descripcion}</Text>
                                    <Text>{item.price}</Text>
                                </View>
                            ))}
                        </ScrollView>

                        <TouchableOpacity style={styles.close} onPress={() => setModalVisible(false)}>
                            <FontAwesome name="times" size={24} color="#fff" />
                        </TouchableOpacity>
                        {/* <Button style={{ marginTop: 40 }} title='Close' color="midnightblue" onPress={() => setModalVisible(false)} /> */}
                    </View>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        //backgroundColor: "green",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 10,
    },
    modalView: {
        //flex: 1,
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 450,
        borderRadius: 8,
        paddingVertical: 20,
        position: "relative",
    },
    itemContainer: {
        backgroundColor: "red",
        marginVertical: 2,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 5,
    },
    close: {
        backgroundColor: "red",
        width: 35,
        height: 35,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
    }
})