function verificar() {
    var data = new Date() /* comando para usar a data atual */
    var ano = data.getFullYear()/* comando para usar a ano atual com 4 dígitos */
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO!!] Verifique os dados e tente novamente!')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         res.innerHTML = `idade calculada: ${idade}`
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
            genero ='Homem'
               if (idade >=0 && idade < 10) {
                  //Criança
                  img.setAttribute('src', 'foto-crianca-menino.jpg')
               }else if (idade < 21) {
                  //Jovem
                  img.setAttribute('src', 'foto-homem-jovem.jpg')
               }else if (idade < 50) {
                  //Adulto
                  img.setAttribute('src', 'foto-homem-adulto.jpg')
               }else {
                  //Idoso
                  img.setAttribute('src', 'foto-homem-idoso.jpg')
               }
         }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
               //Criança
               img.setAttribute('src', 'foto-crianca-menina.jpg')
            }else if (idade < 21) {
               //Jovem
               img.setAttribute('src', 'foto-jovem-mulher.jpg')
            }else if (idade < 50) {
               //Adulto
               img.setAttribute('src', 'foto-mulher-adulta.jpg')
            }else {
               //Idoso
               img.setAttribute('src', 'foto-mulher-idosa.jpg')
            }
         }
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         res.appendChild(img)
      }

}