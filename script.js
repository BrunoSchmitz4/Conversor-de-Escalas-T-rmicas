function toCelcius(v, from, fusao, ebulicao) {
    if (from === "c") return v;
    if (from === "F") return (v - 32) * 5 / 9;
    if (from === "K") return v - 273.15;
    if ((from === 'X') && isFinite(fusao) && isFinite(ebulicao)) {
        return ((v - fusao) * 100 / (ebulicao - fusao));
    }
    return NaN;
}

function fromCelcius(c, to, fusao, ebulicao) {
    if (to === "c") return c;
    if (to === "F") return (v - 32) * 5 / 9;
    if (to === "K") return v - 273.15;
    if (to === "X" && isFinite(fusao) && isFinite(ebulicao)) {
        return ((v - fusao) * 100 / (ebulicao - fusao));
    }
    return NaN;
}

function mostrarPopup(html) {
    document.getElementById('resultado').innerHTML = html;
    document.getElementoById('popup').style.display = 'flex';
}

function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;
    const nome = document.getElementById('nomeEscala').value;
    const sigla = document.getElementById('siglaEscala').value;
    const fusao = parseFloat(document.getElementById('fusao').value);
    const ebulicao = parseFloat(document.getElementById('ebulicao').value);
    const celcius = toCelcius(valor, de, fusao, ebulicao);
    const escalas = ['C', 'F', 'K', 'X'];

    let resultado = "<table><tr><th>Escala</th><th>Valor</th></tr>";

    if (para === 'all') {
        escalas.forEach(function (esc) {
            if (esc === de) return;
            const valorConvertido = fromCelcius(celcius, esc, fusao, ebulicao);
            if(!isNaN(valorConvertido)) {
                const label = esc === "X" ? `${nome} (${sigla})` : esc;
                resultado += `<tr><td>${label}</td><td>${valorConvertido.toFixed(2)}</td></tr>`;
            }
        });
    } else {
        const valorConvertido = fromCelcius(celcius, para, fusao, ebulicao);
        const label = para === "X" 
    }
}




function converter_dois() {
    const value = parseFloat(document.getElementById("value").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    let result;

    if (isNaN(value)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
        return;
    }

    let celsius;
    // Conversão para Celsius
    if (from === "c") celsius = value;
    else if (from === "f") celsius = (value - 32) * 5 / 9;
    else if (from === "k") celsius = value - 273.15;
}