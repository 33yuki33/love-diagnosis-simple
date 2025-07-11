const questions = [
  "初対面の人と話すのは得意？",
  "自分の気持ちを言葉にする方？",
  "計画を立てるのが好き？",
  "一人の時間が好き？",
  "サプライズは得意？",
  "友人は多い？",
  "家族との関係は良好？",
  "リーダータイプと言われる？",
  "何かにハマると深くのめり込む？",
  "感情表現が豊か？",
  "論理的に考える方？",
  "人の意見に流されない？",
  "好きな人には尽くすタイプ？"
];

const resultTexts = {
  male: [
    {
      type: "長男タイプ",
      text: "責任感が強く、頼られる存在。面倒見がよく、女性から安心感を持たれます。ただし頑固な一面もあるので、柔軟さも大切に。"
    },
    {
      type: "経営者タイプ",
      text: "行動力があり、目標に向かって突き進む姿勢が魅力。恋愛もリードしたいタイプで、自信に満ちた態度が女性を惹きつけます。"
    },
    {
      type: "理系タイプ",
      text: "冷静で観察力があり、論理的な思考で相手のことを理解しようとします。口数は少なめですが、誠実な愛情を注ぐタイプです。"
    }
  ],
  female: [
    {
      type: "長女タイプ",
      text: "しっかり者で周囲に頼られる存在。恋愛でも相手を支えるタイプですが、無理をしすぎないように注意が必要です。"
    },
    {
      type: "お姫様タイプ",
      text: "愛されたい願望が強く、甘えるのが上手。愛情をしっかり注いでくれる相手と相性が良く、恋愛体質な一面があります。"
    },
    {
      type: "理論派タイプ",
      text: "論理的に恋愛を分析し、冷静な判断で相手を選ぶ傾向。感情だけに流されず、バランスのとれた関係を築けます。"
    }
  ]
};

const questionsContainer = document.getElementById("questions");

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <label>${index + 1}. ${q}<br />
      <select name="q${index}" required>
        <option value="">選択してください</option>
        <option value="1">はい</option>
        <option value="0">いいえ</option>
      </select>
    </label><br /><br />
  `;
  questionsContainer.appendChild(div);
});

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const gender = form.get("gender");
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    score += parseInt(form.get(`q${i}`) || "0");
  }

  let typeIndex = score <= 4 ? 0 : score <= 8 ? 1 : 2;
  const result = resultTexts[gender][typeIndex];

  document.getElementById("result").innerHTML = `
    <h2>${result.type}</h2>
    <p>${result.text}</p>
    <button onclick="alert('準備中です')">もっと詳しい性質＆相性の良いタイプ</button>
  `;
});
