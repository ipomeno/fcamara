const request = require('request');

const api = {

  urlBase: 'http://localhost:8081/pessoa',

  listar() {
    return new Promise((resolve, reject) => {
      request.get(`${this.urlBase}`, (error, _response, body) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(JSON.parse(body));
      });
    });
  },

  criar({nome, idade}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {'content-type': 'application/json'},
        uri: `${this.urlBase}`,
        body: JSON.stringify({nome: nome, idade: idade})
      };

      request.post(config, (error, _response, body) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(JSON.parse(body));
      });
    });
  },

  alterar({id, nome, idade}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {'content-type': 'application/json'},
        uri: `${this.urlBase}/${id}`,
        body: JSON.stringify({nome: nome, idade: idade})
      };

      request.put(config, (error, _response, body) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(JSON.parse(body));
      });
    });
  },

  apagar ({id}) {
    return new Promise((resolve, reject) => {
      request.delete(`${this.urlBase}/${id}`, (error, _response, body) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(JSON.parse(body));
      });
    });
  }

};

module.exports = api;