import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AnimatedButton, {ButtonNext} from 'react-native-animated-button';

export default function App() {
  const [loading, setLoading] = React.useState<boolean | undefined>();
  const [toggle, setToggle] = React.useState<boolean | undefined>();
  return (
    <View style={styles.container}>
      <ButtonNext toggle={toggle} />
      <AnimatedButton
        stretch={false}
        loading={false}
        style={{ marginTop: 12 }}
        backgroundColor={'#3C91E6'}
        backgroundDarker={'#155DA5'}
        borderColor={'green'}
        springRelease={false}
        disabled={false}
        activityColor={'white'}
        onNativePress={() => {
          setToggle((prev) => !prev);
        }}
      >
        <Text style={{ padding: 10 }}>Toggle animation</Text>
      </AnimatedButton>
    <AnimatedButton
      stretch={false}
      style={{ marginTop: 12 }}
      backgroundColor={'#FA824C'}
      backgroundDarker={'#9F3504'}
      borderColor={'green'}
      springRelease={false}
      disabled={false}
      loading={loading}
      activityColor={'white'}
      onNativePress={() => {
        setLoading((prev) => !prev);
      }}
    >
      <Text style={{ padding: 10 }}>Should expand with loading icon</Text>
    </AnimatedButton>
      <AnimatedButton
        stretch={false}
        loading={false}
        style={{ marginTop: 12 }}
        backgroundColor={'#3C91E6'}
        backgroundDarker={'#155DA5'}
        borderColor={'green'}
        springRelease={false}
        disabled={false}
        activityColor={'white'}
        onNativePress={() => {
          setLoading((prev) => !prev);
        }}
      >
        <Text style={{ padding: 10 }}>Toggle loading</Text>
      </AnimatedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
