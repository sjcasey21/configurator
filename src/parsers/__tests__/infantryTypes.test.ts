import {Parsers} from '../infantryTypes'

test("Infantry Types", () => {
  const soldierHitpoints: string[][] = [
    ["viewPilot", "", "", "", "", "", "", "", "", "0.750", "0.750", "0.750"],
    ["Overall", "2", "", "0.3", "", "", "0.001", "0.5", "3", "", "", ""],
    ["HitFace", "1", "0.8", "0.1", "0.01", "", "", "", "", "", "", ""],
    ["HitNeck: HitFace", "1", "0.8", "0.5", "0.01", "", "", "", "", "", "", ""],
    [
      "HitHead: HitNeck",
      "1",
      "0.8",
      "0.5",
      "0.01",
      "HitFace max HitNeck",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "HitPelvis: HitHead",
      "6",
      "0.8",
      "1.0",
      "0.01",
      "0",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "HitAbdomen: HitPelvis",
      "1",
      "0.8",
      "1.0",
      "0.01",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "HitDiaphragm: HitAbdomen",
      "1",
      "0.8",
      "6.0",
      "0.01",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "HitChest: HitDiaphragm",
      "1",
      "0.8",
      "6.0",
      "0.01",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "HitBody: HitChest",
      "1000",
      "1.0",
      "6.0",
      "0.01",
      "HitPelvis max HitAbdomen max HitDiaphragm max HitChest",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "HitArms: HitBody",
      "3",
      "1.0",
      "1.0",
      "0.01",
      "0",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "HitHands: HitArms",
      "3",
      "1.0",
      "1.0",
      "0.01",
      "HitArms",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "HitLegs: HitHands",
      "3",
      "1.0",
      "1.0",
      "0.01",
      "0",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "Incapacitated: HitLegs",
      "1000",
      "1.0",
      "1.0",
      "0",
      "(((Total - 0.25) max 0) + ((HitHead - 0.25) max 0) + ((HitBody - 0.25) max 0)) * 2",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  ];

  const data: string[][] = [
    [
      "CAManBase",
      "Man",
      "Base",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE",
      "TRUE"
    ]
  ];

  expect(Parsers.parseInfantryTypes(soldierHitpoints, data)).toEqual([
    "class CAManBase : Man {",
    "armor=2;",
    "explosionShielding=0.3;",
    "minTotalDamageThreshold=0.001;",
    "impactDamageMultiplier=0.5;",
    "armorStructural=3;",
    "class ViewPilot : ViewPilot {",
    "minFOV=0.750;",
    "initFOV=0.750;",
    "maxFOV=0.750;",
    "};",
    "class Hitpoints {",
    "class HitFace {",
    "armor=1;",
    "passThrough=0.8;",
    "explosionShielding=0.1;",
    "minimalHit=0.01;",
    "};",
    "class HitNeck: HitFace {",
    "armor=1;",
    "passThrough=0.8;",
    "explosionShielding=0.5;",
    "minimalHit=0.01;",
    "};",
    "class HitHead: HitNeck {",
    "armor=1;",
    "passThrough=0.8;",
    "explosionShielding=0.5;",
    "minimalHit=0.01;",
    'depends="HitFace max HitNeck"',
    "};",
    "class HitPelvis: HitHead {",
    "armor=6;",
    "passThrough=0.8;",
    "explosionShielding=1.0;",
    "minimalHit=0.01;",
    'depends="0"',
    "};",
    "class HitAbdomen: HitPelvis {",
    "armor=1;",
    "passThrough=0.8;",
    "explosionShielding=1.0;",
    "minimalHit=0.01;",
    "};",
    "class HitDiaphragm: HitAbdomen {",
    "armor=1;",
    "passThrough=0.8;",
    "explosionShielding=6.0;",
    "minimalHit=0.01;",
    "};",
    "class HitChest: HitDiaphragm {",
    "armor=1;",
    "passThrough=0.8;",
    "explosionShielding=6.0;",
    "minimalHit=0.01;",
    "};",
    "class HitBody: HitChest {",
    "armor=1000;",
    "passThrough=1.0;",
    "explosionShielding=6.0;",
    "minimalHit=0.01;",
    'depends="HitPelvis max HitAbdomen max HitDiaphragm max HitChest"',
    "};",
    "class HitArms: HitBody {",
    "armor=3;",
    "passThrough=1.0;",
    "explosionShielding=1.0;",
    "minimalHit=0.01;",
    'depends="0"',
    "};",
    "class HitHands: HitArms {",
    "armor=3;",
    "passThrough=1.0;",
    "explosionShielding=1.0;",
    "minimalHit=0.01;",
    'depends="HitArms"',
    "};",
    "class HitLegs: HitHands {",
    "armor=3;",
    "passThrough=1.0;",
    "explosionShielding=1.0;",
    "minimalHit=0.01;",
    'depends="0"',
    "};",
    "class Incapacitated: HitLegs {",
    "armor=1000;",
    "passThrough=1.0;",
    "explosionShielding=1.0;",
    "minimalHit=0;",
    'depends="(((Total - 0.25) max 0) + ((HitHead - 0.25) max 0) + ((HitBody - 0.25) max 0)) * 2"',
    "};",
    "};",
    "};"
  ]);
});
