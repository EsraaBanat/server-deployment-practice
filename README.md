# server-deployment-practice

## **Bulid the server :**
1. Initialize your app ` npm init -y `
2. Install your dependencies  `npm install dotenv express jest`
3. Create the files and folders required for the application [index.js , server.js , server.test.js , middlewares , handlers ]
4. Create the correct content in the files
5. Test your server  `npm test`
You should see 100% of tests passing (TDD )
6. Start your server `nodemon`

## **Dployment the server to Heroku app:**

1. Login to your Heroku account
2. Create a new Heroku app
3. Go to the deployment tab
    - Choose “GitHub”
    - Connect to your repository
    - Choose the  branch
    - Choose the “Wait for CI to pass before deploy” option
    - Choose the “enable automatic deploys” option
    - Deploy the app and open the server in the browser, you should see the same results as you saw locally

## **Links :**
Heroku apps:

[Dev App](https://esraa-server-deploy-dev.herokuapp.com/)

[Prodution App](https://esraa-server-deploy-prod.herokuapp.com/)


Github :

[PR Link](https://github.com/EsraaBanat/server-deployment-practice/pull/3)

[Github Actions](https://github.com/EsraaBanat/server-deployment-practice/actions)

