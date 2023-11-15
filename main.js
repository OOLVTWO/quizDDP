//Surya Adi Darmawan
//Sistem Informasi
//2301010032

const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
        "q": "Apa ibukota Indonesia?",
        "o": [
            'Jakarta',
            'Surabaya',
            'Bandung',
            'Medan',
        ],
        "a": 0 
    },
    {
        "q": "Siapakah presiden kedua Indonesia?",
        "o": [
            'Soeharto',
            'Soekarno',
            'Joko Widodo',
            'Megawati Soekarnoputri',
        ],
        "a": 0 
    },
    {
        "q": "Berapakah hasil dari 10 * 7?",
        "o": [
            '50',
            '70',
            '20',
            '75',
        ],
        "a": 1 
    },
    {
        "q": "Siapakah penemu fusi nuklir?",
        "o": [
            'Alber Einstein',
            'Nikola Tesla',
            'Alexander Graham Bell',
            'Thomas edison',
        ],
        "a": 0 
    }
];

let nama = prompt('Input nama: ');

for (let i = 0; i < soal.length; i++) {
    console.log(`\nSoal ${i + 1}: ${soal[i].q}`);
    for (let j = 0; j < soal[i].o.length; j++) {
        console.log(`${j + 1}. ${soal[i].o[j]}`);
    }

    let jawabanUser = prompt('Masukkan nomor jawaban Anda: ');
    jawabanUser = parseInt(jawabanUser) - 1; // Mengonversi jawaban pengguna menjadi angka

    if (jawabanUser === soal[i].a) {
        console.log('Jawaban Anda benar!');
        score += point_per_soal;
        jawaban_benar++;
    } else {
        console.log('Jawaban Anda salah.');
        score += point_per_soal;
        jawaban_salah++;
    }
}
// Menampilkan statistik kuis
console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)



