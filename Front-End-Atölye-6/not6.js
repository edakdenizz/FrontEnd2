//! CSS Temel Kavramlar ve Uygulamalar
//! 1. Listeler ve Tablolar
//? Listeler (Lists)
//? Listeleri stilize etmek için kullanabileceğimiz temel özellikler:

/* Liste stil türleri */
ul {
    list-style-type: disc;     /* Dolu daire */
    list-style-type: circle;   /* Boş daire */
    list-style-type: square;   /* Kare */
    list-style-type: none;     /* İşaretsiz */
}

ol {
    list-style-type: decimal;         /* 1, 2, 3 */
    list-style-type: lower-alpha;     /* a, b, c */
    list-style-type: upper-roman;     /* I, II, III */
}

/* Özel liste stilleri */
ul {
    list-style-image: url('bullet.png');  /* Özel işaret resmi */
    list-style-position: inside;          /* İşaretin konumu */
    padding-left: 20px;                   /* Sol boşluk */
}



// **************************************************************************************************************

//! Tablolar (Tables)
//? Tabloları düzenlemek için kullanılan temel özellikler:

table {
    border-collapse: collapse;    /* Kenarlıkları birleştir */
    width: 100%;                 /* Tam genişlik */
}

th, td {
    border: 1px solid #ddd;      /* Hücre kenarlıkları */
    padding: 8px;                /* İç boşluk */
    text-align: left;            /* Metin hizalama */
}

tr:nth-child(even) {             /* Çizgili tablo efekti */
    background-color: #f2f2f2;
}

th {
    background-color: #4CAF50;   /* Başlık arka planı */
    color: white;                /* Başlık metin rengi */
}

// ******************************************************************************************************************

//! 2. CSS Flexbox
// Flexbox, öğeleri esnek bir şekilde düzenlemek için kullanılan modern bir CSS özelliğidir.
//? Temel Flexbox Özellikleri:

.container {
    display: flex;                /* Flex container tanımlama */
    
    /* Ana eksen yönü */
    flex-direction: row;          /* Yatay (varsayılan) */
    flex-direction: column;       /* Dikey */
    
    /* Öğelerin hizalanması */
    justify-content: flex-start;  /* Başa hizala */
    justify-content: center;      /* Ortala */
    justify-content: flex-end;    /* Sona hizala */
    justify-content: space-between; /* Eşit aralıklı */
    
    /* Çapraz eksen hizalama */
    align-items: stretch;         /* Uzat (varsayılan) */
    align-items: center;          /* Ortala */
    align-items: flex-start;      /* Üste hizala */
    align-items: flex-end;        /* Alta hizala */
    
    /* Satır kontrolü */
    flex-wrap: nowrap;           /* Tek satır */
    flex-wrap: wrap;             /* Çok satır */
}

.item {
    flex: 1;                     /* Eşit büyüme */
    flex-grow: 1;                /* Büyüme oranı */
    flex-shrink: 0;              /* Küçülme oranı */
    flex-basis: auto;            /* Başlangıç boyutu */
}

// **********************************************************************************************************************

//! 3. Display ve Konumlandırma
//? Display Özellikleri:
.element {
    display: block;              /* Blok element */
    display: inline;             /* Satır içi element */
    display: inline-block;       /* Satır içi blok */
    display: none;               /* Gizli */
}
// **********************************************************************************************************************

//? Konumlandırma (Position):

.element {
    position: static;            /* Normal akış (varsayılan) */
    position: relative;          /* Göreceli */
    position: absolute;          /* Mutlak */
    position: fixed;             /* Sabit */
    position: sticky;            /* Yapışkan */
    
    /* Konum değerleri */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    /* Katman sırası */
    z-index: 1;
}
// **********************************************************************************************************************

//! 4. Box Model
// Box Model, her HTML elementinin etrafındaki alanları tanımlar.
//? Box Model Bileşenleri:

.element {
    /* İçerik alanı */
    width: 300px;
    height: 200px;
    
    /* İç boşluk */
    padding: 20px;
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    
    /* Kenarlık */
    border: 1px solid black;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    
    /* Dış boşluk */
    margin: 20px;
    margin-top: 10px;
    margin-right: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    
    /* Box-sizing özelliği */
    box-sizing: content-box;     /* Varsayılan */
    box-sizing: border-box;      /* Tavsiye edilen */
}
// **********************************************************************************************************************

//TODO Pratik Örnekler:

//? 1.Ortalanmış İçerik Kutusu:
.centered-box {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    box-sizing: border-box;
}
// **********************************************************************************************************************

//? 2.Esnek Menü Çubuğu:
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #f8f9fa;
}

.menu-item {
    flex: 1;
    text-align: center;
    padding: 10px;
}

// **********************************************************************************************************************

//? 3.Responsive Kart Düzeni:
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.card {
    flex: 1 1 300px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
// **********************************************************************************************************************

//? Önemli İpuçları ve Best Practices:

// Her zaman box-sizing: border-box kullanın - bu, boyutlandırmayı daha öngörülebilir hale getirir.
// Flexbox kullanırken container ve items özelliklerini ayrı ayrı düşünün.
// Position absolute kullanırken, parent elementin position: relative olduğundan emin olun.
// Responsive tasarım için esnek değerler kullanın (%, vh, vw, em, rem).
// Z-index sadece position: static dışındaki elementlerde çalışır.

//todo= Alıştırmalar:Bu alıştırmalar sizin bu konuyu daha iyi anlamanıza katkı sağlayacaktır(Bu bir ödev değildir gelişiminiz için tavsiyedir:)

//1. Bir navigation bar oluşturun (flexbox kullanarak)
//2. 3 kolonlu bir layout tasarlayın
//3. Kartlardan oluşan bir grid sistemi yapın
//4. Tablo verilerini stilize edin
//5. Özel liste işaretleri olan bir menü oluşturun

// Bu alıştırmaları yaparken, öğrendiğiniz tüm konseptleri birleştirmeye çalışın ve responsive tasarım prensiplerini göz önünde bulundurun.