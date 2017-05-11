function text() {

	if (document.form.name.value) {
		var name = document.form.name.value;
	} else {
		alert("Le champ nom n'est pas renseigné");
	}
	
	var day = document.form.day.value;
	var month = document.form.month.value;
	var year = document.form.year.value;
	
	var income = Math.round((document.form.income.value * 0.1)*100)/100;

	document.getElementById('result').innerHTML = "<br><br>Bonjour " + name + ", vous avez ???? depuis le ????. Compte tenu de vos revenus, vous avez le droit à une taxe de 10% de vos revenus, soit " + income +"€";
}

