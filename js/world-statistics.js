var url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php"
var methodData = {
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "a901adf65bmsh6117e03f2efb58fp196bfdjsnc8a1c7c8b2ab"
    }
}
fetchWorldStats = () => {
    var divWS = document.getElementById("world-statistics");
    fetch(url, methodData)
    .then((resp) => resp.json())
    .then((data) => {
        //total cases node
        var h6TC = createNode('h6');
        h6TC.innerHTML = `<span>Total Cases: </span>${data.total_cases}`;
        h6TC.className += "card-text text-info";
        //total death node
        var h6D = createNode('h6');
        h6D.innerHTML = `<span>Total Deaths: </span>${data.total_deaths}`;
        h6D.className += "card-text text-danger";
        //total recovered node
        var h6R = createNode('h6');
        h6R.innerHTML = `<span>Total Recovered: </span>${data.total_recovered}`;
        h6R.className += "card-text text-success";
        //new cases node
        var h6NC = createNode('h6');
        h6NC.innerHTML = `<span>New Cases: </span>${data.new_cases}`;
        h6NC.className += "card-text text-primary";
        //time stamp node
        var h6Date = createNode('p');
        h6Date.innerHTML = `<span>Last updated at </span>${data.statistic_taken_at}`;
        h6Date.className += "card-text text-default"
        //append all the nodes to div of world statistics
        appendNode(divWS, h6TC);
        appendNode(divWS, h6D);
        appendNode(divWS, h6R);
        appendNode(divWS, h6NC);
        appendNode(divWS, h6Date);
    })
    .catch((err) => {
        console.log(err)
    });
}
//helper functions
//to create new node
createNode = (name) => {
    return document.createElement(name);
}
//to append child to create node
appendNode = (parent, child) => {
    return parent.appendChild(child);
}