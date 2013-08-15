function makeup(lesson){
	var content = $('.content');
	$('head').append($('<title>' + LESSONS.prefix + ': ' + LESSONS[lesson] + '</title>'));
	content.append($('<h1>' + LESSONS[lesson] + '</h1>'));

	var nav = $('<div class="nav"></div>');
	if(LESSONS[lesson-1]) {
		var prev = $('<a href="lesson' + LESSONS[lesson-1] + '.html"><img src="../img/left-arrow.png" alt="Previous lesson" title="' + LESSONS[lesson-1] + '"/></a>');
		nav.append(prev);
	}
	nav.append($('<a href="../index.html#lessons" class="toc"><img src="../img/toc.png" alt="Table of contents" title="Table of contents" /></a>'));
	if(LESSONS[lesson+1]) {
		var next= $('<a href="lesson' + LESSONS[lesson+1] + '.html"><img src="../img/right-arrow.png" alt="Next lesson" title="' + LESSONS[lesson+1] + '"/></a>');
		nav.append(next);
	}
	content.append(nav);
}
function tutor(lines, focus, content) {
	var content = $('.content');
	var src = $('<div></div>');
	var maxLength = 0;
	for(var i=0; i < lines.length; i++){
		src.append('<p>' + lines[i] + '</p>');
		if(lines[i].length > maxLength){
			maxLength = lines[i].length;
		}
	}
	content.append(src);

	var textarea = $('<textarea rows="' + lines.length + '" cols="' + maxLength + '"></textarea>');
	content.append(textarea);

	var scp = $('<div></div>');
	content.append(scp);

	var err = $('<div class="error"></div>');
	content.append(err);

	var rst = $('<button>Restart</button>');
	content.append(rst);

	var tut = $([src[0], textarea[0]]).typingtutor({
		speedTrackCallback: function(speed){
			scp.text('Current speed is ' + speed + ' characters per minute');
		},
		finishCallback: function(speed) {
			scp.text('Average speed was ' + speed + ' characters per minute');
		},
		errorCallback: function(errCount){
			err.text('Errors: ' + errCount);
		},
		textBackgroundColor: '#F5F2DC',
		focus: focus
	});
	//todo get rid of id altogether
	rst.click(function() {
		tut.restart();
		scp.text('');
		err.text('');
	});
}

