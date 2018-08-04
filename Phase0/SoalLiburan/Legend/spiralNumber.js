//Legend Spiral Number

function spiralNumber(param)
{
	var x = 0, y = 0;
    var limit = param * param;
	var output = [];
	var writing = 1;
	var directionGenerator = function(
		mainDirX,
		mainDirY,
		changeDirX,
		changeDirY
	) {
		return function(loop) {
			if (writing <= limit) {
				for (var counter = 0; counter < loop; counter++) {
					output[x][y] = writing;
					writing++;
					y += mainDirY;
					x += mainDirX;
				}
				y += -1 * mainDirY;
				x += -1 * mainDirX;
				x += changeDirX;
				y += changeDirY;
			}
		};
	};
	var direction = {
		kanan: directionGenerator(0, 1, 1, 0),
		bawah: directionGenerator(1, 0, 0, -1),
		kiri: directionGenerator(0, -1, -1, 0),
		atas: directionGenerator(-1, 0, 0, 1),
	};
	//create seed
	for (var i = 0; i < param; output.push([]), i++);

	direction.kanan(param);

	while (writing <= limit) {
		param--;
		direction.bawah(param);
		direction.kiri(param);
		param--;
		direction.atas(param);
		direction.kanan(param);
	}
	return output;
}

console.log(spiralNumber(3))
/*
    [
        [1,2,3],
        [8,9,4]
        [7,6,5]
    ]
*/

console.log(spiralNumber(4))
/*
    [
        [1,2,3,4],
        [12,13,14,5],
        [11,16,15,6],
        [10,9,8,7]
    ]
*/