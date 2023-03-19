const jwt = require('jsonwebtoken');

// Middleware function to authenticate requests
function authMiddleware(req, res, next) {

    // Extracting the authorization header
    const authorization = req.header('Authorization')

    // If authorization header is missing, return unauthorized access error
    if(!authorization){
       return res.status(401).send({ error: 'Unauthorized access!' });
    }
     // Extracting the JWT token from the authorization header
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        // Verifying the JWT token with the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attaching the decoded user object to the request object
        req.user = decoded;
        // Call next middleware function
        next();
    } catch (e) {
        console.log(e)
        // Return authentication error if token verification fails
        res.status(401).send({ error: 'Please authenticate.' });
    }
}

module.exports = authMiddleware;
