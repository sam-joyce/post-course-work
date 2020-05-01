// 07. How do you reverse the words in a sentence?

const reverseSentence = (sentence) => {
  return console.log(sentence.split(' ').reverse().join(' '));
}

reverseSentence('This sentence will be reversed');