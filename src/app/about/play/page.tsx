import React from 'react'

const Page = () => {
  return (
    <div className="container">
      <div className="">
        <h1 className="text-4xl font-bold">遊び方</h1>
        <p className="mt-5 text-gray-500">AI Typingの遊び方について説明します。</p>
        <div className="mt-10">
          <h2 className="text-3xl">○ルール</h2>
          <p>
            ・表示されたテキストをタイピングすると秒数，語数，タイプミスに応じて得点が加算されます。秒数は最初に入力された時から計測されます。
          </p>
          <p>・スタンダードコースでは5つのテキストが表示されます。</p>
          <p>
            ・このゲームは日本語，英語のみ対応しています。それ以外の文字が使われると，うまく動作しないので注意してください。
          </p>
          <p>・ゲームが終了するとスコアがランキングに登録されます。高得点を取って上位を目指しましょう！</p>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl">○その他</h2>
          <p>・表示されているローマ字以外でも入力することができます。</p>
          <p>（例）「ちゃ」→ tya, cha</p>
          <p>・大文字のアルファベットは小文字でも打てます。</p>
          <p>
            ・「んか」のように「ん」の後に文字があるとき，「んか」が打ち終わるまで表示されている文字の色が変わらない仕様となっているので，あらかじめご了承ください。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
