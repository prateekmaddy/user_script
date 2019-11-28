// ==UserScript==
// @name     Destination Caps Highlighter
// @version  1.0
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
highlightWord('DBM2')
highlightWord('DBM2')
highlightWord('DMS1-A')
highlightWord('DBM2-A')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('BUF5')
highlightWord('BUF5')
highlightWord('BUF5')
highlightWord('BUF5')
highlightWord('PIT5')
highlightWord('PIT5')
highlightWord('PIT5')
highlightWord('PIT5')
highlightWord('PIT5')
highlightWord('PIT5')
highlightWord('BUF5')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('PIT5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('DTW5')
highlightWord('DTW5')
highlightWord('DTW5')
highlightWord('DTW5')
highlightWord('PIT5')
highlightWord('PIT5')
highlightWord('PIT5')
highlightWord('PIT5')
highlightWord('DTW5')
highlightWord('RDU5')
highlightWord('RDU5')
highlightWord('RDU5')
highlightWord('RDU5')
highlightWord('DTW5')
highlightWord('DTW5')
highlightWord('DTW5')
highlightWord('DTW5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('STL5')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('CVG9')
highlightWord('BUF5')
highlightWord('BUF5')
highlightWord('BUF5')
highlightWord('BUF5');
highlightWord('DTW5-CART-A');
highlightWord('STL5');
highlightWord('STL5');
highlightWord('STL5');
highlightWord('STL5');
highlightWord('STL5');
highlightWord('DTW5');
highlightWord('DTW5');
highlightWord('DTW5');
highlightWord('DTW5');
highlightWord('STL5');
highlightWord('STL5');
highlightWord('RDU5');
highlightWord('RDU5');
highlightWord('RDU5');
highlightWord('RDU5');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('DTW5');
highlightWord('DTW5');
highlightWord('DTW5');
highlightWord('DTW5');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('CVG9');
highlightWord('STL5');

