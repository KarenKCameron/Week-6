$(document).ready(function () {

  /**
   * Toggles "done" class on <li> element
   */
  $('li').click(function (e) {
    let $this = $(this);
    $this.toggleClass('done');

  });

  /**
   * Delete element when delete link clicked
   */
  $('a.delete').on('click', function () {
    let $this = $(this);
    $this.closest('li').remove();
  });
  /**
   * Adds new list item to <ul>
   */


  // console.log($newLI);


  //   // rest here...

  const addListItem = function (e) {
    e.preventDefault();
    const text = $('input').val();

    let $newLI = $('<li>');
    let $newSpan = $('<span>').append(text);
    let $newDeleteBtn = $('<a>');


    $newSpan.text(text);
    $newDeleteBtn.addClass('delete').text('Delete');
    $('ul').append($newLI).append($newSpan).append($newDeleteBtn);


  }

  // add listener for add

  let $addButton = $('a.add-item');

  $addButton.on('click', addListItem);

});

