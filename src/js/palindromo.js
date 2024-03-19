export const palindromo = ( word ) => {
    const reverserWord = word.split("").reverse().join("");
    return reverserWord.toLowerCase().replaceAll(' ', '') === word.toLowerCase().replaceAll(' ', ''); /* ? true : false */
}