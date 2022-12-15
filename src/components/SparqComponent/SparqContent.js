import React from 'react';
import { ScrollView } from 'react-native';
import { GlobalStyles } from '../../helpers';

function Content(props) {
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      scrollEnabled={true}
      nestedScrollEnabled={true}
      style={[GlobalStyles.contentView, props.customStyles]}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          props.action && props.action();
        }
      }}
      scrollEventThrottle={400}>
      {props.children}
    </ScrollView>
  );
}

export default SparqContent = React.memo(Content);
