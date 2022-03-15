Step for building the api:
---------------------------------------
-It takes the user’s location using the (UI) Geolocation API.

-It receives nearby places based on the user’s location by making Request To Places API.


----
AUTH:
// const jwt = require('jsonwebtoken');
//
// module.exports = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         const decodedToken = jwt.verify(token, 'JWT_TOKEN_SECRET');
//         const userId = decodedToken.userId;
//         if (req.body.userId && req.body.userId !== userId) {
//             throw 'Invalid user ID';
//         } else {
//             next();
//         }
//     } catch {
//         res.status(401).json({
//             error: new Error('Invalid request!')
//         });
//     }
// };
----
db model :
{
latitude: '',
longitude:'',
country: '',
countryCode: '',
city: '',
zipcode: '',
streetName: '',
streetNumber: '',
administrativeLevels: {
level1long: '',
level1short: '',
level2long: '',
level2short: ''
}