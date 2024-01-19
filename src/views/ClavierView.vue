<script>
import { ref } from 'vue';
import { useContactStore } from '@/stores/contact';
import { useRecentContactsStore } from '@/stores/recentContacts';

export default {
  name: 'ClavierViews',
  setup() {
    const currentNumber = ref('');
    const isNumberUnknown = ref(false);
    const contactStore = useContactStore();
    const recentContactsStore = useRecentContactsStore();

    const appendNumber = (num) => {
      currentNumber.value += num;
    };

    const submitNumber = () => {
      // Vérifiez si le numéro correspond à un contact existant
      const matchingContact = contactStore.contacts.find(
        (contact) => contact.phoneNumber === currentNumber.value
      );

      if (matchingContact) {
        // Ajoutez le contact à la liste des contacts récents
        recentContactsStore.addRecentContact(matchingContact);
        // Réinitialisez le numéro composé
        currentNumber.value = '';
        isNumberUnknown.value = false;
      } else {
        // Affichez une alerte si le numéro est inconnu
        alert('Numéro inconnu');
        isNumberUnknown.value = true;
      }
    };

    return { currentNumber, isNumberUnknown, appendNumber, submitNumber };
  },
};
</script>

<template>
  <div class="container">
    <div class="display">
      {{ currentNumber }}
    </div>
    <div class="keyboard-out">
      <div class="num num1" @click="appendNumber(1)"><p>1</p></div>
      <div class="num num2" @click="appendNumber(2)"><p>2</p></div>
      <div class="num num3" @click="appendNumber(3)"><p>3</p></div><br>
      <div class="num num4" @click="appendNumber(4)"><p>4</p></div>
      <div class="num num5" @click="appendNumber(5)"><p>5</p></div>
      <div class="num num6" @click="appendNumber(6)"><p>6</p></div><br>
      <div class="num num7" @click="appendNumber(7)"><p>7</p></div>
      <div class="num num8" @click="appendNumber(8)"><p>8</p></div>
      <div class="num num9" @click="appendNumber(9)"><p>9</p></div><br>
      <div class="num num9"><p>*</p></div>
      <div class="num num0" @click="appendNumber(0)"><p>0</p></div>
      <div class="num num9"><p>#</p></div>
      <div class="num numSubmit" @click="submitNumber"><p>✔️</p></div>
    </div>
  </div>
    <div v-if="isNumberUnknown" class="alert">Numéro inconnu</div>
</template>

<style>
*{
  margin:0px;
}

.container {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.1);
}

.display {
  display: flex;
  margin-top: 30%;
  justify-content: center;
  width: 100%;
  font-size: 25px;
}

.keyboard-out{ 
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  box-shadow: 10px 10px 20px -2px rgba(0,0,0,0.1)
}

.num{
  position:relative;
  width: 40px;
  height: 40px;
  display: inline-block;
  background: white;
  color: gray;
  font-family: helvetica;
  margin:5px;
  cursor: pointer;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
  border-radius: 5px;
  transition: 0.1s ease;
}

.num:hover{
  opacity: 0.8;
}

.num:active{
  box-shadow: 1px 1px 1px rgba(0,0,0,0.2);
}

.num p{
  position: absolute;
  opacity: 0.8;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  font-size: 25px;
  cursor: pointer;
}
</style>
