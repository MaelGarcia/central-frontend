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
        <tr class="user-row">
          <td class="display-name">
            formulario 1
          </td>
          <td class="email"><span>10</span></td>
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
      estatusmodal: false
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
      axios.get('https://greatdevservice.ddns.net/v1/formulariosAll')
      .then(response => 
      (console.log(response),
      console.log("respuesta")
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