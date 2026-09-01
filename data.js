/* ============================================================
   南方酒館 演出班表 — 資料檔
   以後要更新,只要改這個檔案就好,不用動 index.html / act.html

   1) MONTH_LABEL：目前顯示的月份標題
   2) ACTS：每位歌手/組合的資料。
      - intro / style / instruments / genres 這四個欄位分別對應
        「簡介」「演出形式」「樂器」「擅長歌曲種類」,直接把文字
        打在引號中間就好,例如 style: "雙人組合,主唱+吉他伴奏"。
        留空字串 "" 的話,歌手頁面上就不會顯示那一項。
      - videos 陣列請貼「南方酒館官方 IG」貼文或限時動態的網址
        (手機 IG App 內點分享 → 複製連結)。
        貼文網址長這樣：https://www.instagram.com/reel/xxxxxxxxx/
        videos 留空時,頁面會顯示「影片準備中」。
      - 提醒：每一筆資料的最後一個欄位「後面不要加逗號」,但中間
        每個欄位後面「都要加逗號」,包含 videos 陣列裡每一支影片
        網址中間也要用逗號隔開,少打一個逗號整個網站就會打不開。
   3) SCHEDULE：每一天的演出時段,對應到 ACTS 裡的 id。
      公休寫 { closed: true }
      包場寫 { private: true, sets:[...] }  sets 可留空陣列
   ============================================================ */

const MONTH_LABEL = "2026 年 9 月";
const MONTH_SUBLABEL = "南方酒館 演出班表";

const ACTS = {
  "bb": {
    name: "ㄌㄌ",
    intro: "南方酒館的固定班底,就算沒排班也會突然出現在店裡,唱腔溫暖細膩。",
    style: "單人自彈自唱",
    instruments: "吉他",
    genres: "抒情、民謠、華語流行",
    videos: [
      "https://www.instagram.com/reel/DcTSesaz41V/",
      "https://www.instagram.com/reel/DZ6e37Wvxll/",
      "https://www.instagram.com/reel/DPyd6_IktMN/"
    ]
  },
  "suzhan-weiye": {
    name: "蘇珊 & 威爺",
    intro: "資深老師級雙人組合。",
    style: "雙人男女組合",
    instruments: "keyboard",
    genres: "華語、英語金曲",
    videos: [
      "https://www.instagram.com/reel/DZk-a_MzLQj/"
    ]
  },
  "makewish": {
    name: "Makewish",
    intro: "阿七＆問問搭配的超強雙人組",
    style: "雙人男女組合",
    instruments: "吉他",
    genres: "經典中英流行、校園民歌",
    videos: [
      "https://www.instagram.com/reel/DVeQW5oEkGt/",
      "https://www.instagram.com/reel/DTDUHuVEpC-/"
    ]
  },
  "anna-bb": {
    name: "安娜 & ㄌㄌ",
    intro: "主持及歌唱水準一流的雙人組合",
    style: "雙人男女組合",
    instruments: "吉他",
    genres: "國台語流行、民謠",
    videos: [
      "https://www.instagram.com/reel/DUQSuOSEuvU/"
    ]
  },
  "qiaorou": {
    name: "巧柔",
    intro: "來自馬來西亞的獨特女聲",
    style: "雙人組合",
    instruments: "吉他",
    genres: "經典英語、華語、台語流行",
    videos: [
      "https://www.instagram.com/reel/DUp4cwRklMr/",
      "https://www.instagram.com/reel/DTXFWtTgCOB/"
    ]
  },
  "nanfang-xiaolai": {
    name: "南方樂團 ft. 小賴",
    intro: "百萬爆紅影片的南方打工仔,搭配full band給你滿滿的大平台",
    style: "樂團",
    instruments: "電吉他,貝斯,keyboard,爵士鼓",
    genres: "英語、華語流行歌曲、台灣獨立樂團歌曲",
    videos: [
      "https://www.instagram.com/reel/DL9jKR3ysAw/",
      "https://www.instagram.com/reel/DXazOywD-Jm/",
      "https://www.instagram.com/reel/DUsvFz4ks9G/"
    ]
  },
  "mianmian": {
    name: "瞇瞇",
    intro: "靦腆的笑容搭配唱入心坎裡的獨特嗓音,最適合喝一杯",
    style: "單人自彈自唱",
    instruments: "吉他",
    genres: "民謠、華語、台語流行",
    videos: [
      "https://www.instagram.com/reel/DZCs79dPU4R/",
      "https://www.instagram.com/reel/DaK53gHvSkB/"
    ]
  },
  "binggan": {
    name: "餅乾",
    intro: "會讓你帶著好心情走出這家店,主持功力一流",
    style: "單人自彈自唱",
    instruments: "吉他",
    genres: "民謠、華語流行",
    videos: [
      "https://www.instagram.com/reel/DQ_sNQfEqah/",
      "https://www.instagram.com/reel/DSFQD8aEnfj/"
    ]
  },
  "tiehan-rouqing": {
    name: "鐵焊柔情",
    intro: "原住民雙人組合",
    style: "雙人男歌手組合",
    instruments: "吉他",
    genres: "民謠、華語流行",
    videos: []
  },
  "qilai": {
    name: "七賴",
    intro: "finger style吉他王阿七搭配新生代歌手小賴的最強組合",
    style: "雙人男歌手組合",
    instruments: "吉他",
    genres: "民謠、華語、台語流行",
    videos: [
      "https://www.instagram.com/reel/DaS68ZyPp89/",
      "https://www.instagram.com/reel/DaA8hcePl7b/",
      "https://www.instagram.com/reel/DYVDIZBTnHS/",
      "https://www.instagram.com/reel/DMFmG14SUdL/"
    ]
  },
  "mianmian-aqi": {
    name: "瞇瞇 & 阿七",
    intro: "",
    style: "雙人男歌手組合",
    instruments: "民謠、華語、台語流行",
    genres: "",
    videos: [
      "https://www.instagram.com/reel/DcRKVD3PVus/"
    ]
  },
  "nanfang-qiaorou": {
    name: "南方樂團 ft. 巧柔",
    intro: "大馬女歌手配上full band演出,絕對讓你大飽耳福",
    style: "樂團",
    instruments: "電吉他,貝斯,keyboard,爵士鼓",
    genres: "英文、華語流行",
    videos: [
      "https://www.instagram.com/reel/DbDdw8pzCEn/"
    ]
  },
  "anna-kunlin": {
    name: "安娜 & 昆霖",
    intro: "雙人男女組合",
    style: "雙人男女組合",
    instruments: "吉他",
    genres: "英文、華語流行",
    videos: []
  },
  "nanfang-anbb": {
    name: "南方樂團 ft. 安娜ㄌㄌ",
    intro: "雙人組合搭配full band演出,喜歡樂團的你不容錯過",
    style: "樂團",
    instruments: "電吉他,貝斯,keyboard,爵士鼓",
    genres: "英文、華語流行",
    videos: [
      "https://www.instagram.com/reel/Dar8qqGPAId/",
      "https://www.instagram.com/reel/Db0qt9nv4Jj/"
    ]
  },
  "ben": {
    name: "Ben",
    intro: "法律系暖男獨特嗓音,擅長英文流行歌曲",
    style: "單人自彈自唱",
    instruments: "吉他",
    genres: "英文、華語流行",
    videos: []
  },
  "jay-cosplay": {
    name: "周杰倫模仿大賽",
    intro: "周杰倫模仿歌唱大賽",
    style: "比賽",
    instruments: "參賽者自帶伴奏",
    genres: "華語流行",
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
  12: { sets: [ { t: "19:00", a: "ben" }, { t: "20:30", a: "ben" }, { t: "22:00", a: "nanfang-qiaorou" }, { t: "23:30", a: "nanfang-qiaorou" } ] },
  13: { tag: "半包場", sets: [ { t: "19:00", a: "mianmian" }, { t: "20:30", a: "mianmian" }, { t: "22:00", a: "binggan" }, { t: "23:30", a: "binggan" } ] },
  14: { closed: true },
  15: { sets: [ { t: "20:30", a: "qilai" }, { t: "22:00", a: "qilai" } ] },
  16: { sets: [ { t: "20:30", a: "bb" }, { t: "22:00", a: "bb" } ] },
  17: { sets: [ { t: "20:30", a: "suzhan-weiye" }, { t: "22:00", a: "suzhan-weiye" } ] },
  18: { sets: [ { t: "19:00", a: "makewish" }, { t: "20:30", a: "makewish" }, { t: "22:00", a: "anna-kunlin" }, { t: "23:30", a: "anna-kunlin" } ] },
  19: { private: true, sets: [ { t: "19:00", a: "anna-kunlin" }, { t: "20:30", a: "anna-kunlin" } ] },
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
