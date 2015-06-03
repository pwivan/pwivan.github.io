var inicioApp = function()
{
	

	var Inicio = function()
	{
		$("section > article").hide();
		$("#artInicio").show();
		$("#artInicioTxt").show();
		$("#MenuR").val("btnInicio");
	}

	var datos= function()
	{
		$("section > article").hide();
		$("#artDatos").show();
		$("#artDatosTxt").show();
		$("#MenuR").val("btnDatos");
	}

	var Practicas = function()
	{
		$("section > article").hide();
		$("#artPracticas").show();
		$("#artPracticasTxt").show();
		$("#artPracticas1").show();
		$("#artPracticas1Txt").show();
		$("#artPracticas2").show();
		$("#artPracticas2Txt").show();
		$("#artPracticas3").show();
		$("#artPracticas3Txt").show();
		$("#artPracticas4").show();
		$("#artPracticas4Txt").show();
		$("#artPracticas5").show();
		$("#artPracticas5Txt").show();
		$("#artPracticas6").show();
		$("#artPracticas6Txt").show();
		$("#artPracticas7").show();
		$("#artPracticas7Txt").show();
		$("#artPracticas8").show();
		$("#artPracticas8Txt").show();
		$("#artPracticas9").show();
		$("#artPracticas9Txt").show();
		$("#artPracticas10").show();
		$("#artPracticas10Txt").show();
		$("#artPracticas11").show();
		$("#artPracticas11Txt").show();
		$("#MenuR").val("btnPracticas");	
	}
	var Apuntes = function(){
		$("section > article").hide();
		$("#artApuntesTxt").show();
		$("#artApuntes").show();
		
		$("#MenuR").val("btnApuntes");
	}

	
	$("#btnInicio").on("click",Inicio);
	$("#btnDatos").on("click",datos);
	$("#btnPracticas").on("click",Practicas);
	$("#btnApuntes").on("click",Apuntes);

	var id = $("#MenuR").val();
	if(id=="btnInicio")
		Inicio();
	else if(id=="btnDatos")
		datos();
	else if(id=="btnPracticas")
		Practicas()
	else if(id=="btnApuntes")
		Apuntes();
}

$(document).on("ready",inicioApp);