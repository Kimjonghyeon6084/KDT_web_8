var userAgent = navigator.userAgent.toLowerCase();
var ios12 = false;
var originProductWidth;
var contentWidth = 750;

if(userAgent) {
    if(userAgent.indexOf('iphone os 12') != -1 && userAgent.indexOf('safari') != -1) {
        ios12 = true;
    }

    if(/mobi/.test(userAgent)) {
        contentWidth = window.outerWidth-32;
    }
}

if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;

        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

function beforeInit() {
    var arrFitTag = ['iframe'];
    var vw = document.body.clientWidth;
    for(var i=0; i<arrFitTag.length; i++) {
        var tag = arrFitTag[i];
        document.querySelectorAll(tag).forEach(function(el){
            if(el.src && isBlockedIframeSrc(el.src)) {
                el.style.display = 'none';
            }
            else if(el.width && el.width.indexOf('%') == -1) {
                var ratio = vw / parseFloat(el.width);
                if(el.height) {
                    el.height = parseFloat(el.height) * ratio;
                }

                el.width = vw;
            }
        });
    }

    originProductWidth = getMaxElementWidth('img');
    if(originProductWidth < contentWidth) originProductWidth = contentWidth;

    document.querySelectorAll('img').forEach(function(el){ 
        if(el.closest("table")) return;

        if(el.style.position == 'absolute' || el.style.position == 'fixed') return;

        el.style.height = '';
        var width = el.style.width || el.width;
        if(typeof width == 'string' && width.indexOf('px') != -1 && parseInt(width) > contentWidth){
            el.style.width = '100%'
        }
        else if(typeof width == 'number' && width > contentWidth) {
            el.style.width = '100%';
        }
        
        var restyle = (el.getAttribute('style') || '')+'height:auto !important;';
        el.setAttribute('style', restyle);
        el.classList.add('m2img');
    });

    offAnchorHref();
    customizeForSeller();
}

function offAnchorHref() {
    var allowHosts = ['www.ictmarket.or.kr'];
    document.querySelectorAll(['a', 'area']).forEach(function(el) { 
        var src = el.getAttribute('href');
        if(!src) return;

        for(var i=0; i<allowHosts.length; i++) {
            var h = allowHosts[i];
            if(src.indexOf(h) != -1) {
                return;
            }
        }

        el.removeAttribute('href');
    });
}

function customizeForSeller() {
    var productContPinchZoom = document.querySelector('.productContPinchZoom');
    if(productContPinchZoom && productContPinchZoom.style.position == 'absolute') {
        productContPinchZoom.style.position = 'static';
    }
}

function isBlockedIframeSrc(src) {
    if(src.indexOf('http://') == 0) {
        return true;
    }
    else if(src.indexOf('.mp4') == src.length-4) {
        return true;
    }
    else if(src.indexOf('http%3A%2F%2Fv.tagstory.com%2Fvideo%2Fplayer%2F') != -1) {
        return true;
    }

    return false;
}

function getMaxElementWidth(tag, limit) {
    var m2root = document.querySelector('#m2root');
    if(!m2root) {
        return document.body.clientWidth;
    }

    var maxWidth = 0;
    var all = m2root.getElementsByTagName(tag);
    for (var i=0, max=all.length; i < max; i++) {
        if(limit && all[i].clientWidth > limit) continue;
        maxWidth = Math.max(maxWidth, all[i].clientWidth);
    }
    return maxWidth;
}
// if(!ios12) {
//     beforeInit();
// }

function afterInit() {
    if(ios12) {
        beforeInit();
        document.querySelectorAll('table').forEach(function(tbl){
            tbl.querySelectorAll('colgroup').forEach(function(cg){
                cg.remove();
            });
        });
    }

    document.querySelectorAll('img').forEach(function(el){
        if(el.closest("table")) return;
        
        if(el.className.indexOf('m2img') == -1) return;

        el.classList.remove('m2img');
        if(el.naturalWidth == 0 && el.naturalHeight == 0) {
            el.style.display = 'none';
            el.alt = 'hidden by m2 cause origin';
        }
        else if(originProductWidth && el.style.width != '100%' && el.clientWidth < contentWidth) {
            var areaWidth = getParentWidth(el);
            var percentWidth;
            if(areaWidth && areaWidth < document.body.clientWidth) {
                if(el.clientWidth >= areaWidth) {
                    percentWidth = 100;
                }
                else {
                    var wRatio = el.clientWidth / areaWidth;
                    var resizedWidth = (el.clientWidth * wRatio);
                    percentWidth = parseInt((resizedWidth / areaWidth) * 100);
                }
            }
            else {
                var wRatio = contentWidth / originProductWidth;
                var resizedWidth = (el.clientWidth * wRatio);
                percentWidth = parseInt((resizedWidth / contentWidth) * 100);
                if(percentWidth > 100) percentWidth = 100;
            }
            el.style.width =  percentWidth +'%';
            el.style.height = '';
            el.setAttribute('style', (el.getAttribute('style')||'')+' height: auto !important;');
        }
        else {
            el.style.width = '100%';
            el.style.height = '';
            el.setAttribute('style', (el.getAttribute('style')||'')+' height: auto !important;');
        }
    });

    function getParentWidth(el) {
        while(el && el.parentNode) {
            el = el.parentNode;
            if(el.clientWidth) {
                return el.clientWidth;
            }
        }
        return 0;
    }

    if(ios12) {
        var m2root = document.querySelector('#m2root');
        m2root.style.width = (screen.width-32)+'px';
	    m2root.style.cssText = 'width:'+(screen.width-32)+'px !important;';
        m2root.style.display = 'inline-block';
    }

    function setZoom() {
        var m2root = document.querySelector('#m2root');
        var maxWidth = getMaxElementWidth('*', 1200);
        if(m2root && document.body.clientWidth < maxWidth) {
            var ratio = Math.max(0.5, document.body.clientWidth / maxWidth);
            m2root.style.zoom = ratio;
            setParentHeight(ratio);
        }
        try {
            // iframe mixed contents인 경우 핀치줌 적용 안함 
            var checkMixedIframe = null;
            try {
                checkMixedIframe = parent.document.getElementById('m2root')
            }
            catch(e) {}

            if(!checkMixedIframe && navigator.maxTouchPoints)
                new Pinch(document.querySelector('#m2zoom'));
        }
        catch(e){}
    }

    function setParentHeight(ratio) {
        if(parent && parent != window) {
            try {
                parent.document;
                parent.document.querySelectorAll('iframe').forEach(function(el){
                    if(el.src && el.src == location.href && el.height) {
                        el.height = parseInt(parseInt(el.height) * ratio) + 100;
                    }
                });
            }
            catch(e) {}
        }
    }

    setZoom();
}
