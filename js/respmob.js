window.addEventListener("scroll", () => {
        document.querySelectorAll(".esquerda").forEach(
            (animacao, index) => {
                if(animacao.getBoundingClientRect().top < 
                window.innerHeight - 50){

                    animacao.classList.add("efeitoScroll")
                }
            })

            document.querySelectorAll(".direita").forEach(
                (animacao, index) => {
                    if(animacao.getBoundingClientRect().top < 
                    window.innerHeight - 20){
    
                        animacao.classList.add("efeitoScroll")
                    }
                })

                document.querySelectorAll(".cima").forEach(
                  (animacao, index) => {
                      if(animacao.getBoundingClientRect().top < 
                      window.innerHeight - 20){
      
                          animacao.classList.add("efeitoScroll")
                      }
                  })

})



var checkbox = $('#chec');

$(document).on('click', function(event) {
  if (!$(event.target).closest('#chec, .nav-menu-lateral').length) {
    checkbox.prop("checked", false);
  }
});

var checkbox = $('#chec');

$(document).on('scroll', function(event) {
  if (!$(event.target).closest('#chec, .nav-menu-lateral').length) {
    checkbox.prop("checked", false);
  }
});

function myFunctionClear() {
  var inputs = $('input[type=checkbox]');

  inputs.attr('checked', false);
  inputs.prop('checked', false);
}






