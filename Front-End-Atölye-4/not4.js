// ! HTML İLE TABLO OLUŞTURMA*****************************************


//TODO Açıklama:
{/* <table border="1">: Bu, tabloya kenar çubuğu ekler. border özniteliği ile tablo hücrelerinin etrafında bir kenarlık oluşturulur.
Diğer etiketler aynı şekilde kullanılır:
<tr>: Satır oluşturur.
<th>: Başlık hücresini belirtir.
<td>: Veri hücresini belirtir. */}

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basit Tablo</title>
</head>
<body>

<h2>Örnek Tablo</h2>

<table border="1">
    <tr>
        <th>İsim</th>
        <th>Yaş</th>
        <th>Şehir</th>
    </tr>
    <tr>
        <td>Aylin</td>
        <td>25</td>
        <td>İstanbul</td>
    </tr>
    <tr>
        <td>Mehmet</td>
        <td>30</td>
        <td>Ankara</td>
    </tr>
    <tr>
        <td>Elif</td>
        <td>22</td>
        <td>İzmir</td>
    </tr>
</table>

</body>
</html>



{/* ************************************* CSS ********************************************************************************** */}


// !1. CSS Giriş (20 Dakika)
//TODO CSS Nedir ve Neden Kullanılır?

// CSS (Cascading Style Sheets), web sayfalarının görünümünü düzenlemek için kullanılır.
// CSS sayesinde HTML ile oluşturulan içerikler daha estetik ve düzenli hale getirilir.
// CSS, bir web sayfasının stilini (renk, font, düzen) belirleyerek kullanıcı deneyimini iyileştirir.

//TODO CSS Kullanımının Önemi:
// CSS, içerik ve görünüm ayrımı sağlar, HTML’i sadeleştirir.
// Sayfa yüklenme hızını artırabilir ve bakım sürecini kolaylaştırır.
// Tek bir CSS dosyası ile tüm sayfalara aynı stil uygulanabilir.

//TODO 2. CSS Nedir? (10 Dakika)
//TODO CSS'in Tam Adı:

// CSS, "Cascading Style Sheets" ifadesinin kısaltmasıdır.
// ‘Cascading’ kelimesi, stillerin birbiri üzerine uygulandığını ifade eder.

//TODO HTML ile Bağlama:
// İç CSS (Internal CSS): HTML dosyasının <head> kısmına <style> etiketi ile yazılır.
// Dış CSS (External CSS): Ayrı bir .css dosyasında yazılır ve HTML sayfasına <link> etiketiyle bağlanır.
// Satır İçi CSS (Inline CSS): HTML etiketinin style özelliğinde tanımlanır, fakat tavsiye edilmez.

//TODO CSS Dosya Yapısı 
//? CSS Dosyalarının Organize Edilmesi:

// CSS dosyaları genellikle projede ‘styles.css’ gibi adlandırılarak ayrı bir dosyada tutulur.
// İdeal olarak, CSS dosyaları HTML dosyasıyla aynı klasörde veya proje yapısına göre düzenlenmiş bir "css" klasöründe bulunabilir.

//TODO Dosya Düzeni ve Bağlantı:
// Eğer CSS dosyaları farklı bir klasörde ise, <link href="css/styles.css" rel="stylesheet"> şeklinde bağlanabilir.
// Doğru düzenlenmiş bir dosya yapısı, proje yönetimini kolaylaştırır ve kodun anlaşılabilirliğini artırır.

//TODO CSS Syntax
// ?CSS Kural Yapısı:
selector {
    property: value;
   }
  
// Selector: Hangi HTML elemanının stil alacağını belirler.
// Property: Değiştirmek istediğimiz özellik (ör. renk, font, arka plan).
// Value: Özelliğin alacağı değer (ör. mavi renk, 16px font).

//TODO CSS Kurallarının Uygulanması:
//? Örnek: Başlık rengini kırmızı yapmak için
h1 {
    color: red;
  }
  
// TODO ************************************************************************************************************************************

//   TODO CSS Selectors
//   1.Element Seçici: HTML etiketi seçilir, örn: h1, p.
p {
    color: blue;
  }
  

//   2.Class Seçici: . işareti ile tanımlanır, birden fazla elemanda kullanılabilir.
.myClass {
    font-size: 18px;
  }

//   ID Seçici: # işareti ile tanımlanır, tek bir elemanda kullanılır.
#myID {
    background-color: yellow;
  }
  

// TODO  Diğer Seçici Türleri:

// Gruplama Seçicileri: Aynı stil kuralını birden fazla eleman için uygulamak.
h1, p {
    color: green;
  }

//   İç İçe Geçme Seçicileri: İç içe geçen elemanlara stil vermek için kullanılır.
div p {
    font-weight: bold;
  }

//   Evrensel Seçici: Tüm elementlere aynı stili uygulamak.
* {
    margin: 0;
    padding: 0;
  }
  

//   todo *****************************************************************************ÖRNEK******************************************************
// *******************************************************************HTML SAYFASI*****************************************************************
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>CSS Örnek Sayfası</title>
</head>
<body>
    <div class="container">
        <h1 id="mainTitle">Merhaba Dünya!</h1>
        <p class="description">Bu, CSS ile stil verilmiş bir paragraftır.</p>
        <p class="description">CSS kullanarak web sayfanızın görünümünü geliştirebilirsiniz.</p>
    </div>
</body>
</html>
{/* **********************************************************************STYLE SAYFASI************************************************************* */}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 8px;
}

#mainTitle {
    color: red; /* Başlık rengi kırmızı */
    font-size: 24px; /* Başlık boyutu */
    text-align: center; /* Ortaya hizalama */
}

.description {
    color: blue; /* Paragraf rengi mavi */
    font-size: 18px; /* Paragraf boyutu */
    line-height: 1.5; /* Satır yüksekliği */
}

.description:first-of-type {
    font-weight: bold; /* İlk paragraf kalın yazı */
}

h1, p {
    margin-bottom: 10px; /* Alt boşluk */
}

{/* ***************************************************************************************************************************************** */}
{/* Açıklamalar */}
{/* HTML Yapısı: */}

{/* div elementi bir konteyner olarak kullanılmış ve içeride bir başlık (h1) ile iki paragraf (p) yer alıyor.
class ve id kullanımı sayesinde CSS'de stilleri tanımlarken daha spesifik seçimler yapılmış.
CSS Yapısı:

Evrensel seçici (*) ile tüm elementlerin varsayılan margin ve padding değerleri sıfırlanıyor.
.container sınıfı ile genişlik, kenar boşlukları, iç boşluk, arka plan rengi ve kenar stilleri tanımlanmış.
#mainTitle ile başlığın rengi kırmızı ve boyutu belirlenmiş.
.description sınıfı ile paragrafların rengi mavi ve boyutu ayarlanmış.
İlk paragraf için özel bir stil verilerek kalın yazı biçimi uygulanmış.
h1 ve p için alt boşluk eklenmiş. */}