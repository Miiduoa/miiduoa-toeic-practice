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
  },
  full_lr_200: {
    id: 'full_lr_200',
    title: 'Full TOEIC 200（Listening + Reading）',
    // TOEIC official test time: Listening 45 min + Reading 75 min = 120 min
    durationSecDefault: 120 * 60,
    assetsBase: null,
    concatAudio: null,
    questions: null // generated on first use
  },
  full_lr_200_v2: {
    id: 'full_lr_200_v2',
    title: 'Full TOEIC 200 第二份（進階）',
    durationSecDefault: 120 * 60,
    assetsBase: null,
    concatAudio: null,
    questions: null // generated on first use - different seed, harder
  }
};

const LS_KEY = 'toeic_mvp_state_v1';
const THEME_KEY = 'toeic_mvp_theme_v1';

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

let cachedEnVoice = null;
function getEnVoice(){
  if(cachedEnVoice) return cachedEnVoice;
  try{
    const voices = window.speechSynthesis?.getVoices?.() || [];
    // Prefer high-quality English voices (prefer Google > Samantha > any en-US)
    const preferred = [
      'Google US English',
      'Google UK English Female',
      'Google UK English Male',
      'Samantha',
      'Karen',
      'Daniel',
      'Moira',
      'Fiona',
    ];
    for(const name of preferred){
      const v = voices.find(x => x.name.includes(name) && x.lang.startsWith('en'));
      if(v){ cachedEnVoice = v; return v; }
    }
    // fallback: any en-US or en-GB voice
    const fallback = voices.find(x => x.lang === 'en-US') || voices.find(x => x.lang.startsWith('en'));
    if(fallback){ cachedEnVoice = fallback; return fallback; }
  }catch{}
  return null;
}
// preload voices
if(typeof window !== 'undefined' && 'speechSynthesis' in window){
  window.speechSynthesis.onvoiceschanged = () => { cachedEnVoice = null; getEnVoice(); };
  getEnVoice();
}

function speakEn(text, opts={}, onEnd=null){
  if(typeof window === 'undefined') return;
  if(!('speechSynthesis' in window)){
    alert('此瀏覽器不支援語音合成（speechSynthesis）。');
    return;
  }
  stopSpeech();
  const u = new SpeechSynthesisUtterance(String(text || ''));
  u.lang = opts.lang || 'en-US';
  u.rate = typeof opts.rate === 'number' ? opts.rate : 0.95;
  u.pitch = typeof opts.pitch === 'number' ? opts.pitch : 1;
  u.volume = typeof opts.volume === 'number' ? opts.volume : 1;
  const voice = getEnVoice();
  if(voice) u.voice = voice;
  if(typeof onEnd === 'function'){
    u.addEventListener('end', onEnd);
  }
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

// --- Generated Reading 100 (original questions, aligned with TOEIC official Part 5–7 counts) ---
function generateFullReadingQuestions(startId){
  const rng = makeRng(20260203);
  let id = startId;
  const out = [];

  const mkOptions4 = (correctText, wrongs) => {
    const all = [correctText, ...wrongs].slice(0, 4);
    const shuffled = shuffle(rng, all);
    const correctIdx = shuffled.indexOf(correctText);
    return { optionsText: shuffled, correctIdx };
  };

  // Part 5 (30 questions): Incomplete Sentences
  const p5Pool = [
    {
      stem: 'The report must be ____ by Friday afternoon.',
      correct: 'completed',
      wrongs: ['complete', 'completing', 'completes'],
      explain: 'Part 5：被動語態 must be + p.p. → completed。'
    },
    {
      stem: 'Mr. Lin is responsible ____ training new staff members.',
      correct: 'for',
      wrongs: ['to', 'at', 'with'],
      explain: 'Part 5：be responsible for + V-ing。'
    },
    {
      stem: 'The company will announce the results ____ the end of the month.',
      correct: 'at',
      wrongs: ['in', 'on', 'by'],
      explain: 'Part 5：at the end of...（固定用法）。'
    },
    {
      stem: 'Please submit your expense form as soon as ____.',
      correct: 'possible',
      wrongs: ['possibility', 'possibly', 'possess'],
      explain: 'Part 5：as soon as possible（固定片語）。'
    },
    {
      stem: 'The new policy is intended to improve customer ____.',
      correct: 'satisfaction',
      wrongs: ['satisfy', 'satisfied', 'satisfying'],
      explain: 'Part 5：需要名詞作受詞 → satisfaction。'
    },
    {
      stem: 'If you have any questions, please contact the manager ____.',
      correct: 'directly',
      wrongs: ['direct', 'direction', 'directive'],
      explain: 'Part 5：修飾動詞 contact，用副詞 directly。'
    },
    {
      stem: 'Ms. Ortega will attend the conference ____ she is on vacation.',
      correct: 'unless',
      wrongs: ['because', 'so', 'since'],
      explain: 'Part 5：unless = 除非（條件）。'
    },
    {
      stem: 'The seminar starts at 9 a.m., so please arrive ____ time.',
      correct: 'on',
      wrongs: ['in', 'at', 'by'],
      explain: 'Part 5：on time 準時。'
    }
  ];

  for(let i=0;i<30;i++){
    const base = pick(rng, p5Pool);
    const { optionsText, correctIdx } = mkOptions4(base.correct, base.wrongs);
    out.push({
      id: id++,
      part: 5,
      choices: ['A','B','C','D'],
      questionText: base.stem,
      optionsText,
      correct: ['A','B','C','D'][correctIdx],
      explain: base.explain
    });
  }

  // Part 6 (16 questions): Text Completion (4 passages x 4)
  const p6Passages = [
    {
      title: 'Email: Office Supplies',
      passage:
        'To: Purchasing Team\n' +
        'Subject: Office Supplies Request\n\n' +
        'Hello,\n\n' +
        'We need to place an order for printer paper and ink cartridges. Please review the attached list and let me know if you have any (1) ____ before Thursday.\n\n' +
        'Also, the delivery should arrive (2) ____ Monday, because we will be preparing materials for next week\'s training.\n\n' +
        'Thank you,\n' +
        'Mina Park',
      blanks: [
        {
          q: 'Choose the word that best completes blank (1).',
          correct: 'questions',
          wrongs: ['questioning', 'questioned', 'question'],
          explain: 'Part 6：(1) any + 名詞複數/不可數 → questions。'
        },
        {
          q: 'Choose the word that best completes blank (2).',
          correct: 'by',
          wrongs: ['until', 'during', 'from'],
          explain: 'Part 6：(2) by + 時間點（不晚於）。'
        },
        {
          q: 'What is the purpose of the email?',
          correct: 'To request an order of office supplies.',
          wrongs: ['To cancel a delivery.', 'To schedule a job interview.', 'To report a broken printer.'],
          explain: 'Part 6：目的題，主旨在訂購文具。'
        },
        {
          q: 'When should the recipient respond?',
          correct: 'Before Thursday.',
          wrongs: ['On Monday', 'After the training', 'Next month'],
          explain: 'Part 6：細節題，before Thursday。'
        }
      ]
    },
    {
      title: 'Notice: Building Maintenance',
      passage:
        'NOTICE\n\n' +
        'The building\'s air-conditioning system will be inspected this Saturday. During the inspection, the temperature in some areas may (1) ____ slightly.\n\n' +
        'Employees are advised to keep their windows closed and to avoid using personal heaters, (2) ____ they may affect the inspection.\n\n' +
        'We apologize for any inconvenience.\n' +
        'Facilities Office',
      blanks: [
        {
          q: 'Choose the word that best completes blank (1).',
          correct: 'change',
          wrongs: ['changes', 'changing', 'changed'],
          explain: 'Part 6：may + 原形動詞 → change。'
        },
        {
          q: 'Choose the word that best completes blank (2).',
          correct: 'because',
          wrongs: ['although', 'unless', 'after'],
          explain: 'Part 6：because 表原因。'
        },
        {
          q: 'What will happen on Saturday?',
          correct: 'The air-conditioning system will be inspected.',
          wrongs: ['The office will move to a new building.', 'A fire drill will be conducted.', 'The cafeteria will be renovated.'],
          explain: 'Part 6：細節題，air-conditioning inspection。'
        },
        {
          q: 'What are employees advised to do?',
          correct: 'Keep windows closed.',
          wrongs: ['Work from home', 'Bring extra fans', 'Turn off all lights'],
          explain: 'Part 6：建議事項題，keep windows closed。'
        }
      ]
    }
  ];

  // ensure exactly 4 passages
  while(p6Passages.length < 4) p6Passages.push(p6Passages[p6Passages.length % 2]);

  for(let g=1; g<=4; g++){
    const p = p6Passages[g-1];
    for(let i=0;i<4;i++){
      const b = p.blanks[i];
      const { optionsText, correctIdx } = mkOptions4(b.correct, b.wrongs);
      out.push({
        id: id++,
        part: 6,
        groupId: `P6G${g}`,
        passage: p.passage,
        questionText: b.q,
        choices: ['A','B','C','D'],
        optionsText,
        correct: ['A','B','C','D'][correctIdx],
        explain: b.explain
      });
    }
  }

  // Part 7 (54 questions): Reading Comprehension (single/double/triple passages)
  const mkSinglePassage = (seedTag) => {
    const company = pick(rng, ['Northwind Electronics', 'Blue Harbor Travel', 'GreenLeaf Cafe', 'Apex Logistics']);
    const day = pick(rng, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
    const passage =
      `Email\n\n` +
      `To: Staff\n` +
      `From: ${company} HR\n` +
      `Subject: Policy Reminder\n\n` +
      `This is a reminder that all employees must submit their weekly timesheets by 5:00 p.m. on ${day}. ` +
      `Timesheets submitted after the deadline may be processed the following week.\n`;

    const q1 = {
      questionText: 'What is the main purpose of the email?',
      correct: 'To remind employees about a deadline.',
      wrongs: ['To announce a new product.', 'To invite customers to an event.', 'To explain a shipping delay.'],
      explain: 'Part 7：主旨題，提醒 timesheet 截止時間。'
    };
    const q2 = {
      questionText: `By what time should timesheets be submitted on ${day}?`,
      correct: 'By 5:00 p.m.',
      wrongs: ['By 9:00 a.m.', 'By noon', 'By midnight'],
      explain: 'Part 7：細節題，by 5:00 p.m.。'
    };
    const q3 = {
      questionText: 'What may happen if a timesheet is submitted late?',
      correct: 'It may be processed the following week.',
      wrongs: ['It will be rejected permanently.', 'A meeting will be scheduled.', 'An invoice will be sent.'],
      explain: 'Part 7：推論題，文中說 may be processed the following week。'
    };

    return { passage, questions: [q1,q2,q3] };
  };

  // Build group plan to total 54
  const p7Groups = [];
  // 10 single passages: 9x3 + 1x4 = 31
  for(let i=0;i<9;i++) p7Groups.push({ type:'single', count:3 });
  p7Groups.push({ type:'single', count:4 });
  // 2 double passages: 5 each = 10
  p7Groups.push({ type:'double', count:5 });
  p7Groups.push({ type:'double', count:5 });
  // 2 triple passages: 5 each = 10
  p7Groups.push({ type:'triple', count:5 });
  p7Groups.push({ type:'triple', count:5 });
  // total = 31 + 10 + 10 = 51, add 3 more single = 54
  p7Groups.push({ type:'single', count:3 });

  let gIndex = 1;
  for(const plan of p7Groups){
    if(plan.type === 'single'){
      const { passage, questions } = mkSinglePassage(`S${gIndex}`);
      const qs = questions.slice(0, plan.count);
      while(qs.length < plan.count){
        qs.push({
          questionText: 'What is mentioned in the email?',
          correct: 'A weekly deadline.',
          wrongs: ['A hotel address.', 'A price discount.', 'A flight number.'],
          explain: 'Part 7：細節題（補齊）。'
        });
      }
      for(const q of qs){
        const { optionsText, correctIdx } = mkOptions4(q.correct, q.wrongs);
        out.push({
          id: id++,
          part: 7,
          groupId: `P7G${gIndex}`,
          passage,
          questionText: q.questionText,
          choices: ['A','B','C','D'],
          optionsText,
          correct: ['A','B','C','D'][correctIdx],
          explain: q.explain
        });
      }
      gIndex++;
      continue;
    }

    if(plan.type === 'double' || plan.type === 'triple'){
      const n = plan.type === 'double' ? 2 : 3;
      const subject = pick(rng, ['training session', 'product order', 'travel schedule', 'maintenance work']);
      const passageParts = [];
      for(let i=1;i<=n;i++){
        passageParts.push(
          `Passage ${i}\n` +
          `Memo\n` +
          `Subject: ${subject}\n\n` +
          `Please review the details in this memo. It includes dates, locations, and contact information.\n`
        );
      }
      const passage = passageParts.join('\n---\n\n');

      const baseQs = [
        {
          questionText: 'What is the topic of the documents?',
          correct: subject,
          wrongs: ['a new hiring policy', 'a restaurant menu', 'a parking ticket'],
          explain: 'Part 7：主旨題（多篇文章）。'
        },
        {
          questionText: 'What are readers asked to do?',
          correct: 'Review the details.',
          wrongs: ['Return an item', 'Apply for a position', 'Cancel a reservation'],
          explain: 'Part 7：細節題，review the details。'
        },
        {
          questionText: 'What information is included?',
          correct: 'Dates and locations.',
          wrongs: ['Weather forecasts', 'Medical advice', 'Sports scores'],
          explain: 'Part 7：細節題，dates/locations/contact。'
        },
        {
          questionText: 'Who would most likely read these documents?',
          correct: 'Employees participating in the activity.',
          wrongs: ['Passengers waiting at a gate', 'Patients at a clinic', 'Children at a school'],
          explain: 'Part 7：推論題。'
        },
        {
          questionText: 'What is indicated about the contact information?',
          correct: 'It is provided for questions.',
          wrongs: ['It is missing', 'It is outdated', 'It is confidential'],
          explain: 'Part 7：推論題（補齊）。'
        }
      ];

      for(let i=0;i<plan.count;i++){
        const q = baseQs[i] || baseQs[0];
        const { optionsText, correctIdx } = mkOptions4(q.correct, q.wrongs);
        out.push({
          id: id++,
          part: 7,
          groupId: `P7G${gIndex}`,
          passage,
          questionText: q.questionText,
          choices: ['A','B','C','D'],
          optionsText,
          correct: ['A','B','C','D'][correctIdx],
          explain: q.explain
        });
      }
      gIndex++;
    }
  }

  return out;
}

// --- V2 (第二份試卷): Different seed, harder vocabulary, different questions ---
function generateFullListeningQuestionsV2(){
  const rng = makeRng(20260302); // different seed
  let id = 1;
  const out = [];

  // Part 1 (6 questions): harder statements
  const part1_v2 = [
    {
      image: './assets/set1/images_png/P1_Q1.svg.png',
      correct: 'C',
      statements: [
        'The participants are concluding their deliberations.',
        'Several executives are exiting the conference hall.',
        'Documents are being distributed among the attendees.',
        'A presentation is being conducted in an auditorium.'
      ],
      explain: 'Part 1 V2：正解 C（文件正在分發給與會者）。'
    },
    {
      image: './assets/set1/images_png/P1_Q2.svg.png',
      correct: 'A',
      statements: [
        'Utensils are being arranged on a dining surface.',
        'Patrons are perusing the establishment\'s menu.',
        'Merchandise is being relocated to a storage facility.',
        'A reservation is being confirmed over the telephone.'
      ],
      explain: 'Part 1 V2：正解 A（餐具正在擺放）。'
    },
    {
      image: './assets/set1/images_png/P1_Q3.svg.png',
      correct: 'D',
      statements: [
        'Pedestrians are congregating near the crosswalk.',
        'Vehicles are accelerating through an intersection.',
        'Construction personnel are operating heavy machinery.',
        'An individual is traversing a designated pathway.'
      ],
      explain: 'Part 1 V2：正解 D（有人正在走指定路線）。'
    },
    {
      image: './assets/set1/images_png/P1_Q4.svg.png',
      correct: 'B',
      statements: [
        'Merchandise has been strategically positioned on shelves.',
        'A customer is scrutinizing items in a retail establishment.',
        'A transaction is being finalized at the cash register.',
        'Store personnel are replenishing inventory from boxes.'
      ],
      explain: 'Part 1 V2：正解 B（顧客正在仔細查看商品）。'
    },
    {
      image: './assets/set1/images_png/P1_Q5.svg.png',
      correct: 'A',
      statements: [
        'Equipment is being systematically installed in the facility.',
        'Workers are dismantling machinery for maintenance.',
        'Inventory is being catalogued in a storage warehouse.',
        'Technicians are calibrating precision instruments.'
      ],
      explain: 'Part 1 V2：正解 A（設備正在有系統地安裝）。'
    },
    {
      image: './assets/set1/images_png/P1_Q6.svg.png',
      correct: 'C',
      statements: [
        'A congregation is assembling in a public venue.',
        'Landscaping work is in progress at the premises.',
        'Seating has been configured for a forthcoming event.',
        'Decorations are being affixed to an outdoor structure.'
      ],
      explain: 'Part 1 V2：正解 C（座位已為即將舉行的活動配置好）。'
    },
  ];

  for(const p of part1_v2){
    out.push({
      id: id++,
      part: 1,
      image: p.image,
      statements: p.statements,
      choices: ['A','B','C','D'],
      correct: p.correct,
      explain: p.explain,
    });
  }

  // Part 2 (25 questions): harder Q&A with advanced vocabulary
  const part2_v2_pool = [
    { prompt: 'Have you ascertained the whereabouts of the quarterly budget analysis?', responses: ['It has been submitted to the finance department.', 'The conference commences at ten o\'clock.', 'Indeed, I prefer espresso.'], correct: 'A', explain: 'V2 Part 2：正解 A（已交財務部門）。' },
    { prompt: 'When is the procurement deadline for the overseas shipment?', responses: ['Approximately forty-five personnel.', 'By the conclusion of next week.', 'The consignment arrived yesterday.'], correct: 'B', explain: 'V2 Part 2：正解 B（下週結束前）。' },
    { prompt: 'Would you prefer to conduct the negotiation via teleconference or in person?', responses: ['A face-to-face meeting would be preferable.', 'The agreement was signed previously.', 'The venue accommodates two hundred guests.'], correct: 'A', explain: 'V2 Part 2：正解 A（面對面更好）。' },
    { prompt: 'Who is responsible for liaising with the regulatory authorities?', responses: ['It has been thoroughly documented.', 'Ms. Rodriguez handles all compliance matters.', 'The amendment will be implemented shortly.'], correct: 'B', explain: 'V2 Part 2：正解 B（Rodriguez 女士負責）。' },
    { prompt: 'Hasn\'t the infrastructure upgrade been finalized yet?', responses: ['It should be operational by month-end.', 'The specifications were rather comprehensive.', 'Approximately seventeen kilometers.'], correct: 'A', explain: 'V2 Part 2：正解 A（月底應該可運作）。' },
    { prompt: 'Where can I obtain the requisite documentation for customs clearance?', responses: ['At the trade compliance office on the third floor.', 'The shipment weighs approximately 500 kilograms.', 'It expires next fiscal year.'], correct: 'A', explain: 'V2 Part 2：正解 A（三樓貿易合規辦公室）。' },
    { prompt: 'Why was the product launch postponed indefinitely?', responses: ['To address unforeseen quality assurance concerns.', 'It requires overnight refrigeration.', 'The brochure contains detailed specifications.'], correct: 'A', explain: 'V2 Part 2：正解 A（處理品質問題）。' },
    { prompt: 'Could you elaborate on the rationale behind the restructuring proposal?', responses: ['Certainly, I can provide a comprehensive briefing.', 'The premises underwent renovation last quarter.', 'Reservations are mandatory for groups exceeding ten.'], correct: 'A', explain: 'V2 Part 2：正解 A（可以詳細說明）。' },
  ];

  for(let i=0;i<25;i++){
    const p = part2_v2_pool[i % part2_v2_pool.length];
    out.push({
      id: id++,
      part: 2,
      prompt: p.prompt,
      responses: p.responses,
      choices: ['A','B','C'],
      correct: p.correct,
      explain: p.explain,
    });
  }

  // Part 3 (39 questions): 13 conversations × 3 questions
  const p3_v2_pool = [
    {
      passage: 'M: Have you managed to finalize the quarterly projections for the stakeholder presentation?\n' +
               'W: I\'ve completed the preliminary analysis, but I\'m awaiting confirmation on several procurement expenditures.\n' +
               'M: Let me liaise with the procurement department to expedite the verification process.',
      questions: [
        { text: 'What are the speakers primarily discussing?', correct: 'A financial presentation', wrongs: ['A manufacturing defect', 'An employee orientation', 'A building renovation'], explain: 'V2 Part 3：財務簡報。' },
        { text: 'What is the woman waiting for?', correct: 'Confirmation of certain expenses', wrongs: ['A delivery of supplies', 'A software installation', 'A training schedule'], explain: 'V2 Part 3：等待費用確認。' },
        { text: 'What will the man probably do next?', correct: 'Contact another department', wrongs: ['Submit his resignation', 'Book a flight', 'Attend a seminar'], explain: 'V2 Part 3：聯繫其他部門。' },
      ]
    },
    {
      passage: 'W: The implementation of the new inventory management system has encountered some unforeseen obstacles.\n' +
               'M: Were the integration specialists able to diagnose the technical discrepancies?\n' +
               'W: They\'ve identified the root cause and anticipate resolution within seventy-two hours.',
      questions: [
        { text: 'What problem is mentioned?', correct: 'Issues with a new system', wrongs: ['A power outage', 'A scheduling conflict', 'A budget shortfall'], explain: 'V2 Part 3：新系統問題。' },
        { text: 'Who has been working on the problem?', correct: 'Integration specialists', wrongs: ['Marketing analysts', 'Security personnel', 'Accounting staff'], explain: 'V2 Part 3：整合專家。' },
        { text: 'When is the issue expected to be resolved?', correct: 'Within 72 hours', wrongs: ['Immediately', 'Next month', 'By end of year'], explain: 'V2 Part 3：72小時內。' },
      ]
    },
  ];

  const numPart3Groups = 13;
  for(let g=0;g<numPart3Groups;g++){
    const conv = p3_v2_pool[g % p3_v2_pool.length];
    for(const q of conv.questions){
      const opts = shuffle(rng, [q.correct, ...q.wrongs]);
      out.push({
        id: id++,
        part: 3,
        groupId: `V2P3G${g+1}`,
        passage: conv.passage,
        questionText: q.text,
        optionsText: opts,
        choices: ['A','B','C','D'],
        correct: ['A','B','C','D'][opts.indexOf(q.correct)],
        explain: q.explain,
      });
    }
  }

  // Part 4 (30 questions): 10 talks × 3 questions
  const p4_v2_pool = [
    {
      passage: 'Attention all personnel. This is an announcement from the facilities management division. ' +
               'Due to essential infrastructure maintenance, the east wing elevators will be temporarily inoperative from 9:00 a.m. until approximately 3:00 p.m. tomorrow. ' +
               'Please utilize the stairwells or the west wing elevators during this period. We apologize for any inconvenience.',
      questions: [
        { text: 'What is the purpose of this announcement?', correct: 'To inform about elevator maintenance', wrongs: ['To introduce new staff', 'To announce a promotion', 'To explain a policy change'], explain: 'V2 Part 4：電梯維修通知。' },
        { text: 'How long will the elevators be out of service?', correct: 'About 6 hours', wrongs: ['All day', '30 minutes', '1 week'], explain: 'V2 Part 4：約6小時（9點到3點）。' },
        { text: 'What are listeners advised to do?', correct: 'Use alternative elevators or stairs', wrongs: ['Work from home', 'Cancel their meetings', 'Arrive earlier'], explain: 'V2 Part 4：使用樓梯或西翼電梯。' },
      ]
    },
    {
      passage: 'Good morning, this is your captain speaking. We have reached our cruising altitude of 35,000 feet and anticipate a smooth flight to our destination. ' +
               'Our estimated arrival time is 3:15 p.m. local time. Flight attendants will commence beverage service shortly. ' +
               'For your convenience, complimentary Wi-Fi is available for the duration of the flight. Please sit back, relax, and enjoy your journey.',
      questions: [
        { text: 'Who is making this announcement?', correct: 'An airline pilot', wrongs: ['A train conductor', 'A hotel receptionist', 'A tour guide'], explain: 'V2 Part 4：機長。' },
        { text: 'What will happen soon?', correct: 'Drink service will begin', wrongs: ['The plane will land', 'A movie will start', 'Passengers will board'], explain: 'V2 Part 4：飲料服務即將開始。' },
        { text: 'What is mentioned as complimentary?', correct: 'Wi-Fi access', wrongs: ['Alcoholic beverages', 'Seat upgrades', 'Travel insurance'], explain: 'V2 Part 4：免費Wi-Fi。' },
      ]
    },
  ];

  const numPart4Groups = 10;
  for(let g=0;g<numPart4Groups;g++){
    const talk = p4_v2_pool[g % p4_v2_pool.length];
    for(const q of talk.questions){
      const opts = shuffle(rng, [q.correct, ...q.wrongs]);
      out.push({
        id: id++,
        part: 4,
        groupId: `V2P4G${g+1}`,
        passage: talk.passage,
        questionText: q.text,
        optionsText: opts,
        choices: ['A','B','C','D'],
        correct: ['A','B','C','D'][opts.indexOf(q.correct)],
        explain: q.explain,
      });
    }
  }

  return out;
}

function generateFullReadingQuestionsV2(startId){
  const rng = makeRng(20260303); // different seed
  let id = startId;
  const out = [];

  const mkOptions4 = (correctText, wrongs) => {
    const all = [correctText, ...wrongs].slice(0, 4);
    const shuffled = shuffle(rng, all);
    const correctIdx = shuffled.indexOf(correctText);
    return { optionsText: shuffled, correctIdx };
  };

  // Part 5 (30 questions): Harder vocabulary
  const p5Pool_v2 = [
    { stem: 'The CEO\'s decision to divest from the subsidiary was considered ____.',  correct: 'prudent', wrongs: ['prudence', 'prudently', 'prude'], explain: 'V2 Part 5：形容詞 prudent（明智的）。' },
    { stem: 'All personnel are expected to ____ with the new compliance regulations.', correct: 'comply', wrongs: ['compliance', 'compliant', 'complying'], explain: 'V2 Part 5：to + 原形動詞 → comply。' },
    { stem: 'The acquisition was completed ____ the shareholders\' approval last month.', correct: 'following', wrongs: ['followed', 'follow', 'follows'], explain: 'V2 Part 5：following = 在...之後（介詞）。' },
    { stem: 'The project timeline is contingent ____ the availability of funding.', correct: 'upon', wrongs: ['at', 'for', 'with'], explain: 'V2 Part 5：contingent upon/on（取決於）。' },
    { stem: 'Ms. Chen demonstrated ____ expertise during the product development phase.', correct: 'considerable', wrongs: ['consider', 'considerably', 'considering'], explain: 'V2 Part 5：形容詞修飾名詞 → considerable。' },
    { stem: 'The merger was finalized ____ extensive due diligence procedures.', correct: 'after', wrongs: ['during', 'while', 'before'], explain: 'V2 Part 5：after（在...之後）盡職調查後完成。' },
    { stem: 'Applicants must possess a ____ understanding of financial modeling.', correct: 'thorough', wrongs: ['thoroughly', 'thoroughness', 'thoroughfare'], explain: 'V2 Part 5：形容詞 thorough 修飾名詞。' },
    { stem: 'The contract stipulates that deliveries must be made ____.', correct: 'punctually', wrongs: ['punctual', 'punctuality', 'punctuate'], explain: 'V2 Part 5：副詞 punctually 修飾動詞 made。' },
  ];

  for(let i=0;i<30;i++){
    const base = p5Pool_v2[i % p5Pool_v2.length];
    const { optionsText, correctIdx } = mkOptions4(base.correct, base.wrongs);
    out.push({
      id: id++,
      part: 5,
      choices: ['A','B','C','D'],
      questionText: base.stem,
      optionsText,
      correct: ['A','B','C','D'][correctIdx],
      explain: base.explain
    });
  }

  // Part 6 (16 questions): 4 passages × 4
  const p6Passages_v2 = [
    {
      title: 'Memorandum: Quarterly Performance Review',
      passage:
        'MEMORANDUM\n\n' +
        'To: Department Heads\n' +
        'From: Chief Operating Officer\n' +
        'Subject: Q3 Performance Evaluation\n\n' +
        'As we approach the conclusion of the third quarter, it is (1) ____ that all managers submit comprehensive performance assessments for their respective teams.\n\n' +
        'These evaluations should be (2) ____ by October 15th to ensure timely processing by Human Resources.\n\n' +
        'Your cooperation is appreciated.',
      blanks: [
        { q: 'Choose the word for blank (1).', correct: 'imperative', wrongs: ['imperatively', 'imperate', 'imperatives'], explain: 'V2 Part 6：(1) 形容詞 imperative（必要的）。' },
        { q: 'Choose the word for blank (2).', correct: 'submitted', wrongs: ['submission', 'submitting', 'submit'], explain: 'V2 Part 6：(2) 被動語態 be submitted。' },
        { q: 'What is the main purpose of the memo?', correct: 'To request performance evaluations.', wrongs: ['To announce layoffs.', 'To schedule a retreat.', 'To introduce new software.'], explain: 'V2 Part 6：要求績效評估。' },
        { q: 'By when should the evaluations be submitted?', correct: 'October 15th.', wrongs: ['End of year', 'Next week', 'November 1st'], explain: 'V2 Part 6：10月15日前。' },
      ]
    },
    {
      title: 'Notice: Cybersecurity Protocol',
      passage:
        'SECURITY NOTICE\n\n' +
        'Effective immediately, all employees must enable two-factor authentication on their corporate accounts. This measure is designed to (1) ____ the security of our digital infrastructure.\n\n' +
        'Failure to comply may result in temporary suspension of network (2) ____.\n\n' +
        'Contact IT Support for assistance.',
      blanks: [
        { q: 'Choose the word for blank (1).', correct: 'enhance', wrongs: ['enhancement', 'enhanced', 'enhancing'], explain: 'V2 Part 6：(1) to + 原形 → enhance。' },
        { q: 'Choose the word for blank (2).', correct: 'privileges', wrongs: ['privilege', 'privileged', 'privileging'], explain: 'V2 Part 6：(2) 名詞複數 privileges。' },
        { q: 'What must employees do?', correct: 'Enable two-factor authentication.', wrongs: ['Change their passwords weekly.', 'Install personal software.', 'Work from home exclusively.'], explain: 'V2 Part 6：啟用雙因素驗證。' },
        { q: 'What may happen if employees don\'t comply?', correct: 'Their network access may be suspended.', wrongs: ['They will receive a bonus.', 'They will be promoted.', 'Their vacation days will increase.'], explain: 'V2 Part 6：網路存取權可能被暫停。' },
      ]
    },
  ];
  while(p6Passages_v2.length < 4) p6Passages_v2.push(p6Passages_v2[p6Passages_v2.length % 2]);

  for(let g=1; g<=4; g++){
    const p = p6Passages_v2[g-1];
    for(let i=0;i<4;i++){
      const b = p.blanks[i];
      const { optionsText, correctIdx } = mkOptions4(b.correct, b.wrongs);
      out.push({
        id: id++,
        part: 6,
        groupId: `V2P6G${g}`,
        passage: p.passage,
        questionText: b.q,
        choices: ['A','B','C','D'],
        optionsText,
        correct: ['A','B','C','D'][correctIdx],
        explain: b.explain
      });
    }
  }

  // Part 7 (54 questions) - similar structure, harder vocabulary
  const mkSinglePassage_v2 = (seedTag) => {
    const company = pick(rng, ['Pinnacle Industries', 'Meridian Consulting', 'Vanguard Technologies', 'Summit Financial']);
    const day = pick(rng, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
    const passage =
      `Interoffice Correspondence\n\n` +
      `To: All Departmental Staff\n` +
      `From: ${company} Administration\n` +
      `Subject: Amended Reimbursement Procedures\n\n` +
      `Please be advised that commencing ${day}, all expense reimbursement requests must be accompanied by itemized receipts. ` +
      `Submissions lacking proper documentation will be returned for revision.\n`;

    const q1 = {
      questionText: 'What is the primary purpose of this correspondence?',
      correct: 'To announce changes to a procedure.',
      wrongs: ['To advertise a new product.', 'To request attendance at an event.', 'To confirm a reservation.'],
      explain: 'V2 Part 7：公告程序變更。'
    };
    const q2 = {
      questionText: 'What must accompany reimbursement requests?',
      correct: 'Itemized receipts.',
      wrongs: ['A supervisor\'s signature only.', 'A credit card statement.', 'A verbal explanation.'],
      explain: 'V2 Part 7：須附詳細收據。'
    };
    const q3 = {
      questionText: 'What happens to incomplete submissions?',
      correct: 'They are returned for correction.',
      wrongs: ['They are approved automatically.', 'They are forwarded to executives.', 'They are destroyed.'],
      explain: 'V2 Part 7：會被退回修正。'
    };

    return { passage, questions: [q1,q2,q3] };
  };

  const p7Groups_v2 = [];
  for(let i=0;i<9;i++) p7Groups_v2.push({ type:'single', count:3 });
  p7Groups_v2.push({ type:'single', count:4 });
  p7Groups_v2.push({ type:'double', count:5 });
  p7Groups_v2.push({ type:'double', count:5 });
  p7Groups_v2.push({ type:'triple', count:5 });
  p7Groups_v2.push({ type:'triple', count:5 });
  p7Groups_v2.push({ type:'single', count:3 });

  let gIndex = 1;
  for(const plan of p7Groups_v2){
    if(plan.type === 'single'){
      const { passage, questions } = mkSinglePassage_v2(`V2S${gIndex}`);
      const qs = questions.slice(0, plan.count);
      while(qs.length < plan.count){
        qs.push({ questionText: 'What is implied in the correspondence?', correct: 'A policy has been updated.', wrongs: ['A holiday is approaching.', 'A product is discontinued.', 'A store is closing.'], explain: 'V2 Part 7：補齊題。' });
      }
      for(const q of qs){
        const { optionsText, correctIdx } = mkOptions4(q.correct, q.wrongs);
        out.push({ id: id++, part: 7, groupId: `V2P7G${gIndex}`, passage, questionText: q.questionText, choices: ['A','B','C','D'], optionsText, correct: ['A','B','C','D'][correctIdx], explain: q.explain });
      }
      gIndex++;
      continue;
    }

    if(plan.type === 'double' || plan.type === 'triple'){
      const n = plan.type === 'double' ? 2 : 3;
      const subject = pick(rng, ['merger announcement', 'policy amendment', 'budget allocation', 'personnel restructuring']);
      const passageParts = [];
      for(let i=1;i<=n;i++){
        passageParts.push(`Document ${i}\n\nMemorandum\nSubject: ${subject}\n\nThis document contains pertinent information regarding the aforementioned matter. Please review thoroughly.\n`);
      }
      const passage = passageParts.join('\n---\n\n');

      const baseQs = [
        { questionText: 'What is the subject matter of the documents?', correct: subject, wrongs: ['a recruitment campaign', 'a product recall', 'a facility relocation'], explain: 'V2 Part 7：主旨題。' },
        { questionText: 'What are readers expected to do?', correct: 'Review the information carefully.', wrongs: ['Discard the documents.', 'Forward to external parties.', 'Ignore the contents.'], explain: 'V2 Part 7：仔細審閱。' },
        { questionText: 'What type of document is this?', correct: 'An internal memorandum.', wrongs: ['A newspaper article.', 'A product manual.', 'A legal contract.'], explain: 'V2 Part 7：內部備忘錄。' },
        { questionText: 'Who would most likely receive these documents?', correct: 'Company employees.', wrongs: ['General public.', 'Government officials.', 'University students.'], explain: 'V2 Part 7：公司員工。' },
        { questionText: 'What is suggested about the information?', correct: 'It is relevant and important.', wrongs: ['It is outdated.', 'It is fictional.', 'It is classified.'], explain: 'V2 Part 7：推論題。' },
      ];

      for(let i=0;i<plan.count;i++){
        const q = baseQs[i] || baseQs[0];
        const { optionsText, correctIdx } = mkOptions4(q.correct, q.wrongs);
        out.push({ id: id++, part: 7, groupId: `V2P7G${gIndex}`, passage, questionText: q.questionText, choices: ['A','B','C','D'], optionsText, correct: ['A','B','C','D'][correctIdx], explain: q.explain });
      }
      gIndex++;
    }
  }

  return out;
}

function generateFullToeic200Questions(){
  const listening = generateFullListeningQuestions();
  const reading = generateFullReadingQuestions(101);
  return [...listening, ...reading];
}

function generateFullToeic200QuestionsV2(){
  const listening = generateFullListeningQuestionsV2();
  const reading = generateFullReadingQuestionsV2(101);
  return [...listening, ...reading];
}

function ensureSetQuestions(set){
  if(!set) return;
  if(Array.isArray(set.questions) && set.questions.length > 0) return;
  if(set.id === 'full_listening'){
    set.questions = generateFullListeningQuestions();
  }
  if(set.id === 'full_lr_200'){
    set.questions = generateFullToeic200Questions();
  }
  if(set.id === 'full_lr_200_v2'){
    set.questions = generateFullToeic200QuestionsV2();
  }
}

// (removed duplicate legacy ensureSetQuestions block)

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
  unknownWords: [],
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
      if(!Array.isArray(state.unknownWords)) state.unknownWords = [];
    }
  }catch{}
}

function applyTheme(theme){
  try{
    const t = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = t === 'dark' ? 'dark' : '';
  }catch{}
}

function initTheme(){
  let saved = 'light';
  try{
    saved = localStorage.getItem(THEME_KEY) || 'light';
  }catch{}
  const theme = saved === 'dark' ? 'dark' : 'light';
  applyTheme(theme);
  const btn = document.getElementById('btnTheme');
  if(btn){
    btn.textContent = theme === 'dark' ? '淺色' : '深色';
  }
}

function toggleTheme(){
  const cur = (document.documentElement.dataset.theme === 'dark') ? 'dark' : 'light';
  const next = cur === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try{ localStorage.setItem(THEME_KEY, next); }catch{}
  const btn = document.getElementById('btnTheme');
  if(btn){
    btn.textContent = next === 'dark' ? '淺色' : '深色';
  }
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
    unknownWords: [],
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

// --- Unknown words (vocab notebook) ---
function normalizeWordInput(s){
  return String(s || '').replace(/\s+/g,' ').trim();
}

function findSelectedText(){
  try{
    const sel = window.getSelection && window.getSelection();
    const t = sel ? sel.toString() : '';
    return normalizeWordInput(t);
  }catch{
    return '';
  }
}

function addUnknownWord(word, note, q){
  const w = normalizeWordInput(word);
  if(!w) return;
  const key = w.toLowerCase();

  const list = Array.isArray(state.unknownWords) ? state.unknownWords : [];
  const exists = list.some((x) => String(x.word || '').toLowerCase() === key);
  if(exists) return;

  const item = {
    id: Date.now(),
    word: w,
    note: normalizeWordInput(note),
    qid: q?.id ?? null,
    part: q?.part ?? null,
    createdAt: new Date().toISOString()
  };

  state.unknownWords = [item, ...list];
  saveState();
  updateUnknownCountUI();
}

function removeUnknownWord(id){
  const list = Array.isArray(state.unknownWords) ? state.unknownWords : [];
  state.unknownWords = list.filter((x) => x.id !== id);
  saveState();
  updateUnknownCountUI();
}

function clearUnknownWords(){
  state.unknownWords = [];
  saveState();
  updateUnknownCountUI();
}

function updateUnknownCountUI(){
  const n = Array.isArray(state.unknownWords) ? state.unknownWords.length : 0;
  const elc = document.getElementById('unknownCount');
  if(elc) elc.textContent = n ? `已記錄單字：${n}` : '';
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
  } else if(q.part >= 5){
    const box = document.createElement('div');
    box.className = 'hint';
    box.textContent = 'Reading（Part 5–7）：請閱讀題目/文章後作答（無音檔）';
    media.appendChild(box);

    if(q.passage){
      const btn = document.createElement('button');
      btn.className = 'ghost';
      btn.type = 'button';
      btn.textContent = '顯示/隱藏文章';
      btn.style.marginTop = '12px';

      const pre = document.createElement('pre');
      pre.className = 'hint small';
      pre.style.whiteSpace = 'pre-wrap';
      pre.style.marginTop = '10px';
      pre.style.display = 'block';
      pre.textContent = q.passage;

      btn.addEventListener('click', () => {
        pre.style.display = pre.style.display === 'none' ? 'block' : 'none';
      });

      media.appendChild(btn);
      media.appendChild(pre);
    }

    if(q.questionText){
      const qt = document.createElement('div');
      qt.style.marginTop = '10px';
      qt.style.fontWeight = '800';
      qt.textContent = q.questionText;
      media.appendChild(qt);
    }
  } else {
    const box = document.createElement('div');
    box.className = 'hint';
    box.textContent = '本題無圖片，請聽音檔後作答。';
    media.appendChild(box);
  }

  // per-question audio hint
  const speech = buildSpeechForQuestion(q);
  el('qAudioHint').textContent = q.part >= 5
    ? 'Reading：無音檔'
    : q.audio
      ? `音檔：${q.audio.split('/').slice(-1)[0]}`
      : speech
        ? '語音合成：可播放（非官方音檔）'
        : '';
  updateUnknownCountUI();

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

  // unknown words (vocab)
  const vocabCard = el('vocabCard');
  const vocabList = el('vocabList');
  const words = Array.isArray(state.unknownWords) ? state.unknownWords : [];
  if(vocabCard && vocabList){
    vocabCard.classList.toggle('hidden', words.length === 0);
    vocabList.innerHTML = '';

    words.forEach((w) => {
      const row = document.createElement('div');
      row.className = 'vocabItem';

      const left = document.createElement('div');
      const meta = [];
      if(w.part) meta.push(`Part ${w.part}`);
      if(w.qid) meta.push(`Q${w.qid}`);
      left.innerHTML = `
        <div class="vocabWord">${escapeHtml(w.word || '')}</div>
        <div class="vocabMeta">${escapeHtml(meta.join(' · ') || '')}</div>
        <div class="vocabNote">${escapeHtml(w.note || '')}</div>
      `;

      const right = document.createElement('div');
      const btn = document.createElement('button');
      btn.className = 'ghost';
      btn.type = 'button';
      btn.textContent = '刪除';
      btn.addEventListener('click', () => {
        removeUnknownWord(w.id);
        renderResult();
      });
      right.appendChild(btn);

      row.appendChild(left);
      row.appendChild(right);
      vocabList.appendChild(row);
    });
  }

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
  // theme toggle
  const themeBtn = document.getElementById('btnTheme');
  if(themeBtn){
    themeBtn.addEventListener('click', () => toggleTheme());
  }

  const addWordBtn = document.getElementById('btnAddWord');
  if(addWordBtn){
    addWordBtn.addEventListener('click', () => {
      const set = getSet();
      const q = set.questions[state.currentIndex];

      const picked = findSelectedText();
      const word = picked || window.prompt('輸入要記錄的不會單字（可先框選文字再按按鈕）', '') || '';
      const w = normalizeWordInput(word);
      if(!w) return;

      const note = window.prompt('備註/中文意思（可留空）', '') || '';
      addUnknownWord(w, note, q);
      // small feedback
      updateUnknownCountUI();
    });
  }

  const clearVocabBtn = document.getElementById('btnClearVocab');
  if(clearVocabBtn){
    clearVocabBtn.addEventListener('click', () => {
      if(!confirm('確定要清空所有已記錄的單字嗎？')) return;
      clearUnknownWords();
      renderResult();
    });
  }

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
    state.unknownWords = [];

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

    const autoPlayOn = document.getElementById('chkAutoPlay')?.checked;
    speakEn(speech, { rate: 0.95 }, () => {
      // on end callback
      if(autoPlayOn){
        const nextIdx = state.currentIndex + 1;
        const set2 = getSet();
        if(nextIdx < set2.questions.length){
          // Check if next question is still listening (part <= 4)
          const nextQ = set2.questions[nextIdx];
          if(nextQ && nextQ.part <= 4){
            state.currentIndex = nextIdx;
            saveState();
            renderExamQuestion();
            // auto-play next after short delay
            setTimeout(() => {
              document.getElementById('btnPlayQ')?.click();
            }, 800);
          }
        }
      }
    });
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
  initTheme();
  loadState();

  // if user had started but not submitted, keep them in exam if hash asks so
  hookEvents();

  if(!location.hash){
    location.hash = '#home';
  }
  render();
})();
