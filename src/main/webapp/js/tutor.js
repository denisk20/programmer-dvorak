
jQuery.fn.center = function() {
	//centers vertically and moves to the right part of the screen
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	//can't just set right: 0 because this will somehow break jquery.resizable
	this.css("left", $(window).width() - $(this).outerWidth() + "px");
	return this;
}
function getURLParameter(name) {
	return decodeURI(
			(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
			);
}
function highlightChars(keys) {
	if(!$.isArray(keys)) {
		keys = [keys];
	}
	var kbd = $('.keyboard');
	kbd.find('.key-marker').remove();
	$.each(keys, function(i, key) {
		var keyData = PROGRAMMER_DVORAK_KEYMAP[key];
		highlightChar(keyData, kbd);
		if(keyData.upper) {
			//add shift
			highlightChar(PROGRAMMER_DVORAK_KEYMAP[16], kbd);
		}
	});

}

function highlightChar(keyData, kbd) {
	if(keyData) {
		var keyMark = $('<div class="key-marker"></div>');
		kbd.append(keyMark);

		keyMark.css('left', keyData.x1 + '%');
		keyMark.css('top', keyData.y1 + '%');
		keyMark.width((keyData.x2 - keyData.x1) + '%');
		keyMark.height((keyData.y2 - keyData.y1) + '%');
	}
}
function makeup() {
	var content = $('.content');
	var lesson = arguments[0];

	//header
	$('head').append($('<title>' + LESSONS.prefix + ': ' + LESSONS[lesson] + '</title>'));
	content.append($('<h1>' + LESSONS[lesson] + '</h1>'));

	var lessonStr = new String(lesson).length > 1 ? lesson : "0" + lesson;
	//navigation
	var nav = $('<div class="nav"></div>');
	if(LESSONS[lesson - 1]) {
		var lessonStr = new String(lesson - 1).length > 1 ? lesson - 1 : "0" + (lesson - 1);
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
	
	var args = Array.prototype.slice.call(arguments);
	var lines = args.slice(1);
	//draw the tutors
	var exercise = getURLParameter("exercise");
	for (var i = 0; i < lines.length; i++) {
		tutor(lines[i], exercise, i, lesson, lines.length);
	}
}

function tutor(lines, exercise, id, lesson, total) {
	var focus = false;
	if(parseInt(exercise) === id) {
		//if there was a cookie bookmark - focus
		focus = true;
	} else if(id === 0){
		//otherwise focus the first exercise
		focus = true;
	}
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
			//setting 'continue' cookie
			if(lesson === parseInt(LESSONS.count) && id === total-1){
				//just finished last exercise of last lesson - you rock man!
				docCookies.removeItem('continue', '/');
				alert('Congratulations, you rock!')
			} else {
				var next = id + 1;
				if(id === total-1){
					//finished last exercise in the lesson
					lesson++;
					next = 0;
				}
				if(new String(lesson).length === 1) {
					lesson = '0' + lesson;
				}
				docCookies.setItem('continue', lesson + '_' + next, Infinity, '/');
			}
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
function cp() {
	$('.content').append($('<div class="copyright">This lesson has been created by Dan Wood. Original can be found here: <a href="http://gigliwood.com/abcd/lessons/">http://gigliwood.com/abcd/lessons/</a></div>'));
}
