/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Time complexity O(n)
// Memory complexity O(n)
// We can alternatatively use sorting algorithms but time complexity will likely exceed this method
var isAnagram = function(s, t) {
    // if lengths are different, we can immediately return false
    if(s.length != t.length){
        return false
    }
    let ht1 = {}
    let ht2 = {}
    for(i=0; i< s.length; i++){
        if(ht1[s[i]] == undefined){
            ht1[s[i]] = 1;
        } else {
            ht1[s[i]] += 1
        }
        if(ht2[t[i]] == undefined){
            ht2[t[i]] = 1;
        } else {
            ht2[t[i]] += 1
        }
    }
    // compare the 2 hashtables
    for (const [key, value] of Object.entries(ht2)) {
        if(ht1[key] != value){
            return false
        }
    }
    return true
};