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
        [ 'dui', 'file', 'list'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_List(el).construct('dui_file_list');
        _this.add_icons(el);
    });
}