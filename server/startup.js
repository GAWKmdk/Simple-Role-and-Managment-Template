import { Meteor } from 'meteor/meteor';

Meteor.startup(() =>  {
  // roles for ai, client, server, exec, admin
    
    if( Meteor.users.find().count() < 1 ) {
        console.log("No Users found in the Database. Populating Database with a default SuperUser and administrative status.");
        
        //build framework of organization roles in subscription service
        var users = [
                    
            {name: "SuperUser", email: "AdMiNn@voip.pr", password:"US$R_U!S_IDN_T8RNTl£_Do11", roles: ['admin']},
            
            {name: "ExecUser", email: "Exon@example.com", password:"shellABC", roles: ['exec']},
            
            {name: "ServerUser", email: "aiOtd@voip.io",             
             password:"US$R_U!S_IDN_T8RNTl£_Do11", roles: ['server']},
            
            {name: "ClientUser", email: "eC2c@voipmail.com", password:"buynowsell", roles: ['client']},
            
            {name: "BotUser", email: "S9y1sp@voip.port", password:"US$R_U!S_IDN_T8RNTl£_Do11", roles: ['ai']},
            
            {name: "PublicUser", email: "SnowChannel@email.com", password:"public1234", roles: ['public']},
        ];
        
        _.each(users, function(user){
            
            var product_key;
            
            //json product_key_user
            
            product_key = Accounts.createUser({
                   email: user.email,
                   password:"US$R_U!S_IDN_T8RNTl£_Do11",
                   profile: {
                    name: user.name,
                    email: user.email,
                    role: user.roles   
                }            
        });
            
            
            if(user.roles.length > 0 ){
                Roles.addUsersToRoles(product_key, user.roles);
                console.log("Multiple User Entities already established in the Database. No status defaults are required.");
            }
    });
        
    }
    
    /* seed */
    
    
    if(Subscriptions.find().count() <1) {
        
        console.log("Generating sample subscriptions -- For Client and Testing Purposes Only.");
        
        var types = [
            
           {
                //Free Plan
               plan_name: "Free",
               plan_label: "Publisher_tracker_token",
               plan_days: "∞",
               description: "Unlimited Usage",
               price: "Free",
               plan_role: "public",
               is_defacto: "1",
               create_date: new Date(),
               update_date: new Date()
               
            },
            
            {
               //Trial-Expire Plan 
               plan_name: "Time-Trial",
               plan_label: "timezone_tracker_token",
               plan_days: "7",
               description: "7 day plan",
               price: "6.88",
               plan_role: "client",
               is_defacto: "0",
               create_date: new Date(),
               update_date: new Date() 
                
            },
            
            {
                //Access-Content-ByRole Plan
               plan_name: "Exclusive",
               plan_label: "browser_tracker_token",
               plan_days: "31",
               description: "1 month VIP Access",
               price: "16.74",
               plan_role: "exec",
               is_defacto: "0",
               create_date: new Date(),
               update_date: new Date()
                
            }
            
        ];
      
        types.forEach(function(types) {
    
    Subscriptions.insert(types);
});
        
    }
    
 
    
    
});

/* remove this section on first startup */
Accounts.onCreateUser(function(options, user) {
    
    //insert subscription to users_profile
    Subscribers.insert({
        
        user_id: user._id,
        user_email: user.emails[0].address,
        plan_id: getDefaultPlan()._id,
        plan_name: getDefaultPlan().plan_name,
        plan_label: getDefaultPlan().plan_label,
        plan_duration: getDefaultPlan().plan_days,
        plan_description: getDefaultPlan().description,
        plan_price: getDefaultPlan().price,
        plan_role:user.roles,
        join_date: new Date()
        
        
    });
/*  */    
    
    
    //links with product_key 
    if(options.profile){
        user.profile = options.profile;
    }
    
    return user;
    
    
});

//return for default plan premier/free
function getDefaultPlan() {
    return Subscriptions.findOne({
        is_defacto: '1',
         plan_role: 'public'
    });
    
}