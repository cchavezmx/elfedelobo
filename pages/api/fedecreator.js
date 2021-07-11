import Juegos from '../../models/Juegos'
import dbConnect from '../../utils/dbConnect'

export default async function fedecreator(req, res) {
  const { method } = req
  await dbConnect()
  
  switch (method) {
    case "GET":
      
      try {
      // getAll the games
      const games = await Juegos.aggregate().match({})
      if(games) res.status(200).json({ data: games })
      
    } catch (error) {
      res.status(400).json({ data: error })
    }
      
    break;
    default:
      res.status(400).json({ success: false })
      break;
  }
}