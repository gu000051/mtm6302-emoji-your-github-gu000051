const emojis= [
   { "emojiImage": "&#129409;", 
     "codeId": 129409 
   }, 
   { "emojiImage": "&#128373;", 
     "codeId": 128373
   },
   { "emojiImage": "&#128378;", 
   "codeId": 128378
   },
   { "emojiImage": "&#129495;", 
   "codeId": 129495
   },

   { "emojiImage": "&#128126;", 
   "codeId": 128126
   },
   { "emojiImage": "&#129409;", 
   "codeId": 129409 
   },
   { "emojiImage": "&#129465;", 
   "codeId": 129465
   },
   { "emojiImage": "&#129498;", 
   "codeId": 129498
   },
   { "emojiImage": "&#128420;", 
   "codeId": 128420
   },
   { "emojiImage": "&#128640;", 
   "codeId": 128640
   },
   { "emojiImage": "&#128672;", 
   "codeId": 128672
   },
   { "emojiImage": "&#128007;", 
   "codeId": 128007
   },
   { "emojiImage": "&#129465;", 
   "codeId": 129465
   },
   { "emojiImage": "&#129498;", 
   "codeId": 129498
   },
   { "emojiImage": "&#128420;", 
   "codeId": 128420
   },
   { "emojiImage": "&#128640;", 
   "codeId": 128640
   },

]

const $emojiGallary = document.getElementById('emojiGallary');

const emojiArr =[];
for( const emoji of emojis ){
   emojiArr.push(
    `

    <div id="emojiGallary" class="grid">
    
    <div class="emoji-item">
    
    <p style="text-align: center;">
        <span id="emojiImage" style="font-size: 5rem;">${emoji.emojiImage} </span><br>
        <code id="codeId">${emoji.codeId} </code>
    </p>
    </div> 
    </div>

    `);
}
$emojiGallary.innerHTML = emojiArr.join('');
