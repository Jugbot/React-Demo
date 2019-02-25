// import 'axios'

const Api = {
  exampleSubmit(data) {
    // return axios.push('/signup', data)
    return new Promise(function(resolve, reject) {
      const result = {
        success: true,
        message: 'success'
      }

      setTimeout(() => {
        resolve(result)
      }, 1000);
    })
  }
}

export default Api;
