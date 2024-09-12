function validarDados(idade, nome) {
    if (typeof idade !== 'number' || idade < 0) {
        throw 'Erro'
    }
    console.log('Acesso permitido');
}

var idade, nome
nome = prompt('DIgite seu nome: ')
idade = Number(prompt('Digite sua idade'))

try {
    validarDados(nome, idade)
} catch (erro) {
    console.error('Ocorreu um erro', erro);
}