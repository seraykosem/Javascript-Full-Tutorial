const ad = "seray";
const soyad = "kosem";
const yas = 25;
const sehir = "İzmir";
const meslek = "Frontend Developer";

const bio = "Benim adım " +  ad + " soyadım " + soyad + ". " + sehir + '\'da ' + "yaşıyorum. " + yas + " yaşındayım. " + meslek + " olarak çalışıyorum." ;

//! backtick
const newBio =  `Benim adım ${ad} soyadım ${soyad}. ${sehir}'da yaşıyorum. ${yas} yaşındayım. ${meslek} olarak çalışıyorum.`;

console.log(bio);