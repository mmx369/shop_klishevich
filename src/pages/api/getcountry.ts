import { NextApiRequest, NextApiResponse } from 'next'
import { getAsString } from '../../lib/getAsString'
import { getData } from '../../lib/getData'

export default async function country(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const type = getAsString(req.query.type!)
  const country = await getData.getCountry(type)
  res.json(country)
}
