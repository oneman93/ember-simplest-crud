import Model from '@ember-data/model';
import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    dt_date_received: DS.attr('date'),   //to test if this is inserting correctly without CORS issue
    priority: DS.attr('number'),
    vip : DS.attr('boolean')
   });