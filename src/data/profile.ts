import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Ronnie',
  lastName: 'Lutalo',
  position: 'Software Engineer | 2D/3D Artist | Filmmaker',
  summary: [
    '"Always have version 1.0"',
  ],
  avatar: {
    srcPath: 'profile/avatar_500x500.jpg',
    caption: 'Ronnie Lutalo',
  },
  location: {
    name: 'Kampala, Uganda',
  },
  tags: [
    { name: '.NET' },
    { name: 'C#' },
    { name: 'TypeScript' },
  ],
  socialLinks,
};