'use strict';
/* ============================================================
   MOTO LOOP RUSH - コース定義 (index.html のエンジンから分離)
   依存: CB / finishCourse はエンジン側(index.html)で定義され、
        course 関数は実行時(レース開始時)にのみ呼ばれる。
   難易度ティア:
     1        = 初心者 (谷ゲート0・ニトロ無しでもクリア可)
     2〜4     = 中級   (谷ゲート1〜2・余裕のある制限/潤沢なニトロ)
     5〜6     = 上級   (谷ゲート3〜4・やや厳しめ)
     7〜10    = 超上級 (谷ゲート4〜6・深く間隔狭く補給を絞った地獄)
   ============================================================ */

/* ============ 1. 初心者 ============ */
function course1(){ const b=new CB();
  /* そよかぜヒルズ:操作とジャンプの練習。谷(ピット)は無く、ニトロ無しでも
     クリアできる。ニトロは「あると速い・ループに入れる」お楽しみ要素。 */
  b.flat(440).banner('START',-200).sign('go',-70);
  b.triRow(3,86,32,40);
  b.flat(170).item('T',-80).item('N',-160);
  b.whoops(4,72,24);
  b.flat(160).item('N',-80);
  b.tabletop(170,170,100).item('T',-160,-140);
  b.flat(240).item('N',-180).item('T',-90);
  b.dropLoop(110,150);
  b.flat(240).item('T',-120).item('N',-60,-70);
  b.triRow(3,90,34,34);
  b.flat(220).item('N',-95);
  b.whoops(3,66,22);
  b.flat(220).item('T',-90);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'そよかぜヒルズ',en:'SUNNY HILLS',limit:50,pal:0,seed:11,par:[26,38],
    dk:['tree','bush','flag'], ig:'linear-gradient(135deg,#6cd06e,#2e9e4f)'});
}

/* ============ 2〜4. 中級 ============ */
function course2(){ const b=new CB();
  /* サンセットキャニオン:はじめてのニトロ・ピット(1箇所)。手前のNで補給。 */
  b.flat(410).banner('START',-200).sign('go',-60);
  b.triRow(3,88,36,30);
  b.flat(160).item('N',-75).item('N',-150);
  b.tabletop(170,160,110).item('T',-160,-150);
  b.flat(220).item('N',-100).item('W',-180);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,115); b.pit(170,220);
  b.flat(200).item('N',-70).item('N',-150).item('T',-110);
  b.dropLoop(90,150);
  b.flat(230).item('T',-110);
  b.itemArc('N',3,100,-160,230,60).tri(300,128);
  b.whoops(4,68,26);
  b.flat(220).item('N',-95);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'サンセットキャニオン',en:'SUNSET CANYON',limit:44,pal:1,seed:23,par:[24,34],
    dk:['cactus','rock','flag'], ig:'linear-gradient(135deg,#ff9a4d,#d6452e)'});
}
function course3(){ const b=new CB();
  /* ミッドナイトサーキット:谷2連+大テーブルトップ。中級。 */
  b.flat(420).banner('START',-200).sign('go',-70);
  b.triRow(4,88,36,30);
  b.flat(160).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,118); b.pit(175,240);
  b.flat(170).item('N',-70).item('N',-140);
  b.dropLoop(80,150);
  b.flat(180).item('T',-90).item('W',-40,-70);
  b.tabletop(180,170,120).itemArc('T',3,-300,-150,260,70);
  b.flat(190).item('N',-90).item('N',-170);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,122); b.pit(180,245);
  b.flat(180).item('N',-70).item('T',-150);
  b.whoops(4,66,28);
  b.flat(210).item('N',-95);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ミッドナイトサーキット',en:'MIDNIGHT CIRCUIT',limit:48,pal:2,seed:37,par:[28,40],
    dk:['lamp','rock','flag'], ig:'linear-gradient(135deg,#3a6bff,#1c2a8a)'});
}
function course4(){ const b=new CB();
  /* サンライズ・サミット:谷2連+浮き足場。中級の総仕上げ。 */
  b.flat(420).banner('START',-200).sign('go',-70);
  b.triRow(4,90,38,28);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120); b.pit(180,250);
  b.flat(160).item('N',-70).item('N',-140);
  b.dropLoop(80,150);
  b.flat(160).item('T',-85);
  b.sign('up',30).hintN(10);
  b.plat(300,520,150).platItems(['N','T','N'],3);
  b.rampUp(150,110).cliffDown(110);
  b.flat(200).item('N',-90).item('W',-170);
  b.sign('danger',20).hintN(0);
  b.rampUp(165,125); b.pit(185,255);
  b.flat(170).item('T',-80);
  b.whoops(4,66,30);
  b.flat(200).item('N',-95);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'サンライズ・サミット',en:'SUNRISE SUMMIT',limit:48,pal:3,seed:53,par:[28,40],
    dk:['rock','bush','flag'], ig:'linear-gradient(135deg,#ff6ba3,#8a5fb0)'});
}

/* ============ 5〜6. 上級 ============ */
function course5(){ const b=new CB();
  /* ニトロ・ゴージ:谷3連+ボーナスのニトロループ。やや厳しめ。 */
  b.flat(360).banner('START',-180).sign('go',-70);
  b.triRow(3,90,36,30);
  b.flat(150).item('N',-70).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(155,115); b.pit(180,270);
  b.flat(150).item('N',-65).item('N',-135);
  b.sign('up',30).hintN(0).loop(150);
  b.flat(150).item('N',-80);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120); b.pit(190,275);
  b.flat(150).item('T',-70).item('N',-135);
  b.whoops(3,68,26);
  b.flat(150).item('N',-70);
  b.sign('danger',20).hintN(0);
  b.rampUp(165,125); b.pit(195,280);
  b.flat(160).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ニトロ・ゴージ',en:'NITRO GORGE',limit:40,pal:4,seed:71,par:[24,34],
    dk:['rock','lamp','flag'], ig:'linear-gradient(135deg,#2bf0d0,#0a6e78)'});
}
function course6(){ const b=new CB();
  /* ホッピング・ラッシュ:谷4連+ウーブス連打のリズム。上級。 */
  b.flat(400).banner('START',-190).sign('go',-70);
  b.whoops(5,72,30);
  b.flat(140).item('N',-70).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(155,115); b.pit(180,270);
  b.flat(150).item('N',-70).item('N',-140);
  b.whoops(5,68,30);
  b.flat(130).item('T',-80).item('N',-160);
  b.sign('danger',20).hintN(0);
  b.rampUp(158,118); b.pit(185,275);
  b.flat(150).item('N',-70).item('N',-140);
  b.itemArc('N',3,100,-150,220,60).tri(290,130);
  b.flat(140).item('T',-80).item('N',-160);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120); b.pit(190,280);
  b.flat(150).item('N',-70).item('N',-140);
  b.whoops(5,66,28);
  b.sign('danger',20).hintN(0);
  b.rampUp(162,122); b.pit(192,285);
  b.flat(160).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ホッピング・ラッシュ',en:'HOPPING RUSH',limit:46,pal:0,seed:113,par:[28,40],
    dk:['tree','bush','flag'], ig:'linear-gradient(135deg,#9cff5a,#2e9e4f)'});
}

/* ============ 7〜10. 超上級 ============ */
function course7(){ const b=new CB();
  /* ループ・コースター:谷4連+ループ連発。ループ突入の誘惑にニトロを浪費すると詰む。 */
  b.flat(380).banner('START',-190).sign('go',-70);
  b.triRow(3,90,36,30);
  b.flat(140).item('N',-70).item('N',-150);
  b.sign('up',30).dropLoop(90,150);
  b.flat(120).item('N',-60);
  b.sign('danger',20).hintN(0);
  b.rampUp(158,120); b.pit(190,290);
  b.flat(140).item('N',-65).item('N',-130);
  b.sign('up',30).hintN(0).loop(160);
  b.flat(130).item('N',-75);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,122); b.pit(195,295);
  b.flat(130).item('N',-65).item('T',-120);
  b.sign('up',30).dropLoop(90,170);
  b.flat(140).item('N',-80);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,124); b.pit(198,300);
  b.flat(130).item('N',-65).item('N',-120);
  b.sign('danger',20).hintN(0);
  b.rampUp(165,126); b.pit(200,300);
  b.flat(160).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ループ・コースター',en:'LOOP COASTER',limit:44,pal:5,seed:91,par:[26,38],
    dk:['flag','bush','lamp'], ig:'linear-gradient(135deg,#ff5aa8,#9a66c8)'});
}
function course8(){ const b=new CB();
  /* スカイブリッジ:谷5連+浮き足場の連続。空中でのニトロ操作が連続する。 */
  b.flat(380).banner('START',-190).sign('go',-70);
  b.triRow(3,88,38,28);
  b.flat(140).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(158,118); b.pit(185,290);
  b.flat(130).item('N',-65).item('N',-125);
  b.sign('up',30).hintN(10);
  b.plat(270,440,150).platItems(['N','T','N'],3);
  b.rampUp(150,110).cliffDown(110);
  b.flat(120).item('N',-80);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120); b.pit(190,295);
  b.flat(130).item('N',-65).item('T',-120);
  b.sign('up',30).hintN(10);
  b.plat(260,400,160).platItems(['N','N'],2);
  b.rampUp(150,110).cliffDown(110);
  b.flat(120).item('N',-80);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,122); b.pit(195,300);
  b.flat(130).item('N',-65).item('N',-120);
  b.sign('danger',20).hintN(0);
  b.rampUp(162,124); b.pit(198,300);
  b.flat(130).item('N',-65).item('T',-120);
  b.sign('danger',20).hintN(0);
  b.rampUp(165,126); b.pit(200,305);
  b.flat(160).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'スカイブリッジ',en:'SKY BRIDGE',limit:42,pal:6,seed:101,par:[26,36],
    dk:['flag','rock','flag'], ig:'linear-gradient(135deg,#3ed4ff,#19a0ff)'});
}
function course9(){ const b=new CB();
  /* グランドキャニオン:広く深い大渓谷5連。長距離ジャンプの連続。 */
  b.flat(400).banner('START',-190).sign('go',-70);
  b.triRow(3,90,40,28);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(168,128); b.pit(200,290);
  b.flat(150).item('N',-70).item('N',-140).item('T',-90);
  b.sign('danger',20).hintN(0);
  b.rampUp(170,130); b.pit(205,295);
  b.flat(150).item('N',-70).item('N',-140);
  b.sign('danger',20).hintN(0);
  b.rampUp(170,132); b.pit(208,300);
  b.flat(150).item('N',-70).item('N',-140).item('T',-90);
  b.sign('danger',20).hintN(0);
  b.rampUp(172,134); b.pit(210,305);
  b.flat(150).item('N',-70).item('N',-140);
  b.sign('danger',20).hintN(0);
  b.rampUp(174,136); b.pit(212,310);
  b.flat(170).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'グランドキャニオン',en:'GRAND CANYON',limit:42,pal:1,seed:127,par:[26,36],
    dk:['cactus','rock','flag'], ig:'linear-gradient(135deg,#ff7a3d,#b8402a)'});
}
function course10(){ const b=new CB();
  /* ニトロ・ヘル:谷6連+ループ+浮き足場+ウーブスの全部入り。最難関。 */
  b.flat(380).banner('START',-190).sign('go',-70);
  b.triRow(3,90,38,26);
  b.flat(140).item('N',-70).item('N',-150);
  b.sign('danger',20).hintN(0); b.rampUp(158,120); b.pit(185,290);
  b.flat(130).item('N',-65).item('N',-125);
  b.sign('up',30).dropLoop(85,165);
  b.flat(130).item('N',-75);
  b.sign('danger',20).hintN(0); b.rampUp(160,122); b.pit(190,295);
  b.flat(130).item('N',-65).item('T',-120);
  b.sign('up',30).hintN(10);
  b.plat(260,420,160).platItems(['N','N','T'],3);
  b.rampUp(150,110).cliffDown(110);
  b.flat(120).item('N',-80);
  b.sign('danger',20).hintN(0); b.rampUp(162,124); b.pit(193,300);
  b.flat(130).item('N',-65).item('N',-120);
  b.whoops(4,66,28);
  b.flat(120).item('N',-75);
  b.sign('danger',20).hintN(0); b.rampUp(162,126); b.pit(196,305);
  b.flat(130).item('N',-65).item('T',-120);
  b.sign('danger',20).hintN(0); b.rampUp(165,128); b.pit(200,310);
  b.flat(130).item('N',-65).item('N',-120);
  b.sign('danger',20).hintN(0); b.rampUp(168,130); b.pit(205,315);
  b.flat(160).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ニトロ・ヘル',en:'NITRO HELL',limit:52,pal:7,seed:139,par:[34,46],
    dk:['rock','lamp','rock'], ig:'linear-gradient(135deg,#ff6a2a,#6e1a10)'});
}

var COURSE_DEFS=[course1,course2,course3,course4,course5,
                 course6,course7,course8,course9,course10];
