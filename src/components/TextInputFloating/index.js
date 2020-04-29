import React, {useState} from 'react';
import {View, Animated, StyleSheet, TextInput} from 'react-native';

export function FloatingTitleTextInputField({
  keyboardType = 'default',
  titleActiveSize = 11.5,
  titleInActiveSize = 15,
  titleActiveColor = 'black',
  titleInactiveColor = 'dimgrey',
  textInputStyles = {},
  otherTextInputAttributes = {},
  value,
  attrName,
  updateMasterState,
  title,
}) {
  const [position] = useState(new Animated.Value(value ? 1 : 0));
  const [isFieldActive, setIsFieldActive] = useState(false);

  function _handleFocus() {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(position, {
        useNativeDriver: false,
        toValue: 1,
        duration: 150,
      }).start();
    }
  }

  function _handleBlur() {
    if (isFieldActive && !value) {
      setIsFieldActive(false);
      Animated.timing(position, {
        useNativeDriver: false,
        toValue: 0,
        duration: 150,
      }).start();
    }
  }

  function _onChangeText() {
    updateMasterState(attrName, updatedValue);
  }

  function _returnAnimatedTitleStyles() {
    return {
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInactiveColor,
    };
  }

  return (
    <View style={Styles.container}>
      <Animated.Text style={[Styles.titleStyles, _returnAnimatedTitleStyles()]}>
        {title}
      </Animated.Text>
      <TextInput
        value={value}
        style={[Styles.textInput, textInputStyles]}
        underlineColorAndroid="#000"
        onFocus={_handleFocus}
        onBlur={_handleBlur}
        onChangeText={_onChangeText}
        keyboardType={keyboardType}
        // {...otherTextInputProps}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginVertical: 4,
  },
  textInput: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'Avenir-Medium',
    color: 'black',
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 3,
    left: 4,
  },
});
