// ==UserScript==
// @name     Destination Caps Highlighter
// @version  1.8
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

highlightWord('BDL2->DRO1-A')
highlightWord('BDL3->DBO6-A')
highlightWord('BWI2->DEW1')
highlightWord('BWI2->DEW1')
highlightWord('CLE2->DRO1-A')
highlightWord('CMH1->DLI1-A')
highlightWord('EWR4->DRO1-A')
highlightWord('EWR9->DBO6-A')
highlightWord('HOU2->DLB1-A')
highlightWord('IND1->DLI1-A')
highlightWord('JAX2->DBM2-A')
highlightWord('JFK8->DBO6-A')
highlightWord('MDW7->DLI1')
highlightWord('MSP1->DOM1-A')
