import React, { useEffect, createRef, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function SearchBar({ onChange, onClear, value, navigation }) {
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClearTextPress = useCallback(() => {
    onClear();
  }, []);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <MaterialCommunityIcons
          name="magnify"
          size={40}
          color={colors.primary}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          style={styles.inputText}
          ref={inputRef}
          value={value}
          onChangeText={onChange}
        />

        {value !== '' && (
          <TouchableWithoutFeedback onPress={handleClearTextPress}>
            <MaterialCommunityIcons
              name="close"
              size={30}
              color={colors.primary}
              style={styles.closeIcon}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
      {value !== '' && (
        <TouchableWithoutFeedback onPress={handleBackPress}>
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

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  value: PropTypes.string,
};

SearchBar.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }),
};

export default SearchBar;
