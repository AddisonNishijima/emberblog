import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },

    update(post) {
      var params = {
        day: this.get('day'),
        topic: this.get('topic'),
        sciname: this.get('sciname'),
        image: this.get('image'),
        description: this.get('description'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
