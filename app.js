/* TOEIC Listening practice MVP (static) */

const SETS = {
  set1: {
    id: 'set1',
    title: 'Listening Set 1',
    durationSecDefault: 12 * 60,
    assetsBase: './assets/set1',
    concatAudio: {
      part1: './assets/set1/Part1_all.mp3',
      part2: './assets/set1/Part2_all.mp3',
    },
    questions: [
      // Part 1 (A-D) with image (synced to real photos + new audio)
      { id: 1, part: 1, choices: ['A','B','C','D'], correct: 'B', image: './assets/set1/images_png/P1_Q1.svg.png', audio: './assets/set1/audio/P1_Q1.mp3',
        explain: '正解 B：照片顯示在辦公桌上處理/整理文件（多雙手在文件上操作）。\n陷阱：A 調整椅子高度（畫面主體不是椅子調整）；C 清潔螢幕（沒有擦拭動作）；D 會議進行（不是會議室情境）。' },
      { id: 2, part: 1, choices: ['A','B','C','D'], correct: 'C', image: './assets/set1/images_png/P1_Q2.svg.png', audio: './assets/set1/audio/P1_Q2.mp3',
        explain: '正解 C：照片可見服務生在餐廳內整理/擺放桌面（set tables）。\n陷阱：A 付款（沒有收銀/付款動作）；B 疊椅子（非收店情境）；D 盤子已收走（與擺設相反）。' },
      { id: 3, part: 1, choices: ['A','B','C','D'], correct: 'A', image: './assets/set1/images_png/P1_Q3.svg.png', audio: './assets/set1/audio/P1_Q3.mp3',
        explain: '正解 A：照片中工地工作者戴安全帽/護具，屬施工現場情境。\n陷阱：B 洗窗、C 鋪地毯、D 卸貨卡車都不符合畫面。' },
      { id: 4, part: 1, choices: ['A','B','C','D'], correct: 'A', image: './assets/set1/images_png/P1_Q4.svg.png', audio: './assets/set1/audio/P1_Q4.mp3',
        explain: '正解 A：照片是機場航廈登機門附近，旅客在候機。\n陷阱：B 起飛外景、C 裝載行李車、D 火車月台都不符合照片。' },
      { id: 5, part: 1, choices: ['A','B','C','D'], correct: 'B', image: './assets/set1/images_png/P1_Q5.svg.png', audio: './assets/set1/audio/P1_Q5.mp3',
        explain: '正解 B：照片顯示倉儲空間，箱子堆放在貨架/地面。\n陷阱：A 拿梯子、C 撕標籤、D 打蠟地板皆無對應線索。' },
      { id: 6, part: 1, choices: ['A','B','C','D'], correct: 'A', image: './assets/set1/images_png/P1_Q6.svg.png', audio: './assets/set1/audio/P1_Q6.mp3',
        explain: '正解 A：照片是會議室/研討空間，前方有投影/展示設備（presentation setting）。\n陷阱：B 椅子搬到戶外、C 桌子正在運送、D 牆面重新粉刷都不符合。' },

      // Part 2 (A-C), audio only
      { id: 7, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q7.mp3',
        explain: '問句 Where → 回地點。B 回時間、C 回 yes/no，皆不合。' },
      { id: 8, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q8.mp3',
        explain: '問句 Why → 回原因（because...）。B 地點、C 數量。' },
      { id: 9, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q9.mp3',
        explain: 'Could you...? → 合理回應是「可以/我來做」。' },
      { id: 10, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q10.mp3',
        explain: 'Which room...? → 回房號/地點。' },
      { id: 11, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q11.mp3',
        explain: 'When...? → 回時間。' },
      { id: 12, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q12.mp3',
        explain: 'Did you reserve...?（是非問句）→ 合理回應「Yes, I booked...」。' },
      { id: 13, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q13.mp3',
        explain: 'How often...? → 回頻率。' },
      { id: 14, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q14.mp3',
        explain: 'Whose...? → 回所有人/所屬（It belongs to...）。' },
      { id: 15, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q15.mp3',
        explain: 'Would you like me to...? → 回接受/拒絕（Yes, please / No, thanks）。' },
      { id: 16, part: 2, choices: ['A','B','C'], correct: 'A', audio: './assets/set1/audio/P2_Q16.mp3',
        explain: 'How did you get to...? → 回交通方式（took the train / drove / walked）。' },
    ]
  }
};

const LS_KEY = 'toeic_mvp_state_v1';

const el = (id) => document.getElementById(id);

const views = {
  home: el('viewHome'),
  exam: el('viewExam'),
  result: el('viewResult'),
};

const nav = {
  home: el('navHome'),
  exam: el('navExam'),
  result: el('navResult'),
};

let state = {
  route: 'home',
  setId: 'set1',
  durationSec: SETS.set1.durationSecDefault,
  startedAtMs: null,
  submittedAtMs: null,
  currentIndex: 0,
  answers: {},
  showExplain: false,
};

function loadState(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    if(!raw) return;
    const parsed = JSON.parse(raw);
    if(parsed && typeof parsed === 'object'){
      state = { ...state, ...parsed };
      // basic sanity
      if(!SETS[state.setId]) state.setId = 'set1';
      if(typeof state.durationSec !== 'number' || !isFinite(state.durationSec)) state.durationSec = SETS[state.setId].durationSecDefault;
      if(typeof state.currentIndex !== 'number') state.currentIndex = 0;
      if(!state.answers || typeof state.answers !== 'object') state.answers = {};
    }
  }catch{}
}

function saveState(){
  localStorage.setItem(LS_KEY, JSON.stringify(state));
}

function clearState(){
  localStorage.removeItem(LS_KEY);
  state = {
    route: 'home',
    setId: 'set1',
    durationSec: SETS.set1.durationSecDefault,
    startedAtMs: null,
    submittedAtMs: null,
    currentIndex: 0,
    answers: {},
    showExplain: false,
  };
}

function setRoute(route){
  state.route = route;
  saveState();
  render();
}

function enableNav(examEnabled, resultEnabled){
  nav.exam.classList.toggle('disabled', !examEnabled);
  nav.exam.setAttribute('aria-disabled', examEnabled ? 'false' : 'true');
  nav.result.classList.toggle('disabled', !resultEnabled);
  nav.result.setAttribute('aria-disabled', resultEnabled ? 'false' : 'true');
}

function showView(name){
  Object.entries(views).forEach(([k,v]) => v.classList.toggle('hidden', k !== name));
}

function fmtClock(totalSec){
  const s = Math.max(0, Math.floor(totalSec));
  const mm = String(Math.floor(s/60)).padStart(2,'0');
  const ss = String(s%60).padStart(2,'0');
  return `${mm}:${ss}`;
}

function fmtOver(sec){
  const s = Math.max(0, Math.floor(sec));
  const mm = Math.floor(s/60);
  const ss = String(s%60).padStart(2,'0');
  return `${mm}:${ss}`;
}

let timerHandle = null;
function startTimerLoop(){
  stopTimerLoop();
  timerHandle = setInterval(() => {
    if(state.route !== 'exam') return;
    renderTimerOnly();
  }, 250);
}
function stopTimerLoop(){
  if(timerHandle){
    clearInterval(timerHandle);
    timerHandle = null;
  }
}

function getSet(){
  return SETS[state.setId];
}

function getElapsedSec(){
  if(!state.startedAtMs) return 0;
  return (Date.now() - state.startedAtMs) / 1000;
}

function renderTimerOnly(){
  const timerEl = el('timer');
  const overtimeEl = el('overtime');
  const overtimeValEl = el('overtimeVal');

  if(!state.startedAtMs){
    timerEl.textContent = '--:--';
    overtimeEl.classList.add('hidden');
    return;
  }

  const elapsed = getElapsedSec();
  const remaining = state.durationSec - elapsed;

  if(remaining >= 0){
    timerEl.textContent = fmtClock(remaining);
    overtimeEl.classList.add('hidden');
  } else {
    timerEl.textContent = '00:00';
    overtimeEl.classList.remove('hidden');
    overtimeValEl.textContent = fmtOver(-remaining);
  }
}

function computeScore(){
  const set = getSet();
  let correctCount = 0;
  const rows = set.questions.map((q) => {
    const user = state.answers[q.id] || null;
    const ok = user === q.correct;
    if(ok) correctCount++;
    return { qid: q.id, part: q.part, user, correct: q.correct, ok };
  });
  return { correctCount, total: set.questions.length, rows };
}

function renderHome(){
  showView('home');
  enableNav(false, false);

  el('setSelect').value = state.setId;
  el('durationMin').value = Math.round(state.durationSec / 60);
}

function buildQGrid(){
  const set = getSet();
  const grid = el('qGrid');
  grid.innerHTML = '';

  set.questions.forEach((q, idx) => {
    const b = document.createElement('button');
    b.className = 'qBtn';
    b.textContent = `Q${q.id}`;
    if(idx === state.currentIndex) b.classList.add('current');
    if(state.answers[q.id]) b.classList.add('answered');
    b.addEventListener('click', () => {
      state.currentIndex = idx;
      saveState();
      renderExamQuestion();
      buildQGrid();
    });
    grid.appendChild(b);
  });
}

function renderExam(){
  showView('exam');
  enableNav(true, state.submittedAtMs != null);

  renderTimerOnly();
  buildQGrid();
  renderExamQuestion();
  startTimerLoop();
}

function renderExamQuestion(){
  const set = getSet();
  const q = set.questions[state.currentIndex];
  if(!q) return;

  el('qTitle').textContent = `Q${q.id}`;
  el('qPart').textContent = `Part ${q.part}`;

  // media
  const media = el('qMedia');
  media.innerHTML = '';
  if(q.part === 1 && q.image){
    const img = document.createElement('img');
    img.src = q.image;
    img.alt = `Part 1 圖片 Q${q.id}`;
    media.appendChild(img);
  } else {
    const box = document.createElement('div');
    box.className = 'hint';
    box.textContent = '本題無圖片，請聽音檔後作答。';
    media.appendChild(box);
  }

  // per-question audio
  el('qAudioHint').textContent = q.audio ? `音檔：${q.audio.split('/').slice(-1)[0]}` : '';

  // choices
  const choicesWrap = el('choices');
  choicesWrap.innerHTML = '';
  const current = state.answers[q.id] || '';

  q.choices.forEach((ch) => {
    const label = document.createElement('label');
    label.className = 'choice';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q_${q.id}`;
    input.value = ch;
    input.checked = current === ch;
    input.addEventListener('change', () => {
      state.answers[q.id] = ch;
      saveState();
      buildQGrid();
    });

    const spanL = document.createElement('span');
    spanL.className = 'choiceLabel';
    spanL.textContent = ch;

    const spanT = document.createElement('span');
    spanT.textContent = (q.part === 1) ? '（聽敘述，選最符合圖片者）' : '（聽對話/問句，選最佳回應）';
    spanT.style.color = 'var(--muted)';
    spanT.style.fontSize = '13px';

    label.appendChild(input);
    label.appendChild(spanL);
    label.appendChild(spanT);
    choicesWrap.appendChild(label);
  });
}

function renderResult(){
  showView('result');
  enableNav(true, true);
  stopTimerLoop();

  const set = getSet();
  const { correctCount, total, rows } = computeScore();

  el('score').textContent = String(correctCount);
  el('total').textContent = String(total);

  const elapsed = state.startedAtMs ? Math.round((state.submittedAtMs - state.startedAtMs)/1000) : null;
  const overtime = (elapsed != null && elapsed > state.durationSec);
  el('resultMeta').textContent = `題組：${set.title}｜用時：${elapsed != null ? fmtOver(elapsed) : '--'}｜${overtime ? '超時交卷（1B）' : '時間內交卷'}`;

  // result list
  const list = el('resultList');
  list.innerHTML = '';
  rows.forEach((r) => {
    const div = document.createElement('div');
    div.className = 'resultRow';

    const left = document.createElement('div');
    left.innerHTML = `<strong>Q${r.qid}</strong> <span class="badge">Part ${r.part}</span>`;

    const mid = document.createElement('div');
    mid.textContent = `你的答案：${r.user ?? '—'}｜正解：${r.correct}`;

    const right = document.createElement('div');
    right.className = `badge ${r.ok ? 'ok' : 'bad'}`;
    right.textContent = r.ok ? '正確' : '錯誤';

    div.appendChild(left);
    div.appendChild(mid);
    div.appendChild(right);
    list.appendChild(div);
  });

  // explanations
  const explainCard = el('explainCard');
  explainCard.classList.toggle('hidden', !state.showExplain);

  const explainList = el('explainList');
  explainList.innerHTML = '';
  if(state.showExplain){
    set.questions.forEach((q) => {
      const it = document.createElement('div');
      it.className = 'explainItem';
      const user = state.answers[q.id] || '—';
      it.innerHTML = `
        <h3>Q${q.id}（Part ${q.part}）— 正解：${q.correct}｜你的答案：${user}</h3>
        <div class="muted" style="white-space:pre-line">${escapeHtml(q.explain || '（本題暫無解析）')}</div>
      `;
      explainList.appendChild(it);
    });
  }
}

function escapeHtml(s){
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

function render(){
  // basic routing based on hash
  const hash = (location.hash || '#home').replace('#','');
  const route = ['home','exam','result'].includes(hash) ? hash : 'home';

  // guard routes
  if(route === 'exam' && !state.startedAtMs){
    location.hash = '#home';
    return;
  }
  if(route === 'result' && !state.submittedAtMs){
    location.hash = '#home';
    return;
  }

  state.route = route;

  if(route === 'home') renderHome();
  if(route === 'exam') renderExam();
  if(route === 'result') renderResult();
}

function hookEvents(){
  // home
  el('btnStart').addEventListener('click', () => {
    const setId = el('setSelect').value;
    const min = Number(el('durationMin').value);

    state.setId = setId;
    state.durationSec = Math.max(60, Math.floor((isFinite(min) ? min : 12) * 60));
    state.startedAtMs = Date.now();
    state.submittedAtMs = null;
    state.currentIndex = 0;
    state.answers = {};
    state.showExplain = false;

    saveState();
    location.hash = '#exam';
  });

  el('btnReset').addEventListener('click', () => {
    if(confirm('確定要清除本機作答紀錄？')){
      clearState();
      render();
    }
  });

  // exam
  el('btnPrev').addEventListener('click', () => {
    state.currentIndex = Math.max(0, state.currentIndex - 1);
    saveState();
    renderExamQuestion();
    buildQGrid();
  });
  el('btnNext').addEventListener('click', () => {
    const set = getSet();
    state.currentIndex = Math.min(set.questions.length - 1, state.currentIndex + 1);
    saveState();
    renderExamQuestion();
    buildQGrid();
  });

  const audioEl = el('audio');

  el('btnPlayP1').addEventListener('click', async () => {
    audioEl.src = getSet().concatAudio.part1;
    await audioEl.play();
  });
  el('btnPlayP2').addEventListener('click', async () => {
    audioEl.src = getSet().concatAudio.part2;
    await audioEl.play();
  });
  el('btnPause').addEventListener('click', () => audioEl.pause());

  el('btnPlayQ').addEventListener('click', async () => {
    const set = getSet();
    const q = set.questions[state.currentIndex];
    if(!q?.audio) return;
    audioEl.src = q.audio;
    await audioEl.play();
  });

  el('btnSubmit').addEventListener('click', () => {
    const set = getSet();
    const unanswered = set.questions.filter(q => !state.answers[q.id]).map(q => q.id);
    const elapsed = getElapsedSec();
    const overtime = elapsed > state.durationSec;

    const msg = unanswered.length
      ? `你還有 ${unanswered.length} 題未作答：${unanswered.slice(0,12).join(', ')}${unanswered.length>12?'...':''}\n\n仍要交卷嗎？${overtime ? '\n（注意：目前已超時，會標記為超時交卷）' : ''}`
      : `確定要交卷嗎？${overtime ? '\n（注意：目前已超時，會標記為超時交卷）' : ''}`;

    if(!confirm(msg)) return;

    state.submittedAtMs = Date.now();
    state.showExplain = false; // 2B
    saveState();

    // stop audio on submit
    audioEl.pause();

    location.hash = '#result';
  });

  // result
  el('btnPublish').addEventListener('click', () => {
    state.showExplain = true;
    saveState();
    renderResult();
  });

  el('btnRetry').addEventListener('click', () => {
    location.hash = '#home';
  });

  // hash routing
  window.addEventListener('hashchange', render);
}

(function init(){
  loadState();

  // if user had started but not submitted, keep them in exam if hash asks so
  hookEvents();

  if(!location.hash){
    location.hash = '#home';
  }
  render();
})();
