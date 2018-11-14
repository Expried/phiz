Page({
    data: {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: true,
        grids: [0, 1, 2, 3],
        autoplay: false,
        circular: true,
        interval: 2000,
        duration: 500,
        previousMargin: 0,
        nextMargin: 0,
        imgUrls: [
            "http://www.17qq.com/img_biaoqing/81259733.jpeg",
            "http://p0.ifengimg.com/pmop/2017/1207/ED0B61A550CC988E37CEE4E30FB5D61E79F4C495_size14_w440_h321.jpeg",
            "http://pic.bkill.com/img/download/20170922170905418.jpg"
        ]
    },
    changeProperty: function(e) {
        var propertyName = e.currentTarget.dataset.propertyName
        var newData = {}
        newData[propertyName] = e.detail.value
        this.setData(newData)
    },
    changeIndicatorDots: function(e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function(e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function(e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function(e) {
        this.setData({
            duration: e.detail.value
        })
    },
    previewImage: function(e) {
 
        wx.previewImage({
            current: 'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171207/7cc4f52987f44500b8829bf043b814d3.jpeg', // 当前显示图片的http链接
            urls: ["http://img4.imgtn.bdimg.com/it/u=1898017399,2658767587&fm=26&gp=0.jpg","http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171207/7cc4f52987f44500b8829bf043b814d3.jpeg"] // 需要预览的图片http链接列表
        })
    }

})