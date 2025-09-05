// var HariIni = prompt("Masukkan Hari ini!");
// var HariIni = HariIni.charAt(0).toUpperCase() + HariIni.slice(1).toLowerCase();

// const HariIni = prompt("Masukkan hari ini!") || "";
// HariIni = HariIni.charAt(0).toUpperCase() + HariIni.slice(1).toLowerCase();

// const HariIni = (prompt("Masukkan hari ini!") || "").charAt(0).toUpperCase() + (prompt("Masukkan hari ini!") || "").slice(1).toLowerCase();

// const HariIni = (() => {
//   const input = prompt("Masukkan hari ini!") || "";
//   return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
// })();

// if (HariIni === "Senin") {
//   console.log("Selamat Bekerja");
// } else if (HariIni === "Jumat") {
//   console.log("Bentar lagi Weekend");
// } else {
//   console.log("Ya Engga Tau Kok Tanya Saya");
// }

// const Password = prompt("Buat Password");

// if (Password.length >= 6) {
//   if (Password.indexOf(" ") === -1) {
//     if (Password.indexOf("*" || "&" || "$" || "#" || "!" || "@") === -1) {
//       console.log("Password harus memuat karakter spesial");
//     } else {
//       console.log("Password berhasil dibuat");
//     }
//   } else {
//     console.log("Tidak boleh ada spasi");
//   }
// } else {
//   console.log("Password tidak valid, Minimal 6 Karakter");
// }

// const angka = ["satu", "dua", "tiga", "empat"];

// for (let i = 0; i < angka.length; i++) {
//   console.log(i, angka[i]);
// }

// -----------------------------------------------------------------

// const BarisanMurid = [
//   ["Denis", "Budi", "Agus", "Andi"],
//   ["Intan", "Dani", "Amel", "Yusuf"],
//   ["Putra", "Sani", "Reza", "Nia"],
// ];

// for (i = 0; i < BarisanMurid.length; i++) {
//   const Baris = BarisanMurid[i];
//   console.log("Nomor Baris", i + 1);
//   for (j = 0; j < Baris.length; j++) {
//     console.log(" ", Baris[j]);
//   }
// }

// -----------------------------------------------------------------
// let num = 0;
// const pola = "&";
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// let angka = Math.random();
// let input = prompt("Tebak angka");
// while (true) {
//   input = prompt(input);
//   if (input === angka) {
//     break;
//   } else if (input.toLowerCase === "nyerah") {
//     console.log(angka);
//   }
// }
// alert("Congrats");

// -----------------------------------------------------------------

// let maksimal = parseInt(prompt("Masukkan Angka Maksimal"));
// let angka = Math.floor(Math.random() * maksimal) + 1; // angka acak 1-10
// let input = parseInt(prompt(`Tebak angka 1 - ${maksimal + 1} ), atau ketik 'nyerah' untuk menyerah:`));

// while (true) {
//   if (parseInt(input.toLowerCase() === "nyerah")) {
//     console.log("Angkanya adalah:", angka);
//     break;
//   } else if (parseInt(input) > angka) {
//     alert("Lebih Kecil! Coba Lagi!");
//   } else if (parseInt(input) < angka) {
//     alert("Lebih Besar! Coba Lagi!");
//   } else if (parseInt(input) === angka) {
//     alert("Congrats, kamu benar!");
//     break;
//   }
// }

// -----------------------------------------------------------------
// let maksimal = parseInt(prompt("Masukkan Angka Maksimal"));
// let angka = Math.floor(Math.random() * maksimal) + 1; // angka acak 1 - maksimal

// while (true) {
//   let input = prompt(`Tebak angka 1 - ${maksimal}, atau ketik 'nyerah' untuk menyerah:`);

//   if (input.toLowerCase() === "nyerah") {
//     console.log("Angkanya adalah:", angka);
//     break;
//   }

//   let tebakan = parseInt(input);

//   if (tebakan > angka) {
//     alert("Lebih Kecil! Coba Lagi!");
//   } else if (tebakan < angka) {
//     alert("Lebih Besar! Coba Lagi!");
//   } else if (tebakan === angka) {
//     alert("Congrats, kamu benar!");
//     break;
//   } else {
//     alert("Input tidak valid, masukkan angka atau 'nyerah'.");
//   }
// }

// -----------------------------------------------------------------

// function sapa(nama) {
//   console.log(`Hai ${nama}, salam kenal.`);
// }

// let menyapa = prompt("Siapa namamu?");
// sapa(menyapa);

// function penjumlahan(a, b) {
//   const total = a + b;
//   console.log(total);
// }

// let angkapertama = parseInt(prompt("Masukkan angka pertama"));
// let angkakedua = parseInt(prompt("Masukkan angka kedua"));

// penjumlahan(angkapertama, angkakedua);

// -----------------------------------------------------------------
// let nilailet = 1;
// var nilaivar = 2;

// if (true) {
//   let nilailet = 10;
//   var nilaivar = 20;
//   console.log(nilailet);
//   console.log(nilaivar);
// }

// console.log(nilailet);
// console.log(nilaivar);

// let hasilPangkat = function power(angka, pangkat) {
//   hasil = angka ** pangkat;
//   console.log(`Hasil dari ${angka} dipangkatkan ${pangkat} adalah ${hasil}`);
// };

// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }

// function hasilnyaFunction() {
//   const rand = Math.random();

//   if (rand > 0.5) {
//     return function () {
//       console.log("Selamat Hasilnya Lebih besar");
//     };
//   } else {
//     return function () {
//       consol.log("Silahkan Coba Lagi");
//     };
//   }
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const angkaGanjil = angka.filter((n) => {
//   return n % 2 === 1;
// });

const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: Connection Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

// requestCallback(
//   "Movie.com",
//   function () {
//     console.log("It Worked!");
//   },

//   function () {
//     console.log("Error, It Failed!");
//   }
// );

requestCallback(
  "Movie.com",
  function (response) {
    console.log("succeer", response);
  },

  function (error) {
    console.log("Error, It Failed!", error);
  }
);
