$(document).ready(function(){
  var enteredItems = [];
  $("#Shopping-List").submit(function(event){
    event.preventDefault();

    var inputtedItem = $("input#item").val();
    enteredItems.push(inputtedItem);
    var toUppers = enteredItems.map(function(item){
      return item.toUpperCase();
    });
    var orderedItems = toUppers.sort();
    var list = document.getElementById("updated-list");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    }
    orderedItems.forEach(function(item){
      $("#updated-list").append('<li class="list-item">' + item + '</li>');
    });
    document.getElementById("Shopping-List").reset();
  });
});
