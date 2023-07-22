# < NoSQL-Social-Network-API > ![License](https://img.shields.io/static/v1?label=license&message=MIT&color=yellowgreen) 


## Description
This is a backend API for a social network web application where users can connect, share their thoughts, react to friends' posts, and manage their friend lists seamlessly. The project's core purpose is to facilitate authentic interactions and meaningful engagements within the social network, emphasizing privacy and data security.

Developing this backend API aimed to solve the challenge of creating a scalable and performant infrastructure to handle user-generated content, interactions, and social features. Throughout the project, valuable insight was given on designing efficient APIs, optimizing database queries, and implementing stringent security measures to ensure a smooth and safe user experience.

## Table of Contents

- [Installation](#Installation)

- [Usage](#Usage)

- [License](#License)

- [Credits](#Credits)

- [Tests](#Tests)

- [Questions](#Questions)

## Installation
This application can't be deployed with a live link, so included in this README is a video which demonstrates the functionality of this application.

## Usage
### To Use This Application 
1. Git Clone the repository to your device: [GitHub-Repository](https://github.com/judemdonahue/NoSQL-Social-Network-API)
2. Run `npm i` in the terminal 
3. Run `npm start`

This application uses MongoDb as a database. Refer to the [MongoDB-Documentation](https://www.mongodb.com/docs/manual/installation/)

### Users

- `GET /api/users`
  - To retrieve a list of all available users.
- `POST /api/users`
  - To create a new user, use **POST** request on `/api/users`. Ensure that the request body includes `username` and `email`.
- `PUT /api/users/:userId`
  - For updating a specific user, send a **PUT** request to `/api/users/:userId` and include the necessary fields in the request body.
- `DELETE /api/users/:userId`
  - To delete a user identified by `userId`, make a **DELETE** request to `/api/users/:userId`.
- `POST /api/users/:userId/friends/:friendId`
  - To add a user identified by `friendId` to the friend list of the user with `userId`, use **POST** request on `/api/users/:userId/friends/:friendId`.
- `DELETE /api/users/:userId/friends/:friendId`
  - To remove a user identified by `friendId` from the friend list of the user with `userId`, send a **DELETE** request to `/api/users/:userId/friends/:friendId`.

### Thoughts

- `GET /api/thoughts`
  - To get a list of all thoughts, perform a **GET** request on `/api/thoughts`.
- `POST /api/thoughts`
  - Create a new thought by making a **POST** request to `/api/thoughts`. Ensure that the request body contains `thoughtText`, `username`, and `userId`.
- `PUT /api/thoughts/:thoughtId`
  - To update a specific thought, use **PUT** request on `/api/thoughts/:thoughtId` and include the necessary fields in the request body.
- `DELETE /api/thoughts/:thoughtId`
  - To delete a thought identified by `thoughtId`, send a **DELETE** request to `/api/thoughts/:thoughtId`.
- `POST /api/thoughts/:thoughtId/reactions`
  - To add a new reaction to the thought identified by `thoughtId`, use **POST** request on `/api/thoughts/:thoughtId/reactions`. Include `reactionBody` and `username` in the request body.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`
  - To remove a reaction identified by `reactionId` from the thought identified by `thoughtId`, send a **DELETE** request to `/api/thoughts/:thoughtId/reactions/:reactionId`.


[NoSQL-Demo.webm](https://github.com/judemdonahue/NoSQL-Social-Network-API/assets/122579098/b0fd5933-0ea4-45ad-8448-fa2050c2e69e)


## License
This application is covered under the MIT License.

## Credits
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
- Worked alongside classmates to complete this assignment.

## Tests
N/A

## Questions
Please don't hesitate to reach out to me if you have any queries, you can do so by contacting me through my GitHub profile [judemdonahue](https://github.com/judemdonahue) or by sending an email to judemdonahue@gmail.com.

