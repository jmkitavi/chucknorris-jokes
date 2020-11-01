import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/components/Home'
import Joke from './src/components/Joke'


const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Chuck Norris Jokes',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#cccccc',
              fontSize: 21,
            },
          }}
        />
        <Stack.Screen name="Joke" component={Joke} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
