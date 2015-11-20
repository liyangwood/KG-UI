
window.KG = window.KG || {};


window.KUI = {};

var ALL_CLASS = {};
var F = {
    define : function(name, opts, parent){
        if(ALL_CLASS[name]) return (name +' component is exist');


        opts = _.extend({
            callParent : function(name, args){
                if(this.getParent()){
                    var par = this.getParent()[name];

                    return _.isFunction(par) ? par.apply(this, args) : _.clone(par);
                }
            },

            getParent : function(){
                return ALL_CLASS[name]._parent || null;
            }

        }, opts);

        parent = parent ? ALL_CLASS[parent] : null;

        if(parent){
            opts = _.extend({}, parent, opts);
            opts._parent = parent;
        }

        opts._name = name;
        ALL_CLASS[name] = opts;


        return React.createClass(opts);

    },

    getAllClass : function(){
        return ALL_CLASS;
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
