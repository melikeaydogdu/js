// ALIŞTIRMA (SWITCH-CASE)

/*
1- prompt ile adlığın bilgiye göre aşağıdaki yapıyı kullanarak notun bilgisini infoya yazdır.

AA: 90-100
BA: 85-89
BB: 80-84
CB:  75-79
CC:  70-74
DC:  65-69
DD:  60-64
FD:  50-59
FF: 0-49

2- Kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et 
*/

var point = Number(prompt("Lütfen notunuzu giriniz: "));


if (point >= 90 && point <= 100) {
    console.log("AA :)");
} 
else if (point >= 85 && point <= 89) {
    console.log("BA :)");
} 
else if (point >= 80 && point <= 84) {
    console.log("BB :)");
} 
else if (point >= 75 && point <= 79) {
    console.log("CB :)");
} 
else if (point >= 70 && point <= 74) {
    console.log("CC :)");
} 
else if (point >= 65 && point <= 69) {
    console.log("DC :)");
} 
else if (point >= 60 && point <= 64) {
    console.log("DD :)");
} 
else if (point >= 50 && point <= 59) {
    console.log("FD :)");
} 
else if (point >= 0 && point <= 49) {
    console.log("FF :(");
} 
else {
    console.log("Geçersiz Not. İstenilen aralık dışı not girdiniz.");
}

