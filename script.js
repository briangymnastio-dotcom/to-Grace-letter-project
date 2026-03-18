const message = `Hi Grace...
I'm really sorry for falling asleep last night.
Maaf ya kalau belakangan ini effort aku terasa kurang buat kamu.

Aku tau kamu lagi sibuk kuliah, and I want to be there for u more.
I’ll try my best to do better next time.

I just want you to know that I love u so much, Grace. 
Semangat terus ya, Ice Cream! ❤️`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
