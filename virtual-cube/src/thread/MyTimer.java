package thread;

import model.MyStatusBar;

public class MyTimer implements Runnable {

	public int state;
	private long begin;
	private long time, finaltime;
	private MyStatusBar statusbar;
	private String prefix_string = "";

	public static final int reset = 0;
	public static final int inspection = 1;
	public static final int solve = 2;
	public static final int stop = 3;

	public MyTimer(MyStatusBar statusbar) {
		this.statusbar = statusbar;
		begin = 0;
		resetTimer();
	}

	public void startInspection() {
		state = 1;
	}

	public void startTimer() {
		state = 2;
		begin = System.currentTimeMillis();
	}

	public void stopTimer() {
		state = 3;
		finaltime = System.currentTimeMillis() - begin;
	}

	public void resetTimer() {
		state = 0;
	}

	public void run() {
		while (true) {
			String string = null;
			switch (state) {
			case MyTimer.reset:
				string = "Press Enter to start";
				break;
			case MyTimer.inspection:
				string = "Inspection";
				break;
			case MyTimer.solve:
				time = System.currentTimeMillis() - begin;
				string = prefix_string + time2str(time);
				break;
			case MyTimer.stop:
				string = prefix_string + time2str(finaltime);
				break;
			}
			statusbar.setText(string);
			try {
				Thread.sleep(1);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

	public void setPrefixString(String string) {
		prefix_string = string;
	}

	public static String time2str(long time) {
		int millisecond = (int) (time % 1000);
		time /= 1000;
		int centisecond = millisecond / 10;
		millisecond %= 10;
		int decisecond = centisecond / 10;
		centisecond %= 10;
		int second = (int) (time % 60);
		int tensecond = second / 10;
		second %= 10;
		int minute = (int) time / 60;
		int hour = minute / 60;
		minute %= 60;
		int tenminute = minute / 10;
		minute %= 10;
		StringBuffer sb = new StringBuffer();
		if (hour > 0) {
			sb.append(hour).append(':').append(tenminute).append(minute)
					.append(':').append(tensecond);
		} else if (tenminute > 0) {
			sb.append(tenminute).append(minute).append(':').append(tensecond);
		} else if (minute > 0) {
			sb.append(minute).append(':').append(tensecond);
		} else if (tensecond > 0) {
			sb.append(tensecond);
		}
		sb.append(second).append('.').append(decisecond).append(centisecond)
				.append(millisecond);
		return sb.toString();
	}
}
