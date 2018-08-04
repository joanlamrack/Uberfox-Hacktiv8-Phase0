class Comment{
	constructor(id, username, date, content){
		this.id = id;
		this.username = username;
		this.date = date;
		this.content = content;
	}

	print(){
		console.log(`\nComment by: ${this.username}\nDate: ${this.date}\nID: ${this.id}`);
		console.log(`content : \n${this.content.trim()}`);
	}
}

class Post{
	constructor(id, link, title, points, username, date){
		this.id = id;
		this.link = link;
		this.title = title;
		this.points = points;
		this.username = username;
		this.date = date;

		this._comments = [];
	}

	add_comments(commentObj){
		this._comments.push(commentObj);
	}

	comments(){
		for(let comment of this._comments){
			comment.print();
		}
	}

	postStatistics(){
		console.log(`Post title: ${this.title} ID: ${this.id}\nPosted by: ${this.username} ${this.date}\nNumber of Comments: ${this.comments.length}\n`);
	}
}

module.exports = {
	Comment : Comment,
	Post: Post
};