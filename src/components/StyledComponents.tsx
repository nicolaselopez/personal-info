import { styled } from 'nativewind';
import { View as BaseView, ScrollView as BaseScrollView } from 'react-native';
import {
  TextInput as BaseTextInput,
  Button as BaseButton,
  Text as BaseText,
} from 'react-native-paper';

export const View = styled(BaseView);
export const Text = styled(BaseText);
export const TextInput = styled(BaseTextInput);
export const Button = styled(BaseButton);
export const ScrollView = styled(BaseScrollView);
