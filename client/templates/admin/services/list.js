Template.list_plans.events({
    
    'click .delete-plan': function() {
        if (confirm("Would you like to delete this plan?")) {
            Subscriptions.remove(this._id);
            toastr.success("Plan removed Successfully");
            return false;
        }
        return false;
    }
});