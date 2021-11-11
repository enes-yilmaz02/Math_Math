 var kenar,yukseklik,yaricap,hesapla,buttons,result;
 
 
 
 
 
 kenar=document.kenar.value;
 yukseklik=document.yukseklik.value;
 taban=document.taban.value;
 yaricap=document.yaricap.value;
 
 buttons=document.querySelectorAll(".btn button")
 



function hesapla(){
   return sonuc;
   console.log("tıkladın beni");
}

function ucgen(kenar,yukseklik,taban){
   const alan= ((taban)*(yukseklik))/2;
   const cevre=kenar*3;
   let  sonuc="Üçgenin Alanı: "+alan+" ve çevresi: "+cevre;

    
}
function dikdortgen(kenar,yukseklik,taban){
    const alan= ((taban)*(yukseklik));
    const cevre=(kenar*2)+(taban*2);
    let  sonuc="dikdörtgenin Alanı: "+alan+" ve çevresi: "+cevre;
 
     
 }
 function kare(kenar,yukseklik,taban){
    const alan= ((taban)*(taban));
    const cevre=kenar*4;
    let  sonuc="karenin Alanı: "+alan+" ve çevresi: "+cevre;
 
     
 }
 /* yamuğu dikdörtgene tamamlayıp üçgen kısmını çıkarınca alanı buluyoruz ve çevreyide üçgendeki hipotenüsü hesaplayıp buluyoruz: */
 function yamuk(kenar,yukseklik,taban){
    const alan=-(yukseklik*taban)-(((taban-kenar)*yukseklik)/2);
    const cevre=Math.sqrt((taban-kenar)*(taban-kenar)+(yukseklik*yukseklik))+(kenar)+(yükseklik)+(taban);
    let  sonuc="yamuğun Alanı: "+alan+" ve çevresi: "+cevre;
 
     
 }
 /*kök 27= 27^(1/2) */
 function altigen(kenar,yukseklik,taban){
    const alan= ((27^(1/2))*(kenar*kenar))/2;
    const cevre=kenar*6;
    let  sonuc="altigenin Alanı: "+alan+" ve çevresi: "+cevre;
 
     
 }
 /*pi sayısını math.PI kütüphanesinden (3.14) olarak  kabul edeceğiz: */
 function daire(kenar,yukseklik,taban,yaricap){
    const alan= (Math.PI)*(yaricap*yaricap);
    const cevre=2*(Math.PI)*(yaricap);
    let  sonuc="dairenin Alanı: "+alan+" ve çevresi: "+cevre;
 
     
 }

 buttons.forEach(item=>{
     item.addEventListener("click",()=>{
         
     if(item.getElementsById("1")){
       console.log( hesapla.onclick=ucgen(kenar,yükseklik,yaricap));
    }
    if(item.getElementsById("2")){
        hesapla.onclick=daire(kenar,yükseklik,yaricap);
    }
    if(item.getElementsById("3")){
        hesapla.onclick=dikdortgen(kenar,yükseklik,yaricap);
    }
    if(item.getElementsById("4")){
        hesapla.onclick=kare(kenar,yükseklik,yaricap);
    }
    if(item.getElementsById("5")){
        hesapla.onclick=yamuk(kenar,yükseklik,yaricap);
    }
    if(item.getElementsById("6")){
        hesapla.onclick=altigen(kenar,yükseklik,yaricap);
    }
     })
    
 
})


