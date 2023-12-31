function inputShowPwd(ele){

    this.createNewInput = function(oldObject, oType) {

        var newObject = document.createElement('input');

        newObject.type = oType;
        if(oldObject.size) newObject.size = oldObject.size;
        if(oldObject.value) newObject.value = oldObject.value;
        if(oldObject.name) newObject.name = oldObject.name;
        if(oldObject.className) newObject.className = oldObject.className;

        return newObject;

    }

    
    this.init(ele);

    return document.getElementsByClassName(ele);

}

inputShowPwd.prototype.init = function(ele){

    var T = this;
    this.container = $('.'+ele);  
    this.inputEle = this.container.children('input[type="password"]');   
    this.deleteEle = this.container.children('.showEle'); 

    (function(){
        
        if(navigator.appName == 'Microsoft Internet Explorer'){
            if(navigator.appVersion.match(/9./i) == '9.'){
                T.inputEle.keyup(function(event){

                    var t = $(this);
                    var _btn = t.parent().children('.showEle');
                    
                    if(event.keyCode == 8){
                        ;(t.val() == '') ? _btn.fadeOut(100) : _btn.fadeIn(100);
                    }

                });
            }
        }

        T.inputEle.on('focus',function(){

            var t = $(this);
            var _btn = t.parent().children('.showEle');

            ;(t.val() == '') ? _btn.fadeOut(100) : _btn.fadeIn(100);

        }).on('input propertychange',function(){

            var t = $(this);
            var _btn = t.parent().children('.showEle');

            ;(t.val() == '') ? _btn.fadeOut(100) : _btn.fadeIn(100);

        });

        T.deleteEle.on('mousedown',function(){

            var _parent = $(this).parent();
            var _pwd = _parent.children('input[type="password"]');

            _pwd.hide();
            _parent.append($(T.createNewInput(_pwd.get(0),'text')).show());

        }).on('mouseup mouseout',function(){

            var _parent = $(this).parent();

            _parent.find('input[type="text"]').remove();
            _parent.children('input[type="password"]').show();

        });

    })();

}
