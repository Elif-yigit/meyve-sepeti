
/*

meyveler dizisi oluştur 
değişken tanımla ,html'e bağla 
bir fonksiyon ekle , önce listeyi sıfırla 
sonra button classı ekle , değişken tanımla
event fonksiyonu oluştur
target - (this yerine kullanılan)
tagName(elementin kendi ismini alıyor)
seçilen meyveyi sipariş listesine ekle 
seçim ve adeti belirle
findIndex(ilk elemanın indeksini bulmak için)
en son haliyle güncel listeyi ekle 
*/





let siparisler = [];

const meyveler = [
  
    'Elma', 'Armut' , 'Kavun' , 'Porti' , 'Karpuz' , 'Üzüm'
  
];

console.log(meyveler);

const meyveList = document.querySelector('.meyveList');
const btns = document.querySelector('.btns');
const siparisListesi = document.querySelector('#siparisListesi');

function fruit () {


  for(const meyve of meyveler) {
meyveList.innerHTML += `<li>
<button class='btns'>
${meyve}
</button>
</li>`;


  }
  
}

// btns.addEventListener('click', fruit);

fruit ();


meyveList.addEventListener('click' , function (event) {

  if(event.target.tagName === 'BUTTON') {

    const secim = event.target.textContent;
   
    siparisListesi.innerHTML += `<li>${secim}</li>`

    ekle(secim);
  }

});

function ekle (secim){

  const meyveIndex = siparisler.findIndex(siparis => siparis.meyveAdi === secim);

  if(meyveIndex > -1 ) {
    siparisler[meyveIndex].adet = siparisler[meyveIndex].adet +1;
  } else{
    siparisler.push({
      meyveAdi:secim,
      adet:1
    });
  }
  guncelListe();
 
}


function guncelListe(){
siparisListesi.innerText='';

for(const siparis of siparisler) {

  siparisListesi.innerHTML += `<li>${siparis.meyveAdi} x ${siparis.adet}</li>`;
}

}