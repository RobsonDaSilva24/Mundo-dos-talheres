

function avalia(){
	
   var formulario = document.getElementById("Formulario");
   
   if(formulario.pesquisa.value == ""){
	 
	 alert("O campo avaliação não foi selecionado");
	 formulario.pesquisa.focus();
   }
   else if(formulario.pesquisa2.value == ""){
	   
	 alert("O campo onde o site precisa melhor não foi selecionado");
	 formulario.pesquisa2.focus();
   }
   else if(formulario.opinion.value == false){
	   
	 alert("O campo Deixe sua opinião não foi preenchido");
	 formulario.opinion.focus();
   }
   else{
	 alert("O mundo dos talheres agradece sua visita!");
	 formulario.action="http:www.google.com.br";
   }
   
  
}


