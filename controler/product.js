const Product = require('../models/product');

//fetch products
exports.getProduct = (req,res,next)=>{
    Product.find().then(prod =>{
        res.send(prod);
    }).catch(err =>{
        console.log(err);
    })
    console.log('hello /product');
};

//add product
exports.postAddProduct = (req,res,next)=>{
    const productName = req.body.name;
    const price = req.body.price;

    const product = new Product({name:productName,price:price});
    product.save().then(res =>{
        console.log(res);
        console.log('saved');
    }).catch(err =>{
        console.log(err);
    })
    
};

//delete a product by id
exports.postDeleteProduct = (req,res,next)=>{
    const prodId = req.body.productId;

    Product.findByIdAndDelete(prodId)
    .then(prod =>{
        
    }).catch(err =>{
        console.log(err);
    });
}

//update a product
exports.postUpdatePoduct = (req,res,next)=>{
    const prodId = req.body.productId;
    const product = {
        name:req.body.name,
        price:req.body.price
    }
    Product.findByIdAndUpdate(prodId,product,{useFindAndModify:false}).then(prod =>{
        console.log('updated ',prodId);
    }).catch(err =>{
        console.log(err)
    });
    res.status(200);
};

//find by name
exports.postFindByName = (req,res,next)=>{
    const name = req.body.name;
    console.log(name);

    Product.find({$where: ()=>{
        return this.name === name ;
    }}).then(prod =>{
        res.send(prod);
    }).catch(err =>{
        console.log(err);
    });
};


