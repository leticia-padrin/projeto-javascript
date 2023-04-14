//atividade 1 //

function validarDados() {
    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;
    let erro = document.getElementById('mensagem-erro');
    erro.innerHTML = '';
    erro.style.display = 'none';



    if (nome.length < 5) {
        erro.innerHTML = "O campo nome não pode ter menos que 5 caracteres!";
        erro.style.display = 'block'
        frmRegistro.inCli.focus();
        return false;
    }

    if (data < 0) {
        erro.innerHTML = "Data incorreta";
        erro.style.display = 'block'
        frmRegistro.inData.focus();
        return false;
    }

    if (telefone == '') {
        erro.innerHTML = "O campo do telefone não pode ser vazio!";
        erro.style.display = 'block'
        frmRegistro.inFone.focus();
        return false;
    }

    if (telefone <= 0) {
        erro.innerHTML = "O número de telefone é invalido!";
        erro.style.display = 'block'
        frmRegistro.inFone.focus();
        return false;
    }

    if (email.trim() == '') {
        erro.innerHTML = "O e-mail não pode ser vazio!";
        erro.style.display = 'block'
        frmRegistro.inMail.focus();
        return false;
    }

    if (email.length < 5) {
        erro.innerHTML = "O e-mail tem que possuir mais de 5 caracteres";
        erro.style.display = 'block'
        frmRegistro.inMail.focus();
        return false;
    }

    if (produto.trim() == '') {
        erro.innerHTML = "O campo produto não pode ser vazio!";
        erro.style.display = 'block'
        frmRegistro.inProd.focus();
        return false;
    }

    if (produto.length < 5) {
        erro.innerHTML = "O campo produto não pode ter menos de 5 caracteres";
        erro.style.display = 'block'
        frmRegistro.inProd.focus();
        return false;
    }

    if (quantidade == '') {
        erro.innerHTML = "O campo quantidade não pode ser vazio";
        erro.style.display = 'block'
        frmRegistro.inQtd.focus();
        return false;
    }

    if (quantidade < 0) {
        erro.innerHTML = "A quantidade não pode ser negativa ou zero";
        erro.style.display = 'block'
        frmRegistro.inQtd.focus();
        return false;
    }

    if (valorUni == '') {
        erro.innerHTML = "O campo valor unitario não pode ser vazio";
        erro.style.display = 'block'
        frmRegistro.inQtd.focus();
        return false;
    }

    if (valorUni < 0) {
        erro.innerHTML = "O valor unitario não pode ser negativa ou zero";
        erro.style.display = 'block'
        frmRegistro.inQtd.focus();
        return false;
    }
}

//ATIVIDADE 2//

function atualizarDados() {
    const quantidade = document.getElementById("inQtdImg").value;
    let canvas = document.getElementById("canvas");
    let elemento = '<img id= "logo1" src= "img/logo.png" alt "Logotipo SENAI" />';
    canvas.innerHTML = ''

    for (let i = 0; i < quantidade; i++) {
        canvas.innerHTML += elemento
    }

}


//ATIVIDADE 3//

function acender() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    let botao = document.getElementById('btnEnviar');

    if (arquivo == 'acesa.jpg' || arquivo == '') {
        imagem.src = 'img/apagada.jpg';
        botao.textContent = 'Acender';
    }
    else {
        imagem.src = 'img/acesa.jpg';
        botao.textContent = 'Apagar';
    }


}

//ATIVIDADE 4//
function calcular() {


    let valor = inValorPedido.value;
    let percDesc = inPercDesc(valor);
    let desc = inValDesc(valor);
    let liquido = inValFinal(valor, percDesc);

    document.getElementById('inPercDesc').value = percDesc;
    document.getElementById('inValDesc').value = desc;
    document.getElementById('inValFinal').value = liquido;
}

function inValFinal(valorCompra, percDesconto) {
    let valorDesc = valorCompra * percDesconto / 100;
    let valLiq = valorCompra - valorDesc;
    return valLiq;
}

function inPercDesc(valorCompra) {
    let desconto = 0;

    if (valorCompra >= 500)
        desconto = 50 / 100;

    if (valorCompra >= 1000)
        desconto = 80 / 100;

    if (valorCompra >= 1500)
        desconto = 100 / 100;

    if (valorCompra >= 2000)
        desconto = 150 / 100;
    return desconto;
}

function inValDesc(valorCompra) {
    let desconto = 0;

    if (valorCompra >= 500)
        desconto = valorCompra * 0.5 / 100;

    if (valorCompra >= 1000)
        desconto = valorCompra * 0.8 / 100;

    if (valorCompra >= 1500)
        desconto = valorCompra * 1 / 100;

    if (valorCompra >= 2000)
        desconto = valorCompra * 1.5 / 100;
    return desconto;
}
