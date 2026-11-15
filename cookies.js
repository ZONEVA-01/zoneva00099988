/* Configura tu ID de AdSense aquí (ej. 'ca-pub-1234567890123456'). */
var ADSENSE_ID='';
var cb=document.getElementById('cb');
function get(){try{return localStorage.getItem('ck')}catch(e){return null}}
function loadAds(){if(!ADSENSE_ID||document.getElementById('adsjs'))return;var s=document.createElement('script');s.id='adsjs';s.async=true;s.crossOrigin='anonymous';s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+ADSENSE_ID;document.head.appendChild(s)}
function set(v){try{localStorage.setItem('ck',v)}catch(e){}cb.style.display='none';if(v==='yes')loadAds()}
var st=get();if(!st)cb.style.display='block';else if(st==='yes')loadAds();
document.getElementById('acc').onclick=function(){set('yes')};document.getElementById('rej').onclick=function(){set('no')};
var rc=document.getElementById('rc');if(rc)rc.onclick=function(e){e.preventDefault();cb.style.display='block'};
