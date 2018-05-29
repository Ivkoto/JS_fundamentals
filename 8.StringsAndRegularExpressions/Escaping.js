//use strict

function escaping(arr) {
    let result = '<ul>';

    for (const str of arr) {
        result += '\n   <li>' + escapeChars(str) + '</li>'
    }

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39');
    }

    return result + "\n</ul>";
}

console.log(escaping(['<b>unescaped text</b>', 'normal text']))


//2nd soluton
function escaping(arr) {
    let result = '<ul>';

    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')    
        .replace(/>/g, '&gt;')    
        .replace(/"/g, '&quot;')    
        .replace(/'/g, '&#39;');   }

    for (const str of arr) {
        let test = str.htmlEscape();
        
        result += '\n   <li>' + str.htmlEscape() + '</li>'
    }    

    return result + "\n</ul>";
}

console.log(escaping(['<b>unescaped text</b>', 'normal text']))