// TODO: 下面这个问题会导致点击链接之后没有反应，临时解决方案是定义一个 ga 函数避免报错
// https://github.com/hhk7734/docusaurus-plugin-google-adsense/issues/2
window.ga = function () {}

const { search, pathname, hostname } = location

const hasInviteCode = search.startsWith('?i=')
const isInvitePage = [
  '/docs/invite',
  '/docs/invite/',
  '/docs/invite/index.html',
].includes(pathname)

/**
 * 将非 hcfy.app 的访问地址跳转到 hcfy.app，并处理邀请有礼的例外情况
 * @return {boolean|undefined} 如果页面跳转了，则返回 true
 */
function redirects() {
  if (hostname === 'localhost') return

  // 邀请有礼页面只能通过 hcfy.limingkai.cn 这个域名访问，因为它需要把 cookie 写入 .limingkai.cn 这个域下
  // TODO: 将接口地址 hs-api.limingkai.cn 迁移到 api.hcfy.app
  if (isInvitePage || hasInviteCode) {
    if (hostname !== 'hcfy.limingkai.cn') {
      location.replace(
        `${location.protocol}//hcfy.limingkai.cn${location.pathname}${location.search}${location.hash}`
      )
      return true
    }
  }
  // 其余域名都跳转到 hcfy.app
  else {
    if (hostname !== 'hcfy.app') {
      location.replace(
        `${location.protocol}//hcfy.app${location.pathname}${location.search}${location.hash}`
      )
      return true
    }
  }
}

/**
 * 将链接中的邀请码写进 cookie
 */
function setInviteCookie() {
  if (hasInviteCode) {
    const invitor = search.slice(3)
    if (hostname === 'hcfy.limingkai.cn') {
      document.cookie = `i=${invitor}; domain=limingkai.cn`
    } else if (hostname === 'localhost') {
      document.cookie = `i=${invitor}`
    } else {
      window.alert(
        `处理邀请码时出现了一个错误，请将此问题反馈给我。错误消息：不能在 ${hostname} 下写入邀请码。`
      )
    }
  }
}

if (!redirects()) {
  setInviteCookie()
}
