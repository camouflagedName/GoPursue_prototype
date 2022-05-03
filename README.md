# README

This is a protoytpe of a career exploration app. The app is stable and is currently beyond an MVP state as the list of features continue to grow or are in development. 

TL;DR - GoPursue is a career exploration app equivalent to a dating app such as Bumble or Tinder.

GoPursue is a career exploration app aimed at students at a high shcool level. The app provides "career cards" with data related to a particular professional and their current career. 

The app was built using the Rails framework and PostgreSQL. The backend was written in Ruby. The frontend was written in React.js/Bootstrap

The app includes a client facing portal with a **search** and **bookmark** feature, as well as a career card "randomizer". At this time, users can log in as a new user, using a pre-seeded login username/password combo, or as a guest. The app has a darkmode option and will include additional customaization features to allow for more accessbility in the future (including a "text size" feature).

The client facing app generates an automated verification email with a random base64 string token generated through Ruby's SecureRandom library.



The app also includes an admin portal for accessing and modifying data in the database. Currently, users with access can fully edit the text and delete careers from the database. The portal also allows for the addition of new careers/professionals, though this feature is not fully stable, nor are all of the componenets fully functional. The database also supplies usage statistics, including data of user access, as well as lenght of time of visit and career cards visited.
