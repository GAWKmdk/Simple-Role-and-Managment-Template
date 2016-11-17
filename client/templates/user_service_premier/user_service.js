Template.services.events({
    
    'click .buy-plan': function(event){
        var plan_id = event.currentTarget.id;
        var plan_name = event.currentTarget.rel 
        
        var plan_info = Subscriptions.findOne({_id:plan_id});
       
   // });
        
    
         if (confirm("Would you like to Upgrade your plan ?")) {
            
    var subscriber_info = Subscribers.find({plan_name: plan_name},{limit:1}).count() >0;

         if ( subscriber_info ) {
            toastr.warning('You have already enrolled in this plan !'); 
                 Router.go('/');
            
        } else {  
            
        Subscribers.insert({
            
       
        plan_name: plan_info.plan_name,
        plan_label: plan_info.plan_label,
        plan_duration: plan_info.plan_days,
        plan_description: plan_info.description,
        plan_price: plan_info.price,
        plan_role: plan_info.plan_role,
        user_id: Meteor.userId(),
        user_email: Meteor.user().emails[0].address,
        join_date: new Date()
            
            
        });
                      
             toastr.success('Joined New Plan!');
         Router.go('/subscriptions/yourplans');
         
        }
             
         }
       
    }
});