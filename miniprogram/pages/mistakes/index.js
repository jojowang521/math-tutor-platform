Page({
  data: {
    unit: "",
    content: "",
    mistakes: []
  },
  onLoad() {
    this.setData({ mistakes: wx.getStorageSync("mistakes") || [] });
  },
  onUnitInput(event) {
    this.setData({ unit: event.detail.value });
  },
  onContentInput(event) {
    this.setData({ content: event.detail.value });
  },
  saveMistake() {
    if (!this.data.unit || !this.data.content) {
      wx.showToast({ title: "请填写完整", icon: "none" });
      return;
    }
    const mistakes = [
      { id: Date.now(), unit: this.data.unit, content: this.data.content },
      ...this.data.mistakes
    ];
    wx.setStorageSync("mistakes", mistakes);
    this.setData({ mistakes, unit: "", content: "" });
    wx.showToast({ title: "已保存", icon: "success" });
  }
});
