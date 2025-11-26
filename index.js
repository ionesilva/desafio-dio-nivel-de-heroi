/*- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

1- Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let levels = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let limits = [1000, 2000, 5000, 7000, 8000, 9000, 10000] // limites superiores de cada nível

// Perguntar o nome primeiro
rl.question("Digite seu nome: ", nome => {

    // Depois perguntar a XP
    rl.question("Digite a quantidade de XP: ", valor => {
        let xp = parseInt(valor)
        let levelIndex = 0

        for (let i = 0; i < limits.length; i++) {
            if (xp > limits[i]) {
                levelIndex++
            } else {
                break
            }
        }

        console.log("O Herói de nome " + nome + " está no nível de " + levels[levelIndex])



        rl.close()
    })

})
