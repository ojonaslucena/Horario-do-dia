function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 17
    var min =data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML =`Agora são ${hora} horas ${min} minutos e ${sec} segundos.`
    
    if (hora >= 0 && hora <12){
        img.src= 'manha1.png'
        document.body.style.background = '#007EB0'

    } else if (hora>= 12 && hora <18){
        img.src='tarde1.png'
        document.body.style.background = 'orange'
        section.style.background ='darkorange'
    } else{
        img.src='noite1.png'
        document.body.style.background = '#030f1a'
    }
}