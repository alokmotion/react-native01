import { SafeAreaView, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Ka ho babu Androide Developer Ban Rahe ho</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1739289354200-f5db511bd08b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <Pressable>
        <Text style={styles.buttonText}>Click Me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonText: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default App;
