<template>
  <div>
    <div class="heading-with-button">
      <button id="user-list-new-button" type="button" class="btn btn-primary" @click="modal(true)">
        <span>Nuevo registro</span>
      </button>
      Formularios con limite
    </div>
    <div v-if="estatusmodal">
      <h3>aqui formulario</h3>
      <button id="user-list-new-button" type="button" class="btn btn-primary" @click="modal(false)">
        <span>Cancelar</span>
      </button>
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
            {{ f.id }}
          </td>
          <td class="email"><span>{{ f.permitidos }}</span></td>
          <td class="user-role">
            opciomes
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
      listaFormularios:[]
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
    fetchData() {
      axios.get('https://greatdevservice.ddns.net/v1/users/formulariosAll')
      .then(response => 
      (
        console.log(response),
        this.listaFormularios = response
      
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