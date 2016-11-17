Router.configure ({    
    layoutTemplate:'app_layout'
});



Router.route('/', function() {
   
    //template
    this.render('services');
    
},{
    //currentRoute
     name: 'landing',
    //base_tmp
    template: 'premier_services',
     data: function() {
       var templateData = {
            plans: Subscriptions.find()
        };
        return templateData;
        }

});


/* Admin Routes */

Router.route('/admin/listsubscribers', function() {
   
    this.render('list_subscribers');
    
},{
    //currentRoute
     name: 'listsubscribers',
    //base_tmp
    template: 'list_subscribers',
    data: function() {
       var templateData = {
            subscribers: Subscribers.find(),
            plans: Subscriptions.find()
           
        };
        return templateData;
        }
});

Router.route('/admin/listplans', function() {
   
    this.render('list_plans');
    
},{
    //currentRoute
     name: 'listservices',
    //base_tmp
    template: 'list_plans',
    data: function() {
       var templateData = {
            plans: Subscriptions.find()
        };
        return templateData;
        }
});

Router.route('/admin/listplans/addplan', function() {
   
    this.render('addplan');
    
},{
    //currentRoute
     name: 'addServicePlan',
    //base_tmp
    template: 'addplan',
    data: function() {
        
        var templateData = {
        plans: Subscriptions.find(),
        subscribers: Subscribers.find()   
    }
        }
});

Router.route('/admin/listplans/editplan/:_id', function() {
   
    this.render('editplan');
    
},{
    //currentRoute
     name: 'editServicePlan',
    //base_tmp
    template: 'editplan',
     data: function() {
        var currentPlan = this.params._id;
         return Subscriptions.findOne({_id:currentPlan});
    }
    
});

/*user self route */

Router.route('/subscriptions/yourplans', function() {
   
    this.render('your_plans');
    
},{
    //currentRoute
     name: 'yourPlans',
    //base_tmp
    template: 'yourplans',
    data: function() {
        
    }

});