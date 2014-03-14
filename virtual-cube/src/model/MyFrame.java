package model;

import java.awt.Font;

import javax.swing.JFrame;

@SuppressWarnings("serial")
public class MyFrame extends JFrame {

	static final Font default_font = new Font(null, Font.TRUETYPE_FONT, 24);
	private MyPanel panel;

	public MyFrame() {
		super("BQ Virtual Cube");
		setSize(600, 600);
		setLocationByPlatform(true);
		setResizable(false);
		panel = new MyPanel();
		addKeyListener(panel);
		getContentPane().add(panel);
		setVisible(true);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
	}
}
