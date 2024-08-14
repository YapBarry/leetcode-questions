/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let prevVal;
    let pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for(let i=0; i< s.length; i++){
        // if it's an opening bracket, add it to our stack
        if(pairs[s[i]]){
            stack.push(s[i])
        } else {
            // if it's a closing bracket, compare with existing stack of open brackets
            prevVal = stack.pop()
            // if it does not match, means it fails the test
            if(pairs[prevVal] !== s[i]){
                return false
            }
        }
    }
    // for the edge case where only closing brackets are passed in
    if(!stack.length) {
        return true
    } else {
        return false
    }
    
};