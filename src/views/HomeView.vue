<!-- HomeView.vue -->
<script>
import { useRecentContactsStore } from '@/stores/recentContacts';
import ContactList from '@/components/ContactList.vue';

export default {
  name: 'HomeView',
  components: {
    ContactList,
  },
  setup() {
    const recentContactsStore = useRecentContactsStore();
    return { recentContacts: recentContactsStore.recentContacts };
  },
};
</script>

<template>
  <main>
    <TheWelcome />
    <ContactList :contacts="recentContacts" />
  </main>
</template>