$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("配置重载","成功","")
    $done({
        title: "Profiles Reload",
        content: "配置重载",
        icon: "terminal",
        "icon-color": "#5AC8FA",
     })
    });
