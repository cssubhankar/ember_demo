import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations,{
	isError : false,
	success: false,
	validations: {
		name:{
			presence: { message: 'Please enter your name' }
		},
		email:{
			presence: { message: 'Please enter your Email' },
			format: { with: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, allowBlank: true, message: 'Please enter valid email address'  }
		},
		phone:{
			presence: { message: 'Please enter your Phone number' },
			format: { with: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ , allowBlank: true, message: 'Please enter valid 10 digit phone number'} 
		},
		message:{
			presence: { message: 'Please enter Message' }
		}
	},
	actions: {
		sendMessage(){
			this.validate().then(()=>{
				//write submit api call here 
				this.set('success', true);
				this.set("isError",false);
			}).catch(()=>{
				this.set("isError",true)
				//console.log(this.get("errors"));	
			})
		},
		showContactForm(){
			this.set('success', false);
			this.set('name', '');
			this.set('email', '');
			this.set('phone', '');
			this.set('message', '');

		}		
	}
});
