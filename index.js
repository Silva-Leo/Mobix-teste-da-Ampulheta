//*function tamanhoAmpulheta -> TRATAR O DADO

//INPUT - recebe o dado escrito pelo usuário

//PROCESS - transforma em número, condição onde < 20 BREAK e > 20 -> OUTPUT

//OUTPUT - executa a prox function "montarAmpulheta' que recebe o dado processado ( transforamdo em número )

function tamanhoAmpulheta() {
    let areaConteudo = document.getElementById("conteudo")
    let input = document.getElementById("tamanhoAmpulheta")
    let areia = parseInt(input.value)
    if (areia < 20) {
        areaConteudo.innerHTML = 'Colocar um valor acima de 20';
        return
    } else {
        montarAmpulheta(areia)
    }
}

function montarAmpulheta(n) {

    let areaConteudo = "";
    let contador = 0;

    for (let i = 0; i <= n; i++) {

        contador++;

        if (i == 0) {
            areaConteudo += `<pre>${"#".repeat(n)}</pre>`//vai adicionar e repetir n vezes a string '#'
        } else if (i == 1) {
            areaConteudo += `<pre>#${"#" + " ".repeat(n - 4)} ##</pre>`
        } else if (i == 2) {
            areaConteudo += `<pre>#${"#" + " ".repeat(n - 4 - i)}# #</pre>`
        } else if (contador % 2 == 0 && contador < n - 3) {
            areaConteudo += `<pre>#${" ".repeat((contador / 2)) + "#" + " ".repeat(n - 4 - contador) + "#" + " ".repeat((contador / 2))}#</pre>`
        }

    }

    for (let i = n; i >= 0; i--) {
        contador--
        if (i == 0) {
            areaConteudo += `<pre>${"#".repeat(n - i)}</pre>`
        } else if (i == 1) {
            areaConteudo += `<pre>${"#".repeat(n)}</pre>`
        } else if (i == 2) {
            areaConteudo += `<pre># ${" ".repeat((i / 2) - 1) + "#".repeat(n - i - 2)} #</pre>`
        } else if (i % 2 == 0 && i < n - 3) {
            areaConteudo += `<pre>#${" ".repeat((contador / 2)) + "#".repeat((n - contador - 2)) + " ".repeat((contador / 2))}#</pre>`
        }
    }

    let ampulheta = document.getElementById("conteudo")
    ampulheta.innerHTML = areaConteudo;
}
