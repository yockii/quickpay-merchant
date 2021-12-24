import { api } from 'boot/axios'

const payoutOrder = {

  paginate: function (params) {
    return api.get('/api/v1/payoutOrder/list', { params })
  }
}

export { payoutOrder }