import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    contentButtons: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: '#0d0830',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    contentImage: {
        //backgroundColor:'red'
        marginTop: 20,
        alignItems: 'center'
    },
    contentOption:{
        marginHorizontal:30,
        marginVertical:20,
        gap: 15
    },
    menuText:{
        fontSize:17
    }
});