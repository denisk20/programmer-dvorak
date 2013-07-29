package com.denisk.programmerdvorak.tags;

import java.io.IOException;
import java.io.StringWriter;
import java.util.Random;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 *
 * @author denisk
 */
public class TypingTutorTag extends SimpleTagSupport {
	private StringWriter sw = new StringWriter();
	private Random r = new Random();
	
	@Override
	public void doTag() throws JspException, IOException {
		getJspBody().invoke(sw);
		JspWriter out = getJspContext().getOut();
		
		String content = sw.toString();
		if(content != null){
			int id = r.nextInt();
			out.println("<div id='src_" + id + "'>");
			String[] lines = content.split("\n");
			if(lines == null || lines.length == 0){
				return;
			}
			int maxLength = 0;
			for(String line: lines){
				out.println("<p>" + line.trim() + "</p>");
				if(line.length() > maxLength){
					maxLength = line.length();
				}
			}
			//close src div
			out.println("</div>");
			
			out.println("<textarea id='area_" + id + "' rows='" + lines.length + "' cols='" + (maxLength + 2) + "'/>");
			
			out.println("<div id='csp_" + id + "'/>");
			
			
		}
		
	}
}
