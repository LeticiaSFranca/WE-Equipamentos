window.addEventListener("scroll", function(){
  let header = this.document.querySelector('.barra')
  header.classList.toggle('rolagem', window.scrollY > 0)
})
// -----------------------------------------------------------------------
function mascara_telefone() {
  //limitador
  var tel = document.getElementById("telefone").value
  console.log(tel)
  tel = tel.slice(0, 14) //(pode limitar a quantidade de char na entrada pelo java script)
  console.log(tel)
  document.getElementById("telefone").value = tel
  tel = document.getElementById("telefone").value.slice(0, 10)
  console.log(tel)

  //máscara
  var tel_formatado = document.getElementById("telefone").value
  if (tel_formatado[0] != "(") {
    if (tel_formatado[0] != undefined) {
      document.getElementById("telefone").value = "(" + tel_formatado[0];
    }
  }

  if (tel_formatado[3] != ")") {
    if (tel_formatado[3] != undefined) {
      document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
    }
  }

  if (tel_formatado[9] != "-") {
    if (tel_formatado[9] != undefined) {
      document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
    }
  }
}

// -----------------------------------------------------------------------

//bloco1 - Industriais
function leiaMais1(){
  var pontos1=document.getElementById("pontos1");
  var maisTexto1=document.getElementById("detalhes1");
  var btnDetalhes1=document.getElementById("btnDetalhes1");

  if(pontos1.style.display === "none"){
    pontos1.style.display="inline";
    maisTexto1.style.display="none";
    btnDetalhes1.innerHTML="Detalhes";
  }else{
    pontos1.style.display="none";
    maisTexto1.style.display="inline";
    btnDetalhes1.innerHTML="Ocultar";
  }
}

//bloco2
function leiaMais2(){
  var pontos2=document.getElementById("pontos2");
  var maisTexto2=document.getElementById("detalhes2");
  var btnDetalhes2=document.getElementById("btnDetalhes2");

  if(pontos2.style.display === "none"){
    pontos2.style.display="inline";
    maisTexto2.style.display="none";
    btnDetalhes2.innerHTML="Detalhes";
  }else{
    pontos2.style.display="none";
    maisTexto2.style.display="inline";
    btnDetalhes2.innerHTML="Ocultar";
  }
}

//bloco3
function leiaMais3(){
  var pontos3=document.getElementById("pontos3");
  var maisTexto3=document.getElementById("detalhes3");
  var btnDetalhes3=document.getElementById("btnDetalhes3");

  if(pontos3.style.display === "none"){
    pontos3.style.display="inline";
    maisTexto3.style.display="none";
    btnDetalhes3.innerHTML="Detalhes";
  }else{
    pontos3.style.display="none";
    maisTexto3.style.display="inline";
    btnDetalhes3.innerHTML="Ocultar";
  }
}

//bloco4
function leiaMais4(){
  var pontos4=document.getElementById("pontos4");
  var maisTexto4=document.getElementById("detalhes4");
  var btnDetalhes4=document.getElementById("btnDetalhes4");

  if(pontos4.style.display === "none"){
    pontos4.style.display="inline";
    maisTexto4.style.display="none";
    btnDetalhes4.innerHTML="Detalhes";
  }else{
    pontos4.style.display="none";
    maisTexto4.style.display="inline";
    btnDetalhes4.innerHTML="Ocultar";
  }
}

//bloco5
function leiaMais5(){
  var pontos5=document.getElementById("pontos5");
  var maisTexto5=document.getElementById("detalhes5");
  var btnDetalhes5=document.getElementById("btnDetalhes5");

  if(pontos5.style.display === "none"){
    pontos5.style.display="inline";
    maisTexto5.style.display="none";
    btnDetalhes5.innerHTML="Detalhes";
  }else{
    pontos5.style.display="none";
    maisTexto5.style.display="inline";
    btnDetalhes5.innerHTML="Ocultar";
  }
}

//bloco6
function leiaMais6(){
  var pontos6=document.getElementById("pontos6");
  var maisTexto6=document.getElementById("detalhes6");
  var btnDetalhes6=document.getElementById("btnDetalhes6");

  if(pontos6.style.display === "none"){
    pontos6.style.display="inline";
    maisTexto6.style.display="none";
    btnDetalhes6.innerHTML="Detalhes";
  }else{
    pontos6.style.display="none";
    maisTexto6.style.display="inline";
    btnDetalhes6.innerHTML="Ocultar";
  }
}

//bloco7
function leiaMais7(){
  var pontos7=document.getElementById("pontos7");
  var maisTexto7=document.getElementById("detalhes7");
  var btnDetalhes7=document.getElementById("btnDetalhes7");

  if(pontos7.style.display === "none"){
    pontos7.style.display="inline";
    maisTexto7.style.display="none";
    btnDetalhes7.innerHTML="Detalhes";
  }else{
    pontos7.style.display="none";
    maisTexto7.style.display="inline";
    btnDetalhes7.innerHTML="Ocultar";
  }
}

//bloco8
function leiaMais8(){
  var pontos8=document.getElementById("pontos8");
  var maisTexto8=document.getElementById("detalhes8");
  var btnDetalhes8=document.getElementById("btnDetalhes8");

  if(pontos8.style.display === "none"){
    pontos8.style.display="inline";
    maisTexto8.style.display="none";
    btnDetalhes8.innerHTML="Detalhes";
  }else{
    pontos8.style.display="none";
    maisTexto8.style.display="inline";
    btnDetalhes8.innerHTML="Ocultar";
  }
}

//bloco9
function leiaMais9(){
  var pontos9=document.getElementById("pontos9");
  var maisTexto9=document.getElementById("detalhes9");
  var btnDetalhes9=document.getElementById("btnDetalhes9");

  if(pontos9.style.display === "none"){
    pontos9.style.display="inline";
    maisTexto9.style.display="none";
    btnDetalhes9.innerHTML="Detalhes";
  }else{
    pontos9.style.display="none";
    maisTexto9.style.display="inline";
    btnDetalhes9.innerHTML="Ocultar";
  }
}

//bloco10
function leiaMais10(){
  var pontos10=document.getElementById("pontos10");
  var maisTexto10=document.getElementById("detalhes10");
  var btnDetalhes10=document.getElementById("btnDetalhes10");

  if(pontos10.style.display === "none"){
    pontos10.style.display="inline";
    maisTexto10.style.display="none";
    btnDetalhes10.innerHTML="Detalhes";
  }else{
    pontos10.style.display="none";
    maisTexto10.style.display="inline";
    btnDetalhes10.innerHTML="Ocultar";
  }
}

//bloco11
function leiaMais11(){
  var pontos11=document.getElementById("pontos11");
  var maisTexto11=document.getElementById("detalhes11");
  var btnDetalhes11=document.getElementById("btnDetalhes11");

  if(pontos11.style.display === "none"){
    pontos11.style.display="inline";
    maisTexto11.style.display="none";
    btnDetalhes11.innerHTML="Detalhes";
  }else{
    pontos11.style.display="none";
    maisTexto11.style.display="inline";
    btnDetalhes11.innerHTML="Ocultar";
  }
}

//bloco12
function leiaMais12(){
  var pontos12=document.getElementById("pontos12");
  var maisTexto12=document.getElementById("detalhes12");
  var btnDetalhes12=document.getElementById("btnDetalhes12");

  if(pontos12.style.display === "none"){
    pontos12.style.display="inline";
    maisTexto12.style.display="none";
    btnDetalhes12.innerHTML="Detalhes";
  }else{
    pontos12.style.display="none";
    maisTexto12.style.display="inline";
    btnDetalhes12.innerHTML="Ocultar";
  }
}

//bloco13
function leiaMais13(){
  var pontos13=document.getElementById("pontos13");
  var maisTexto13=document.getElementById("detalhes13");
  var btnDetalhes13=document.getElementById("btnDetalhes13");

  if(pontos13.style.display === "none"){
    pontos13.style.display="inline";
    maisTexto13.style.display="none";
    btnDetalhes13.innerHTML="Detalhes";
  }else{
    pontos13.style.display="none";
    maisTexto13.style.display="inline";
    btnDetalhes13.innerHTML="Ocultar";
  }
}

//bloco14
function leiaMais14(){
  var pontos14=document.getElementById("pontos14");
  var maisTexto14=document.getElementById("detalhes14");
  var btnDetalhes14=document.getElementById("btnDetalhes14");

  if(pontos14.style.display === "none"){
    pontos14.style.display="inline";
    maisTexto14.style.display="none";
    btnDetalhes14.innerHTML="Detalhes";
  }else{
    pontos14.style.display="none";
    maisTexto14.style.display="inline";
    btnDetalhes14.innerHTML="Ocultar";
  }
}

//bloco15
function leiaMais15(){
  var pontos15=document.getElementById("pontos15");
  var maisTexto15=document.getElementById("detalhes15");
  var btnDetalhes15=document.getElementById("btnDetalhes15");

  if(pontos15.style.display === "none"){
    pontos15.style.display="inline";
    maisTexto15.style.display="none";
    btnDetalhes15.innerHTML="Detalhes";
  }else{
    pontos15.style.display="none";
    maisTexto15.style.display="inline";
    btnDetalhes15.innerHTML="Ocultar";
  }
}

//bloco16
function leiaMais16(){
  var pontos16=document.getElementById("pontos16");
  var maisTexto16=document.getElementById("detalhes16");
  var btnDetalhes16=document.getElementById("btnDetalhes16");

  if(pontos16.style.display === "none"){
    pontos16.style.display="inline";
    maisTexto16.style.display="none";
    btnDetalhes16.innerHTML="Detalhes";
  }else{
    pontos16.style.display="none";
    maisTexto16.style.display="inline";
    btnDetalhes16.innerHTML="Ocultar";
  }
}

//bloco17
function leiaMais17(){
  var pontos17=document.getElementById("pontos17");
  var maisTexto17=document.getElementById("detalhes17");
  var btnDetalhes17=document.getElementById("btnDetalhes17");

  if(pontos17.style.display === "none"){
    pontos17.style.display="inline";
    maisTexto17.style.display="none";
    btnDetalhes17.innerHTML="Detalhes";
  }else{
    pontos17.style.display="none";
    maisTexto17.style.display="inline";
    btnDetalhes17.innerHTML="Ocultar";
  }
}

//bloco18
function leiaMais18(){
  var pontos18=document.getElementById("pontos18");
  var maisTexto18=document.getElementById("detalhes18");
  var btnDetalhes18=document.getElementById("btnDetalhes18");

  if(pontos18.style.display === "none"){
    pontos18.style.display="inline";
    maisTexto18.style.display="none";
    btnDetalhes18.innerHTML="Detalhes";
  }else{
    pontos18.style.display="none";
    maisTexto18.style.display="inline";
    btnDetalhes18.innerHTML="Ocultar";
  }
}

//bloco19
function leiaMais19(){
  var pontos19=document.getElementById("pontos19");
  var maisTexto19=document.getElementById("detalhes19");
  var btnDetalhes19=document.getElementById("btnDetalhes19");

  if(pontos19.style.display === "none"){
    pontos19.style.display="inline";
    maisTexto19.style.display="none";
    btnDetalhes19.innerHTML="Detalhes";
  }else{
    pontos19.style.display="none";
    maisTexto19.style.display="inline";
    btnDetalhes19.innerHTML="Ocultar";
  }
}

//bloco20
function leiaMais20(){
  var pontos20=document.getElementById("pontos20");
  var maisTexto20=document.getElementById("detalhes20");
  var btnDetalhes20=document.getElementById("btnDetalhes20");

  if(pontos20.style.display === "none"){
    pontos20.style.display="inline";
    maisTexto20.style.display="none";
    btnDetalhes20.innerHTML="Detalhes";
  }else{
    pontos20.style.display="none";
    maisTexto20.style.display="inline";
    btnDetalhes20.innerHTML="Ocultar";
  }
}

//bloco21
function leiaMais21(){
  var pontos21=document.getElementById("pontos21");
  var maisTexto21=document.getElementById("detalhes21");
  var btnDetalhes21=document.getElementById("btnDetalhes21");

  if(pontos21.style.display === "none"){
    pontos21.style.display="inline";
    maisTexto21.style.display="none";
    btnDetalhes21.innerHTML="Detalhes";
  }else{
    pontos21.style.display="none";
    maisTexto21.style.display="inline";
    btnDetalhes21.innerHTML="Ocultar";
  }
}


//bloco22
function leiaMais22(){
  var pontos22=document.getElementById("pontos22");
  var maisTexto22=document.getElementById("detalhes22");
  var btnDetalhes22=document.getElementById("btnDetalhes22");
  var background22=document.getElementsByClassName("formatDetalhes-box22");

  if(pontos22.style.display === "none"){
    pontos22.style.display="inline";
    maisTexto22.style.display="none";
    btnDetalhes22.innerHTML="Detalhes";
    background22.innerHTML="#FFFFFF";
  }else{
    pontos22.style.display="none";
    maisTexto22.style.display="inline";
    btnDetalhes22.innerHTML="Ocultar";
  }
}

//bloco23
function leiaMais23(){
  var pontos23=document.getElementById("pontos23");
  var maisTexto23=document.getElementById("detalhes23");
  var btnDetalhes23=document.getElementById("btnDetalhes23");

  if(pontos23.style.display === "none"){
    pontos23.style.display="inline";
    maisTexto23.style.display="none";
    btnDetalhes23.innerHTML="Detalhes";
  }else{
    pontos23.style.display="none";
    maisTexto23.style.display="inline";
    btnDetalhes23.innerHTML="Ocultar";
  }
}


//bloco24
function leiaMais24(){
  var pontos24=document.getElementById("pontos24");
  var maisTexto24=document.getElementById("detalhes24");
  var btnDetalhes24=document.getElementById("btnDetalhes24");

  if(pontos24.style.display === "none"){
    pontos24.style.display="inline";
    maisTexto24.style.display="none";
    btnDetalhes24.innerHTML="Detalhes";
  }else{
    pontos24.style.display="none";
    maisTexto24.style.display="inline";
    btnDetalhes24.innerHTML="Ocultar";
  }
}

//bloco25
function leiaMais25(){
  var pontos25=document.getElementById("pontos25");
  var maisTexto25=document.getElementById("detalhes25");
  var btnDetalhes25=document.getElementById("btnDetalhes25");

  if(pontos25.style.display === "none"){
    pontos25.style.display="inline";
    maisTexto25.style.display="none";
    btnDetalhes25.innerHTML="Detalhes";
  }else{
    pontos25.style.display="none";
    maisTexto25.style.display="inline";
    btnDetalhes25.innerHTML="Ocultar";
  }
}

//bloco26
function leiaMais26(){
  var pontos26=document.getElementById("pontos26");
  var maisTexto26=document.getElementById("detalhes26");
  var btnDetalhes26=document.getElementById("btnDetalhes26");

  if(pontos26.style.display === "none"){
    pontos26.style.display="inline";
    maisTexto26.style.display="none";
    btnDetalhes26.innerHTML="Detalhes";
  }else{
    pontos26.style.display="none";
    maisTexto26.style.display="inline";
    btnDetalhes26.innerHTML="Ocultar";
  }
}

//bloco27
function leiaMais27(){
  var pontos27=document.getElementById("pontos27");
  var maisTexto27=document.getElementById("detalhes27");
  var btnDetalhes27=document.getElementById("btnDetalhes27");

  if(pontos27.style.display === "none"){
    pontos27.style.display="inline";
    maisTexto27.style.display="none";
    btnDetalhes27.innerHTML="Detalhes";
  }else{
    pontos27.style.display="none";
    maisTexto27.style.display="inline";
    btnDetalhes27.innerHTML="Ocultar";
  }
}

//bloco28
function leiaMais28(){
  var pontos28=document.getElementById("pontos28");
  var maisTexto28=document.getElementById("detalhes28");
  var btnDetalhes28=document.getElementById("btnDetalhes28");

  if(pontos28.style.display === "none"){
    pontos28.style.display="inline";
    maisTexto28.style.display="none";
    btnDetalhes28.innerHTML="Detalhes";
  }else{
    pontos28.style.display="none";
    maisTexto28.style.display="inline";
    btnDetalhes28.innerHTML="Ocultar";
  }
}

//bloco29
function leiaMais29(){
  var pontos29=document.getElementById("pontos29");
  var maisTexto29=document.getElementById("detalhes29");
  var btnDetalhes29=document.getElementById("btnDetalhes29");

  if(pontos29.style.display === "none"){
    pontos29.style.display="inline";
    maisTexto29.style.display="none";
    btnDetalhes29.innerHTML="Detalhes";
  }else{
    pontos29.style.display="none";
    maisTexto29.style.display="inline";
    btnDetalhes29.innerHTML="Ocultar";
  }
}

//bloco30
function leiaMais30(){
  var pontos30=document.getElementById("pontos30");
  var maisTexto30=document.getElementById("detalhes30");
  var btnDetalhes30=document.getElementById("btnDetalhes30");

  if(pontos30.style.display === "none"){
    pontos30.style.display="inline";
    maisTexto30.style.display="none";
    btnDetalhes30.innerHTML="Detalhes";
  }else{
    pontos30.style.display="none";
    maisTexto30.style.display="inline";
    btnDetalhes30.innerHTML="Ocultar";
  }
}

//bloco31
function leiaMais31(){
  var pontos31=document.getElementById("pontos31");
  var maisTexto31=document.getElementById("detalhes31");
  var btnDetalhes31=document.getElementById("btnDetalhes31");

  if(pontos31.style.display === "none"){
    pontos31.style.display="inline";
    maisTexto31.style.display="none";
    btnDetalhes31.innerHTML="Detalhes";
  }else{
    pontos31.style.display="none";
    maisTexto31.style.display="inline";
    btnDetalhes31.innerHTML="Ocultar";
  }
}

//bloco32
function leiaMais32(){
  var pontos32=document.getElementById("pontos32");
  var maisTexto32=document.getElementById("detalhes32");
  var btnDetalhes32=document.getElementById("btnDetalhes32");

  if(pontos32.style.display === "none"){
    pontos32.style.display="inline";
    maisTexto32.style.display="none";
    btnDetalhes32.innerHTML="Detalhes";
  }else{
    pontos32.style.display="none";
    maisTexto32.style.display="inline";
    btnDetalhes32.innerHTML="Ocultar";
  }
}

//bloco33
function leiaMais33(){
  var pontos33=document.getElementById("pontos33");
  var maisTexto33=document.getElementById("detalhes33");
  var btnDetalhes33=document.getElementById("btnDetalhes33");

  if(pontos33.style.display === "none"){
    pontos33.style.display="inline";
    maisTexto33.style.display="none";
    btnDetalhes33.innerHTML="Detalhes";
  }else{
    pontos33.style.display="none";
    maisTexto33.style.display="inline";
    btnDetalhes33.innerHTML="Ocultar";
  }
}

//bloco34
function leiaMais34(){
  var pontos34=document.getElementById("pontos34");
  var maisTexto34=document.getElementById("detalhes34");
  var btnDetalhes34=document.getElementById("btnDetalhes34");

  if(pontos34.style.display === "none"){
    pontos34.style.display="inline";
    maisTexto34.style.display="none";
    btnDetalhes34.innerHTML="Detalhes";
  }else{
    pontos34.style.display="none";
    maisTexto34.style.display="inline";
    btnDetalhes34.innerHTML="Ocultar";
  }
}

//bloco35
function leiaMais35(){
  var pontos35=document.getElementById("pontos35");
  var maisTexto35=document.getElementById("detalhes35");
  var btnDetalhes35=document.getElementById("btnDetalhes35");

  if(pontos35.style.display === "none"){
    pontos35.style.display="inline";
    maisTexto35.style.display="none";
    btnDetalhes35.innerHTML="Detalhes";
  }else{
    pontos35.style.display="none";
    maisTexto35.style.display="inline";
    btnDetalhes35.innerHTML="Ocultar";
  }
}

// --------------------------- Produtos Medicinais

//blocoM1
function leiaMaisM1(){
  var pontosM1=document.getElementById("pontosM1");
  var maisTextoM1=document.getElementById("detalhesM1");
  var btnDetalhesM1=document.getElementById("btnDetalhesM1");

  if(pontosM1.style.display === "none"){
    pontosM1.style.display="inline";
    maisTextoM1.style.display="none";
    btnDetalhesM1.innerHTML="Detalhes";
  }else{
    pontosM1.style.display="none";
    maisTextoM1.style.display="inline";
    btnDetalhesM1.innerHTML="Ocultar";
  }
}

//blocoM2
function leiaMaisM2(){
  var pontosM2=document.getElementById("pontosM2");
  var maisTextoM2=document.getElementById("detalhesM2");
  var btnDetalhesM2=document.getElementById("btnDetalhesM2");

  if(pontosM2.style.display === "none"){
    pontosM2.style.display="inline";
    maisTextoM2.style.display="none";
    btnDetalhesM2.innerHTML="Detalhes";
  }else{
    pontosM2.style.display="none";
    maisTextoM2.style.display="inline";
    btnDetalhesM2.innerHTML="Ocultar";
  }
}

//blocoM3
function leiaMaisM3(){
  var pontosM3=document.getElementById("pontosM3");
  var maisTextoM3=document.getElementById("detalhesM3");
  var btnDetalhesM3=document.getElementById("btnDetalhesM3");

  if(pontosM3.style.display === "none"){
    pontosM3.style.display="inline";
    maisTextoM3.style.display="none";
    btnDetalhesM3.innerHTML="Detalhes";
  }else{
    pontosM3.style.display="none";
    maisTextoM3.style.display="inline";
    btnDetalhesM3.innerHTML="Ocultar";
  }
}

//blocoM4
function leiaMaisM4(){
  var pontosM4=document.getElementById("pontosM4");
  var maisTextoM4=document.getElementById("detalhesM4");
  var btnDetalhesM4=document.getElementById("btnDetalhesM4");

  if(pontosM4.style.display === "none"){
    pontosM4.style.display="inline";
    maisTextoM4.style.display="none";
    btnDetalhesM4.innerHTML="Detalhes";
  }else{
    pontosM4.style.display="none";
    maisTextoM4.style.display="inline";
    btnDetalhesM4.innerHTML="Ocultar";
  }
}

//blocoM5
function leiaMaisM5(){
  var pontosM5=document.getElementById("pontosM5");
  var maisTextoM5=document.getElementById("detalhesM5");
  var btnDetalhesM5=document.getElementById("btnDetalhesM5");

  if(pontosM5.style.display === "none"){
    pontosM5.style.display="inline";
    maisTextoM5.style.display="none";
    btnDetalhesM5.innerHTML="Detalhes";
  }else{
    pontosM5.style.display="none";
    maisTextoM5.style.display="inline";
    btnDetalhesM5.innerHTML="Ocultar";
  }
}
// ---------------------------------------------------------------------

// Máquina de Escrever - O Título "O que você procura?"

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   }
// }

const titulo = document.querySelector('.tituloPergunta');
typeWriter(titulo);

// ---------------------------------------------------------------------