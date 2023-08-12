<template>
  <div>
    <div class="heading-with-button">
      <!-- <button id="user-list-new-button" type="button" class="btn btn-primary" @click="modal(true)">
        <span>Nuevo registro</span>
      </button> -->
      Formularios con limite
    </div>
    <div v-if="estatusmodal">
      <h3>Formulario: {{ dataFormulario.xmlFormId }}</h3>
      <h1 v-if="msjError != null">{{ msjError }}</h1>
      <input type="text" v-model="totalPermitidos" class="form-control">
      <button id="user-list-new-button" type="button" class="btn btn-primary" @click="modal(false)">
        <span>Cancelar</span>
      </button>
      <br>
      <button  type="button" class="btn btn-primary" @click="update()">
        <span>Guardar</span>
      </button>
      <br>
      <br>
      <br>
    </div>
    <table id="user-list-table" class="table">
      <thead>
        <tr>
          <th>Formulario</th>
          <th>Limite</th>
          <th class="actions">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr class="user-row" v-for="f of listaFormularios" :key="f.id">
          <td class="display-name">
            {{ f.xmlFormId }}
          </td>
          <td class="email"><span>{{ f.permitidos }}</span></td>
          <td class="user-role">
            <button id="user-list-new-button" type="button" class="btn btn-primary" @click="editar(f)">
              <span>Editar</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <loading :state="initiallyLoading" />
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Configuracion',
  data() {
    return {
      msj: 'hola',
      estatusmodal: false,
      listaFormularios:[],
      dataFormulario:{},
      msjError:null,
      totalPermitidos:0
    };
  },
  mounted() {
    console.log("configuracion");
    this.fetchData();
  },
  computed: {

  },
  methods: {
    modal(estatus) {
      this.estatusmodal = estatus;
    },
    editar(params){
      this.dataFormulario = {}
      this.modal(true);
      this.dataFormulario = params
      this.totalPermitidos = params.permitidos
      this.msjError = null
    },
    update(){
      if(this.dataFormulario.permitidos <= 0){ return this.msjError = "El valor debe ser mayor a 0" }
      axios.get(`https://greatdevservice.ddns.net/v1/users/formularios/${this.dataFormulario.id}/${this.totalPermitidos}`) 
      .then(response => 
      (
        console.log("update"),
        console.log(response.data),
        this.dataFormulario = {},
        this.modal(false),
        this.dataFormulario = {},
        this.msjError = null,
        this.totalPermitidos = 0,
        this.fetchData()
      
      ))
    },
    fetchData() {
      axios.get('https://greatdevservice.ddns.net/v1/users/formulariosAll')
      .then(response => 
      (
        console.log(response.data),
        this.listaFormularios = response.data[0]
      
      ))
    },
  }
};
</script>

<style lang="scss">
#user-list-table {
  table-layout: fixed;

  th.actions {
    width: 125px;
  }
}
</style>