 import UsuarioFactory from './src/UsuarioFactory.js';
import OrdemServico from './src/OrdemServico.js';
import GerenciadorOS from './src/GerenciadorOS.js';

console.log('===== TechOS Core =====');

// Criar um cliente
const cliente = UsuarioFactory.criarUsuario('CLIENTE', {
    id: 101,
    nome: 'Ana',
    email: 'ana@email.com',
    telefone: '99999-9999'
});

// Criar um técnico
const tecnico = UsuarioFactory.criarUsuario('TECNICO', {
    id: 202,
    nome: 'Carlos',
    email: 'carlos@email.com',
    especialidade: 'Hardware'
});

// Criar uma ordem de serviço
const os1 = new OrdemServico(
    1,
    cliente,
    tecnico,
    'Troca de Tela'
);

// Utilizar o Singleton para gerenciar as ordens
const gerenciador = new GerenciadorOS();
const outroGerenciador = new GerenciadorOS();

console.log(
    'Singleton funcionando:',
    gerenciador === outroGerenciador
);

gerenciador.adicionarOS(os1);

// Exibir as ordens cadastradas
console.log('===== Ordens de Serviço =====');

for (const os of gerenciador.listarOS()) {
    console.log({
        id: os.id,
        cliente: os.cliente.nome,
        tecnico: os.tecnico.nome,
        descricao: os.descricao,
        status: os.status
    });
}