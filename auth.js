// const jwt = require("jsonwebtoken");
// const JwtAuth = (req, res)=>{
//     const token = req.cookies.token;
//     try {
//         const user = jwt.verify(token, process.env.);
//         req.user = user;
//         next();
//     } catch (err){
//         res.clearCookie("token");
//         return res.redirect("/");
//
//     }
// }