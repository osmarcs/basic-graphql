let id = 0;
let idPerfil = 0

const proximoId = () => {
    return ++id
}

const proximoIdPerfil = () => {
  return ++idPerfil
}

const usuarios = [
    {
        id: proximoId(),
        nome: 'Alesk',
        email: 'alesk@test.com',
        idade: 20,
        perfil_id: 2,
        status: 'ATIVO'
    },
    {
        id: proximoId(),
        nome: 'Mya',
        email: 'mya@test.com',
        idade: 30,
        perfil_id: 1,
        status: 'INATIVO'
    },
    {
        id: proximoId(),
        nome: 'Suzu',
        email: 'suzu@test.com',
        idade: 19,
        perfil_id: 2,
        status: 'BLOQUEADO'
    }
];

const perfis = [
    {
        id: proximoIdPerfil(),
        tipo: 'Comum'
    },
    {
        id: proximoIdPerfil(),
        tipo: 'Administrador'
    }
];

module.exports = { usuarios, perfis, proximoId, proximoIdPerfil };
