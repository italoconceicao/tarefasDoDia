import { useFonts, DancingScript_400Regular, DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
import { View, Text, StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

function Index() {

    let [fontsLoaded] = useFonts({ DancingScript_700Bold, });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <ImageBackground src={'https://www.everythingabode.com/wp-content/uploads/2021/09/cute-wallpaper-27.jpg.webp'} resizeMode="cover" imageStyle=
                {{ opacity: 0.3 }}>
                <View style={{ width: '100%', paddingTop: 50, paddingBottom: 50, }}>
                    <Text style={styles.titutoTarefas}>Tarefas do Dia</Text>
                </View>
                <View style={{ height: '70%' }}>
                    <ScrollView contentContainerStyle={styles.contentContainer} persistentScrollbar>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Lavar o Rosto"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Tomar café da manhã"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Guardar os alimentos"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Colocar a louça na pia"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Limpar a mesa"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Escovar os dentes"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Arrumar a cama"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Organizar minhas coisas"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Almoçar"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Colocar a louça na pia"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Limpar a mesa"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Escovar os dentes"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Colocar a roupa da escola"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Conferir a mochila"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Pegar lanche e água"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Sair 13:10"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        {/* <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Lavar o Rosto"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Arrumar a cama"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Lavar o Rosto"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Arrumar a cama"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Arrumar a cama"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Lavar o Rosto"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Arrumar a cama"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Lavar o Rosto"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Arrumar a cama"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Lavar o Rosto"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Arrumar a cama"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Lavar o Rosto"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Arrumar a cama"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Lavar o Rosto"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View>
                        <View style={{ width: 300 }}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unFillColor="#FFFFFF"
                                text="Arrumar a cama"
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: "DancingScript_700Bold", fontSize: 25 }}
                                onPress={(isChecked: boolean) => { console.log(isChecked) }}
                            />
                        </View> */}
                    </ScrollView>
                </View>
                <View>
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>-------------------------------- * --------------------------------</Text>
                    {/* <Text style={{ fontSize: height * 0.015, textAlign: 'center' }}>Italo Conceioção</Text> */}
                </View>
            </ImageBackground>
        </View >
    )
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    titutoTarefas: {
        fontFamily: 'DancingScript_700Bold',
        fontSize: height * 0.06,
        textAlign: 'center'
    },
    contentContainer: {
        paddingLeft: 15,
        // height: '85%'

    }
});

export default Index;