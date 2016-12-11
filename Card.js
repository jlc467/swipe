import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import CardTop from './CardTop'

class Card extends Component {
  constructor(props) {
    super(props)
  }
  toggleBigMode = () => this.props.onPress(this.props.index)
  renderCardContents = (contents) => {
    const {
      cardTop,
      card,
    } = contents
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        width: Dimensions.get('window').width - 20,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'scroll',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CardTop
					cardTop={cardTop}
          bigMode={this.props.bigMode}
        />
        {this.props.bigMode && <View>
          <Text style={styles.cardText}>
            {card.text}
          </Text>
        </View>}
      </View>
    )
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={.5}
        underlayColor="#0F1419"
        onPress={this.toggleBigMode}
      >
        {this.renderCardContents(this.props.data)}
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'transparent',
    margin: 20,
  }
});

export default Card
