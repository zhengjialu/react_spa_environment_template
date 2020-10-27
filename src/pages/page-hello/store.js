import { observable } from 'mobx'
import io from './io'

class Store {
  @observable content = 'hello world!!!'
}

export default Store