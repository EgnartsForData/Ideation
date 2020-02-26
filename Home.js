
import React from 'react'
import films from '../Helpers/filmsData'
import IdeaItems from './IdeaItems'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'

class Home extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <IdeaItems idee={item}/>}
        />
      </View>
    )
}
}

const styles = StyleSheet.create({
  main_container: {
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Home
