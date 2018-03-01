describe('Bubble Sort', function(){
    
    beforeAll(function () {
        spyOn(swap).and.callThrough();
    });

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

 
    it('handles one element', function(){
    
    expect(swap.calls.count()).toEqual(0);
    expect(bubbleSort([1])).toEqual([1]);
    
    });



    it('handles five elements', function(){
    expect(swap.calls.count()).toEqual(5);
    expect(bubbleSort([6,1,9,8,2])).toEqual([1,2,6,8,9]);
   
    
    });

// it('handles multiple elements', function(){
//     expect(bubbleSort([6,1,9,8,2,3,34,23,11,0,-1])).toEqual([-1,0,1,2,3,6,8,9,11,23,34]);

// });


