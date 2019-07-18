(function ($) {

    console.log('ci sono!');

    $('#acf-contact-form-7').dialog({
        title: 'Advanced Custom Fields Contact Form 7',
        dialogClass: 'wp-dialog',
        autoOpen: true,
        draggable: false,
        width: 'auto',
        modal: true,
        resizable: true,
        closeOnEscape: true,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        open: function () {
            $('.ui-widget-overlay').bind('click', function(){
                $('#acf-contact-form-7').dialog('close');
            });
            $('body').css('overflow','hidden');
        },
        create: function () {
            $('.ui-dialog-titlebar-close').addClass('ui-button');
        },
        close: function(){
            $('body').css('overflow','visible');
            close_modal();
        }
    });

})(jQuery);

function close_modal() {
    var data = {
        action: 'acf_contact_form_7_close',
    };
    jQuery.post( ajaxurl, data);
}
