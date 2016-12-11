import React, { Component } from 'react'
import {
  Animated,
  StyleSheet,
  View,
  ListView,
  Dimensions,
} from 'react-native'
import Card from './Card'
import cards from './mocks'

const AnimatedListView = Animated.createAnimatedComponent(ListView)

class App extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(cards),
      bigMode: false
    }
  }
  getListViewStyle = () => {
    const cardsToFit = this.state.bigMode ? 1 : 2
    const scale = 1 / cardsToFit
    return [
      styles.container,
      {
        width: Dimensions.get('window').width * cardsToFit
      },
      {
        transform: [
          {
            scale
          }
        ],
      }
    ];
  }
  toggleBigMode = index => {
    const bigMode = !this.state.bigMode
    const windowWidth = Dimensions.get('window').width
    const position =
      !bigMode
        ? index <= 1
          ? 0
          : (index % 2) !== 0
            ? (index - 1) * windowWidth
            : index * windowWidth
        : index * windowWidth

    this.setState({
      bigMode
    }, () => {
      this.refs.scrollView._component.scrollTo({x: position})
    })
  }
  render() {
    return (
      <View style={styles.box}>
        <AnimatedListView
          key={this.state.bigMode}
          horizontal={true}
          pagingEnabled={true}
          ref="scrollView"
          style={this.getListViewStyle()}
          dataSource={this.state.dataSource}
          renderRow={(rowData, key, index) =>
            <Card
              bigMode={this.state.bigMode}
              onPress={this.toggleBigMode}
              key={key}
              index={index}
              data={rowData}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#0F1419',
    alignItems:'center',
  },
  container: {
    flex: 1,
  },
});

export default App
