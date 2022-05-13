function validar() {
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var senha = document.getElementById("senha");
    var sexo = document.getElementById("sexo");
    var dataNascimento = document.getElementById("dataNascimento");

    if (nome.value == "" || nome.value == null) {
      alert("Campos não Preenchidos... Dados não Submetidos");  
      alert("Nome não informado");
      document.getElementById("nome").required = true;
      return;
    }
    if (cpf.value == "" || cpf.value == null) {
        alert("Campos não Preenchidos... Dados não Submetidos");
        alert("CPF não informado");
        document.getElementById("cpf").required = true;
        return;
      }
    if (senha.value == "" || senha.value == null) {
      alert("Campos não Preenchidos... Dados não Submetidos");
      alert("Senha não informada");
      document.getElementById("senha").required = true;
      return;
    }
    if (sexo.value == "" || sexo.value == null){
      alert("Campos não Preenchidos... Dados não Submetidos");
      alert("Sexo não informado");
      document.getElementById("sexo").required = true;
      return;
    }
    if (dataNascimento.value == "" || dataNascimento.value == null) {
        alert("Campos não Preenchidos... Dados não Submetidos");
        alert("Data de nascimento não informada");
        document.getElementById("dataNascimento").required = true;
        return;
      } 
      else{
          alert("Tudo Ok...Dados Submetidos");
          alert("Campos Preenchidos!");
        }
}