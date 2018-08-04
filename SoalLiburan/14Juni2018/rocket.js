//Rocket

//Waktu 3 Menit 43 Detik

function rocket(param)
{
    var output = [];
    var buffer = [];

    for( var i = 0 ; i < param ; i++){
    	for(var j = 0 ; j < param ; j++){
    		buffer.push([i,j]);
    	}
    	output.push(buffer);
    	buffer = [];
    }

    return output;
}

console.log(rocket(3));

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]

   */