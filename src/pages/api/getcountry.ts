import { NextApiRequest, NextApiResponse } from 'next'
import { getAsString } from '../../lib/getAsString'
import { getCountry } from '../../lib/getCountry'

export default async function country(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const type = getAsString(req.query.type!)
  const country = await getCountry(type)
  res.json(country)
}
