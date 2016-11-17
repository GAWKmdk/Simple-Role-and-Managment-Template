Functioning Role and Subscription Management Template

##Includes
- login/sign-up
- Administrative featured: Generate/Edit/Delete subscriptions, View all users, View all subscriptions
- Basic Paypal/Mastercard subscription buttons
- Upgrade-able Subscription and/or Subscriber Status with Redundancy check (so you can't upgrade the same things twice)



##Minor Bugs
- Redundancy check for Generating subscription doesn't log -- likely because it requires a publication_token/location_cookie_api concept to be useful and stop subscription spam for subscribing to itself.

- Expire dates don't neccessarly display correctly because the browser is doing var somethingfunny with the .toDateString(). So it won't format the parse duration + days to the existing start date of a subscription and instead gives you an encrypted output that you can discover clues to if you wish to know where the time went ! 


##Things you can do: 

Start up RoboMongo and see the collections;
- 6 types of roles tied to 6 generic users
- 3 types of generic subscriptions
- no subscribers

#Challenge 1: 

- Login in under a client account.
**see Startup.js
- Upgrade your account subscription. 


or 
#Challenge 2: 

- Login in under a Admin/SuperUser account.
**see Startup.js
- Create a subscription,edit its' role, price and default promo (this sets it as default for new users), delete it
- View active users/subscriptions

or 
#Challenge 3: 

- Create a general account.
- Upgrade or cancel subscription //test out the paypal subscription button without sandbox id (put that in the business/merchant section of the button html) after getting yourself a sandbox dev id. 
