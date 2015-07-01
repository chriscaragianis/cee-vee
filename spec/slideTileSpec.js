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
    $('.left-arrow').click(); 
    expect($('#dummy-tile-1-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-3').css('display')).toEqual('block'); 
    expect($('#dummy-tile-2-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-3').css('display')).toEqual('block');
  }); 
  it ("brings up the next tile to the left on swipe", function () {
    resetStubs();
    $('.slide-tile').swipe(); 
    expect($('#dummy-tile-1-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-3').css('display')).toEqual('block'); 
    expect($('#dummy-tile-2-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-2').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-3').css('display')).toEqual('block');
  }); 
  it ("brings up the next tile to the right on click right", function () {
    resetStubs();
    $('right.arrow').click(); 
    expect($('#dummy-tile-1-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-1-2').css('display')).toEqual('block'); 
    expect($('#dummy-tile-1-3').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-1').css('display')).toEqual('none'); 
    expect($('#dummy-tile-2-2').css('display')).toEqual('block'); 
    expect($('#dummy-tile-2-3').css('display')).toEqual('none');
  }); 
});
