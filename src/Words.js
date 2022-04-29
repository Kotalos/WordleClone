import wordBank from "./bank.txt";
const ApiLink = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    let meaning;

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

        

    console.log(todaysWord);
    return { wordSet, todaysWord };
};

export const getDefinition = async (word) => {
    let meaning;

    await fetch(ApiLink + word).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        meaning = data[0].meanings[0].definitions[0].definition;
        console.log(meaning);
    }).catch(function () {
        console.log("Booo");
    });

    console.log(meaning);
    return meaning;
};