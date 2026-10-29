Sequelize Relationship Project
My name is Ehinmosan Jessica, this is my task  on Sequelize ORM.
I created two tables - User and Post. One user can have many posts, and each post belongs to one user. That is the relationship. 
What I used
•  Nodejs, Express, Sequelize, MySQL. I used sequelize-cli to generate models.
My folder arrangement
•  config, controller, database, migrations, models, router, server.js. I followed my teacher's structure.
How I did the relationship
•  User.hasMany(Post) with foreignKey userId as posts
•  Post.belongsTo(User) with foreignKey userId as user
The userId is only inside Posts table, not inside Users.
How to run
1.  Clone
git clone github.com
2.  Install
npm install
3.  Put your mysql password inside config/config.json - database name is relationshipAppDB
4.  Run
npx sequelize-cli db:create
npx sequelize-cli db:migrate
5.  Start
npm run dev
Runs on localhost
Endpoints
User:
POST /api/users/add - create user
GET /api/users/all - get all users with posts (I used include here)
GET /api/users/:id - get one user
PUT /api/users/:id - update
DELETE /api/users/:id - delete
Post:
POST /api/posts/add - create post (needs userId)
GET /api/posts/all - get all posts with user
GET /api/posts/:id
PUT /api/posts/:id
DELETE /api/posts/:id
Testing with Postman
I first created user with firstName, lastName, email, phoneNumber.
Then I copied the id (UUID) and used it to create post with title, content, status, userId.
Then GET /api/users/all showed users with posts array inside - that is eager loading.
GET /api/posts/all showed posts with user inside.
What I learned was how foreign key works and why my models/index.js was crashing before. I fixed it.
