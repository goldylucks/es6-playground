export default function asyncAwait () {
  fetchData().then(console.log)

  async function fetchData () {
    const data = callAPI()
    return await data
  }

  function callAPI (throwError) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (throwError) {
          reject('callAPI error')
          return
        }
        resolve('callAPI success')
      }, 200)
    })
  }
}
