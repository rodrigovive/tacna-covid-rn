import React from 'react';
import {render} from 'react-native-testing-library';
import Home from './Home';

// Note: test renderer must be required after react-native.

it('renders home correctly', () => {
  const {getByText} = render(<Home />);
  expect(getByText('Engine: Hermes')).toBeTruthy();
});
