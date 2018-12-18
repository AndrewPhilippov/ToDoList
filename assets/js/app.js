// Focus on input!!!
$('input[type="text"]').css('display', 'none');

// Line through on click event
$('ul').on('click', '.todo__list-item-text', function(){
  $(this).toggleClass('completed');
});

// Line through on click with check icon
$('ul').on('click', '.check-item', function(){
  $(this).parent().siblings('.todo__list-item-text').toggleClass('completed');
});

// Delete Item
$('ul').on('click','.delete-item', function(e){
  $(this).parent().parent().fadeOut(300, function(){
    $(this).remove();
  });
  e.stopPropagation();
});




$('input[type="text"]').keypress(function(e){
  if(e.which === 13){
    // Grabbing the text from input and hiting "Enter" button
    var todoText = ($(this).val());
    // Creating new 'li' and adding it to 'ul'
    var newLi = '<li class="todo__list-item">'+ 
    '<span class="todo__list-item-text">'+ todoText +'</span>'
    +
    '<span class="todo__list-item-edit"><span class="delete-item"> <img src="assets/css/sprites/garbage.svg" alt="delete item"></span><span class="check-item"> <img src="assets/css/sprites/checked.svg" alt="checked item"></span></span><span class="todo__list-item-underline"></span></li>'
    $('ul').append(newLi);
    clearInputField();
  }
});

// Function to clear Input Field
function clearInputField(){
  $('input[type="text"]').val('');
}

$('#pulse2').click(function(){
  $('input[type="text"]').toggle().focus();
});