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
