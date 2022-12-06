export const useGame = () => useState('game', () => {
    return {
      title: "美味しさNo.1！KFC風フライドチキン",
      description:
        "KFC人気レシピ1位！数あるKFCレシピ─どれも何か一味足りない気が。試行錯誤の末の主人も絶賛☆再現率の高いレシピです☆",
      material: [
        { text: "鶏肉(お好きな部位)　２〜３枚位" },
        { text: "☆牛乳　1/2カップ" },
        { text: "☆卵　１個" },
        { text: "☆にんにくチューブ　２センチ位" },
        { text: "★薄力粉　１カップ" },
        { text: "★オールスパイス　小さじ１弱" },
        { text: "★顆粒コンソメ　大さじ1/2" },
        { text: "★塩　大さじ1/2" },
        { text: "あれば★パプリカパウダー　小さじ１" },
      ],
      zairyo:"材料"
    }
  })