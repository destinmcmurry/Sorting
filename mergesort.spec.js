describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
    });

    describe('Merge sort function', function(){
        it('is able to sort an array', function(){
          // test the merging algorithm
        });
      
    
    // beforeAll(function () {
    //     spyOn(swap).and.callThrough();
    //     spyOn(compare).and.callThrough();
    // });

    it('handles an empty array', function(){
      expect( mergeSort([]) ).toEqual( [] );
    });

 
    it('handles one element', function(){
    
    // expect(swap.calls.count()).toEqual(0);
    // expect(compare.calls.count()).toEqual(0);
    expect(mergeSort([1])).toEqual([1]);
    
    });

    let arr = [6,1,9,8,2];

    it('handles five elements', function(){
    // expect(swap.calls.count()).toEqual(5);
    // expect(compare.calls.count()).toEqual(12);
    expect(mergeSort(arr)).toEqual(arr.sort());
    });

});