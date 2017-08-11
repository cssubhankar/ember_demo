import Ember from 'ember';

export default Ember.Component.extend({
	showModal: false,
	actions: {
		showModal() {
			this.toggleProperty('showModal',true);
		}
	}
});
