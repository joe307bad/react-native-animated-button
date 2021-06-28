import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeInRight
} from 'react-native-reanimated';
import React, { useState } from 'react';

import { MaterialIndicator } from 'react-native-indicators';

const styles = StyleSheet.create({
  text: {
    alignSelf: 'flex-start',
    padding: 10,
    zIndex: 2,
    flexDirection: 'row',
    borderColor: 'red',
    display: 'flex'
  }
});

export const ButtonNext = () => {
  const widthAnimate = useSharedValue(100);
  const loaderWidthAnimate = useSharedValue(0);
  const [loaderWidth, setLoaderWidth] = useState(100);
  const [loaderHeight, setLoaderHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState(0);
  const [label, setLabel] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthAnimate.value
    };
  });

  const leftOffset = useAnimatedStyle(() => {
    return {
      left: loaderWidthAnimate.value
    };
  });

  const long = 'Find Rx';
  const short = 'Find Rx';

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setLabel((prev) => !prev);
        widthAnimate.value = withTiming(
          !label ? width + loaderWidth + 10 : width - loaderWidth
        );
        loaderWidthAnimate.value = withTiming(!label ? loaderWidth + 10 : 0);
      }}
    >
      <View>
        <Animated.Text
          onLayout={(e) => {
            console.log(e.nativeEvent.layout.width);
            setWidth(e.nativeEvent.layout.width);
          }}
          style={[styles.text]}
        >
          <View style={{}}>
            <MaterialIndicator
              onLayout={(e) => {
                setLoaderWidth(e.nativeEvent.layout.width);
                setLoaderHeight(e.nativeEvent.layout.height);
              }}
              size={10}
              trackWidth={2}
              color="black"
            />
          </View>
          <Animated.Text style={{ flex: 1 }}>{short}</Animated.Text>
        </Animated.Text>
        <View style={{ overflow: 'hidden', borderWidth: 1, height }}>
          <Animated.View
            style={[
              {
                backgroundColor: 'green',
                position: 'absolute',
                zIndex: 1,
                height
              },
              animatedStyle
            ]}
          />
          <Animated.View
            style={[{ zIndex: 2, position: 'relative' }, leftOffset]}
          >
            {label && (
              <Animated.View
                entering={FadeInRight}
                style={{
                  paddingRight: 10,
                  position: 'absolute',
                  top: '50%',
                  left: -loaderWidth,
                  marginTop: -loaderHeight + 5
                }}
              >
                <MaterialIndicator size={10} trackWidth={2} color="black" />
              </Animated.View>
            )}
            <Animated.Text
              onLayout={(e) => {
                setHeight(e.nativeEvent.layout.height);
                widthAnimate.value = width - loaderWidth;
              }}
              style={[styles.text, { flexDirection: 'row' }]}
            >
              <Animated.Text>{short}</Animated.Text>
            </Animated.Text>
          </Animated.View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
