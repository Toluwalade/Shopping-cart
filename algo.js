function wordCount(str) { 
    
    const character = str.match(/[a-z$&+,:;=?@#|'<>.-^*()%!_]/gi).length; 

    const numOfVowels = str.match(/[aeiou]/gi).length;

    const numOfWords = str.split(" ").length;

    return ("There are " + numOfVowels + " numbers of vowels, " + character + " numbers of character, and " + numOfWords + " numbers of words in this sentence");
}

  console.log(wordCount("Prove of the above code!!"));