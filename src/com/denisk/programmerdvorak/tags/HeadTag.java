/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.denisk.programmerdvorak.tags;

import java.io.IOException;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 * Outputs header information needed for typing tutor. This includes jQuery, jquery.browser and
 *		  and typingtutor scripts. It also outputs styles and content-type tags
 * 
 * @author denisk
 */
public class HeadTag extends SimpleTagSupport {

	@Override
	public void doTag() throws JspException, IOException {
		getJspContext().getOut().append("<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" />\n"
				+ "<link rel=\"stylesheet\" type=\"text/css\" href=\"/styles.css\" />\n"
				+ "<script type=\"text/javascript\" src=\"/js/jquery.1.10.2.min.js\"></script>\n"
				+ "<script type=\"text/javascript\" src=\"/js/jquery-ui-1.10.3.custom.min.js\"></script>\n"
				+ "<script type=\"text/javascript\" src=\"/js/jquery.browser.min.js\"></script>\n"
				+ "<script type=\"text/javascript\" src=\"/js/KB_Programmer_Dvorak.keymap.js\"></script>\n"
				+ "<script type=\"text/javascript\" src=\"/js/typingtutor.min.js\"></script>");
	}
}
