# TypingTutor

JQuery plugin which allows to create typing tutor UI:

![TypingTutor](http://s14.postimg.org/x9q5aimvl/type.png)

Powers http://programmer-dvorak.appspot.com/

Tested on jQuery 1.10.2, but should work on earlier versions as well.

Depends on [jquer.browser.js](http://jquery.thewikies.com/browser)

## Usage
Expects 2 elements to be present - one for text source, one for typing area (order matters):
```javascript
$('#src, #typingarea').typingtutor();
```
### Text source
Text source should be an element 
(`<div>`, `<span>`) with nested `<p>` elements for each line of text input:
````html
<div id='#src'>
    <p>First line of text to type</p>
    <p>Second line of text to type</p>
</div>
```
### Typing area
A typing area should be a simple textarea:
```html
<textarea id='typingarea' cols='100' rows='6'></textarea>
```
It's a good idea to make textareas (cols and rows attributes) approximately the same size as input text size.
In order to move the focus to the typing area right after creation use `focus: true` parameter

## Acceptable Options
```javascript
speedInterval: int
```
Determines how frequent current speed snapshots will be made. Counts continuously typed characters (with no erroneous one present, an error will reset the counter). Defaults to 4, which means that current speed callback will be called on every 4 subsequently typed correct characters.
```javascript
speedTrackCallback: function(speed){...}
```
speedTrackCallback allows to define a function which will be called periodically (depending on *speedInterval* parameter) with parameter *speed* which corresponds to typed characters per minute.
```javascript
finishCallback: function(averageSpeed){...}
```
Callback to be called when a user finishes typing, with average typing speed as a parameter.
```javascript
errorCallback: function(errorCount){...}
```
Error callback is called when an error is made. Total count of error is passed as a parameter.
```javascript
focus: boolean
```
Determines if the text area of this typing tutor should be focused after creation
## Restarting
It is possible to save the result of typingtutor call to a variable and use that variable to restart typing session when desired:
```javascript
var t = $('#src, #typingarea').typingtutor();
...
t.restart();
```
## Manually passing focus to typingtutor's text area
Just call `focus()` function of typingtutor variable:
```javascript
var t = $('#src, #typingarea').typingtutor();
...
t.focus();
```
## Example
Example from the picture above:

```html
	<div id='orig'>
		<p>this is a text to type</p>
		<p>it is not too difficult </p>
		<p>just to test</p>
	</div>
	<textarea id='t' cols='160' rows='6'></textarea>
	<div id='csp'></div>
	<div id ='err' style='color: red'></div>
	<button id="rst">Restart</button>
	<script type='text/javascript'>
		var tut = $('#orig, #t').typingtutor({
			speedInterval: 5,
			speedTrackCallback: function(speed){
				$('#csp').text('Current speed is ' + speed + ' characters per minute');
			},
			finishCallback: function(speed){
			    $('#csp').text('Average speed was ' + speed + ' characters per minute');
			},
			errorCallback: function(errorCount){
				$('#err').text('Errors: ' + errorCount);
			},
			focus: true
		});
		$('#rst').click(function(){
			tut.restart();
			$('#csp').text('');
			$('#err').text('');
		});
	</script>
```	




