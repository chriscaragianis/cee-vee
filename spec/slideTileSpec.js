describe("SlideTile", function() {
  it ("initializes with the correct tiles visible", function () {
    resetStubs();
    expect($('#dummy-tile-1-1').css('display')).toEqual('block'); 
    expect($('#dummy-tile-1-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-3').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-1').css('display')).toEqual('block'); 
    expect($('#dummy-tile-2-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-3').css('display')).toEqual('none');
  }); 
  it ("brings up the next tile to the left on click left", function () {
    resetStubs();
    expect($('#dummy-tile-1-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-3').css('display')).toEqual('block'); 
    expect($('#dummy-tile-2-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-3').css('display')).toEqual('block');
  }); 
  it ("brings up the next tile to the left on swipe left", function () {
    resetStubs();
    expect($('#dummy-tile-1-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-3').css('display')).toEqual('block'); 
    expect($('#dummy-tile-2-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-3').css('display')).toEqual('block');
  }); 
  it ("brings up the next tile to the right on click right", function () {
    resetStubs();
    expect($('#dummy-tile-1-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-2').css('display')).toEqual('block'); 
    expect($('#dummy-tile-1-3').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-2').css('display')).toEqual('block'); 
    expect($('#dummy-tile-2-3').css('display')).toEqual('none');
  }); 
  it ("brings up the next tile to the right on swipe right", function () {
    resetStubs();
    expect($('#dummy-tile-1-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-2').css('display')).toEqual('block'); 
    expect($('#dummy-tile-1-3').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-2').css('display')).toEqual('block'); 
    expect($('#dummy-tile-2-3').css('display')).toEqual('none');
  }); 
});
