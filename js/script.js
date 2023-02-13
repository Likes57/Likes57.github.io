window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});



$('.contacts__form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input", "textarea").val("");
        // $('#consultation, #order').fadeOut();
        // $('.overlay, #thanks').fadeIn('fast');

        $('.contacts__form').trigger('reset');
    });

    return false;
});