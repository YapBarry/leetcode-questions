/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    cleanedStr = "" //cannot modify string but can concat it
    setList = "abcdefghijklmnopqrstuvwxyz0123456789"

    for(let i=0; i< s.length; i++){
        // check if char is alphanumeric    
        lcase = s[i].toLowerCase()
        if(setList.indexOf(lcase) !== -1) {          
            cleanedStr += lcase
        }
    }
    left = 0
    right = cleanedStr.length -1;
    while (left < right) {
        if(cleanedStr[left] !== cleanedStr[right]){
            return false
        }
        left++
        right--
    }
    return true;

};
