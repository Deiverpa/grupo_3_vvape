const listaProductos = [
    {
      id: 1,
      titulo: "GEEK VVAPE",
      descripcion:
        "Con su batería de 1200 mAh y potencia de hasta 45w, y resistencias optimizadas es capaz de darnos una autonomía más que suficiente para todo el día, además la marca nos sorprende con un llenado de líquido con un facilísimo acceso y tanque de 2 ml, el dispositivo es capaz de darnos caladas tipo MTL o DL gracias a su regulación superior con un maravilloso sabor y golpe.",
      precio: "$150.000",
      img: "vaper-2.jpg",
      advertencia: "**Producto exclusivo para mayores de edad, se usa con esencias que pueden contener nicotina, la cual es adictiva."
    },
    {
        id: 2,
        titulo: "PRO VVAPE",
        descripcion:
          "Tiene un diseño innovador y estéticamente contemporáneo, funciona con una batería integrada de 1000mAh. El dispositivo viene con un chip Axon que ofrece un modo de pulso para una experiencia de vapeo aún más incomparable y agradable a la mano. Promocionado como uno de los primeros dispositivos MTL con modo de pulso para una salida de sabor consistente cada vez.",
        precio: "$220.000",
        img: "vaper-1.jpg",
        advertencia: "**Producto exclusivo para mayores de edad, se usa con esencias que pueden contener nicotina, la cual es adictiva."
      },
      {
        id: 3,
        titulo: "ULTRA VVAPE",
        descripcion:
          "Es un dispositivo portátil que está diseñado para vapear sobre la marcha. El ULTRA VVAPE adopta un cartucho de jugo de 2ml para una recarga fácil. La bobina incorporada de 1.2ohm hace que sea un verdadero equipo de vapeo para jugo y sales de nicotina con alto contenido de nicotina. También tiene una capacidad de batería de 350 mAh.",
          precio: "$220.000",
        img: "vaper-3.jpg",
        advertencia: "**Producto exclusivo para mayores de edad, se usa con esencias que pueden contener nicotina, la cual es adictiva."
      },
      {
        id: 4,
        titulo: "SMOOTH VVAPE",
        descripcion:
          "El dispositivo cuenta con un sistema de llenado superior y viene con un ajuste de flujo de aire magnético que garantiza un control preciso del flujo de aire para una experiencia de vapeo mejorada cada vez. Alimentado por una enorme batería recargable incorporada de 2500 mAh y el último chip ABYSS, el cual ofrece un rendimiento de vapeo potente y eficiente.",
        precio: "$150.000",
        img: "vaper-4.jpg",
        advertencia: "**Producto exclusivo para mayores de edad, se usa con esencias que pueden contener nicotina, la cual es adictiva."
      },
      {
        id: 5,
        titulo: "MENTHOL ORIGINAL",
        descripcion:
          "Esa menta helada como siempre quisiste. Puedes estar seguro: este sabor no puede faltar en tus actividades. Sabor natural con un toque escalofriante para darle ese plus a tus días.",
        precio: "$35.500",
        img: "esencia-1.jpg",
        advertencia: "**Producto exclusivo para mayores de edad, estas esencias pueden contener nicotina, la cual es adictiva."
      },
      {
        id: 6,
        titulo: "SLUSHY BLUE",
        descripcion:
          "Este sabor es una mezcla de sabores que se inspiran en uvas maduras, fresas frescas y arándanos llenos de sabor. La inhalación precipita suavemente una corriente de delicioso sabor a frutos azules seguido de un dulce y suculento sabor a bayas al exhalar.",
        precio: "$35.500",
        img: "esencia-2.jpg",
        advertencia: "**Producto exclusivo para mayores de edad, estas esencias pueden contener nicotina, la cual es adictiva."
      },
      {
        id: 7,
        titulo: "SHERBET CHERRY",
        descripcion:
          "¿Buscas una esencia audaz con un sabor bien redondeado? Entonces este líquido es perfecto para ti. Cada golpe proporcionará una mezcla cuidadosamente diseñada de cerezas dulces, fresas maduras y un mentol fresco para dejarte con un final refrescante.",
        precio: "$35.500",
        img: "esencia-6.jpg",
        advertencia: "**Producto exclusivo para mayores de edad, estas esencias pueden contener nicotina, la cual es adictiva."
      },
      {
        id: 8,
        titulo: "SODA PINEAPPLE CRUSH",
        descripcion:
          "SODA PINEAPPLE CRUSH sirve una combinación de piña dulce y una ráfaga helada de soda al exhalar. ¡Dale un verdadero placer a tus papilas gustativas!",
        precio: "$35.500",
        img: "esencia-4.jpg",
        advertencia: "**Producto exclusivo para mayores de edad, estas esencias pueden contener nicotina, la cual es adictiva."
      }
]


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
    product: (req,res)=>{
        let producto = listaProductos.find(producto=>producto.id == req.params.id);
        res.render('product', {producto:producto})
    },
}

module.exports = mainController;