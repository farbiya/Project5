const auth = require("../controllers/auth");
const { requireAuth, setAuthToken, unsetAuthToken } = require("../controllers/auth");
const { User, Schedule } = require("../db/models");

module.exports = (app) => {
  app.get("/", requireAuth, (req, res) => {
  });
  app.get("/login", requireAuth, (req, res) => {
    res.render("login",{title:'login'});
  });
  app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = auth.getHashedPassword(req.body.password)
    if (email && password)
      User.getUser(req.con, [email, password], (error, rows) => {
        if (rows.length > 0) {
          auth.setAuthToken(rows[0].user_id, req, res)
          res.redirect('/home')
        }
        else
          res.render("login")
      })
  });
  };
//routesManager(app);
