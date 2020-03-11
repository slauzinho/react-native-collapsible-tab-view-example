import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AnimationContext } from './Tabs';
import Animated from 'react-native-reanimated';
import { useValues, onScroll } from 'react-native-redash';
import { useRef } from 'react';
import { useEffect } from 'react';

const Contacts = props => {
  const values = useContext(AnimationContext);
  const items = new Array(50).fill(1);
  const scrollView = useRef();

  return (
    <View style={{ padding: 30 }}>
      <Animated.ScrollView
        ref={scrollView}
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
              backgroundColor: 'red',
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

export default Contacts;
