
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>   _____                                _____      _                      
 |  __ \                              |  __ \    | |                     
 | |  | |_ __ __ _  __ _  ___  _ __   | |__) |___| |__   ___  _ __ _ __  
 | |  | | '__/ _` |/ _` |/ _ \| '_ \  |  _  // _ \ '_ \ / _ \| '__| '_ \ 
 | |__| | | | (_| | (_| | (_) | | | | | | \ \  __/ |_) | (_) | |  | | | |
 |_____/|_|  \__,_|\__, |\___/|_| |_| |_|  \_\___|_.__/ \___/|_|  |_| |_|
                    __/ |                                                
                   |___/                                                 
                                                                </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
