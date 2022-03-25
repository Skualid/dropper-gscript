//priority:300
//timeout:10


function Deploy() {
	
	console.log("Starting Disable Linux Firewall");		
    
	var response = G.exec.ExecuteCommand("sudo", ["-n", "ufw", "disable"]);
    	
	console.log("Pid: "+response[0]);
    	console.log("stdout: "+response[1]);
    	console.log("stderr: "+response[2]);
    	console.log("exit code: "+response[3]);
    	console.log("go errors: "+Dump(response[4]));  
    	console.log("Done Disable Linux Firewall");
	
	return true;
}
