import Ember from 'ember';

export default Ember.Component.extend({
	collapsed: false,
	showModal:false,
	actions: {
		collapseNav() {
			this.toggleProperty('collapsed');
		},
		showModal() {
			this.set('showModal',true);
		}
	}
});
