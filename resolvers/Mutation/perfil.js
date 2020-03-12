const { perfis, proximoIdPerfil  } = require('../../data');

function indicePerfil({ id }) {
  return perfis.findIndex(p => String(p.id) === id)
}

module.exports = {

  novoPerfil(_, { dados }) {
    const perfilExistente = perfis.some(p => p.tipo === dados.tipo);
    if (perfilExistente) {
      throw new Error('Perfil ja existe')
    }
    const perfil = {
      id: proximoIdPerfil(),
      ...dados
    };

    perfis.push(perfil);
    return perfil;
  },

  excluirPerfil(_, { filtro }) {
    const index = indicePerfil(filtro);
    if (index < 0) {
      return null;
    }
    const excluidos = perfis.splice(index, 1);
    return excluidos ? excluidos[0] : null;
  },

  alterarPerfil(_, { filtro, dados}) {
    const index = indicePerfil(filtro);
    if (index < 0) {
      return null;
    }
    const perfil = {
      ...perfis[index],
      ...dados,
    }
    perfis.splice(index, 1, perfil);
    return perfil;
  }

}
