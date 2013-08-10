package com.denisk.programmerdvorak.tags;

import java.io.IOException;
import java.io.StringWriter;
import java.util.Random;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 * Custom tag which outputs a basic typing tutor: a text, an input area, a label
 * for speed statistics, a label for error count and a restart button.
 *
 * @author denisk
 */
public class TypingTutorTag extends SimpleTagSupport {

    private StringWriter sw = new StringWriter();
    private Random r = new Random();
    private boolean focus;

    public void setFocus(boolean focus) {
        this.focus = focus;
    }

    @Override
    public void doTag() throws JspException, IOException {
        getJspBody().invoke(sw);
        JspWriter out = getJspContext().getOut();

        String content = sw.toString();
        if (content != null) {
            content = content.trim();
            int id = Math.abs(r.nextInt());
            out.println("<div id='src_" + id + "'>");
            String[] lines = content.split("\n");
            if (lines == null || lines.length == 0) {
                return;
            }
            int maxLength = 0;
            for (String line : lines) {
                out.println("<p>" + line.trim() + "</p>");
                if (line.length() > maxLength) {
                    maxLength = line.length();
                }
            }
            //close src div
            out.println("</div>");

            out.println("<textarea id='area_" + id + "' rows='" + lines.length + "' cols='" + (maxLength + 2) + "'></textarea>");
            out.println("<div id='csp_" + id + "'></div>");

            out.println("<div id='err_" + id + "' class='error'></div>");

            out.println("<button id='rst_" + id + "'>Restart</button>");

            out.println("<script type=\"text/javascript\">\n"
                    + " (function() {"
                    + "		var tut = $('#src_" + id + ", #area_" + id + "').typingtutor({\n"
                    + "			speedTrackCallback: function(speed){\n"
                    + "				$('#csp_" + id + "').text('Current speed is ' + speed + ' characters per minute');\n"
                    + "			},\n"
                    + "			finishCallback: function(speed){\n"
                    + "			    $('#csp_" + id + "').text('Average speed was ' + speed + ' characters per minute');\n"
                    + "			},\n"
                    + "			errorCallback: function(errorCount){\n"
                    + "				$('#err_" + id + "').text('Errors: ' + errorCount);\n"
                    + "			},\n"
                    + "			nextKeyCallback: function(keys){\n"
                    + "				if(!$.isArray(keys)){\n"
                    + "					keys = [keys];\n"
                    + "				}\n"
                    + "             var keyMark = $('.key-marker');"
                    + "				$.each(keys, function(i, key){\n"
                    + "					var coords = PROGRAMMER_DVORAK_KEYMAP[key];\n"
                    + "					if(coords){\n"
                    + "						var w = $('#keyboard').width();\n"
                    + "						var h = $('#keyboard').height();\n"
                    + "						keyMark.css('left', coords.x1 + '%');\n"
                    + "						keyMark.css('top', coords.y1 + '%');\n"
                    + "						keyMark.width((coords.x2 - coords.x1) + '%');\n"
                    + "						keyMark.height((coords.y2 - coords.y1) + '%');\n"
                    + "					}\n"
                    + "				});\n"
                    + "			},\n"
                    + "         textBackgroundColor: '#F5F2DC'"
                    + "         " + (focus ? ", focus: true" : "")
                    + "		});\n"
                    + "		$('#rst_" + id + "').click(function(){\n"
                    + "			tut.restart();\n"
                    + "			$('#csp_" + id + "').text('');\n"
                    + "			$('#err_" + id + "').text('');\n"
                    + "		});\n"
                    + " })()"
                    + "	</script>");
        }

    }
}
