/**
 * @fileOverview 这个文件会被直接注入到 <head> 里。
 * 由于在 netlify.toml 配置了所有 js 缓存 1 年，
 * 所以每次修改这个文件后都需要修改文件名。
 */

// 升级到 docusaurus 2.0.0-beta.6 后，生产环境里点击链接都不能正常跳转了，而且控制台会报
// window.ga is not a function 的错误。已经确认过无论是否开启谷歌分析的插件都会报这个错，
// 给 window.ga 补个函数就修复了
window.ga = function () {}

const { search, hostname } = location

const isLocal = hostname === 'localhost'
const hasInviteCode = search.startsWith('?i=')

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

setInviteCookie()
