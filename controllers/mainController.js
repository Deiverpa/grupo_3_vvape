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
    productindex: (req,res)=>{
        res.render('productindex')
    },
    product1: (req,res)=>{
        res.render('product1')
    },
    product2: (req,res)=>{
        res.render('product2')
    },
    product3: (req,res)=>{
        res.render('product3')
    },
    product4: (req,res)=>{
        res.render('product4')
    },
    esencia1: (req,res)=>{
        res.render('esencia1')
    },
    esencia2: (req,res)=>{
        res.render('esencia2')
    },
    esencia3: (req,res)=>{
        res.render('esencia3')
    },
    esencia4: (req,res)=>{
        res.render('esencia4')
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
}

module.exports = mainController;