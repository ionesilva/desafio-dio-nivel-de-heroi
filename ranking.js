/*# 2️⃣ Calculadora de partidas Rankeadas
## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)*/



function quantity(vitoria, derrota) {
    const saldo = vitoria - derrota;

    let nivel = "";

    if (vitoria < 10) {
        nivel = "Ferro";
    } else if (vitoria >= 11 && vitoria <= 20) {
        nivel = "Bronze";
    } else if (vitoria >= 21 && vitoria <= 50) {
        nivel = "Prata";
    } else if (vitoria >= 51 && vitoria <= 80) {
        nivel = "Ouro";
    } else if (vitoria >= 81 && vitoria <= 90) {
        nivel = "Diamante";
    } else if (vitoria >= 91 && vitoria <= 100) {
        nivel = "Lendário";
    } else if (vitoria >= 101) {
        nivel = "Imortal";
    }

    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}.`);

    return { saldo, nivel };
}


function entradaDeDados() {
    const rl = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite a quantidade de vitórias: ", valorV => {
        const qtdVitoria = parseInt(valorV);

        rl.question("Digite a quantidade de derrotas: ", valorD => {
            const qtdDerrota = parseInt(valorD);

            // Agora SIM chamamos a função com os valores corretos
            const resultado = quantity(qtdVitoria, qtdDerrota);

            rl.close();
        });
    });
}

entradaDeDados();
