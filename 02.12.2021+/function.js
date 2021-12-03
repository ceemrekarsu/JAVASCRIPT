function add(a,b) {
    return a+b
}

let result = add(10,20)

document.write(result + '<br>')



let now = 2021

function yashesapla(yas) {
    return now-yas
}

let cemre = yashesapla(2000)
let ali = yashesapla(1996)

document.write(cemre + '<br>')
document.write(ali + '<br>')


function emeklilikHesapla(ad,yas){
    let kyas = yashesapla(yas)
    let emeklilik = 65 - kyas
    if (emeklilik>0) {
    document.write(ad + ' ' + emeklilik + ' yil sonra emekli olabilir')
} else {
    document.write(ad + ' zaten ' + (emeklilik*-1) + ' yıl önce emekli olmuş')
}

} 

emeklilikHesapla('cemre', 2000)
document.write('<br>')
emeklilikHesapla('ali', 1950)


function tekcift(sayi) {
    if(sayi%2==0) {
        return true;
    } else {
        return false;
    }
}
let sayi = tekcift(10)
document.write('<br>')
document.write(sayi)


function faktöriyel (sayi){
    let sonuc = 1
    for(let i=2; i<=sayi; i++){
        sonuc*=i
    }
    return sonuc
}
document.write('<br>')
document.write(faktöriyel(5))




let cumle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem?'

function ozet (cumle, maxKarakter){
let ozetcumle = []
if(maxKarakter>cumle.length) {
   return cumle
}else {
    let kelimeler = cumle.split('')
    let toplamKarakter = 0
    for(let i=0; i<kelimeler.length; i++){

        ozetcumle.unshift(kelimeler[i])
        toplamKarakter+=kelimeler[i].length 

        if(toplamKarakter>maxKarakter) {
            break
        }

    }
   
}

return ozetcumle.join(' ')

}

document.write('<br>')
document.write(ozet(cumle,30))