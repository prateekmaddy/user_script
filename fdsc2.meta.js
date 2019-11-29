// ==UserScript==
// @name     Destination Caps Highlighter
// @version  1.3
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

highlightWord('ATL6-->DBM2-CYC1')
highlightWord('AZA5-->DPX6-CYC2')
highlightWord('AZA5-->DPX6-CYC2')
highlightWord('AZA5-->DPX6-CYC2')
highlightWord('AZA5-->DPX6-CYC2')
highlightWord('BOS5-->DBO1-CYC1')
highlightWord('BOS5-->DBO2-CYC1')
highlightWord('BOS5-->DBO6-CYC1')
highlightWord('BOS5-->DRI1-CYC1')
highlightWord('BOS7-->DRI1-A')
highlightWord('CAE1-->DBM2-B')
highlightWord('CHA1-->DBM2-B')
highlightWord('DAL9-->DDA1-CYC1')
highlightWord('DEN5-->DDE5-CYC2')
highlightWord('DEN5-->DDE5-CYC2')
highlightWord('DEN5-->DDE5-CYC2')
highlightWord('DEN5-->DDE5-CYC2')
highlightWord('DFW8-->DDA1-CYC1')
highlightWord('DTW5-->DDT1-CYC1')
highlightWord('EWR8-->DEW1')
highlightWord('FAT1-->DSF5-B')
highlightWord('JFK8-->DRI1-A')
highlightWord('LAS5-->DLV1-CYC1')
highlightWord('MCI5-->DMC1-CYC2')
highlightWord('MCI5-->DMC1-CYC2')
highlightWord('MCI5-->DMC1-CYC2')
highlightWord('MCI5-->DMC1-CYC2')
highlightWord('MCI5-->DMC2-CYC2')
highlightWord('MCO1-->DMO3-B')
highlightWord('MCO5-->DMO3-CYC1')
highlightWord('MCO9-->DMO3-CYC1')
highlightWord('MDW5-->DCH7-CYC1')
highlightWord('MSP9-->DMP1-CYC1')
highlightWord('MSP9-->DMS1-CYC2')
highlightWord('OAK4-->DSF5-B')
highlightWord('ONT2-->DLV1-A')
highlightWord('RNO4-->DSF5-B')
highlightWord('SMF1-->DSF5-B')
highlightWord('STL5-->DLI1-CYC1')
highlightWord('TPA2-->DMO3-B');
