import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(){
		return RSVP.hash({
			pricing_data:[
				{
					plan_name:"Basic",
					cost:"$ 9.99 / year",
					storage:"10GB Storage",
					emails:"10 Emails",
					domains:"10 Domains",
					bandwidth:"5GB Bandwidth",
					type:"economy"
				},
				{
					plan_name:"Gold",
					cost:"$ 19.99 / year",
					storage:"25GB Storage",
					emails:"25 Emails",
					domains:"25 Domains",
					bandwidth:"10GB Bandwidth",
					type:"famous"
				},
				{
					plan_name:"Premium",
					cost:"$ 39.99 / year",
					storage:"50GB Storage",
					emails:"50 Emails",
					domains:"50 Domains",
					bandwidth:"20GB Bandwidth",
					type:"full"
				}
			],
			learnMore:"<h4>What is Lorem Ipsum?</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h4>Why do we use it?</h4><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><h4>Where does it come from?</h4><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
			renderingTheWeb:"<h4>Why do we use it?</h4><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><h4>Where can I get some?</h4><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>",
			services:[
				{
					"name":"Unique Layouts",
					"icon":"fa-lightbulb-o",
					"description":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
				},
				{
					"name":"Responsive",
					"icon":"fa-mobile",
					"description":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
				},
				{
					"name":"Ajax Transitions",
					"icon":"fa-spinner",
					"description":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
				},
				{
					"name":"E-Commerce",
					"icon":"fa-shopping-bag",
					"description":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
				},
				{
					"name":"Unlimited Portfolios",
					"icon":"fa-th",
					"description":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
				},
				{
					"name":"Powerful",
					"icon":"fa-bolt",
					"description":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
				}
			],
			members:[
				{
					"name":"Riff Raff",
					"designation":"Founder",
					"avatar":"assets/images/team/riffraff.jpg",
					"about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter":"#",
					"facebook":"#",
					"linked_in":"#"
				},
				{
					"name":"2 Chainz",
					"designation":"Chief Technology Officer",
					"avatar":"assets/images/team/2chainz.jpeg",
					"about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter":"#",
					"facebook":"#",
					"linked_in":"#"
				},
				{
					"name":"Nene Leakes",
					"designation":"Director of Markerting",
					"avatar":"assets/images/team/nene.jpeg",
					"about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter":"#",
					"facebook":"#",
					"linked_in":"#"
				},
				{
					"name":"Miley Cirus",
					"designation":"Creative Director",
					"avatar":"assets/images/team/miley.jpg",
					"about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter":"#",
					"facebook":"#",
					"linked_in":"#"
				}
			],
			companies:[
				{
					"company_name":"nike", 
					"company_logo":"assets/images/logos/logo-nike.svg"
				},
				{
					"company_name":"Microsoft", 
					"company_logo":"assets/images/logos/logo-ms.svg"
				},
				{
					"company_name":"github", 
					"company_logo":"assets/images/logos/logo-github.svg"
				}
			],
		});
	}
});
