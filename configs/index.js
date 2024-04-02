const configs = {
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGODB_URI ||'mongodb+srv://mireilleirafasha:fRwm9caCajel7FsQ@cluster0.4bfpmyu.mongodb.net/ContactApp',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;