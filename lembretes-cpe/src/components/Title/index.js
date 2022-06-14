import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default function Title() {
    return(
        <View style={styles.boxTitle}>
            <Image 
            style={{width:120,height:120,}}
            source={require('../../images/logo14.png')} 
            />
            <Text style={styles.textTitle}>Lembretes Cpe</Text>
        </View>
    );
}