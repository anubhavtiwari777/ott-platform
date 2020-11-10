const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const bodyParser =require('body-parser');
var mysql  = require('mysql');
const app = express();
var cors = require('cors');

app.use(cors())

//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = 3030;

//crete database connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "password",
  database: "launch"
});

//connect to database
connection.connect((err) => {
  if(err) throw err;
  console.log('mysql connected..');
});

          //Storage folder creation//
          var storage = multer.diskStorage({
            destination: function (req, file, cb) {
              // cb(null, './src/');
              cb(null, 'uploads');
            },
            filename: function (req, file, cb) {
              cb(null, file.originalname + '-' + Date.now())
            }  
          })
        // var upload = multer({storage: storage})
        var upload = multer({storage: storage}).single('imgfile')
        // app.post('/upload', upload.single('imgfile'),(req,res) => {
          app.post('/upload',upload,(req,res) => {
            const pic = req.file.fileame;
            //  console.log('====>>>', req.file.filename);
        upload(req,res,function(err)
        {
          if(err instanceof multer.MulterError){
            return res.status(500).json(err)
          } else if (err){
            return res.status(500).json(err)
          }
          return res.status(200).send(req.file)
        })
        // res.send(file);
   
          var sql = "INSERT INTO videos (video) VALUES('"+ req.file.filename +"')";

            console.log(sql);
            connection.query(sql, function (err, result) {
               console.log(result.length);
                  if (err) throw err;
                  res.send(JSON.stringify({"status":200,"error":null,"response":result}))
            });

            res.status(200).json({
              status: 'succes',
              data: req.body,
            })
        });

          app.post('/api/insert', (req,res) => {
            const username = req.body;
              var sql = ('insert into videos SET ?' ,username)
            connection.query(sql, function (err, result) {
                  if (err) throw err;
                  res.send(JSON.stringify({"status":200,"error":null,"response":result}))
            });
          }); 

//api here.... to get data from the database
app.get('/api/video', (req,res) => {
  var sql = "select * from videos";
  connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(JSON.stringify({"status":200,"error":null,"response":result}))
  });
});

//api here... to insert data in the database
app.post('/api/videopost', (req,res) => {
  var sql = "INSERT INTO videos (video) VALUES ('8888')";
  connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(JSON.stringify({"status":200,"error":null,"response":result}))
  });
}); 
 
app.get('/', (req, res) => {
  connection.query(
    (err,result)=>{
    res.send('Hello World');
  });
});

// app.get('/about', (req, res) => {
//   res.send('Hello From about');
// });

// // app.get('/contact', (req, res) => {
// //   res.send('Hello From contactUs page');
// // });

app.listen(port, () => {  
    console.log("Server Running on port no." + port);
});