
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ____                               ____                                  ____       __                   
   / __ \_________ _____ _____  ____     / __ \___  / /_  ____  _________ 
  / / / / ___/ __  / __  / __ \/ __ \   / /_/ / _ \/ __ \/ __ \/ ___/ __ \
 / /_/ / /  / /_/ / /_/ / /_/ / / / /  / _  _/  __/ /_/ / /_/ / /  / / / /
/_____/_/   \__ _/\__  /\____/_/ /_/  /_/ |_|\___/_____/\____/_/  /_/ /_/ 
                 /____/
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
