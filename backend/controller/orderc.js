const table1 = require("../model/table1");

exports.index = (req, res, next) => {
  table1
    .findAll()
    .then((prod) => res.json(prod))
    .catch((err) => {
      console.log(err);
    });
};

exports.submitform = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const tableno = req.body.tableno;
  table1
    .create({ name: name, description: description, tableno: tableno })
    .then((prod) => {
      res.json(prod);
    });
};

exports.deleted = (req, res, next) => {
  const productid = req.params.productid;
  table1
    .findByPk(productid)
    .then((prod) => {
      return prod.destroy();
    })
    .then(() => {
      res.redirect("/");
    });
};
