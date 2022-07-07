# README

This is a protoytpe of a career exploration app built for Uncover Education. The app is currently stable with no major bugs or issues present.

## TL;DR
A career exploration app equivalent to a dating app such as Bumble or Tinder.


## Full Version
GoPursue is a career exploration app aimed at students at a high school level. The app provides "career cards" with data related to a particular professional and their current career. In addition to its main client-side facing features, the app provides a fully functional login process with mailer for confirming new users and an additional admin portal for managing the database as described below.

## Stack
The app was built using the Rails framework and PostgreSQL. It has a fully functional API and routing written in Ruby. The app makes use of no external APIs.

The frontend was written in React.js and Bootstrap as well as React Router

## Features

### Main App
The app includes:
- a client facing portal with a **search** and **bookmark** feature
- a career card "randomizer". 
- login: At this time, users can only login as a guest or returning user. A register new user feature that auto-generates a mailer to confirm e-mail address has been coded but turned for now
- darkmode

The client facing app generates an automated verification email with a random base64 string token generated through Ruby's SecureRandom library.


### Admin Portal
The app also includes an admin portal for accessing and modifying data in the database. 

Users can:
- fully edit and delete careers from the database. 
- add new careers/professionals, though this feature is not fully stable, nor are all of the componenets fully functional. 
- view usage statistics, including data of user access, as well as lenght of time of visit and career cards visited.

## Deployment
The app can be deployed through any cloud platform service. The app is currently deployed through Heroku.
