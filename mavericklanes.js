// ==UserScript==
// @name     Maverick Lanes
// @version  1.0
// @grant    none
// @include  *
// @updateURL   https://raw.githubusercontent.com/prateekmaddy/user_script/master/mavericklanes.js
// @downloadURL https://raw.githubusercontent.com/prateekmaddy/user_script/master/mavericklanes.js
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
                node.style.backgroundColor = 'red';
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

highlightWord('LAS5->SLCX')
highlightWord('AVP4->BWIX')
highlightWord('AVP4->BWIY')
highlightWord('IVSA->')
highlightWord('IVSB->')
highlightWord('ONT2->')
highlightWord('BFI4->BFI5')
highlightWord('MKE1->MKE5')
highlightWord('BWI2->BWI5')
highlightWord('CVG7->CVG5')
highlightWord('CVG7->')
highlightWord('->CVG5')
highlightWord('DFW9->DFW8')
highlightWord('SNA9->SNA6')
highlightWord('EWR7->EWR5')
highlightWord('OAK7->OAK5')
highlightWord('MGE7->MGE1')
highlightWord('MIA5->MIA7')
highlightWord('STL5->DLI1')
highlightWord('MOB5->DBM3')
highlightWord('AVP4->DBA2')
highlightWord('FTW2->DAL9')
highlightWord('ATL8->DAL9')
highlightWord('MDW8->DAL9')
highlightWord('ACY5->MTN5')
highlightWord('DTW5->')
highlightWord('DTW5->MGE5')
highlightWord('MGE5->ACY5')
highlightWord('MGE5->BDL5')
highlightWord('MGE5->MTN5')
highlightWord('ACY5->DTW5')
highlightWord('MGE5->EWR8')
highlightWord('MGE5->EWR5')
highlightWord('DEN3->DEN5')
highlightWord('BNA3->ATL6')
highlightWord('BWI2->PIT5')
highlightWord('CAE1->MCO5')
highlightWord('CAE1->MGE5')
highlightWord('CHA2->MEM5')
highlightWord('CMH1->BNA5')
highlightWord('CMH1->MEM5')
highlightWord('CMH2->BUF5')
highlightWord('CMH2->CLE5')
highlightWord('CMH2->PIT5')
highlightWord('FTW6->HOU1')
highlightWord('JAX2->MCO5')
highlightWord('MKC6->DEN5')
highlightWord('MKC6->OKC5')
highlightWord('PHL4->MTN5')
highlightWord('SAT2->DFW8')
highlightWord('SDF8->CLE5')
highlightWord('TPA1->ATL6')
highlightWord('MGE5->JAX5')
highlightWord('ACY5->MDW5')
highlightWord('ACY5->MKE5')
highlightWord('MGE5->DAL9')
highlightWord('MDW5->ACY5')
highlightWord('MDW5->MTN5')
highlightWord('JFK8->EWR5')
highlightWord('JFK8->BOS5')
highlightWord('EWR9->BOS5')
highlightWord('DET2->BUF5')
highlightWord('DFW6->HOU1')
highlightWord('STL4->MEM5')
highlightWord('TPA1->MGE5')
highlightWord('BFI4->PDX5')
highlightWord('MTN5->')
highlightWord('MTN5->DTW5')
highlightWord('MTN5->EWR8')
highlightWord('MTN5->MGE5')
