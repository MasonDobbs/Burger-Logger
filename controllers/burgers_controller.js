var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

router.get("/burgers", (req, res) => {

    burger.all((burgerData) => {
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", (req, res) => {

    burger.create(req.body.burger_name, (result) => {
        console.log(result);
        res.json({ id: result.insertId});
    });
});

router.put("/burger/:id", (req, res) => {

    burger.update(req.params.id, (result) => {
        console.log(result)

        res.sendDate(200);
    });
});

module.exports = router;