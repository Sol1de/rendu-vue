<!-- views/HomeView.vue -->
<script>
  import { useContactStore } from '@/stores/contact';
  import ContactList from '@/components/ContactList.vue';

  export default {
    name: 'HomeView',
    components: {
      ContactList,
    },
    setup() {
      const contacts  = useContactStore().contacts;
      return { contacts };
    },
  };
</script>

<template>
  <main>
    <TheWelcome />
    <ContactList :contacts="contacts" />
  </main>
</template>
