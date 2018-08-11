class MainHelper {
	constructor() {}

	static convertFromGrade(score) {
		if (!score) {
			return "";
		} else if (score > 85) {
			return "A";
		} else if (score > 70) {
			return "B";
		} else if (score > 55) {
			return "C";
		} else if (score <= 55 && score >= 0) {
			return "E";
		}
	}
}

module.exports = MainHelper.convertFromGrade;
