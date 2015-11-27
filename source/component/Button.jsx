
KUI.Button = KUI.Class.define('Button', {
    getInitialState : function(){
        return {
            name : 'Jacky',
            bsStyle : 'success'
        }
    },

    initEvent : function(){
        var self = this;
        this.click = function(e){
            alert(self.state.name);
        };
    },

    initProp : function(){
        return {
            onClick : this.click,
            bsStyle : this.state.bsStyle
        };
    },

    initTag : function(){
        return ReactBootstrap.Button;
    },
    initHtml : function(){
        return this.state.name;
    }

    //getRender : function(style, prop, opts){
    //
    //    var Tag = opts.tag;
    //    return <Tag {... prop}>{this.state.name}</Tag>;
    //}

}, 'Base');

