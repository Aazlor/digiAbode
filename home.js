$('body').on({
	keyup:function(){
		validateField($(this), false);
	},
	focus:function(){
		validateField($(this), false);
	},
	blur:function(){
		validateField($(this), false);
	},
	change:function(){
		validateField($(this), false);
	},
}, 'form input');

var registrationForm = {
	"element": "form",
	"action": "handler",
	"onsubmit": "return validateForm(this, true);",
	0: {
		"element": "input",
		"type": "text",
		"name": "first_name",
		"placeholder": "First Name",
		"data-required" : "true",
		"data-invalid": {
			"element": "span",
			"class": "invalid",
			0: {
				"element": "img",
				"src": "site/invalid.png",
			}
		},
		"data-valid": {
			"element": "span",
			"class": "valid",
		},
	},
	1: {
		"element": "input",
		"type": "text",
		"name": "last_name",
		"placeholder": "Last Name",
		"data-required" : "true",
		"data-invalid": {
			"element": "span",
			"class": "invalid",
			0: {
				"element": "img",
				"src": "site/invalid.png",
			}
		},
		"data-valid": {
			"element": "span",
			"class": "valid",
		},
	},
	2: {
		"element": "input",
		"type": "email",
		"name": "email",
		"placeholder": "Email",
		"data-required": "true",
		"data-validate": "email",
		"data-invalid": {
			"element": "span",
			"class": "invalid",
			"alt": "Invalid email address.",
			"title": "Invalid email address.",
			0: {
				"element": "img",
				"src": "site/invalid.png",
			}
		},
		"data-valid": {
			"element": "span",
			"class": "valid",
			0: {
				"element": "img",
				"src": "site/valid.png",
			}
		},
	},
	3: {
		"element": "input",
		"type": "password",
		"name": "password",
		"placeholder": "Password",
		"data-required" : "true",
		"data-validate": "complexity",
		"data-valid": {
			"element": "span",
			"class": "valid",
			0: {
				"element": "img",
				"src": "site/valid.png",
			}
		},
		"data-invalid": {
			"element": "span",
			"class": "invalid",
			"alt": "Your password sucks. Try something that's more than 6 characters and not one of the top 120 most common passwords.",
			"title": "Your password sucks. Try something that's more than 6 characters and not one of the top 120 most common passwords.",
			0: {
				"element": "img",
				"src": "site/invalid.png",
			}
		},
	},
	4: {
		"element": "input",
		"type": "password",
		"name": "confirm_password",
		"placeholder": "Confirm Password",
		"data-required": "true",
		"data-validate": "compare",
		"data-compare": "password",
		"data-invalid": {
			"element": "span",
			"class": "invalid",
			"alt": "Password mismatch.",
			"title": "Password mismatch.",
			0: {
				"element": "img",
				"src": "site/invalid.png",
			}
		},
		"data-valid": {
			"element": "span",
			"class": "valid",
			0: {
				"element": "img",
				"src": "site/valid.png",
			}
		},
	},
	5: {
		"element": "button",
		"type": "submit",
		"name": "submit",
		"placeholder": "Submit",
		"value": "Register",
		"content": "Register",
	},
}

var loginForm = {
	"element": "form",
	"action": "handler",
	"onsubmit": "return loginValidation(this);",
	0: {
		"element": "input",
		"type": "text",
		"name": "email",
		"placeholder": "Email",
		"data-required": "true",
		"data-validate": "Login",
		"data-invalid": {
			"element": "span",
			"class": "invalid",
			"alt": "Invalid Login Credentials.",
			"title": "Invalid Login Credentials.",
			0: {
				"element": "img",
				"src": "site/invalid.png",
			}
		},
	},
	1: {
		"element": "input",
		"type": "password",
		"name": "password",
		"placeholder": "Password",
		"data-required" : "true",
		"data-validate": "Login",
		"data-invalid": {
			"element": "span",
			"class": "invalid",
			"alt": "Invalid Login Credentials.",
			"title": "Invalid Login Credentials.",
			0: {
				"element": "img",
				"src": "site/invalid.png",
			}
		},
	},
	2: {
		"element": "button",
		"type": "submit",
		"name": "submit",
		"placeholder": "Submit",
		"value": "Login",
		"content": "Login",
	},
}

var object = {
	0: {
		"element": "div",
		"id": "Header",
		"class": "",
		0: {
			"element": "a",
			"id": "",
			"class": "",
			"href": "http://digiabode.com",
			"el": {
				"element": "img",
				"id": "",
				"class": "",
				"src": "./site/logo.png",
			}
		},
		1: {
			"element": "img",
			"id": "",
			"class": "House",
			"src": "./site/house.png",
		},
	},
	1: {
		"element": "div",
		"id": "",
		"class": "Register",
		1: {
			"element": "h4",
			"id": "",
			"class": "",
			"content": "FILL THIS OUT FOR YOUR CHANCE TO WIN A FREE WEBSITE BUILDING TOOL*",
		},
		2: registrationForm,
		0: {
			"element": "img",
			"id": "",
			"class": "Buildings",
			"src": "./site/blue-white-buildings.png"
		},
		3: {
			"element": "p",
			"id": "",
			"class": "footnote",
			"content": "*Current odds of winning : 100%",
		}
	},
	2: {
		"element": "div",
		"id": "",
		"class": "SalesPitch",
		0: {
			"element": "h3",
			"id": "",
			"class": "",
			"content": "Already Registered?"
		},
		1: loginForm,
		2: {
			"element": "hr",
		},
		3: {
			"element": "div",
			"id": "",
			0: {
				"element": "h3",
				"id": "",
				"class": "",
				"content": "Sales Pitch",
			},
			1: {
				"element": "ul",
				"id": "",
				"class": "",
				"content": "",
				0: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				1: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "Ut ornare mauris non mollis cursus.",
				},
				2: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "Phasellus vitae nisi ut ligula sodales finibus vitae nec eros.",
				},
				3: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "Aliquam accumsan elit id condimentum congue.",
				},
			},
			2: {
				"element": "ul",
				"id": "",
				"class": "",
				"content": "",
				0: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "Quisque pulvinar risus sed eros posuere, non iaculis enim sollicitudin.",
				},
				1: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "_____________",
				},
				2: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "_____________",
				},
				3: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "_____________",
				},
				4: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "_____________",
				},
			},
			3: {
				"element": "ul",
				"id": "",
				"class": "",
				"content": "",
				0: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "_____________",
				},
				1: {
					"element": "li",
					"id": "",
					"class": "",
					"content": "_____________",
				},
			},
		},
	},
	3: {
		"element": "div",
		"id": "Clear",
		"content": " ",
	}
}


$.each(object, function(){
	$('body').append(layout(this));
});