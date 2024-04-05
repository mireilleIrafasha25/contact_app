const configs = {
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGODB_URI ||'mongodb+srv://mireilleirafasha:K3YOe09FBSlE5erK@cluster0.4bfpmyu.mongodb.net/Contact',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;