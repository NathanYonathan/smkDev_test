function calculateWeights(string) {
    const weights = new Set();
    let i = 0;
    
    while (i < string.length) {
        let char = string[i];
        let weight = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        let sum = 0;
        
        while (i < string.length && string[i] === char) {
            sum += weight;
            weights.add(sum);
            i++;
        }
    }
    
    return weights;
}

function queryWeights(string, queries) {
    const weights = calculateWeights(string);
    const result = queries.map(query => weights.has(query) ? "Yes" : "No");
    return result;
}

const inputString = "abbcccd";
const queries = [1, 3, 9, 8];
const output = queryWeights(inputString, queries);
console.log(output);