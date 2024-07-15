// Função que calcula a posição final do herói

function calculateEndPosition(startPosition, totalSteps) {

  return startPosition + totalSteps;
}

// Função principal que simula a jornada do herói

function simulateJourney() {

  // Solicita a posição inicial do herói e converte para número

  let startPosition = parseInt(gets(), 10);

  // Solicita o número total de passos que o herói deve dar e converte para número

  let totalSteps = parseInt(gets(), 10);
   
  // Calcula a posição final do herói

  let endPosition = calculateEndPosition(startPosition, totalSteps);
  
  // Exibe a posição final do herói

  print(`Posicao final do heroi: ${endPosition}`);

}

// Executa a função principal

simulateJourney();
