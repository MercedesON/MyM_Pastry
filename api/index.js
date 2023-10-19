const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// Configura la conexión a la base de datos
const db = mysql.createConnection({	
    host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'cake'
});
// Conecta a la base de datos
db.connect(err => {
    if (err) {
      console.error('Error de conexión a la base de datos: ' + err);
      return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
  });
// Inicia el servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
// Define las rutas y controladores para interactuar con la base de datos
//get all user
app.get('/users', (req, res)=>{
	//console.log("get all cake");
	let qrr=`SELECT * FROM users`;
	db.query(qrr,(err,results)=>{
		if(err){
			console.log(err,'errs');
		}
		if(results.length>0){
			res.send({
				message:'All users Data',
				data:results
			});
		};

	});
	
});
//get single data by ID
app.get('/user/:id',(req,res)=>{
	let qrId= req.params.id;
	let qr=`SELECT * FROM users where iduser=${qrId}`;
	db.query(qr,(err,results)=>{
		if(err){
			console.log(err);
		}
		if(results.length>0){
			res.send({
				message:"Get data by ID",
				dat:results
			})
		}else{
			res.send({
				message:"Data not found dear!"
			})

		}
	})	
})
// app.listen(3001,()=>{
// 	console.log("Server is running on 3001 PORT, MerciCod")
// })


//get all cake
app.get('/tortas', (req, res)=>{
	//console.log("get all cake");
	let qrr=`SELECT * FROM tortas`;
	db.query(qrr,(err,results)=>{
		if(err){
			console.log(err,'errs');
		}
		if(results.length>0){
			res.send({
				message:'All tortas Data',
				data:results
			});
		};

	});
	
});

app.get('/tortas_cake', function(req, res){
	cakeTorta.getAllTortas(function(data){
		res.send(data);
	})
});
app.post('/insertarTorta',function(req, res){
	console.log("insertarTorta-req");
	console.log(req.body);	
   const { id_torta,nombre,precio} = req.body; 
   console.log("req-nombre");
   console.log(nombre);
   console.log("req-precio");
   console.log(precio);
   cakeTorta.addNewTorta(nombre,precio,function(data){
	   res.send(data);
   })
});

app.get('/proveedores_cake', function(req, res){		
	cakeProveedores.getAllProveedores(function(data){
		res.send(data);
	})
});

app.get('/categorias_cake', function(req, res){
	cakeCategorias.getAllCategorias(function(data){
		res.send(data);
	})
});

app.post('/insertarCategoria',function(req, res){
 	console.log("insertarCategoria-req");	
 	console.log(req.body);	
	const { idcategoria,nombre, descripcion} = req.body;
	console.log("req-nombre");
	console.log(nombre);
	console.log("req-descripcion");
	console.log(descripcion);
	cakeCategorias.addNewCategoria(nombre,descripcion,function(data){
		res.send(data);
	})
});

app.put('/actualizaCategoria',function(req, res){
	console.log("actualizaCategoria-req");	
	console.log(req.body);	
   const { idcategoria,nombre, descripcion} = req.body;
   console.log("req-nombre");
   console.log(nombre);
   console.log("req-descripcion");
   console.log(descripcion);
   cakeCategorias.addNewCategoria(nombre,descripcion,function(data){
	   res.send(data);
   })
});

app.put('/actualizaTorta',function(req, res){
	console.log("actualizaTorta-req");	
	console.log(req.body);	
   const { id_torta,nombre, precio} = req.body;
   console.log("req-nombre");
   console.log(nombre);
   console.log("req-precio");
   console.log(precio);
   cakeTorta.updateTorta(id_torta,nombre, precio,function(data){
	   res.send(data);
   })
});


app.get('/envios_cake', function(req, res){
	cakeEnvios.getAllEnvios(function(data){
		res.send(data);
	})
});




