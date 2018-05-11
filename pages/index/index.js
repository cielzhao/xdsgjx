//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  	imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度
    imgUrls: [
      "../../images/img1.jpg",
      "../../images/img2.jpg",
      "../../images/img3.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    recommendData: [
    	{
    		"poetryId": "0",
    		"poetryName": "如果有来生",
    		"poetryAuthor": "三毛"
    	},
    	{
    		"poetryId": "1",
    		"poetryName": "再别康桥",
    		"poetryAuthor": "徐志摩"
    	},
    	{
    		"poetryId": "2",
    		"poetryName": "雨巷",
    		"poetryAuthor": "戴望舒"
    	},
    	{
    		"poetryId": "3",
    		"poetryName": "远和近",
    		"poetryAuthor": "顾城"
    	},
    	{
    		"poetryId": "4",
    		"poetryName": "致橡树",
    		"poetryAuthor": "舒婷"
    	},
    	{
    		"poetryId": "5",
    		"poetryName": "面朝大海，春暖花开",
    		"poetryAuthor": "海子"
    	},
    	{
    		"poetryId": "6",
    		"poetryName": "断章",
    		"poetryAuthor": "卞之琳"
    	},
    	{
    		"poetryId": "7",
    		"poetryName": "你是人间的四月天",
    		"poetryAuthor": "林徽因"
    	},
    	{
    		"poetryId": "8",
    		"poetryName": "你曾经是我的舞伴",
    		"poetryAuthor": "林希"
    	},
    	{
    		"poetryId": "9",
    		"poetryName": "本事",
    		"poetryAuthor": "卢冀野（卢前）"
    	},
    	{
    		"poetryId": "10",
    		"poetryName": "独白",
    		"poetryAuthor": "汪国真"
    	},
    	{
    		"poetryId": "11",
    		"poetryName": "乡愁",
    		"poetryAuthor": "余光中"
    	}
    ]
  },
  onShareAppMessage: function () {
    return {
      title: "现代诗歌精选集",
      path: "/page/user?id=123"
    }
  },
  toPoetryDetail: function(e) {
  	var poetryId = e.currentTarget.id;
  	app.requestPoetryId = poetryId;
    wx.navigateTo({
		  url: "../showPoetry/poetry"
		})
  }
})
