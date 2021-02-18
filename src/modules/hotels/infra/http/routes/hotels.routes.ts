import { Router, Request, Response } from 'express'

import HotelsController from '../../../../../modules/hotels/infra/http/controllers/HotelsController'

const hotelsRouter = Router()
const hotelsController = new HotelsController()


hotelsRouter.get('/', hotelsController.list)

hotelsRouter.get('/:hotelId', hotelsController.findById)

export default hotelsRouter