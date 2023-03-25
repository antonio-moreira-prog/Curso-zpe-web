import { api } from 'boot/axios';

export default function Api(url){

  const listar = async () => {
    try{
      const curriculos = await api.get(url);
      return curriculos.data;
    }catch(error){
      throw new Error(error.message);
  }
  }
  const recuperar = async (id) => {
    try{
      return await api.get(`${url}/${id}`);
    }catch(error){
      throw new Error(error.message);
    }
  }
  const salvar = async (objeto) => {
    try{
      return await api.post(url, objeto);
    }catch(error){
      throw Error(error.message);
    }
  }
  const atualizar = async (objeto) => {
    try{
      return await api.put(`${url}/${objeto.id}`);
    }catch(error){
      throw new Error(error.message);
    }
  }
  const deletar = async (objeto) => {
    try{
      return await api.delete(`${url}/${objeto.id}`);
    }catch(error){
      throw new Error(error.message);
    }
  }

  return {
    listar,
    recuperar,
    salvar,
    atualizar,
    deletar
  }
};
