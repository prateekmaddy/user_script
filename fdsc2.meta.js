// ==UserScript==
// @name     Destination Caps Highlighter
// @version  1.2
// @grant    none
// @include  *
// @updateURL   https://raw.githubusercontent.com/prateekmaddy/user_script/master/fdsc2.meta.js
// @downloadURL https://raw.githubusercontent.com/prateekmaddy/user_script/master/fdsc2.meta.js
// ==/UserScript==


 function highlightWord(word) {
    var xpath = "//text()[contains(., '" + word + "')]"; 
    var texts = document.evaluate(xpath, document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (n = 0; n < texts.snapshotLength; n++) {
        var textNode = texts.snapshotItem(n);
        var p = textNode.parentNode;
        var a = [];
        var frag = document.createDocumentFragment();
        textNode.nodeValue.split(word).forEach(function(text, i) {
            var node;
            if (i) {
                node = document.createElement('span');
                node.style.textDecoration = 'underline overline';
                              node.style.backgroundColor = 'Yellow';

                node.appendChild(document.createTextNode(word));
                frag.appendChild(node);
            }
            if (text.length) {
                frag.appendChild(document.createTextNode(text));
            }
            return a;
        });
        p.replaceChild(frag, textNode);
    }
}

highlightWord('->DBM2-CYC1')
highlightWord('->DPX6-CYC2')
highlightWord('->DPX6-CYC2')
highlightWord('->DPX6-CYC2')
highlightWord('->DPX6-CYC2')
highlightWord('->DBO1-CYC1')
highlightWord('->DBO2-CYC1')
highlightWord('->DBO6-CYC1')
highlightWord('->DRI1-CYC1')
highlightWord('->DRI1-A')
highlightWord('->DBM2-B')
highlightWord('->DBM2-B')
highlightWord('->DDA1-CYC1')
highlightWord('->DDE5-CYC2')
highlightWord('->DDE5-CYC2')
highlightWord('->DDE5-CYC2')
highlightWord('->DDE5-CYC2')
highlightWord('->DDA1-CYC1')
highlightWord('->DDT1-CYC1')
highlightWord('->DEW1')
highlightWord('->DSF5-B')
highlightWord('->DRI1-A')
highlightWord('->DLV1-CYC1')
highlightWord('->DMC1-CYC2')
highlightWord('->DMC1-CYC2')
highlightWord('->DMC1-CYC2')
highlightWord('->DMC1-CYC2')
highlightWord('->DMC2-CYC2')
highlightWord('->DMO3-B')
highlightWord('->DMO3-CYC1')
highlightWord('->DMO3-CYC1')
highlightWord('->DCH7-CYC1')
highlightWord('->DMP1-CYC1')
highlightWord('->DMS1-CYC2')
highlightWord('->DSF5-B')
highlightWord('->DLV1-A')
highlightWord('->DSF5-B')
highlightWord('->DSF5-B')
highlightWord('->DLI1-CYC1')
highlightWord('->DMO3-B');
