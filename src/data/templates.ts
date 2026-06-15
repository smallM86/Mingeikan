/* ============================================================
   Mingei — SVG Coloring Templates (High-detail realistic)
   ============================================================ */

import { ColoringTemplate, PresetColor, TemplateCategory } from '@/types/types';

/* ---------- Japanese Preset Color Palette ---------- */
export const japaneseColors: PresetColor[] = [
  // Reds & Pinks
  { value: '#c24643', name: '朱色' },
  { value: '#e8503a', name: '緋色' },
  { value: '#d49a9a', name: '桜色' },
  { value: '#f5c1c1', name: '薄桜' },
  { value: '#b5495b', name: '今様色' },
  { value: '#e87a90', name: '撫子色' },
  // Oranges & Yellows
  { value: '#c9944a', name: '狐色' },
  { value: '#e0b06e', name: '金色' },
  { value: '#f6c555', name: '山吹色' },
  { value: '#e8d3a2', name: '砂色' },
  { value: '#c57f2e', name: '琥珀色' },
  { value: '#eb8400', name: '蜜柑色' },
  // Greens
  { value: '#5b8c5a', name: '若草色' },
  { value: '#3c6e3f', name: '常盤色' },
  { value: '#88b860', name: '萌黄色' },
  { value: '#2d6d4b', name: '緑青色' },
  { value: '#93b881', name: '柳色' },
  { value: '#3a5a40', name: '深緑' },
  // Blues
  { value: '#264e70', name: '藍色' },
  { value: '#3a7ca5', name: '縹色' },
  { value: '#6290c3', name: '群青色' },
  { value: '#89c3eb', name: '勿忘草色' },
  { value: '#1b4965', name: '濃藍' },
  { value: '#5b9bd5', name: '空色' },
  // Purples
  { value: '#8b6fb0', name: '藤色' },
  { value: '#6b3fa0', name: '江戸紫' },
  { value: '#a88fd0', name: '薄藤色' },
  { value: '#5d3f6a', name: '紫紺' },
  // Neutrals & Blacks
  { value: '#ffffff', name: '白' },
  { value: '#e8e4dc', name: '生成色' },
  { value: '#9e9e93', name: '鼠色' },
  { value: '#4a4a46', name: '墨色' },
  { value: '#2b2b28', name: '漆黒' },
  { value: '#785e49', name: '茶色' },
  { value: '#a0785d', name: '丁子色' },
  { value: '#cd9b6e', name: '枇杷茶' },
];

/* ================================================================
   SAKURA — Cherry Blossom  (realistic, botanical-illustration)
   ================================================================ */
const sakura: ColoringTemplate = {
  id: 'sakura',
  name: '桜の花',
  category: '花',
  description: '枝に咲く桜の花と蕾の詳細な線画',
  viewBox: '0 0 500 600',
  regions: [
    // ─── Main branch ───
    {
      id: 'branch-main',
      label: '主幹',
      path: 'M80,590 C88,540 100,480 118,420 C135,362 152,310 170,268 C188,226 205,196 220,175 C232,160 244,148 258,140',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 8,
    },
    {
      id: 'branch-bark1',
      label: '樹皮模様 1',
      path: 'M100,500 C104,490 106,478 104,468 M116,450 C120,440 122,428 118,418 M138,380 C140,370 138,360 134,352 M164,300 C166,290 164,282 160,276',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.9,
    },
    // ─── Sub-branches ───
    {
      id: 'branch-left',
      label: '左枝',
      path: 'M148,330 C130,310 108,290 82,276 C62,266 42,260 24,258',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 4,
    },
    {
      id: 'branch-upper',
      label: '上枝',
      path: 'M220,210 C236,192 258,176 282,165 C304,156 326,152 350,154',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 4,
    },
    {
      id: 'branch-right',
      label: '右枝',
      path: 'M258,140 C276,128 298,118 322,114 C344,110 368,112 392,118',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 3.5,
    },
    {
      id: 'branch-twig1',
      label: '小枝 1',
      path: 'M132,360 C116,348 98,338 78,332',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 2.5,
    },
    {
      id: 'branch-twig2',
      label: '小枝 2',
      path: 'M350,154 C362,142 376,134 392,130',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 2,
    },

    // ─── Flower A (large, front-facing – on branch-right) ───
    {
      id: 'flA-p1',
      label: '花A 花びら上',
      path: 'M260,138 C256,118 250,96 244,78 C240,66 236,56 240,48 C244,40 252,38 260,44 C268,50 274,64 276,80 C278,98 272,120 260,138 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'flA-p2',
      label: '花A 花びら右上',
      path: 'M260,138 C272,126 288,114 304,108 C316,104 326,106 328,114 C330,122 322,132 310,138 C298,144 278,146 260,138 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'flA-p3',
      label: '花A 花びら右下',
      path: 'M260,138 C270,148 282,164 288,180 C292,192 288,200 280,198 C272,196 264,184 258,168 C254,156 256,144 260,138 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'flA-p4',
      label: '花A 花びら左下',
      path: 'M260,138 C250,148 238,164 232,180 C228,192 232,200 240,198 C248,196 256,184 260,168 C264,156 264,144 260,138 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'flA-p5',
      label: '花A 花びら左上',
      path: 'M260,138 C248,126 232,114 216,108 C204,104 194,106 192,114 C190,122 198,132 210,138 C222,144 242,146 260,138 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'flA-notch1',
      label: '花A 切れ込み上',
      path: 'M252,54 C256,50 260,48 264,52',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'flA-notch2',
      label: '花A 切れ込み右上',
      path: 'M320,108 C322,112 324,116 320,118',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'flA-center',
      label: '花A 花芯',
      path: 'M260,138 m-10,0 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'flA-stamen',
      label: '花A おしべ',
      path: 'M260,128 L258,114 L254,108 M260,128 L264,112 L268,108 M260,128 L256,116 M260,128 L266,116 M260,128 L252,118 M260,128 L270,118 M260,128 L260,112',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.7,
    },
    {
      id: 'flA-stamen-dots',
      label: '花A 葯',
      path: 'M254,108 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0 M268,108 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0 M256,116 m-1.5,0 a1.5,1.5 0 1,0 3,0 a1.5,1.5 0 1,0 -3,0 M266,116 m-1.5,0 a1.5,1.5 0 1,0 3,0 a1.5,1.5 0 1,0 -3,0 M260,112 m-1.5,0 a1.5,1.5 0 1,0 3,0 a1.5,1.5 0 1,0 -3,0 M252,118 m-1.5,0 a1.5,1.5 0 1,0 3,0 a1.5,1.5 0 1,0 -3,0 M270,118 m-1.5,0 a1.5,1.5 0 1,0 3,0 a1.5,1.5 0 1,0 -3,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.6,
    },

    // ─── Flower B (upper branch, slightly smaller) ───
    {
      id: 'flB-p1',
      label: '花B 花びら上',
      path: 'M392,118 C390,102 386,84 382,70 C380,62 382,54 388,52 C394,50 398,56 400,66 C402,78 398,98 392,118 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'flB-p2',
      label: '花B 花びら右上',
      path: 'M392,118 C402,108 416,100 428,98 C438,96 442,102 438,108 C434,114 422,120 410,124 C400,126 394,122 392,118 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'flB-p3',
      label: '花B 花びら右下',
      path: 'M392,118 C400,126 410,140 412,152 C414,162 408,166 402,162 C396,158 392,146 390,134 C388,126 390,120 392,118 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'flB-p4',
      label: '花B 花びら左下',
      path: 'M392,118 C384,126 374,140 372,152 C370,162 376,166 382,162 C388,158 392,146 394,134 C396,126 394,120 392,118 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'flB-p5',
      label: '花B 花びら左上',
      path: 'M392,118 C382,108 368,100 356,98 C346,96 342,102 346,108 C350,114 362,120 374,124 C384,126 390,122 392,118 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'flB-center',
      label: '花B 花芯',
      path: 'M392,118 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.2,
    },
    {
      id: 'flB-stamen',
      label: '花B おしべ',
      path: 'M392,110 L390,98 M392,110 L396,98 M392,110 L388,100 M392,110 L398,100 M392,110 L392,96',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.6,
    },

    // ─── Flower C (left branch, side view) ───
    {
      id: 'flC-p1',
      label: '花C 花びら上',
      path: 'M24,258 C20,242 14,222 10,206 C8,196 12,188 18,190 C24,192 28,204 28,218 C28,234 26,248 24,258 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'flC-p2',
      label: '花C 花びら右',
      path: 'M24,258 C34,248 48,240 62,238 C72,236 76,242 72,248 C68,254 56,260 44,264 C34,266 26,264 24,258 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'flC-p3',
      label: '花C 花びら下',
      path: 'M24,258 C28,272 30,290 26,302 C24,310 18,312 16,306 C14,300 16,286 20,272 C22,264 24,260 24,258 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'flC-p4',
      label: '花C 花びら左',
      path: 'M24,258 C14,250 4,240 -4,234 C-10,230 -10,236 -6,242 C-2,248 10,258 24,264 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'flC-center',
      label: '花C 花芯',
      path: 'M24,258 m-7,0 a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },

    // ─── Flower D (on twig, small) ───
    {
      id: 'flD-p1',
      label: '花D 花びら上',
      path: 'M78,332 C76,320 72,306 70,294 C68,286 72,282 76,284 C80,286 82,296 82,308 C82,320 80,328 78,332 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'flD-p2',
      label: '花D 花びら右',
      path: 'M78,332 C86,324 96,318 106,316 C112,314 114,320 110,324 C106,328 96,334 86,336 C82,338 78,336 78,332 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'flD-p3',
      label: '花D 花びら下',
      path: 'M78,332 C80,342 82,356 78,364 C76,370 72,370 70,366 C68,362 70,350 74,340 C76,336 78,334 78,332 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'flD-p4',
      label: '花D 花びら左',
      path: 'M78,332 C70,324 60,318 50,316 C44,314 42,320 46,324 C50,328 60,334 70,336 C74,338 78,336 78,332 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'flD-center',
      label: '花D 花芯',
      path: 'M78,332 m-6,0 a6,6 0 1,0 12,0 a6,6 0 1,0 -12,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1,
    },

    // ─── Buds ───
    {
      id: 'bud1-calyx',
      label: '蕾1 がく',
      path: 'M392,130 C396,136 398,144 396,150 M392,130 C388,136 386,144 388,150 M392,130 C392,138 392,146 392,152',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 1.1,
    },
    {
      id: 'bud1-body',
      label: '蕾1 つぼみ',
      path: 'M382,164 C380,154 384,142 392,136 C400,142 404,154 402,164 C400,172 396,176 392,176 C388,176 384,172 382,164 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'bud2-calyx',
      label: '蕾2 がく',
      path: 'M350,154 C354,160 356,168 354,174 M350,154 C346,160 344,168 346,174',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 1,
    },
    {
      id: 'bud2-body',
      label: '蕾2 つぼみ',
      path: 'M342,186 C340,178 344,166 350,160 C356,166 360,178 358,186 C356,192 354,194 350,194 C346,194 344,192 342,186 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.2,
    },

    // ─── Leaves ───
    {
      id: 'leaf1',
      label: '葉 1',
      path: 'M170,300 C156,286 136,266 120,252 C108,242 98,240 100,248 C102,256 118,274 138,292 C152,304 166,308 170,300 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leaf1-vein',
      label: '葉1 葉脈',
      path: 'M170,300 C154,286 136,268 120,254 M158,290 C152,292 146,290 M144,278 C140,282 134,282 M132,268 C130,272 124,274',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.6,
    },
    {
      id: 'leaf1-edge',
      label: '葉1 鋸歯',
      path: 'M156,286 C154,282 150,284 M142,276 C140,272 136,274 M128,264 C126,260 122,262',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.5,
    },
    {
      id: 'leaf2',
      label: '葉 2',
      path: 'M188,260 C196,244 210,224 224,212 C234,204 242,206 238,214 C234,222 218,240 200,256 C190,264 184,264 188,260 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leaf2-vein',
      label: '葉2 葉脈',
      path: 'M188,260 C198,246 212,228 226,214 M198,252 C202,248 208,248 M208,240 C212,236 218,236 M218,228 C220,224 226,222',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.6,
    },
    {
      id: 'leaf3',
      label: '葉 3',
      path: 'M110,410 C96,396 76,376 60,362 C48,352 40,352 44,360 C48,368 66,386 86,402 C100,412 112,414 110,410 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leaf3-vein',
      label: '葉3 葉脈',
      path: 'M110,410 C96,396 78,378 62,364 M98,400 C94,402 88,400 M84,390 C80,394 74,392 M72,378 C70,382 64,382',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.6,
    },

    // ─── Falling petals ───
    {
      id: 'petal-fall1',
      label: '散る花びら 1',
      path: 'M340,220 C336,210 330,198 332,190 C334,184 338,186 340,192 C342,200 340,212 340,220 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.9,
    },
    {
      id: 'petal-fall2',
      label: '散る花びら 2',
      path: 'M420,240 C418,232 414,222 416,216 C418,212 422,214 422,218 C422,224 420,234 420,240 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.9,
    },
    {
      id: 'petal-fall3',
      label: '散る花びら 3',
      path: 'M460,300 C458,292 454,282 456,276 C458,272 462,274 462,278 C462,284 460,294 460,300 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
  ],
};

/* ================================================================
   LOTUS — Lotus Flower  (botanical illustration style)
   ================================================================ */
const lotus: ColoringTemplate = {
  id: 'lotus',
  name: '蓮の花',
  category: '花',
  description: '水面に咲く蓮の花の繊細な線画',
  viewBox: '0 0 500 600',
  regions: [
    // ─── Back petals (outer layer) ───
    {
      id: 'bp1',
      label: '後花びら 左外',
      path: 'M250,310 C220,290 180,262 150,240 C128,224 116,216 118,226 C120,236 140,260 168,284 C196,306 230,318 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'bp2',
      label: '後花びら 右外',
      path: 'M250,310 C280,290 320,262 350,240 C372,224 384,216 382,226 C380,236 360,260 332,284 C304,306 270,318 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'bp3',
      label: '後花びら 左',
      path: 'M250,310 C234,292 210,264 194,240 C182,222 176,212 180,220 C184,230 202,256 224,282 C240,300 248,310 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'bp4',
      label: '後花びら 右',
      path: 'M250,310 C266,292 290,264 306,240 C318,222 324,212 320,220 C316,230 298,256 276,282 C260,300 252,310 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },

    // ─── Middle petals ───
    {
      id: 'mp1',
      label: '中花びら 左',
      path: 'M250,310 C240,286 226,250 218,220 C212,196 210,178 216,176 C222,174 228,192 234,216 C242,248 250,288 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'mp2',
      label: '中花びら 中左',
      path: 'M250,310 C246,284 240,248 238,218 C236,194 238,176 244,176 C250,176 252,194 252,218 C252,250 250,290 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'mp3',
      label: '中花びら 中右',
      path: 'M250,310 C254,284 260,248 262,218 C264,194 262,176 256,176 C250,176 248,194 248,218 C248,250 250,290 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'mp4',
      label: '中花びら 右',
      path: 'M250,310 C260,286 274,250 282,220 C288,196 290,178 284,176 C278,174 272,192 266,216 C258,248 250,288 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },

    // ─── Inner front petals ───
    {
      id: 'fp1',
      label: '前花びら 左',
      path: 'M250,310 C244,290 234,262 228,238 C224,220 224,208 230,210 C236,212 240,228 244,250 C248,274 250,298 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.6,
    },
    {
      id: 'fp2',
      label: '前花びら 右',
      path: 'M250,310 C256,290 266,262 272,238 C276,220 276,208 270,210 C264,212 260,228 256,250 C252,274 250,298 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.6,
    },

    // ─── Petal veins ───
    {
      id: 'veins',
      label: '花びらの脈',
      path: 'M250,310 C244,286 234,254 226,228 M250,310 C250,284 250,248 250,220 M250,310 C256,286 266,254 274,228 M250,310 C236,296 214,272 196,254 M250,310 C264,296 286,272 304,254',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.5,
    },

    // ─── Seed pod ───
    {
      id: 'seedpod',
      label: '花托（蜂巣）',
      path: 'M250,310 C240,306 232,296 232,286 C232,274 240,266 250,266 C260,266 268,274 268,286 C268,296 260,306 250,310 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'seed1',
      label: '種穴 上',
      path: 'M250,274 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'seed2',
      label: '種穴 左',
      path: 'M242,282 m-2.5,0 a2.5,2.5 0 1,0 5,0 a2.5,2.5 0 1,0 -5,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'seed3',
      label: '種穴 右',
      path: 'M258,282 m-2.5,0 a2.5,2.5 0 1,0 5,0 a2.5,2.5 0 1,0 -5,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'seed4',
      label: '種穴 下左',
      path: 'M246,292 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'seed5',
      label: '種穴 下右',
      path: 'M254,292 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },

    // ─── Stem ───
    {
      id: 'stem',
      label: '茎',
      path: 'M250,310 C248,340 246,380 244,420 C242,455 240,490 238,520',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 4,
    },
    {
      id: 'stem-thorns',
      label: '茎のトゲ',
      path: 'M248,350 C244,346 240,348 M246,380 C242,376 238,378 M246,410 C250,406 254,408 M244,440 C240,436 236,438 M244,470 C248,466 252,468',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },

    // ─── Lily pad 1 ───
    {
      id: 'pad1',
      label: '蓮の葉 左',
      path: 'M50,480 C42,460 50,435 75,420 C100,408 135,405 160,415 C185,425 195,448 180,470 C165,488 135,498 105,498 C75,498 55,492 50,480 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.6,
    },
    {
      id: 'pad1-notch',
      label: '蓮の葉1 切込み',
      path: 'M118,498 C115,485 112,465 118,450',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 1.2,
    },
    {
      id: 'pad1-veins',
      label: '蓮の葉1 葉脈',
      path: 'M118,455 C100,448 82,440 68,432 M118,455 C106,440 92,425 82,414 M118,455 C130,440 142,428 154,418 M118,455 C134,450 150,446 164,444 M118,455 C118,472 118,486 118,496',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.6,
    },

    // ─── Lily pad 2 ───
    {
      id: 'pad2',
      label: '蓮の葉 右',
      path: 'M350,490 C342,472 350,450 374,438 C398,426 428,424 450,434 C472,444 478,462 465,480 C452,494 428,502 402,502 C376,502 356,498 350,490 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.6,
    },
    {
      id: 'pad2-notch',
      label: '蓮の葉2 切込み',
      path: 'M410,502 C408,490 406,472 410,458',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 1.2,
    },
    {
      id: 'pad2-veins',
      label: '蓮の葉2 葉脈',
      path: 'M410,465 C394,458 378,450 366,444 M410,465 C400,450 390,436 380,428 M410,465 C422,452 434,442 446,436 M410,465 C426,462 440,460 454,458 M410,465 C410,480 410,492 410,500',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.6,
    },

    // ─── Water surface ───
    {
      id: 'water',
      label: '水面',
      path: 'M0,420 C40,414 80,424 120,418 C160,412 200,422 240,416 C280,410 320,424 360,418 C400,412 440,420 500,415 L500,600 L0,600 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1,
    },

    // ─── Water ripples ───
    {
      id: 'ripple1',
      label: '波紋 1',
      path: 'M210,540 C225,536 240,538 255,535 C270,532 285,536 300,534',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.7,
    },
    {
      id: 'ripple2',
      label: '波紋 2',
      path: 'M190,560 C210,555 230,558 250,554 C270,550 290,554 310,552',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.5,
    },
    {
      id: 'ripple3',
      label: '波紋 3',
      path: 'M170,575 C200,570 230,574 260,568 C290,562 320,568 350,564',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.4,
    },
  ],
};

/* ================================================================
   CAT — Sitting Cat  (detailed illustration)
   ================================================================ */
const cat: ColoringTemplate = {
  id: 'cat',
  name: '猫',
  category: '動物',
  description: '座り猫の詳細な線画イラスト',
  viewBox: '0 0 400 480',
  regions: [
    // ─── Body ───
    {
      id: 'body',
      label: '胴体',
      path: 'M155,220 C140,244 128,276 126,310 C124,344 130,374 148,398 C160,414 176,426 196,432 L204,432 C224,426 240,414 252,398 C270,374 276,344 274,310 C272,276 260,244 245,220 C234,204 220,194 200,192 C180,194 166,204 155,220 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 2,
    },
    {
      id: 'body-fur',
      label: '胴体 毛並み',
      path: 'M162,260 C166,266 168,274 166,280 M238,260 C234,266 232,274 234,280 M156,300 C160,304 164,312 162,318 M244,300 C240,304 236,312 238,318 M166,350 C168,356 170,364 168,370 M234,350 C232,356 230,364 232,370',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.6,
    },

    // ─── Head ───
    {
      id: 'head',
      label: '頭',
      path: 'M150,194 C140,176 136,154 138,134 C140,116 148,102 162,92 C174,84 188,80 200,80 C212,80 226,84 238,92 C252,102 260,116 262,134 C264,154 260,176 250,194 C240,208 224,218 200,218 C176,218 160,208 150,194 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 2,
    },
    {
      id: 'head-fur',
      label: '頭 頬の毛',
      path: 'M148,178 C152,182 154,188 152,192 M252,178 C248,182 246,188 248,192',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.6,
    },

    // ─── Ears ───
    {
      id: 'ear-left',
      label: '左耳',
      path: 'M148,136 C144,116 138,90 132,68 C128,52 134,42 142,46 C152,52 160,76 164,102 C166,122 160,136 148,136 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.8,
    },
    {
      id: 'ear-left-inner',
      label: '左耳 内側',
      path: 'M152,130 C150,114 146,94 142,76 C140,66 144,62 148,66 C154,72 158,92 158,112 C158,124 156,130 152,130 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1,
    },
    {
      id: 'ear-right',
      label: '右耳',
      path: 'M252,136 C256,116 262,90 268,68 C272,52 266,42 258,46 C248,52 240,76 236,102 C234,122 240,136 252,136 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.8,
    },
    {
      id: 'ear-right-inner',
      label: '右耳 内側',
      path: 'M248,130 C250,114 254,94 258,76 C260,66 256,62 252,66 C246,72 242,92 242,112 C242,124 244,130 248,130 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1,
    },

    // ─── Eyes ───
    {
      id: 'eye-left',
      label: '左目',
      path: 'M170,154 C166,144 168,132 178,128 C188,124 198,130 200,140 C202,150 196,158 186,160 C176,162 172,160 170,154 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'eye-left-pupil',
      label: '左瞳',
      path: 'M184,140 C182,134 184,130 188,130 C192,130 192,136 190,142 C188,146 186,146 184,140 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1,
    },
    {
      id: 'eye-left-shine',
      label: '左目 光',
      path: 'M180,134 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.6,
    },
    {
      id: 'eye-right',
      label: '右目',
      path: 'M230,154 C234,144 232,132 222,128 C212,124 202,130 200,140 C198,150 204,158 214,160 C224,162 228,160 230,154 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'eye-right-pupil',
      label: '右瞳',
      path: 'M216,140 C218,134 216,130 212,130 C208,130 208,136 210,142 C212,146 214,146 216,140 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1,
    },
    {
      id: 'eye-right-shine',
      label: '右目 光',
      path: 'M220,134 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.6,
    },

    // ─── Nose & Mouth ───
    {
      id: 'nose',
      label: '鼻',
      path: 'M195,168 C197,164 203,164 205,168 C208,174 204,180 200,180 C196,180 192,174 195,168 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.2,
    },
    {
      id: 'mouth',
      label: '口',
      path: 'M200,180 C194,188 184,194 176,192 M200,180 C206,188 216,194 224,192',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 1.2,
    },
    {
      id: 'chin',
      label: 'あご',
      path: 'M186,196 C192,200 196,204 200,204 C204,204 208,200 214,196',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },

    // ─── Whiskers ───
    {
      id: 'whiskers-left',
      label: '左ひげ',
      path: 'M172,172 C154,168 134,164 112,162 M170,178 C152,178 132,178 110,180 M172,184 C156,188 136,194 114,200',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'whiskers-right',
      label: '右ひげ',
      path: 'M228,172 C246,168 266,164 288,162 M230,178 C248,178 268,178 290,180 M228,184 C244,188 264,194 286,200',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },

    // ─── Chest marking ───
    {
      id: 'chest',
      label: '胸の模様',
      path: 'M180,240 C188,230 196,226 200,226 C204,226 212,230 220,240 C226,252 224,272 218,288 C214,298 208,304 200,304 C192,304 186,298 182,288 C176,272 174,252 180,240 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1,
    },

    // ─── Tail ───
    {
      id: 'tail',
      label: 'しっぽ',
      path: 'M274,330 C286,316 300,296 312,278 C322,262 330,248 334,238 C338,228 336,222 330,224 C324,226 318,240 312,258 C306,276 298,294 288,310',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 6,
    },
    {
      id: 'tail-tip',
      label: 'しっぽ先端',
      path: 'M330,224 C326,216 320,210 314,212 C308,214 308,224 312,234',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 5,
    },

    // ─── Paws ───
    {
      id: 'paw-left',
      label: '左前足',
      path: 'M166,410 C162,420 160,430 162,440 C164,448 172,452 180,450 C188,448 190,440 188,432 C186,424 182,416 178,410',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'paw-left-pads',
      label: '左前足 肉球',
      path: 'M168,438 C170,442 174,444 M174,438 C176,443 178,446 M180,438 C180,442 182,444',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.7,
    },
    {
      id: 'paw-right',
      label: '右前足',
      path: 'M222,410 C218,416 214,424 212,432 C210,440 212,448 220,450 C228,452 236,448 238,440 C240,430 238,420 234,410',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'paw-right-pads',
      label: '右前足 肉球',
      path: 'M220,438 C218,442 216,444 M226,438 C224,443 222,446 M232,438 C232,442 230,444',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.7,
    },

    // ─── Forehead M ───
    {
      id: 'forehead-m',
      label: '額のM模様',
      path: 'M168,116 C174,108 182,104 188,108 C194,112 196,106 200,102 C204,106 206,112 212,108 C218,104 226,108 232,116',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },
  ],
};

/* ================================================================
   ASANOHA — Hemp-leaf geometric pattern
   ================================================================ */
const asanoha: ColoringTemplate = {
  id: 'asanoha',
  name: '麻の葉模様',
  category: '幾何学',
  description: '日本の伝統的な幾何学模様',
  viewBox: '0 0 400 400',
  regions: (() => {
    const regions = [];
    const size = 80;
    const h = size * Math.sqrt(3) / 2;
    let idx = 0;

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const cx = 80 + col * size * 1.5;
        const cy = 80 + row * h * 2 + (col % 2 === 1 ? h : 0);

        for (let i = 0; i < 6; i++) {
          const angle1 = (i * 60 - 90) * Math.PI / 180;
          const angle2 = ((i + 1) * 60 - 90) * Math.PI / 180;
          const x1 = cx + size * 0.5 * Math.cos(angle1);
          const y1 = cy + size * 0.5 * Math.sin(angle1);
          const x2 = cx + size * 0.5 * Math.cos(angle2);
          const y2 = cy + size * 0.5 * Math.sin(angle2);

          regions.push({
            id: `tri-${idx}`,
            label: `三角形 ${idx + 1}`,
            path: `M${cx.toFixed(1)},${cy.toFixed(1)} L${x1.toFixed(1)},${y1.toFixed(1)} L${x2.toFixed(1)},${y2.toFixed(1)} Z`,
            defaultFill: '#ffffff',
            stroke: '#333',
            strokeWidth: 1.2,
          });
          idx++;
        }

        for (let i = 0; i < 6; i++) {
          const angle = (i * 60 - 90) * Math.PI / 180;
          const x = cx + size * 0.5 * Math.cos(angle);
          const y = cy + size * 0.5 * Math.sin(angle);
          regions.push({
            id: `line-${idx}`,
            label: `線 ${idx + 1}`,
            path: `M${cx.toFixed(1)},${cy.toFixed(1)} L${x.toFixed(1)},${y.toFixed(1)}`,
            defaultFill: 'none',
            stroke: '#333',
            strokeWidth: 0.8,
          });
          idx++;
        }
      }
    }

    regions.push({
      id: 'border',
      label: '枠',
      path: 'M20,20 L380,20 L380,380 L20,380 Z',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 2,
    });

    return regions;
  })(),
};

/* ================================================================
   FUJI — Mt. Fuji and Lake  (landscape illustration)
   ================================================================ */
const fujiSan: ColoringTemplate = {
  id: 'fuji',
  name: '富士山と湖',
  category: '自然',
  description: '富士山、湖、雲、木々のある風景画',
  viewBox: '0 0 600 420',
  regions: [
    // ─── Sky ───
    {
      id: 'sky',
      label: '空',
      path: 'M0,0 L600,0 L600,240 C560,245 520,238 480,242 C440,246 400,238 360,242 C320,246 280,238 240,242 C200,246 160,238 120,242 C80,246 40,238 0,242 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.5,
    },

    // ─── Sun ───
    {
      id: 'sun',
      label: '太陽',
      path: 'M490,65 m-28,0 a28,28 0 1,0 56,0 a28,28 0 1,0 -56,0',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'sun-glow',
      label: '太陽の光',
      path: 'M490,30 L490,18 M490,100 L490,112 M525,65 L537,65 M455,65 L443,65 M516,39 L524,31 M464,91 L456,99 M516,91 L524,99 M464,39 L456,31',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 1,
    },

    // ─── Clouds ───
    {
      id: 'cloud1',
      label: '雲 1',
      path: 'M60,55 C56,42 64,30 78,28 C88,22 102,24 112,32 C120,24 134,26 142,36 C150,30 160,36 162,48 C164,60 152,66 138,68 C122,70 102,72 82,70 C64,68 56,62 60,55 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.2,
    },
    {
      id: 'cloud2',
      label: '雲 2',
      path: 'M340,75 C338,64 344,54 356,52 C364,46 376,48 384,54 C390,48 400,50 406,58 C412,54 420,58 420,68 C420,78 412,82 400,82 C388,84 372,84 358,82 C344,80 338,78 340,75 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },

    // ─── Mt. Fuji ───
    {
      id: 'fuji-body',
      label: '富士山（山体）',
      path: 'M300,80 C278,108 248,148 220,185 C196,216 172,240 148,258 C130,270 112,278 96,282 L504,282 C488,278 470,270 452,258 C428,240 404,216 380,185 C352,148 322,108 300,80 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 2.2,
    },
    {
      id: 'fuji-snow',
      label: '富士山（雪帽）',
      path: 'M300,80 C290,96 276,116 264,132 C256,144 258,152 268,148 C278,144 290,138 300,136 C310,138 322,144 332,148 C342,152 344,144 336,132 C324,116 310,96 300,80 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'fuji-ridge1',
      label: '稜線 1',
      path: 'M264,175 C278,168 292,164 300,162 C308,164 322,168 336,175',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.6,
    },
    {
      id: 'fuji-ridge2',
      label: '稜線 2',
      path: 'M234,210 C258,200 280,194 300,192 C320,194 342,200 366,210',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.5,
    },

    // ─── Background mountains ───
    {
      id: 'mountain-left',
      label: '左の山',
      path: 'M0,282 C12,268 28,246 44,228 C58,214 68,206 82,212 C96,218 110,242 130,266 C142,280 148,282 148,282 L0,282 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'mountain-right',
      label: '右の山',
      path: 'M480,282 C490,266 504,244 520,230 C530,222 540,218 550,224 C560,232 576,258 590,276 L600,282 L480,282 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'mountain-trees',
      label: '山の木々',
      path: 'M82,212 C86,206 90,208 88,214 M90,218 C94,212 98,214 96,220 M106,224 C110,218 114,220 112,226 M530,224 C534,218 538,220 536,226 M544,230 C548,224 552,226 550,232',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.7,
    },

    // ─── Lake ───
    {
      id: 'lake',
      label: '湖',
      path: 'M0,282 L600,282 L600,360 C560,355 520,362 480,358 C440,354 400,360 360,356 C320,352 280,360 240,356 C200,352 160,360 120,356 C80,352 40,358 0,360 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1,
    },
    {
      id: 'reflection',
      label: '逆さ富士',
      path: 'M300,340 C292,330 280,316 270,306 C264,300 266,296 272,298 C282,302 294,308 300,310 C306,308 318,302 328,298 C334,296 336,300 330,306 C320,316 308,330 300,340 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'lake-ripples',
      label: '湖面の波',
      path: 'M260,320 C270,318 280,320 290,318 C300,316 310,320 320,318 M240,330 C256,326 272,330 288,326 C304,322 320,328 336,326 M220,342 C244,338 268,342 292,338 C316,334 340,340 364,338',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.4,
    },

    // ─── Shore ───
    {
      id: 'shore',
      label: '岸辺',
      path: 'M0,360 C30,355 60,362 90,358 C120,354 150,360 180,356 C210,352 240,360 270,356 C300,352 330,360 360,356 C390,352 420,360 450,356 C480,352 510,358 540,356 C570,354 590,358 600,360 L600,420 L0,420 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1,
    },

    // ─── Pine tree left ───
    {
      id: 'pine1-trunk',
      label: '松1 幹',
      path: 'M60,360 C58,346 56,328 54,312 C52,298 50,286 48,276',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 3.5,
    },
    {
      id: 'pine1-f1',
      label: '松1 葉群1',
      path: 'M48,278 C36,268 24,262 20,266 C16,270 22,280 34,284 C44,288 52,284 48,278 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'pine1-f2',
      label: '松1 葉群2',
      path: 'M48,278 C60,268 72,262 76,266 C80,270 74,280 62,284 C52,288 44,284 48,278 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'pine1-f3',
      label: '松1 葉群3',
      path: 'M48,278 C46,264 44,250 48,240 C52,232 58,236 60,246 C62,258 56,272 48,278 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.3,
    },
    {
      id: 'pine1-needles',
      label: '松1 松葉',
      path: 'M30,270 C26,266 28,264 M38,266 C34,262 36,260 M56,266 C60,262 58,260 M66,270 C70,266 68,264 M48,248 C44,244 46,242 M52,252 C56,248 54,246',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.5,
    },

    // ─── Pine tree right ───
    {
      id: 'pine2-trunk',
      label: '松2 幹',
      path: 'M540,360 C542,344 544,324 545,308 C546,294 546,284 545,276',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 3,
    },
    {
      id: 'pine2-f1',
      label: '松2 葉群1',
      path: 'M545,278 C535,270 526,264 522,268 C518,272 524,280 534,284 C542,286 546,282 545,278 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.2,
    },
    {
      id: 'pine2-f2',
      label: '松2 葉群2',
      path: 'M545,278 C555,270 564,264 568,268 C572,272 566,280 556,284 C548,286 544,282 545,278 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.2,
    },
    {
      id: 'pine2-f3',
      label: '松2 葉群3',
      path: 'M545,278 C544,266 542,252 546,244 C550,238 554,242 556,250 C558,260 552,274 545,278 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.2,
    },

    // ─── Grass ───
    {
      id: 'grass-left',
      label: '草 左',
      path: 'M30,380 C28,370 30,360 32,356 M40,378 C38,366 40,358 42,354 M50,380 C50,368 52,360 54,356',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'grass-right',
      label: '草 右',
      path: 'M530,380 C528,370 530,362 532,358 M540,378 C540,368 542,360 544,356 M550,380 C550,370 552,362 554,358',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },

    // ─── Birds ───
    {
      id: 'birds',
      label: '鳥',
      path: 'M180,40 C186,34 192,36 196,40 C200,36 206,34 212,40 M220,52 C226,46 232,48 236,52 C240,48 246,46 252,52',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },
  ],
};

/* ================================================================
   MOMIJI — Autumn Maple Leaves  (detailed botanical)
   ================================================================ */
const momiji: ColoringTemplate = {
  id: 'momiji',
  name: '紅葉',
  category: '季節',
  description: '秋の枝に連なるもみじの葉',
  viewBox: '0 0 500 600',
  regions: [
    // ─── Branches ───
    {
      id: 'branch-main',
      label: '主幹',
      path: 'M250,590 C246,540 240,480 232,420 C224,360 216,310 208,270 C202,245 196,228 190,215',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 7,
    },
    {
      id: 'branch-bark',
      label: '樹皮模様',
      path: 'M246,520 C250,512 248,504 244,498 M238,450 C242,442 240,434 236,428 M228,380 C232,372 230,364 226,358 M218,320 C222,312 220,306 216,302',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'branch-left',
      label: '左枝',
      path: 'M215,290 C196,274 168,254 138,240 C116,230 94,224 72,222',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 4,
    },
    {
      id: 'branch-right',
      label: '右枝',
      path: 'M225,330 C250,310 284,286 318,270 C342,260 368,254 395,256',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 4,
    },
    {
      id: 'branch-top',
      label: '上枝',
      path: 'M195,240 C184,218 170,192 158,170 C150,154 144,142 140,132',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 3.5,
    },
    {
      id: 'twig1',
      label: '小枝 1',
      path: 'M90,228 C82,218 72,208 62,202',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 2,
    },
    {
      id: 'twig2',
      label: '小枝 2',
      path: 'M380,258 C392,248 406,240 420,236',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 2,
    },

    // ─── Maple Leaf A (top, large — 7 lobes) ───
    {
      id: 'leafA-l1',
      label: '紅葉A 上',
      path: 'M140,132 C138,116 134,96 132,78 C131,66 136,58 142,64 C148,70 148,86 146,104 C144,118 142,128 140,132 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafA-l2',
      label: '紅葉A 右上',
      path: 'M140,132 C150,122 164,112 178,108 C188,106 192,112 186,118 C180,124 166,130 152,134 C146,136 142,134 140,132 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafA-l3',
      label: '紅葉A 右',
      path: 'M140,132 C150,136 164,142 174,150 C182,156 182,164 176,164 C170,164 158,156 148,148 C142,142 140,136 140,132 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafA-l4',
      label: '紅葉A 右下',
      path: 'M140,132 C146,140 152,154 154,166 C156,174 150,178 146,172 C142,166 138,152 138,142 C138,136 140,132 140,132 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafA-l5',
      label: '紅葉A 左下',
      path: 'M140,132 C134,140 128,154 126,166 C124,174 130,178 134,172 C138,166 142,152 142,142 C142,136 140,132 140,132 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafA-l6',
      label: '紅葉A 左',
      path: 'M140,132 C130,136 116,142 106,150 C98,156 98,164 104,164 C110,164 122,156 132,148 C138,142 140,136 140,132 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafA-l7',
      label: '紅葉A 左上',
      path: 'M140,132 C130,122 116,112 102,108 C92,106 88,112 94,118 C100,124 114,130 128,134 C134,136 138,134 140,132 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafA-veins',
      label: '紅葉A 葉脈',
      path: 'M140,132 C138,112 134,90 132,74 M140,132 C152,122 168,114 180,110 M140,132 C152,138 166,146 176,154 M140,132 C146,144 150,160 154,170 M140,132 C134,144 130,160 126,170 M140,132 C128,138 114,146 104,154 M140,132 C128,122 112,114 100,110',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.5,
    },

    // ─── Maple Leaf B (left, medium) ───
    {
      id: 'leafB-l1',
      label: '紅葉B 上',
      path: 'M62,202 C60,188 56,172 54,158 C52,148 58,142 62,148 C66,154 66,170 64,184 C64,194 62,200 62,202 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'leafB-l2',
      label: '紅葉B 右上',
      path: 'M62,202 C70,194 82,186 92,184 C100,182 102,188 96,192 C90,196 78,200 68,202 C64,204 62,202 62,202 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'leafB-l3',
      label: '紅葉B 右下',
      path: 'M62,202 C68,210 74,222 74,232 C74,238 70,240 66,236 C62,232 60,220 60,210 C60,206 62,202 62,202 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'leafB-l4',
      label: '紅葉B 左下',
      path: 'M62,202 C56,210 50,222 48,232 C46,238 50,240 54,236 C58,232 62,220 62,210 C64,206 62,202 62,202 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'leafB-l5',
      label: '紅葉B 左上',
      path: 'M62,202 C54,194 42,186 32,184 C24,182 22,188 28,192 C34,196 46,200 56,202 C60,204 62,202 62,202 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.4,
    },
    {
      id: 'leafB-veins',
      label: '紅葉B 葉脈',
      path: 'M62,202 C60,186 58,170 56,156 M62,202 C72,194 84,188 94,186 M62,202 C68,214 72,226 74,234 M62,202 C56,214 50,226 48,234 M62,202 C52,194 40,188 30,186',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.4,
    },

    // ─── Maple Leaf C (right, large) ───
    {
      id: 'leafC-l1',
      label: '紅葉C 上',
      path: 'M420,236 C418,218 414,196 412,176 C411,164 416,156 422,162 C428,168 428,188 426,208 C424,224 422,234 420,236 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafC-l2',
      label: '紅葉C 右上',
      path: 'M420,236 C430,226 444,216 456,212 C466,210 468,216 462,222 C456,228 442,234 430,238 C424,240 420,238 420,236 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafC-l3',
      label: '紅葉C 右',
      path: 'M420,236 C428,240 440,248 448,258 C454,266 450,272 444,268 C438,264 428,254 422,246 C420,242 420,238 420,236 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafC-l4',
      label: '紅葉C 右下',
      path: 'M420,236 C426,244 432,260 432,272 C432,280 428,282 424,276 C420,270 418,256 418,246 C420,240 420,238 420,236 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafC-l5',
      label: '紅葉C 左下',
      path: 'M420,236 C414,244 408,260 406,272 C404,280 408,282 412,276 C416,270 420,256 420,246 C422,240 420,238 420,236 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafC-l6',
      label: '紅葉C 左',
      path: 'M420,236 C412,240 398,248 390,258 C384,266 388,272 394,268 C400,264 412,254 418,246 C420,242 420,238 420,236 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafC-l7',
      label: '紅葉C 左上',
      path: 'M420,236 C410,226 396,216 384,212 C374,210 372,216 378,222 C384,228 398,234 410,238 C416,240 420,238 420,236 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.5,
    },
    {
      id: 'leafC-veins',
      label: '紅葉C 葉脈',
      path: 'M420,236 C418,216 416,196 414,178 M420,236 C432,226 446,218 458,214 M420,236 C430,242 442,252 450,260 M420,236 C426,248 430,264 432,274 M420,236 C414,248 408,264 406,274 M420,236 C410,242 396,252 388,260 M420,236 C408,226 394,218 382,214',
      defaultFill: 'none',
      stroke: '#333',
      strokeWidth: 0.5,
    },

    // ─── Small leaf on sub-branch ───
    {
      id: 'leafD-l1',
      label: '小紅葉D 上',
      path: 'M180,262 C178,250 176,236 178,228 C180,222 184,226 184,234 C184,242 182,254 180,262 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },
    {
      id: 'leafD-l2',
      label: '小紅葉D 右',
      path: 'M180,262 C188,256 198,252 204,254 C208,256 206,260 200,262 C194,264 186,264 180,262 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },
    {
      id: 'leafD-l3',
      label: '小紅葉D 左',
      path: 'M180,262 C172,256 162,252 156,254 C152,256 154,260 160,262 C166,264 174,264 180,262 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },
    {
      id: 'leafD-l4',
      label: '小紅葉D 右下',
      path: 'M180,262 C184,268 188,278 186,284 C184,288 180,286 178,280 C176,274 178,268 180,262 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },
    {
      id: 'leafD-l5',
      label: '小紅葉D 左下',
      path: 'M180,262 C176,268 172,278 174,284 C176,288 180,286 182,280 C184,274 182,268 180,262 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },

    // ─── Small leaf E ───
    {
      id: 'leafE-l1',
      label: '小紅葉E 上',
      path: 'M320,278 C318,266 316,252 318,244 C320,238 324,242 324,250 C324,258 322,270 320,278 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },
    {
      id: 'leafE-l2',
      label: '小紅葉E 右',
      path: 'M320,278 C328,272 338,268 344,270 C348,272 346,276 340,278 C334,280 326,280 320,278 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },
    {
      id: 'leafE-l3',
      label: '小紅葉E 左',
      path: 'M320,278 C312,272 302,268 296,270 C292,272 294,276 300,278 C306,280 314,280 320,278 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 1.1,
    },

    // ─── Falling leaves ───
    {
      id: 'fall1-l1',
      label: '落ち葉1 上',
      path: 'M360,130 C358,120 356,108 358,102 C360,98 362,100 362,106 C362,112 360,124 360,130 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'fall1-l2',
      label: '落ち葉1 右',
      path: 'M360,130 C366,126 374,124 378,126 C380,128 378,132 374,132 C370,132 364,132 360,130 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'fall1-l3',
      label: '落ち葉1 左',
      path: 'M360,130 C354,126 346,124 342,126 C340,128 342,132 346,132 C350,132 356,132 360,130 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'fall2-l1',
      label: '落ち葉2 上',
      path: 'M460,380 C458,370 456,358 458,352 C460,348 462,350 462,356 C462,362 460,374 460,380 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'fall2-l2',
      label: '落ち葉2 右',
      path: 'M460,380 C466,376 474,374 478,376 C480,378 478,382 474,382 C470,382 464,382 460,380 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'fall2-l3',
      label: '落ち葉2 左',
      path: 'M460,380 C454,376 446,374 442,376 C440,378 442,382 446,382 C450,382 456,382 460,380 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
    {
      id: 'fall3',
      label: '落ち葉3',
      path: 'M70,420 C68,412 66,402 68,396 C70,392 72,394 72,400 C72,406 70,414 70,420 Z M70,420 C76,416 82,414 86,416 C88,418 84,420 80,420 Z M70,420 C64,416 58,414 54,416 C52,418 56,420 60,420 Z',
      defaultFill: '#ffffff',
      stroke: '#333',
      strokeWidth: 0.8,
    },
  ],
};

/* ==================== All Templates ==================== */
export const templates: ColoringTemplate[] = [
  sakura,
  lotus,
  cat,
  asanoha,
  fujiSan,
  momiji,
];

/** Get a template by id */
export function getTemplateById(id: string): ColoringTemplate | undefined {
  return templates.find((t) => t.id === id);
}

/** Get all unique categories */
export function getCategories(): TemplateCategory[] {
  return [...new Set(templates.map((t) => t.category))];
}
