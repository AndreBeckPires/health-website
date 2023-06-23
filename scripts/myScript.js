function getRadio(name){//essa função recebe o id como parametro percorre as opçoes do radio buttons pra identificar qual esta seleciona 
    let elements = document.getElementsByName(name);

    for (i = 0; i < elements.length; i++) {
        if (elements[i].checked)
           return elements[i].value;
    }
}

function getCheck(name){//esse fuçao recebe o nome como parametro e percorre todos os elementos para descobrir quais estao selecionados e adiciona utilizando +=
    let inputElements = document.getElementsByName(name);
    let checkedValue = "";
    for(i=0; i < inputElements.length; ++i){
        if(inputElements[i].checked){
            if(checkedValue == ""){
                checkedValue += inputElements[i].value;
            }
             else{
                checkedValue += ", " + inputElements[i].value;
             }
        }
  }
  return checkedValue;
}

function submitForms() {
    let name = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let sexo = document.getElementById("sexo").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let freq = getRadio("freq");
    let fumante = getRadio("fuma");
    let bebidas = getRadio("bebida");
    let comidas = getCheck("habitos");
    let observacoes = document.getElementById("obs").value;

    //depois de setar todas as variaveis de acordo com os values do html ele gera um alerta com os resultados
    alert("Formulário enviado!" +
    "\n Nome: " + name + 
    "\n Idade: " + age +
    "\n Sexo: " + sexo +
    "\n Altura: " + altura + "Metros" +
    "\n Peso: " + peso + "Kg" +
    "\n Frequência que pratica atividades físicas: " + freq +
    "\n Fumante: " + fumante +
    "\n Frequência que consome alcool: " + bebidas + 
    "\n Hábitos alimentares: " + comidas +
    "\n Observações: " + observacoes);
    
}