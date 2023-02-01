
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                                                                                                                          
 ______                                  ______        _                       
(______)                                (_____ \      | |                      
 _     _ ____ _____  ____  ___  ____     _____) )_____| |__   ___   ____ ____  
| |   | / ___|____ |/ _  |/ _ \|  _ \   |  __  /| ___ |  _ \ / _ \ / ___)  _ \ 
| |__/ / |   / ___ ( (_| | |_| | | | |  | |  \ \| ____| |_) ) |_| | |   | | | |
|_____/|_|   \_____|\___ |\___/|_| |_|  |_|   |_|_____)____/ \___/|_|   |_| |_|
                   (_____|
                                                                               </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
