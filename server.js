const express = require('express');

const sequelize = require('./database/database');

const userRouter = require('./router/user');

const postRouter = require('./router/post');

const app = express();

app.use(express.json);
app.use(userRouter);
app.use(postRouter);

comst PORT = 2019;

const databaseConnection = async () => {
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}
};

databaseConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
