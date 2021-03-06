var WxParse = require("../../wxParse/wxParse.js");
const app = getApp()

Page({
  data: {
    poetryData: [
    	{
    		"poetryName": "如果有来生",
    		"poetryAuthor": "三毛",
    		"poetryCon": "如果有来生，<br/>要做一棵树，<br/>站成永恒。<br/>没有悲欢的姿势，<br/>一半在尘土里安详，<br/>一半在风里飞扬；<br/>一半洒落荫凉，<br/>一半沐浴阳光。非常沉默、非常骄傲。<br/>从不依靠、从不寻找。<br/><br/>如果有来生，要化成一阵风，<br/>一瞬间也能成为永恒。<br/>没有善感的情怀，没有多情的眼睛。<br/>一半在雨里洒脱，<br/>一半在春光里旅行；<br/>寂寞了，孤自去远行，<br/>把淡淡的思念统带走，<br/>从不思念、从不爱恋；<br/><br/>如果有来生，要做一只鸟，<br/>飞越永恒，没有迷途的苦恼。<br/>东方有火红的希望，<br/>南方有温暖的巢床，<br/>向西逐退残阳，向北唤醒芬芳。<br/>如果有来生，<br/>希望每次相遇，<br/>都能化为永恒。"
    	},
    	{
    		"poetryName": "再别康桥",
    		"poetryAuthor": "徐志摩",
    		"poetryCon": "轻轻的我走了，<br/>正如我轻轻的来；<br/>我轻轻的招手，<br/>作别西天的云彩。<br/><br/>那河畔的金柳，<br/>是夕阳中的新娘；<br/>波光里的艳影，<br/>在我的心头荡漾。<br/><br/>软泥上的青荇，<br/>油油的在水底招摇；<br/>在康河的柔波里，<br/>我甘心做一条水草！<br/><br/>那榆荫下的一潭，<br/>不是清泉，<br/>是天上虹；<br/>揉碎在浮藻间，<br/>沉淀着彩虹似的梦。<br/><br/>寻梦？<br/>撑一支长篙，<br/>向青草更青处漫溯；<br/>满载一船星辉，<br/>在星辉斑斓里放歌。<br/><br/>但我不能放歌，<br/>悄悄是别离的笙箫；<br/>夏虫也为我沉默，<br/>沉默是今晚的康桥！<br/><br/>悄悄的我走了，<br/>正如我悄悄的来；<br/>我挥一挥衣袖，<br/>不带走一片云彩。"
    	},
    	{
    		"poetryName": "雨巷",
    		"poetryAuthor": "戴望舒",
    		"poetryCon": "撑着油纸伞，<br/>独自<br/>彷徨在悠长、<br/>悠长<br/>又寂寥的雨巷<br/>我希望逢着<br/>一个丁香一样地<br/>结着愁怨的姑娘<br/>她是有<br/>丁香一样的颜色<br/>丁香一样的芬芳<br/>丁香一样的忧愁<br/>在雨中哀怨<br/>哀怨又彷徨<br/>她彷徨在这寂寥的雨巷<br/>撑着油纸伞<br/>像我一样<br/>像我一样地<br/>默默彳亍着<br/>寒漠、<br/>凄清，<br/>又惆怅<br/>她默默地走近<br/>走近，<br/>又投出<br/>太息一般的眼光<br/>她飘过<br/>像梦一般地<br/>像梦一般地凄婉迷茫<br/>像梦中飘过<br/>一枝丁香地<br/>我身旁飘过这女郎<br/>她静默地远了、<br/>远了<br/>到了颓圮的篱墙<br/>走尽这雨巷<br/>在雨的哀曲里<br/>消了她的颜色<br/>散了她的芬芳<br/>消散了，<br/>甚至她的<br/>太息般的眼光<br/>丁香般的惆怅<br/>撑着油纸伞，<br/>独自<br/>彷徨在悠长、<br/>悠长<br/>又寂寥的雨巷<br/>我希望飘过<br/>一个丁香一样地<br/>结着愁怨的姑娘"
    	},
    	{
    		"poetryName": "远和近",
    		"poetryAuthor": "顾城",
    		"poetryCon": "你<br/>一会看我<br/>一会看云<br/>我觉得<br/>你看我时很远<br/>你看云时很近"
    	},
    	{
    		"poetryName": "致橡树",
    		"poetryAuthor": "舒婷",
    		"poetryCon": "我如果爱你——<br/>绝不像攀援的凌霄花，<br/>借你的高枝炫耀自己；<br/>我如果爱你——<br/>绝不学痴情的鸟儿，<br/>为绿荫重复单调的歌曲；<br/>也不止像泉源，<br/>常年送来清凉的慰藉；<br/>也不止像险峰，<br/>增加你的高度，<br/>衬托你的威仪。<br/>甚至日光，<br/>甚至春雨。<br/>不，<br/>这些都还不够！<br/>我必须是你近旁的一株木棉，<br/>作为树的形象和你站在一起。<br/>根，<br/>紧握在地下；<br/>叶，<br/>相触在云里。<br/>每一阵风过，<br/>我们都互相致意，<br/>但没有人，<br/>听懂我们的言语。<br/>你有你的铜枝铁干，<br/>像刀，<br/>像剑，<br/>也像戟；<br/>我有我红硕的花朵，<br/>像沉重的叹息，<br/>又像英勇的火炬。<br/>我们分担寒潮、<br/>风雷、<br/>霹雳；<br/>我们共享雾霭、<br/>流岚、<br/>虹霓。<br/>仿佛永远分离，<br/>却又终身相依。<br/>这才是伟大的爱情，<br/>坚贞就在这里：<br/>爱——<br/>不仅爱你伟岸的身躯，<br/>也爱你坚持的位置，<br/>足下的土地。"
    	},
    	{
    		"poetryName": "面朝大海，春暖花开",
    		"poetryAuthor": "海子",
    		"poetryCon": "从明天起，做一个幸福的人<br/>喂马，劈柴，周游世界<br/>从明天起，关心粮食和蔬菜<br/>我有一所房子，面朝大海，春暖花开<br/><br/>从明天起，和每一个亲人通信<br/>告诉他们我的幸福<br/>那幸福的闪电告诉我的<br/>我将告诉每一个人<br/><br/>给每一条河每一座山取一个温暖的名字<br/>陌生人，我也为你祝福<br/>愿你有一个灿烂的前程<br/>愿你有情人终成眷属<br/>愿你在尘世获的幸福<br/>我也愿面朝大海，春暖花开"
    	},
    	{
    		"poetryName": "断章",
    		"poetryAuthor": "卞之琳",
    		"poetryCon": "你站在桥上看风景，<br/>看风景人在楼上看你。<br/>明月装饰了你的窗子，<br/>你装饰了别人的梦。"
    	},
    	{
    		"poetryName": "你是人间的四月天",
    		"poetryAuthor": "林徽因",
    		"poetryCon": "我说你是人间的四月天；<br/>笑响点亮了四面风；轻灵<br/>在春的光艳中交舞着变。<br/><br/>你是四月早天里的云烟，<br/>黄昏吹着风的软，星子在<br/>无意中闪，细雨点洒在花前。<br/><br/>那轻，那娉婷你是，鲜妍<br/>百花的冠冕你戴着，你是<br/>天真，庄严，你是夜夜的月圆。<br/><br/>雪化后那篇鹅黄，你象；新鲜<br/>初放芽的绿，你是；柔嫩喜悦<br/>水光浮动着你梦期待中白莲。<br/><br/>你是一树一树的花开，是燕<br/>在梁间呢喃，——你是爱，是暖，<br/>是希望，你是人间的四月天！"
    	},
    	{
    		"poetryName": "你曾经是我的舞伴",
    		"poetryAuthor": "林希",
    		"poetryCon": "你曾经是我的舞伴<br/>我们踩着水一般清澈的华尔兹舞曲<br/>在冰一般平滑的地板上旋转<br/>那时，我像女孩子一样羞怯<br/>你，又比男孩子还要大胆<br/><br/>你曾经是我的舞伴<br/>纷扬的彩色纸条飘下来<br/>缠住了我们的双肩<br/>我想把它拨开<br/>你说：缠着吧<br/>直到永远，永远<br/><br/>啊，我真悔恨<br/>悔恨我竟把舞步踏乱<br/>那一声声温暖的节奏<br/>敲碎了我心上平静的水面<br/>我多么希望那乐曲再重复演奏一次<br/>那乐曲里有一个音符<br/>曾把我们的心弦拨颤<br/><br/>而最后<br/>那缠绕着我们的绚丽纸条终于裂断<br/>当旋律随夜风徐徐飘散<br/>我悔恨又为什么分别得这样仓促<br/>竟没有来得及说一声再见<br/>只把那一个音符<br/>留你心中一半<br/>留我心中一半"
    	},
    	{
    		"poetryName": "本事",
    		"poetryAuthor": "卢冀野（卢前）",
    		"poetryCon": "记得当时年纪小，<br/>我爱谈天你爱笑。<br/>有一回并肩坐在桃树下，<br/>风在林梢鸟在叫。<br/>我们不知怎样困觉了，<br/>梦里花儿落多少。"
    	},
    	{
    		"poetryName": "独白",
    		"poetryAuthor": "汪国真",
    		"poetryCon": "不是我性格开朗<br/>其实我也有许多忧伤<br/>有许失眠的日子吞噬着我<br/>生命从来不是只有辉煌<br/>只是我喜欢笑<br/>喜欢空气新鲜又明亮<br/>我愿意像茶<br/>把苦涩留在心里<br/>散发出来的都是清香"
    	},
    	{
    		"poetryName": "乡愁",
    		"poetryAuthor": "余光中",
    		"poetryCon": "小时候，<br/>乡愁是一枚小小的邮票，<br/>我在这头，<br/>母亲在那头。<br/><br/>长大后，<br/>乡愁是一张窄窄的船票，<br/>我在这头，<br/>新娘在那头。<br/><br/>后来啊，<br/>乡愁是一方矮矮的坟墓，<br/>我在外头，<br/>母亲在里头。<br/><br/>而现在，<br/>乡愁是一湾浅浅的海峡，<br/>我在这头，<br/>大陆在那头。"
    	}
    ],
    curPoetry: null,
    curPoetryCon: null
  },
  onLoad: function(options) {
  	var that = this;
  	var curPoetry = this.data.poetryData[app.requestPoetryId];
 		var temp = WxParse.wxParse("curPoetryCon", "html", that.data.poetryData[app.requestPoetryId].poetryCon, that, 5);
  	this.setData({
      curPoetry: curPoetry,
      curPoetryCon: temp
    })
  },
  onShareAppMessage: function () {
    return {
      title: "现代诗歌精选集",
      path: "/page/user?id=123"
    }
  },
  toPoetryAuthor: function(e) {
    wx.navigateTo({
		  url: "../showPoetryAuthor/poetryAuthor"
		})
  }
})
