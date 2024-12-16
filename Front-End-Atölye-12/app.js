// ! Fonksiyon Yapısı
//function greet(){
//    console.log();
//}
//greet()


function sayHello(name){
    console.log("Merhaba," +name+ "!");
}
sayHello("Eda"); //çıktı vermesi gerekiyor : Merhaba,Eda! yazmalı



// ********************************************
// İki Sayının Toplamı 
function addNumbers(num1,num2){
    let toplam = num1 + num2;
    console.log("Toplam: " + toplam);
}
addNumbers(5,7);

// ********************************************
// ! Geri Dönüş Değerler

function multiply(num3,num4){
    return num3 * num4;
}
let result = multiply(4,3);
console.log("Sonuç:"+ result)