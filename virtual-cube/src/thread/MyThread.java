package thread;

import puzzle.Puzzle;

public class MyThread implements Runnable {

	private Puzzle puzzle;
	private int layer;
	public static int face;
	public static int running = 0;

	public MyThread(Puzzle puzzle, int key) {
		this.puzzle = puzzle;
		layer = key;
	}

	public void run() {
		if (puzzle.isShift(layer)) {
			puzzle.shift(layer);
		} else {
			puzzle.twist(layer, false);
		}
		--running;
	}

}
