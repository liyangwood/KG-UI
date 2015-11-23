
window.KG = window.KG || {};

window.KUI = {};

var ALL_CLASS = {},
    ALL_REACT_CLASS = {};


var F = {
    define : function(name, opts, parent){
        if(ALL_CLASS[name]) return (name +' component is exist');


        var base = {

            _callParent : function(name, args){

                var tmp = this._getParent();
                if(tmp){
                    var par = tmp[name];
                    return _.isFunction(par) ? par.apply(this, args) : _.clone(par);
                }
            },
            _getParent : function(){

                return ALL_CLASS[this._name]._parent || null;
            }
        };

        var setting = {};
        //if(!_.isArray(parent)){
        //    parent = [parent];
        //}
        //parent = _.map(function(one){
        //    var x = ALL_CLASS[one];
        //    if(!x) throw one +' is not defined';
        //
        //    return ALL_CLASS[one];
        //});
        //
        //parent.shift(base);
        //setting = _.extend.apply(_, parent);


        parent = parent ? ALL_CLASS[parent] : null;

        if(parent){
            setting = _.extend({}, parent, opts);

        }
        else{
            setting = _.extend({}, base, opts);
        }

        setting._parent = parent;
        setting._name = name;
        ALL_CLASS[name] = setting;

        var $obj = React.createClass(setting);
        ALL_REACT_CLASS[name] = $obj;

        return $obj;

    },

    getAllClass : function(){
        return ALL_CLASS;
    },

    get : function(name){
        var tmp = ALL_REACT_CLASS[name];

        return tmp || null;
    }

};

KG.Class = F;

// widget component base class
KG.Class.define('ui.Widget', {



    //must override
    render : function(){
        return <div />;
    }
});
