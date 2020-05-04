// import JSONAPISerializer from '@ember-data/serializer/json-api';

// export default class ApplicationSerializer extends JSONAPISerializer {
//   serialize(snapshot, options) {
//     let json = super.serialize(...arguments);
//     return json;
//   }
// }

import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  // ...
}