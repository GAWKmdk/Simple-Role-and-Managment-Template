
//handlebar for promo-default
Template.editplan.helpers({
    
    //checks for promo-defacto-
    'checkValue': function(val1, val2) {
        
        if(val1 == val2 ){
            
            return "selected";
        }
    }
    
    
});

//handlebar for roles

Template.editplan.helpers({
    
    //checks for status-defacto-
             'selectedStats': function(active) {
             return active ==this.plan_role ? 'selected' : '';
         }
        
    
});



Template.editplan.events({
    
    'submit .edit-plan-form': function(event) {
        
        var plan_name = event.target.plan_name.value;
        var plan_label = event.target.plan_label.value;
        var plan_days = event.target.plan_days.value; 
        var description = event.target.description.value;
        var price = event.target.price.value;
        var plan_role = event.target.plan_role.value;
        var is_defacto = event.target.is_defacto.value;
            
       Subscriptions.update({
           
           _id: this._id
       },{
           
           $set: {
           plan_name: plan_name,
           plan_label: plan_label,
           plan_days: plan_days,
           description: description,
           price: price,
           plan_role: plan_role,
           is_defacto: is_defacto,
           update_date: new Date()
           
           }
       }); 
        
        toastr.success('Plan Updated Successfully');
        Router.go('/admin/listplans');
        
        return false; 
    }
});
