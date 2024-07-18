function isBalanced(bracketString) {
    const stack = [];
    const matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of bracketString) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
                return "NO";
            }
        }
    }
    
    return stack.length === 0 ? "YES" : "NO";
}

// Example usage:
console.log(isBalanced("{ [ ( ) ] }"));
console.log(isBalanced("{ [ ( ] ) }"));
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }"));