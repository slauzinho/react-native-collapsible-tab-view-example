import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  diffClamp,
  interpolate,
  Extrapolate,
  useCode,
  debug,
} from 'react-native-reanimated';
import { TabBar } from 'react-native-tab-view';
import { useContext } from 'react';
import { AnimationContext } from './Tabs';
import { useMemoOne } from 'use-memo-one';
import { useValues } from 'react-native-redash';

const CustomTabBar = props => {
  const values = useContext(AnimationContext);
  const TAB_BAR_OFFSET = 100;

  const [copiedScrollY] = useValues([0], []);

  const diffY = diffClamp(copiedScrollY, 0, 100);

  const height = interpolate(diffY, {
    inputRange: [0, TAB_BAR_OFFSET],
    outputRange: [TAB_BAR_OFFSET, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  useCode(
    () => [
      diffY,
      Animated.set(copiedScrollY, values.scrollY),
      debug('diffY =>', diffY),
    ],
    [values.scrollY]
  );

  return (
    <>
      <Animated.View style={{ height, marginTop: -100 }} />
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    </>
  );
};

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

export default CustomTabBar;
