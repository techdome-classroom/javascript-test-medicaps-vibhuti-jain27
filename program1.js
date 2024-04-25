function longestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    let count = {};

    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        count[c] = (count[c] || 0) + 1;
        
        while (count[c] > 1) {
            count[s[left]] -= 1;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

module.exports = { longestSubstring };


