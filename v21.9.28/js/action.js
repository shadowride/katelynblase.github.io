// for header
document.getElementsByTagName("header")[0].style = `background-image: url('`+backgroundImage+`');`;

document.write( `
<script>
	var list = [
		`+list_gallery+`
	];

	var winner = [
		`+list_winner+`
	];
</script>
` );

	function topup() {
		var x = document.getElementById("topup");
		x.classList.toggle('show');
	}

	// const modal = function(){
	// 	document.getElementById("topup").className = "yes";
	// }; 
	// setTimeout(modal, topup*1000);

	// const reload = function(){
	// 	window.location.replace(currentURL);
	// }; setTimeout(reload, refresh*1000);
	

// for button list NAVBAR
function home() {
	window.location.reload();
}
// function contact() {
// 	window.location.reload();
// }
function about() {
	window.location.reload();
}

$('#ul').append(`
	<li>
		<button id="switchTheme" class="btnChangeTheme">&bull;</button>
	</li>
	<li>
		<span class="transtool">
			<span id="google_translate_element"></span>
		</span>
	</li>
`);

// for Switch Theme Dark / Light Mode
const switchTheme_click = document.querySelector('#switchTheme');
const switchTheme_html = document.querySelector('html');

if(theme === "dark") {
    switchTheme_html.dataset.colorMode = "dark";
} else if(theme === "light") {
    switchTheme_html.dataset.colorMode = "light";
} else {

    if (new Date().getHours() < 6) {
        switchTheme_html.dataset.colorMode = "dark";
    } else if (new Date().getHours() < 18) {
        switchTheme_html.dataset.colorMode = "light";
    } else if (new Date().getHours() < 24) {
        switchTheme_html.dataset.colorMode = "dark";
    }
}

switchTheme_click.addEventListener('click', function () {
    if (switchTheme_html.dataset.colorMode === 'light') {
        switchTheme_html.dataset.colorMode = "dark";
        // this.textContent = "&bull;";
    } else {
        switchTheme_html.dataset.colorMode = "light";
        // this.textContent = "&bull;";
    }
});


// for slide list NAVBAR
function navtoggle() {
    var navelemental = document.getElementById("ul");
    // var layerelemental = document.getElementById("layer");
    // var btnnavelemental = document.getElementById("menu-toggle");
	// var bodyscrolling = document.getElementById("body");
    
    navelemental.classList.toggle("slide");
    // layerelemental.classList.toggle("layerslide");
    // btnnavelemental.classList.toggle("xbtn_nav_toggle");
	// bodyscrolling.classList.toggle("xbodyscrolling");
    }
	
		document.getElementById("btn_nav_toggle").innerHTML = `&equiv;`;

		// blockAds Transtool
		document.getElementsByClassName("goog-logo-link").rel = "noreferrer";
		
	// Register
	function altREG() {
		var x = document.getElementById('alt_reg');
		x.classList.toggle('show');
	}
	
	// gallery view: list / grid mode
	if(gallery_type === "box") {
		gallery_type = "box";
	} else if(gallery_type === "list") {
		gallery_type = "list";
	} else if(gallery_type === undefined) {
		gallery_type = "box";
	} else {
		gallery_type = "box";
	}

	var gallery = document.getElementById("gallery_container");
	gallery.classList.add( gallery_type );

	
			// for PAGINATIONS gallery
			var pages = paginate(perPage, list);
			function paginate(n, list) {
				return divide(n, list).map(function (items, index) {
					var number = n * index;
		
					return {
						start: number + 1,
						end: number + items.length,
						items: items
					};
				});
			}
		
			var header = document.getElementById("pageHeader");
			var items = document.getElementById("pageItems");
			var buttons = document.getElementById("pageButtons");
		
			appendChildren(buttons, pages.map(function (page, index) {
				var button = document.createElement("button");
				button.addEventListener("click", display);
				button.innerHTML = index + 1;
				return button;
		
				function display() {
					displayPage(page);
				}
			}));
			displayPage(pages[0]);
		
			function displayPage(page) {
				// header.innerHTML = "file: " + page.start + " to " + page.end;
				header.innerHTML = "<font style='display:none'>file: " + page.start + " to " + page.end + "</font>";
				items.start = page.start;
				items.innerHTML = "";
				appendChildren(items, page.items.map(function (item) {
					var span = document.createElement("span");
					span.innerHTML = item;
					return span;
				}));
			}
			function appendChildren(element, children) {
				children.forEach(function (child) {
					element.appendChild(child);
				});
			}
			function take(n, list) {
				return list.slice(0, n);
			}
			function drop(n, list) {
				return list.slice(n);
			}
			function concat(lists) {
				return Array.prototype.concat.apply(this, lists);
			}
			function divide(n, list) {
				if (list.length) {
					var head = take(n, list);
					var tail = drop(n, list);
					return concat.call([head], [divide(n, tail)]);
				} else return [];
			}

			// visibility Button Pagination
			var childBtnPg = document.getElementById("pageButtons").childElementCount;
			if (childBtnPg === 1) {
				document.getElementById("pageButtons").style = "display:none";
			}
			


// for Social Media Type

	document.getElementById("social_media").classList.add(social_media);

// for send messages

	function xcontact() {
		setTimeout(() => { document.getElementById('contact').style = "display: none;"; },1000);
		document.getElementById('cont').style = "position: fixed; top: -100vh; left: 50%;";
		window.history.back();
		setTimeout(() => { location.reload(); },1200);
	}
	function send() {
		alert('Your message has been sent!');
		window.history.back();
		setTimeout(() => { location.reload(); },1200);
	}
	
document.write(`<script src="js/autocomments.js"></script>`);