// TODO: 下面这个问题会导致点击链接之后没有反应，临时解决方案是定义一个 ga 函数避免报错
// https://github.com/hhk7734/docusaurus-plugin-google-adsense/issues/2
window.ga = function () {}

const { search } = location
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
