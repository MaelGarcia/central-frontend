<template>
    <div>
    <div class="heading-with-button">
      <button id="user-list-new-button" type="button" class="btn btn-primary"
        @click="modal(true)">
        <span>Nuevo registro</span>
      </button>
      Formularios con limite
    </div>
    <div v-if="estatusmodal">
        <h3>aqui formulario</h3>
        <button id="user-list-new-button" type="button" class="btn btn-primary"
        @click="modal(false)">
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
      <tbody >
    </tbody>
        <td>test</td>
        <td>test</td>
        <td>opciones</td>
    </table>
    <loading :state="initiallyLoading"/>
  </div>
</template>
<script>
export default {
  name: 'Configuracion',
  data() {
    return {
      msj: 'hola',
      estatusmodal:false
    };
  },
  mounted() {
    console.log("configuracion");
  },
  computed: {
    
  },
  methods: {
   modal(estatus) {
    this.estatusmodal= estatus;
   },
  }
};
</script>

<style lang="scss">
#user-list-table {
  table-layout: fixed;

  th.actions { width: 125px; }
}
</style>