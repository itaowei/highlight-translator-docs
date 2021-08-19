# 百度通用文字识别（高精度版）

:::tip
文档内容可能会过时，请以百度云官网说明为准。

相关链接：[百度通用文字识别介绍](https://cloud.baidu.com/product/ocr_general) [百度云文字识别接口免费额度](https://cloud.baidu.com/doc/OCR/s/fk3h7xu7h)
:::

划词翻译的截图翻译功能可以改为使用百度通用文字识别（高精度版）服务将截图转成文字进行翻译，它比划词翻译内置的 [Tesseract OCR](https://tesseract-ocr.github.io/) 更快且更准确。

## 价格 {#prices}

如果你在 2021 年 5 月 26 日之前已经进行实名认证并且使用过，那么你每天都有 500 次的免费使用额度。在这之后申请的话，[每月有 1000 次的免费使用额度](https://cloud.baidu.com/doc/OCR/s/fk3h7xu7h)。

具体调整见[百度云免费额度调整通知](https://ai.baidu.com/support/news?action=detail&id=2390)。

## 申请步骤 {#steps}

### 第一步：进行个人认证 {#register}

1. 进入百度智能云控制台 [https://console.bce.baidu.com/](https://console.bce.baidu.com/)
2. 完成个人认证

如果你之前申请过[百度翻译接口](baidu-api.md)，那么你已经认证过了。

### 第二步：创建文字识别应用 {#create-app}

1. 进入[文字识别控制台](https://console.bce.baidu.com/ai/#/ai/ocr/overview/index)。如果链接有误，也可以从左侧菜单中搜索“文字识别”然后进入
2. 点击“创建应用”按钮，然后填写表单：
    - “应用名称”随意填写，例如“划词翻译”
    -  “接口选择”不用改动
    - “文字识别包名”选择“不需要”
    - “应用归属”选择“个人”
    - “应用描述”随意填写，例如“自用”
3. 填写完毕后，点击“立即创建”按钮

:::note
由于 2021 年 5 月 26 日的调整，百度通用文字识别还需要自行领取免费资源包才有免费额度。我之后会更新此处的文档，也欢迎你点击页面底部的【编辑此页】链接帮助我更新此文档。
:::

### 第三步：获取 API Key 和 Secret Key {#fill-in}

1. 应用创建成功后，进入[应用列表](https://console.bce.baidu.com/ai/#/ai/ocr/app/list)
2. 找到刚才创建的名为“划词翻译”的应用，会看到有两列“API Key”和“Secret Key”，将它们复制进划词翻译的【设置页】-【服务申请】-【百度通用文字识别（高精度版）】中（v7.6.0 之前的用户填进“设置” - “截图翻译” - ”百度云文字识别接口“中）即可。注意，不要误将 “AppID” 复制进去了。

## 常见问题

### 填写密钥后出现 “Cannot read property 'reduce' of undefined” 的报错

可能的原因：

- 密钥填错了
- 忘记领取免费资源包了

如果确认密钥填写无误且领取了免费资源包之后仍然报错，请将问题[反馈给我](../issues.mdx)。