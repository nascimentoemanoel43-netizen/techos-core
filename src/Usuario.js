export default class Usuario {
    constructor(id, nome, email) {
        if (new.target === Usuario) {
            throw new Error("Não é possível instanciar a classe abstrata Usuario diretamente.");
        }

        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}