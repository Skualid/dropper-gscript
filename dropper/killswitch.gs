//priority:1

function Deploy() {

    var headers = {"User-Agent" : "spaceman"};
    console.log("Starting GetURLAsString");

    out1 = G.requests.GetURLAsString("https://pastebin.com/raw/EEX1Dsuq", headers, true);

    if (out1[2] == null){

        console.log("Existe la URL");
	
	if (out1[1] == "OFF") {
		console.log("Killswitch activado: Existe la URL pero se ha encontrado un 'OFF', no se hace nada");
		G.os.TerminateSelf();
	}else {
		
		console.log("Existe la URL, pero no hay un OFF, sigue la ejecución");
	}
    } else {
				
        console.log("KillSwitch desactivado: No existe la URL, continua la ejecución");
    }

    return true;
}
