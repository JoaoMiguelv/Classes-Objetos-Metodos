let person = {
    "firstName": 'João',
    "lastName": 'Miguel'
}

console.log(person.firstName)
console.log(person.lastName)

console.log(person['lastName'])

// Alterando o valor de uma propriedade
person.firstName = 'Janne'

// Criando nova chave e valor
person.age = 35
console.log(person)

// Deletando uma chave
delete person.age
console.log(person)

// Verificando se uma propriedade existe em um objeto, use o operador in
console.log('firstName' in person)
console.log('age' in person)

// Iterar sobre o objeto usando o loop for in:
for (let key in person) {
    console.log(key, person[key])
}

// Métodos: Possuem ações. São representadas por funções.
// Ex: adiciona a ação greet ao objeto person
person.greet = function () {
    console.log('Hello, World!')
}

person.greet()

// O valor "this" faz referência ao objeto que contém o método para que você possa acessar uma propriedade
// do objeto.
let person2 = {
    "firstName": 'João',
    "lastName": 'Miguel',
    "greet": function () {
        console.log('Hello, World!')
    },
    "greetFullName": function () {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person2.greetFullName())