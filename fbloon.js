#!name=Fileball C
#!doc=CDATASection

[Mitm]
hostname=api.revenuecat.com, app-measurement.com

[Scripe]
http-response ^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ scripe-path=https://raw.githubusercontent.com/for-the-ionia/ionizer/ip/fb.js, requires-body=true, binary-body-mode=true, timeout=10, tag=FBC

