import 'styled-components/macro';
import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {SvgIcon} from '@breeffy/react-native-svg-icons';
import {IconName} from '@fortawesome/fontawesome-svg-core';

export interface TagProps {
  label?: string;
  iconName?: IconName;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const Tag = ({label, iconName, iconColor, style}: TagProps) => {
  return (
    <View
      css={`
        align-self: flex-start;
        height: 44px;
        flex-direction: row;
        align-items: center;
        border-radius: 100px;
        border-width: 2px;
        border-color: rgba(68, 82, 95, 0.08);
      `}
      style={style}>
      {iconName !== undefined && (
        <SvgIcon
          css={`
            margin-left: 14px;
          `}
          color={`${iconColor !== undefined ? iconColor : '#262F56'}`}
          icon={['far', iconName]}
          size={24}
        />
      )}

      {label && (
        <Text
          css={`
            font-family: Gilroy-SemiBold;
            font-size: 17px;
            color: rgba(68, 82, 95, 1);
            text-align: ${iconName !== undefined ? 'left' : 'center'};
            text-align-vertical: top;
            margin-left: ${iconName !== undefined ? 4 : 0}px;
            margin-right: ${iconName !== undefined ? 20 : 0}px;
          `}>
          {label}
        </Text>
      )}
    </View>
  );
};

export default Tag;
