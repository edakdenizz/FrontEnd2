// Tüm slaytları seç
// Amacı:
// HTML'de class="slide" olarak tanımlanmış tüm elemanları seçerek bir "NodeList" (liste benzeri bir yapı) oluşturur.

// Detay:

// document.querySelectorAll: Belirtilen CSS seçicisine (.slide) uyan tüm elemanları seçer.
// Sonuç: Seçilen tüm elemanlar, slides değişkenine atanır.

const slides = document.querySelectorAll('.slide');

// ? ***************************************************************
// Başlangıç indeksi
// Amacı:
// Geçerli slaytın dizinini (index) tutar.

// Detay:

// JavaScript'te diziler sıfırdan başladığı için ilk slaytın indeksi 0 olarak atanır.
let currentIndex = 0;
// ? ********************************************************************
// Slaytları gösterme fonksiyonu
// slides.forEach: slides listesindeki her bir eleman üzerinde döner.
// slide.classList.remove('active'): Tüm slaytlardan active sınıfını kaldırır. Bu sınıf, geçerli slaytı belirlemek için kullanılır.
// if (i === index): Geçerli slaytın indeksini kontrol eder.
// slide.classList.add('active'): Sadece belirtilen index numarasındaki slayta active sınıfını ekler ve onu görünür hale getirir.
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}
// ? *************************************************************
// İleri düğmesi için fonksiyon
// currentIndex + 1: Geçerli indeks bir artırılır.
// % slides.length: mod işlemi. Eğer son slayta ulaşıldıysa, indeksi tekrar sıfır yapar (döngüsel geçiş).
// showSlide(currentIndex): Yeni geçerli indekse göre slaytı görüntüler.

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
// ? **************************************************************

// Geri düğmesi için fonksiyon
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}
// ? ************************************************************

// Otomatik geçiş fonksiyonu
// setInterval: Belirtilen işlevi (burada nextSlide) her 3 saniyede bir çalıştırır.
// 3000: Zaman aralığını milisaniye cinsinden belirtir (3 saniye).

let autoSlide = setInterval(nextSlide, 3000);
// ? *****************************************************

//"İleri" düğmesine tıklanınca bir sonraki slayta geçişi sağlar.
// document.getElementById('next'): HTML'de id="next" olan elemanı seçer.
// addEventListener('click', ... ): Bu elemana bir "tıklama" olayı ekler.
// nextSlide(): Tıklama sırasında bir sonraki slayta geçiş yapar.
// resetAutoSlide(): Otomatik geçişi sıfırlar ve tekrar başlatır.

document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

// "Geri" düğmesine tıklanınca bir önceki slayta geçişi sağlar.

// Detay:
// Aynı "İleri" düğmesi mantığında çalışır, ancak burada prevSlide() fonksiyonu çağrılır.
// ? ************************************************************
document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

// ? **************************************************************
// Otomatik geçişi sıfırlama
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
}




// Çalışma Mantığı
// Otomatik Geçiş: setInterval ile her 3 saniyede bir nextSlide fonksiyonu çağrılır.
// Manuel Kontrol:
// "İleri" düğmesine basıldığında nextSlide çağrılır.
// "Geri" düğmesine basıldığında prevSlide çağrılır.
// Geçiş Efektleri: showSlide fonksiyonu, aktif slayt için .active sınıfını ekler ve diğerlerinden kaldırır.
// Reset İşlevi: Manuel bir işlem (düğme tıklama) yapıldığında, otomatik geçiş sıfırlanır ve yeniden başlar.
