import API from 'src/services/API';

export default function curriculoService(){


  const { listar, recuperar, salvar, atualizar, deletar } = API('curriculo');

  return {
    listar,
    recuperar,
    salvar,
    atualizar,
    deletar
  };

}
