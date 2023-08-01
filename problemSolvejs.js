function countCharacters(character) {
  // Helper function to count the occurrence of each character in a character
  const charCount = new Map();
  for (const char of character.toLowerCase()) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  return charCount;
}

function areAnagrams(character1, character2) {
  // Helper function to check if two characters are anagrams
  if (character1.length !== character2.length) {
    return false;
  }
  const charCount1 = countCharacters(character1);
  const charCount2 = countCharacters(character2);
  for (const [char, count] of charCount1.entries()) {
    if (charCount2.get(char) !== count) {
      return false;
    }
  }
  return true;
}

function isAnagramInArray(anagram, arr) {
  const sortedAnagram = anagram.toLowerCase().split("").sort().join("");
  const arrayOfAnagrams = [];

  arr.forEach((item) => {
    const sortedItem = item.toLowerCase().split("").sort().join("");
    if (sortedItem === sortedAnagram) {
      arrayOfAnagrams.push(item);
    }
  });

  return arrayOfAnagrams;
}

const anagrams = [
  "oz bilal tochberer",
  "it's razorbill beachcomber",
  "och robe tilblazer",
  "bib chorizo cellarmaster",
  "thor bble carizole",
  "zll borcht aberoie",
  "brzl orche atobile",
  "dame shelburne characterizing",
  "uber englishman characterized",
  "agnes rhumbline characterized",
  "rehab scrutinized charlemagne",
  "dreams zurich interchangeable",
  "bam hamster technocratic",
  "mechatronic masterbatch",
  "bam ratchet mechatronics",
];


console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
