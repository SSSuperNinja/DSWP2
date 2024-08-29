function invertirPalabras(frase) {    const palabras = frase.split(' ');
  
    const palabrasInvertidas = palabras.map(palabra => {
      return palabra.split('').reverse().join('');
    });
  
    const fraseInvertida = palabrasInvertidas.join(' ');
  
    return fraseInvertida;
  }
  
  const frase = "Hola";
  const resultado = invertirPalabras(frase);
  console.log(`Frase original: "${frase}"`);
  console.log(`Frase con palabras invertidas: "${resultado}"`);