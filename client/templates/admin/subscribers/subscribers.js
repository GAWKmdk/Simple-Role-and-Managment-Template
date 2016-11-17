
/* Date Format Display */

Template.registerHelper('formatDate', function(date){
    return new Date(date).toDateString();
});

Template.registerHelper('getEndDate', function(join_date, plan_days){
    
    var plan_date = join_date.toDateString();
    console.log(plan_date);
    
    var subscription_date = plan_days;
    console.log(subscription_date);
    
    var date_rel = new Date(join_date);
        
    var exp_date = date_rel.setDate(date_rel.getDate() + plan_days);
    
    //var read_date = exp_date.toDateString();
    //console.log(read_date);
    
    return new Date(exp_date).toDateString();
});



Template.list_subscribers.events({
    
     'click .cancel-subscription': function() {
        if (confirm("Would you like to Cancel this plan?")) {
            Subscribers.remove(this._id);
            toastr.success("Plan cancelled Successfully");
            return false;
        }
        return false;
    }
});