// ==========================================
// 1. PADRÃO SINGLETON (GerenciadorOS)
// ==========================================
class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instance) {
            return GerenciadorOS.instance;
        }
        this.ordensServico = [];
        GerenciadorOS.instance = this;
        console.log("[SINGLETON] Instância única do GerenciadorOS inicializada.");
    }

    adicionarOS(os) {
        this.ordensServico.push(os);
        console.log(`[SISTEMA] Ordem de Serviço #${os.id} registrada com sucesso!`);
    }

    listarOS() {
        console.log("[SISTEMA] Lista de OS ativas:");
        console.log(this.ordensServico);
    }
}

// ==========================================
// 2. MODELAGEM POO (Classes de Usuários)
// ==========================================
class Usuario {
    constructor(id, nome, email) {
        if (this.constructor === Usuario) {
            throw new Error("Não é possível instanciar uma classe abstrata Usuario diretamente.");
        }
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class Cliente extends Usuario {
    constructor(id, nome, email, telefone) {
        super(id, nome, email);
        this.telefone = telefone;
    }
}

class Tecnico extends Usuario {
    constructor(id, nome, email, especialidade) {
        super(id, nome, email);
        this.especialidade = especialidade;
    }
}

// ==========================================
// 3. CLASSE DE DOMÍNIO (OrdemServico)
// ==========================================
class OrdemServico {
    constructor(id, cliente, tecnico, descricao) {
        this.id = id;
        this.cliente = cliente;
        this.tecnico = tecnico;
        this.status = "ABERTA";
        this.descricao = descricao;
    }
}

// ==========================================
// 4. PADRÃO FACTORY METHOD (UsuarioFactory)
// ==========================================
class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        if (tipo === 'CLIENTE') {
            console.log(`[FACTORY] Criando Usuário Tipo: CLIENTE... -> Objeto 'Cliente' criado (ID: ${dados.id}, Nome: ${dados.nome}).`);
            return new Cliente(dados.id, dados.nome, dados.email, dados.telefone);
        } else if (tipo === 'TECNICO') {
            console.log(`[FACTORY] Criando Usuário Tipo: TECNICO... -> Objeto 'Tecnico' criado (ID: ${dados.id}, Nome: ${dados.nome}).`);
            return new Tecnico(dados.id, dados.nome, dados.email, dados.especialidade);
        }
        throw new Error("Tipo de usuário desconhecido.");
    }
}

// ==========================================
// 5. EXECUÇÃO DO SISTEMA
// ==========================================
const gerenciador = new GerenciadorOS();

const clienteAna = UsuarioFactory.criarUsuario('CLIENTE', {
    id: 101, 
    nome: 'Ana', 
    email: 'ana@email.com', 
    telefone: '99999-9999'
});

const tecnicoCarlos = UsuarioFactory.criarUsuario('TECNICO', {
    id: 202, 
    nome: 'Carlos', 
    email: 'carlos@email.com', 
    especialidade: 'Hardware'
});

const os1 = new OrdemServico(1, clienteAna.nome, tecnicoCarlos.nome, 'Troca de Tela');
gerenciador.adicionarOS(os1);

gerenciador.listarOS();