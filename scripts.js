$(document).ready(function() {
    function newItem() {
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.text(inputValue);
  
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
  
      li.on("dblclick", function() {
        li.toggleClass("strike");
      });
  
      let crossOutButton = $('<button></button>');
      crossOutButton.text('X');
      crossOutButton.addClass("crossOutButton"); // Add class to the button
      li.append(crossOutButton);
  
      crossOutButton.on("click", function() {
        li.addClass("delete");
      });
  
      $('#list').sortable();
    }
  
    $('#button').on('click', newItem);
  });
  