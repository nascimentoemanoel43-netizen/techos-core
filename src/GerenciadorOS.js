export default class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instance) {
            return GerenciadorOS.instance;
        }

        this.ordensServico = [];
        GerenciadorOS.instance = this;
    }

    adicionarOS(os) {
        this.ordensServico.push(os);
        console.log(`Ordem de Serviço #${os.id} registrada com sucesso!`);
    }

    listarOS() {
        return this.ordensServico;
    }

    buscarOS(id) {
        return this.ordensServico.find(os => os.id === id);
    }
}