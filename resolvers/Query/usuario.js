const { usuarios } = require('../../data');
const indiceUsuario = require('../../helpes/indiceUsuario');

module.exports = {
    usuarios() {
        return usuarios
    },
    usuario(_, { filtro }) {
        const index = indiceUsuario(filtro)
        return usuarios[index]
    },
}
