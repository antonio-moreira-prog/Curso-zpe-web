<template>
  <div class="q-ma-lg">
    <div class="text-h5">Listar Currículos</div>
  <div class="q-pa-md">

    <q-list bordered separator>

      <q-item clickable v-ripple v-for="curriculo in curriculos" :key="curriculo.id">
        <q-item-section>
          <q-item-label>
            {{ curriculo.first_name }}
            {{ curriculo.last_name }}
          </q-item-label>
          <q-item-label caption>{{ curriculo.email }}</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>

  </div>
  </div>
</template>

<script>
import { ref } from "vue";
//computer
  export default{
  setup() {
    const curriculos = ref([
      {id:1, first_name:'antonio', last_name:'Moreira', email:'antonio.moreira@email.com', confirmado:1},
      {id:2, first_name:'ana', last_name:'Maria', email:'ana@email.com', confirmado:1},
      {id:3, first_name:'Maria', last_name:'José', email:'maria@email.com', confirmado:1},
    ]);
    return{
      curriculos,
    };
  },
  };
</script>
<style lang="CSS" scoped></style>

