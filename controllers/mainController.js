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