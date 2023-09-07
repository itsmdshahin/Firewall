import { View, Text, Button } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  const onSubmit = () => {
    console.log("Button pressed"); 
  }

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button
        title="Home sweet"
        onPress={onSubmit}
      />
    </View>
  )
}

export default SettingsScreen
