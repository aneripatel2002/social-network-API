# 18 NoSQL: Social Network API

## Description

This week, I faced the task of developing an API for a social network web application. The goal was to enable users to post their thoughts, react to friends' posts, and manage a friend list. To achieve this, I utilized Express.js for routing and MongoDB as the database, alongside Mongoose as the ODM. Additionally, I employed Moment.js to format timestamps.

## User Story

AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API  
WHEN I enter the command to invoke the application  
THEN my server is started and the Mongoose models are synced to the MongoDB database  
WHEN I open API GET routes in Insomnia Core for users and thoughts  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
THEN I am able to successfully create, update, and delete users and thoughts in my database  
WHEN I test API POST and DELETE routes in Insomnia Core  
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
