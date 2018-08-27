const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `http://localhost:3000`
  } else {
    return `https://qs-go.herokuapp.com/`
  }

}

module.exports = {
  baseURL
}
