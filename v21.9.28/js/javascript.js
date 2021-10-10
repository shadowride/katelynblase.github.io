const currentDomain = window.location.hostname;
const currentURL = window.location.href;

var today = new Date();
var getHours = today.getHours();
var getSeconds = today.getSeconds();
var greeting ;

	if (getHours > 18) {
		greeting = 'Good evening!';
	} else if (getHours > 12) {
		greeting = 'Good afternoon!';
	} else if (getHours > 0) {
		greeting = 'Good morning!';
	} else {
		greeting = 'Hello!';
	}
	
// var header_bgs = "";
// var i_hdr;
// for (i_hdr = 0; i_hdr < headerBG.length; i_hdr++) {
// header_bgs += 
// `.header > figure:nth-child(`+ i_hdr +`) { 
// 	background-image: url(`+ headerBG[i_hdr] +`); 
// }`;
// }

document.write(`
<script src="js/security.js"></script>
<script src="js/jquery-3.5.0.min.js"></script>
<script src="js/geo.js"></script>

	<style>
		:root {
			--top: 256px;
			--body-primary: #f0f0f0;

			--bg-primary: ${bgColor};
			--bg-primary-hover: ${bgColor};
			--bg-secondary: white;
		
			--color-primary: white;
			--color-primary-hover: white;
			--color-secondary: black;
			--color-shadow-primary: 0.5px 0.5px 0.5px rgba(0,0,0,0.5), -0.5px 0.5px 0.5px rgba(0,0,0,0.5), 0.5px -0.5px 0.5px rgba(0,0,0,0.5), -0.5px -0.5px 0.5px rgba(0,0,0,0.5);

			--link-primary: ${bgColor};
			--link-hover-primary: white;
			
			--fb-bg-primary: white;
			--fb-name-primary: black;
			--fb-color-primary: #333;
			--fb-react-primary: #333;
			--fb-justnow-primary: #555;

			--photo-profile: url('${img_profile}');
		}
		html[data-color-mode='dark'] {
			--top: 256px;
			--body-primary: #0f0f0f;

			--bg-primary: ${bgColor};
			--bg-primary-hover: ${bgColor};
			--bg-secondary: black;
		
			--color-primary: black;
			--color-primary-hover: black;
			--color-secondary: black;
			--color-shadow-primary: 0.5px 0.5px 0.5px rgba(225,225,225,0.5), -0.5px 0.5px 0.5px rgba(225,225,225,0.5), 0.5px -0.5px 0.5px rgba(225,225,225,0.5), -0.5px -0.5px 0.5px rgba(225,225,225,0.5);

			--link-primary: ${bgColor};
			--link-hover-primary: black;

			--fb-bg-primary: white;
			--fb-name-primary: black;
			--fb-color-primary: #333;
			--fb-react-primary: #333;
			--fb-justnow-primary: #555;

			--photo-profile: url('${img_profile}');
		}
		.header > figure {
			animation: imageAnimation 33s linear infinite 8s;
		}
		div.layer span {
			background-image: url('${img_profile}');
		}
		
		#chest { 
			background-image: url('${headSliderThumb}');
		}
		@media screen and (max-width: 768px) {
			#chest {
				background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0));
			}
		}
		
	</style>

	<script src="js/facebook_profile.js"></script>
	<script src="js/var.js"></script>
	<script src="js/gallery.js"></script>
	`);
	
const contact = `
<div id="contact" class="contact">
	<div id="cont" class="cont">
		<div>
			<button onclick="xcontact()">&times;</button>
		</div>
		<div>
			<label>Name:</label><br>
			<input type="text" name=""><br><br>
			<label>Email:</label><br>
			<input type="text" name=""><br><br>
			<label>Messages:</label><br>
			<textarea></textarea><br>
		</div> 
		<div>
			<button onclick="send()">SEND</button>
		</div>       
	</div>
</div>
`;
