import { NextApiRequest, NextApiResponse } from 'next'
import { getAsString } from '../../database/getAsString'
import { getCountry } from '../../database/getCountry'

export default async function country(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const type = getAsString(req.query.type)
  const country = await getCountry(type)
  res.json(country)
}
