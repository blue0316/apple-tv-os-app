import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../helpers';

function Alert(props) {
  return (
    <Text
      style={[
        styles.txt,
        {
          backgroundColor: props.type == 'error' ? Colors.red : Colors.success,
        },
      ]}>
      {props.message}
    </Text>
  );
}

export default SparqAlert = React.memo(Alert);

const styles = StyleSheet.create({
  txt: {
    textAlign: 'center',
    color: Colors.white,
    padding: 10,
  },
});
