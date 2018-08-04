function convert_roster_format(roster){
	let output = [];
	for(let  i = 1 ; i < roster.length ; i++){
		let newObj = {}
		for(let rosterDataKey in roster[i]){
			newObj[roster[0][rosterDataKey]] = roster[i][rosterDataKey];
		}
		output.push(newObj);
	}

	return output;

}

let roster = 	[
					["Number", "Name", "Position", "Points per game"],
					[12, "Joe Schmo", "Center", [14,32,7,0,23]],
					[9, "Ms. Bucket", "Point Guard", [19, 0, 11, 22, 0]],
					[31,"Harvey Kay", "Shooting Guard", [0,30,16,0,25]],
					[7,"Sally Talls", "Power Forward", [18, 29, 26, 31, 19]],
					[22, "MK DiBoux", "Small Forward", [11, 0, 23, 17, 0]]
				]

let object_roster = convert_roster_format(roster);

console.log(object_roster);