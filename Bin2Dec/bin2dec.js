let inputBin = document.querySelector('#bin');
let inputDec = document.querySelector('#dec');
let button = document.querySelector('#botao');

button.onclick = () => {
    let bin = inputBin.value;
    inputDec.value = bin2dec(bin);
}

function bin2dec(bin) {
    if (validate(bin)) {
        let dec = 0;
        for (let c = 0; c < bin.length; c++)
            dec += Math.pow(2, c) * bin[bin.length - c - 1];
        return dec;
    }
    return "";
}

function validate(str) {
    if (str.length <= 8) {
        var arr = str.split("");
        for (let i = 0; i < arr.length; i++)
            if (arr[i] !== '1' && arr[i] !== '0') {
                alert('Erro: É aceito somente dígitos 1 e 0.');
                return false;
            }
        return true;
    }
    alert('Erro: O tamanho do binário deve ser no máximo 8.');
    return false;
}