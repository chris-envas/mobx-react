import { observable, action, computed } from "mobx"

class DemoStore {
  @observable birds = []

  @action 
  addBird = bird => this.birds.push(bird)

  @computed 
  get birdCount() {
    return this.birds.size
  }

}

const store = new DemoStore()

export default store