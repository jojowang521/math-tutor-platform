Page({
  data: {
    books: [
      { title: "三年级上册", stage: "第一阶段", desc: "时间、万以内加减、测量、乘法、倍、周长、分数初步。", enabled: true },
      { title: "三年级下册", stage: "第一阶段", desc: "除法竖式、两位数乘两位数、面积、年月日、小数初步。", enabled: false },
      { title: "四年级上册", stage: "第二阶段", desc: "大数认识、角、三位数乘两位数、平行与垂直、两位数除法。", enabled: false },
      { title: "四年级下册", stage: "第二阶段", desc: "四则运算、运算定律、小数意义、三角形、小数加减。", enabled: false },
      { title: "五年级上册", stage: "第三阶段", desc: "小数乘除、简易方程、多边形面积、可能性与植树问题。", enabled: false },
      { title: "五年级下册", stage: "第四阶段", desc: "因数倍数、长方体正方体、分数意义和分数加减。", enabled: false }
    ]
  },
  openBook(event) {
    const book = this.data.books[event.currentTarget.dataset.index];
    if (!book.enabled) {
      wx.showToast({ title: "后续整理", icon: "none" });
      return;
    }
    wx.navigateTo({ url: "/pages/grade3-vol1/index" });
  }
});
