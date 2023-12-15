import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './profile.styles';
import { defaultSocialMedia, SocialMedia, defaultIsEditing, defaultProfileImage, socialMediaPlatforms } from './ProfileConstants';

const EditProfileScreen = (): JSX.Element => {
  const [socialMedia, setSocialMedia] = useState<SocialMedia>(defaultSocialMedia);
  const [isEditing, setIsEditing] = useState<boolean>(defaultIsEditing);
  const [profileImage, setProfileImage] = useState<string>(defaultProfileImage);
  const [imageUrl, setImageUrl] = useState<string>(profileImage);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setProfileImage(imageUrl);
    setIsEditing(false);
  };

  const handleInputChange = (key: string, value: string) => {
    setSocialMedia({
      ...socialMedia,
      [key]: value,
    });
  };

  const generateEditInputFields = () => {
    return [
      { key: 'name', placeholder: 'Enter your name', value: socialMedia.name },
      { key: 'github', placeholder: 'Enter your github', value: socialMedia.github },
      { key: 'linkedin', placeholder: 'Enter your linkedIn', value: socialMedia.linkedin },
      { key: 'instagram', placeholder: 'Enter your instagram', value: socialMedia.instagram },
      { key: 'email', placeholder: 'Enter your email', value: socialMedia.email },
      { key: 'imageUrl', placeholder: 'Enter image URL', value: imageUrl },
    ];
  };

  const _renderEditComponent = () => {
    const inputFields = generateEditInputFields();

    return inputFields.map((field) => (
      <TextInput
        key={field.key}
        style={styles.input}
        placeholder={field.placeholder}
        value={field.value}
        onChangeText={(text) => {
          if (field.key === 'imageUrl') {
            setImageUrl(text);
          } else {
            handleInputChange(field.key, text);
          }
        }}
      />
    ));
  };

  const _renderViewComponent = () => (
    <>
      {socialMediaPlatforms.map((platform) => (
        <View style={styles.row} key={platform.key}>
          <Icon name={platform.icon} size={20} color='black' />
          <Text style={styles[platform.key as keyof SocialMedia]}>
            {socialMedia[platform.key as keyof SocialMedia]}
          </Text>
        </View>
      ))}
    </>
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Text style={styles.header}>Profile</Text>
      {isEditing ? _renderEditComponent() : _renderViewComponent()}
      <Button title={isEditing ? 'Save' : 'Edit Profile'} onPress={isEditing ? handleSaveProfile : handleEditProfile} />
    </View>
  );
};

export default EditProfileScreen;