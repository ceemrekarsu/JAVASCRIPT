/* let username = prompt( "enter your username: ")
let age = prompt("enter your age: ")

if (username && age>18) {
    alert("ehliyet alabilirsiniz.")
} else if (!username){
    alert( "kullanıcı adınız yok.")
}
else if (!(age>18)){
   alert( "yaş bilginiz yok veya 18 yaşından küçüksünüz")
}
let stateOfMind = prompt("NABER?")
let info = document.querySelector("#info")
info.innerHTML = `${stateOfMind.length > 0 ?
 stateOfMind : "KIRICI OLDU"}` */



/* 
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49


2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde  "okulu birak" bilgisiyle karsilasilsin, digerlerinde ise  "OKULU KESİN BIRAK" bilgisi olsun
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

let examGrade = prompt("SINAV NOTUNUZU GİRİNİZ")
let textInfo;
let info = document.querySelector( "#info")



if (examGrade >= 0 && examGrade <= 100){
    // tüm if yapılarını kapsar
    textInfo =  "OKULU KESİN BIRAK. <br>"
    info.classList.add('text-primary')
    if (examGrade >= 90){
        textInfo +=  "  AA"
    } else if (examGrade >= 85) {
        textInfo +=  "  BA"
    } else if ( examGrade >= 80) {
        textInfo +=  "  BB"
    } else if (examGrade >= 75){
        textInfo +=  "  CB"
    } else if (examGrade >= 70){
        textInfo +=  "  CC"
    } else if (examGrade >= 65){
        textInfo +=  "  DC"
    }else if (examGrade >= 60){
        textInfo +=  "  DD"
    } else if (examGrade >= 50){
        textInfo +=  "  FD"
    } else if (examGrade >= 0){
        textInfo = `okulu birak  FF`
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    }
}  else {
    textInfo =  "bilgiler dogru degil"
}

info.innerHTML = `${textInfo}  --- ${examGrade}`