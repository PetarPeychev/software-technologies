function product(nums) {
    let firstNum = Number(nums[0]);
    let secondNum = Number(nums[1]);
    let thirdNum = Number(nums[2]);
    let product = firstNum * secondNum * thirdNum;
    if (product < 0) console.log('Negative');
    else console.log('Positive');
}