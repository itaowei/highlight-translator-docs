// 升级到 docusaurus 2.0.0-beta.6 后，生产环境里点击链接都不能正常跳转了，而且控制台会报
// window.ga is not a function 的错误。已经确认过无论是否开启谷歌分析的插件都会报这个错，
// 给 window.ga 补个函数就修复了
window.ga = function () {}

const { search, hostname } = location

const isLocal = hostname === 'localhost'
const hasInviteCode = search.startsWith('?i=')

/**
 * 将非 hcfy.app 的访问地址跳转到 hcfy.app
 * @return {boolean|undefined} 如果页面跳转了，则返回 true
 */
function redirects() {
  if (isLocal) return

  if (hostname !== 'hcfy.app') {
    location.replace(
      `${location.protocol}//hcfy.app${location.pathname}${location.search}${location.hash}`
    )
    return true
  }
}

/**
 * 将链接中的邀请码写进 cookie
 */
function setInviteCookie() {
  if (hasInviteCode) {
    fetch(
      `${
        isLocal ? 'http://localhost' : 'https://hs-api.limingkai.cn'
      }/set-invite?i=${search.slice(3)}`,
      {
        mode: 'cors',
        credentials: 'include',
      }
    )
  }
}

if (!redirects()) {
  setInviteCookie()
}
