import { api } from 'boot/axios'

const merchant = {
  get: function () {
    return api.get('/api/v1/merchant')
  }
}

export { merchant }