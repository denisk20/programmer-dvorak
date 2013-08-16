jQuery.fn.center = function() {
	//centers vertically and moves to the right part of the screen
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	//can't just set right: 0 because this will somehow break jquery.resizable
	this.css("left", $(window).width() - $(this).outerWidth() + "px");
	return this;
}
function highlightChars(keys) {
	if(!$.isArray(keys)) {
		keys = [keys];
	}
	var kbd = $('.keyboard');
	kbd.find('.key-marker').remove();
	$.each(keys, function(i, key) {
		var keyMark = $('<div class="key-marker"></div>');
		kbd.append(keyMark);
		highlightChar(key, kbd, keyMark);
	});

}

function highlightChar(key, kbd, keyMark){
	var coords = PROGRAMMER_DVORAK_KEYMAP[key];
	if(coords) {
		var w = kbd.width();
		var h = kbd.height();
		keyMark.css('left', coords.x1 + '%');
		keyMark.css('top', coords.y1 + '%');
		keyMark.width((coords.x2 - coords.x1) + '%');
		keyMark.height((coords.y2 - coords.y1) + '%');
	}
}
function makeup(lesson) {
	var content = $('.content');
	//header
	$('head').append($('<title>' + LESSONS.prefix + ': ' + LESSONS[lesson] + '</title>'));
	content.append($('<h1>' + LESSONS[lesson] + '</h1>'));

	var lessonStr = new String(lesson).length > 1 ? lesson : "0" + lesson;
	//navigation
	var nav = $('<div class="nav"></div>');
	if(LESSONS[lesson - 1]) {
		var lessonStr = new String(lesson - 1).length > 1 ? lesson - 1: "0" + (lesson - 1);
		var prev = $('<a href="lesson' + lessonStr + '.html"><img src="../img/left-arrow.png" alt="Previous lesson" title="' + LESSONS[lesson - 1] + '"/></a>');
		nav.append(prev);
	}
	nav.append($('<a href="../index.html#lessons" class="toc"><img src="../img/toc.png" alt="Table of contents" title="Table of contents" /></a>'));
	if(LESSONS[lesson + 1]) {
		var lessonStr = new String(lesson + 1).length > 1 ? lesson + 1 : "0" + (lesson + 1);
		var next = $('<a href="lesson' + lessonStr + '.html"><img src="../img/right-arrow.png" alt="Next lesson" title="' + LESSONS[lesson + 1] + '"/></a>');
		nav.append(next);
	}
	content.append(nav);

	//keyboard
	var kbd = $('<div class="keyboard"><img src="../img/KB_Programmer_Dvorak.png" alt=""/></div>');

	content.append(kbd);

	kbd.draggable();
	kbd.resizable({handles: "sw", aspectRatio: true});
}
function tutor(lines, focus, content) {
	var content = $('.content');
	var src = $('<div></div>');
	var maxLength = 0;
	for (var i = 0; i < lines.length; i++) {
		src.append('<p>' + lines[i] + '</p>');
		if(lines[i].length > maxLength) {
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

	var showKbd = $('<button class="show-keyboard">Show keyboard</button>');
	content.append(showKbd);

	var tut = $([src[0], textarea[0]]).typingtutor({
		speedTrackCallback: function(speed) {
			scp.text('Current speed is ' + speed + ' characters per minute');
		},
		finishCallback: function(speed) {
			scp.text('Average speed was ' + speed + ' characters per minute');
		},
		errorCallback: function(errCount) {
			err.text('Errors: ' + errCount);
		},
		nextKeyCallback: function(keys) {
				highlightChars(keys);
		},
		textBackgroundColor: '#F5F2DC',
		focus: focus
	});
	
	showKbd.click(function() {
		var kbd = $('.keyboard');
		if($(this).text().indexOf('Hide') >= 0) {
			kbd.hide();
			$(this).text("Show keyboard");
		} else {
			highlightChars(tut.nextKeys);
			kbd.center();
			kbd.show();
			$(this).text("Hide keyboard");
			var that = this;
			$('.show-keyboard').each(function(i, item) {
				if(item !== that) {
					$(item).text('Show keyboard');
				}
			});
		}
	});

	//todo get rid of id altogether
	rst.click(function() {
		tut.restart();
		scp.text('');
		err.text('');
	});

	return tut;
}

/**
 * Copyright of Dan Wood
 */
function cp(){
	$('.content').append($('<div class="copyright">This lesson has been created by Dan Wood. Original can be found here: <a href="http://gigliwood.com/abcd/lessons/">http://gigliwood.com/abcd/lessons/</a></div>'));
}
