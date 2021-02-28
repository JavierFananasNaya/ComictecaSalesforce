({
    showBookList : function(component, event, helper) {
            var action = component.get("c.getList");
            action.setCallback(this, function(response){
                component.set("v.list", response.getReturnValue());
            });
            $A.enqueueAction(action);
    },

    showEditorialList : function(component, event, helper) {
        var action = component.get("c.getEditorialesList");
        action.setCallback(this, function(response){
            component.set("v.editorialList", response.getReturnValue());
        });
        $A.enqueueAction(action);
},

    addComic : function(component, event, helper){
        var get_name = component.find("nom").get("v.value");
        var get_editorial = component.find("editorial").get("v.value");
        var get_num_pag = component.find("num_pag").get("v.value");
        var get_ano = component.find("ano").get("v.value");
        var action = component.get("c.getData");
        
        action.setParams({
            nom:get_name,
            num_pag:get_num_pag,
            editorial: get_editorial,
            ano: get_ano
        });

        var action2 = component.get("c.getList");
            action2.setCallback(this, function(response){
                component.set("v.list", response.getReturnValue());
            });
        $A.enqueueAction(action);
        $A.enqueueAction(action2);
    
    },

    addEditorial : function(component, event, helper){
        var get_name = component.find("editorialNom").get("v.value");
        var action = component.get("c.getEditorialData");
        
        action.setParams({
            nom:get_name,
        });

        var action2 = component.get("c.getEditorialesList");
        action2.setCallback(this, function(response){
            component.set("v.editorialList", response.getReturnValue());
        });
        $A.enqueueAction(action);
        $A.enqueueAction(action2);
    
    },

    removeBook : function(component, event, helper) {
        var idx = event.target.id;
        var action = component.get("c.getBookToRemove");
        action.setParams({
            idBook: idx
        });

       var action2 = component.get("c.getList");
        action2.setCallback(this, function(response){
            component.set("v.list", response.getReturnValue());
        });
    $A.enqueueAction(action);
    $A.enqueueAction(action2);
}
})
