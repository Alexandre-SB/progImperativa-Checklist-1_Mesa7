// Checkpoint1 - Mesa 7

// Alexandre
// Kantuta
// Gladston
// João Rocha
// Jessika

var tmpPadrao;

function microondas(prato, tempoUser) {

    if (prato == 1) {
        tmpPadrao = 10;
        if (tempoUser < tmpPadrao)
            console.log("Tempo insuficiente");
        if (tempoUser >= tmpPadrao && tempoUser < 2 * tmpPadrao)
            console.log("Prato pronto, bom apetite!!!");
        if (tempoUser > 3 * tmpPadrao)
            console.log("Kabumm");
        if (tempoUser > 2 * tmpPadrao)
            console.log("A comida queimou")
    }

    if (prato == 2) {
        tmpPadrao = 8;
        if (tempoUser < tmpPadrao)
            console.log("Tempo insuficiente");
        if (tempoUser >= tmpPadrao && tempoUser < 2 * tmpPadrao)
            console.log("Prato pronto, bom apetite!!!");
        if (tempoUser > 3 * tmpPadrao)
            console.log("Kabumm");
        if (tempoUser > 2 * tmpPadrao)
            console.log("A comida queimou")
    }

    if (prato == 3) {
        tmpPadrao = 15;
        if (tempoUser < tmpPadrao)
            console.log("Tempo insuficiente");
        if (tempoUser >= tmpPadrao && tempoUser < 2 * tmpPadrao)
            console.log("Prato pronto, bom apetite!!!");
        if (tempoUser > 3 * tmpPadrao)
            console.log("Kabumm");
        if (tempoUser > 2 * tmpPadrao)
            console.log("A comida queimou")
    }

    if (prato == 4) {
        tmpPadrao = 12;
        if (tempoUser < tmpPadrao)
            console.log("Tempo insuficiente");
        if (tempoUser >= tmpPadrao && tempoUser < 2 * tmpPadrao)
            console.log("Prato pronto, bom apetite!!!");
        if (tempoUser > 3 * tmpPadrao)
            console.log("Kabumm");
        if (tempoUser > 2 * tmpPadrao)
            console.log("A comida queimou")
    }

    if (prato == 5) {
        tmpPadrao = 8;
        if (tempoUser < tmpPadrao)
            console.log("Tempo insuficiente");
        if (tempoUser >= tmpPadrao && tempoUser < 2 * tmpPadrao)
            console.log("Prato pronto, bom apetite!!!");
        if (tempoUser > 3 * tmpPadrao)
            console.log("Kabumm");
        if (tempoUser > 2 * tmpPadrao)
            console.log("A comida queimou")
    }

    if (prato != 1 || prato != 2 || prato != 3 || prato != 4 || prato != 5)
        console.log("Prato inexistente");
}
microondas(1, 21);