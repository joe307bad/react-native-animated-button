import React, { FC, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

const pressDown = {
  from: {
    translateY: 0
  },
  to: {
    translateY: 4
  }
};

const pressUp = {
  from: {
    translateY: 4
  },
  to: {
    translateY: 0
  }
};

export const ButtonNext: FC<{ toggle?: boolean }> = ({ toggle }) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [t, setToggle] = useState(false);

  const onLayout = (event) => {
    setHeight(event.nativeEvent.layout.height);
    setWidth(event.nativeEvent.layout.width);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => setToggle((prevToggle) => !prevToggle)}
    >
      <View>
        <View
          style={{
            backgroundColor: '#20823D',
            height,
            position: 'absolute',
            borderRadius: 3.25,
            top: 4,
            zIndex: -1,
            width
          }}
        ></View>
        <Animatable.View
          useNativeDriver={true}
          easing="linear"
          duration={100}
          animation={t ? pressDown : pressUp}
          style={{ zIndex: 1 }}
          onAnimationEnd={() => {
            if (t === true) {
              setToggle((prevToggle) => !prevToggle);
            }
          }}
        >
          <View
            onLayout={onLayout}
            style={{
              backgroundColor: '#93E5AB',
              padding: 20,
              borderRadius: 3.25
            }}
          >
            <Text>Hey there</Text>
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
