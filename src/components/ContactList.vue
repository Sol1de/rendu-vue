<script>
    export default {
      props: {
        contacts: {},
      },
    };
  </script>

<template>
    <div>
      <h2>Contact List</h2>
      <ul>
        <li v-for="contact in contacts" :key="contact.name">
          {{ contact.name }} - {{ contact.phoneNumber }}
        </li>
      </ul>
    </div>
  </template>