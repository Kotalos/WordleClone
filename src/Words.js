import wordBank from "./bank.txt";

export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
];

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;

    await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
        const wordArr = result.split("\n");
        for (var i = 0; i < wordArr.length; i++) {
            wordArr[i] = wordArr[i].replace("\r", "");
        };
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
    });

    return { wordSet, todaysWord }; 
};