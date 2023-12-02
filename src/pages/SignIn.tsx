import { useContext, useState } from 'react';
import { Text, View, TextInput, Button } from '../components/StyledComponents';
import { AuthContext } from '../providers/Auth';
import { HelperText } from 'react-native-paper';

export const SignIn = () => {
  const { login, isLoading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({} as { email?: string; password?: string });

  const validate = () => {
    // email regex validation
    const emailRegex = /\S+@\S+\.\S+/;
    const errors = {
      email: undefined as string | undefined,
      password: undefined as string | undefined,
    };

    if (!emailRegex.test(email)) {
      errors.email = 'Invalid email';
    }

    if (!password.length) {
      errors.password = 'Password is required';
    }

    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    setErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  return (
    <View className='flex-1 items-center justify-center bg-gray-100 w-full '>
      <View className='flex h-1/3 items-center justify-end w-full'>
        <Text className='text-2xl mb-10'>
          Sign In <Text className='text-2xl font-bold'>PersonalInfo</Text>
        </Text>
      </View>

      <View className='flex-0.5 h-2/3 items-center w-full'>
        <TextInput
          className='w-1/2'
          label='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <HelperText type='error' visible={!!errors.email}>
          {errors.email}
        </HelperText>
        <TextInput
          className='w-1/2'
          label='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <HelperText type='error' visible={!!errors.password}>
          {errors.password}
        </HelperText>
        <Button
          onPress={() => {
            if (validate()) {
              login(email, password);
            }
          }}
          loading={isLoading}
          mode='contained'
          className='mt-5'
        >
          Login
        </Button>
      </View>
    </View>
  );
};
