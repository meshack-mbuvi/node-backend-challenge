## Database setup

- Create a mySQL database named `nanykiappfactory`
- Change directory to root of this project
- Execute the command `mysql -u root -p nanykiappfactory < src/backend.sql`
- Create a `.env` file and add variables following the `.env-sample` guide
- While in the root folder of the this project, execute the following commands:
  - `npm install` this will install all project dependencies
  - `sequelize db:migrate` this will add the migrations for the models
- Start the application by executing the command `npm run start:dev`
- Using any API client of your choice, preferably [postman](https://www.getpostman.com/),
  - Login via the endpoint http://localhost:3003/personnel/login using the following payload:
    ```
    {
      "phone":"0722222222",
      "password":"123456"
    }
    ```
    You will get an Authorization token, copy the token and use it in the below step
  - Retrieve tasks http://localhost:3003/tasks/assigned?page=1&limit=5&order=created&orderMethod=ASC

    **Note:** make sure to provide `Bearer token in the headers`

## Developer

[Meshack Mbuvi](https://github.com/meshack-mbuvi)
