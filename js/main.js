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


    //handling sidebar dropdown menu closes on link click
    let $menulinkHandler = $('.nav-link');

    $menulinkHandler.on('click', function() {
        $dropDownMenu.toggleClass("dropdown-content");
    })

    // PsuedoCode: Function controls selection and adjustment of elements in carousel.
    // slide-current in html starts as inital shown element.

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
        // jQuery function that selects the next and prev sibling of the selected element
        let next = $(selected).next();
        let prev = $(selected).prev();
        // let secondNext = $(next).next();
        // let secondPrev = $(prev).prev();
    
        // Changing the class of the selected element which forces a position change in the carousel
        $(selected).removeClass().addClass("project-card slide-current");
        // Changing the class of the other elements to re-slot into the next and prev position
        $(prev).removeClass().addClass("project-card slide-prev");
        $(next).removeClass().addClass("project-card slide-next");

    }
    
    // Keyboard events tracker
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
    
    //Mouse events tracker for clicked on element
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

