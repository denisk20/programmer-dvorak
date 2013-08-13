package com.denisk.programmerdvorak.tags;

import java.io.IOException;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 *
 * @author denisk
 */
public class KeyboardTag extends SimpleTagSupport {
		@Override
	public void doTag() throws JspException, IOException {
		getJspContext().getOut().append("		<div id=\"keyboard\">\n" +
"			<img src=\"/img/KB_Programmer_Dvorak.png\" alt=\"\">\n" +
"			<div class=\"key-marker\"></div>\n" +
"		</div>\n" +
"		<script type=\"text/javascript\">\n" +
"			window['typingData'] = {};\n" +
"			jQuery.fn.center = function() {\n" +
"				this.css(\"position\", \"absolute\");\n" +
"				this.css(\"top\", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +\n" +
"						$(window).scrollTop()) + \"px\");\n" +
"				this.css(\"left\", $(window).width() - $(this).outerWidth() + \"px\");\n" +
"				return this;\n" +
"			}\n" +
"			function highlightChar(key) {\n" +
"				var coords = PROGRAMMER_DVORAK_KEYMAP[key];\n" +
"				if (coords) {\n" +
"					var keyMark = $('.key-marker');\n" +
"					var w = $('#keyboard').width();\n" +
"					var h = $('#keyboard').height();\n" +
"					keyMark.css('left', coords.x1 + '%');\n" +
"					keyMark.css('top', coords.y1 + '%');\n" +
"					keyMark.width((coords.x2 - coords.x1) + '%');\n" +
"					keyMark.height((coords.y2 - coords.y1) + '%');\n" +
"				}\n" +
"			}\n" +
"			$(document).ready(function(){\n" +
"	                $('.show-keyboard').click(function(){\n" +
"                    if($(this).text().indexOf('Hide') >= 0){\n" +
"                        $('#keyboard').hide();\n" +
"                        $(this).text(\"Show keyboard\");\n" +
"                    } else {\n" +
"						var id = this.id.substring(this.id.indexOf('_')+1, this.id.length);\n" +
"						var tut = window['typingData'][id]['tut'];\n" +
"						highlightChar(tut.nextKeys);\n" +
"                        $('#keyboard').center();\n" +
"                        $('#keyboard').show();\n" +
"                        $(this).text(\"Hide keyboard\");\n" +
"                        var that = this;\n" +
"                        $('.show-keyboard').each(function(i, item){\n" +
"                            if(item !== that){\n" +
"								$(item).text('Show keyboard');\n" +
"                            }\n" +
"                        });\n" +
"                    }\n" +
"                });\n" +
"			});\n" +
"			$('#keyboard').draggable();\n" +
"			$('#keyboard').resizable({handles: \"sw\", aspectRatio: true});\n" +
"		</script>");
	}

}
