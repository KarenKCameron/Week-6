$(document).ready(function () {
    alert('Code is loaded and ready!')

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $img = $('img');
    const color = $img.attr('data-color');
    console.log(color);

    // Update the third <li> item ("Turbocharged"), 
    // set the class name to "highlight"
    const $li = $('li');
    $li.eq(2).addClass('highlight');

    // Create a new <a> element containing the text "Buy Now!" 
    // with an id of "cta" after the last <p>
    const $main = $('main');
    const $newP = $('<p>').text('Added to Cart');
    const $newA = $('<a>').text('Buy Now!').attr('id', 'cta').click(function () {
        $newA.remove();
        $main.append($newP);
    })

    $('main').append($newA);

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    const $lastPara = $('p');
    $lastPara.remove();

    
})













