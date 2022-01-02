import { findWords } from '@/modules/detect'

import { rIt } from '@/test/utils/testUtil'

rIt(盲目の読みがモウモクになるか)
rIt(清水寺の読みがキヨミズデラになるか)

function 盲目の読みがモウモクになるか () {
  expect(findWords('盲目')).toBe('モウモク')
}

function 清水寺の読みがキヨミズデラになるか () {
    expect(findWords('清水寺')).toBe('セイスイジ')
  }