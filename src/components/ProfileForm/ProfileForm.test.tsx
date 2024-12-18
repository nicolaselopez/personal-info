import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProfileForm } from './ProfileForm';

describe('ProfileForm', () => {
  it('renders correctly', () => {
    const { getByText, getByLabelText } = render(<ProfileForm />);
    expect(getByText('Example Form Inputs')).toBeTruthy();
    expect(getByLabelText('First Name')).toBeTruthy();
    expect(getByLabelText('Last Name')).toBeTruthy();
  });

  it('toggles switch correctly', () => {
    const { getByRole } = render(<ProfileForm />);
    const switchElement = getByRole('switch');
    expect(switchElement.props.value).toBe(false);
    fireEvent.press(switchElement);
    expect(switchElement.props.value).toBe(true);
  });
});
