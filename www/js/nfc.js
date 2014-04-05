var message = [
  ndef.textRecord("hi james!");
];

var nfcShare = function() {
  console.log('hi');
  nfc.share(
    message, 
    function() {
      navigator.notification.vibrate(100);
      alert("success!")
    }, 
    function(error) {
      alert(error);
  });
};

var nfcUnshare = function() {
    nfc.unshare(
      function(){
        alert("unshared");
      },
      function(error){
        alert(error)
    });
};

$("#share").click(function() {
  console.log('hi');
  nfcShare();
});

$("#unshare").click(function() {
  alert("hi");
  nfcUnshare();
});