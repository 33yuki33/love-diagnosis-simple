function diagnose() {
  const types = ["情熱タイプ", "冷静タイプ", "優柔不断タイプ", "愛情深いタイプ"];
  const result = types[Math.floor(Math.random() * types.length)];
  document.getElementById("result").textContent = "あなたは「" + result + "」です！";
}

