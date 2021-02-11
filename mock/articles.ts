import faker from 'faker'
import { Response, Request } from 'express'
import { IArticleData } from '../src/api/types'
import { etfs } from './data/etfs'

const articleList: IArticleData[] = []
const articleCount = 10
const mockFullContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'

for (let i = 0; i < articleCount; i++) {
  articleList.push({
    id: i,
    status: faker.random.arrayElement(['published', 'draft']),
    name: faker.lorem.sentence(6, 10),
    title: faker.lorem.sentence(6, 10),
    tag: faker.lorem.sentence(6, 10),
    abstractContent: faker.lorem.sentences(2),
    fullContent: mockFullContent,
    sourceURL: faker.internet.url(),
    imageURL: faker.image.imageUrl(),
    timestamp: faker.date.past().getTime(),
    platforms: [faker.random.arrayElement(['a-platform', 'b-platform', 'c-platform'])],
    disableComment: faker.random.boolean(),
    importance: faker.random.number({ min: 1, max: 3 }),
    issuer: faker.name.findName(),
    reviewer: faker.name.findName(),
    type: faker.random.arrayElement(['JP', 'EU']),
    pageviews: faker.random.number({ min: 300, max: 500 })
  })
}

for (let i = 0; i < etfs.length; i++) {
  articleList.push({
    id: i,
    status: faker.random.arrayElement(['published', 'draft']),
    name: etfs[i].etf,
    title: etfs[i].name,
    tag: etfs[i].tag,
    abstractContent: faker.lorem.sentences(2),
    fullContent: mockFullContent,
    sourceURL: faker.internet.url(),
    imageURL: faker.image.imageUrl(),
    timestamp: faker.date.past().getTime(),
    platforms: [faker.random.arrayElement(['a-platform', 'b-platform', 'c-platform'])],
    disableComment: faker.random.boolean(),
    importance: etfs[i].star,
    issuer: etfs[i].issuer,
    reviewer: faker.name.findName(),
    type: 'ETF',
    pageviews: faker.random.number({ min: 300, max: 500 })
  })
}

const countries = [
  { id: 'ARGT', tag: '阿根廷', name: 'Global X MSCI Argentina ETF', etf: 'ARGT', issuer: 'Global X', star: 0, type: 'c' },
  { id: 'EWA', tag: '澳大利亞', name: 'iShares MSCI Australia ETF', etf: 'EWA', issuer: 'iShares', star: 0, type: 'c' },
  { id: 'EWO', tag: '奧地利', name: 'iShares MSCI Austria ETF', etf: 'EWO', issuer: 'iShares', star: 0, type: 'c' },
  { id: 'EWK', tag: '比利時', name: 'iShares MSCI Belgium ETF', etf: 'EWK', issuer: 'iShares', star: 0, type: 'c' }
]

for (let i = 0; i < countries.length; i++) {
  articleList.push({
    id: i,
    status: faker.random.arrayElement(['published', 'draft']),
    name: countries[i].etf,
    title: countries[i].name,
    tag: countries[i].tag,
    abstractContent: faker.lorem.sentences(2),
    fullContent: mockFullContent,
    sourceURL: faker.internet.url(),
    imageURL: faker.image.imageUrl(),
    timestamp: faker.date.past().getTime(),
    platforms: [faker.random.arrayElement(['a-platform', 'b-platform', 'c-platform'])],
    disableComment: faker.random.boolean(),
    importance: countries[i].star,
    issuer: countries[i].issuer,
    reviewer: faker.name.findName(),
    type: countries[i].type,
    pageviews: faker.random.number({ min: 300, max: 500 })
  })
}

export const getArticles = (req: Request, res: Response) => {
  const { importance, type, title, page = 1, limit = 20, sort } = req.query

  let mockList = articleList.filter(item => {
    if (importance && item.importance !== +importance) return false
    if (type && item.type !== type) return false
    if (title && item.title.indexOf(title as string) < 0) return false
    return true
  })

  if (sort === '-id') {
    mockList = mockList.reverse()
  }

  const pageList = mockList.filter((_, index) => index < (limit as number) * (page as number) && index >= (limit as number) * (page as number - 1))

  return res.json({
    code: 20000,
    data: {
      total: mockList.length,
      items: pageList
    }
  })
}

export const getArticle = (req: Request, res: Response) => {
  const { id } = req.params
  for (const article of articleList) {
    if (article.id.toString() === id) {
      return res.json({
        code: 20000,
        data: {
          article
        }
      })
    }
  }
  return res.json({
    code: 70001,
    message: 'Article not found'
  })
}

export const createArticle = (req: Request, res: Response) => {
  const { article } = req.body
  return res.json({
    code: 20000,
    data: {
      article
    }
  })
}

export const updateArticle = (req: Request, res: Response) => {
  const { id } = req.params
  const { article } = req.body
  for (const v of articleList) {
    if (v.id.toString() === id) {
      return res.json({
        code: 20000,
        data: {
          article
        }
      })
    }
  }
  return res.json({
    code: 70001,
    message: 'Article not found'
  })
}

export const deleteArticle = (req: Request, res: Response) => {
  return res.json({
    code: 20000
  })
}

export const getPageviews = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: {
      pageviews: [
        { key: 'PC', pageviews: 1024 },
        { key: 'Mobile', pageviews: 1024 },
        { key: 'iOS', pageviews: 1024 },
        { key: 'Android', pageviews: 1024 }
      ]
    }
  })
}
