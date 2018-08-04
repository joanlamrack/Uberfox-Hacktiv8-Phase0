for(var a = 0; a < number; a++){
    var target = []
    for(var b = a - 1; b >= 0 && (number[b] < target); b--){
        number[b+1] = number[b]
    }
    number[b+1] = target
}