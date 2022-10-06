
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController={
    index: (req,res)=>{
        res.render('index')
    },
    register: (req,res)=>{
        res.render('register')
    },
    login: (req,res)=>{
        res.render('login')
    },
    shoppingcart: (req,res)=>{
        res.render('shoppingcart')
    },
    newproduct: (req,res)=>{
        res.render('newproduct')
    },
    modifyproduct: (req,res)=>{
        res.render('modifyproduct')
    },
    product: (req,res)=>{
        let producto = products.find(producto=>producto.id == req.params.id);
        res.render('product', {producto:producto})
    },
    products: (req,res)=>{
      res.render('products',{products:products})
  },
  store: (req, res) => {
		let image 
		if(req.files[0] != undefined){
			image = req.files[0].filename;	
		}else{
			image = 'default-image.jpeg'
		}
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image,
		}
		products.push(newProduct)
		fs.writeFileSync(productsFilePath,JSON.stringify(products,null));
		res.redirect('products')
	}
}

module.exports = mainController;