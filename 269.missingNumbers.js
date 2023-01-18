var missingNumber = function(nums) {
let mistery = nums.length
    for (let i = 0; i < nums.length; i++) {
        mistery = mistery ^ i ^ nums[i]
    }
    return mistery
}