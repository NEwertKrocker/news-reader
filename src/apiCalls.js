
const fetchHeadlines = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bK3fWxGWydwVLxiMeLRBSDwr98AHnxso`)
    .then(response =>
    {if (response.ok){
      return response.json()
    }
    throw response.message
  })
}

export { fetchHeadlines };
