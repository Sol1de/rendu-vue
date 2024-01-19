<script>
import { ref } from 'vue';
import { useRecentContactsStore } from '@/stores/recentContacts';

export default {
  props: {
    contacts: Array,
  },
  setup(props) {
    const recentContactsStore = useRecentContactsStore();

    const handleButtonClick = (contact) => {
      // Ajoutez le contact à la liste des contacts récents
      recentContactsStore.addRecentContact(contact);
      // Ajoutez votre logique ici (si nécessaire)
    };

    return {
      handleButtonClick,
    };
  },
};
</script>

<template>
  <div>
    <h2>Contact List</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.name">
        {{ contact.name }} - {{ contact.phoneNumber }}
        <button @click="handleButtonClick(contact)">🤙🏼</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: var(--vt-c-black-soft);
    padding: 10px;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
</style>