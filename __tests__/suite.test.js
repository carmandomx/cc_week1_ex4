const { pairTheSum } = require('../exercise');

test('Testing the pairTheSum exercise', () => { 
    expect(pairTheSum([])).toBeDefined();
    expect(pairTheSum([5,7,2], 9)).toBe(true);
    expect(pairTheSum([2,9,1], 8)).toBe(false);
    expect(pairTheSum([3,3],6)).toBe(true);
    expect(pairTheSum([2,11,8,7], 9)).toBe(true);
    expect(pairTheSum([3,4,5,6], 2)).toBe(false)
 })