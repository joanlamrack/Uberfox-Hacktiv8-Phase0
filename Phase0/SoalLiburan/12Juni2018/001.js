//001

function soal1(param)
{
    if(param.length === 1){
    	return param;
    }
    else{
    	return param[param.length-1]+"\n"+soal1(param.substring(0,param.length-1));
    }
}

console.log(soal1("Aries Dimas Yudhistira"));
/*
    a
    r
    i
    t
    s
    i
    h
    d
    u
    Y

    s
    a
    m
    i
    D

    s
    e
    i
    r
    A
*/