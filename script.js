// Dicionário do código Morse (padrão internacional ITU-R M.1677)
// O espaço entre palavras é representado por "/"

const MORSE = {
  // Letras
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  // Números
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",

  // Pontuação
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",

  // Espaço entre palavras
  " ": "/",
};

// Caracteres acentuados (extensões não oficiais, úteis para o português)
const MORSE_ACENTOS = {
  À: ".--.-",
  Á: ".--.-",
  Ã: ".-.-",
  Â: ".-.-",
  É: "..-..",
  Ê: "..-..",
  Ç: "-.-..",
  Ó: "---.",
  Õ: "---.",
  Ô: "---.",
  Ú: "..--",
  Í: "..",
};

const textInput = document.getElementById("text-input");
const morseOutput = document.getElementById("morse-output");
const btnSwap = document.getElementById("btn-swap");

const TEXTO = {};
for (const letra in MORSE) {
  TEXTO[MORSE[letra]] = letra;
}

function textoParaMorse(texto) {
  texto = texto.toUpperCase();
  let resultado = "";

  for (const letra of texto) {
    const codigo = MORSE[letra];
    if (codigo) {
      resultado += codigo + " ";
    }
  }

  return resultado.trim();
}

function morseParaTexto(morse) {
  const codigos = morse.trim().split(" ");
  let resultado = "";

  for (const codigo of codigos) {
    const letra = TEXTO[codigo];
    if (letra) {
    resultado += letra;
    }
}

    return resultado;
}

textInput.addEventListener("input", () => {
    morseOutput.value = textoParaMorse(textInput.value);
});

btnSwap.addEventListener("click", () => {
    textInput.value = morseParaTexto(morseOutput.value);
});

function atualizarSlider(slider) {
  const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.setProperty("--valor", pct + "%");
}

document.querySelectorAll('input[type="range"]').forEach((slider) => {
    atualizarSlider(slider);
    slider.addEventListener("input", () => atualizarSlider(slider));
});