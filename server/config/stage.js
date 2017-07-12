module.exports = {
    PORT : 8080,
    UI : {
        BASE_URL : "http://shinjo.testing.com:3000"
    },
    JWT: {
        COOKIE : "am_sess",
        SECRET : process.env.JWT_SECRET
    },
    GOOGLE: {
        PROJECT_NAME : "android-messenger",
        AUTH : {
            CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
            CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
            CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL
        }
    },
    AWS : {
        DYNAMODB : {
            BASE_URL : process.env.DB_BASE_URL,
            SECRET : process.env.AWS_SECRET,
            ACCESS_KEY : process.env.AWS_ACCESS_KEY,
            REGION : process.env.AWS_DYNAMODB_REGION
        }
    }
}