const { usuarios, proximoId  } = require('../../data');
const indiceUsuario = require('../../helpes/indiceUsuario');

module.exports = {


  novoUsuario(_, {
    dados: { nome, email, idade }
  }) {
    const emailExistente = usuarios.some(u => u.email === email);

    if (emailExistente) {
      throw new Error('Email ja existente');
    }
    
    const novo = {
      id: proximoId(),
      nome,
      idade,
      email
    };

    usuarios.push(novo);
    return novo;
  },

  excluirUsuario(_, { filtro }) {
    const index = indiceUsuario(filtro);
    if (index < 0) {
      return null
    }
    const excluidos = usuarios.splice(index, 1);
    return excluidos ? excluidos[0] : null;
  },

  alterarUsuario(_, { filtro, dados}) {
    const index = indiceUsuario(filtro);
    if (index < 0) {
      return null
    }
    const usuario = {
      ...usuarios[index],
      ...dados
    }

    usuarios.splice(index, 1, usuario);

    return usuario;
  }
}