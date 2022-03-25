# README

This is the source code for the GoPursue web app prototype. The app is stable but lacks a lot of features that would be expected of something far beyond an MVP. The app has been deployed through Heroku and can be accessed via https://www.gopursuecareer.com/.

GoPursue is a career exploration app aimed at students at a high shcool level. The app provides "career cards" with data related to a particular professional and their current career. TL;DR - it is the career exploration equivalent of a dating app such as Bumble or Tinder.

The app was built using the Rails framework and PostgreSQ. The backend was written in Ruby. The frontend was written in React.js/Bootstrap

The app includes a client facing portal with a **search** and **bookmark** feature, as well as a career card "randomizer". At this time, users can log in as a new user, using a pre-seeded login username/password combo, or as a guest. There are no customizable features yet, though future deployments will include customization options, including "dark mode".

The app also includes an admin portal for accessing and modifying data in the database. Currently, users with access can fully edit the text and delete careers from the database. The portal also allows for the addition of new careers/professionals, though this feature is not fully stable, nor are all of the componenets fully functional. The database also supplies usage statistics, including data of user access, as well as lenght of time of visit and career cards visited.

