Functioning Role and Subscription Management Template


![role-management](https://cloud.githubusercontent.com/assets/23016977/21370612/66e80dd6-c704-11e6-981d-f6147ad3d4d4.jpg)
![role-management2](https://cloud.githubusercontent.com/assets/23016977/21370614/68460552-c704-11e6-8aa5-b31d18e74813.jpg)
![role-management3](https://cloud.githubusercontent.com/assets/23016977/21370616/699e4266-c704-11e6-98e1-e1f56d5aefb2.jpg)
![role-management4](https://cloud.githubusercontent.com/assets/23016977/21370617/6b5cb164-c704-11e6-8c2e-99375961abcb.jpg)
![role-management5](https://cloud.githubusercontent.com/assets/23016977/21370619/6d557244-c704-11e6-8190-7ba99498cdd8.jpg)
![role-management6](https://cloud.githubusercontent.com/assets/23016977/21370620/6ef06866-c704-11e6-8d11-20a8e0ee08ad.jpg)
![role-management7](https://cloud.githubusercontent.com/assets/23016977/21370623/70f49696-c704-11e6-8ccd-76e5e087a84f.jpg)


##Includes
- login/sign-up
- Administrative featured: Generate/Edit/Delete subscriptions, View all users, View all subscriptions
- Basic Paypal/Mastercard subscription buttons
- Upgrade-able Subscription and/or Subscriber Status with Redundancy check (so you can't upgrade the same things twice)



##Minor Bugs
- Redundancy check for Generating subscription doesn't log -- likely because it requires a publication_token/location_cookie_api concept to be useful and stop subscription spam for subscribing to itself.

- Expire dates don't neccessarly display correctly because the browser is doing var somethingfunny with the .toDateString(). So it won't format the parse duration + days to the existing start date of a subscription and instead gives you an encrypted output that you can discover clues to if you wish to know where the time went ! 


##Things you can do/view: 

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


Built on getskeleton.com/ framework. 

