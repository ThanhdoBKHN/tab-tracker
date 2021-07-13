import Api from '@/services/Api'

export default {
  post (command) {
    return Api().post('device', command)
  }
}
