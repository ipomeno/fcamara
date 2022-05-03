const api = require('./api');

const executor = {

  async listar() {
    let data = await api.listar();
    console.log(data);
  },

  async criar({nome, idade}) {
    let data = await api.criar({nome: nome, idade: idade});
    console.log(data);
  },

  async alterar() {
    let data = await api.alterar({id: 6, nome: 'Michele', idade: 27});
    console.log(data);
  },

  async apagar() {
    let data = await api.apagar({id: 6});
    console.log(data);
  }

};

module.exports = executor;