<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- HelloWorld msg="Welcome to Your Vue.js App"/-->
    <table-nhanvien ></table-nhanvien>
    <b-table :items="items" striped hoverstriped hover :fields="fields"  >
      <template v-slot:cell(Action)="row">
        <b-button size="sm" @click="remoteElement" class="mr-2" variant="success">
            {{ items.id }}
            {{ items.namsinh }}
            {{ items.HoTen }}
            {{ items.DiaChi }}
            {{ items.Tuoi }}
            {{ items.NoiSinh }}
            {{ items.Cty }}
            {{items.Avatar}}Delete            
        </b-button>
      </template>
    </b-table>
    <button v-on:click="closeModal()">Them moi</button> 
    <Map v-if="showModal" @close="showModal = false">
        <h3 slot="header">Them nhan vien</h3>
    </Map>    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      showModal: false,
      fields: ['id', 'namsinh', 'HoTen','DiaChi',,'Tuoi','NoiSinh','Cty','Avatar', 'Action'],
      items: [
        {
          id: 1,
          namsinh: 1997,
          HoTen: "Nghĩa",
          DiaChi: "TPDaNang",
          Tuoi: 22,
          NoiSinh: "QuangNam",
          Cty: "HTActive",
          Avatar: true
        },
        {
          id: 2,
          namsinh: 1997,
          HoTen: "Huy",
          DiaChi: "Quảng Ninh",
          Tuoi: 22,
          NoiSinh: "Quảng Ninh",
          Cty: "HTActive",
          Avatar: false
        },
        {
          id: 3,
          namsinh: 1997,
          HoTen: "Cường",
          DiaChi: "Hà Giang",
          Tuoi: 23,
          NoiSinh: "KomTum",
          Cty: "HTActive",
          Avatar: true
        },
        {
          id: 4,
          namsinh: 1997,
          HoTen: "Quốc",
          DiaChi: "Khánh Hòa",
          Tuoi: 25,
          NoiSinh: "Huế",
          Cty: "HTActive",
          Avatar: true
        },
        {
          id: 5,
          namsinh: 1997,
          HoTen: "Anh",
          DiaChi: "Huế",
          Tuoi: 22,
          NoiSinh: "QuangNam",
          Cty: "HTActive",
          Avatar: false
        },
        {
          id: 6,
          namsinh: 1997,
          HoTen: "Linh",
          DiaChi: "Quảng Ngãi",
          Tuoi: 21,
          NoiSinh: "QuangNam",
          Cty: "HTActive",
          Avatar: true
        }
      ]
    };
  },
  methods:{
      remoteElement(id) {
        this.items.splice(id,1);
    },
    closeModal() {
      this.$emit('closeModal');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
