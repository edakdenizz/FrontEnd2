const slides = document.querySelectorAll('.slide');
// js'te diziler 0dan başaldığ için ilk verilen slideın indexi 0 olarak atanır.
let currentIndex = 0;

function showSlide(index){
    // Tüm slidelardan active classını remove eder. Bu sınıf, geçerli slideı belirtmek için kullanılır.
    slides.forEach((slide,i)=> {
        slides.classList.remo('active');
        if (i === index)slide.classList.add('active');
    });
    
}
// İleri Button için Fonks
function nextSlide(){
    // Geçerli indexi 1 arttırmayı sağlıyor.
    currentIndex = (currentIndex+1) % slides.length;
    // showSlide fonksiyonuna geçerli indexi gönderiyoruz.
    showSlide(currentIndex);
}

// Geri Button için Fonks
function prevSlide(){
    currentIndex = (currentIndex-1+ slides.length)%slides.length;
    showSlide(currentIndex);

}

// Otomatik Geçiş için Fonks
let autoSlide = setInterval(nextSlide,3000);
    // 3 saniye sonra nextSlide fonksiyonunu çağırmayı sağlıyor.
document.getElementById('next').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

// Otomatik Geçişi Sıfırla
function resetAutoSlide(){
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
}