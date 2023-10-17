export class Http {
  static fetchData (url) {
    return new Promise((resolve, reject) => {
      const HTTP = new XMLHttpRequest();
      HTTP.open('GET', url)
      HTTP.onreadystatechange = () => {
        if (HTTP.readyState === XMLHttpRequest.DONE && HTTP.status === 200) {
          const responseData = JSON.parse(HTTP.responseText)
          resolve(responseData)
        }
        else if (HTTP.readyState === XMLHttpRequest.DONE) {
          reject('Something went wrong')
        }
      }
      HTTP.send()
    })
  }
}