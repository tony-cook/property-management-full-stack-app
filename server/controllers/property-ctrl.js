const Property = require('../models/property-model');

// quickSortPropertysBySuburb = async (req, res) => {
//     const properties = await Property.find({})

//     function quickSortSuburb (array) {
//         if (array.length < 2)
//           return array;

//         let pivotValue = array[0]
//         let pivot = array[0]['suburb'];
//         let left  = [];
//         let right = [];

//         for (let i = 1; i < array.length; i++){
//             if (array[i]['suburb'] < pivot)
//                 left.push(array[i]);
//             else
//                 right.push(array[i]);
//             }
//             return [...quickSortSuburb(left),pivotValue,...quickSortSuburb(right)];
//         };

//         const result = quickSortSuburb(properties)

//         return res.status(200).json({ success: true, data: result })

// }

// quickSortPropertysByPrice = async (req, res) => {
//     const properties = await Property.find({})

//     function quickSortPrice (array) {
//         if (array.length < 2)
//           return array;

//         let pivotValue = array[0]
//         let pivot = array[0]['price'];
//         let left  = [];
//         let right = [];

//         for (let i = 1; i < array.length; i++){
//             if (array[i]['price'] < pivot)
//                 left.push(array[i]);
//             else
//                 right.push(array[i]);
//             }
//             return [...quickSortPrice(left),pivotValue,...quickSortPrice(right)];
//         };

//         const result = quickSortPrice(properties)

//         return res.status(200).json({ success: true, data: result })

// }

getProperties = async (req, res) => {
  await Property.find({}, (err, property) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!Property.length) {
      return res.status(404).json({ success: false, error: `Property not found` });
    }

    return res.status(200).json({ success: true, data: property });
  })
    .clone()
    .catch(err => console.log(err));
};

module.exports = {
  getProperties
  // quickSortPropertysByPrice,
  // quickSortPropertysBySuburb
};
