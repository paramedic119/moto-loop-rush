'use strict';
/* ============================================================
   MOTO LOOP RUSH - コース定義 (index.html のエンジンから分離)
   依存: CB / finishCourse はエンジン側(index.html)で定義され、
        これらの course 関数は実行時(レース開始時)にのみ呼ばれる。
   グローバル COURSE_DEFS をエンジンが参照する。
   ============================================================ */
/* ---------- ベーシック(1〜5):ニトロ谷を 0→1→2→3→4 と段階導入 ---------- */
function course1(){ const b=new CB();
  /* ステージ1:操作とジャンプの練習。ピット(谷)はまだ無く、ニトロ無しでも
     クリアできる。ニトロは「あると速い・ループに入れる」お楽しみ要素。 */
  b.flat(420).banner('START',-200).sign('go',-70);
  b.triRow(3,90,36,32);
  b.flat(150).item('T',-75);
  b.whoops(4,70,28);
  b.flat(150).item('N',-80).item('W',-150);
  b.tabletop(160,150,108).item('T',-150,-150);
  b.flat(230).item('N',-170).item('T',-90);
  b.dropLoop(110,150);
  b.flat(230).item('T',-115);
  b.itemArc('N',3,100,-150,220,60).tri(280,118);
  b.triRow(3,90,38,30);
  b.flat(200).item('N',-95);
  b.whoops(3,66,26);
  b.flat(210).item('T',-90);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'そよかぜヒルズ',en:'SUNNY HILLS',limit:48,pal:0,seed:11,par:[24,34],
    dk:['tree','bush','flag'], ig:'linear-gradient(135deg,#6cd06e,#2e9e4f)'});
}
function course2(){ const b=new CB();
  /* ステージ2:はじめてのニトロ・ピット(1箇所)。 */
  b.flat(400).banner('START',-200).sign('go',-60);
  b.triRow(3,88,38,30);
  b.flat(150).item('N',-75).item('N',-150);
  b.tabletop(170,160,112).item('T',-160,-150);
  b.flat(210).item('N',-100).item('W',-180);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,115);
  b.pit(170,220);
  b.flat(180).item('N',-70).item('N',-150).item('T',-110);
  b.dropLoop(90,150);
  b.flat(220).item('T',-110);
  b.itemArc('N',3,100,-160,230,60).tri(300,128);
  b.whoops(4,68,26);
  b.flat(220).item('N',-95);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'サンセットキャニオン',en:'SUNSET CANYON',limit:44,pal:1,seed:23,par:[26,36],
    dk:['cactus','rock','flag'], ig:'linear-gradient(135deg,#ff9a4d,#d6452e)'});
}
function course3(){ const b=new CB();
  /* ステージ3:渓谷2連。 */
  b.flat(420).banner('START',-200).sign('go',-70);
  b.triRow(4,88,38,28);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120); b.pit(180,250);
  b.flat(160).item('N',-70).item('N',-140);
  b.dropLoop(80,150);
  b.flat(170).item('T',-90).item('W',-40,-70);
  b.tabletop(180,170,122).itemArc('T',3,-300,-150,260,70);
  b.flat(180).item('N',-90).item('N',-170);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,125); b.pit(190,260);
  b.flat(170).item('N',-70).item('T',-150);
  b.whoops(4,66,28);
  b.flat(210).item('N',-95);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ミッドナイトサーキット',en:'MIDNIGHT CIRCUIT',limit:50,pal:2,seed:37,par:[30,42],
    dk:['lamp','rock','flag'], ig:'linear-gradient(135deg,#3a6bff,#1c2a8a)'});
}
function course4(){ const b=new CB();
  /* ステージ4:渓谷3連+浮き足場。 */
  b.flat(420).banner('START',-200).sign('go',-70);
  b.triRow(4,90,40,26);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120); b.pit(180,270);
  b.flat(150).item('N',-70).item('N',-140);
  b.dropLoop(80,150);
  b.flat(160).item('T',-85);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,125); b.pit(190,280);
  b.flat(150).item('N',-70).item('N',-140);
  b.sign('up',30).hintN(10);
  b.plat(300,520,150).platItems(['N','T','N'],3);
  b.rampUp(150,110).cliffDown(110);
  b.flat(200).item('N',-90).item('W',-170);
  b.sign('danger',20).hintN(0);
  b.rampUp(170,130); b.pit(200,290);
  b.flat(170).item('T',-80);
  b.whoops(4,66,30);
  b.flat(200).item('N',-95);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'サンライズ・サミット',en:'SUNRISE SUMMIT',limit:54,pal:3,seed:53,par:[34,46],
    dk:['rock','bush','flag'], ig:'linear-gradient(135deg,#ff6ba3,#8a5fb0)'});
}
function course5(){ const b=new CB();
  /* ニトロ・ゴージ:渓谷4連。 */
  b.flat(360).banner('START',-180).sign('go',-70);
  b.triRow(3,90,36,30);
  b.flat(140).item('N',-70);
  b.rampUp(140,80).cliffDown(80);
  b.flat(150).item('N',-75).sign('go',-30);
  b.sign('danger',20).hintN(0);
  b.rampUp(150,110);
  b.pit(160,280);
  b.flat(130).item('N',-65).item('N',-120);
  b.sign('up',30).hintN(0).loop(150);
  b.flat(170).item('N',-85);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120);
  b.pit(185,300);
  b.flat(140).item('T',-70).item('N',-120);
  b.whoops(3,70,26);
  b.flat(140).item('N',-70);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120);
  b.pit(200,300);
  b.flat(150).item('N',-70).item('N',-140);
  b.sign('danger',20).hintN(0);
  b.rampUp(170,130);
  b.pit(210,320);
  b.flat(160).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ニトロ・ゴージ',en:'NITRO GORGE',limit:56,pal:4,seed:71,par:[32,44],
    dk:['rock','lamp','flag'], ig:'linear-gradient(135deg,#2bf0d0,#0a6e78)'});
}
/* ---------- アドバンス(6〜10):ギミック特化の新タイプ ---------- */
function course6(){ const b=new CB();
  /* ホッピング・ラッシュ:ウーブス&三角ジャンプのリズム+渓谷2連。 */
  b.flat(400).banner('START',-190).sign('go',-70);
  b.whoops(5,72,30);
  b.flat(130).item('N',-70).item('N',-150);
  b.triRow(4,88,40,26);
  b.flat(120).item('T',-80);
  b.sign('danger',20).hintN(0);
  b.rampUp(155,115); b.pit(175,250);
  b.flat(140).item('N',-70).item('N',-140);
  b.whoops(6,68,30);
  b.flat(120).item('T',-80);
  b.itemArc('N',3,100,-150,220,60).tri(290,130);
  b.flat(150).item('N',-80).item('N',-160);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120); b.pit(190,260);
  b.flat(150).item('T',-80);
  b.whoops(5,66,28);
  b.triRow(3,86,38,28);
  b.flat(190).item('N',-90);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ホッピング・ラッシュ',en:'HOPPING RUSH',limit:52,pal:0,seed:113,par:[30,42],
    dk:['tree','bush','flag'], ig:'linear-gradient(135deg,#9cff5a,#2e9e4f)'});
}
function course7(){ const b=new CB();
  /* ループ・コースター:ループ連発+渓谷2連。ループ突入にニトロを使う誘惑。 */
  b.flat(400).banner('START',-190).sign('go',-70);
  b.triRow(3,90,36,30);
  b.flat(140).item('N',-70).item('N',-150);
  b.sign('up',30).dropLoop(90,150);
  b.flat(120).item('N',-60);
  b.loop(165);
  b.flat(140).item('N',-70).item('T',-140);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120); b.pit(180,250);
  b.flat(150).item('N',-70).item('N',-140);
  b.sign('up',30).dropLoop(90,175);
  b.flat(160).item('T',-90).item('N',-170);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,125); b.pit(190,260);
  b.flat(160).item('N',-70).item('T',-150);
  b.whoops(3,66,26);
  b.flat(200).item('N',-90);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ループ・コースター',en:'LOOP COASTER',limit:54,pal:5,seed:91,par:[32,44],
    dk:['flag','bush','lamp'], ig:'linear-gradient(135deg,#ff5aa8,#9a66c8)'});
}
function course8(){ const b=new CB();
  /* スカイブリッジ:浮き足場の連続+渓谷3連。空中でニトロを操る。 */
  b.flat(400).banner('START',-190).sign('go',-70);
  b.triRow(3,88,38,28);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,120); b.pit(180,260);
  b.flat(140).item('N',-70).item('N',-140);
  b.sign('up',30).hintN(10);
  b.plat(280,460,150).platItems(['N','T','N'],3);
  b.rampUp(150,110).cliffDown(110);
  b.flat(140).item('N',-90);
  b.sign('danger',20).hintN(0);
  b.rampUp(160,125); b.pit(190,270);
  b.flat(150).item('N',-70).item('T',-140);
  b.sign('up',30).hintN(10);
  b.plat(280,420,160).platItems(['T','N'],2);
  b.rampUp(150,110).cliffDown(110);
  b.flat(150).item('N',-90).item('N',-170);
  b.sign('danger',20).hintN(0);
  b.rampUp(170,130); b.pit(200,280);
  b.flat(170).item('T',-80);
  b.whoops(3,64,26);
  b.flat(190).item('N',-90);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'スカイブリッジ',en:'SKY BRIDGE',limit:52,pal:6,seed:101,par:[32,46],
    dk:['flag','rock','flag'], ig:'linear-gradient(135deg,#3ed4ff,#19a0ff)'});
}
function course9(){ const b=new CB();
  /* グランドキャニオン:広く深い大渓谷4連。長距離ジャンプの連続。 */
  b.flat(420).banner('START',-190).sign('go',-70);
  b.triRow(3,90,40,28);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(165,125); b.pit(200,280);
  b.flat(160).item('N',-70).item('N',-150).item('T',-100);
  b.sign('danger',20).hintN(0);
  b.rampUp(170,130); b.pit(205,290);
  b.flat(160).item('N',-70).item('N',-150);
  b.sign('danger',20).hintN(0);
  b.rampUp(170,130); b.pit(210,300);
  b.flat(160).item('N',-70).item('N',-150).item('T',-100);
  b.sign('danger',20).hintN(0);
  b.rampUp(175,135); b.pit(212,310);
  b.flat(170).item('T',-80);
  b.flat(180).item('N',-90);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'グランドキャニオン',en:'GRAND CANYON',limit:54,pal:1,seed:127,par:[30,42],
    dk:['cactus','rock','flag'], ig:'linear-gradient(135deg,#ff7a3d,#b8402a)'});
}
function course10(){ const b=new CB();
  /* ニトロ・ヘル:谷5連+ループ+浮き足場+ウーブス。全部入りの最難関。 */
  b.flat(400).banner('START',-190).sign('go',-70);
  b.triRow(3,90,38,26);
  b.flat(140).item('N',-70).item('N',-150);
  b.sign('danger',20).hintN(0); b.rampUp(160,120); b.pit(180,280);
  b.flat(140).item('N',-65).item('N',-130);
  b.sign('up',30).dropLoop(85,165);
  b.flat(140).item('N',-80);
  b.sign('danger',20).hintN(0); b.rampUp(160,125); b.pit(190,290);
  b.flat(140).item('N',-65).item('T',-130);
  b.sign('up',30).hintN(10);
  b.plat(280,440,160).platItems(['N','N','T'],3);
  b.rampUp(150,110).cliffDown(110);
  b.flat(130).item('N',-85);
  b.sign('danger',20).hintN(0); b.rampUp(165,130); b.pit(195,300);
  b.flat(140).item('N',-65).item('N',-130);
  b.whoops(4,66,28);
  b.flat(120).item('N',-80);
  b.sign('danger',20).hintN(0); b.rampUp(165,130); b.pit(200,310);
  b.flat(140).item('N',-65).item('T',-130);
  b.sign('danger',20).hintN(0); b.rampUp(175,140); b.pit(210,320);
  b.flat(160).item('T',-80);
  b.flat(160).item('N',-90);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ニトロ・ヘル',en:'NITRO HELL',limit:62,pal:7,seed:139,par:[36,50],
    dk:['rock','lamp','rock'], ig:'linear-gradient(135deg,#ff6a2a,#6e1a10)'});
}
var COURSE_DEFS=[course1,course2,course3,course4,course5,
                 course6,course7,course8,course9,course10];
