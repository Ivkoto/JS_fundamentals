function template(input){
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<quiz>'

    for (let i = 0; i < input.length; i+= 2) {
        xml += '\n\t<question>\n\t\t' + input[i] + '\n\t</question>'
        xml += '\n\t<answer>\n\t\t' + input[i+1] + '\n\t</answer>'
    }
    xml += '\n</quiz>'

    console.log(xml)
}

template(["Who was the forty-second president of the U.S.A.?",
"William Jefferson Clinton"])