//2018-01-29 14:06:21
;
(function() {
    protocol = location.protocol.substr(0, 4) === 'http' ? '' : 'http:';
    document.write("<link rel='stylesheet' type='text/css' href='" + protocol + "//csdnimg.cn/pubfooter/css/pub_footer_1.0.3.css?v=201806111415'/>");
    //document.write("<link rel='stylesheet' type='text/css' href='" + protocol + "//csdnimg.cn/pubfooter/css/iconfont.css' />");
    var isFooterTrack = $("script[data-isfootertrack]").data('isfootertrack');

    // document.write('<script id="noticeScript" type="text/javascript"  btnId="header_notice_num" wrapId="note1" count="5" subcount="5" src="' + protocol + '//csdnimg.cn/rabbit/notev2/js/notify.js?v=5.00.39"></script>');

    //right public footer
    var right_public_footer = '<div class="right_box footer_box csdn-tracking-statistics" data-mod="popu_475" data-dsm="post">\
        <h3 class="feed_new_tit"><span class="line"></span><span class="txt">联系我们</span></h3>\
        <div class="contact-box">\
        <div class="img-box"><img src="//csdnimg.cn/pubfooter/images/csdn_cs_qr.png" alt="客服"></div>\
        <div class="contact-info">\
        <h4>请扫描二维码联系客服</h4>\
        <p><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.167 2h11.666C14.478 2 15 2.576 15 3.286v9.428c0 .71-.522 1.286-1.167 1.286H2.167C1.522 14 1 13.424 1 12.714V3.286C1 2.576 1.522 2 2.167 2zm-.164 3v1L8 10l6-4V5L8 9 2.003 5z" fill="#B3B3B3" fill-rule="evenodd"/></svg><a href="mailto:webmaster@csdn.net" target="_blank"><span class="txt">webmaster@csdn.net</span></a></p>\
<p><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.999 13.355a.603.603 0 0 1-.609.645H1.61a.603.603 0 0 1-.609-.645l.139-1.47c.021-.355.25-.845.51-1.088 0 0 3.107-2.827 3.343-2.909 0 0-.029-2.46 1.2-2.46h3.635c1.112 0 1.202 2.469 1.202 2.469l3.32 2.9c.26.243.489.733.51 1.088l.139 1.47zM7 10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H7zm7.806-5.674c.105.135.191.384.19.554l-.003 2.811c0 .17-.133.26-.295.2l-2.462-.999a.478.478 0 0 1-.296-.416V5.445c0-2.07-7.878-2.225-7.878 0v1.21c0 .17-.135.352-.3.404L1.3 7.904c-.165.052-.3-.044-.3-.213V4.88c0-.17.086-.42.191-.554C1.191 4.326 2.131 2 8 2s6.807 2.326 6.807 2.326z" fill="#B3B3B3"/></svg><span class="txt"> 400-660-0108</span></p>\
        <p><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.496 10.35c-.301-1.705-1.565-2.822-1.565-2.822.18-1.548-.481-1.823-.481-1.823C12.31.915 8.089.998 8 1 7.91.998 3.689.915 3.55 5.705c0 0-.662.275-.481 1.823 0 0-1.264 1.117-1.565 2.822 0 0-.16 2.882 1.445.353 0 0 .36.96 1.022 1.823 0 0-1.183.392-1.083 1.412 0 0-.04 1.136 2.527 1.058 0 0 1.805-.137 2.347-.882h.476c.542.745 2.347.882 2.347.882 2.566.078 2.527-1.058 2.527-1.058.1-1.02-1.083-1.412-1.083-1.412a7.986 7.986 0 0 0 1.022-1.823c1.604 2.529 1.445-.353 1.445-.353z" fill="#B3B3B3" fill-rule="evenodd"/></svg><a href="javascript:void(0);" class="qqcustomer_s"  target="_blank"><span class="txt">QQ客服</span></a>\
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.325 13.965a6.5 6.5 0 1 1 7.175-6.4C14.467 11.677 11.346 15 7.5 15c-.514 0-1.015-.06-1.498-.172.488-.178.922-.48 1.323-.863zM4 7.5a4 4 0 1 0 8 0 .5.5 0 1 0-1 0 3 3 0 1 1-6 0 .5.5 0 0 0-1 0z" fill="#B3B3B3" fill-rule="evenodd"/></svg><a href="http://bbs.csdn.net/forums/Service"><span class="txt">客服论坛</span></a>\
        </p>\
        </div></div>\
        <div class="bg-gray">\
        <div class="feed_copyright">\
        <p><a class="right-dotte" href="//www.csdn.net/company/about.html" target="_blank">关于</a><a href="//www.csdn.net/company/recruit.html" target="_blank" class="right-dotte">招聘</a><a href="//www.csdn.net/company/marketing.html" target="_blank" class="right-dotte">广告服务</a>\
        <a href="https://www.csdn.net/gather/A" target="_blank" class="footer_baidu">\
        网站地图</a></p>\
        <p class="fz12">©2018 CSDN版权所有 <a href="http://www.miibeian.gov.cn/" target="_blank" class="ml14">京ICP证09002463号</a></p>\
        <p class="fz12 fz12_baidu"><svg width="13" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M8.392 7.013c1.014 1.454 2.753 2.8 2.753 2.8s1.303 1.017.47 2.98c-.833 1.962-3.876.942-3.876.942s-1.122-.36-2.424-.072c-1.303.291-2.426.181-2.426.181s-1.523.037-1.957-1.888c-.434-1.927 1.52-2.982 1.666-3.161.145-.183 1.159-.873 1.81-1.963.653-1.09 2.608-1.962 3.984.181zm1.23 5.706V9.346H8.64v2.534h-.937s-.3-.044-.356-.285V9.33l-.925.015v2.518s.042.627.925.855h2.277zm-3.685.013V7.951l-.896-.014v1.295H3.987s-1.054.086-1.422 1.28c-.129.798.114 1.266.156 1.368.043.099.383.682 1.238.852h1.978zm-2.433-1.45c-.087-.286.013-.613.057-.741.042-.128.228-.427.61-.54h.855v1.948h-.797s-.555-.029-.725-.668zm6.877-8.775c-.143.909-.865 2.108-1.99 1.962-1.121-.144-1.375-1.16-1.267-2.179C7.214 1.458 8.21.18 9.007.364c.796.18 1.52 1.235 1.374 2.143zm-4.09-.345c0 1.197-.68 2.164-1.52 2.164S3.25 3.36 3.25 2.162C3.25.967 3.932 0 4.77 0c.842 0 1.52.967 1.52 2.162zm4.854 2.09c1.34 0 1.701 1.309 1.701 1.743 0 .438.182 2.29-1.485 2.326-1.667.037-1.737-1.126-1.737-1.96 0-.874.179-2.11 1.52-2.11zm-7.93.581c.045.398.253 2.217-1.27 2.544C.427 7.704-.14 5.947.028 5.124c0 0 .18-1.78 1.412-1.89.98-.085 1.7.986 1.774 1.6z" fill="#999" fill-rule="evenodd"/></svg><em>百度提供支持</em></p>\
        </div>\
        <div class="allow-info-box">\
        <p><a href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202001032100010" target="_blank"><span>经营性网站备案信息</span></a></p>\
        <p><a href="http://www.cyberpolice.cn/" target="_blank"><span>网络110报警服务</span></a></p>\
        <p><a href="http://www.12377.cn/" target="_blank"><span>中国互联网举报中心</span></a></p>\
        <p><a href="http://www.bjjubao.org/" target="_blank"><span>北京互联网违法和不良信息举报中心</span></a></p>\
        </div>\
        </div>\
        </div>';



    var ask_r_wrap = document.getElementsByClassName("persion_article");
    var public_footer_wrap = document.getElementsByClassName("public_pc_right_footer2018");

    if ($(ask_r_wrap).length > 0) {
        $(ask_r_wrap).append(right_public_footer);
    }else if($(public_footer_wrap).length > 0){
        $(public_footer_wrap).append(right_public_footer);
    }





    if (typeof isFooterTrack == 'undefined' || isFooterTrack == null) {
        var head = document.getElementsByTagName('head')[0],
            s, ss = [
                protocol + '//csdnimg.cn/pubfooter/js/tracking-1.0.2.js', protocol + '//csdnimg.cn/rabbit/exposure-click/main-1.0.2.js'
            ];

        for (var i = 0; i < ss.length; i++) {
            s = document.createElement('script')
            s.type = 'text/javascript';
            s.charset = 'utf-8';
            s.src = ss[i];
            head.insertBefore(s, null);
        }
    }


}());

// add QQ customer service
$(function(){
    $(".qqcustomer_s").click(function(event){
        var qqs = [2431299880, 3456678348, 3455921142];
        var qq = (new Date().getDay() == 0 || new Date().getDay() == 6) ? qqs[0] : qqs[Math.floor(Math.random() * qqs.length)];
        $(this).attr('href','http://wpa.qq.com/msgrd?v=3&uin='+qq+'&site=qq&menu=yes');
    });
});