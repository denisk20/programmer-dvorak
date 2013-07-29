<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="typingtutor" uri="/WEB-INF/tlds/typingtutor" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<typingtutor:head/>
<title>Lesson 1</title>
</head>
<body>
	<typingtutor:typingtutor>Please work!</typingtutor:typingtutor>
	<div id='src'>
		<p>this is a test text</p>
		<p>go type it out!</p>
	</div>
	<textarea id='area' rows="2" cols="50"></textarea>
	<div id="csp"></div>
	<div id ="err" style="color: red"></div>
	<button id='rst'>Reset</button>
	<script type="text/javascript">
	var tut = $('#src, #area').typingtutor({
		speedTrackCallback: function(speed){
			$('#csp').text('Current speed is ' + speed + ' characters per minute');
		},
		finishCallback: function(speed){
		    $('#csp').text('Average speed was ' + speed + ' characters per minute');
		},
		errorCallback: function(errorCount){
			$('#err').text('Errors: ' + errorCount);
		}
	});
	$('#rst').click(function(){
		tut.restart();
		$('#csp').text('');
		$('#err').text('');
	});
	</script>
</body>
</html>