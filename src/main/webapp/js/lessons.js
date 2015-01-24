var LESSONS = {
	'count': 62,
	'otherKeysLessonsStart': 30,
	'numberRowLessonsStart': 40,
	'prefix' : 'Programmer Dvorak typing tutorial',
	//Woods' lessons
	1: 'Lesson 1: Introducing U and H: Home row, Index fingers',
	2: 'Lesson 2: Introducing E and T: Home row, Second fingers',
	3: 'Lesson 3: Comprehensive: E, H, T, U',
	4: 'Lesson 4: Introducing O and N: Home row, third fingers',
	5: 'Lesson 5: Comprehensive, including O and N',
	6: 'Lesson 6: Introducing A and S: Home row, fourth fingers',
	7: 'Lesson 7: Comprehensive, including A and S',
	8: 'Lesson 8: Introducing I and D: Index finger stretching in the home row',
	9: 'Lesson 9: Comprehensive, including I and D (entire home row)',
	10: 'Lesson 10: Introducing P and G: First fingers reaching up',
	11: 'Lesson 11: Comprehensive, including P and G',
	12: 'Lesson 12: Introducing . and C: Second fingers reaching up',
	13: 'Lesson 13: Comprehensive, including . and C',
	14: 'Lesson 14: Introducing , and R: Third fingers reaching up',
	15: 'Lesson 15: Comprehensive, including , and R',
	16: 'Lesson 16: Introducing \' and L: Fourth fingers',
	17: 'Lesson 17: Comprehensive, including \' and L',
	18: 'Lesson 18: Introducing Y and F: Index fingers stretching up',
	19: 'Lesson 19: Comprehensive, including Y and F (full upper/home rows)',
	20: 'Lesson 20: Introducing K and M: Index fingers reaching down',
	21: 'Lesson 21: Comprehensive, including K and M',
	22: 'Lesson 22: Introducing J and W: Second fingers reaching down',
	23: 'Lesson 23: Comprehensive, including J and W',
	24: 'Lesson 24: Introducing Q and V: Third fingers reaching down',
	25: 'Lesson 25: Comprehensive, including Q and V',
	26: 'Lesson 26: Introducing ; and Z: Fourth fingers',
	27: 'Lesson 27: Comprehensive, including ; and Z',
	28: 'Lesson 28: Introducing X and B: Index fingers stretching down',
	29: 'Lesson 29: Comprehensive, including X and B',
	//other keys
	30: 'Lesson 30: Introducing < and >: Right third finger, right second finger',
	31: 'Lesson 31: Comprehensive, including < and >',
	32: 'Lesson 32: Introducing - and _: Right forth finger',
	33: 'Lesson 33: Comprehensive, including - and _',
	34: 'Lesson 34: Introducing / and ?: Right forth finger',
	35: 'Lesson 35: Comprehensive, including / and ?',
	36: 'Lesson 36: Introducing @ and ^: Right forth finger',
	37: 'Lesson 37: Comprehensive, including @ and ^',
	38: 'Lesson 38: Introducing \\ and |: Right forth finger',
	39: 'Lesson 39: Comprehensive, including \\ and |',
	//number row
	40: 'Lesson 40: Introducing (, * and =: Number row, index fingers',
	41: 'Lesson 41: Introducing } and ): Number row, left second finger, right index finger',
	42: 'Lesson 42: Comprehensive: (, *, =, }, )',
	43: 'Lesson 43: Introducing { and +: Number row, third fingers',
	44: 'Lesson 44: Comprehensive, including { and +',
	45: 'Lesson 45: Introducing [ and ]: Number row, fourth fingers',
	46: 'Lesson 46: Comprehensive, including [ and ]',
	47: 'Lesson 47: introducing & and !: Number row, fourth fingers',
	48: 'Lesson 48: Comprehensive, including & and !',
	49: 'Lesson 49: introducing $ and #: Number row, fourth fingers',
	50: 'Lesson 50: Comprehensive, including $ and #',
	51: 'Lesson 51: Introducing 1, 9 and 0: Number row, index fingers',
	52: 'Lesson 52: Comprehensive, including 1, 9 and 0',
	53: 'Lesson 53: Introducing 3 and 2: Number row, left second finger, right index finger',
	54: 'Lesson 54: Comprehensive, including 3 and 2',
	55: 'Lesson 55: Introducing 5 and 4: Number row, third fingers',
	56: 'Lesson 56: Comprehensive, including 5 and 4',
	57: 'Lesson 57: Introducing 7 and 6: Number row, fourth fingers',
	58: 'Lesson 58: Comprehensive, including 7 and 6',
	59: 'Lesson 59: Introducing % and 8: Number row, fourth fingers',
	60: 'Lesson 60: Comprehensive, including % and 8',
	61: 'Lesson 61: Introducing ~ and `: Number row, fourth fingers',
	62: 'Lesson 62: Comprehensive, including ~ and ` (You rock!)'
};

/**
 * Creates links for the lessons in the given range inside the given container
 *
 * @param lessonsContainer Container to create the lessons in
 * @param start Start index in lessons.js, inclusive
 * @param end End index in LESSONS, inclusive
 */
function createLessonLinks(lessonsContainer, start, end) {
	for(var i = start; i <= end; i++) {
		var prefix = i < 10 ? '0' : '';
		lessonsContainer.append('<a rel="nofollow" href="lessons/lesson' + prefix + i + '.html">' + LESSONS[i] + '</a>');
	}
}
