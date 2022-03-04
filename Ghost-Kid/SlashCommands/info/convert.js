module.exports = {
  name: "convert",
  description: "Převede číslo do jiné soustavy.",
  options: [
    { name: "číslo", description: "Číslo, které budu převádět.", type: "NUMBER", required: true },
    { name: "do", description: "Soustava, do které bude číslo převedeno", type: "NUMBER", required: false }
  ],
  execute(int, args, client, discord){
    //return;

    var result = args.get("číslo").value;
		var zbytek;
		var x = "";
		
		while(result != 0) {
			zbytek = result % 16
			result = Math.floor(result/16);
			switch(zbytek) {
			case 10: x += "A";
			continue;
			case 11: x += "B";
			continue;
			case 12: x += "C";
			continue;
			case 13: x += "D";
			continue;
			case 14: x += "E";
			continue;
			case 15: x += "F";
			continue;
			}
			
			x += zbytek.toString();
		}	
		
		int.followUp({ content: `${x.split("").reverse().join("")}` })
  }
}