import React from 'react';
import { View } from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import { AnimationContext } from './Tabs';
import Animated from 'react-native-reanimated';

const App = () => {
  return (
    <AnimationContext.Provider value={{ scrollY: new Animated.Value(0) }}>
      <BottomTabNavigation />
    </AnimationContext.Provider>
  );
};

export default App;
