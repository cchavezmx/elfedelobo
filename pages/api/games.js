const key = process.env.KEY_API_GAMES
const baseUrl = `https://api.rawg.io/api/games`

export default async function games(req, res) {

  try {    

  const name = req.__NEXT_INIT_QUERY.name
  const promise = new Promise(( resolve ) => {
    resolve(
      fetch( baseUrl + `?key=${key}` + "&search=" + name )
      .then(res => res.json())
      .then(data => data.results[0].background_image)
    )
  })    

  const response = await Promise.all([ promise ]).then(res => {
    return res.toString()
  })

  return res.status(200).json({ img: response })

  
  } catch (error) {
    res.staus(400).json({ error })
  }

}
