const express = require('express');
const https = require('https')
const router = express.Router();

const data = JSON.stringify({
  "@context": "https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld",
  "@id": "http://purl.org/ccf/1.5/6d000077-6866-42e5-8af8-eb068239747a",
  "@type": "SpatialEntity",
  "creator": "a b",
  "creator_first_name": "a",
  "creator_last_name": "b",
  "creation_date": "2022-10-19",
  "ccf_annotations": [
    "http://purl.obolibrary.org/obo/UBERON_0002015",
    "http://purl.obolibrary.org/obo/UBERON_0008716",
    "http://purl.obolibrary.org/obo/UBERON_0000362",
    "http://purl.obolibrary.org/obo/UBERON_0001228",
    "http://purl.obolibrary.org/obo/UBERON_0004200",
    "http://purl.obolibrary.org/obo/UBERON_0001225",
    "http://purl.obolibrary.org/obo/UBERON_0001284",
    "http://purl.obolibrary.org/obo/UBERON_0002189"
  ],
  "x_dimension": 10,
  "y_dimension": 10,
  "z_dimension": 10,
  "dimension_units": "millimeter",
  "placement": {
    "@context": "https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld",
    "@id": "http://purl.org/ccf/1.5/6d000077-6866-42e5-8af8-eb068239747a_placement",
    "@type": "SpatialPlacement",
    "target": "http://purl.org/ccf/latest/ccf.owl#VHFLeftKidneyV1.1",
    "placement_date": "2022-10-19",
    "x_scaling": 1,
    "y_scaling": 1,
    "z_scaling": 1,
    "scaling_units": "ratio",
    "x_rotation": 0,
    "y_rotation": 0,
    "z_rotation": 0,
    "rotation_order": "XYZ",
    "rotation_units": "degree",
    "x_translation": 25.536,
    "y_translation": 94.007,
    "z_translation": 3.79,
    "translation_units": "millimeter"
  }
});
// const options = {
//     hostname: 'pfn8zf2gtu.us-east-2.awsapprunner.com',
//     path: '/get-collisions',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': data.length
//     }
// };

// const req = https.request(options, (res) => {
//   let data = '';

// //   console.log('Status Code:', res.statusCode);

//   res.on('data', (chunk) => {
//       data += chunk;
//   });

//   res.on('end', () => {
//     //   console.log('Body: ', JSON.parse(JSON.stringify(data)));
//   });

// }).on("error", (err) => {
// //   console.log("Error: ", err.message);
// });

//  req.write(data);
//  req.end();


router.post('/get-collisions', (req, res, next) => {
  if (!req.body.firstName) {
    res.status(400).json('you need to pass a firstName');
    return;
  }
  res.sendStatus(200);
});

module.exports = router;
