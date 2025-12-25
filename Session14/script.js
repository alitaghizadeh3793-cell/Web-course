var numbers = [12, 29, 88];

function avg(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length;
}

console.log(avg(numbers));
