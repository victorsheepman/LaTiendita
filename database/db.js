import allOfertas from './Ofertas'
class Database {
  constructor() {}

  async getAll(){
    const asArray = Object.values(allOfertas)
    await randomDelay()
    return asArray
  }

    async getById(id){
        if (!Object.prototype.hasOwnProperty.call(allOfertas, id)) {
        return null
        }

        const product = allOfertas[id];
        await randomDelay()
        return product
    }
}

// Let's also add a delay to make it a bit closer to reality
const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })

export default Database