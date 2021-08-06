/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  guidesSidebar: [
    'install',
    'guides/welcome',
    {
      type: 'category',
      label: '功能介绍',
      collapsed: false,
      items: ['guides/page', 'guides/screenshot', 'guides/pdf', 'guides/video'],
    },
    {
      type: 'category',
      label: '使用技巧',
      collapsed: false,
      items: ['guides/extra'],
    },
  ],
  servicesSidebar: [
    'services/intro',
    'services/custom-api',
    'services/tp',
    {
      type: 'category',
      label: '申请步骤',
      collapsed: false,
      items: [
        'services/baidu-api',
        'services/qq-api',
        'services/caiyun-api',
        'services/ali-api',
        'services/sg-api',
        'services/youdao-api',
        'services/baidu-ocr',
      ],
    },
  ],
}
