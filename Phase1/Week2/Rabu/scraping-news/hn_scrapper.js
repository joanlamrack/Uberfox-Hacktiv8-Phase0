"use strict";

const cheerio = require("cheerio");
let request = require("request");
const imports = require("./postCommentsClass.js");
const Post = imports.Post;
const Comment = imports.Comment;

let url = process.argv[2];

let hackerNewsPost;

request(url, function (err, res, body) {
	if (err) return console.log(err);

	let $ = cheerio.load(body);

	let postId;
	let postlink;
	let postTitle;
	let postPoints;
	let postUsername;
	let postDate;


	//post section #1
	$("table.fatitem").find("tr.athing").each((i,value)=>{
		//id post
		postId = value.attribs.id;
		$(value).find("a.storylink").each((i,value)=>{
			//storylink
			postlink = value.attribs.href;
			//title link
			postTitle = value.children[0].data;
		});
	});

	//post section #2
	$("table.fatitem").find("td.subtext").each((i,value)=>{
		//POST POINTS
		postPoints = $(value).find("span.score").text();
		//POST USERNAME 
		postUsername = $(value).find("a.hnuser").text();
		//POST DATE
		postDate = $(value).find("span.age a").text();
	});

	hackerNewsPost = new Post(postId, postlink, postTitle, postPoints, postUsername, postDate);


	//comment section
	$("table.comment-tree").find("tr.comtr").each((i, value) =>{
		//comment id
		let commentId =value.attribs.id;
		//username
		let commentUsername = $(value).find("a.hnuser").text();

		//AGE
		let commentAge = $(value).find("span.age a").text();
		
		let commentContent = $(value).find("div.comment").text();

		hackerNewsPost.add_comments(new Comment(commentId, commentUsername, commentAge, commentContent))
	});
	hackerNewsPost.postStatistics();
	hackerNewsPost.add_comments(new Comment("234","eri", new Date(), "test aja"));
	hackerNewsPost.comments();
});



