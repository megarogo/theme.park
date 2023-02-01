
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
   ___                            ___      __               
  / _ \_______ ____ ____  ___    / _ \___ / /  ___  _______ 
 / // / __/ _ `/ = `/ _ \/ _ \  / , _/ -_) _ \/ _ \/ __/ _ \
/____/_/  \_,_/\_, /\___/_//_/ /_/|_|\__/_.__/\___/_/ /_//_/
              /___/                                           
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
