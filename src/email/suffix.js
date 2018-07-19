import { random } from '../utils/random';

const suffix = {
  list: [
    '@gmail.com','@yahoo.com','@msn.com','@hotmail.com','@aol.com','@ask.com','@live.com','@qq.com',
    '@yeah.net','@googlemail.com','@mail.com','@hotmail.com','@msn.com','@yahoo.com','@gmail.com',
    '@aim.com','@aol.com','@mail.com','@walla.com','@inbox.com','@sina.com','@sohu.com','@yahoo.com.cn',
    '@tom.com','@qq.com','@etang.com','@eyou.com','@x.cn','@chinaren.com','@sogou.com','@citiz.com',
    '@hongkong.com','@ctimail.com','@hknet.com','@netvigator.com','@mail.hk.com','@swe.com.hk','@itccolp.com.hk',
    '@biznetvigator.com','@seed.net.tw','@topmarkeplg.com.tw','@pchome.com.tw','@cyber.net.pk','@libero.it',
    '@webmail.co.za','@xtra.co.nz','@pacific.net.sg','@fastmail.fm','@emirates.net.ae','@eim.ae','@net.sy',
    '@scs-net.org','@mail.sy','@ttnet.net.tr','@superonline.com','@yemen.net.ye','@y.net.ye','@cytanet.com.cy',
    '@aol.com','@netzero.net','@twcny.rr.com','@comcast.net','@warwick.net','@comcast.net','@cs.com',
    '@verizon.net','@bigpond.com','@otenet.gr','@cyber.net.pk','@vsnl.com','@wilnetonline.net','@cal',
    '@rediffmail.com','@sancharnet.in','@ndf.vsnl.net.in','@del','@xtra.co.nz','@yandex.ru','@t-online.de',
    '@netvision.net.il','@bigpond.net.au','@mail.ru','@adsl.loxinfo.com','@scs-net.org','@emirates.net.ae',
    '@qualitynet.net','@zahav.net.il','@netvision.net.il','@xx.org.il','@hn.vnn.vn','@hcm.fpt.vn','@hcm.vnn.vn',
    '@candel.co.jp','@zamnet.zm','@amet.com.ar','@infovia.com.ar','@mt.net.mk','@sotelgui.net.gn','@prodigy.net.mx',
    '@citechco.net','@xxx.meh.es','@terra.es','@wannado.fr','@mindspring.com','@excite.com','@africaonline.co.zw',
    '@samara.co.zw','@zol.co.zw','@mweb.co.zw','@aviso.ci','@africaonline.co.ci','@afnet.net','@mti.gov.na','@namibnet.com',
    '@iway.na','@be-local.com','@infoclub.com.np','@mos.com.np','@ntc.net.np','@kalianet.to','@mail.ru','@dnet.net.id',
    '@sinos.net','@westnet.com.au','@gionline.com.au','@cairns.net.au','@mynet.com','@mt.net.mk','@indigo.ie','@eircom.net',
    '@sbcglobal.net','@ntlworld.com','@nesma.net.sa','@mail.mn','@tiscali.co.uk','@caron.se','@vodamail.co.za','@eunet.at',
    '@spark.net.gr','@swiszcz.com','@club-internet.fr','@walla.com'
  ],
  count: 142
};

const getSuffix = (opts) => {
  if (opts.suffix) {
    return opts.suffix;
  } else {
    return suffix.list[random(0, suffix.count - 1)];
  }
};

export default getSuffix;
