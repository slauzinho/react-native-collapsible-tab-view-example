import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AnimationContext } from './Tabs';
import Animated, { useCode } from 'react-native-reanimated';
import { useValues, onScroll } from 'react-native-redash';

const Albums = props => {
  const values = useContext(AnimationContext);
  const items = new Array(30).fill(1);

  return (
    <View style={{ padding: 30 }}>
      <Animated.ScrollView
        onScroll={onScroll({ y: values.scrollY })}
        onScrollBeginDrag={onScroll({ y: values.scrollBY })}
        scrollEventThrottle={1}
        bounces={false}
      >
        {items.map((_, index) => (
          <View
            key={index}
            style={{
              height: 50,
              backgroundColor: 'grey',
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>{index}</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default Albums;
