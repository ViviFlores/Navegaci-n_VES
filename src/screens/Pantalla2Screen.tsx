import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pantalla2Screen = () => {
  //hook useNavigation: permite navegar de un screen a otro screen
  const navigation = useNavigation();
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pantalla 2</Text>
      <Button
        title='Ir pantalla 3'
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla3' }))} />
    </View>
  )
}


