import faker from 'faker'
import { Response, Request } from 'express'
import { IArticleData } from '../src/api/types'

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

// https://www.morningstar.com/
const etfs = [
  { id: 'AAXJ', tag: '全亞洲不含日本', name: 'iShares MSCI All Country Asia ex Japan ETF', etf: 'AAXJ', issuer: 'iShares', star: 2 },
  { id: 'AFK', tag: '非洲指數', name: 'VanEck Vectors Africa ETF', etf: 'AFK', issuer: 'VanEck', star: 0 },
  { id: 'AIA', tag: '亞洲50指數', name: 'iShares Asia 50 ETF', etf: 'AIA', issuer: 'iShares', star: 4 },
  { id: 'ANGL', tag: '高收益債券', name: 'VanEck Vectors Fallen Angel High Yield Bond ETF', etf: 'ANGL', issuer: 'VanEck', star: 5 },
  { id: 'ASEA', tag: '東南亞指數', name: 'Global X FTSE Southeast Asia ETF', etf: 'ASEA', issuer: 'Global X', star: 1 },
  { id: 'ASHR', tag: '滬深300中國A股', name: 'Xtrackers Harvest CSI 300 China A', etf: 'ASHR', issuer: 'DWS', star: 3 },
  { id: 'AWAY', tag: '旅游科技', name: 'ETFMG Travel Tech ETF', etf: 'AWAY', issuer: '', star: 0 },
  { id: 'BKF', tag: '金磚四國', name: 'iShares MSCI BRIC ETF', etf: 'BKF', issuer: 'iShares', star: 3 },
  { id: 'BLV', tag: '長期債券', name: 'Vanguard Long-Term Bond ETF', etf: 'BLV', issuer: 'Vanguard', star: 3 },
  { id: 'BND', tag: '總體債券市場', name: 'Vanguard Total Bond Market ETF', etf: 'BND', issuer: 'Vanguard', star: 3 },
  { id: 'BNDX', tag: '國際債券', name: 'Vanguard Total International Bond ETF', etf: 'BNDX', issuer: 'Vanguard', star: 3 },
  { id: 'BWX', tag: '國際政府債券', name: 'SPDR Bloomberg Barclays International Treasury Bond ETF', etf: 'BWX', issuer: 'SPDR', star: 3 },
  { id: 'COPX', tag: '銅礦', name: 'Global X Copper Miners ETF', etf: 'COPX', issuer: 'Global X', star: 2 },
  { id: 'DBB', tag: '基本金屬', name: 'Invesco DB Base Metals Fund', etf: 'DBB', issuer: 'Invesco', star: 0 },
  { id: 'DBC', tag: '原物料', name: 'Invesco DB Commodity Index Tracking Fund', etf: 'Invesco', issuer: 'Invesco', star: 2 },
  { id: 'DIA', tag: '道瓊工業平均指數', name: 'SPDR Dow Jones Industrial Average ETF', etf: 'DIA', issuer: 'SPDR', star: 5 },
  { id: 'DOG', tag: '看空道瓊30指數', name: 'ProShares Short Dow30', etf: 'DOG', issuer: 'ProShares', star: 0 },
  { id: 'EBND', tag: '新興市場當地債券', name: 'SPDR Bloomberg Barclays Emerging Markets Local Bond ETF', etf: 'EBND', issuer: 'SPDR', star: 4 },
  { id: 'EEM', tag: '新興市場', name: 'iShares MSCI Emerging Markets ETF', etf: 'EEM', issuer: 'iShares', star: 3 },
  { id: 'EFA', tag: '歐澳遠東', name: 'iShares MSCI EAFE ETF', etf: 'EFA', issuer: 'iShares', star: 3 },
  { id: 'EMB', tag: '新興市場債', name: 'iShares JP Morgan USD Emerging Markets', etf: 'EMB', issuer: 'iShares', star: 4 },
  { id: 'ESGV', tag: 'ESG永續', name: 'Vanguard ESG U.S. Stock ETF', etf: 'ESGV', issuer: 'Vanguard', star: 0 },
  { id: 'ESPO', tag: '電競', name: 'VanEck Vectors Video Gaming and eSports ETF', etf: 'ESPO', issuer: 'VanEck', star: 0 },
  { id: 'FDN', tag: '網路股指數', name: 'First Trust DJ Internet Index F', etf: 'FDN', issuer: 'First Trust', star: 3 },
  { id: 'FINX', tag: '金融科技', name: 'Find the latest Global X FinTech ETF', etf: 'FINX', issuer: 'Global X', star: 2 },
  { id: 'FLZA', tag: '富時南非', name: 'Franklin FTSE South Africa ETF', etf: 'FLZA', issuer: 'Franklin', star: 0 },
  { id: 'FM', tag: '邊境市場', name: 'MSCI Frontier Markets 100 Index', etf: 'FM', issuer: 'iShares', star: 1 },
  { id: 'FXA', tag: '澳幣', name: 'Invesco CurrencyShares Australian Dollar ETF', etf: 'FXA', issuer: 'Invesco', star: 0 },
  { id: 'FXB', tag: '英鎊', name: 'Invesco CurrencyShares British Pound ETF', etf: 'FXB', issuer: 'Invesco', star: 0 },
  { id: 'FXE', tag: '歐元', name: 'Invesco CurrencyShares Euro Cur ETF', etf: 'FXE', issuer: 'Invesco', star: 0 },
  { id: 'FXI', tag: '中國大型股', name: 'iShares China Large-Cap ETF', etf: 'FXI', issuer: 'iShares', star: 2 },
  { id: 'FXY', tag: '日圓', name: 'Invesco CurrencyShares Japanese Yen Trust ETF', etf: 'FXY', issuer: 'Invesco', star: 0 }

]

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
