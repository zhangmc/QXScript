var bonus = {
  url: 'https://paofu.cloud/user/checkin',
  headers: {
    "Cookie": $prefs.valueForKey("CookiePFC"),
  }
};
bonus.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36';
bonus.headers['Host'] = 'paofu.cloud';
bonus.headers['Origin'] = 'https://paofu.cloud';
bonus.headers['Sec-Fetch-Site'] = 'same-origin';
bonus.headers['Sec-Fetch-Mode'] = 'cors';
bonus.headers['Referer'] = 'https://paofu.cloud/user';
$task.fetch(bonus).then(response => {
  let data = response.body;
  let result = JSON.parse(data);
  console.log(result);
  let title = "PFC";
  if (result && result.ret == "1") {
    let subTitle = `签到结果: 成功`;
    let detail = `${result.msg}, 剩余流量 ${result.traffic}。`;
    $notify(title, subTitle, detail);
  }
  else {
    let subTitle = `签到结果: 失败`;
    $notify(title, subTitle, "");
  }
});