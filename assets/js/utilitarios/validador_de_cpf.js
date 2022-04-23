function TestaCPF(strCPF) {
    let soma;
    let resto;
    soma = 0;
    if(strCPF == "00000000000") {
        return false
    };
    for(let i=1;i<=9;i++) {
        soma = soma + parseInt(strCPF.substring(i-1, i))*(11-i);
    }
    resto = (soma*10)%11;
    if((resto == 10)||(resto == 11)) {
        resto = 0;
    }
    if(resto != parseInt(strCPF.substring(9, 10))) {
        return false;
    }
    soma = 0;
    for(let i=1;i<=10;i++) {
        soma = soma + parseInt(strCPF.substring(i-1, i))*(12-i);
    }
    resto = (soma*10)%11;
    if((resto == 10)||(resto == 11)) {
        resto = 0;
    }
    if(resto != parseInt(strCPF.substring(10, 11))) {
        return false;
    }
    return true;
}
function cpfCalc(){
    if(document.getElementById("cpf").value == "") {
        document.getElementById("result").innerHTML="incira um cpf";
    } else {
        if(TestaCPF(document.getElementById("cpf").value)) {
            document.getElementById("result").innerHTML="cpf é valido";
        } else {
            document.getElementById("result").innerHTML="cpf é invalido";
        }
    }
}