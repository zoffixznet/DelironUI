Deliron_UI_Contol_ButtonGroup_Plain = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_ButtonGroup_Plain.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.plain.button_group');
    }
    else {
        els = $$('.dui.plain.button_group');
    }

    els.each(function (el) {
        var button_group = new Deliron_UI_Contol_ButtonGroup(el);
        [ 'plain', 'button', 'group' ].each(function (className) {
            el.removeClass(className);
        });
        button_group.construct('plain');
    });
}

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

Deliron_UI_Contol_Button_Danger = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_Button_Danger.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.danger.button');
    }
    else {
        els = $$('.dui.danger.button');
    }

    els.each(function (el) {
        var button = new Deliron_UI_Contol_Button(el);
        [ 'danger', 'button' ]
            .each(function (className) {
                el.removeClass(className);
            });
        button.construct('dui_control_button_danger');
    });
}

Deliron_UI_Contol_Button_NoticeMe = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_Button_NoticeMe.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.notice_me.button');
    }
    else {
        els = $$('.dui.notice_me.button');
    }

    els.each(function (el) {
        var button = new Deliron_UI_Contol_Button(el);
        [ 'notice_me', 'button' ]
            .each(function (className) {
                el.removeClass(className);
            });
        button.construct('dui_control_button_notice_me');
    });
}

Deliron_UI_Contol_Button_Plain = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_Button_Plain.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.plain.button');
    }
    else {
        els = $$('.dui.plain.button');
    }

    els.each(function (el) {
        var button = new Deliron_UI_Contol_Button(el);
        [ 'plain', 'button' ]
            .each(function (className) {
                el.removeClass(className);
            });
        button.construct('dui_control_button_plain');
    });
}

Deliron_UI_Contol_Button_GoBack = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_Button_GoBack.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.go_back.button');
    }
    else {
        els = $$('.dui.go_back.button');
    }

    els.each(function (el) {
        var button = new Deliron_UI_Contol_Button(el);
        [ 'go_back', 'button' ]
            .each(function (className) {
                el.removeClass(className);
            });
        button.construct('dui_control_button_go_back');
    });
}

Deliron_UI_Contol_Button = function ( el ) {
    this._el = el;
}

Deliron_UI_Contol_Button.prototype.construct = function (modifier) {
    var left, middle, right;

    if ( ! modifier ) { modifier = '' }

    left   = new Element('span', {
        'class': 'dui_b_l ' + modifier
    });
    middle = new Element('span', {
        'class': 'dui_b_m ' + modifier
    });
    right  = new Element('span', {
        'class': 'dui_b_r '  + modifier
    });

    left.addEvent(  'mouseover', function(){this.addClass('dui_hover')} );
    // middle.addEvent('mouseover', function(){this.addClass('dui_hover')} );
    // right.addEvent( 'mouseover', function(){this.addClass('dui_hover')} );
    // this._el.addEvent('mouseover', function(){this.addClass('dui_hover')} );
    left.addEvent(  'mouseout', function(){this.removeClass('dui_hover')} );
    // middle.addEvent('mouseout', function(){this.removeClass('dui_hover')} );
    // right.addEvent( 'mouseout', function(){this.removeClass('dui_hover')} );
    // this._el.addEvent( 'mouseout', function(){this.removeClass('dui_hover')} );

    var clicky = function(e) {
        if ( e.target.hasClass('dui_b_orig') ) return true;

        this.getElement('.dui_b_orig').click();
        return false;
    }

    left.addEvent('click', clicky);
    right.addEvent('click', clicky);
    middle.addEvent('click', clicky);

    left.replaces(this._el);
    right.inject(left);
    middle.inject(right);
    this._el.inject(middle);
    this._el.addClass('dui_b_orig');
    // this._el.addEvent('click', function() {
    //     alert("Test");
    //     return false;
    // });
}

//Deliron.UI.prototype.Contol = function ( type ) {

// }

Deliron_UI_Messages_Error_Tiny = function (opts) {
    this.opts = opts || {};
}

Deliron_UI_Messages_Error_Tiny.prototype.construct = function (el) {
    [ 'tiny', 'message', 'error' ]
        .each(function (className) {
            el.removeClass(className);
        });

    el.addClass('dui_m_e_t_orig');
}

Deliron_UI_Messages_Error_Tiny.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.tiny.message.error');
    }
    else {
        els = $$('.dui.tiny.message.error');
    }

    var _this = this;
    els.each(function (el) {
        _this.construct(el);
    });
}

Deliron_UI_Messages_Error = function (opts) {
    this.opts = opts || {};
}

Deliron_UI_Messages_Error.prototype.construct = function (el) {
    [ 'message', 'error' ]
        .each(function (className) {
            el.removeClass(className);
        });

    el.addClass('dui_m_e_orig');
}

Deliron_UI_Messages_Error.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.message.error');
    }
    else {
        els = $$('.dui.message.error');
    }

    var _this = this;
    els.each(function (el) {
        _this.construct(el);
    });
}

Deliron_UI_Messages_Success_Tiny = function (opts) {
    this.opts = opts || {};
}

Deliron_UI_Messages_Success_Tiny.prototype.construct = function (el) {
    [ 'tiny', 'message', 'success' ]
        .each(function (className) {
            el.removeClass(className);
        });

    el.addClass('dui_m_s_t_orig');
}

Deliron_UI_Messages_Success_Tiny.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.tiny.message.success');
    }
    else {
        els = $$('.dui.tiny.message.success');
    }

    var _this = this;
    els.each(function (el) {
        _this.construct(el);
    });
}

Deliron_UI_Messages_Success = function (opts) {
    this.opts = opts || {};
}

Deliron_UI_Messages_Success.prototype.construct = function (el) {
    [ 'message', 'success' ]
        .each(function (className) {
            el.removeClass(className);
        });

    el.addClass('dui_m_s_orig');
}

Deliron_UI_Messages_Success.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.message.success');
    }
    else {
        els = $$('.dui.message.success');
    }

    var _this = this;
    els.each(function (el) {
        _this.construct(el);
    });
}

Deliron_UI_List_Segment = function ( ) {
}

Deliron_UI_List_Segment.prototype.init = function () {
    var els = $$('.dui.segment.list');

    els.each(function (el) {
        [ 'segment', 'list'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_List(el).construct('dui_segment_list');
    });
}

Deliron_UI_List_Plain = function ( ) {
}

Deliron_UI_List_Plain.prototype.init = function () {
    var els = $$('.dui.plain.list');

    els.each(function (el) {
        [ 'plain', 'list'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_List(el).construct('dui_list_plain');
    });
}

Deliron_UI_List_File = function ( ) {
}

Deliron_UI_List_File.prototype.add_icons = function (ul_el) {
    ul_el.getElements('a').each(function(el){
        var href = el.href || '';
        if ( /\/$/.test(href) ) {
            el.addClass('dui_file_list_item_directory');
        }
        else {
            var match = /\.([^.]+)$/.exec(href);
            el.addClass(
                'dui_file_list_item_'
                +
                ( match ? match[1] : 'unknown' )
            );
        }
    })
}

Deliron_UI_List_File.prototype.init = function () {
    var els = $$('.dui.file.list');

    var _this = this;
    els.each(function (el) {
        [ 'file', 'list'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_List(el).construct('dui_file_list');
        _this.add_icons(el);
    });
}

Deliron_UI_List = function ( el ) {
    this._el = el;
}

Deliron_UI_List.prototype.construct = function (modifier) {
    if ( modifier ) {
        this._el.addClass(modifier);
    }

    this._el.addClass('dui_l_orig');

    this._el.getChildren('li').each(function(li_el, idx){
        if ( idx % 2 ) li_el.addClass('dui_alt')
    });
}

Deliron_UI_Actor_Focus = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Actor_Focus.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.focus.actor');
    }
    else {
        els = $$('.dui.focus.actor');
    }

    var _this = this;
    els.each(function (el) {
        [ 'focus', 'actor' ].each(function (className) {
            el.removeClass(className);
        });
        el.addClass('dui_focus_actor');
        el.focus();
    });
}

Deliron_UI_Actor_ScrollTo = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Actor_ScrollTo.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.scroll_to.actor');
    }
    else {
        els = $$('.dui.scroll_to.actor');
    }

    var _this = this;
    els.each(function (el) {
        [ 'scroll_to', 'actor' ].each(function (className) {
            el.removeClass(className);
        });
        el.addClass('dui_scroll_to_actor');
        new Fx.Scroll(window).toElement(el);
    });
}

Deliron_UI_Forms_Inputs_TextInput_Plain = function ( type ) {
}

Deliron_UI_Forms_Inputs_TextInput_Plain.prototype.init = function () {
    var els = $$('.dui.plain.input.text');

    els.each(function (el) {
        [ 'plain', 'input', 'text'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_Forms_Inputs_TextInput(el)
            .construct('dui_input_text_plain');
    });
}

Deliron_UI_Forms_Inputs_TextInput = function ( el ) {
    this._el = el;
}

Deliron_UI_Forms_Inputs_TextInput.prototype.construct = function (modifier) {
    var left, middle, right, el = this._el;

    if ( ! modifier ) { modifier = '' }

    left   = new Element('span', {
        'class': 'dui_i_t_l ' + modifier
    });
    middle = new Element('span', {
        'class': 'dui_i_t_m ' + modifier
    });
    right  = new Element('span', {
        'class': 'dui_i_t_r '  + modifier
    });

    el.addEvent('focus', function(){
        this.getParent('.dui_i_t_l').addClass('dui_focus');
    });
    el.addEvent('blur', function(){
        this.getParent('.dui_i_t_l').removeClass('dui_focus');
    });

    left.replaces(this._el);
    right.inject(left);
    middle.inject(right);
    el.inject(middle);
    el.addClass('dui_i_t_orig');

    el.setStyle(
        'width',
        ( left.getParent().getSize().x - 18 ) + 'px'
    );
}

Deliron_UI_Forms_Labels_Label = function () {
}

Deliron_UI_Forms_Labels_Label.prototype.init = function() {
    var els = $$('.dui.form.label');

    var obj = this;
    els.each(function (el) {
        [ 'form', 'label'].each(function (className) {
            el.removeClass(className);
        });

        obj.construct(el);
    });
}

Deliron_UI_Forms_Labels_Label.prototype.construct = function (el) {
    el.addClass('dui_f_l_orig');
}

Deliron_UI_Forms_Inputs_TextAreaInput_Plain = function ( type ) {
}

Deliron_UI_Forms_Inputs_TextAreaInput_Plain.prototype.init = function () {
    var els = $$('.dui.plain.textarea');

    els.each(function (el) {
        [ 'plain', 'textarea'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_Forms_Inputs_TextAreaInput(el)
            .construct(
                'dui_textarea_plain',
                '/UI/images/Forms/TextAreas/Plain/'
            );
    });
}

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

Deliron_UI_Forms_Form = function () {
}

Deliron_UI_Forms_Form.prototype.init = function() {
    var els = $$('.dui.form');

    var obj = this;
    els.each(function (el) {
        [ 'form' ].each(function (className) {
            el.removeClass(className);
        });
        obj.construct(el);
    });
}

Deliron_UI_Forms_Form.prototype.construct = function (el) {
    if ( el.hasClass('auto_setup') ) {
        el.removeClass('auto_setup');
        this.construct_children(el);
    }
}
Deliron_UI_Forms_Form.prototype.construct_children = function (el) {
    el.addClass('dui_form_orig dui_form_auto_setup_orig');

    // Buttons
    el.getElements('input[type="submit"],button,input[type="button"]')
        .each(function(el){
            el.addClass('dui'); el.addClass('button'); el.addClass('plain');
        });

    // Text inputs
    el.getElements('input[type="text"],input[type="password"]')
        .each(function(el){
            el.addClass('dui');
            el.addClass('input');
            el.addClass('plain');
            el.addClass('text');
        });

    // Text areas
    el.getElements('textarea')
        .each(function(el){
            el.addClass('dui');
            el.addClass('plain');
            el.addClass('textarea');
        });

    // Labels
    el.getElements('label')
        .each(function(el){
            el.addClass('dui'); el.addClass('form'); el.addClass('label');
        });
}

Deliron_UI_Table_Plain = function ( ) {
}

Deliron_UI_Table_Plain.prototype.init = function () {
    var els = $$('.dui.plain.table');

    els.each(function (el) {
        [ 'plain', 'table'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_Table(el).construct('dui_table_plain');
    });
}

Deliron_UI_Table = function ( el ) {
    this._el = el;
}

Deliron_UI_Table.prototype.construct = function (modifier) {
    if ( modifier ) {
        this._el.addClass(modifier);
    }

    this._el.addClass('dui_table_orig');

    this._el.getElements('tr').each(function(tr_el, idx){
        if ( idx % 2 ) tr_el.addClass('dui_alt')
    });
}

Deliron_UI_Text_Date = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Text_Date.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.date.text');
    }
    else {
        els = $$('.dui.date.text');
    }

    var _this = this;
    els.each(function (el) {
        [ 'date', 'text' ].each(function (className) {
            el.removeClass(className);
        });
        el.addClass('dui_text_date');
    });
}


Deliron_UI_Text_Quiet_Inline = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Text_Quiet_Inline.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.inline.quiet.text');
    }
    else {
        els = $$('.dui.inline.quiet.text');
    }

    var _this = this;
    els.each(function (el) {
        [ 'inline', 'quiet', 'text' ].each(function (className) {
            el.removeClass(className);
        });
        el.addClass('dui_text_quiet_i');
        // _this.construct(el);
    });
}


// Deliron_UI_Text_Quiet_Inline.prototype.init = function (el) {
//     el.addClass()
// }

Deliron_UI_Text_Quotation = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Text_Quotation.prototype.construct = function (el) {
    var r_quot;
    el.addClass('dui_text_quot');
    el.set('html',
        '<span class="dui_text_r_quot">'
            + el.get('html') +
        '</span>'
    );


    // r_quot = new Element('div', {'class': 'dui_text_r_quot'});
    // r_quot.replaces(el);
    // el.inject(r_quot);
}

Deliron_UI_Text_Quotation.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.quotation.text');
    }
    else {
        els = $$('.dui.quotation.text');
    }

    var _this = this;
    els.each(function (el) {
        [ 'quotation', 'text' ].each(function (className) {
            el.removeClass(className);
        });
        _this.construct(el);
    });
}


window.Deliron = {};
Deliron.UI = function(type) {
        this.init();
}

Deliron.UI.prototype.init = function () {
    new Deliron_UI_Forms_Form().init();
        new Deliron_UI_Forms_Labels_Label().init();
        new Deliron_UI_Forms_Inputs_TextInput_Plain().init();
        new Deliron_UI_Forms_Inputs_TextAreaInput_Plain().init();

    new Deliron_UI_Contol_Button_Plain().init();
    new Deliron_UI_Contol_Button_Danger().init();
    new Deliron_UI_Contol_Button_NoticeMe().init();
    new Deliron_UI_Contol_Button_GoBack().init();
    new Deliron_UI_Contol_ButtonGroup_Plain().init();

    // Lists
    new Deliron_UI_List_Plain().init();
    new Deliron_UI_List_Segment().init();
    new Deliron_UI_List_File().init();

    // Tables
    new Deliron_UI_Table_Plain().init();

    // Messages
    new Deliron_UI_Messages_Error_Tiny().init();
    new Deliron_UI_Messages_Error().init();
    new Deliron_UI_Messages_Success_Tiny().init();
    new Deliron_UI_Messages_Success().init();


    // Text
    new Deliron_UI_Text_Quiet_Inline().init();
    new Deliron_UI_Text_Date().init();
    new Deliron_UI_Text_Quotation().init();

    // Actors
    new Deliron_UI_Actor_ScrollTo().init();
    new Deliron_UI_Actor_Focus().init();

}

new Deliron.UI();


