var paofucloud = $request.headers["Cookie"];

if (paofucloud) {
  if ($prefs.valueForKey("CookiePFC") != undefined) {
    if ($prefs.valueForKey("CookiePFC") != paofucloud) {
      var cookie = $prefs.setValueForKey(paofucloud, "CookiePFC");
      if (!cookie) {
        $notify("更新泡芙云签到Cookie失败‼️", "", "")
      } else {
        $notify("更新泡芙云签到Cookie成功 🎉", "", "")
      }
    }
  } else {
    var cookie = $prefs.setValueForKey(paofucloud, "CookiePFC");
    if (!cookie) {
      $notify("首次写入泡芙云Cookie失败‼️", "", "")
    } else {
      $notify("首次写入泡芙云Cookie成功 🎉", "", "")
    }
  }
}

$done({})