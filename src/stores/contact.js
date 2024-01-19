// stores/contact.js
import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact', () => {
  

  return { contacts };
}); 

const contacts = [
    { name: 'Élise Martin', phoneNumber: '0612345678' },
    { name: 'Thomas Dupont', phoneNumber: '0723456789' },
    { name: 'Camille Lambert', phoneNumber: '0634567890' },
    { name: 'Antoine Lefevre', phoneNumber: '0745678901' },
    { name: 'Charlotte Dubois', phoneNumber: '0656789012' },
    { name: 'Lucas Moreau', phoneNumber: '0767890123' },
    { name: 'Emma Girard', phoneNumber: '0678901234' },
    { name: 'Louis Thomas', phoneNumber: '0789012345' },
    { name: 'Chloé Lemoine', phoneNumber: '0690123456' },
    { name: 'Hugo Renault', phoneNumber: '0701234567' },
    { name: 'Léa Leroux', phoneNumber: '0612345678' },
    { name: 'Gabriel Lefevre', phoneNumber: '0723456789' },
    { name: 'Maëlle Petit', phoneNumber: '0634567890' },
    { name: 'Maxime Lemoine', phoneNumber: '0745678901' },
    { name: 'Léna Moreau', phoneNumber: '0656789012' },
    { name: 'Jules Girard', phoneNumber: '0767890123' },
    { name: 'Louise Renault', phoneNumber: '0678901234' },
    { name: 'Raphaël Lefevre', phoneNumber: '0789012345' },
    { name: 'Inès Lemoine', phoneNumber: '0690123456' },
    { name: 'Nathan Renault', phoneNumber: '0701234567' },
  ];