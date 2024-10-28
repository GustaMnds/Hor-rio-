function carregar() {
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   var min = new Date()
   var minuto = min.getMinutes()
   var hora = data.getHours()
   if (hora >= 0 && hora < 12){
     msg.innerHTML = `Agora são ${hora}:${minuto} da manhã`
     //BOM DIA!
     img.src = './img/manhã.png'
     document.body.style.background = '#F3E3B1'
   } else{
     if (hora >= 12 && hora < 18){
       //BOA TARDE!
       msg.innerHTML = `Agora são ${hora}:${minuto} da tarde`
       img.src = './img/tarde.png'
       document.body.style.background = '#476F88'
     } else{
       //BOA NOITE! 
       msg.innerHTML = `Agora são ${hora}:${minuto} da noite`
       img.src = './img/noite.png'
       document.body.style.background = '#021D3A'
     }
   }
}