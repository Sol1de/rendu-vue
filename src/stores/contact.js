// stores/contact.js
import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact', () => {
  const contacts = [
    { name: 'Élise Martin', phoneNumber: '06 12 34 56 78' },
    { name: 'Thomas Dupont', phoneNumber: '07 23 45 67 89' },
    { name: 'Camille Lambert', phoneNumber: '06 34 56 78 90' },
    { name: 'Antoine Lefevre', phoneNumber: '07 45 67 89 01' },
    { name: 'Charlotte Dubois', phoneNumber: '06 56 78 90 12' },
    { name: 'Lucas Moreau', phoneNumber: '07 67 89 01 23' },
    { name: 'Emma Girard', phoneNumber: '06 78 90 12 34' },
    { name: 'Louis Thomas', phoneNumber: '07 89 01 23 45' },
    { name: 'Chloé Lemoine', phoneNumber: '06 90 12 34 56' },
    { name: 'Hugo Renault', phoneNumber: '07 01 23 45 67' },
    { name: 'Léa Leroux', phoneNumber: '06 12 34 56 78' },
    { name: 'Gabriel Lefevre', phoneNumber: '07 23 45 67 89' },
    { name: 'Maëlle Petit', phoneNumber: '06 34 56 78 90' },
    { name: 'Maxime Lemoine', phoneNumber: '07 45 67 89 01' },
    { name: 'Léna Moreau', phoneNumber: '06 56 78 90 12' },
    { name: 'Jules Girard', phoneNumber: '07 67 89 01 23' },
    { name: 'Louise Renault', phoneNumber: '06 78 90 12 34' },
    { name: 'Raphaël Lefevre', phoneNumber: '07 89 01 23 45' },
    { name: 'Inès Lemoine', phoneNumber: '06 90 12 34 56' },
    { name: 'Nathan Renault', phoneNumber: '07 01 23 45 67' },
  ];

  return { contacts };
}); 