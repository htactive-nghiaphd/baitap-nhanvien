<template>
        <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                default header
              </slot>
            </div>
            <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="input-group-1"
                        label="namsinh:"
                        label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="form.namsinh"
                          type="namsinh"
                          required
                          placeholder="Nam sinh"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group id="input-group-1"
                        label="HoTen:"
                        label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="form.HoTen"
                          type="HoTen"
                          required
                          placeholder="Ho ten"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group id="input-group-1"
                        label="DiaChi:"
                        label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="form.DiaChi"
                          type="DiaChi"
                          required
                          placeholder="Dia chi"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group id="input-group-1"
                        label="Tuoi:"
                        label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="form.Tuoi"
                          type="Tuoi"
                          required
                          placeholder="Tuoi"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group id="input-group-1"
                        label="NoiSinh:"
                        label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="form.NoiSinh"
                          type="DiaChi"
                          required
                          placeholder="Noi sinh"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group id="input-group-1"
                        label="Cty:"
                        label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="form.Cty"
                          type="Cty"
                          required
                          placeholder="Cong ty"
                        ></b-form-input> 
                    </b-form-group>
                    <b-form-group id="input-group-1"
                        label="Avatar:"
                        label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="form.Avatar"
                          type="Avatar"
                          required
                          placeholder="Avatar"
                        ></b-form-input> 
                    </b-form-group>
                    <b-button size="sm" @click="$emit('close')" class="mr-2" variant="primary">Save</b-button>
                </b-form>
    </div>  
          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    methods: {
      addElement (id) {
        this.$emit('addElement')
      }
    }
  }
</script>