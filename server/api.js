// const Pool = require('pg').Pool;

// const client = new Pool({
//   user:'vendor',
//   host:'localhost',
//   database:'products',
//   password:'123',
//   port:5432
// });

// client.connect();

// exports.getProducts = async (req, res) => {
//   client.query('SELECT * FROM products', (err, results) => {
//     if(err) return res.json(err+'err')
//     res.status(200).json(results.rows);
//   })
// }

// exports.displayContainers = async (req, res) => {
//   client.query('SELECT DISTINCT container_id FROM products', (err, results) => {
//     if(err) return res.json(err+'err')
//     res.status(200).json(results.rows);
//   })
// }

// exports.getContainerContents = async (req, res) => {

//   const query = {
//     text : 'SELECT * FROM products WHERE container_id=$1',
//     values:[req.params.id]
//   }

//   client.query(query, (err, result) => {
//     if(err) return res.json(err+'err');
//     res.status(200).json(result.rows);
//   })
// }

// exports.containerLocate = async (req, res) => {

//   const query = {
//     text : 'SELECT * FROM PRODUCTS WHERE product_name=$1',
//     values : [req.params.name]
//   }
//   client.query(query, (err, results) => {
//     if(err) console.log(err.stack);
//     res.json(results.rows);
//   })

// }

// exports.AddProducts = async (req, res) => {

//   const {product_name, price, qty, container_id} = req.body;

//   const query = {
//     text : `INSERT INTO products(product_name, price, qty, container_id) VALUES ($1, $2, $3, $4);`,
//     values : [product_name, price, qty,container_id]
//   }
//   client.query(query, (err, results) => {
//     if(err) return res.json(err.stack+'err');
//     res.status(200).json(results.rows[0])
//   })

// }
