
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
        var ori = {
            onClick : this.click,
            bsStyle : this.state.bsStyle
        };

        this.props = _.extend(ori, this.props);

        return this.props;
    },

    initTag : function(){
        return ReactBootstrap.Button;
    },
    //initHtml : function(){
    //    return this.state.name;
    //}

    getRender : function(style, prop, opts){

        var Tag = opts.tag;
        console.log(prop);
        return <Tag {... prop}>{this.props.children}</Tag>;
    }

}, 'Base');

