import requestIO from '../../common/request-io'

const IO = requestIO.createIo('hello', {
  test: {
    url: '/xxxx',
    method: 'GET'
  }
})

export default IO