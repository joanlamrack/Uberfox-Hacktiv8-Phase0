//003 

function soal3(param)
{
	var output = {
		under20: [],
		over20: []
	};
    for(var student of param){
    	if (student[1]>20) {
    		output.over20.push(student[0]);
    	}
    	else{
    		output.under20.push(student[0]);
    	}
    }
    return output;
}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/