/*
流利说•阅读 Qx

因缓存机制，使用脚本后可能需要重装一次「流利说•阅读」后方可生效；生效标志是点进详解不再有限制

^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) url script-response-body llyd.js

MitM = vira.llsapp.com

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/v2/ymo/readings/limitation';
const time = '/api/v2/ymo/readings/accessible';

if (url.indexOf(vip) != -1) {
	obj["modules"] = [];
	obj["auditionDuration"] = 7200;
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["from"] = 1482071586;
	obj["to"] = 1671373986;
	body = JSON.stringify(obj);
}

$done({body});
/**
 * @supported 9E1BBA07A0EF
 */