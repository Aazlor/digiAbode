function layout(el){
	var innercontents = '';
	var contents = '';
	var attr = '';

	$.each(el, function(key, val){
		if($.isPlainObject(val)){
			innercontents += layout(val);
		}
		else if(key == 'content') {
			contents += val;
		}
		else if(key != 'element') {
			attr += ' '+key+'="'+val+'"';
		}
	});
	if(el.element !== undefined)
		contents = '<'+el.element+' '+attr+'>'+contents+innercontents+'</'+el.element+'>'+"\n\r";
	else
		contents = contents+innercontents+"\n\r";		
	return contents;
}