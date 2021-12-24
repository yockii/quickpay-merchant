import { api } from 'boot/axios'

const payOrder = {
  paginate: function (params) {
    return api.get('/api/v1/payOrder/list', { params })
  }
}

export { payOrder }