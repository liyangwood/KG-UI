
var Button = ReactBootstrap.Button;



KUI.Button = KG.Class.define('ui.Button', {

    getInitialState : function(){
        return {
            name : 'Jacky',
            bsStyle : 'default'
        }
    },

    click : function(){
        console.log(this._name, this._parent._name)
    },

    render : function(){

        var prop = {
            bsStyle : this.state.bsStyle
        };

        return <Button onClick={this.click} {... prop}>{this.state.name}</Button>;

    }

}, 'ui.Widget');

KUI.SuccessButton = KG.Class.define('ui.SuccessButton', {

    click : function(e){
        this._callParent('click', [e]);

        console.log(this._callParent('getInitialState'));
    }

}, 'ui.Button');