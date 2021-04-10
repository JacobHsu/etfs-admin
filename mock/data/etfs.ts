// https://www.morningstar.com/
export const etfs = [
  { id: 'AAXJ', tag: '全亞洲不含日本', category: '區域', name: 'iShares MSCI All Country Asia ex Japan ETF', etf: 'AAXJ', issuer: 'iShares', star: 2, type: 'ETF' },
  { id: 'ACWI', tag: '全世界', category: '區域', name: 'iShares MSCI ACWI ETF', etf: 'ACWI', issuer: 'iShares', star: 3, type: 'ETF' },
  { id: 'AFK', tag: '非洲指數', category: '區域', name: 'VanEck Vectors Africa ETF', etf: 'AFK', issuer: 'VanEck', star: 0, type: 'ETF' },
  { id: 'AIA', tag: '亞洲50指數', category: '區域', name: 'iShares Asia 50 ETF', etf: 'AIA', issuer: 'iShares', star: 4, type: 'ETF' },
  { id: 'ASEA', tag: '東南亞指數', category: '區域', name: 'Global X FTSE Southeast Asia ETF', etf: 'ASEA', issuer: 'Global X', index: 'FTSE/ASEAN 40 Index', star: 1, type: 'ETF' },
  { id: 'ASHR', tag: '滬深300中國A股', category: '區域', name: 'Xtrackers Harvest CSI 300 China A', etf: 'ASHR', issuer: 'DWS', star: 3, type: 'ETF' },
  { id: 'BKF', tag: '金磚四國', category: '區域', name: 'iShares MSCI BRIC ETF', etf: 'BKF', issuer: 'iShares', index: 'MSCI BRIC Index', star: 3, type: 'ETF' },
  { id: 'BUZZ', tag: '網路聲量股', category: '產業', name: 'VanEck Vectors Social Sentiment ETF', etf: 'BUZZ', issuer: 'VanEck', star: 0, type: 'ETF' },
  { id: 'CHIC', tag: '中國通訊', category: '產業', name: 'Global X MSCI China Comm Services ETF', etf: 'CHIC', issuer: 'Global X', star: 2, type: 'ETF' },
  { id: 'COPX', tag: '銅礦', category: '資源', name: 'Global X Copper Miners ETF', etf: 'COPX', issuer: 'Global X', star: 2, type: 'ETF' },
  { id: 'CPER', tag: '銅價指數', category: '資源', name: 'United States Copper Index', etf: 'CPER', issuer: 'United States', star: 0, type: 'ETF' },
  { id: 'DIA', tag: '道瓊工業平均指數', category: '指數', name: 'SPDR Dow Jones Industrial Average ETF', etf: 'DIA', issuer: 'SPDR', index: 'Dow Jones Industrial Average', star: 5, type: 'ETF' },
  { id: 'EEM', tag: '新興市場', category: '區域', name: 'iShares MSCI Emerging Markets ETF', etf: 'EEM', issuer: 'iShares', star: 3, type: 'ETF' },
  { id: 'EFA', tag: '歐澳遠東', category: '區域', name: 'iShares MSCI EAFE ETF', etf: 'EFA', issuer: 'iShares', star: 3, type: 'ETF' },
  { id: 'EMB', tag: '新興市場債', category: '債券', name: 'iShares JP Morgan USD Emerging Markets', etf: 'EMB', issuer: 'iShares', star: 4, type: 'ETF' },
  { id: 'ESGV', tag: 'ESG永續', category: '產業', name: 'Vanguard ESG U.S. Stock ETF', etf: 'ESGV', issuer: 'Vanguard', star: 0, type: 'ETF' },
  { id: 'ESPO', tag: '電競', category: '產業', name: 'VanEck Vectors Video Gaming and eSports ETF', etf: 'ESPO', issuer: 'VanEck', star: 0, type: 'ETF' },
  { id: 'FDN', tag: '網路股指數', category: '指數', name: 'First Trust DJ Internet Index F', etf: 'FDN', issuer: 'First Trust', star: 3, type: 'ETF' },
  { id: 'FLZA', tag: '富時南非', category: '區域', name: 'Franklin FTSE South Africa ETF', etf: 'FLZA', issuer: 'Franklin', index: 'FTSE/JSE South Africa Capped Index', star: 0, type: 'ETF' },
  { id: 'FM', tag: '邊境市場', category: '區域', name: 'MSCI Frontier Markets 100 Index', etf: 'FM', issuer: 'iShares', star: 1, type: 'ETF' },
  { id: 'FXI', tag: '中國大型股', category: '區域', name: 'iShares China Large-Cap ETF', etf: 'FXI', issuer: 'iShares', star: 2, type: 'ETF' },
  { id: 'GDX', tag: '金礦指數', category: '資源', name: 'VanEck Vectors Gold Miners ETF', etf: 'GDX', issuer: 'VanEck', star: 3, type: 'ETF' },
  { id: 'GLD', tag: '黃金', category: '資源', name: 'SPDR Gold Shares ETF', etf: 'GLD', issuer: 'SPDR', star: 0, type: 'ETF' },
  { id: 'GXC', tag: '中國', category: '區域', name: 'SPDR S&P China ETF', etf: 'GXC', issuer: 'SPDR', star: 3, type: 'ETF' },
  { id: 'IBB', tag: '納斯達克生技', category: '產業', name: 'iShares Nasdaq Biotechnology ETF', etf: 'IBB', issuer: 'iShares', star: 3, type: 'ETF' },
  { id: 'IEO', tag: '油氣探勘', category: '產業', name: 'iShares US Oil & Gas Explor & Prod ETF', etf: 'IEO', issuer: 'iShares', star: 3, type: 'ETF' },
  { id: 'ITA', tag: '航太與國防', category: '產業', name: 'iShares U.S. Aerospace & Defense ETF', etf: 'ITA', issuer: 'iShares', star: 3, type: 'ETF' },
  { id: 'IYT', tag: '運輸指數', category: '產業', name: 'iShares Transportation Average ETF', etf: 'IYT', issuer: 'iShares', star: 3, type: 'ETF' },
  { id: 'IXC', tag: '全球能源', category: '產業', name: 'iShares Global Energy ETF', etf: 'IXC', issuer: 'iShares', star: 5, type: 'ETF' },
  { id: 'ITA', tag: '美國航太與國防', category: '產業', name: 'iShares US Aerospace & Defense ETF', etf: 'ITA', issuer: 'iShares', star: 3, type: 'ETF' },
  { id: 'KWEB', tag: '中國網路', category: '產業', name: 'KraneShares CSI China Internet ETF', etf: 'KWEB', issuer: 'KraneShares', star: 3, type: 'ETF' },
  { id: 'MGC', tag: '美國大型股', category: '產業', name: 'Vanguard Mega Cap ETF', etf: 'MGC', issuer: 'iShares', star: 5, type: 'ETF' },
  { id: 'NOBL', tag: '股息貴族', category: '產業', name: 'ProShares S&P 500 Dividend Aristocrats ETF', etf: 'NOBL', issuer: 'iShares', star: 2, type: 'ETF' },
  { id: 'NULG', tag: '大型成長股', category: '產業', name: 'Nuveen ESG Large-Cap Growth ETF', etf: 'NULG', issuer: 'iShares', star: 4, type: 'ETF' },
  { id: 'POTX', tag: '大麻', category: '產業', name: 'Global X Cannabis ETF', etf: 'POTX', issuer: 'iShares', star: 0, type: 'ETF' },
  { id: 'PPA', tag: '航空國防', category: '產業', name: 'Invesco Aerospace & Defense ETF', etf: 'PPA', issuer: 'Invesco', star: 4, type: 'ETF' },
  { id: 'QQQ', tag: '納斯達克100', category: '指數', name: 'Invesco QQQ Trust ETF', etf: 'QQQ', issuer: 'iShares', star: 5, type: 'ETF' },
  { id: 'REZ', tag: '住宅', category: '產業', name: 'iShares Residential Real Estate ETF', etf: 'REZ', issuer: 'iShares', star: 4, type: 'ETF' },
  { id: 'RTH', tag: '零售業', category: '產業', name: 'VanEck Vectors Retail ETF', etf: 'RTH', issuer: 'VanEck', star: 4, type: 'ETF' },
  { id: 'SDIV', tag: '高股利', category: '指數', name: 'Global X Superdividend ETF', etf: 'SDIV', issuer: 'Global X', index: 'Solactive Global SuperDividend Index', star: 1, type: 'ETF' },
  { id: 'SIL', tag: '銀礦', category: '資源', name: 'Global X Silver Miners ETF', etf: 'SIL', issuer: 'Global X', star: 2, type: 'ETF' },
  { id: 'SLV', tag: '白銀', category: '資源', name: 'iShares Silver ETF', etf: 'SLV', issuer: 'iShares', star: 0, type: 'ETF' },
  { id: 'SLX', tag: '鋼鐵', category: '資源', name: 'VanEck Vectors Steel ETF', etf: 'SLX', issuer: 'VanEck', star: 3, type: 'ETF' },
  { id: 'SMH', tag: '半導體', category: '產業', name: 'VanEck Vectors Semiconductor ETF', etf: 'SMH', issuer: 'VanEck', star: 5, type: 'ETF' },
  { id: 'SOCL', tag: '社群媒體', category: '產業', name: 'Global X Social Media ETF', etf: 'SOCL', issuer: '"Global X', star: 3, type: 'ETF' },
  { id: 'SOXX', tag: '半導體', category: '產業', name: 'iShares PHLX Semiconductor ETF', etf: 'SOXX', issuer: 'iShares', star: 5, type: 'ETF' },
  { id: 'SPY', tag: '標普500', category: '指數', name: 'SPDR S&P 500 ETF', etf: 'SPY', issuer: 'SPDR', star: 2, type: 'ETF' },
  { id: 'TAN', tag: '太陽能', category: '資源', name: 'Invesco Solar ETF', etf: 'TAN', issuer: 'Invesco', star: 0, type: 'ETF' },
  { id: 'UNG', tag: '天然氣', category: '資源', name: 'United States Natural Gas', etf: 'UNG', issuer: 'United States', star: 0, type: 'ETF' },
  { id: 'USO', tag: '石油', category: '資源', name: 'United States Oil', etf: 'USO', issuer: 'United States', star: 0, type: 'ETF' },
  { id: 'VEA', tag: '成熟市場', category: '產業', name: 'Vanguard FTSE Developed Markets ETF', etf: 'VEA', issuer: 'Vanguard', star: 4, type: 'ETF' },
  { id: 'VEGI', tag: '農業生產商', category: '產業', name: 'iShares MSCI Global Agricltr Prdcrs ETF', etf: 'VEGI', issuer: 'iShares', star: 4, type: 'ETF' },
  { id: 'VEU', tag: '成熟市場', category: '產業', name: 'Vanguard FTSE All-Wld ex-US ETF', etf: 'VEU', issuer: 'Vanguard', star: 4, type: 'ETF' },
  { id: 'VGK', tag: '歐洲', category: '區域', name: 'Vanguard FTSE Europe ETF', etf: 'VGK', issuer: 'Vanguard', star: 3, type: 'ETF' },
  { id: 'VIG', tag: '股息增值', category: '產業', name: 'Vanguard Dividend Appreciation ETF', etf: 'VIG', issuer: 'Vanguard', star: 3, type: 'ETF' },
  { id: 'VIGI', tag: '國際股利增值', category: '產業', name: 'Vanguard Intl Div Apprec ETF', etf: 'VIGI', issuer: 'Vanguard', star: 3, type: 'ETF' },
  { id: 'VOO', tag: '標普500', category: '指數', name: 'Vanguard S&P 500 ETF', etf: 'VOO', issuer: 'ProShares', star: 5, type: 'ETF' },
  { id: 'VOT', tag: '中型成長', category: '指數', name: 'Vanguard Mid-Cap Growth ETF', etf: 'VOT', issuer: 'Vanguard', index: 'CRSP US Mid Cap Growth Index', star: 3, type: 'ETF' },
  { id: 'VPL', tag: '太平洋', category: '區域', name: 'Vanguard FTSE Pacific ETF', etf: 'VPL', issuer: 'Vanguard', star: 3, type: 'ETF' },
  { id: 'VT', tag: '全世界', category: '區域', name: 'Vanguard Total World Stock ETF', etf: 'VT', issuer: 'Vanguard', star: 3, type: 'ETF' },
  { id: 'VTI', tag: '整體股市', category: '區域', name: 'Vanguard Total Stock Market ETF', etf: 'VTI', issuer: 'Vanguard', star: 4, type: 'ETF' },
  { id: 'VTV', tag: '價值股', category: '指數', name: 'Vanguard Value ETF', etf: 'VTV', issuer: 'Vanguard', star: 4, type: 'ETF' },
  { id: 'VUG', tag: '成長股', category: '指數', name: 'Vanguard Growth ETF', etf: 'VUG', issuer: 'Vanguard', star: 4, type: 'ETF' },
  { id: 'VWO', tag: '新興市場', category: '區域', name: 'Vanguard FTSE Emerging Markets ETF', etf: 'VWO', issuer: 'Vanguard', star: 3, type: 'ETF' },
  { id: 'VXUS', tag: '總體國際股票', category: '區域', name: 'Vanguard Total International Stock ETF', etf: 'VXUS', issuer: 'Vanguard', star: 3, type: 'ETF' },
  { id: 'VYM', tag: '高股利', category: '指數', name: 'Vanguard High Dividend Yield ETF', etf: 'VYM', issuer: 'Vanguard', star: 4, type: 'ETF' }
]
