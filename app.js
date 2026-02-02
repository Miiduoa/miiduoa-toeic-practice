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
  },
  full_listening: {
    id: 'full_listening',
    title: 'Full Listening 100（Part 1–4）',
    durationSecDefault: 45 * 60,
    assetsBase: null,
    concatAudio: null,
    questions: null, // generated on first use
  }
};

const LS_KEY = 'toeic_mvp_state_v1';

// --- Utilities: deterministic RNG (for generated sets) ---
function makeRng(seed){
  let a = seed >>> 0;
  return function(){
    // mulberry32
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function randInt(rng, n){
  return Math.floor(rng() * n);
}
function pick(rng, arr){
  return arr[randInt(rng, arr.length)];
}
function shuffle(rng, arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = randInt(rng, i+1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Web Speech (for generated audio; no copyrighted TOEIC audio used) ---
function stopSpeech(){
  try{ window.speechSynthesis?.cancel?.(); }catch{}
}
function speakEn(text, opts={}){
  if(typeof window === 'undefined') return;
  if(!('speechSynthesis' in window)){
    alert('此瀏覽器不支援語音合成（speechSynthesis）。');
    return;
  }
  stopSpeech();
  const u = new SpeechSynthesisUtterance(String(text || ''));
  u.lang = opts.lang || 'en-US';
  u.rate = typeof opts.rate === 'number' ? opts.rate : 1;
  u.pitch = typeof opts.pitch === 'number' ? opts.pitch : 1;
  u.volume = typeof opts.volume === 'number' ? opts.volume : 1;
  window.speechSynthesis.speak(u);
}

function buildSpeechForQuestion(q){
  if(!q) return null;

  // Part 1: photograph statements
  if(q.part === 1 && q.statements && Array.isArray(q.statements)){
    const st = q.statements;
    const letters = ['A','B','C','D'];
    return (
      `Look at the picture marked number ${q.id}. ` +
      letters.map((L, i) => `${L}. ${st[i] || ''}`).join(' ') +
      ` `
    ).trim();
  }

  // Part 2: question-response
  if(q.part === 2 && q.prompt && q.responses && Array.isArray(q.responses)){
    const rs = q.responses;
    const letters = ['A','B','C'];
    return (
      `${q.prompt} ` +
      letters.map((L, i) => `${L}. ${rs[i] || ''}`).join(' ') +
      ` `
    ).trim();
  }

  // Part 3/4: passage + question + options
  if((q.part === 3 || q.part === 4) && q.passage && q.questionText && q.optionsText){
    const letters = ['A','B','C','D'];
    const opts = q.optionsText;
    return (
      `${q.passage} ` +
      `Question. ${q.questionText} ` +
      letters.map((L, i) => `${L}. ${opts[i] || ''}`).join(' ') +
      ` `
    ).trim();
  }

  return null;
}

// --- Generated "1:1" Listening set (original questions, aligned with TOEIC official format/counts) ---
function generateFullListeningQuestions(){
  const rng = makeRng(20260202);
  let id = 1;
  const out = [];

  // Part 1 (6 questions): reuse available images, generate original statements
  const part1 = [
    {
      image: './assets/set1/images_png/P1_Q1.svg.png',
      correct: 'B',
      statements: [
        'A man is adjusting a chair.',
        'Several people are reviewing documents on a desk.',
        'A woman is wiping a computer monitor.',
        'A meeting is taking place in a conference room.'
      ],
      explain: 'Part 1：正解 B（多個人正在桌上檢視文件）。'
    },
    {
      image: './assets/set1/images_png/P1_Q2.svg.png',
      correct: 'C',
      statements: [
        'A customer is paying at the counter.',
        'Some chairs are being stacked.',
        'A server is setting a table in a restaurant.',
        'Plates have been cleared from the table.'
      ],
      explain: 'Part 1：正解 C（服務人員正在擺設餐桌）。'
    },
    {
      image: './assets/set1/images_png/P1_Q3.svg.png',
      correct: 'A',
      statements: [
        'Construction workers are wearing safety helmets.',
        'A window is being cleaned.',
        'A carpet is being laid on the floor.',
        'A truck is being unloaded.'
      ],
      explain: 'Part 1：正解 A（工地人員配戴安全帽）。'
    },
    {
      image: './assets/set1/images_png/P1_Q4.svg.png',
      correct: 'A',
      statements: [
        'Passengers are waiting near a boarding gate.',
        'An airplane is taking off.',
        'Luggage is being loaded onto a cart.',
        'People are standing on a train platform.'
      ],
      explain: 'Part 1：正解 A（旅客在登機門附近候機）。'
    },
    {
      image: './assets/set1/images_png/P1_Q5.svg.png',
      correct: 'B',
      statements: [
        'A worker is carrying a ladder.',
        'Boxes are stacked in a storage area.',
        'Someone is removing labels from packages.',
        'A floor is being polished.'
      ],
      explain: 'Part 1：正解 B（倉儲區箱子堆放）。'
    },
    {
      image: './assets/set1/images_png/P1_Q6.svg.png',
      correct: 'A',
      statements: [
        'A presentation is being set up in a meeting room.',
        'Chairs are being moved outdoors.',
        'A table is being transported through a hallway.',
        'A wall is being painted.'
      ],
      explain: 'Part 1：正解 A（會議/簡報情境）。'
    }
  ];
  for(const q of part1){
    out.push({
      id: id++,
      part: 1,
      choices: ['A','B','C','D'],
      correct: q.correct,
      image: q.image,
      statements: q.statements,
      explain: q.explain
    });
  }

  // Part 2 (25 questions): question-response (A-C)
  const p2Pool = [
    {
      prompt: 'Where is the conference room?',
      responses: ['On the third floor.', 'At three o\'clock.', 'Yes, it is.'],
      correct: 'A',
      explain: 'Part 2：Where 題型 → 回地點（A）。'
    },
    {
      prompt: 'Why did you call the supplier?',
      responses: ['To confirm the delivery date.', 'In the warehouse.', 'Two boxes.'],
      correct: 'A',
      explain: 'Part 2：Why 題型 → 回原因/目的（A）。'
    },
    {
      prompt: 'Could you email me the schedule?',
      responses: ['Sure, I\'ll send it right away.', 'No, I\'m at the office.', 'It\'s a blue folder.'],
      correct: 'A',
      explain: 'Part 2：Could you...? → 合理回應接受/執行（A）。'
    },
    {
      prompt: 'When will the new software be installed?',
      responses: ['Next Monday morning.', 'By the IT department.', 'In the lobby.'],
      correct: 'A',
      explain: 'Part 2：When 題型 → 回時間（A）。'
    },
    {
      prompt: 'Whose laptop is this?',
      responses: ['It belongs to Ms. Chen.', 'On the desk.', 'Yes, I have.'],
      correct: 'A',
      explain: 'Part 2：Whose 題型 → 回所有人（A）。'
    },
    {
      prompt: 'Would you like some help with those files?',
      responses: ['Yes, please. Thank you.', 'On the second shelf.', 'At the end of the month.'],
      correct: 'A',
      explain: 'Part 2：Would you like...? → 接受/婉拒（A）。'
    },
    {
      prompt: 'How did you get to the client\'s office?',
      responses: ['I took the subway.', 'At noon.', 'On the left side.'],
      correct: 'A',
      explain: 'Part 2：How did you get...? → 回交通方式（A）。'
    },
    {
      prompt: 'Which report should I print first?',
      responses: ['The sales summary.', 'In the printer room.', 'Yes, it was.'],
      correct: 'A',
      explain: 'Part 2：Which...? → 回選擇項（A）。'
    }
  ];
  const p2 = [];
  for(let i=0;i<25;i++){
    const base = pick(rng, p2Pool);
    // rotate correct position sometimes
    const letters = ['A','B','C'];
    const order = shuffle(rng, [0,1,2]);
    const responses = order.map((idx) => base.responses[idx]);
    const correctIndex = order.indexOf(0);
    p2.push({
      id: id++,
      part: 2,
      choices: letters,
      correct: letters[correctIndex],
      prompt: base.prompt,
      responses,
      explain: base.explain
    });
  }
  out.push(...p2);

  // Part 3 (39 questions = 13 conversations x 3)
  const names = ['Alex', 'Brian', 'Carla', 'Diana', 'Ethan', 'Fiona', 'Grace', 'Henry'];
  const depts = ['marketing', 'finance', 'human resources', 'customer support', 'IT', 'sales'];
  const topics = ['a shipment', 'a meeting', 'a hotel reservation', 'a budget request', 'a presentation', 'a maintenance issue'];

  const mkOptions = (correctText, wrongs) => {
    const all = [correctText, ...wrongs].slice(0,4);
    const shuffled = shuffle(rng, all);
    const correctIdx = shuffled.indexOf(correctText);
    return { optionsText: shuffled, correctIdx };
  };

  for(let g=1; g<=13; g++){
    const n1 = pick(rng, names);
    const n2 = pick(rng, names.filter((x) => x !== n1));
    const dept = pick(rng, depts);
    const topic = pick(rng, topics);

    const passage = `Conversation. ${n1}: Hi ${n2}, do you have a minute? ${n2}: Sure. What\'s up? ${n1}: I\'m calling about ${topic} for the ${dept} team. ${n2}: Okay, what do you need?`;

    // Q1: main purpose
    {
      const questionText = 'What are the speakers discussing?';
      const correct = `A ${topic} for the ${dept} team.`;
      const { optionsText, correctIdx } = mkOptions(correct, [
        'A job interview schedule.',
        'A restaurant reservation.',
        'A new office location.'
      ]);
      out.push({
        id: id++,
        part: 3,
        groupId: `P3G${g}`,
        passage,
        questionText,
        choices: ['A','B','C','D'],
        optionsText,
        correct: ['A','B','C','D'][correctIdx],
        explain: 'Part 3：主旨題，注意對話一開始提到的重點。'
      });
    }

    // Q2: next action
    {
      const questionText = `What will ${n2} most likely do next?`;
      const correct = 'Check the schedule and reply by email.';
      const { optionsText, correctIdx } = mkOptions(correct, [
        'Cancel the meeting room booking.',
        'Print the monthly report.',
        'Call a taxi for the client.'
      ]);
      out.push({
        id: id++,
        part: 3,
        groupId: `P3G${g}`,
        passage,
        questionText,
        choices: ['A','B','C','D'],
        optionsText,
        correct: ['A','B','C','D'][correctIdx],
        explain: 'Part 3：下一步題，通常從「I\'ll... / Let me...」推論。'
      });
    }

    // Q3: detail
    {
      const questionText = 'Why is the man calling?';
      const correct = 'To request an update on a task.';
      const { optionsText, correctIdx } = mkOptions(correct, [
        'To complain about a service.',
        'To offer a discount.',
        'To reschedule a flight.'
      ]);
      out.push({
        id: id++,
        part: 3,
        groupId: `P3G${g}`,
        passage,
        questionText,
        choices: ['A','B','C','D'],
        optionsText,
        correct: ['A','B','C','D'][correctIdx],
        explain: 'Part 3：目的題，注意動詞（call about / need / request）。'
      });
    }
  }

  // Part 4 (30 questions = 10 talks x 3)
  const places = ['a train station', 'a hotel lobby', 'an airport', 'a supermarket', 'a museum', 'a company cafeteria'];

  for(let g=1; g<=10; g++){
    const place = pick(rng, places);
    const passage = `Talk. Hello everyone. This is an announcement at ${place}. Please listen carefully to the following information.`;

    // Q1
    {
      const questionText = 'Where does the announcement most likely take place?';
      const correct = place;
      const { optionsText, correctIdx } = mkOptions(correct, [
        'a library',
        'a theater',
        'a hospital'
      ]);
      out.push({
        id: id++,
        part: 4,
        groupId: `P4G${g}`,
        passage,
        questionText,
        choices: ['A','B','C','D'],
        optionsText,
        correct: ['A','B','C','D'][correctIdx],
        explain: 'Part 4：地點題，抓關鍵名詞（場景/設施）。'
      });
    }

    // Q2
    {
      const questionText = 'What are listeners asked to do?';
      const correct = 'Follow the updated instructions.';
      const { optionsText, correctIdx } = mkOptions(correct, [
        'Return a purchase receipt.',
        'Fill out a job application.',
        'Pick up a package at the front desk.'
      ]);
      out.push({
        id: id++,
        part: 4,
        groupId: `P4G${g}`,
        passage,
        questionText,
        choices: ['A','B','C','D'],
        optionsText,
        correct: ['A','B','C','D'][correctIdx],
        explain: 'Part 4：要求題，常見指令語氣（please / must / should）。'
      });
    }

    // Q3
    {
      const questionText = 'What will happen next?';
      const correct = 'Additional information will be provided later.';
      const { optionsText, correctIdx } = mkOptions(correct, [
        'A meeting will be canceled immediately.',
        'A prize will be given to customers.',
        'A bus will depart in five minutes.'
      ]);
      out.push({
        id: id++,
        part: 4,
        groupId: `P4G${g}`,
        passage,
        questionText,
        choices: ['A','B','C','D'],
        optionsText,
        correct: ['A','B','C','D'][correctIdx],
        explain: 'Part 4：下一步題，注意「later / soon / next」等時間訊號。'
      });
    }
  }

  // Sanity: should be 100 questions total
  return out;
}

function ensureSetQuestions(set){
  if(!set) return;
  if(Array.isArray(set.questions) && set.questions.length > 0) return;
  if(set.id === 'full_listening'){
    set.questions = generateFullListeningQuestions();
  }
}

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
  const set = SETS[state.setId] || SETS.set1;
  ensureSetQuestions(set);
  return set;
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
  const set = SETS[state.setId] || SETS.set1;
  el('durationMin').value = Math.round((set.durationSecDefault || state.durationSec) / 60);
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

  // media / question text
  const media = el('qMedia');
  media.innerHTML = '';

  if(q.part === 1 && q.image){
    const img = document.createElement('img');
    img.src = q.image;
    img.alt = `Part 1 圖片 Q${q.id}`;
    media.appendChild(img);
  } else if(q.part === 3 || q.part === 4){
    const box = document.createElement('div');
    box.className = 'hint';
    box.textContent = q.part === 3
      ? 'Part 3：Conversation（本題使用語音合成播放，非官方音檔）'
      : 'Part 4：Talk（本題使用語音合成播放，非官方音檔）';
    media.appendChild(box);

    if(q.questionText){
      const qt = document.createElement('div');
      qt.style.marginTop = '10px';
      qt.style.fontWeight = '700';
      qt.textContent = q.questionText;
      media.appendChild(qt);
    }

    if(q.passage){
      const btn = document.createElement('button');
      btn.className = 'ghost';
      btn.type = 'button';
      btn.textContent = '顯示/隱藏逐字稿（訓練用）';
      btn.style.marginTop = '12px';

      const pre = document.createElement('pre');
      pre.className = 'hint small';
      pre.style.whiteSpace = 'pre-wrap';
      pre.style.marginTop = '10px';
      pre.style.display = 'none';
      pre.textContent = q.passage;

      btn.addEventListener('click', () => {
        pre.style.display = pre.style.display === 'none' ? 'block' : 'none';
      });

      media.appendChild(btn);
      media.appendChild(pre);
    }
  } else {
    const box = document.createElement('div');
    box.className = 'hint';
    box.textContent = '本題無圖片，請聽音檔後作答。';
    media.appendChild(box);
  }

  // per-question audio hint
  const speech = buildSpeechForQuestion(q);
  el('qAudioHint').textContent = q.audio
    ? `音檔：${q.audio.split('/').slice(-1)[0]}`
    : speech
      ? '語音合成：可播放（非官方音檔）'
      : '';

  // choices
  const choicesWrap = el('choices');
  choicesWrap.innerHTML = '';
  const current = state.answers[q.id] || '';

  q.choices.forEach((ch, idx) => {
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
    const optText = (q.part === 3 || q.part === 4) && Array.isArray(q.optionsText) ? q.optionsText[idx] : null;
    spanT.textContent = optText
      ? optText
      : (q.part === 1)
        ? '（聽敘述，選最符合圖片者）'
        : (q.part === 2)
          ? '（聽問句，選最佳回應）'
          : '（作答）';
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
  el('setSelect').addEventListener('change', () => {
    const setId = el('setSelect').value;
    const set = SETS[setId] || SETS.set1;
    el('durationMin').value = Math.round((set.durationSecDefault || 12 * 60) / 60);
  });

  el('btnStart').addEventListener('click', () => {
    const setId = el('setSelect').value;
    const min = Number(el('durationMin').value);

    state.setId = setId;

    // Ensure questions exist (for generated sets)
    const set = SETS[setId] || SETS.set1;
    ensureSetQuestions(set);

    const defaultMin = Math.round((set.durationSecDefault || 12 * 60) / 60);
    const chosenMin = (isFinite(min) && min >= 1) ? min : defaultMin;

    state.durationSec = Math.max(60, Math.floor(chosenMin * 60));
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
    const set = getSet();
    if(!set.concatAudio || !set.concatAudio.part1){
      alert('此題組沒有 Part 1 拼接音檔。請改用「播放本題音檔」（語音合成/單題音檔）。');
      return;
    }
    stopSpeech();
    audioEl.src = set.concatAudio.part1;
    await audioEl.play();
  });

  el('btnPlayP2').addEventListener('click', async () => {
    const set = getSet();
    if(!set.concatAudio || !set.concatAudio.part2){
      alert('此題組沒有 Part 2 拼接音檔。請改用「播放本題音檔」（語音合成/單題音檔）。');
      return;
    }
    stopSpeech();
    audioEl.src = set.concatAudio.part2;
    await audioEl.play();
  });

  el('btnPause').addEventListener('click', () => {
    audioEl.pause();
    stopSpeech();
  });

  el('btnPlayQ').addEventListener('click', async () => {
    const set = getSet();
    const q = set.questions[state.currentIndex];
    if(!q) return;

    // Prefer real audio file; otherwise use speech synthesis
    if(q.audio){
      stopSpeech();
      audioEl.src = q.audio;
      await audioEl.play();
      return;
    }

    audioEl.pause();
    const speech = buildSpeechForQuestion(q);
    if(!speech){
      alert('本題沒有可播放的音檔/語音內容。');
      return;
    }
    speakEn(speech, { rate: 1 });
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

    // stop audio/speech on submit
    audioEl.pause();
    stopSpeech();

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
