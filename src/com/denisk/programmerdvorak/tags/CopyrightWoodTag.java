package com.denisk.programmerdvorak.tags;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 * Outputs copyright notice (div with class="copyright") of Dan Wood
 * 
 * @author denisk
 *
 */
public class CopyrightWoodTag extends SimpleTagSupport {

	@Override
	public void doTag() throws JspException, IOException {
		getJspContext().getOut().append("<div class=\"copyright\">This lesson has been created by Dan Wood. Original can be found here: <a href=\"http://gigliwood.com/abcd/lessons/\">http://gigliwood.com/abcd/lessons/</a></div>");
	}

}
