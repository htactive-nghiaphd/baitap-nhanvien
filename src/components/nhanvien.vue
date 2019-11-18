<template>
  <header>
      <h1><b>THÔNG TIN NHÂN VIÊN CÔNG TY</b></h1>
      <!-- <button class="btn btn-info"></button> -->
      <div>
          <table class="table table-bordered table-striped">
              <thead>
                  <tr>
                      <td>ID</td>
                      <td>NamSinh</td>
                      <td>Name</td>
                      <td>DiaChi</td>
                      <td>Tuoi</td>
                      <td>NoiSinh</td>
                      <td>CongTy</td> 
                      <td>Avatar</td>
                      <td>Action</td>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in items" v-bind:key="item.id">
                      <td>{{item.id}}</td>
                      <td>{{item.namsinh}}</td>
                      <td>{{item.HoTen}}</td>
                      <td>{{item.DiaChi}}</td>
                      <td>{{item.Tuoi}}</td>
                      <td>{{item.NoiSinh}}</td>
                      <td>{{item.Cty}}</td>
                      <td>{{item.Avatar}}</td>
                      <td class="text-center">
                          <button @click="EditElement()" class="btn btn-warning
                          btn-sm">Edit</button>
                          <button @click="remoteElement(item)" class="btn btn-danger
                          btn-sm">Delete</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      
  </header>
</template>
<script>
export default {
    props:{
        items:Array
    },
      methods: {
    remoteElement: function(item) {
      //this.items = this.items.filter(x => x.id !== id)
      // es-lint
      // eslint-disable-next-line no-console
      //console.log("remove");
      
      //this.items.filter(x => x.id === item);
      this.items.splice(this.items.indexOf(item),1);
    }
  }
}
</script>
<style>

</style>