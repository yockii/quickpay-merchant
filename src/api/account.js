import { api } from 'boot/axios'

const account = {
  login: function (data) {
    return api.post('/login', data)
  }
}

export { account }