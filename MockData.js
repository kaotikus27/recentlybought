{
  "MockData": [
    {
      "itemId": 1,
      "name": "Hannah Gown",
      "description": "Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit",
      "size": "S",
      "color": "Multicolor",
      "stylenumber": "BROR-WD106",
      "price": "38",
      "image": "Rectangle 1r.png",
      "id": "7c21",
      "qnty": 1
    },
    {
      "itemId": 2,
      "name": "Bag Flap",
      "description": "Chevron Flap Crossbody Bag",
      "size": "M",
      "color": "Multicolor",
      "stylenumber": "BROR-XD121",
      "price": "5.77",
      "image": "Rectangle 2r.png",
      "id": "f6fc",
      "qnty": 1
    },
    {
      "itemId": 3,
      "name": "Scarf Fringe",
      "description": "Manilla Tan Multi Plaid Oversized Fringe Scarf",
      "size": "L",
      "color": "Beige",
      "stylenumber": "BROR-DD102",
      "price": "29.77",
      "image": "Rectangle 3r.png",
      "id": "452a",
      "qnty": 1
    },
    {
      "itemId": 4,
      "name": "Sleeve Dress Diamante",
      "description": "Diamante Puff Sleeve Dress - Black",
      "size": "M",
      "color": "Black Gold",
      "stylenumber": "BROR-KS122",
      "price": "45.77",
      "image": "Rectangle 4r.png",
      "id": "4c1d",
      "qnty": 1
    },
    {
      "itemId": 5,
      "name": "Banneth DiaFormal Dress",
      "description": "Banneth Open Front Formal Dress in Black",
      "size": "XL",
      "color": "Black",
      "stylenumber": "BROR-XX152",
      "price": "45.77",
      "image": "Rectangle 5r.png",
      "id": "5ea9",
      "qnty": 1
    }
  ],
  "BoughtData": [
    {
      "id": "7c21",
      "itemId": 1,
      "name": "Hannah Gown",
      "description": "Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit",
      "size": "S",
      "color": "Multicolor",
      "stylenumber": "BROR-WD106",
      "price": "38",
      "image": "Rectangle 1r.png",
      "qnty": 1
    },
    {
      "id": "f6fc",
      "itemId": 2,
      "name": "Bag Flap",
      "description": "Chevron Flap Crossbody Bag",
      "size": "M",
      "color": "Multicolor",
      "stylenumber": "BROR-XD121",
      "price": "5.77",
      "image": "Rectangle 2r.png",
      "qnty": 1
    }
  ]
}

// Iterating through MockData
console.log('MockData Items:');
data.MockData.forEach(item => {
  console.log(`ID: ${item.id}`);
  console.log(`Name: ${item.name}`);
  console.log(`Description: ${item.description}`);
  console.log(`Size: ${item.size}`);
  console.log(`Color: ${item.color}`);
  console.log(`Price: $${item.price}`);
  console.log('--------------------');
});

// Iterating through BoughtData
console.log('BoughtData Items:');
data.BoughtData.forEach(item => {
  console.log(`ID: ${item.id}`);
  console.log(`Name: ${item.name}`);
  console.log(`Description: ${item.description}`);
  console.log(`Size: ${item.size}`);
  console.log(`Color: ${item.color}`);
  console.log(`Price: $${item.price}`);
  console.log('--------------------');
});
