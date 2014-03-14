package model;

import javax.swing.JApplet;

@SuppressWarnings("serial")
public class MyApplet extends JApplet {

	private MyPanel panel;

	public void init() {
		setSize(600, 600);
		panel = new MyPanel();
		addKeyListener(panel);
		getContentPane().add(panel);
		setVisible(true);
	}

}
