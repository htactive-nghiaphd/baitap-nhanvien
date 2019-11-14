<template>
  <header>
      <!--  <input type="text" v-model="name">
        <p>{{name | afterChange}}</p> -->
    <!--<div class="list-user">
        <div v-for="user in listUser" :key="user.id">
            <div @click="handEvent(user.id)" >{{user.id}}</div>
            <div>{{user.email}}</div>
            <div>{{user.active}}</div>
        </div>
    </div> -->
    sd
  </header>
</template>
<script>
export default {
  props:{
    listUser:Array,
  },
  methods: {
    handEvent: function(id) {
       this.$emit('sukien', id)
    },
  }
}
</script>
<style>
td {
  border: 1px solid black;
}
</style>