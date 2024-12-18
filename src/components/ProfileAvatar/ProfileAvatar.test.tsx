import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProfileAvatar } from './ProfileAvatar';

describe('ProfileAvatar', () => {
  it('renders correctly with given email', () => {
    const { getByText } = render(<ProfileAvatar email="test@example.com" onPress={() => {}} />);
    expect(getByText('User email')).toBeTruthy();
    expect(getByText('test@example.com')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<ProfileAvatar email="test@example.com" onPress={onPressMock} />);
    fireEvent.press(getByText('User email'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
