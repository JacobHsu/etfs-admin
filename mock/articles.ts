import faker from 'faker'
import { Response, Request } from 'express'
import { IArticleData } from '../src/api/types'
import { etfs } from './data/etfs'
import { countries } from './data/countries'
import { stock } from './data/stock'
import { bond } from './data/bond'
import { ark } from './data/ark'
import { currency } from './data/currency'
import { spdr, vanguard, ishares, invesco, morningstar } from './data/us'

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
    type: faker.random.arrayElement(['EU']),
    vanguard: '',
    category: '',
    pageviews: faker.random.number({ min: 300, max: 500 })
  })
}

const array1 = [etfs, stock, bond, spdr, vanguard, ishares, invesco, ark, morningstar, currency]
array1.map(item => {
  for (let i = 0; i < item.length; i++) {
    articleList.push({
      id: i,
      status: faker.random.arrayElement(['published', 'draft']),
      name: item[i].etf,
      title: item[i].name,
      tag: item[i].tag,
      abstractContent: faker.lorem.sentences(2),
      fullContent: mockFullContent,
      sourceURL: faker.internet.url(),
      imageURL: faker.image.imageUrl(),
      timestamp: faker.date.past().getTime(),
      platforms: [faker.random.arrayElement(['a-platform', 'b-platform', 'c-platform'])],
      disableComment: faker.random.boolean(),
      importance: item[i].star,
      issuer: item[i].issuer,
      reviewer: faker.name.findName(),
      type: item[i].type,
      vanguard: '',
      category: item[i].category,
      pageviews: faker.random.number({ min: 300, max: 500 })
    })
  }
})

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
    vanguard: countries[i].vanguard,
    category: '',
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
