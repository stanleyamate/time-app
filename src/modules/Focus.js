import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import RoundedBtn from '../components/RoundedBtn'
import { colors } from '../utils/colors'

const Focus = ({addSubject}) => { 
    const [text, setText] = useState(null);
    return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>focus time app</Text>
        </View>
        <View style={styles.wrapper}>
          <TextInput
          style={styles.textInput}
          placeholder="What will you like to focus on?"
          outlineColor="transparent"
          mode="outlined"
          onChangeText={setText}
          />
          <RoundedBtn style={styles.btn} size={50} title="+" onPress={()=>addSubject(text)} />
        </View>
    </View>
  )}

  //=============STYLES ==============
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text:{
        color: colors.white,
        fontSize: 24,
        marginBottom: 10,
        textTransform: "capitalize",
    },header:{
        height: 70,
        backgroundColor: colors.primary,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom:50,
    },
    wrapper:{
        paddingHorizontal:20,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    textInput:{
        flex: 1,
        marginRight:10,
        marginBottom:5,
    },
    btn:{
    }
})
export default Focus