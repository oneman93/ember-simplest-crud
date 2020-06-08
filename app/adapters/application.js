import JSONAPIAdapter from '@ember-data/adapter/json-api';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    //host: 'http://localhost:8000/api',
    
    host: 'http://52.76.216.215/public/api',

    updateRecord: function (store, type, snapshot) {
        var data = {};
        var serializer = store.serializerFor(type.modelName);
    
        serializer.serializeIntoHash(data, type, snapshot, { includeId: true });
    
        var id = snapshot.id;
        var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');
    
        return this.ajax(url, 'PUT', { data: data });
      }
      
 })