import { emojiMap, emojiName, emojiUrl } from '../../../utils/emojiMap'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    emojiMap: emojiMap,
    emojiName: emojiName,
    emojiUrl: emojiUrl,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooseEmoji(e){
      let data = e.currentTarget.dataset.data;
      this.triggerEvent('chooseEmoji', {data})
    }
  }
})
