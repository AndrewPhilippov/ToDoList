// Line through on click event
$('.todo__list-item-text').click(function(){
  $(this).toggleClass('completed');
});

// Line through on click with check icon
$('.check-item').click(function(){
  $(this).parent().siblings('.todo__list-item-text').toggleClass('completed');
});

// Delete Item
$('.delete-item').click(function(e){
  $(this).parent().parent().fadeOut(300, function(){
    $(this).remove();
  });
  e.stopPropagation();
});