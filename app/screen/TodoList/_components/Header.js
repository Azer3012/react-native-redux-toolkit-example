import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>TODO LIST</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        alignSelf:'center'
    }
})