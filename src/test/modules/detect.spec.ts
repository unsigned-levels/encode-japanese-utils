import { findWords } from '@/modules/detect'

import { rIt } from '@/test/utils/testUtil'

rIt(盲目の読みがモウモクになるか)
rIt(清水寺の読みがセイスイジになるか)

function 盲目の読みがモウモクになるか () {
  expect(findWords('盲目')).toBe('モウモク')
}

function 清水寺の読みがセイスイジになるか () {
  expect(findWords('清水寺')).toBe('セイスイジ')
}
