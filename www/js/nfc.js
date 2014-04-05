var message = [
  ndef.textRecord("hi james!");
];

var nfcShare = function() {
  alert('hi');
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

$("#share").on("click", function() {
  nfcShare();
});

$("#unshare").on("click", function() {
  nfcUnshare();
});