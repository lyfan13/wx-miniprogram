const app = getApp()
const apiUrl = 'https://api.open.demo.amusic.shop'
const request = (url, options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${apiUrl}${url}`,
      method: options.method,
      data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
      header: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      success (request) {
        if (request.data.code === 2000) {
          resolve(request.data)
        } else {
          reject(request.data)
        }
      },
      fail (error) {
        reject(error.data)
      }
    })
  })
}

const get = (url, options = {}) => {
  return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
  return request(url, { method: 'POST', data: options })
}

module.exports = {
  get,
  post
}