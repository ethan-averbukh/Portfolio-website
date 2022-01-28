$(()=> {

    //Handling the hamburger menu click to open menu
    let $hmbrgrIcon = $('.hmbrgr-menu');
    let $dropDownMenu = $('div.menu-container');
    let $body = $('body');

    $hmbrgrIcon.on('click', function() {
        $dropDownMenu.toggleClass("dropdown-content");
    });
    // Handling close open menu when close button is clicked
    let $closeBtn = $('.close-btn');

    $closeBtn.on('click', function(){
        $dropDownMenu.toggleClass("dropdown-content");
    });

    // PsuedoCode: Function controls selection and adjustment of elements in carousel.
    // slide-current in html starts as inital shown element.
    // User clicks to the left of item:
   let moveToSelected =  function(element) {
       //Conditional checks to see which element in carousel is selected.
       
        let selected;
        if (element == "next") {
        selected = $(".slide-current").next();
        } else if (element == "prev") {
        selected = $(".slide-current").prev();
        } else {
        selected = element;
        }
    
        let next = $(selected).next();
        let prev = $(selected).prev();
        // let secondNext = $(next).next();
        // let secondPrev = $(prev).prev();
    
        $(selected).removeClass().addClass("slide-current");
    
        $(prev).removeClass().addClass("slide-prev");
        $(next).removeClass().addClass("slide-next");

        // $(secondNext).removeClass().addClass("slide-left");
        // $(secondPrev).removeClass().addClass("slide-right")
    
    }
    
    // Eventos teclado
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
            moveToSelected('prev');
            break;
    
            case 39: // right
            moveToSelected('next');
            break;
    
            default: return;
        }
        e.preventDefault();
    });
    
    $('.slideshow-container div').click(function() {
        moveToSelected($(this));
    });
    
    $('.prev').click(function() {
        moveToSelected('prev');
    });
    
    $('.next').click(function() {
        moveToSelected('next');
    });
 
})

