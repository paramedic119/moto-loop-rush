'use strict';
/* ============================================================
   MOTO LOOP RUSH - コース定義 (index.html のエンジンから分離)
   依存: CB / finishCourse はエンジン側(index.html)で定義され、
        course 関数は実行時(レース開始時)にのみ呼ばれる。
   難易度ティア (全体を引き締めた強化版):
     1        = 初心者 (谷は終盤に1つだけ・やさしく機構を学習)
     2〜4     = 中級   (谷2〜3・制限を圧縮し余裕を削る)
     5〜6     = 上級   (谷4〜5・踏切が急/ウーブスで速度が乱れる)
     7〜10    = 超上級 (谷6〜8・深く広く・制限も厳しめ。ノーミス&★3=最適走行を要求)
   設計方針: 谷ギャップは「フルニトロ射程(約376px)>最大ギャップ(約246px)」を
   満たし、ニトロを正しく焚けば必ず渡れる=難しさはタイムと着地精度に置く。
   ============================================================ */

/* ============ 1. 初心者 ============ */
function course1(){ const b=new CB();
  /* そよかぜヒルズ:操作とジャンプの練習。谷は終盤に1つだけ(やさしめ)。
     手前のNでニトロを補給して焚けば渡れる=「ニトロで谷を越える」基本を学ぶ。 */
  b.flat(420).banner('START',-200).sign('go',-70);
  b.triRow(3,86,34,38);
  b.flat(150).item('T',-80).item('N',-160);
  b.whoops(4,72,26);
  b.flat(150).item('N',-80);
  b.tabletop(170,170,105).item('T',-160,-145);
  b.flat(220).item('N',-180).item('T',-90);
  b.dropLoop(110,150);
  b.flat(220).item('T',-120).item('N',-60,-70);
  b.triRow(4,90,36,34);
  b.flat(180).item('N',-95);
  b.whoops(4,68,26);
  b.flat(150).item('N',-70);
  b.sign('danger',20).hintN(0); b.rampUp(160,118); b.pit(150,200);
  b.flat(200).item('T',-90);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'そよかぜヒルズ',en:'SUNNY HILLS',limit:44,pal:0,seed:11,par:[24,34],
    dk:['tree','bush','flag'], ig:'linear-gradient(135deg,#6cd06e,#2e9e4f)'});
}

/* ============ 2〜4. 中級 ============ */
function course2(){ const b=new CB();
  /* サンセットキャニオン:谷2連+ニトロループ。手前のNで補給して連続で焚く。 */
  b.flat(380).banner('START',-200).sign('go',-60);
  b.triRow(3,88,36,30);
  b.flat(150).item('N',-75).item('N',-150);
  b.tabletop(170,160,115).item('T',-160,-150);
  b.flat(200).item('N',-100).item('W',-180);
  b.sign('danger',20).hintN(0); b.rampUp(160,120); b.pit(180,235);
  b.flat(180).item('N',-70).item('N',-150).item('T',-110);
  b.dropLoop(90,150);
  b.flat(170).item('N',-90);
  b.sign('danger',20).hintN(0); b.rampUp(160,122); b.pit(185,240);
  b.flat(180).item('T',-100);
  b.itemArc('N',3,100,-160,230,60).tri(300,128);
  b.whoops(4,68,28);
  b.flat(200).item('N',-95);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'サンセットキャニオン',en:'SUNSET CANYON',limit:34,pal:1,seed:23,par:[16,24],
    dk:['cactus','rock','flag'], ig:'linear-gradient(135deg,#ff9a4d,#d6452e)'});
}
function course3(){ const b=new CB();
  /* ミッドナイトサーキット:谷3連+大テーブルトップ。中級の山場。 */
  b.flat(400).banner('START',-200).sign('go',-70);
  b.triRow(4,88,36,30);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0); b.rampUp(160,122); b.pit(185,250);
  b.flat(160).item('N',-70).item('N',-140);
  b.dropLoop(80,150);
  b.flat(170).item('T',-90).item('W',-40,-70);
  b.tabletop(180,160,125).itemArc('T',3,-300,-150,260,70);
  b.flat(170).item('N',-90).item('N',-170);
  b.sign('danger',20).hintN(0); b.rampUp(160,124); b.pit(188,255);
  b.flat(160).item('N',-70).item('T',-150);
  b.whoops(4,66,30);
  b.flat(150).item('N',-80);
  b.sign('danger',20).hintN(0); b.rampUp(162,126); b.pit(190,258);
  b.flat(190).item('N',-95);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ミッドナイトサーキット',en:'MIDNIGHT CIRCUIT',limit:36,pal:2,seed:37,par:[17,26],
    dk:['lamp','rock','flag'], ig:'linear-gradient(135deg,#3a6bff,#1c2a8a)'});
}
function course4(){ const b=new CB();
  /* サンライズ・サミット:谷3連+浮き足場。中級の総仕上げ。 */
  b.flat(400).banner('START',-200).sign('go',-70);
  b.triRow(4,90,38,28);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0); b.rampUp(160,124); b.pit(188,255);
  b.flat(150).item('N',-70).item('N',-140);
  b.dropLoop(80,150);
  b.flat(150).item('T',-85);
  b.sign('up',30).hintN(10);
  b.plat(300,500,150).platItems(['N','T','N'],3);
  b.rampUp(150,110).cliffDown(110);
  b.flat(170).item('N',-90).item('W',-170);
  b.sign('danger',20).hintN(0); b.rampUp(165,128); b.pit(190,260);
  b.flat(150).item('N',-80);
  b.sign('danger',20).hintN(0); b.rampUp(166,130); b.pit(192,262);
  b.flat(160).item('T',-80);
  b.whoops(4,66,32);
  b.flat(190).item('N',-95);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'サンライズ・サミット',en:'SUNRISE SUMMIT',limit:36,pal:3,seed:53,par:[15,24],
    dk:['rock','bush','flag'], ig:'linear-gradient(135deg,#ff6ba3,#8a5fb0)'});
}

/* ============ 5〜6. 上級 ============ */
function course5(){ const b=new CB();
  /* ニトロ・ゴージ:谷4連+ニトロループ。踏切が急で、ニトロを早めに焚かないと谷へ落ちる。 */
  b.flat(340).banner('START',-180).sign('go',-70);
  b.triRow(3,90,36,30);
  b.flat(150).item('N',-70).item('N',-150);
  b.sign('danger',20).hintN(0); b.rampUp(150,140); b.pit(200,295);
  b.flat(170).item('N',-65).item('N',-150);
  b.sign('up',30).hintN(0).loop(150);
  b.flat(150).item('N',-80);
  b.sign('danger',20).hintN(0); b.rampUp(150,142); b.pit(204,300);
  b.flat(170).item('T',-70).item('N',-150);
  b.whoops(4,68,28);
  b.flat(150).item('N',-70);
  b.sign('danger',20).hintN(0); b.rampUp(152,144); b.pit(208,305);
  b.flat(150).item('N',-70);
  b.sign('danger',20).hintN(0); b.rampUp(152,145); b.pit(210,308);
  b.flat(170).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ニトロ・ゴージ',en:'NITRO GORGE',limit:28,pal:4,seed:71,par:[15,20],
    dk:['rock','lamp','flag'], ig:'linear-gradient(135deg,#2bf0d0,#0a6e78)'});
}
function course6(){ const b=new CB();
  /* ホッピング・ラッシュ:谷5連+ウーブス連打。リズムで速度が乱れる中で正確な踏切が要る。 */
  b.flat(360).banner('START',-190).sign('go',-70);
  b.whoops(5,72,32);
  b.flat(140).item('N',-70).item('N',-150);
  b.sign('danger',20).hintN(0); b.rampUp(150,140); b.pit(195,290);
  b.flat(170).item('N',-70).item('N',-150);
  b.whoops(5,68,30);
  b.flat(140).item('T',-80).item('N',-160);
  b.sign('danger',20).hintN(0); b.rampUp(150,142); b.pit(198,295);
  b.flat(170).item('N',-70).item('N',-150);
  b.itemArc('N',3,100,-150,220,60).tri(290,130);
  b.flat(140).item('T',-80).item('N',-160);
  b.sign('danger',20).hintN(0); b.rampUp(152,144); b.pit(200,298);
  b.flat(170).item('N',-70).item('N',-150);
  b.whoops(5,66,30);
  b.sign('danger',20).hintN(0); b.rampUp(152,146); b.pit(204,302);
  b.flat(150).item('N',-70);
  b.sign('danger',20).hintN(0); b.rampUp(154,147); b.pit(206,305);
  b.flat(170).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ホッピング・ラッシュ',en:'HOPPING RUSH',limit:33,pal:0,seed:113,par:[19,25],
    dk:['tree','bush','flag'], ig:'linear-gradient(135deg,#9cff5a,#2e9e4f)'});
}

/* ============ 7〜10. 超上級(やり込み)============
   各谷は「急な踏切(約45度)+広い谷+広い着地場」。早めにニトロを焚いて十分加速して
   いないと届かず谷底へ転落する=タイムではなくレイアウト(精度)で難しい。
   制限はやや厳しめにし、難しさは「ノーミスで谷を渡りきる精度」に置く。 */
function course7(){ const b=new CB();
  /* ループ・コースター:精密谷6連+ループ3。ループ突入の誘惑にニトロを浪費すると次の谷で詰む。 */
  b.flat(320).banner('START',-190).sign('go',-70);
  b.triRow(3,90,36,30);
  b.flat(150).item('N',-110);
  b.sign('up',30).dropLoop(90,150);
  b.flat(150).item('N',-100);
  b.sign('danger',20).hintN(0); b.rampUp(150,150); b.pit(210,315);
  b.flat(190).item('N',-110);
  b.sign('up',30).hintN(0).loop(160);
  b.flat(150).item('N',-100);
  b.sign('danger',20).hintN(0); b.rampUp(150,152); b.pit(212,320);
  b.flat(190).item('T',-110);
  b.sign('danger',20).hintN(0); b.rampUp(152,153); b.pit(214,325);
  b.flat(190).item('N',-110);
  b.sign('up',30).dropLoop(90,170);
  b.flat(150).item('N',-100);
  b.sign('danger',20).hintN(0); b.rampUp(152,155); b.pit(216,330);
  b.flat(190).item('N',-110);
  b.sign('danger',20).hintN(0); b.rampUp(154,156); b.pit(218,335);
  b.flat(150).item('N',-100);
  b.sign('danger',20).hintN(0); b.rampUp(154,157); b.pit(220,338);
  b.flat(180).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ループ・コースター',en:'LOOP COASTER',limit:36,pal:5,seed:91,par:[19,26],
    dk:['flag','bush','lamp'], ig:'linear-gradient(135deg,#ff5aa8,#9a66c8)'});
}
function course8(){ const b=new CB();
  /* スカイブリッジ:精密谷6連+浮き足場2。足場で高度を変えつつ正確な谷越えを連続。 */
  b.flat(340).banner('START',-190).sign('go',-70);
  b.triRow(3,88,38,28);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0); b.rampUp(150,150); b.pit(208,318);
  b.flat(200).item('N',-110);
  b.sign('up',30).hintN(10);
  b.plat(270,440,150).platItems(['N','T'],2);
  b.rampUp(150,110).cliffDown(110);
  b.flat(150);
  b.sign('danger',20).hintN(0); b.rampUp(150,152); b.pit(210,322);
  b.flat(200).item('T',-110);
  b.sign('danger',20).hintN(0); b.rampUp(152,153); b.pit(212,326);
  b.flat(200).item('N',-110);
  b.sign('up',30).hintN(10);
  b.plat(260,400,160).platItems(['N'],1);
  b.rampUp(150,110).cliffDown(110);
  b.flat(150);
  b.sign('danger',20).hintN(0); b.rampUp(152,155); b.pit(213,330);
  b.flat(200).item('T',-110);
  b.sign('danger',20).hintN(0); b.rampUp(154,156); b.pit(214,334);
  b.flat(200).item('N',-110);
  b.sign('danger',20).hintN(0); b.rampUp(154,158); b.pit(215,338);
  b.flat(180).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'スカイブリッジ',en:'SKY BRIDGE',limit:32,pal:6,seed:101,par:[14,19],
    dk:['flag','rock','flag'], ig:'linear-gradient(135deg,#3ed4ff,#19a0ff)'});
}
function course9(){ const b=new CB();
  /* グランドキャニオン:精密大渓谷6連。最も広く深い谷の連続。1回の踏切ミスが命取り。 */
  b.flat(360).banner('START',-190).sign('go',-70);
  b.triRow(3,90,40,28);
  b.flat(150).item('N',-75).item('N',-150);
  b.sign('danger',20).hintN(0); b.rampUp(150,150); b.pit(212,318);
  b.flat(200).item('N',-110).item('T',-100);
  b.sign('danger',20).hintN(0); b.rampUp(150,152); b.pit(214,322);
  b.flat(200).item('N',-110);
  b.sign('danger',20).hintN(0); b.rampUp(150,153); b.pit(216,326);
  b.flat(200).item('N',-110).item('T',-100);
  b.sign('danger',20).hintN(0); b.rampUp(152,155); b.pit(218,330);
  b.flat(200).item('N',-110);
  b.sign('danger',20).hintN(0); b.rampUp(152,156); b.pit(220,334);
  b.flat(200).item('N',-110).item('T',-100);
  b.sign('danger',20).hintN(0); b.rampUp(154,158); b.pit(222,338);
  b.flat(180).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'グランドキャニオン',en:'GRAND CANYON',limit:30,pal:1,seed:127,par:[15,20],
    dk:['cactus','rock','flag'], ig:'linear-gradient(135deg,#ff7a3d,#b8402a)'});
}
function course10(){ const b=new CB();
  /* ニトロ・ヘル:精密谷8連+ループ+浮き足場+ウーブスの全部入り。究極の最難関。 */
  b.flat(320).banner('START',-190).sign('go',-70);
  b.triRow(3,90,38,26);
  b.flat(150).item('N',-110);
  b.sign('danger',20).hintN(0); b.rampUp(150,150); b.pit(208,315);
  b.flat(190).item('N',-110);
  b.sign('up',30).dropLoop(85,165);
  b.flat(150).item('N',-100);
  b.sign('danger',20).hintN(0); b.rampUp(150,152); b.pit(210,320);
  b.flat(190).item('T',-110);
  b.sign('up',30).hintN(10);
  b.plat(250,380,165).platItems(['N','T'],2);
  b.rampUp(150,110).cliffDown(110);
  b.flat(150);
  b.sign('danger',20).hintN(0); b.rampUp(152,153); b.pit(212,322);
  b.flat(190).item('N',-110);
  b.whoops(4,66,28);
  b.flat(150).item('N',-70);
  b.sign('danger',20).hintN(0); b.rampUp(152,155); b.pit(214,326);
  b.flat(190).item('T',-110);
  b.sign('danger',20).hintN(0); b.rampUp(154,156); b.pit(216,330);
  b.flat(190).item('N',-110);
  b.sign('danger',20).hintN(0); b.rampUp(154,157); b.pit(218,334);
  b.flat(190).item('N',-110);
  b.sign('danger',20).hintN(0); b.rampUp(156,158); b.pit(220,338);
  b.flat(150).item('N',-100);
  b.sign('danger',20).hintN(0); b.rampUp(156,159); b.pit(222,342);
  b.flat(180).item('T',-80);
  const gx=b.goal();
  return finishCourse(b,gx,{name:'ニトロ・ヘル',en:'NITRO HELL',limit:40,pal:7,seed:139,par:[21,27],
    dk:['rock','lamp','rock'], ig:'linear-gradient(135deg,#ff6a2a,#6e1a10)'});
}

var COURSE_DEFS=[course1,course2,course3,course4,course5,
                 course6,course7,course8,course9,course10];
