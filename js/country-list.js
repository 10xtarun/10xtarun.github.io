	
var countryList = ["USA","Italy","Spain","Germany","Iran",
"France","UK","Switzerland","Belgium","Netherlands","S. Korea","Turkey",
"Austria","Portugal","Canada","Norway","Israel","Brazil","Australia","Sweden","Czechia","Malaysia","Ireland","Denmark","Chile","Poland",
"Romania","Luxembourg","Ecuador","Japan","Russia","Pakistan","Philippines","Thailand","Saudi Arabia","Indonesia","Finland","South Africa",
"Greece","India","Iceland","Mexico","Panama","Singapore","Dominican Republic","Peru","Argentina","Croatia","Slovenia","Serbia","Estonia",
"Diamond Princess","Colombia","Hong Kong","Qatar","Egypt","New Zealand","UAE","Iraq","Morocco","Bahrain","Algeria","Lithuania","Armenia",
"Ukraine","Hungary","Lebanon","Latvia","Bosnia and Herzegovina","Bulgaria","Slovakia","Andorra","Costa Rica","Tunisia","Taiwan","Uruguay",
"Kazakhstan","North Macedonia","Azerbaijan","Kuwait","Moldova","Jordan","San Marino","Albania","Burkina Faso","Cyprus","Vietnam","Réunion",
"Oman","Faeroe Islands","Ivory Coast","Senegal","Malta","Ghana","Belarus","Uzbekistan","Cameroon","Cuba","Honduras","Brunei","Sri Lanka",
"Afghanistan","Venezuela","Palestine","Nigeria","Mauritius","Channel Islands","Cambodia","Guadeloupe","Georgia","Bolivia","Kyrgyzstan",
"Martinique","Montenegro","Mayotte","DRC","Trinidad and Tobago","Rwanda","Gibraltar","Paraguay","Liechtenstein","Kenya","Aruba",
"Bangladesh","Monaco","Isle of Man","French Guiana","Madagascar","Macao","Guatemala","French Polynesia","Jamaica","Barbados","Uganda",
"Togo","El Salvador","Zambia","Mali","Ethiopia","Niger","Bermuda","Congo","Tanzania","Djibouti","Maldives","Guinea","Saint Martin","Haiti",
"New Caledonia","Bahamas","Cayman Islands","Equatorial Guinea","Eritrea","Mongolia","Dominica","Namibia","Greenland","Myanmar","Syria",
"Grenada","Saint Lucia","Eswatini","Curaçao","Guyana","Laos","Libya","Mozambique","Seychelles","Suriname","Angola","Gabon","Zimbabwe",
"Antigua and Barbuda","Saint Kitts and Nevis","Sudan","Cabo Verde","Benin","Vatican City","Sint Maarten","Nepal","Fiji","Mauritania","Montserrat",
"St. Barth","Gambia","Nicaragua","Bhutan","Turks and Caicos","CAR","Chad","Liberia","Somalia","MS Zaandam","Anguilla","Belize",
"British Virgin Islands","Guinea-Bissau","Papua New Guinea","St. Vincent Grenadines","Timor-Leste","China"]

var dl = document.getElementById("country-datalist");

for(var i=0; i<countryList.length;i++){
	var elem = document.createElement('option');
	elem.setAttribute('value', countryList[i])
	dl.appendChild(elem)
}
