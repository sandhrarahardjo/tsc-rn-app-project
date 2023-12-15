export const defaultSocialMedia: SocialMedia = {
  name: '',
  github: '',
  linkedin: '',
  instagram: '',
  email: '',
};

export const socialMediaPlatforms = [
  { key: 'name', icon: 'user' },
  { key: 'github', icon: 'github' },
  { key: 'linkedin', icon: 'linkedin' },
  { key: 'instagram', icon: 'instagram' },
  { key: 'email', icon: 'envelope' },
];

export interface SocialMedia {
  name: string;
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
}

export const defaultIsEditing = false;

export const defaultProfileImage =
  'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg';