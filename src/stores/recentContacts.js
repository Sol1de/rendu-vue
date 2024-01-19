// stores/recentContacts.js
import { defineStore } from 'pinia';

export const useRecentContactsStore = defineStore('recentContacts', () => {
  const recentContacts = [];

  function addRecentContact(contact) {
    recentContacts.unshift(contact); // Ajoute le contact en tête de liste
  }

  return { recentContacts, addRecentContact };
});