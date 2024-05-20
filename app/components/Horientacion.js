import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ScreenOrientation from 'expo-screen-orientation';

const hor = ScreenOrientation.getOrientationAsync();
//console.log(hor);

//ESTA FUNCION BLOQUEA LA ORIENTACION DE LA PANTALLA 
async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
}

const Horientacion = () => {

    useEffect(() => {
        //changeScreenOrientation();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View className="bg-teal-600 py-3 px-10" style={styles.containerImagen}>
                <View style={{borderWidth: 3, borderColor: "#66FF33", borderRadius: 50, }}>
                    <Image
                        source={require('../../assets/img/img.jpeg')}
                        style={styles.image}

                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text className="text-lg font-bold">Alberto Aquino</Text>
                    <Text className="text-xs">Developer Full Stack</Text>
                </View>
                <Pressable className="bg-cyan-300" style={styles.cerrar}>
                    <Text className="text-slate-600 text-xs">Cerrar Sesion</Text>
                </Pressable>
            </View>

            <View style={styles.containerBody}>

                <Text>Este es un texto de prueba</Text>

            </View>

        </SafeAreaView>
    )
}

export default Horientacion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "red",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    containerImagen: {
        flexDirection: "row",
        width: "100vw",
        height: "auto",
        alignItems: "center",
        gap: 10
    },
    cerrar: {
        //backgroundColor: "red",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
    },
    containerBody: {
        flex: 1,
        //backgroundColor: "red",
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 5,
    }
})

//INSTRUCCIONES DE USO

// INSTALACIONES
// -> npx expo install expo-screen-orientation

