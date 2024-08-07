import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const LateralMenuCustom = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInternal {...props} />}>
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="Settings" options={{ title: 'Configuración' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

//Menú Lateral Personalizado
const MenuInternal = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.contentImage}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png'
                    }}
                    style={styles.image} />
            </View>
            <View style={styles.contentOption}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StackNavigator')}>
                    <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.menuText}>Configuración</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}