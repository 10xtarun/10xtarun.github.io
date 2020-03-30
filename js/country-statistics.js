var url1 = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country="
var methodData = {
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "a901adf65bmsh6117e03f2efb58fp196bfdjsnc8a1c7c8b2ab"
    }
}
fetchByCountry = () => {
    var divCS = document.getElementById("country-statistics");
    var len =divCS.children.length;
    for(var i=0; i<len; i++){
        divCS.removeChild(divCS.lastElementChild)
    }
    var cntName = document.getElementById("input-country-name").value;
    fetch(url1+cntName, methodData)
    .then((resp1) => resp1.json())
    .then((data1)=> {
        if(data1.error){ //country name is not missed
            //log erro
            var h6TC = createNode('h6');
            h6TC.innerHTML = `Error: ${data1.error}`;
            h6TC.className += "text-default card-text";
            appendNode(divCS, h6TC);
        }else{
            // total cases
            var h6TC = createNode('h6');
            h6TC.innerHTML = `Total Cases: ${data1.latest_stat_by_country[0].total_cases}`;
            h6TC.className += "text-info card-text";
            // new cases
            var h6NC = createNode('h6');
            h6NC.innerHTML = `New Cases: ${data1.latest_stat_by_country[0].new_cases}`;
            h6NC.className += "text-primary card-text";
            //active cases
            var h6AC = createNode('h6');
            h6AC.innerHTML = `Total Cases: ${data1.latest_stat_by_country[0].active_cases}`;
            h6AC.className += "text-primary card-text";
            //total deaths
            var h6ND = createNode('h6');
            h6ND.innerHTML = `Total Deaths: ${data1.latest_stat_by_country[0].total_deaths}`;
            h6ND.className += "text-danger card-text";
            //total recovered
            var h6TR = createNode('h6');
            h6TR.innerHTML = `Total Recovered: ${data1.latest_stat_by_country[0].total_recovered}`;
            h6TR.className += "text-success card-text";
            //record data
            var p = createNode('p');
            p.innerHTML = `Total Cases: ${data1.latest_stat_by_country[0].record_date}`;
            p.className += "text-default card-text";
            //append to the div
            appendNode(divCS, h6TC);
            appendNode(divCS, h6AC);
            appendNode(divCS, h6ND);
            appendNode(divCS, h6TR);
            appendNode(divCS, h6NC);
            appendNode(divCS, p);
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

// id: "333052"
// country_name: "India"
// total_cases: "1,071"
// new_cases: "47"
// active_cases: "942"
// total_deaths: "29"
// new_deaths: "2"
// total_recovered: "100"
// serious_critical: ""
// region: null
// total_cases_per1m: "0.8"
// record_date: "2020-03-30 08:50:01.383"
// __proto__: Object
// length: 1
// __proto__: Array(0)



//helper functions
//to create new node
createNode = (name) => {
    return document.createElement(name);
}
//to append child to create node
appendNode = (parent, child) => {
    return parent.appendChild(child);
}