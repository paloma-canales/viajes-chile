$(function() {
    $('[data-bs-toggle="tooltip"]').tooltip()

    $('button').click(function() {
        alert('Correo enviado ' + $('#exampleInputName').val())
    })
})

$(document).scroll(function() {
    const y = $("html").scrollTop();
    y > 300 ? $('nav').addClass('nav-black') : $('nav').removeClass('nav-black')
})