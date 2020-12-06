import { fetchPosts } from '@/apis/postClient'

describe('postClient', () => {
  describe('fetchPost', () => {
    it('returns posts', async () => {
      const data = await fetchPosts()
      expect(data[0]).toEqual({
        id: 1,
        title: 'TypeScript',
        text:
          'Typed JavaScript at Any Scale.TypeScript extends JavaScript by adding types.By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.',
        userId: 1,
        updatedAt: '2020-10-01T12:20:34Z',
      })
    })
  })
})
