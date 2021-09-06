# 有道翻译

:::tip
文档内容可能会过时，请以有道翻译官网说明为准。

相关链接：[有道智云 AI 开放平台](http://ai.youdao.com) [有道文本翻译服务定价文档](http://ai.youdao.com/DOCSIRMA/html/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%BF%BB%E8%AF%91/%E4%BA%A7%E5%93%81%E5%AE%9A%E4%BB%B7/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1-%E4%BA%A7%E5%93%81%E5%AE%9A%E4%BB%B7.html)
:::

## 价格 {#prices}

有道翻译官方接口会**提供 50 元免费体验金，用完之后就要收费了，费用由有道翻译在它自己的[有道智云 AI 开放平台](http://ai.youdao.com)收取，与划词翻译无关**。有道翻译官方接口的收费价格为 48 元 / 百万字符。

有道翻译是按天计费的，建议设置余额预警为 10 元，这样余额低于 10 元时会有短信提示。但是请注意，按天计费意味着在一天之内无论产生了多少使用量都不会有实时提醒，只会在每天结算的时候（一般是凌晨一点）才会有提醒。建议在使用完体验金之后通过[翻译积分](tp.md)的形式使用有道翻译，因为当积分用完时会实时提醒，不会超额扣费。

## 申请步骤 {#steps}

### 第一步：登录有道智云 AI 开放平台 {#register}

打开有道智云 AI 开放平台 [http://ai.youdao.com](https://ai.youdao.com) 并点击右上角的「登录/注册」。

第一次注册时，开发者名称填写「划词翻译」，渠道填写「翻译插件」即可。

### 第二步：生成 API ID {#create-key}

首先打开「文本翻译服务」页面 [https://ai.youdao.com/console/#/service-singleton/text-translation](https://ai.youdao.com/console/#/service-singleton/text-translation)，点击「创建应用」按钮，会需要填写应用信息：

- 应用名称填写"划词翻译"
- 应用类别选择"实用工具"
- 选择服务选择"文本翻译"
- 接入方式选择"API"

点击「确定」完成应用创建，然后再点击「确定」按钮。

### 第三步：在划词翻译中填写有道翻译的应用 ID 和应用密钥 {#fill-in}

打开「应用总览」页面 [https://ai.youdao.com/console/#/app-overview](https://ai.youdao.com/console/#/app-overview)，在应用列表中找到刚才创建的「应用名称」为「划词翻译」的应用，然后就会看到「应用 ID」和「密钥/包名/Bundle ID」，将它们填进划词翻译的【设置页】-【服务申请】-【有道翻译】中（v7.6.0 之前的用户填进「设置页」-「翻译源」-「有道翻译」中）。
