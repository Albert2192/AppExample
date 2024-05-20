import { Alert, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const MainContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://myreactnative-5865e-default-rtdb.firebaseio.com/producto.json')
            .then(response => response.json())
            .then(data => {
                const productosArray = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value,
                }));
                // Aquí puedes manipular los datos si es necesario antes de establecerlos en el estado
                setProductos(productosArray);
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    const data = [
        {
            id: 1,
            descripcion: "Objeto 1",
            grow: 1,
            order: 2,
        },
        {
            id: 2,
            descripcion: "Objeto 2",
            grow: 2,
            order: 3,
        },
        {
            id: 3,
            descripcion: "Objeto 3",
            grow: 1,
            order: 1,
        },
    ];

    const renderItem = ({ item }) => (
        <Pressable onPress={() => { handlerButtom(item.id) }}>
            <View key={item.id}>
                <Text>{item.descripcion}</Text>
            </View>
        </Pressable>
    )

    const handlerButtom = (id) => {
        Alert.alert(`El id es: ${id}`)
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.seccion1}>
                <Text>Con Flat List</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
            <View style={styles.seccion2}>
                <Text>Con Map y Fetch</Text>
                <ScrollView>
                    <View style={styles.flex}>
                        {productos.map((item) => (
                            <View key={item.id} style={[styles.producto, { flexGrow: item.grow, order: item.order }]}>
                                <Text className="text-base font-bold mb-2">{item.titulo}</Text> 
                                <Text className="text-xs">{item.descripcion}</Text>
                                <Text className="text-xs" style={styles.price}>{item.precio} $</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    seccion1: {
        flex: 1,
        backgroundColor: "green",
    },
    seccion2: {
        flex: 1,
        backgroundColor: "#EBF5FB",
        paddingHorizontal: 10,
    },
    flex: {
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 70,
    },
    producto: {
        backgroundColor: "#5DADE2",
        paddingVertical: 20,
        width: "100%",
        borderRadius: 5,
        position: "relative",
        paddingHorizontal: 10,
    },
    price: {
        backgroundColor: "red",
        position: "absolute",
        right: 5,
        top: -5,
        borderRadius: 5,
        padding: 5,
        color: "#fff",
    }
})