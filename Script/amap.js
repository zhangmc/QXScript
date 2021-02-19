//var body = $response.body;
console.log($response.body);
var body = '{"status":"1","regeocode":{"addressComponent":{"streetNumber":{"number":"29号2栋","street":"岔道口西路"},"country":"中国","city":"南昌市","province":"江西省","adcode":"360103","district":"西湖区","citycode":"0791"},"aois":[{"name":"金盘东路社区"}],"pois":[{"name":"金盘东路社区"}]},"info":"OK","infocode":"10000"}';
var obj = JSON.parse(body);
body = JSON.stringify(obj);
$done(body);