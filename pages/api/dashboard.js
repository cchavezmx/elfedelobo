import Juegos from '../../models/Juegos'
import dbConnect from '../../utils/dbConnect'

export default async function dashboard(req, res) {

  const { method } = req
  await dbConnect()

  switch (method) {
    case "GET":
      
      try {
        
        const lastGames = new Promise((resolve, reject) => {
          resolve(
            Juegos.aggregate()
            .match({}).limit(12)
          )
        })

        const countTotalGames = new Promise((resolve) => {
          resolve(
            Juegos.aggregate()
            .match({}).count("countTotalGames")
          )
        })

        const platinos = new Promise((resolve) => {
          resolve(
            Juegos.find({ platino: true })
          )
        })

        const data = await Promise.all([ lastGames, countTotalGames, platinos ]).then(res => {
          return { games: res[0], total: res[1], platinos: res[2] }
        })

        if(data) res.status(200).json({ data })

      } catch (error) {
        res.status(400).json({ error: "hubo un error " })
      }

      break;
    default:
      res.status(400).json({ data: "Error false" })
      break;
  }

}
