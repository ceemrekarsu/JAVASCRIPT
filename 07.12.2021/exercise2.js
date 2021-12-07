
    var sayi,tahmin,hak=1,i=0;;
    sayi=Math.round(Math.random()*11);
    do
    {
        tahmin=prompt("Tahmini Giriniz: ");
        if (isNaN(tahmin)) {
            alert( "sayı değil. oyunu bitiriyorum.")
            break
        }
        if (tahmin<sayi)
        {
            alert("Daha büyük bir sayı giriniz."); 
        }
        if (tahmin>sayi)
        {
           alert("Daha küçük bir sayı giriniz."); 
        }
        if (tahmin==sayi)
        {
        alert("Tebrikler bildiniz. Tuttuğum sayı: "+ sayi );
        }
    hak++;
    }
    
    while ((tahmin!=sayi) && hak<4)
    if (hak>4)
    {
       alert("Hakkınız kalmadı. Tutulan sayı : "+ sayi);
    }
