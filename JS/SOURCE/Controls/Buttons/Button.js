Deliron_UI_Contol_Button = function ( el ) {
    this._el = el;
}

Deliron_UI_Contol_Button.prototype.construct = function (modifier) {
    var left, middle, right;

    if ( ! modifier ) { modifier = '' }

    left   = new Element('span', {
        'class': 'dui_control_button_left ' + modifier
    });
    middle = new Element('span', {
        'class': 'dui_control_button_middle ' + modifier
    });
    right  = new Element('span', {
        'class': 'dui_control_button_right '  + modifier
    });

    middle.replaces(this._el);
    left.inject(middle);
    right.inject(left);
    this._el.inject(right);
}