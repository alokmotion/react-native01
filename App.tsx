import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>Ka ho babu Androide Developer Ban Rahe ho</Text>
      <Image 
      style={{width:200 , height:200}}
      source={{uri:'https://images.unsplash.com/photo-1739289354200-f5db511bd08b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D'}}/>
    <Button title='Click Me'></Button>
    </View>
  )
}

export default App