<template>
  <div class="q-ma-lg">
    <div class="text-h5">Listar Currículos</div>
  <div class="q-pa-md">

    <div class="q-gutter-md">
      <q-input v-model="form.first_name" label="Pirmeiro Nome"/>
      <q-input v-model="form.last_name" label="Sobrenome Nome"/>
      <q-input v-model="form.email" label="Email"/>
    </div>

    <div>
      <q-btn label="Enviar" type="" >

      </q-btn>
    </div>

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
import { ref, onMounted } from "vue";
import curriculoService from "src/services/CurriculoService";

  export default{
  setup() {
    const curriculos = ref([]);
    const form = ref({});

    const {listar, salvar} = curriculoService();

    const ListarCurriculos = async() => {
      curriculos.value = await listar();
    };

    const onSubmit = async() => {
      try{
        await salvar(form.value);
        listarCurriculos();
      }catch(error){
        console.log(error.message);
      }
    };

    onMounted(() => {
      ListarCurriculos();
    });

    return{
      curriculos,
      form,
    };
  },
  };
</script>
<style lang="CSS" scoped></style>

