import { styled } from 'nativewind';
import { View as BaseView, ScrollView as BaseScrollView } from 'react-native';
import {
  TextInput as BaseTextInput,
  Button as BaseButton,
  Text as BaseText,
} from 'react-native-paper';

// Styled View component using nativewind
export const View = styled(BaseView);

// Styled Text component using nativewind
export const Text = styled(BaseText);

// Styled TextInput component using nativewind
export const TextInput = styled(BaseTextInput);

// Styled Button component using nativewind
export const Button = styled(BaseButton);

// Styled ScrollView component using nativewind
export const ScrollView = styled(BaseScrollView);
