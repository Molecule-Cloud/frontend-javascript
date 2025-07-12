interface MajorCredits {
	credits: number;
	majorBrand: 'major';
}

interface MinorCredits {
	credits: number;
	minorBrand: 'minor';
}

function sumMajorCredits (subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		majorBrand: 'major'
	}


}

function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		minorBrand: 'minor'
	}
}


