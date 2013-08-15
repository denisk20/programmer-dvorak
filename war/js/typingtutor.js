//Typing Tutor jQuery plugin
// https://github.com/denisk20/TypingTutor
(function($) {
	//there should be 2 input elements - 1 for text and one for textarea
	$.fn.typingtutor = function(options) {
		//todo: validate input
		var settings = $.extend({
			speedInterval: 4,
			focus: false,
			textBackgroundColor: '#ffffff'
		}, options);
		//todo: make order independent
		var text = this[0];
		var textarea = this[1];
		$(textarea).css('resize', 'none');
		$(textarea).attr('onpaste', 'return false;');
		$(textarea).attr('oncut', 'return false;');
		//hopefully the browser will support HTML5
		$(textarea).attr('spellcheck', 'false');

		var currentLinePosition = 0;
		var lines = $(text).find('p');
		var originalTexts = [];
		var lineLetters = [];
		var totalCharacters = 0;
		for (var i = 0; i < lines.length; i++) {
			lines[i] = $(lines[i]);
			var lineText = $.trim(lines[i].text()).replace(/\t/g, ' ');
			totalCharacters += lineText.length;
			lines[i][0].innerHTML = '';
			originalTexts[i] = lineText;
			lineLetters[i] = [];
			for (var j = 0; j < lineText.length; j++) {
				var letter = $('<span>' + lineText.charAt(j) + '</span>');
				lines[i].append(letter);
				lineLetters[i][j] = letter;
			}
			//append a whitespace to the end of each line
			var lastLetter = $('<span>&nbsp;</span>');
			lineLetters[i][j] = lastLetter;
			lines[i].append(lastLetter);
			originalTexts[i] += ' ';
		}
		totalCharacters -= 1; //substracting 1 for the very first hit

		$(text).css('font-family', '"Courier New", Courier, monospace');

		var textBgColor = '#c9ffe0';
		
		var cursorColor = '#c6dea2';
		var errorColor = '#ff6188';
		
		function drawTextBackground(line, position) {
			if (lineLetters[line] && lineLetters[line][position]) {
				lineLetters[line][position].css('background-color', textBgColor);
			}
		}
		function clearTextBackground(line, position) {
			if (lineLetters[line] && lineLetters[line][position]) {
				lineLetters[line][position].css('background-color', settings.textBackgroundColor);
			}
		}
		function drawCursor(line, position) {
			if (lineLetters[line] && lineLetters[line][position]) {
				lineLetters[line][position].css('background-color', cursorColor);
				//next key callback
				nextKeyCallback(line, position-1);
			}
		}
		function increaseErrorCount(){
			isError = true;
			ec++;
			if (eh) {
				eh.call(this, ec);
			}
			if(settings.nextKeyCallback){
				settings.nextKeyCallback.call(this, 8);
			}
		}
		function highlightError(line, position) {
			if (lineLetters[line] && lineLetters[line][position]) {
				lineLetters[line][position].css('background-color', errorColor);
			}
			clearSpeed();
			increaseErrorCount();
		}
		function endsWith(str, suffix) {
			return str.indexOf(suffix, str.length - suffix.length) !== -1;
		}
		function getLines() {
			var currentText = textarea.value;
			var allLines = currentText.split(/\n/g);
			if ($.browser.name === 'msie' && endsWith(currentText, '\n')) {
				//todo test for ie > 8
				allLines.push('');
			}
			return allLines;
		}
		function getLinesCount() {
			return getLines().length;
		}
		function getLastLine() {
			var allLines = getLines();
			return allLines[allLines.length - 1];
		}

		//speed interval
		var si = settings.speedInterval;
		//last correct date
		var lcd;
		//times
		var tms = [];
		//speed callback
		var scb = settings.speedTrackCallback;
		//finish callback
		var fcb = settings.finishCallback;
		function clearSpeed() {
			lcd = null;
			tms.length = 0;
		}
		var millisInMinute = 1000 * 60;
		var startTime = null;

		//error count
		var ec = 0;
		//error handler
		var eh = settings.errorCallback;

		var isError = false;

		//resulting object
		var res = {};

		function nextKeyCallback(currentLinePosition, currentTypingPosition) {
			if(settings.nextKeyCallback){
				var currentLineText = originalTexts[currentLinePosition];
				//next typing position
				var ntp = currentTypingPosition + 1;
				if(currentLineText.length > ntp) {
					if(currentLineText.charAt(ntp) === ' ' && ntp === currentLineText.length - 1) {
						//either whitespace or enter are allowed to move to the next line
						settings.nextKeyCallback.call(this, 13, 32);
						res.nextKeys = [13, 32];
					} else {
						var next = currentLineText.charCodeAt(ntp);
						settings.nextKeyCallback.call(this, next);
						res.nextKeys = next;
					}
				}
			}
		}
		
		var keyPress = function(e) {
			if (!startTime) {
				startTime = new Date().getTime();
			}
			if (e.keyCode === 8 || e.keyCode === 13) {
				return;
			}

			//a letter has been typed
			var lastTypedLine = getLastLine();
			var currentTypingPosition = lastTypedLine.length;
			if (!originalTexts[currentLinePosition]) {
				return;
			}
			if (currentTypingPosition >= originalTexts[currentLinePosition].length - 1) {
				//at the end of the line
				if (!isError && e.which === 32) {
					//trigger enter event
					e.preventDefault();
					e = new jQuery.Event('keydown');
					e.which = e.keyCode = 13;
					$(textarea).trigger(e);

					$(textarea).val($(textarea).val() + '\n');
					//hack for IE: move cursor to the end:
					if($.browser.name === 'msie'){
						var range = $(textarea)[0].createTextRange();
						range.collapse(false);
						range.select();
					}
					return;
				}
			}
			if (currentTypingPosition > originalTexts[currentLinePosition].length - 1) {
				increaseErrorCount();
				return;
			}
			if (originalTexts[currentLinePosition].substring(0, currentTypingPosition + 1) === lastTypedLine + String.fromCharCode(e.which)) {
				//a correct letter is about to be pressed
				isError = false;
				drawTextBackground(currentLinePosition, currentTypingPosition);
				drawCursor(currentLinePosition, currentTypingPosition + 1);
				if (scb) {
					//correct date
					var cd = new Date().getTime();
					if (lcd) {
						//recording current time
						var t = cd - lcd;
						tms.push(t);
						if (tms.length === si) {
							//calculate average and call speed feedback
							var tot = 0;
							$.each(tms, function(i, val) {
								tot += val;
							});
							//average speed of typing one character
							var avg = tot / (tms.length);

							var speed = millisInMinute / avg;
							scb.call(this, parseInt(speed));

							tms.length = 0;
						}
					}

					lcd = cd;
				}
				//check if the whole text is typed
				//at this point we are sure that the typed symbol was correct
				//if we're at the end of last line - fire 'finishedcallback'
				if (fcb) {
					if (!isError && originalTexts.length - 1 === currentLinePosition && originalTexts[originalTexts.length - 1].length - 2/*substracting last whitespace*/ === currentTypingPosition) {
						var time = new Date().getTime() - startTime;
						var overallSpeed = (totalCharacters / time) * millisInMinute;
						fcb.call(this, parseInt(overallSpeed));
						//append last typed char to the textarea before disabling it
						$(textarea).val($(textarea).val() + String.fromCharCode(e.which));
						$(textarea).attr('disabled', true);
						$(textarea).unbind('keypress');
						$(textarea).unbind('keydown');
						$(textarea).unbind('keyup');
					}
				}
			} else {
				highlightError(currentLinePosition, currentTypingPosition);
			}
		};
		var keyDown = function(e) {
			//skip arrow keys
			if($.inArray(e.keyCode, [37, 38, 39, 40]) !== -1){
				e.preventDefault();
				return;
			}
			//disable home key, allow only shift+home combo
			if(e.keyCode === 36 && !e.shiftKey){
			    e.preventDefault();
			    return;
			}
			if (e.keyCode === 8) {
				//backspace - unstyle last styled character
				var lastLine = getLastLine();
				var currentTypingPosition = lastLine.length;
				if (currentTypingPosition > 0) {
					if (!originalTexts[currentLinePosition]) {
						return;
					}

					if (currentTypingPosition < originalTexts[currentLinePosition].length) {
						clearTextBackground(currentLinePosition, currentTypingPosition);
					}
					if (currentTypingPosition > 1) {
						if (currentTypingPosition - 1 < originalTexts[currentLinePosition].length) {
							clearTextBackground(currentLinePosition, currentTypingPosition - 1);
							if (originalTexts[currentLinePosition].substring(0, currentTypingPosition - 1) === lastLine.substring(0, currentTypingPosition - 1)) {
								drawCursor(currentLinePosition, currentTypingPosition - 1);
							}
						}
					} else {
						drawCursor(currentLinePosition, 0);
					}
				} else {
					//we may have jumped to a previous line
					//Remove cursor from previous line
					if (currentLinePosition === 0) {
						//we're at the beginning of the first line
						return;
					}
					if(! originalTexts[currentLinePosition]){
						return;
					}

					clearTextBackground(currentLinePosition, 0);
					currentLinePosition--;
					var currentTypedLine = getLines()[currentLinePosition];
					currentTypingPosition = currentTypedLine.length + 1; //adding one for space at the end
					if (checkInput(currentTypedLine, currentLinePosition, currentTypingPosition)) {
						drawCursor(currentLinePosition, currentTypingPosition - 1);
					} else {
						highlightError(currentLinePosition, currentTypingPosition - 2);
					}
				}
			} else if (e.keyCode === 13) {
				//enter
				//validate current line
				var lastLine = getLastLine();
				if ($.trim(originalTexts[currentLinePosition]) !== lastLine) {
					highlightError(currentLinePosition, lastLine.length);
					e.preventDefault();
					return;
				} else {
					drawTextBackground(currentLinePosition, lastLine.length);
				}
				currentLinePosition++;
				drawCursor(currentLinePosition, 0);
			}
		};
		var keyUp = function(e){
			//var t1 = new Date().getTime();
			//clear backgrounds of of all characters which are beyond current typing point
			var lastLine = getLastLine();
			var currentTypingPosition = lastLine.length;
			if(currentTypingPosition >= lineLetters[currentLinePosition].length){
				return;
			}
			//adding one for cursor
			for(var i = currentTypingPosition + 1; i < lineLetters[currentLinePosition].length; i++){
				clearTextBackground(currentLinePosition, i);
			}
			//we don't want to replace errors with cursor
			if ((e.ctrlKey || e.shiftKey || e.keyCode === 46) && checkInput(lastLine, currentLinePosition, currentTypingPosition)) {
				drawCursor(currentLinePosition, currentTypingPosition);
			}
			//console.log('KeyUp in: ' + (new Date().getTime() - t1));
		};

		$(textarea).keypress(keyPress);
		$(textarea).keydown(keyDown);
		$(textarea).keyup(keyUp);
	
		function moveToEnd() {
			var text = $(textarea).val();
			$(textarea).focus().val('').val(text);
		}
		$(textarea).mouseup(moveToEnd);

		/**
		 * Checks if last line was correct up to currentTypingPosition
		 */
		function checkInput(lastLine, currentLinePosition, currentTypingPosition){
			return $.trim(originalTexts[currentLinePosition]).substring(0, currentTypingPosition - 1) === $.trim(lastLine).substring(0, currentTypingPosition - 1);
		}
		if(settings.focus){
			$(textarea).focus();
		}
		drawCursor(0, 0);
		
		res.restart = function(){
			$(textarea).unbind('keypress');
			$(textarea).unbind('keydown');
			$(textarea).unbind('keyup');
			//clear backgrounds of all texts
			$.each(lineLetters, function(i, line){
				$.each(line, function(j, letter){
					letter.css('background-color', settings.textBackgroundColor);
				});
			});
			drawCursor(0, 0);

			currentLinePosition = 0;

			$(textarea).val('').attr('disabled', false);

			ec = 0;

			if (eh) {
				eh.call(this, ec);
			}

			isError = false;
			
			if (scb) {
				scb.call(this, 0);
			}
			clearSpeed();
			startTime = null;

			$(textarea).keypress(keyPress);
			$(textarea).keydown(keyDown);
			$(textarea).keyup(keyUp);
		};
		
		return res;
	};
}(jQuery));