<script>
import ContactList from '@/components/ContactList.vue';
import { useContactStore } from '@/stores/contact';

export default {
  name: 'ContactsView',
  components: {
    ContactList,
  },
  setup() {
    const contacts = useContactStore().contacts;
    return { contacts };
  },
};
</script>

<template>
  <div class="contacts">
    <ContactList :contacts="contacts" />
  </div>
</template>

<style scoped>
.contacts {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
