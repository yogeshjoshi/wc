var fs = require('fs');

var words_count = 0,flag,filename,text,line_array,help_text;

var inp_flg = input();
if(inp_flg==0)
return;

var flg = validation(filename);
if(flg==0)
return;

var text=fs.readFileSync(filename,'utf-8');

wrd_count();
input_flag(flag);

function input () {
			var userinput = process.argv.slice(2,process.argv.length);
			var temp_var;

			
			if(userinput[0]=="--help" || userinput[1]=="--help")
			{
				help_text=fs.readFileSync('wc_help.txt','utf-8');
				console.log(help_text);
				return 0;
			}

			else if(userinput[1]==undefined)
			{
				userinput[1]=userinput[0];
				userinput[0]="";
			}

			else if( userinput[1] == "-l" || userinput[1] == "-m"|| userinput[1] == "-c" )
			{ 
				temp_var=userinput[1];
				userinput[1]=userinput[0];
				userinput[0]=temp_var;
			}

			else if (userinput[0] == "-l" || userinput[0] == "-m" || userinput[0] == "-c" ) 
			{
			}

			else
			{	

				console.log("wc : invalid option -- "  );
				console.log("Try ' --help' for more information");
				return 0;	
			}

		flag = userinput[0];
		filename = userinput[1];
} ;
function validation(filename){
			if(!fs.existsSync(filename))
			{
			 	console.log ("wc: : No such file or directory");
			 	return 0;
			}
};

function wrd_count(){
			line_array = text.split('\n');
				for(var i=0; i < line_array.length-1 ; i++)
			 		{
			 			line_array[i]=line_array[i].trim();
						line_array[i]=line_array[i].replace(/\s+/g," ");
						var count = (line_array[i].split(' ')).length;
						words_count = count + words_count;
					};
};


function input_flag(flag){
			if(flag=="")
			flag_total();

			if(flag=="-l")
			flag_noOfLine();

			if(flag=="-m")
			flag_noOfwords();

			if(flag=="-c")
			flag_noOfChar();

}


function flag_noOfLine(){
			console.log(line_array.length -1);
			console.log("file.txt"); 	
}
function flag_noOfChar(){
			console.log(text.length);
			console.log("file.txt"); 
}
function flag_noOfwords(){
			console.log(words_count);
			console.log("file.txt"); 
}
function flag_total(){
			console.log(line_array.length -1); 
			console.log(words_count);
			console.log(text.length);
			console.log("file.txt");
}

