import { formatUrl } from 'url-lib'

interface ResponseResult {
  id: string
  title: string
  url: string
  rating: string
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
  id: string
  title: string
  url: string
  rating: string
  previewUrl: string
}

const mapResponseToUiData = ({
  id,
  title,
  url,
  images,
  rating,
}: ResponseResult): Result => ({
  id,
  title,
  url,
  rating: rating.toUpperCase(),
  previewUrl: images.preview.mp4,
})

interface ResponseData {
  data: ResponseResult[]
}

export const getResults = async (query = ''): Promise<Result[]> => {
  const resp = await fetch(
    formatUrl(
      'https://api.giphy.com/v1/gifs/search?api_key=7B4oce3a0BmGU5YC22uOFOVg7JJtWcpH',
      {
        q: query,
        lang: 'en',
      },
    ),
  )
  const data = await resp.json()
  const responseData = data as ResponseData
  const results = responseData.data.map(mapResponseToUiData)

  return results
}
