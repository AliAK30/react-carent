let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

    console.log(typeof(arr))
function removeDuplicates(arr) {
return [...new Set(arr)];
}

console.log(typeof(removeDuplicates(arr)));