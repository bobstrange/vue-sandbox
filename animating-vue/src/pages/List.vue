<template>
  <div class="list">
    <input type="text" v-model="newContact" placeholder="Name" />
    <button @click="addContact">Add Contact</button>

    <ul>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContact: '',
      contacts: ['Beau Thabeast', 'Cindy Rella', 'Alice Vunderlind']
    }
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact)
      this.newContact = ''
    }
  }
}
</script>

<style scoped>
.list {
  padding: 2rem;
}

button {
  height: 3.2rem;
  width: 10rem;
  border-radius: 50px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: white;
  margin-left: 2rem;
  font-size: 1.4rem;
}

input {
  display: inline-block;
  width: 30%;
  height: 3rem;
  padding: 3px 1rem;
  font: 1.6em 'Avenir', Helvetica, sans-serif;
  border-radius: 50px;
}

::placeholder {
  color: #2c3e50;
}

ul {
  list-style-type: none;
  margin-top: 4rem;
}

li {
  font-size: 1.6rem;
}

li:not(:last-child) {
  margin-bottom: 1rem;
}

</style>
