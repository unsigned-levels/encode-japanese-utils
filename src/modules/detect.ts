import { readFileSync } from 'fs'
import { join } from 'path'
const loadtxt = (): Record<string, string> => {
  const txt = readFileSync(join(__dirname, '/kanadict-extract.json'), 'utf-8')

  return JSON.parse(txt)
}
export const findWords = (val: string) => {
  return [...val].map((val) => extractYOMI(val)).join('')
}
const extractYOMI = (val: string) => {
  const kanaKanjiArray = loadtxt()
  if (val in kanaKanjiArray) {
    return kanaKanjiArray[val]
  }
  return '?'
}
