<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleButtonClick(contact) {
      // Fonction appelée lorsqu'un bouton est cliqué
      alert('Vous appelez ' + contact.name);
      // Ajoutez votre logique ici
    },
  },
};
</script>

<template>
  <div>
    <h2>Contact List</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.name">
        {{ contact.name }} - {{ contact.phoneNumber }}
        <button @click="handleButtonClick(contact)">Appel</button>
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
    background-color: white;
    border: 0;
    cursor: pointer;
  }
</style>