function myFunction(id) {
    var element = document.getElementById(id);
    element.select()
    document.execCommand("copy");
    alert("Copied text" );
  }
  function copyToClipboard(id) {
    var fromz = document.getElementById(id);
    var from = fromz.getElementsByClassName('card-body')
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
function changedrop(){
  var element = document.activeElement.parentElement
  if(element.classList.contains("dropup")){
    element.classList.remove("dropup")
  }else{
    element.classList.add("dropup");
  }
  console.log("â")
}
