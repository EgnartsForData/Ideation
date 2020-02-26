// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

class IdeaItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      etat: "black",
    }
  }

  changerEtat() {
    this.setState({
      etat: "red"
    });
  }

  render() {

    const idee = this.props.idee
    function like() {
      console.log("like")
    }
    function save() {
      console.log("save")
    }

    return (

      <LinearGradient
                colors={['#FEC194', '#FF0061']}
                style={styles.ln}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
      <View style={styles.main_container}>
        <View style={styles.info}>
          <Text>{idee.categorie}</Text>
          <Text>{idee.heure}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>{idee.text}</Text>
        </View>

        <View style={styles.interaction}>
        <TouchableOpacity  onPress={() => this.changerEtat()}>
          <Text>{idee.like} <Icon name="heart" size={15} color={this.state.etat} /></Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => save()}>
          <Text><Icon name="bookmark" size={20} /></Text>
        </TouchableOpacity>
        </View>

      </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 300,
  },

  info: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  content:{
    padding: 20,
    flex:5,
    justifyContent: 'center'
  },
  interaction: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  text:{
    textAlign:'center',
    fontSize:20
  },
  ln: {
    marginTop: 40,
    borderRadius:10,
    overflow: 'hidden',
    margin:10,
    padding:10
  }
})

export default IdeaItems
