import { Router } from 'express';

import countries from '../../../../modules/countries/infra/http/routes/countries.routes'
import cities from '../../../../modules/cities/infra/http/routes/cities.routes'
import hotels from '../../../../modules/hotels/infra/http/routes/hotels.routes'
import weather from '../../../../modules/weather/infra/http/routes/weather.routes'

const routes = Router();

routes.use('/countries', countries)
routes.use('/cities', cities)
routes.use('/hotels', hotels)
routes.use('/weather', weather)

export default routes;