// ==UserScript==
// @name     Destination Caps Highlighter
// @version  1.6
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
highlightWord('AZA5->DPX6-CYC2')
highlightWord('AZA5->DPX6-CYC2')
highlightWord('AZA5->DPX6-CYC2')
highlightWord('AZA5->DPX6-CYC2')
highlightWord('DAL9->DDA1-CYC2')
highlightWord('DEN5->DDE5-CYC2')
highlightWord('DEN5->DDE5-CYC2')
highlightWord('DEN5->DDE5-CYC2')
highlightWord('DEN5->DDE5-CYC2')
highlightWord('EWR4->DRO1-A')
highlightWord('HOU1->DHO1-CYC2')
highlightWord('HOU1->DHO1-CYC2')
highlightWord('HOU1->DHO1-CYC2')
highlightWord('HOU1->DHO1-CYC2')
highlightWord('JFK8->DRO1-A')
highlightWord('MCI5->DMC1-CYC2')
highlightWord('MCI5->DMC1-CYC2')
highlightWord('MCI5->DMC1-CYC2')
highlightWord('MCI5->DMC1-CYC2')
highlightWord('MCI5->DMC2-CYC2')
highlightWord('MKE5->DML2-CYC2')
highlightWord('MKE5->DML2-CYC2')
highlightWord('MKE5->DML2-CYC2')
highlightWord('MKE5->DML2-CYC2')
highlightWord('MSP9->DMS1-CYC2')
highlightWord('PDX5->DPD1-CYC2')
highlightWord('TPA1->DBM2-A');
