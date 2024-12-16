
//!


1. JavaScript'e Giriş (Detaylı Açıklama)
//? JavaScript Nedir?
// JavaScript, web sayfalarına dinamik ve interaktif özellikler eklemek için kullanılan bir programlama dilidir. Tarayıcıda çalışan bir betik dilidir ve web geliştirmede vazgeçilmez bir rol oynar.
//? Temel Özellikleri:

// Tarayıcı Uyumluluğu: Neredeyse tüm modern web tarayıcıları tarafından desteklenir
// Dinamik İşlemler: Sayfa içeriğini anlık olarak değiştirebilme
// Kullanıcı Etkileşimi: Form doğrulamaları, animasyonlar, popup'lar gibi özellikleri sağlar



//1. Document write ile çıktı verme

// document:obje
// write :Methot
// document.write("Hello world <br>");
// document.write("Hüsne Kömesöğütlü");

// **************************************************************************************
//2. console log metodunun kullanılması

// console.log("hello")
// console.log(23);
// console.log(true);

// temizleme metodo
// console.clear();


// örnek;
// let a=5;
// let b=7;
// console.log(a+b);
// console.log("iki sayının farkı:",a-b);
// ********************************************************************************************

// 3. Alert(Uyarı)popup ile çıktı verme işlemelri

//  console.log(window);//window diye bir obje bulunur js nin en büyük objesidir.bunun içinde birçok metod ve birçok obje bulunur.window en dış katman onun altında document vardır.bunun içinde alert vardır bu bir fonksiyondur

// alert("dikkat ediniz");// popup

// örnek
// let a=4;
// let b=2;
// alert("iki sayının toplamı:"+ (a+b));


// *******************************************************************************************
//! Veri tipleri
//1 String;
 // String tanımlama yöntemleri
let ad1 = "Ahmet";       // Çift tırnak
let ad2 = 'Mehmet';      // Tek tırnak
let ad3 = `Mustafa`;     // Template literal (ES6)

// String özellikleri
console.log(ad1.length);         // Karakter sayısı
console.log(ad1.toUpperCase());  // Büyük harfe çevirme
// ? ***********************************************************************************************
//2 Number
let tamsayi = 42;           // Tam sayı
let ondalikli = 3.14;       // Ondalıklı sayı
let negatif = -10;          // Negatif sayı

// Özel sayı değerleri
let sonsuz = Infinity;
let notNumber = NaN;        // Not a Number
//? ************************************************************************************************ 
//3 Boolean(Mantıksal)

let dogruMu = true;
let yanlısMı = false;

// Karşılaştırma sonucu boolean
let sonuc = 5 > 3;  // true
// ? *****************************************************************
//4 null
let tanimsizDeger;          // undefined
let bosluk = null;          // null
//5 undefinedfunction
//? **************************************************************************
// !Objeler(Nesneler)
// Nesne tanımlama
let ogrenci = {
    ad: "Ayşe",
    soyad: "Yılmaz",
    yas: 20,
    dersler: ["Mat", "Fizik"]
};

// Nesne özelliklerine erişim
console.log(ogrenci.ad);
console.log(ogrenci["soyad"]);
// ? ************************************************************************

// ! 3. JavaScript Operatörleri (Detaylı Açıklama)
// ! Aritmetik Operatörler;

let a = 10, b = 3;

console.log(a + b);  // Toplama: 13
console.log(a - b);  // Çıkarma: 7
console.log(a * b);  // Çarpma: 30
console.log(a / b);  // Bölme: 3.33
console.log(a % b);  // Mod alma: 1
console.log(a ** b); // Üs alma: 1000

// ? *************************************************************************
// ! Atama Operatörleri
let x = 5;
x += 3;   // x = x + 3  (8)
x -= 2;   // x = x - 2  (6)
x *= 2;   // x = x * 2  (12)
x /= 3;   // x = x / 3  (4)

// ? ***************************************************
// ! Karşılaştırma Operatörleri;
let yas = 18;

console.log(yas == "18");     // Değer karşılaştırması (true)
console.log(yas === 18);      // Tip ve değer karşılaştırması (true)
console.log(yas != 20);       // Eşit değil (true)
console.log(yas > 16);        // Büyük mü (true)
console.log(yas <= 18);       // Küçük veya eşit mi (true)

// ? ***************************************************
// ! Mantıksal Operatörler
let sinav1 = 50, sinav2 = 60;

// AND Operatörü
console.log(sinav1 > 45 && sinav2 > 55);  // true

// OR Operatörü
console.log(sinav1 > 60 || sinav2 > 55);  // true

// NOT Operatörü
console.log(!(sinav1 > 60));  // true

// ? ********************************************************************

// ! JavaScript İfadeleri (Detaylı Açıklama)
// todo= Değişken Tanımlama;

// var (ES5 ve öncesi)
var eskiTanim = "Eski yöntem";

// let (Modern, blok kapsamlı)
let degisebilirDeger = 10;
degisebilirDeger = 20;  // Değiştirilebilir

// const (Sabit, değiştirilemez)
const PI = 3.14159;
// PI = 3.14;  // Bu kod hata verir

// ? *******************************************************************
// todo= İfade Türleri;
// Aritmetik İfadeler
let hesaplama = (5 + 3) * 2;  // 16

// Mantıksal İfadeler
let karsilastirma = (10 > 5) && (3 < 7);  // true

// Atama İfadeleri
let sonuc = hesaplama + 10;

// ? *********************************************************************** if else ***********************************************


// Döngü Türü	Kullanım Alanı
// For	Liste veya belirli bir aralıkta işlem.
// While	Koşula bağlı tekrar.
// Do-While	Kullanıcının en az bir kez işlem yapması gerektiğinde.
// For...of	Diziler ve iterable yapıların elemanları.
// For...in	Nesne özelliklerini işleme.
// ! 5. Koşullu İfadeler (Detaylı Açıklama)
// If-else, JavaScript'te bir koşulun doğru (true) veya yanlış (false) olup olmadığını kontrol ederek belirli kod bloklarının çalıştırılmasını sağlayan temel bir karar yapısıdır. Programların farklı durumlara göre farklı davranışlar sergilemesini sağlar.
// TODO= If-Else Yapısı;
let not = 75;

if (not >= 90) {
    console.log("AA - Pekiyi");
} else if (not >= 80) {
    console.log("BA - İyi");
} else if (not >= 70) {
    console.log("BB - Orta");
} else {
    console.log("Yetersiz");
}

// Kısa if (Ternary) Operatörü
let durum = (not >= 50) ? "Geçti" : "Kaldı";



// ? ***************************************************************** Switch-Case Yapısı ****************************************
// TODO =Switch-Case Yapısı;
// Switch-case, JavaScript'te birden fazla koşula dayalı olarak karar verme işlemleri yapmak için kullanılan bir kontrol yapısıdır. if-else yapısına benzer şekilde çalışır ancak çok sayıda karşılaştırma yapılması gereken durumlarda daha okunabilir ve düzenli bir çözüm sunar.

let gun = 3;

switch(gun) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    default:
        console.log("Geçersiz gün");
}

// ? ***************************************************************
//! 6. Döngüler (Detaylı Açıklama)
//TODO=  For Döngüsü;
//?  for (başlangıç; koşul; adım) {
// //     // Tekrar edilecek kodlar
//?  }
// Başlangıç: Döngüde kullanılacak değişkenin başlangıç değeri belirlenir.
// Koşul: Döngünün çalışmaya devam edip etmeyeceğini kontrol eden ifadedir. Koşul doğru olduğu sürece döngü çalışır.
// Adım: Döngüde her tekrar sonunda yapılacak işlemdir (genellikle artırma veya azaltma).


//todo örnek;
// Standart for döngüsü
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// Dizi üzerinde döngü
let meyveler = ["Elma", "Armut", "Çilek"];
for (let i = 0; i < meyveler.length; i++) {
    console.log(meyveler[i]);
}

// For...of (Modern döngü)
for (let meyve of meyveler) {
    console.log(meyve);
}

// ? ***************************************************************While Döngüsü *******************
// TODO=While Döngüsü;

//? While Döngüsü Nedir?
// While döngüsü, bir koşul doğru olduğu sürece bir kod bloğunu tekrar tekrar çalıştıran bir döngü türüdür. Koşul her döngü başında kontrol edilir ve doğru olduğu sürece döngü çalışmaya devam eder.
//? While Döngüsü Neden Kullanılır?
// Dinamik Koşullar: Koşulun ne zaman sona ereceği önceden belirlenemeyen durumlar için idealdir.

// Kullanıcı Girdisi: Kullanıcıdan doğru bir veri alana kadar döngüyü çalıştırmak için kullanılır.

// Belirli Bir Şarta Göre İşlem: Şart sağlandığı sürece işlem yapmak için kullanılır.

//! yapısı;
//? while (koşul) {
//     // Tekrar edecek kodlar
//? }

// Koşul: Döngünün çalışmaya devam etmesi için gerekli şarttır. Bu şart doğru olduğu sürece döngü devam eder.
// Tekrar Edilecek Kodlar: Koşul doğruysa bu kod bloğu çalıştırılır.

//? ***********************************************örnek**********************************************
let sayac = 0;

while (sayac < 3) {
    console.log(sayac);
    sayac++;
}

// Sonsuz döngüden kaçınma
while (true) {
    // Bir çıkış koşulu mutlaka olmalı
    if (kosul) break;
}

// ? **********************************************************************Do-While Döngüsü*****************
// TODO= Do-While Döngüsü;
//? Do-While Döngüsü Nedir?
// Do-While döngüsü, bir kod bloğunu en az bir kez çalıştıran ve daha sonra belirtilen koşula bağlı olarak çalışmaya devam eden bir döngü türüdür. While döngüsünden farkı, koşul kontrolünden önce döngü içindeki kodun bir kez mutlaka çalıştırılmasıdır.
//! yapısı;
do {
    // Tekrar edecek kodlar
} while (koşul);

//? *********************************************örnek******************************
let x = 0;

do {
    console.log(x);
    x++;
} while (x < 3);

// Fark: En az bir kez çalışır

// ? ****************************************************LİSTELER(Array)*********************************
//? Array (Dizi) Nedir?
// Array (dizi), birden fazla değeri tek bir değişkende saklamamızı sağlayan bir veri yapısıdır. JavaScript’te bir array, sıralı bir şekilde saklanan ve indekslerle erişilebilen öğelerden oluşur. Bu öğeler farklı veri tiplerinden olabilir.
//? Neden Array Kullanılır?
// Veri Saklama ve Düzenleme: Birden fazla veriyi bir arada tutar ve onlara indekslerle ulaşmayı sağlar.
// Kolay Manipülasyon: Döngülerle kolayca erişim, düzenleme ve işlem yapma imkânı sunar.
// Dinamik Yapı: JavaScript'teki array'ler boyut olarak dinamik olduğundan, öğeler eklenip çıkarılabilir.
// ********************************************************************************************************************

// Boş bir dizi tanımlama
let dizi = [];

// Sayılardan oluşan bir dizi
let sayilar = [10, 20, 30, 40];

// Farklı veri türlerini içeren bir dizi
let karisik = ["Elma", 42, true, null];
// ***************************************************

console.log(sayilar[0]); // 10 (ilk eleman)
console.log(sayilar[2]); // 30 (üçüncü eleman)

// *******************************************************
sayilar.push(50); // Dizinin sonuna 50 ekler
console.log(sayilar); // [10, 20, 30, 40, 50]
// *******************************************************
// !örnek;
let ogrenciler = ["Ahmet", "Ayşe", "Ali", "Fatma"];

console.log(ogrenciler[1]); // Ayşe (ikinci eleman)
console.log(ogrenciler.length); // 4 (dizideki eleman sayısı)

// Yeni bir öğrenci ekleme
ogrenciler.push("Mehmet");
console.log(ogrenciler); // ["Ahmet", "Ayşe", "Ali", "Fatma", "Mehmet"]
// *****************************************************************************
for (let i = 0; i < ogrenciler.length; i++) {
    console.log(ogrenciler[i]);
  }
  // Çıktı:
  // Ahmet
  // Ayşe
  // Ali
  // Fatma
  // Mehmet
  