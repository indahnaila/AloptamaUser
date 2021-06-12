import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownField = ({label, items, onChangeValue, placeholder}) => {
  const _options = () => {
    if (items) {
      return items;
    }
    return [{label: '', value: ''}];
  };

  const onChange = val => {
    onChangeValue(val.value);
  };

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{label ?? ''}</Text>
      <Text style={{fontSize: 16}}>:</Text>
      <View style={styles.bisa}>
        <DropDownPicker
          items={_options()}
          placeholder={placeholder}
          containerStyle={{height: 35}}
          style={{backgroundColor: '#E8E8E8', fontSize: 16}}
          itemStyle={{justifyContent: 'flex-start'}}
          showArrowIcon={true}
          onChangeItem={onChange}
          dropDownStyle={{
            backgroundColor: '#E8E8E8',
            fontSize: 14,
            border: 'none',
          }}
        />
        <View style={{borderBottomWidth: 1, marginLeft: 8}} />
      </View>
    </View>
  );
};

export default DropdownField;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    width: 60,
  },
  bisa: {
    flex: 1,
  },
});