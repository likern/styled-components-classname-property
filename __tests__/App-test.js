/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {SvgIcon} from '@breeffy/react-native-svg-icons';
import {Tag} from '../Tag';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

describe('SvgIcon renders without errors', () => {
  test('when icon name is provided', () => {
    renderer.create(<SvgIcon icon={'users'} />);
  });
  test('when icon name and prefix are provided', () => {
    renderer.create(<SvgIcon icon={['fas', 'users']} />);
  });
});

describe('Tag component renders without errors', () => {
  test('when no arguments are provided', () => {
    renderer.create(<Tag />);
  });
  test('when only label is provided', () => {
    renderer.create(<Tag label="Family" />);
  });
  test('when only icon name is provided', () => {
    const result = renderer.create(<Tag iconName="home" />);
    // render(<Tag iconName='home' />);
  });
  test('when only prefix and icon name are provided', () => {
    renderer.create(<Tag iconName={['fas', 'home']} />);
  });
  test('when only style object is provided', () => {
    renderer.create(<Tag style={{marginLeft: 16, top: 0}} />);
  });
});
