Deliron_UI_Forms_Inputs_TextAreaInput_Plain = function ( type ) {
}

Deliron_UI_Forms_Inputs_TextAreaInput_Plain.prototype.init = function () {
    var els = $$('.dui.plain.input.text');

    els.each(function (el) {
        [ 'dui', 'plain', 'input', 'text'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_Forms_Inputs_TextAreaInput(el)
            .construct('dui_input_text_plain');
    });
}