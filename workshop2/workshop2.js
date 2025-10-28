
// Initialisation : Créer un tableau result vide pour stocker les nombres ayant une fréquence impaire.

// Boucle externe (itération sur chaque élément) :
// Pour l’élément à la position i,
// initialiser count = 0.

// Boucle interne (compter les occurrences) :
// Comparer l’élément actuel arr[i] avec chaque élément du tableau.
// Si les deux sont identiques, incrémenter count.

// Vérification de la condition :
// Si count est impair (count % 2 !== 0)
// et que l’élément n’existe pas déjà dans result,
// alors l’ajouter à result.

// Retour :
// Retourner le tableau result.


// of boucle for
function findOddOne(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count % 2 !== 0 && !result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// of reduce()
function findOddOneReduce(arr) {
  return arr.reduce((result, num) => {
    const count = arr.filter(n => n === num).length;

    if (count % 2 !== 0 && !result.includes(num)) {
      result.push(num);
    }

    return result;
  }, []);
}

// simple test
console.log(findOddOne([1, 2, 3, 2, 3, 1, 3]));
console.log(findOddOneReduce([1, 2, 3, 2, 3, 1, 3]));

// Teste of 10 000 nombre
const longArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100));

console.time("NORMAL");
findOddOne(longArray);
console.timeEnd("NORMAL");

console.time("Reduce ");
findOddOneReduce(longArray);
console.timeEnd("Reduce ");
