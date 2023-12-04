import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Linking } from 'react-native';
import RegistrationStyles from './registration.styles';

const RegistrationScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = () => {
    if (!email.trim()) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');

    if (!password.trim()) {
      setPasswordError('Please enter a valid password.');
      return;
    }

    if (!/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(.{8,})/.test(password)) {
      setPasswordError(
        'Password must contain at least 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long.'
      );
      return;
    }

    setPasswordError('');

    Linking.openURL('https://www.jenius.com').catch((err) =>
      console.error('An error occurred: ', err)
    );
  };

  return (
    <ImageBackground
      source={{ uri: 'https://t4.ftcdn.net/jpg/06/00/61/39/360_F_600613991_wy7mmJihme0g9WKMOiCz8ubcJK98whzi.jpg' }}
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
              onChangeText={(text) => setEmail(text)}
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
              onChangeText={(text) => setPassword(text)}
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