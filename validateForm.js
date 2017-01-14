function validateForm(formElements, submitted){
	
	var compare = submitted;
	$.each(formElements, function(){
		if(submitted == true){
			if(validateField($(this), submitted) == false)
				compare = false;
		}
		else
			validateField($(this));
	});

	if(compare === false){
		console.log('!!');
		return false;
	}
	else{
		submitForm(formElements);
		return false;
	}

}

var alerted = 0;
var alertedEmail = '';
function validateField(input, submitted){

	if(input.data('required') === true || (input.data('validate') && $.trim(input.val()) == '')){
		switch(input.data('validate')){
			case 'email':
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,100})?$/;
				var t_f = false;
				if(emailReg.test(input.val()) && $.trim(input.val()) != ''){
					$.ajax({
						method: "POST",
						url: "registration.php",
						data: {'emailValidation': input.val()},
					}).done(function( msg ) {
						if(msg == 1)
							t_f = true;
						else if(msg == 2){
							t_f = false;
							if(alertedEmail != input.val()){
								alertedEmail = input.val();
								alert('Email already registered.');							
							}
						}
						else
							t_f = false;		
						var results = validateHandling(input, t_f);
						return results;						
					});
				}
				else{
					t_f = false;
					var results = validateHandling(input, t_f);
					return results;
				}
				break;
			case 'complexity':
				var result = passwordComplexity(input.val());
				var results = validateHandling(input, result);
				return results;
				break;
			case 'compare':
				var compare_to = input.data('compare');
				var results = validateHandling(input, $('input[name="'+compare_to+'"]').val() == input.val());
				return results;
				break;
			default:
				if($.trim(input.val()) == '' && submitted === true)
					var t_f = false;
				else
					var t_f = true;
				var results = validateHandling(input, t_f);
				return results;
				break;
		}
	}	
}


function validateHandling(input, result){
	if(result === true){
		$(input).removeClass('Error').addClass('Verified');
		$(input).nextAll('.invalid:first').css({'display': 'none',});
		$(input).nextAll('.valid:first').css({'display': 'inherit',});
	}
	else{
		$(input).removeClass('Verified').addClass('Error');
		$(input).nextAll('.invalid:first').css({'display': 'inherit',});
		$(input).nextAll('.valid:first').css({'display': 'none',});
	}
	return result;
}

function passwordComplexity(p){
	var shitPasswords = ['123456','0','1234','12345','102030','111111','112233','121212','123123','123321','123456','123654','222222','555555','654321','666666','696969','753951','1234567','7777777','11111111','12345678','123123123','123456789','987654321','1234567890','123qw','1q2w3e','1q2w3e4r','1qaz2wsx','aaaaaa','abc','abc123','abcd1234','abcdef','access','Admin','adobe1','adobe123','adobeadobe','alexander','andrea','andrew','asdasd','asdfasdf','asdfgh','asdfghj','asdfghjkl','azerty','baseball','batman','bustr','charlie','chocolate','computer','daniel','dragon','dreamweaver','fdsa','football','freedom','fuckyou','ginger','hannah','iloveyou','internet','jennifer','jessica','jordan','joshua','killer','letmein','liverpool','macromedia','maggie','maser','matrix','michael','michelle','monkey','mustang','nicole','password','password1','pepper','photoshop','princess','purple','qazwsx','qwerty','qwertyuiop','samsung','secret','shadow','snoopy1','soccer','summer','sunshine','superman','test','thomas','tigger','trustno1','welcome','whatever','zxcvbnm'];

	if(p.length < 6 || $.inArray(p, shitPasswords) !== -1){
		return false;
	}
	else
		return true;
}

function submitForm(formElements) {
	var vars = {};
	$.each(formElements, function(){
		vars[$(this).attr('name')] = $(this).val();
	});

	$.ajax({
		method: "POST",
		url: "registration.php",
		data: {vars},
	}).done(function( msg ) {
		console.log(msg);
		if(msg == 'welcome'){
			window.location.href = './dashbaord/';
		}
	});

	// return false;
}


function loginValidation(formElements){
	event.preventDefault();
	var vars = {};
	$.each(formElements, function(){
		vars[$(this).attr('name')] = $(this).val();
	});

	$.ajax({
		method: "POST",
		url: "registration.php",
		data: {'login': vars},
	}).done(function( msg ) {
		console.log(msg);
		if(msg == 'welcome'){
			window.location.href = './dashboard/';
		}
		else{
			$.each(formElements, function(){
				validateHandling($(this), false);
			});			
		}
	});

	return false;
}