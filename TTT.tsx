import React, { FunctionComponent } from 'react';
import { Text, Platform, TouchableOpacity, View } from 'react-native';
import { bInterpolate, useTimingTransition } from 'react-native-redash';
import Animated, {
  diffClamp,
  interpolate,
  Extrapolate,
  useCode,
  debug,
} from 'react-native-reanimated';
import { NavigationTabProp } from 'react-navigation-tabs';
import { useContext } from 'react';
import { AnimationContext } from './Tabs';
import { useMemoOne } from 'use-memo-one';

const TAB_BAR_HEIGHT = 86;

interface Props {
  navigation: NavigationTabProp;
}

const TabBar: FunctionComponent<Props> = props => {
  const {
    navigation: { state },
    navigation,
  } = props;

  const values = useContext(AnimationContext);

  const navigateTo = (routeName: string): void => {
    navigation.navigate(routeName);
  };

  console.log(props);
  const visible = true;
  const skipAnimation = false;
  const TAB_BAR_OFFSET = 100;
  const diffY = diffClamp(values.scrollY, 0, TAB_BAR_OFFSET);

  const height = interpolate(diffY, {
    inputRange: [0, TAB_BAR_OFFSET],
    outputRange: [TAB_BAR_OFFSET, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  useCode(() => debug('=======>', values.scrollY), [props.navigation.state]);

  return null;
};

export default TabBar;
