(() => {
const quiz =[
 {
  question:'オーキド博士から最初に植物の種がついたポケモンは？',
  answers: ['ワニノコ',
  'ヒトカゲ',
  'ミズガメ',
  'フシギダネ'
  ],
  correct: 'フシギダネ'
 },{
  question:'電気タイプのポケモンはどれ？',
  answers: ['ピカチュウ',
  'イワーク',
  'ポッポ',
  'イーブイ'
  ],
  correct:'ピカチュウ'
 },{question:'パントマイムが得意なポケモン',
  answers: ['バリヤード',
  'イシツブテ',
  'ルージュラ',
  'タマタマ'
  ],
  correct:'バリヤード'

 },{question:'3本の尻尾を持っているポケモンは？',
  answers: ['ロコン',
  'ケンタロス',
  'キュウコン',
  'ブースター'
  ],
  correct:'ケンタロス'

 },{question:'夢を食べるポケモンといえば？',
  answers: ['カラカラ',
  'オコリザル',
  'ユンゲラー',
  'スリープ'
  ],
  correct:'スリープ'

 }
];

const quizlength = quiz.length;
let quizIndex =0;
let score = 0;


const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;
const answer = document.getElementById('answer');
const quizgame = document.getElementById('quizgame');

//クイズの問題文、選択しを定義
const setupQuiz = () => {
   document.getElementById('js-question-Lv1').textContent = quiz[quizIndex].question;
   let buttonIndex = 0;
   while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}
setupQuiz();

const clickHandlar = (e) => {
  if (quiz[quizIndex].correct ===　e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizlength){
      //問題があればこちらを実行
    setupQuiz();
  }else {
    //問題がなければこちらを実行
    window.alert ('終了！あなたの正解数は'+ score + '/' + quizlength + 'です！');
    answer.style.display = 'block';
    quizgame.style.display = 'none';
    document.getElementById('score2').textContent = 'あなたの正解数は' + quizlength + '問中 ' + score + '問です！';
    document.getElementById('js_qusetion1').textContent = 'Q1. ' + quiz[0].question;
    document.getElementById('correct1').textContent = '答え: ' + quiz[0].correct;
    document.getElementById('js_qusetion2').textContent = 'Q2. ' + quiz[1].question;
    document.getElementById('correct2').textContent = '答え: ' + quiz[1].correct;
    document.getElementById('js_qusetion3').textContent = 'Q3. ' + quiz[2].question;
    document.getElementById('correct3').textContent = '答え: ' + quiz[2].correct;
    document.getElementById('js_qusetion4').textContent = 'Q4. ' + quiz[3].question;
    document.getElementById('correct4').textContent = '答え: ' + quiz[3].correct;
    document.getElementById('js_qusetion5').textContent = 'Q5. ' + quiz[4].question;
    document.getElementById('correct5').textContent = '答え: ' + quiz[4].correct;
  }  
};


 
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const navLen = $nav.length;
  
  //初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  //クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();

    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav, content全て一旦リセットする
    let index = 0;
    while(index < navLen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };

  //全nav要素に対して関数を適応・発火
  let index = 0;
  while(index < navLen){
    $nav[index].addEventListener('click', (e) => handleClick(e));  
    index++;
  }

let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandlar(e);    
  });
  handlerIndex++;
}
let reload =document.getElementById('reload');
reload.addEventListener('click',function(){
  window.location.reload();
});
                
})();

  
  
    
