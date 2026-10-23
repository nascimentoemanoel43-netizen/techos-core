export default class OrdemServico {
    constructor(id, cliente, tecnico, descricao) {
        if (!cliente || !tecnico) {
            throw new Error("A ordem de serviço precisa de um cliente e um técnico.");
        }

        if (!descricao || descricao.trim() === "") {
            throw new Error("A descrição da ordem de serviço é obrigatória.");
        }

        this.id = id;
        this.cliente = cliente;
        this.tecnico = tecnico;
        this.descricao = descricao;
        this.status = "ABERTA";
    }
}