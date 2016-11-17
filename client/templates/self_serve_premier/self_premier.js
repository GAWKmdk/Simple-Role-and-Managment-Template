Template.your_plans.helpers({
    userplans: function(){
        return Subscribers.find({user_id: Meteor.userId()})
    },
   
});


Template.your_plans.events({
    
     'click .cancel-plan': function() {
        if (confirm("Would you like to Cancel this plan?")) {
            Subscribers.remove(this._id);
            toastr.success("Plan cancelled Successfully");
            return false;
        }
        return false;
    }
});