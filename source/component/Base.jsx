

KUI.Class.define('Base', {

    initStart : _.noop,
    initStyle : function(){
        return {};
    },
    initView : _.noop,
    initEvent : _.noop,
    initEnd : _.noop,
    initProp : function(){
        return {};
    },


    render : function(){

        this.initStart();
        this.initView();
        this.initEvent();
        this.initEnd();

        var style = this.initStyle(),
            prop = this.initProp();

        var tagName = this.initTag(),
            vh = this.initHtml();

        return this.getRender(style, prop, {
            tag : tagName,
            html : vh
        });
    },

    initTag : function(){
        return <div />;
    },
    initHtml : function(){
        return '';
    },

    getRender : function(style, prop, opts){
        var X = opts.tag,
            html = opts.html;

        return <X style={style} {... prop}>{html}</X>;
    }


});