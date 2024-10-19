
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  


                 ___             _      __    _       __  
                /   | ___  _____(_)____/ /   (_)___  / /__
               / /| |/ _ \\/ ___/ / ___/ /   / / __ \\/ //_/
              / ___ /  __(__  ) / /  / /___/ / / / / ,<   
             /_/  |_\\___/____/_/_/  /_____/_/_/ /_/_/|_|  


                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
