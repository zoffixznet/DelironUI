Deliron_UI_List_Segment = function ( ) {
}

Deliron_UI_List_Segment.prototype.init = function () {
    var els = $$('.dui.segment.list');

    els.each(function (el) {
        [ 'dui', 'segment', 'list'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_List(el).construct('dui_segment_list');
    });
}