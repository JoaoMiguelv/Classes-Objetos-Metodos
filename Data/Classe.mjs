export default class FormaGeometrica {
    // Atributos PRIVADOS (acessar somente dentro da classe)
    #base
    #altura
    #tipo

    constructor(base, altura, tipo) {
        this.#base = base
        this.#altura = altura
        this.#tipo = tipo
    }

    // Métodos PÚBLICOS (acessar atributos privados de fora da classe)
    get base() {
        return this.#base
    }

    get altura() {
        return this.#altura
    }

    get tipo() {
        return this.#tipo
    }

    // Inserir valores nos atributos privados de fora da classe
    set base(value) {
        this.#base = value
    }

    set altura(value) {
        this.#altura = value
    }

    set tipo(value) {
        this.#tipo = value
    }

    calcularArea() {
        switch(this.#tipo) {
            case 'R':
                return this.#base * this.#altura
            case 'T':
                return this.#base * this.#altura / 2
            case 'E':
                return ((this.#base/2) * (this.#altura/2)) * Math.PI
            default:
                return 'Tipo de forma inválida'
        }

    }

}