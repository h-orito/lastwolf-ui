import { LOGINOUT } from '~/store/action-types'

const state = {
  authenticated: false,
  player: null,
  photoUrl: null,
  user: null
}

const mutations = {
  login(state, { player, photoUrl, user }) {
    state.authenticated = true
    state.player = player
    state.photoUrl = photoUrl
    state.user = user
  },
  logout(state) {
    state.authenticated = true
    state.player = null
    state.photoUrl = null
    state.user = null
  }
}

const actions = {
  async [LOGINOUT]({ commit }, { user }) {
    const self = <any>this

    if (!user) {
      self.$cookies.remove('id-token', {
        path: '/'
      })
      await commit('logout')
      return
    }
    // get new id-token
    const idToken = await user.getIdToken(true)

    // save cookie
    self.$cookies.set('id-token', idToken, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30
    })
    // 1時間で有効期限が切れるので50分後に再取得させる
    const now = new Date()
    self.$cookies.set(
      'id-token-check-date',
      now.setMinutes(now.getMinutes() + 50),
      {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      }
    )
    // API call時に使うので一旦stateに詰める
    await commit('login', {
      player: null,
      photoUrl: user.photoURL,
      user
    })
    const myPlayer = await self.$axios.$get('/my-player')
    await commit('login', {
      player: myPlayer,
      photoUrl: user.photoURL,
      user
    })
  }
}

const getters = {
  isAuthenticated: state => state.authenticated,
  player: state => state.player,
  user: state => state.user,
  isLogin: state => state.player != null,
  getPhotoUrl: state => state.photoUrl
}

export default {
  state,
  mutations,
  actions,
  getters
}
