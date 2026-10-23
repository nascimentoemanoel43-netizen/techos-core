import Cliente from './Cliente.js';
import Tecnico from './Tecnico.js';

export default class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        if (tipo === 'CLIENTE') {
            return new Cliente(
                dados.id,
                dados.nome,
                dados.email,
                dados.telefone
            );
        }

        if (tipo === 'TECNICO') {
            return new Tecnico(
                dados.id,
                dados.nome,
                dados.email,
                dados.especialidade
            );
        }

        throw new Error("Tipo de usuário desconhecido.");
    }
}