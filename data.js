/* ============================================================
   南方酒館 演出班表 — 資料檔
   以後要更新,只要改這個檔案就好,不用動 index.html / act.html

   1) MONTH_LABEL：目前顯示的月份標題
   2) ACTS：每位歌手/組合的資料。videos 陣列請貼「南方酒館官方 IG」
      貼文或限時動態的網址(手機 IG App 內點分享 → 複製連結)。
      貼文網址長這樣：https://www.instagram.com/reel/xxxxxxxxx/
      videos 留空時,頁面會顯示「影片準備中」。
   3) SCHEDULE：每一天的演出時段,對應到 ACTS 裡的 id。
      公休寫 { closed: true }
      包場寫 { private: true, sets:[...] }  sets 可留空陣列
   ============================================================ */

const MONTH_LABEL = "2026 年 9 月";
const MONTH_SUBLABEL = "南方酒館 演出班表";

const ACTS = {
  "bb": {
    name: "ㄌㄌ",
    videos: [
      "https://www.instagram.com/reel/DcTSesaz41V/",
      "https://www.instagram.com/reel/DZ6e37Wvxll/",
      "https://www.instagram.com/reel/DPyd6_IktMN/"
    ]
  },
  "suzhan-weiye": {
    name: "蘇珊 & 威爺",
    videos: [
      "https://www.instagram.com/reel/DZk-a_MzLQj/"
    ]
  },
  "makewish": {
    name: "Makewish",
    videos: [
      "https://www.instagram.com/reel/DVeQW5oEkGt/",
      "https://www.instagram.com/reel/DTDUHuVEpC-/"
    ]
  },
  "anna-bb": {
    name: "安娜 & ㄌㄌ",
    videos: [
      "https://www.instagram.com/reel/DUQSuOSEuvU/"
    ]
  },
  "qiaorou": {
    name: "巧柔",
    videos: [
      "https://www.instagram.com/reel/DUp4cwRklMr/",
      "https://www.instagram.com/reel/DTXFWtTgCOB/"
    ]
  },
  "nanfang-xiaolai": {
    name: "南方樂團 ft. 小賴",
    videos: [
      "https://www.instagram.com/reel/DL9jKR3ysAw/",
      "https://www.instagram.com/reel/DXazOywD-Jm/",
      "https://www.instagram.com/reel/DUsvFz4ks9G/"
    ]
  },
  "mianmian": {
    name: "瞇瞇",
    videos: [
      "https://www.instagram.com/reel/DZCs79dPU4R/",
      "https://www.instagram.com/reel/DaK53gHvSkB/"
    ]
  },
  "binggan": {
    name: "餅乾",
    videos: [
      "https://www.instagram.com/reel/DQ_sNQfEqah/",
      "https://www.instagram.com/reel/DSFQD8aEnfj/"
    ]
  },
  "tiehan-rouqing": {
    name: "鐵焊柔情",
    videos: []
  },
  "qilai": {
    name: "七賴",
    videos: [
      "https://www.instagram.com/reel/DaS68ZyPp89/",
      "https://www.instagram.com/reel/DaA8hcePl7b/",
      "https://www.instagram.com/reel/DYVDIZBTnHS/",
      "https://www.instagram.com/reel/DMFmG14SUdL/"
    ]
  },
  "mianmian-aqi": {
    name: "瞇瞇 & 阿七",
    videos: [
      "https://www.instagram.com/reel/DcRKVD3PVus/"
    ]
  },
  "nanfang-qiaorou": {
    name: "南方樂團 ft. 巧柔",
    videos: [
      "https://www.instagram.com/reel/DbDdw8pzCEn/"
    ]
  },
  "anna-kunlin": {
    name: "安娜 & 昆霖",
    videos: []
  },
  "nanfang-anbb": {
    name: "南方樂團 ft. 安娜ㄌㄌ",
    videos: [
      "https://www.instagram.com/reel/Dar8qqGPAId/"
    ]
  },
  "jay-cosplay": {
    name: "周杰倫模仿大賽",
    videos: []
  }
};

/* weekday: 0=一 1=二 2=三 3=四 4=五 5=六 6=日 (依這個月第一天對齊用) */
const FIRST_WEEKDAY = 1; // 9/1 是星期二 → index 1
const DAYS_IN_MONTH = 30;

const SCHEDULE = {
  1:  { sets: [ { t: "20:30", a: "bb" }, { t: "22:00", a: "bb" } ] },
  2:  { sets: [ { t: "20:30", a: "bb" }, { t: "22:00", a: "bb" } ] },
  3:  { sets: [ { t: "20:30", a: "suzhan-weiye" }, { t: "22:00", a: "suzhan-weiye" } ] },
  4:  { sets: [ { t: "19:00", a: "makewish" }, { t: "20:30", a: "makewish" }, { t: "22:00", a: "anna-bb" }, { t: "23:30", a: "anna-bb" } ] },
  5:  { sets: [ { t: "19:00", a: "qiaorou" }, { t: "20:30", a: "qiaorou" }, { t: "22:00", a: "nanfang-xiaolai" }, { t: "23:30", a: "nanfang-xiaolai" } ] },
  6:  { sets: [ { t: "19:00", a: "mianmian" }, { t: "20:30", a: "mianmian" }, { t: "22:00", a: "binggan" }, { t: "23:30", a: "binggan" } ] },
  7:  { closed: true },
  8:  { sets: [ { t: "20:30", a: "tiehan-rouqing" }, { t: "22:00", a: "tiehan-rouqing" } ] },
  9:  { sets: [ { t: "20:30", a: "bb" }, { t: "22:00", a: "bb" } ] },
  10: { sets: [ { t: "20:30", a: "suzhan-weiye" }, { t: "22:00", a: "suzhan-weiye" } ] },
  11: { sets: [ { t: "19:00", a: "makewish" }, { t: "20:30", a: "makewish" }, { t: "22:00", a: "anna-bb" }, { t: "23:30", a: "anna-bb" } ] },
  12: { sets: [ { t: "19:00", a: "qilai" }, { t: "20:30", a: "qilai" }, { t: "22:00", a: "nanfang-qiaorou" }, { t: "23:30", a: "nanfang-qiaorou" } ] },
  13: { sets: [ { t: "19:00", a: "mianmian-aqi" }, { t: "20:30", a: "mianmian-aqi" }, { t: "22:00", a: "binggan" }, { t: "23:30", a: "binggan" } ] },
  14: { closed: true },
  15: { sets: [ { t: "20:30", a: "qilai" }, { t: "22:00", a: "qilai" } ] },
  16: { sets: [ { t: "20:30", a: "bb" }, { t: "22:00", a: "bb" } ] },
  17: { sets: [ { t: "20:30", a: "suzhan-weiye" }, { t: "22:00", a: "suzhan-weiye" } ] },
  18: { sets: [ { t: "19:00", a: "makewish" }, { t: "20:30", a: "makewish" }, { t: "22:00", a: "anna-kunlin" }, { t: "23:30", a: "anna-kunlin" } ] },
  19: { private: true, sets: [ { t: "19:00", a: "anna-bb" }, { t: "20:30", a: "anna-bb" } ] },
  20: { private: true, sets: [] },
  21: { closed: true },
  22: { sets: [ { t: "20:30", a: "qilai" }, { t: "22:00", a: "qilai" } ] },
  23: { sets: [ { t: "20:30", a: "bb" }, { t: "22:00", a: "bb" } ] },
  24: { sets: [ { t: "20:30", a: "suzhan-weiye" }, { t: "22:00", a: "suzhan-weiye" } ] },
  25: { sets: [ { t: "19:00", a: "makewish" }, { t: "20:30", a: "makewish" }, { t: "22:00", a: "anna-bb" }, { t: "23:30", a: "anna-bb" } ] },
  26: { sets: [ { t: "19:00", a: "qiaorou" }, { t: "20:30", a: "qiaorou" }, { t: "22:00", a: "nanfang-anbb" }, { t: "23:30", a: "nanfang-anbb" } ] },
  27: { sets: [ { t: "19:00", a: "mianmian" }, { t: "20:30", a: "mianmian" }, { t: "22:00", a: "binggan" }, { t: "23:30", a: "binggan" } ] },
  28: { closed: true },
  29: { sets: [ { t: "19:00", a: "jay-cosplay" }, { t: "20:30", a: "jay-cosplay" } ] },
  30: { sets: [ { t: "20:30", a: "bb" }, { t: "22:00", a: "bb" } ] }
};
