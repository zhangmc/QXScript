const cookieName = 'PFC'
const cookieVal = $prefs.valueForKey('CookiePFC')

function sign() {
  let url = {
    url: `https://www.paofucloud.com/user/checkin`,
    headers: {
      Cookie: cookieVal
    }
  }
  url.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36';
  url.headers['Host'] = 'www.paofucloud.com';
  url.headers['Origin'] = 'https://www.paofucloud.com';
  url.headers['Sec-Fetch-Site'] = 'same-origin';
  url.headers['Sec-Fetch-Mode'] = 'cors';
  url.headers['Referer'] = 'https://www.paofucloud.com/user';

  $task.fetch(url).then((response) => {
    let data = response.body
    let result = JSON.parse(data)
    let title = `PFC`
    // 签到成功
    if (result && result.ret == 0) {
      let subTitle = `签到结果: 成功`;
      let detail = `${result.msg}, 剩余流量 ${result.traffic}。`;
      $notify(title, subTitle, detail);
    }
    // 签到失败
    else {
      let subTitle = `签到结果: 失败`;
      $notify(title, subTitle, "");
    }
    console.log(`PFC, data: ${data}`)
  })
}

sign()