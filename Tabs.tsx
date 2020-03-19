import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Albums from './Albums';
import Contacts from './Contacts';
import Animated, {
  diffClamp,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import CustomTabBar from './CustomTabBar';

export const AnimationContext = React.createContext({
  scrollY: new Animated.Value(0),
  scrollBY: new Animated.Value(0),
  navigationState: null,
});

export default class Tabs extends React.Component {
  state = {
    index: 1,
    routes: [
      { key: 'article', title: 'Article' },
      { key: 'contacts', title: 'Contacts' },
    ],
  };

  constructor(props) {
    super(props);
    this.y = new Animated.Value(0);
  }

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
      <AnimationContext.Consumer>
        {value => (
          <>
            <TabView
              navigationState={this.state}
              renderScene={this.renderScene}
              renderTabBar={props => <CustomTabBar {...props} />}
              onIndexChange={this.handleIndexChange}
            />
            <Animated.View
              style={{
                position: 'absolute',
                bottom: 0,

                height: 80,
                width: '100%',
                transform: [
                  {
                    translateY: interpolate(
                      diffClamp([value.scrollY], 0, 100),
                      {
                        inputRange: [0, 100],
                        outputRange: [0, 100],
                        extrapolate: Extrapolate.CLAMP,
                      }
                    ),
                  },
                ],
                backgroundColor: 'pink',
              }}
            />
          </>
        )}
      </AnimationContext.Consumer>
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
