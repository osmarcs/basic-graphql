const { usuarios  } = require('../data');

function  indiceUsuario(filtro) {
  if (!filtro) {
    return -1
  }
  const { id, email} = filtro;
  if (id) {
    return usuarios.findIndex(u => String(u.id) === id);
  } else {
    return usuarios.findIndex(u => u.email === email);
  }
}

module.exports = indiceUsuario;
