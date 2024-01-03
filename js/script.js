window.addEventListener("scroll", function(){
  let header = this.document.querySelector('.barra')
  header.classList.toggle('rolagem', window.scrollY > 0)
})
// -----------------------------------------------------------------------

function tel_mask() {
  var tel = document.getElementById("tel").value
  console.log(tel)
  tel = tel.slice(0,14)
  console.log(tel)
  document.getElementById("tel").value=tel
  tel = document.getElementById("tel").value.slice(0,10)
  console.log(tel)

  var formatted_tel = document.getElementById("tel").value
  if (formatted_tel[0] != "("){
      if(formatted_tel[0] != undefined){
          document.getElementById("tel").value = "(" + formatted_tel[0];
      }
  }

  if (formatted_tel[3] != ")"){
      if(formatted_tel[3] != undefined){
          document.getElementById("tel").value = formatted_tel.slice(0,3) + ")" + formatted_tel[3]
      }
  }

  if (formatted_tel[9]!="-"){
      if(formatted_tel[9] != undefined){
          document.getElementById("tel").value = formatted_tel.slice(0,9)+"-" + formatted_tel[9]
      }
  }
}

// -----------------------------------------------------------------------