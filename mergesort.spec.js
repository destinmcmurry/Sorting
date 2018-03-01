describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(merge([[1,3,5], [2,4]])).toEqual([1,2,3,4,5]);
    expect(merge([[2,5,7,8], [1,3,4,6]])).toEqual([1,2,3,4,5,6,7,8]);
  });
});

describe('Merge sort function', function () {

  // beforeAll(function () {
  //     spyOn(swap).and.callThrough();
  //     spyOn(compare).and.callThrough();
  // });

  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([]);
  });


  it('handles one element', function () {
    // expect(swap.calls.count()).toEqual(0);
    // expect(compare.calls.count()).toEqual(0);
    expect(mergeSort([1])).toEqual([1]);
  });

  let arr = [6, 1, 9, 8, 2];
  it('handles five elements', function () {
    // expect(swap.calls.count()).toEqual(5);
    // expect(compare.calls.count()).toEqual(12);
    expect(mergeSort(arr)).toEqual(arr.sort());
  });

});