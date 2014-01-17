Deliron_UI_Contol_ButtonGroup = function ( el ) {
    this._el = el;
}

Deliron_UI_Contol_ButtonGroup.prototype.construct = function (modifier) {
    var max_size, buttons, el = this._el;

    if ( modifier ) el.addClass('dui_bg_' + modifier + '_orig')
    el.addClass('dui_bg_orig');

    el.getElements('a').each(function(button){
        button.addClass('dui');
        button.addClass('plain');
        button.addClass('button');
    });
    new Deliron_UI_Contol_Button_Plain().init({container: el});

    buttons = el.getElements('.dui_control_button_plain .dui_b_orig');

    max_size = 0;
    if ( el.hasClass('full_width') ) {
        el.removeClass('full_width');
        max_size = el.getSize().x - 18;
    }
    else {
        buttons.each(function(button){
            var button_width = button.getSize().x;
            if ( max_size < button_width ) max_size = button_width;
        });
    }

    buttons.each(function(button){
        button.setStyle('width', max_size + 'px');
        button.setStyle('display', 'inline-block');
    });
}