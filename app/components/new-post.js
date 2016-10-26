import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        day: this.get('day'),
        topic: this.get('topic'),
        sciname: this.get('sciname'),
        image: this.get('image'),
        description: this.get('description'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});
