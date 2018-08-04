class View{
	constructor(){

	}

	static printMessage(strMessage){
		console.log(strMessage);
	}

	static printAllRecommendations(arrOfMovieObj){
		for(let index = 0; index < arrOfMovieObj.length ; index++){
			View.printRecommendation(index+1, arrOfMovieObj[index]);
		}
	}

	static printRecommendation(index, Movieobj){
		let output = `${index}. ${Movieobj.name}; ${Movieobj.genre} (${Movieobj.rating}) by ${Movieobj.prodName}`;
		this.printMessage(output);
	}
}

module.exports = View;