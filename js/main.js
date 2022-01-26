$(()=> {
    let $hmbrgrIcon = $('.hmbrgr-menu');
    let $dropDownMenu = $('div.menu-container');
    let $body = $('body');

    $hmbrgrIcon.on('click', function() {
        $dropDownMenu.toggleClass("dropdown-content");
    });
 
})