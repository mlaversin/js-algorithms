function isAnagram(word1, word2) {
  if (
    word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('')
  ) {
    return 'Ces mots sont des anagrammes !';
  } else {
    return 'Ces mots ne sont pas des anagrammes...';
  }
}

console.log(isAnagram('Chien', 'Niche'));
