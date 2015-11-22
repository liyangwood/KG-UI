
var Button = ReactBootstrap.Button;



KUI.Button = KG.Class.define('ui.Button', {

    getInitialState : function(){
        return {
            name : 'Jacky',
            bsStyle : 'default'
        }
    },

    render : function(){

        var prop = {
            bsStyle : this.state.bsStyle
        };

        return <Button {... prop}>{this.state.name}</Button>;

    }

}, 'ui.Widget');

KUI.SuccessButton = KG.Class.define('ui.SuccessButton', {

    getInitialState : function(){


        return _.extend(this.callParent('getInitialState'), {
            bsStyle : 'success'
        });

    }

}, 'ui.Button');