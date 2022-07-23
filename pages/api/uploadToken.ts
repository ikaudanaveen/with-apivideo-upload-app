import type {NextApiRequest, NextApiResponse} from 'next'
import ApiVideoClient from '@api.video/nodejs-client'

const getUploadToken = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = new ApiVideoClient({ apiKey: "su4f3iUNYzCrN4SWGIn7YKZtnvzawBlVElKxd3JJVIU" })
    const uploadToken = await client.uploadTokens.createToken()
    res.status(200).json(uploadToken)
  } catch (error) {
    res.status(400).end()
  }
}

export default getUploadToken
