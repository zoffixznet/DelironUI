Deliron_UI_Forms_Inputs_TextAreaInput = function ( el ) {
    this._el = el;
}

Deliron_UI_Forms_Inputs_TextAreaInput.prototype.construct = function (modifier, pic_dir) {
    var names, bits, i, l, el = this._el;

    if ( ! modifier ) { modifier = '' }

    names = [ 'm', 'tl', 'bl', 'br', 'tr', 'l', 'b', 'r', 't' ];

    bits = {};

    names.each(function(name){
        bits[name] = new Element('span', {
            'class': 'dui_i_ta_' + name + ' ' + modifier
        });
    });

    el.addEvent('focus', function(){
        this.getParent('.dui_i_ta_m').addClass('dui_focus');
    });
    el.addEvent('blur', function(){
        this.getParent('.dui_i_ta_m').removeClass('dui_focus');
    });

    bits.m.replaces(this._el);
    for ( i = 1, l = names.length; i < l; i++ ) {
        bits[ names[i] ].inject( bits[ names[i-1] ] );
    }
    el.inject( bits.t );
    el.addClass('dui_i_ta_orig');

    el.setStyle(
        'width',
        ( bits.m.getParent().getSize().x - 18 ) + 'px'
    );

    // Focus images preload
    names.each(function(pic){
        if ( pic == 'm' ) return;
        var pic_el = new Image();
        pic_el.src = pic_dir + pic + '-focus.png';
    });
}