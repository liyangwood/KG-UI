
window.KUI = {};

var ALL_CLASS = {},
    ALL_REACT_CLASS = {};


var F = {
    define : function(name, opts, parent){
        if(ALL_CLASS[name]) return (name +' component is exist');

        var base = {

            getParent : function(pn){
                var p = ALL_CLASS[this._name]._parent;

                if(p && p.length > 0){
                    if(!pn){
                        return p[0];
                    }
                    else{
                        return _.find(p, function(item){
                            return item._name === pn;
                        });
                    }

                }
                else{
                    throw this._name + ' \' parent is not exist';
                }

            }
        };

        var setting = {};

        parent = parent || [];
        if(!_.isArray(parent)){
            parent = [parent];
        }
        parent = _.map(parent, function(one){
            var x = ALL_CLASS[one];
            if(!x) throw one +' is not defined';

            return x;
        });

        if(parent.length>0){
            var args = [{}].concat(parent).concat(opts);
            setting = _.extend.apply(_, args);

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

KUI.Class = F;

