const { perfis } = require('../../data');


module.exports = {
  perfis() {
    return perfis
  },
  perfil(_, { id }) {
    return perfis.find(p => String(p.id) === id)
  }
}
