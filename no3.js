function highestPalindrome(s, k) {
    let chars = s.split('');
    let n = chars.length;

    function findMismatches(i, mismatches) {
        if (i >= Math.floor(n / 2)) return mismatches;
        if (chars[i] !== chars[n - i - 1]) {
            mismatches.push([i, n - i - 1]);
        }
        return findMismatches(i + 1, mismatches);
    }

    function fixMismatches(mismatches, k) {
        if (mismatches.length === 0) return k;

        let [left, right] = mismatches[0];
        let maxChar = Math.max(chars[left], chars[right]);

        chars[left] = chars[right] = maxChar;
        return fixMismatches(mismatches.slice(1), k - 1);
    }

    function maximizePalindrome(i, k) {
        if (i >= Math.floor(n / 2) || k <= 0) return;
        let left = i;
        let right = n - i - 1;

        if (chars[left] !== '9') {
            if (chars[left] === chars[right]) {
                if (k >= 2) {
                    chars[left] = chars[right] = '9';
                    maximizePalindrome(i + 1, k - 2);
                } else {
                    maximizePalindrome(i + 1, k);
                }
            } else {
                chars[left] = chars[right] = '9';
                maximizePalindrome(i + 1, k - 1);
            }
        } else {
            maximizePalindrome(i + 1, k);
        }
    }

    let mismatches = findMismatches(0, []);

    if (mismatches.length > k) {
        return '-1';
    }

    k = fixMismatches(mismatches, k);
    maximizePalindrome(0, k);

    if (n % 2 === 1 && k > 0) {
        chars[Math.floor(n / 2)] = '9';
    }

    return chars.join('');
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2));