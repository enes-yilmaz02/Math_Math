let kenar,yukseklik,taban,yaricap,teta,alfa,result,value;
kenar=document.querySelector('#kenar');
yukseklik=document.querySelector('#yukseklik');
taban=document.querySelector('#taban');
yaricap=document.querySelector('#yaricap');
alfa=document.querySelector('#alfa');
teta=document.querySelector('#teta');



/* Sorun:
1)herşey tamam,
2)result id sine sahip inputa sonuçları yollamak için doğru sorgulamayı yapmalıyız.
3)bollean türü tanımladıklarını unutma 
-btn1 de 36. satır
-html sayfasında 10.satır
-hesapla fonk. 124.satırda
13/11/2021 16:51 sorun çözüldü.





*/

function btn1(){
		clear();
    document.querySelector('#txtcap').style.display="none";
    document.querySelector('#yaricap').style.display="none";
    document.querySelector('#txtteta').style.display="none";
    document.querySelector('#teta').style.display="none";
    document.querySelector('#txtalfa').style.display="none";
    document.querySelector('#alfa').style.display="none";
    //document.querySelector('#1').boolean="true";
    document.querySelector('#ucgen_sekil').style.display="block";
     value= 'ucgen';
     return value;
    
    
}


function btn2(){
		clear();
    document.querySelector('#txtyukseklik').style.display="none";
    document.querySelector('#yukseklik').style.display="none";
    document.querySelector('#txtkenar').style.display="none";
    document.querySelector('#kenar').style.display="none";
    document.querySelector('#txttaban').style.display="none";
    document.querySelector('#taban').style.display="none";
    document.querySelector('#txtteta').style.display="none";
    document.querySelector('#teta').style.display="none";
    document.querySelector('#txtalfa').style.display="none";
    document.querySelector('#alfa').style.display="none";
    document.querySelector('#daire_sekil').style.display="block";
    value= 'daire';
    return value;
}

function btn3(){
		clear();
		document.querySelector('#txtyukseklik').innerHTML="Kısa Kenar:";
    document.querySelector('#txttaban').innerHTML="Uzun Kenar:";
    document.querySelector('#kenar').style.display="none";
    document.querySelector('#yaricap').style.display="none";
    document.querySelector('#txtkenar').style.display="none";
    document.querySelector('#txtcap').style.display="none";
    document.querySelector('#txtteta').style.display="none";
    document.querySelector('#teta').style.display="none";
    document.querySelector('#txtalfa').style.display="none";
    document.querySelector('#alfa').style.display="none";
    document.querySelector('#dikdortgen_sekil').style.display="block";
    value='dikdortgen';
    return value;
    
}

function btn4 (){
		clear();
    document.querySelector('#taban').style.display="none";
    document.querySelector('#yaricap').style.display="none";
    document.querySelector('#txttaban').style.display="none";
    document.querySelector('#txtcap').style.display="none";
    document.querySelector('#yukseklik').style.display="none";
    document.querySelector('#txtyukseklik').style.display="none";
    document.querySelector('#txtteta').style.display="none";
    document.querySelector('#teta').style.display="none";
    document.querySelector('#txtalfa').style.display="none";
    document.querySelector('#alfa').style.display="none";
    document.querySelector('#txtteta').style.display="none";
    document.querySelector('#teta').style.display="none";
    document.querySelector('#txtalfa').style.display="none";
    document.querySelector('#alfa').style.display="none";
    document.querySelector('#kare_sekil').style.display="block";
    value='kare';
    return value;
    
}

function btn5(){
		clear();
    document.querySelector('#txtkenar').innerHTML="Üst Taban:"
    document.querySelector('#yaricap').style.display="none";
    document.querySelector('#txtcap').style.display="none";
    document.querySelector('#yamuk_sekil').style.display="block";
    value='yamuk';
    return value;
    
}

function btn6 (){
		clear();
    document.querySelector('#txttaban').style.display="none";
    document.querySelector('#taban').style.display="none";
    document.querySelector('#txtcap').style.display="none";
    document.querySelector('#yaricap').style.display="none";
    document.querySelector('#txtyukseklik').style.display="none";
    document.querySelector('#yukseklik').style.display="none";
    document.querySelector('#txtteta').style.display="none";
    document.querySelector('#teta').style.display="none";
    document.querySelector('#txtalfa').style.display="none";
    document.querySelector('#alfa').style.display="none";
    document.querySelector('#altigen_sekil').style.display="block";
    value='altigen';
    return value;

}

function clear(){
document.querySelector('#ucgen_sekil').style.display="none";
document.querySelector('#daire_sekil').style.display="none";
document.querySelector('#dikdortgen_sekil').style.display="none";
document.querySelector('#kare_sekil').style.display="none";
document.querySelector('#yamuk_sekil').style.display="none";
document.querySelector('#altigen_sekil').style.display="none";
document.querySelector('#txtkenar').style.display="block";
document.querySelector('#txtkenar').innerHTML="Kenar: ";
document.querySelector('#kenar').style.display="block";
document.querySelector('#txtyukseklik').style.display="block";
document.querySelector('#txtyukseklik').innerHTML="Yükseklik: "
document.querySelector('#yukseklik').style.display="block";
document.querySelector('#txttaban').style.display="block";
document.querySelector('#txttaban').innerHTML="Alt Taban: "
document.querySelector('#taban').style.display="block";
document.querySelector('#txtcap').style.display="block";  
document.querySelector('#txtcap').innerHTML="Yarı Çap: ";      
document.querySelector('#yaricap').style.display="block";
document.querySelector('#txtteta').style.display="block";
document.querySelector('#txtteta').innerHTML="Teta açısı:(0)"
document.querySelector('#teta').style.display="block";      
document.querySelector('#txtalfa').style.display="block";
document.querySelector('#txtalfa').innerHTML="Alfa açısı:(Q)"
document.querySelector('#alfa').style.display="block";

}

function hesapla(sekil){

  sekil=value;
 if(value=='ucgen')
 {
  ucgen();
 }
 else if(value=='daire')
 {
 daire();
 }
 else if(value=='dikdortgen')
 {
 dikdortgen();
 }
  else if(value=='kare')
 {
 kare();
 }
  else if(value=='yamuk')
 {
 yamuk();
 }
  else if(value=='altigen')
 {
 altigen();
 }
 else
 {
 alert("çözümlenemeyen hata!!!!!");
 }
 
}

function ucgen(){
   const alan= ((taban.value)*(yukseklik.value))/2;
   const cevre=kenar.value*3;
   let  sonuc="Üçgenin Alanı: "+alan+" ve çevresi: "+cevre;
   result=document.getElementsByName('result')[0];
   result.innerHTML=sonuc;
   

    
}
function dikdortgen(){
    let alan= ((taban.value)*(yukseklik.value));
    const cevre=(kenar.value*2)+(taban.value*2);
    let sonuc= "dikdörtgenin Alanı: "+alan+" ve çevresi: "+cevre;
 		result=document.getElementsByName('result')[0];
    result.innerHTML=sonuc;
     
 }
 function kare(){
    const alan= ((kenar.value)*(kenar.value));
    const cevre=kenar.value*4;
    let  sonuc="karenin Alanı: "+alan+" ve çevresi: "+cevre;
    result=document.getElementsByName('result')[0];
    result.innerHTML=sonuc;
 
     
 }
 /* yamuğu dikdörtgene tamamlayıp üçgen kısmını çıkarınca alanı buluyoruz ve çevreyide üçgendeki hipotenüsü hesaplayıp buluyoruz: */
 function yamuk(){
    const alan=((yukseklik.value)/2)*(kenar.value*taban.value);
    const cevre=((kenar.value)+(taban.value))+(yukseklik.value)*((1)/(Math.sin(teta.value))+(1)/(Math.sin(alfa.value)));
    let  sonuc="yamuğun Alanı: "+alan+" ve çevresi: "+cevre;
    result=document.getElementsByName('result')[0];
    result.innerHTML=sonuc;
 
     
 }
 /*kök 27= 27^(1/2) */
 function altigen(){
    const alan= ((27^(1/2))*(kenar.value*kenar.value))/2;
    const cevre=kenar.value*6;
    let  sonuc="altigenin Alanı: "+alan+" ve çevresi: "+cevre;
    result=document.getElementsByName('result')[0];
    result.innerHTML=sonuc;
 
     
 }
 /*pi sayısını math.PI kütüphanesinden (3.14) olarak  kabul edeceğiz: */
 function daire(){
    const alan= (Math.PI)*(yaricap.value*yaricap.value);
    const cevre=2*(Math.PI)*(yaricap.value);
    let  sonuc="dairenin Alanı: "+alan+" ve çevresi: "+cevre;
    result=document.getElementsByName('result')[0];
    result.innerHTML=sonuc;
 
     
 }


