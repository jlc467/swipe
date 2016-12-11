import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

class CardTop extends Component {
  render() {
    const {
      cardTop,
      bigMode
    } = this.props

    return (
      <View>
        <Text style={{
          backgroundColor: 'transparent',
          color: '#2983BF',
          fontSize: bigMode ? 15 : 30,
          margin: 20,
          textAlign: 'center'
        }}>
          {cardTop.title}
        </Text>
      </View>
    )
  }
}

export default CardTop
