import DS from 'ember-data';

export default DS.Model.extend({
  day: DS.attr(),
  topic: DS.attr(),
  sciname: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  comments: DS.hasMany('comment', { async: true})
});
