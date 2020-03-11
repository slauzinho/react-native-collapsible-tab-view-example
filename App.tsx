import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Albums from './Albums';
import Contacts from './Contacts';
import Animated from 'react-native-reanimated';
import CustomTabBar from './CustomTabBar';

export const AnimationContext = React.createContext({
  scrollY: new Animated.Value(0),
  navigationState: null,
});

export default class App extends React.Component {
  state = {
    index: 1,
    routes: [
      { key: 'article', title: 'Article' },
      { key: 'contacts', title: 'Contacts' },
    ],
  };

  private handleIndexChange = (index: number) =>
    this.setState({
      index,
    });

  private renderScene = SceneMap({
    article: Albums,
    contacts: Contacts,
  });

  render() {
    return (
      <AnimationContext.Provider
        value={{ scrollY: new Animated.Value(0), navigationState: this.state }}
      >
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={props => <CustomTabBar {...props} />}
          onIndexChange={this.handleIndexChange}
        />
      </AnimationContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabbar: {
    backgroundColor: '#3f51b5',
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
  },
});
