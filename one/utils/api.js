Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(),    //day
    "h+": this.getHours(),   //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
    "S": this.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) if (new RegExp("(" + k + ")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
  return format;
}

class API {
  constructor () {
    this.KEY = 'DATAS';
    this.API = 'https://api.hibai.cn/api/index/index';
  }

  /**
   * 解析数据格式
   */
  formatData (data) {
    var new_data = [];
    data.map(function (d) {
      new_data.push({
        id: d.id,
        title: d.vol,
        img_url: d.img_url,
        picture_author: d.img_kind + ' | ' + d.img_author,
        date: d.date.split(' ')[0].replace(/-/g, ' / '),
        content: d.word,
        text_authors: d.word_from
      })
    });
    return new_data;
  }

  /**
   * 获取数据
   */
  getData () {
    return new Promise((RES, REJ) => {
      // 获取缓存
      var HAS_CACHE = this.getCache();
      if (HAS_CACHE !== false) return RES(HAS_CACHE);
      // 请求数据
      var DATAS = new Array(10)[
        { 
          "id": 4831, 
          "title": "VOL.2107", 
          "img_url": "http://image.wufazhuce.com/FlxYkIWt6yzB3p-cAbbPm5w5YdWz", 
          "picture_author": "摄影 | Felix Russell Saw", 
          "date": "2018 / 07 / 14", 
          "content": "所谓人生，大概就是不停滚动，遇见爱，错过爱，接受缺憾吧。", 
          "text_authors": "赫恩曼尼" 
        },
        { 
          "id": 4830,
          "title": "VOL.2106", 
          "img_url": "http://image.wufazhuce.com/Fpdc0BftADUelskTLmsxwtHtwWjz", 
          "picture_author": "摄影 | 王十元", 
          "date": "2018 / 07 / 13", 
          "content": "成天想着自己是不是快乐，是通往抑郁的捷径。", 
          "text_authors": "大将军郭"
        }, 
        { 
          "id": 4829, 
          "title": "VOL.2105", 
          "img_url": "http://image.wufazhuce.com/FrF0m6I_8qJYaFW8YVgMIusuC7AK", 
          "picture_author": "摄影 | 远方", "date": "2018 / 07 / 12", 
          "content": "今天啃芒果的时候想到，水果都是果心最甜果皮最苦，人正好相反，人都是心里最苦脸上最甜。 ​​​ ", 
          "text_authors": "姚瑶" 
        }, 
        { 
          "id": 4827, 
          "title": "VOL.2104", 
          "img_url": "http://image.wufazhuce.com/Frweu_ZAG-jPVP0__-OYgw6I60RE", 
          "picture_author": "摄影 | Teddy Kelley", "date": "2018 / 07 / 11", 
          "content": "人生是单打独斗，住得再近也无法同舟共济。", "text_authors": "张怡微" 
        }, 
        { 
          "id": 4826, 
          "title": "VOL.2103", 
          "img_url": "http://image.wufazhuce.com/Fh5_ZC1UFbnyD1eCv62d-O3jdJKx", 
          "picture_author": "摄影 | Oneice孙一冰", "date": "2018 / 07 / 10", 
          "content": "到了一定的年龄，人生的所有疑惑几乎可以全部浓缩成一个问题：应该如何生活？", 
          "text_authors": "《清单人生》" 
        }, 
        { 
          "id": 4825, 
          "title": "VOL.2102", 
          "img_url": "http://image.wufazhuce.com/Fl5DbCf_E2idcfOXQ-4yYoaTddSb", 
          "picture_author": "摄影 | Sebastian Seck", 
          "date": "2018 / 07 / 09", 
          "content": "再潮湿的记忆，也是生命的燃料。", 
          "text_authors": "刘以鬯" 
        },
        { 
          "id": 4824, 
          "title": "VOL.2101", 
          "img_url": "http://image.wufazhuce.com/FuxZYTjXp67G12598MQeXPGLj7eH", 
          "picture_author": "摄影 | Felix Russell Saw", 
          "date": "2018 / 07 / 08", 
          "content": "如何难过的早上\r\n如何凄楚的晚上\r\n都会结束\r\n\r\n人生总会结束\r\n唯有海不会结束\r\n\r\n感到悲伤的时候\r\n去看大海", 
          "text_authors": "寺山修司" 
        }, 
        { 
          "id": 4823, 
          "title": "VOL.2100", 
          "img_url": "http://image.wufazhuce.com/Frk_5fi3l4VrGzezjo1uYNPI4KKS", 
          "picture_author": "摄影 | Li Hui", 
          "date": "2018 / 07 / 07", 
          "content": "以前我孤单，是因为“一个人”。现在我孤单，却是“因为一个人”。", 
          "text_authors": "大斯《深夜粥铺》" 
        }, 
        { 
          "id": 4822, 
          "title": "VOL.2099", 
          "img_url": "http://image.wufazhuce.com/FpcCD7XLCGTyLcFD1oR5yDzXvVXH", 
          "picture_author": "摄影 | 远方", "date": "2018 / 07 / 06", "content": "世界上根本就没有逃离这一说，只是用一些困难交换另一些困难。",
          "text_authors": "克里斯汀·金博尔" 
        }, 
        { 
          "id": 4821, 
          "title": "VOL.2098", 
          "img_url": "http://image.wufazhuce.com/FoJjWjOiJO-8g2mxu5lPbnmNDYTS", 
          "picture_author": "摄影 | Joakim Honkasalo", 
          "date": "2018 / 07 / 05", 
          "content": "我，爱你的时候明白了，这世上最性感的关系是：男女之间的友情。", 
          "text_authors": "《没关系，是爱情啊》"
        }
      ];
      wx.setStorageSync("datas", DATAS);
    });
  }

  /**
   * 获取本地缓存
   */
  getCache () {
    var datas = wx.getStorageSync(this.KEY);
    if (!datas) return false;
    // 判断时间
    var data = datas[0];
    if (data.date === new Date().format('yyyy / MM / dd')) return datas;
    return false;
  }
}

module.exports = new API();
