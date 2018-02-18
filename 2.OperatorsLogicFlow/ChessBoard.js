function chessboard(num){
    let html = `<div class="chessboard">\n`
    let colorPicker = 0;

    for (let i = 0; i < num; i++) {
        html += "  <div>\n"
        for (let j = 0; j < num; j++) {        
            let color = (j + i) % 2  === 0 ? "black" : "white"
            html += `   <span class="${color}"></span>\n`
        }
        html += "  </div>\n"
    }
    html += "</div>"

    return html
}

let css = document.createElement("style");
css.innerHTML = `
  body { background: #CCC; }
  .chessboard { display: inline-block; }
  .black, .white { 
     width:50px; height:50px;
     display: inline-block; }
  .black { background: black; }
  .white { background: white; }
`;

document.getElementsByTagName("head")[0].appendChild(css);
document.body.innerHTML = chessboard(10);