/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.denisk.programmerdvorak.tags;

import java.io.IOException;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 *
 * @author denisk
 */
public class HeadTag extends SimpleTagSupport {

	@Override
	public void doTag() throws JspException, IOException {
		getJspContext().getOut().append("<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" />\n"
				+ "<link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\" />\n"
				+ "<script type=\"text/javascript\" src=\"jquery.1.10.2.min.js\"></script>\n"
				+ "<script type=\"text/javascript\" src=\"jquery.browser.min.js\"></script>\n"
				+ "<script type=\"text/javascript\" src=\"typingtutor.min.js\"></script>");
	}
}
