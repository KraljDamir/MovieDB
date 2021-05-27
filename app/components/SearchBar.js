import React, { useState, useEffect, createRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import DelayInput from 'react-native-debounce-input';

function SearchBar({ setTextInput, navigation }) {
  const [text, setText] = useState('');
  const inputRef = createRef();

  useEffect(() => {
    setTextInput(text);
  }, [text]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <MaterialCommunityIcons
          name="magnify"
          size={40}
          color={colors.primary}
          style={styles.searchIcon}
        />
        <DelayInput
          placeholder="Search"
          style={styles.inputText}
          inputRef={inputRef}
          delayTimeout={1000}
          minLength={3}
          value={text}
          onChangeText={setText}
        />

        {text != '' && (
          <TouchableWithoutFeedback onPress={() => setText('')}>
            <MaterialCommunityIcons
              name="close"
              size={30}
              color={colors.primary}
              style={styles.closeIcon}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
      {text != '' && (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  inputText: {
    fontSize: 18,
    flex: 1,
  },
  closeIcon: {
    paddingHorizontal: 10,
  },
  cancelText: {
    alignSelf: 'center',
    fontSize: 18,
    paddingRight: 10,
    paddingLeft: 10,
    color: colors.primary,
  },
});

export default SearchBar;
