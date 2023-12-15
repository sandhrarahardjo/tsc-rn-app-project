import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Linking } from 'react-native';
import RegistrationStyles from './registration.styles';
import { registrationBackgroundImageUrl } from './ImageConstants';
import { isEmailValid, isPasswordValid } from './password.utils';

const RegistrationScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    if (!email.trim() || !isEmailValid(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');

    if (!password.trim() || !isPasswordValid(password)) {
      setPasswordError(
        'Password must contain at least 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long.'
      );
      return;
    }

    setPasswordError('');

    Linking.openURL('https://www.jenius.com').catch((err) =>
    setPasswordError('An error occurred while opening the link. Please try again.')
    );
  };

  return (
    <ImageBackground
      source={{ uri: registrationBackgroundImageUrl }}
      style={RegistrationStyles.backgroundImage}
    >
      <View style={RegistrationStyles.container}>
        <Text style={RegistrationStyles.heading}>Registration Form</Text>
        <View style={RegistrationStyles.form}>
          <View style={RegistrationStyles.inputContainer}>
            <Text style={RegistrationStyles.label}>Email:</Text>
            <TextInput
              style={RegistrationStyles.input}
              keyboardType='email-address'
              value={email}
              onChangeText={handleEmailChange}
              autoCapitalize='none'
              autoCorrect={false}
            />
            <Text style={RegistrationStyles.errorText}>{emailError}</Text>
          </View>

          <View style={RegistrationStyles.inputContainer}>
            <Text style={RegistrationStyles.label}>Password:</Text>
            <TextInput
              style={RegistrationStyles.input}
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
            />
            <Text style={RegistrationStyles.errorText}>{passwordError}</Text>
          </View>
          <TouchableOpacity style={RegistrationStyles.button} onPress={handleSubmit}>
            <Text style={RegistrationStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;