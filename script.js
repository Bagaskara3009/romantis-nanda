
function showLove() {
  const message = document.getElementById("loveMessage");
  message.innerText = `Nanda sayang...

Seandainya aku bisa merangkai kata-kata seindah senyummu, mungkin aku akan menulis sejuta paragraf hanya untuk menggambarkan betapa berharganya kamu bagiku.

Setiap hariku terasa lebih cerah sejak kamu hadir. Aku suka caramu tertawa, caramu marah kecil, caramu menyemangati aku saat aku sedang down. Semua tentang kamu... selalu bisa membuat aku tersenyum.

Kamu bukan hanya seseorang yang aku cintai, tapi juga seseorang yang membuat aku merasa cukup hanya dengan jadi diriku sendiri.

Mungkin aku bukan yang paling romantis, paling puitis, atau paling sempurna. Tapi satu hal yang aku yakini: aku akan selalu berusaha membuatmu bahagia, dengan segala cara yang aku bisa.

Terima kasih ya, sudah menjadi bagian dari hidupku.

Aku sayang kamu, Nanda. Hari ini, besok, dan seterusnya. ❤️`;

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
