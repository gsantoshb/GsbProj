
function putRankingsData() {

	var obj = JSON.parse(getRankingsJSON('test1'));

	for (var i = 0; i < obj.rankings.length; i++) {
		document.write("<tr><td>" + obj.rankings[i].fullname + "</td><td>" + obj.rankings[i].score + "</td></tr>");
	}
}

function getRankingsJSON(testName) {
	if (testName === 'test1') {
		var jsonn = "{\"rankings\":[{\"score\":7,\"fullname\":\"Suzanne Walter\"},{\"score\":13,\"fullname\":\"Wesley Jiang\"},{\"score\":46,\"fullname\":\"Dianne Robinson\"}]}";
		return jsonn;
	}
}

function putTestDescription() {

	
		document.write("<p>" + getTestsPara('test1') + "</p>");
	
}

function getTestsPara(testName) {
	if (testName === 'test1') {
		var paraData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis sollicitudin lectus. Fusce vitae vestibulum quam. Mauris in dui non felis tempor scelerisque ut vel mauris. Quisque cursus luctus hendrerit. Morbi vitae dapibus leo, id porta odio. Aenean in felis nibh. Nam aliquam consequat risus, ac bibendum augue molestie non.";
		return paraData;
	}
}