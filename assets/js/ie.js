// module.exportsmodule.exports
module.exports = {
  ie: `
  <!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>建筑联盟</title>
      <!-- Bootstrap -->
      <script src="https://sihong-cdn.oss-cn-shanghai.aliyuncs.com/js/jquery.min.js"></script>
      <!--[if lt IE 9]>
        <script src="https://sihong-cdn.oss-cn-shanghai.aliyuncs.com/js/html5shiv.min.js"></script>
        <script src="https://sihong-cdn.oss-cn-shanghai.aliyuncs.com/js/respond.min.js"></script>
      <![endif]-->
      <style type="text/css">
        * {
          margin: 0;
          padding: 0;
        }
        html,body {
          width: 100%;
          height: 100%;
          background-color: #f5f5f5
        }
        .ie-box {
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -300px;
          margin-top: -200px;
          width: 600px;
          height: 400px;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 15px;
        }
        .ie-box h1 {
          margin: 15px auto;
          text-align: center;
          font-size: 32px;
          color: #222;
        }
        .ie-box h2 {
          margin: 15px auto;
          color: #f33;
          font-size: 20px;
          text-align: center;
        }
        .ie-box > p {
          margin: 15px auto;
          color: #333;
          font-size: 16px;
          text-align: center;
        }
        .ie-box ul, .ie-box li {
          list-style: none;
        }
        .ie-box ul {
          margin-top: 40px;
        }
        .ie-box ul li {
          float: left;
          margin: 0 25px;
          width: 120px;
          height: 200px;
          background-color: #fff;
        }
        .ie-box ul li.fr {
          float: right;
          width: 180px;
        }
        .ie-box ul li .icon {
          margin: 0 auto 15px;
          width: 90px;
          height: 90px;
        }
        .ie-box ul li .title {
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          color: #222;
        }
        .ie-box ul li .subtitle {
          text-align: justify;
          margin-top: 15px
          font-size: 12px;
          color: #999;
        }
        .ie-box ul li .subtitle a {
          color: #333;
          text-decoration: none;
          font-size: 14px;
        }
        .ie-box ul li .subtitle a:hover {
          color: #1f95dc;
        }
        .ie-box ul li .subtitle a span{
          color: #1f95dc;
        }
        .ie-box ul li .icon > img {
          /*display: block;*/
          width: 100%;
          height: 100%;
        }
        .ie-box ul li > .qrcode {
          width: 180px;
          height: 180px;
          background-color: #f99;
        }
        .ie-box ul li .qrcode img {
          width: 100%;
          height: auto;
        }
        .ie-box ul li .qrcode .qrcode-title {
          font-size: 14px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="ie-box">
        <h1>抱歉：您的浏览器版本过低</h1>
        <h2>我们已不再对旧版本提供适配支持</h2>
        <p>为了更好的体验及安全性，我们建议您更换为以下浏览器或使用建筑联盟APP</p>
        <ul>
          <li>
              <div class="icon">
                <img src="https://sihongzj-cn.oss-cn-shanghai.aliyuncs.com/static/img/edge.jpg">
              </div>
              <p class="title">Microsoft Edge</p>
              <p class="subtitle">
                <a href="https://c2rsetup.officeapps.live.com/c2r/downloadEdge.aspx?ProductreleaseID=Edge&platform=Default&version=Edge&source=EdgeStablePage&Channel=Stable&language=zh-cn">
                <span>点击下载：</span>最新版微软浏览器，一流的性能体验
              </a>
              </p>
          </li>
          <li>
              <div class="icon">
                <img src="https://sihongzj-cn.oss-cn-shanghai.aliyuncs.com/static/img/chrome.jpg">
              </div>
              <p class="title">Google Chrome</p>
              <p class="subtitle">
                <a href="https://www.google.cn/intl/zh-CN/chrome/" target="_black">
                  <span>立即去下载：</span>全球70%人的选择，谷歌浏览器
                </a>
              </p>
          </li>
          <li class="fr">
            <div class="qrcode">
              <img src="https://sihong-wk.oss-cn-shanghai.aliyuncs.com/assets/img/app_download.png">
              <div class="qrcode-title">扫一扫，下载建筑联盟APP</div>
            </div>
          </li>
        </ul>
      </div>
    </body>
  </html>
  `
}
