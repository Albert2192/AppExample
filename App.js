import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gradiente from './app/components/Gradiente';
import Horientacion from './app/components/Horientacion';
import MainContainer from './app/components/MainContainer';
import ModalEjemplo from './app/components/ModalEjemplo';

export default function App() {
  return (
    //EJEMPLO DE FLATLIST Y MAP CON DATA
    //< MainContainer />

    //EJEMPO DE HORIENTACION CON PLUGIN
    //<Horientacion/>

    //EJEMPLO DE LINEAR GRADIENT
    //<Gradiente />

    //EJEMPLO DE MODAL
    <ModalEjemplo />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
