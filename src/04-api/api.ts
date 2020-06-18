import { formatUrl } from 'url-lib'

interface ResponseResult {
  // 👈🏾 define the other properties returned by the API that are needed

  images: {
    preview: {
      height: string
      mp4: string
      mp4_size: string
      width: string
    }
  }
}

export interface Result {
  // 👈🏾 define all of the properties expected
}

// takes in an object of type ResponseResult
// returns an object of type Result
// 👇🏾 replace the `any` types with actual types
const mapResponseToUiData = ({ id, title, url, images, rating }: any): any => ({
  id,
  title,
  url,
  rating: rating.toUpperCase(),
  previewUrl: images.preview.mp4,
})

// 👀 this is the type of the response data to use below
interface ResponseData {
  data: ResponseResult[]
}

// define the return type of the API helper 👇🏾
export const getResults = async (query = '') => {
  const resp = await fetch(
    formatUrl(
      'https://api.giphy.com/v1/gifs/search?api_key=7B4oce3a0BmGU5YC22uOFOVg7JJtWcpH',
      {
        q: query,
        lang: 'en',
        rating: '',
        limit: 12,
      },
    ),
  )
  const data = await resp.json()

  // add an assertion for the type
  // of the response data 👇🏾
  const responseData = data

  const results = responseData.data.map(mapResponseToUiData)

  return results
}
