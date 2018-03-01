describe('Bubble Sort', function(){
    
    // beforeAll(function () {
    //     spyOn(swap).and.callThrough();
    //     spyOn(compare).and.callThrough();
    // });

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

 
    it('handles one element', function(){
    
    // expect(swap.calls.count()).toEqual(0);
    // expect(compare.calls.count()).toEqual(0);
    expect(bubbleSort([1])).toEqual([1]);
    
    });

    let arr = [6,1,9,8,2];

    it('handles five elements', function(){
    // expect(swap.calls.count()).toEqual(5);
    // expect(compare.calls.count()).toEqual(12);
    expect(bubbleSort(arr)).toEqual(arr.sort());
    });

});