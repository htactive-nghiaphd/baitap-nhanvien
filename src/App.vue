<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- HelloWorld msg="Welcome to Your Vue.js App"/-->
    <table-nhanvien v-bind:items="items"></table-nhanvien>
    <modal to="/foo">Go to Foo</modal>
    <modal t0="/bar">Go to bar</modal>
    <router-link></router-link>
    <div>
      <b-button v-b-modal.modal-prevent-closing variant="success">New Add</b-button>
      <div class="mt-3">
        <div v-if="items.length === 0">--</div>
        <ul v-else class="mb-0 pl-3">
          <li v-for="item in items" :key="item.id"></li>
        </ul>
      </div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Nhan vien"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="Nam Sinh"
            label-for="namsinh-input"
            invalid-feedback="Name is required"
          >
            <b-form-input id="namsinh-input" required></b-form-input>
          </b-form-group>
          <b-form-group label="Ho ten" label-for="HoTen-input" invalid-feedback="Name is required">
            <b-form-input id="HoTen-input" required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Dia chi"
            label-for="DiaChi-input"
            invalid-feedback="Dia chi is required"
          >
            <b-form-input id="DiaChi-input" required></b-form-input>
          </b-form-group>
          <b-form-group label="Tuoi" label-for="Tuoi-input" invalid-feedback="Tuoi is required">
            <b-form-input id="Tuoi-input" required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Noi Sinh"
            label-for="NoiSinh-input"
            invalid-feedback="Noi sinh is required"
          >
            <b-form-input id="NoiSinh-input" required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Cong ty"
            label-for="Cty-input"
            invalid-feedback="cong ty is required"
          >
            <b-form-input id="Cty-input" required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Avatar"
            label-for="Avatar-input"
            invalid-feedback="Avatar is required"
          >
            <b-form-input id="Avatar-input" required></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      //submittedNames:[],
      fields: [
        "id",
        "namsinh",
        "HoTen",
        "DiaChi",
        "Tuoi",
        "NoiSinh",
        "Cty",
        "Avatar",
        "Action"
      ],
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

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
