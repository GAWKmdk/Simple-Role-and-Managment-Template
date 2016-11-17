Template.addplan.events({
    
    'submit .add-plan-form': function(event) {
        
        var plan_name = event.target.plan_name.value;
        var plan_label = event.target.plan_label.value;
        var plan_days = event.target.plan_days.value; 
        var description = event.target.description.value;
        var price = event.target.price.value;
        var plan_role = event.target.plan_role.value;
        var is_defacto = event.target.is_defacto.value;
         
     if (confirm("Are you sure you would like to create this plan ?")) {
        
         //**REDUNDANCY CHECK**//
        // var subscriber_info = Subscriptions.find({plan_name: //plan_name},{limit:1}).count() >0;

        // if ( //subscriber_info
       //  ) {
       //     toastr.danger('You have already created this plan !'); 
       //     Router.go('/admin/addplans');
            
      //  } else {
       Subscriptions.insert({
           
           plan_name: plan_name,
           plan_label: plan_label,
           plan_days: plan_days,
           description: description,
           price: price,
           plan_role: plan_role,
           is_defacto: is_defacto,
           create_date: new Date(),
           update_date: new Date()
       }); 
        
        toastr.success('Plan Added Successfully');
        Router.go('/admin/listplans');
        
        return false; 
        
    }
   // }
    }
});


