// ! *********************************************************ATÖLYE 5'İN NOTLARI**********************************************************

//! 1. Class Yapısı (10 dakika)
//? Class Tanımı:
//  CSS'de class, öğelerin belirli özelliklerini paylaşmalarını sağlamak için kullanılır.
// Neden Kullanılır? Aynı stilleri birden fazla öğeye uygulamak için gereklidir.

// TODO: öRNEK
//? HTML Kodu;
<div class="box"></div>
<div class="box"></div>

// TODo: ÖRNEK;
// ? CSS Kodu;
.box {
    width: 100px;
    height: 100px;
    background-color: blue;
}

//! 2. Class Kullanımının Önemi (10 dakika)
//? Kod Tekrarını Önleme:
//  Bir class ile aynı stil özelliklerini farklı öğelere uygulayarak stil tekrarını önlersiniz.
//? Yönetilebilirlik:
//  CSS kodlarını daha düzenli hale getirir, büyük projelerde yönetimi kolaylaştırı


//! 3. Height / Width (10 dakika)
//? Yükseklik ve Genişlik Ayarı:
//  Öğelerin yüksekliği ve genişliği height ve width özellikleri ile ayarlanır.
//? Birimler:
//  px, %, em, rem gibi birimler kullanılır.

// TODO: ÖRNEK:
// CSS Kodu;
.box {
    width: 50%;
    height: 200px;
}

//! 4. Colors (10 dakika)
//? Renk Tanımlama:
//  Renkler, CSS'de farklı yöntemlerle tanımlanabilir:
//? Renk Adları:
//  red, blue, green gibi.
//? HEX Kodları: 
// #ff0000, #00ff00.
//? RGB/RGBA Değerleri:
//  rgb(255, 0, 0), rgba(0, 255, 0, 0.5)
// TODO ÖRNEK;
// CSS Kodu

.text {
    color: #333;
    background-color: rgba(255, 0, 0, 0.3);
}

//! 5. Fonts/Icons (10 dakika)
//? Font Seçimi:
//  font-family, font-size, font-weight gibi özelliklerle font ayarları yapılır.
//? Icon Kullanımı:
//  Font Awesome veya Material Icons gibi icon kütüphaneleri kullanılarak sayfaya icon eklenebilir.
// TODO: ÖRNEK;
// CSS Kodu
.title {
    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
}

//! 6. Backgrounds (10 dakika)
//? Arka Plan Ayarları:
//  background-color, background-image ile öğelere arka plan eklenir.
//? Arka Plan Özelliklöeri:
//  background-repeat, background-position, background-size.

// TODO: ÖRNEK;
// CSS Kodu
.container {
    background-image: url('image.jpg');
    background-size: cover;
}


//! 7. Border (10 dakika)
//? Kenarlık Ayarları:
//  border-width, border-style, border-color ile kenarlık özellikleri tanımlanır
//TODO: ÖRNEK;
// CSS Kodu
.box {
    border: 2px solid black;
    border-radius: 5px;
}

//! 8. Margin/Padding (10 dakika)
//? Margin:
//  Öğeler arasındaki boşluğu ayarlamak için kullanılır.
//? Padding:
//  Öğe içeriklerinin kenarlarından iç boşluk eklemek için kullanılır.
// TODO:ÖRNEK;
// CSS Kodu
.content {
    margin: 20px;
    padding: 10px;
}


//! 9. Position (20 dakika)
Position Özelliği:
//  Öğelerin konumlandırılmasını belirler:
//? Static:
//  Varsayılan konum.
//? Relative:
//  Kendi konumuna göre konumlandırılır.
//? Absolute:
//  İlk konumlanan öğeye göre konumlandırılır.
//? Fixed:
//  Pencereye göre sabitlenir.
// TODO:ÖRNEK;
// CSS Örnek
.fixed-element {
    position: fixed;
    top: 0;
    right: 0;
}

//! 10. List/Table (20 dakika)
//? Listelerin Stil Ayarları:
//  list-style-type, list-style-image gibi özelliklerle liste görünümü düzenlenir.
//? Tabloların Stil Ayarları:
//  border-collapse, border-spacing gibi özelliklerle tablo çizgileri ayarlanır.
// TODO:ÖRNEK;
// CSS KODU
ul {
    list-style-type: square;
}

table {
    border-collapse: collapse;
}
td, th {
    border: 1px solid black;
}


//! ******************************************ÖRNEK************************************************************************************

{/* ********************************************************************* **************************************************************************/}
                                                            {/***  HTML SAYFASI(index5.html)****/}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Özellikleri Örneği</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Genel Sayfa Başlığı -->
    <header class="header">
        <h1 class="title">CSS Özellikleri Örnek Sayfası</h1> <!-- Başlık Metni -->
    </header>

    <!-- CSS Class Yapısı Kullanımı -->
    <div class="example">
        <p>Bu alan, CSS class yapısının nasıl kullanıldığını gösterir.</p> <!-- Ortalanmış ve padding eklenmiş metin -->
    </div>

    <!-- Height ve Width Özellikleri -->
    <div class="dimensions">
        <p>Bu bölümde height ve width özellikleri kullanıldı.</p> <!-- Elemanın yüksekliği ve genişliği ayarlanmıştır -->
    </div>

    <!-- Renk Ayarları -->
    <div class="colors">
        <p>Bu alan, metin ve arka plan renklerinin nasıl ayarlandığını gösterir.</p> <!-- Renk ayarlarının örneği -->
    </div>

    <!-- Yazı Tipleri ve İkonlar -->
    <div class="fonts">
        <p>Bu alan, font ayarlarının nasıl yapıldığını gösterir.</p> <!--Yazı tipi ve kalınlık ayarı yapılmış metin -->
        <span class="icon">★</span> <!-- Özel ikon örneği -->
    </div>

    <!-- Arka Plan Ayarları -->
    <div class="background">
        <p>Bu alan, arka plan renginin ve görüntüsünün nasıl ayarlandığını gösterir.</p> <!-- Arka plan rengi ve resim örneği -->
    </div>

    <!-- Kenarlık Özellikleri -->
    <div class="border">
        <p>Bu bölümde kenarlık özellikleri uygulanmıştır.</p> <!-- Kalın kenarlık ve yuvarlatılmış köşeler -->
    </div>

    <!-- Margin ve Padding Kullanımı -->
    <div class="spacing">
        <p>Bu alan, dış ve iç boşluk özelliklerinin nasıl ayarlandığını gösterir.</p> <!-- İç ve dış boşluk uygulanmış eleman -->
    </div>

    <!-- Konumlandırma Özellikleri -->
    <div class="positioning">
        <p>Bu bölüm, relative konumlandırma kullanılarak oluşturulmuştur.</p> <!-- Göreceli konumlandırma örneği -->
    </div>

    <!-- Liste Stil Ayarları -->
    <ul class="styled-list">
        <!-- Kare işaretli liste elemanları -->
        <li>Liste Elemanı 1</li>
        <li>Liste Elemanı 2</li>
        <li>Liste Elemanı 3</li>
    </ul>

    <!-- Tablo Stil Ayarları -->
    <table class="styled-table">
        <tr>
            <th>Başlık 1</th>
            <th>Başlık 2</th>
        </tr>
        <tr>
            <td>Veri 1</td>
            <td>Veri 2</td>
        </tr>
        <tr>
            <td>Veri 3</td>
            <td>Veri 4</td>
        </tr>
    </table>

</body>
</html>
 // **********************************************************************************************************************************************
                                                         {/* ***********CSS SAYFASI (style5.css)***/}
/* Genel Stil Ayarları */
body {
    font-family: Arial, sans-serif; /* Sayfanın genel fontunu belirler */
    margin: 0; /* Sayfa kenar boşluklarını sıfırlar */
    padding: 0; /* Sayfa iç boşluklarını sıfırlar */
    display: flex; /* Sayfayı esnek bir düzen ile hizalar */
    flex-direction: column; /* Öğeleri dikey olarak hizalar */
    align-items: center; /* Öğeleri yatay olarak ortalar */
}

/* Class Yapısı */
.example {
    text-align: center; /* Metni ortalar */
    padding: 15px; /* İç boşluk ekler */
    margin: 10px; /* Dış boşluk ekler */
    width: 90%; /* Elemanın genişliğini %90 yapar */
}

/* Header ve Title */
.header {
    background-color: #333; /* Başlığın arka plan rengini koyu gri yapar */
    color: white; /* Metin rengini beyaz yapar */
    padding: 20px; /* Başlığın iç boşluğunu ayarlar */
    width: 100%; /* Başlığın genişliğini %100 yapar */
    text-align: center; /* Metni ortalar */
}
.title {
    font-size: 24px; /* Başlık metninin boyutunu ayarlar */
}

/* Height ve Width */
.dimensions {
    height: 100px; /* Elemanın yüksekliğini 100 piksel yapar */
    width: 80%; /* Elemanın genişliğini %80 yapar */
    background-color: #ddd; /* Arka plan rengini açık gri yapar */
}

/* Colors */
.colors {
    color: #ff6600; /* Metin rengini turuncu yapar */
    background-color: #f0f8ff; /* Arka plan rengini açık mavi yapar */
}

/* Fonts ve Icons */
.fonts {
    font-family: 'Courier New', Courier, monospace; /* Yazı tipini değiştirir */
    font-size: 20px; /* Metin boyutunu ayarlar */
    font-weight: bold; /* Metni kalın yapar */
}
.icon {
    font-size: 24px; /* İkonun boyutunu ayarlar */
    color: gold; /* İkonun rengini altın sarısı yapar */
}

/* Background */
.background {
    background-color: #cce5ff; /* Arka plan rengini açık mavi yapar */
    background-image: url('https://via.placeholder.com/100'); /* Arka plana bir resim ekler */
    background-repeat: no-repeat; /* Arka plan resminin tekrar etmesini engeller */
    background-size: 50px; /* Arka plan resminin boyutunu ayarlar */
    background-position: right center; /* Arka plan resminin konumunu sağa hizalar */
}

/* Border */
.border {
    border: 2px solid #333; /* 2 piksel kalınlığında koyu gri bir kenarlık ekler */
    border-radius: 10px; /* Kenarları yuvarlar */
}

/* Margin ve Padding */
.spacing {
    margin: 20px; /* Elemanın dış boşluklarını ayarlar */
    padding: 20px; /* Elemanın iç boşluklarını ayarlar */
    background-color: #e6e6e6; /* Arka plan rengini açık gri yapar */
}

/* Position */
.positioning {
    position: relative; /* Elemanı göreceli konumlandırır */
    left: 20px; /* Elemanı sola doğru 20 piksel kaydırır */
    top: 10px; /* Elemanı yukarı doğru 10 piksel kaydırır */
    background-color: #ffebcc; /* Arka plan rengini açık turuncu yapar */
}

/* List ve Table */
.styled-list {
    list-style-type: square; /* Liste işaretlerini kare yapar */
    padding: 0; /* Liste elemanlarının iç boşluğunu sıfırlar */
}
.styled-list li {
    margin: 5px 0; /* Her liste elemanının arasına 5 piksel boşluk ekler */
}

.styled-table {
    width: 80%; /* Tablonun genişliğini %80 yapar */
    border-collapse: collapse; /* Çizgilerin birleşmesini sağlar */
    margin-top: 10px; /* Tablonun üst boşluğunu ayarlar */
}
.styled-table th, .styled-table td {
    border: 1px solid #333; /* Tablo hücrelerine kenarlık ekler */
    padding: 10px; /* Hücrelerin iç boşluklarını ayarlar */
    text-align: center; /* Metni ortalar */
}
