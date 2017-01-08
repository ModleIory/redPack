//这两个也是没有必要写这种,被初始化后就不会再用的东西了,但是还是存在store里面的原则嘛,都不会经过这里
export const BACKGROUND_CHANGE = 'BACKGROUND_CHANGE'
export const SENTENCE_CHANGE = 'SENTENCE_CHANGE'

//改变颜色
export const START_RECORD_CHANGE = "START_RECORD_CHANGE"
export const END_RECORD_CHANGE = "END_RECORD_CHANGE"
//滑动改变句子
export const CURRENT_SENTENCE_SAVE = "CURRENT_SENTENCE_SAVE"