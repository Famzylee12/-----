//base by Mclaren
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Mclaren_Tech
//Instagram: unicorn_xeon13
//Telegram: t.me/Mclaren
//GitHub: @
//WhatsApp: +2349163768735
//want script ?Ask creator +2349163768735 

async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }
