// 작품 목록 — 포트폴리오 원본 데이터에서 가져옴. award가 빈 값이면 배지를 달지 않음
export const works = [
  {
    "id": "pandaepe",
    "title": "판타지아 대구 AI 페스타 카드뉴스",
    "contest": "판타지아 대구 AI 페스타 · 카드뉴스 부문",
    "award": "대상",
    "date": "2026.10",
    "desc": "\"9개의 축제, 하나의 이름\" — 대구국제오페라축제부터 달성대구현대미술제까지 서로 다른 9개 축제가 같은 계절, 같은 도시에서 열린다는 사실을 하나의 FESTA로 묶었습니다. 블랙 배경에 레드 포인트 타이포 10장, 1080×1920.",
    "tools": [
      "콘셉트 · 카피",
      "타이포 레이아웃",
      "AI 이미지 생성"
    ],
    "imgs": [
      "pandaepe_01.webp",
      "pandaepe_02.webp",
      "pandaepe_03.webp",
      "pandaepe_04.webp",
      "pandaepe_05.webp",
      "pandaepe_06.webp",
      "pandaepe_07.webp",
      "pandaepe_08.webp",
      "pandaepe_09.webp",
      "pandaepe_10.webp"
    ],
    "ratio": "9/16"
  },
  {
    "id": "video",
    "title": "모여서 만든 길 (AI 영상, 56초)",
    "contest": "한국도로공사 56주년 AI영상 제작 공모전",
    "award": "대상",
    "date": "2025.10",
    "desc": "개미가 작은 걸음을 모아 길을 만든다는 메타포. GPT-4 → 미드저니 → Kling·Veo3 → 다빈치 리졸브 → 수퍼톤. <a href=\"https://www.youtube.com/watch?v=juRqXqDQQds\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--blue)\">YouTube ↗</a> · <a href=\"projects/video.html\" style=\"color:var(--blue)\">케이스 스터디 →</a>",
    "tools": [
      "스토리보드",
      "AI 영상 6종",
      "컬러 그레이딩"
    ],
    "imgs": [
      "../video_thumb.webp",
      "../midjourney.webp",
      "../kling.webp",
      "../davinci.webp"
    ],
    "ratio": "16/9",
    "link": "https://www.youtube.com/watch?v=juRqXqDQQds"
  },
  {
    "id": "co2",
    "title": "피고인 C, 당신은 CO₂입니까?",
    "contest": "2026 「탄소, 다시 보다」 AI 콘텐츠 공모전 · 이미지 부문 · KNU팀 (2인)",
    "award": "최우수",
    "date": "2026.10",
    "desc": "'탄소'라는 한 단어 때문에 원소 C, 이산화탄소 CO₂, 탄소소재가 하나로 묶여 이해된다는 점에서 출발한 10컷 법정 코미디. CO₂로 오해받아 법정에 선 원소 C를 위해 탄소섬유·흑연·활성탄·카본블랙이 증인으로 나와 각자의 쓰임을 증언합니다. 작품명·콘셉트·스토리보드·대사는 직접 정하고 이미지는 ChatGPT 이미지 생성으로 만들었으며, 탄소소재를 무조건 친환경이라고 하거나 확인되지 않은 수치를 쓰지 않는다는 제작 기준을 세웠습니다. 한국탄소산업진흥원 수여.",
    "tools": [
      "콘셉트 · 스토리보드 · 대사",
      "과학적 정확성 기준",
      "AI 이미지 생성"
    ],
    "imgs": [
      "co2_01.webp",
      "co2_02.webp",
      "co2_03.webp",
      "co2_04.webp",
      "co2_05.webp",
      "co2_06.webp",
      "co2_07.webp",
      "co2_08.webp",
      "co2_09.webp",
      "co2_10.webp"
    ],
    "ratio": "4/5"
  },
  {
    "id": "drainx",
    "title": "DRAIN-X 설계 도면 6장",
    "contest": "제2회 ZYXCAD AX 경진대회 · 설계 부문 (미래 로봇·기계)",
    "award": "",
    "date": "2026.10",
    "desc": "2035 자율 빗물받이 준설 로봇. 3각법 일반 배치도, 조립도+부품표, 덮개 플리퍼 구조도, 작업 단면, 클램셸·커플러 상세도, 부품도. Python으로 궤적·전도 안정성을 계산하고 LISP로 CAD 안에서 재검증했습니다. <a href=\"projects/drainx.html\" style=\"color:var(--blue)\">케이스 스터디 →</a>",
    "tools": [
      "ZYXCAD AX",
      "AutoLISP",
      "Python 기구 계산"
    ],
    "imgs": [
      "drainx_S01.webp",
      "drainx_S02.webp",
      "drainx_S03.webp",
      "drainx_S04.webp",
      "drainx_S05.webp",
      "drainx_S06.webp",
      "drainx_zyx_dxflip.webp"
    ],
    "ratio": "297/210"
  },
  {
    "id": "pv5",
    "title": "PV5 카고 택배 패키지 도면",
    "contest": "제5회 기아 PBV 아이디어 공모전 · 일반부문",
    "award": "",
    "date": "2026.10",
    "desc": "적재구역 평면도(3단×2열 6칸), 표시 모듈 회로도 REV C(ESP32 · WS2812B 60 · OLED · 부저), 하네스·부품표·상태도. <a href=\"projects/pv5.html\" style=\"color:var(--blue)\">케이스 스터디 →</a>",
    "tools": [
      "회로도",
      "배치도",
      "상태도 · 시퀀스"
    ],
    "imgs": [
      "../pv5_plan.webp",
      "../pv5_circuit.webp",
      "../pv5_box.webp"
    ],
    "ratio": "16/9"
  },
  {
    "id": "hangeul",
    "title": "KOREA, WRITTEN IN HANGEUL",
    "contest": "제4회 하나카드 plate 디자인 공모전 · 주제1 GLOBAL (외국인 대상)",
    "award": "",
    "date": "2026.10",
    "desc": "한글의 획(ㅡ ㅣ ㅅ ㅇ ㅁ)을 그래픽 요소로 쓴 외국인 대상 카드. \"규칙은 하나, 한글 획으로만 그린다\" — 현대적이면서 고전적인 블랙·골드 팔레트, 한복·기와·전통 문양을 획으로 재해석한 상세페이지.",
    "tools": [
      "콘셉트",
      "상세페이지 레이아웃",
      "AI 이미지 생성"
    ],
    "imgs": [
      "hangeul_1.webp",
      "hangeul_2.webp",
      "hangeul_3.webp",
      "hangeul_4.webp",
      "hangeul_5.webp"
    ],
    "ratio": "2/3"
  },
  {
    "id": "oneisone",
    "title": "ONE IS ONE — 어디서든 같은 1",
    "contest": "제4회 하나카드 plate 디자인 공모전 · 주제2 GLOBAL (해외 이용 특화)",
    "award": "",
    "date": "2026.10",
    "desc": "엔·달러·유로·동·바트, 통화가 달라도 \"같은 1\". 지폐에서 가져온 네 가지 요소(기요셰 문양, 투명 인쇄, 보안선, 색)를 카드 5종에 옮기고 상세페이지로 풀었습니다.",
    "tools": [
      "콘셉트",
      "카드 5종",
      "상세페이지"
    ],
    "imgs": [
      "oneisone_1.webp",
      "oneisone_2.webp",
      "oneisone_3.webp",
      "oneisone_4.webp",
      "oneisone_5.webp",
      "oneisone_6.webp"
    ],
    "ratio": "1/1"
  },
  {
    "id": "moving",
    "title": "MOVING — 하늘에서 본 하루",
    "contest": "제4회 하나카드 plate 디자인 공모전 · 주제3 MOVING 확장 시리즈 제안",
    "award": "",
    "date": "2026.10",
    "desc": "MOVING은 다섯 모드 가운데 내 생활에 맞는 혜택을 골라 쓰는 카드입니다. 모드마다 그 혜택을 쓰는 장소를 하늘에서 내려다본 장면으로 그렸습니다. ALLDAY는 출근길 횡단보도, ONLINE은 거실과 책상, PLAY는 커피·컵라면·배달, LIFE는 온 가족 장보기, GLOBAL은 비행기 아래 해변. \"3일 연속 쓰면 다음 날부터 적립 2배\" 규칙은 장면마다 ×2 하나로 숨겼습니다(도로 페인트, 러그 무늬, 바닥 타일, 세일 스티커, 모래 낙서). 뒷면 위쪽 창으로 앞면 장면이 이어지고, IC칩·마그네틱·카드 정보 위치는 공식 세로형 템플릿을 따랐습니다.",
    "tools": [
      "콘셉트",
      "5모드 장면 설계",
      "앞·뒷면 카드 5종",
      "상세페이지"
    ],
    "imgs": [
      "moving_1.webp",
      "moving_2.webp",
      "moving_3.webp",
      "moving_4.webp",
      "moving_5.webp",
      "moving_6.webp",
      "moving_7.webp"
    ],
    "ratio": "2/3"
  },
  {
    "id": "cm",
    "title": "당신이 넘은 1cm",
    "contest": "지식재산(IP) 인식 웹툰 공모전 · 10컷 A2 포스터",
    "award": "",
    "date": "2026.10",
    "desc": "청년 창작자의 제안을 거절한 기업이 슬라이더 위치만 1cm 바꾼 제품을 출시한다. 그 1cm의 틈이 열리자 수년의 스케치와 실패, 새벽의 작업이 드러난다. 처벌이나 법률 설명 대신 \"아이디어의 가치를 거리로 판단하지 마세요\"로 끝나는 10컷. 420×594mm, 4961×7016px 300dpi.",
    "tools": [
      "시나리오 · 대사",
      "컷 연출 · A2 레이아웃",
      "AI 이미지 생성",
      "Pretendard 후편집"
    ],
    "imgs": [
      "cm_poster.webp",
      "cm_01.webp",
      "cm_02.webp",
      "cm_03.webp",
      "cm_04.webp",
      "cm_05.webp",
      "cm_06.webp",
      "cm_07.webp",
      "cm_08.webp",
      "cm_09.webp",
      "cm_10.webp"
    ],
    "ratio": "16/9"
  },
  {
    "id": "twelve",
    "title": "열두 번째 이름",
    "contest": "2026 인공지능(AI) 활용 청소년활동 안전공모전 · 웹툰 10페이지",
    "award": "",
    "date": "2026.10",
    "desc": "\"한 명이 모자라자, 모두가 멈췄다.\" 청소년활동에서 반복되는 인원 확인의 의미를 12→11→12 숫자 변화로 풀었습니다. 서사·대사는 직접 구성하고, 인물 일관성·배경 오류·불필요한 문자를 직접 검수해 재생성했습니다.",
    "tools": [
      "10페이지 서사 구조",
      "캐릭터 설정 · 콘티",
      "AI 이미지 생성",
      "AI 도구 활용 내역서"
    ],
    "imgs": [
      "twelve_thumb_2.webp",
      "twelve_thumb_1.webp",
      "twelve_thumb_3.webp",
      "twelve_thumb_4.webp",
      "twelve_01.webp",
      "twelve_02.webp",
      "twelve_03.webp",
      "twelve_04.webp",
      "twelve_05.webp",
      "twelve_06.webp",
      "twelve_07.webp",
      "twelve_08.webp",
      "twelve_09.webp",
      "twelve_10.webp"
    ],
    "ratio": "1/1"
  },
  {
    "id": "voice",
    "title": "엄마의 목소리가 두 명이었다",
    "contest": "2026 디지털윤리 창작콘텐츠 공모전 · 성인 인식제고 웹툰 (세로 스크롤)",
    "award": "",
    "date": "2026.10",
    "desc": "AI 음성복제·딥보이스 사칭. \"목소리가 똑같다면 우리는 무엇을 믿어야 할까?\" 캠페인 문구 없이 짧은 영화처럼 읽히다가 마지막 장면에서 \"확인하는 습관\"을 스스로 떠올리게 하는 구성. 말풍선 전체 검수와 수정 장면 모아보기까지 제작 과정을 기록했습니다.",
    "tools": [
      "시나리오 · 콘티",
      "말풍선 검수",
      "AI 이미지 생성"
    ],
    "imgs": [
      "voice_01.webp",
      "voice_02.webp",
      "voice_03.webp",
      "voice_04.webp",
      "voice_05.webp",
      "voice_06.webp",
      "voice_07.webp",
      "voice_08.webp",
      "voice_09.webp",
      "voice_10.webp",
      "voice_11.webp",
      "voice_12.webp",
      "voice_13.webp",
      "voice_proc_1.webp",
      "voice_proc_2.webp",
      "voice_proc_3.webp",
      "voice_proc_4.webp"
    ],
    "ratio": "528/1400"
  },
  {
    "id": "gangnam",
    "title": "할머니의 지도",
    "contest": "2026 강남 대전환 AI 홍보콘텐츠 공모전 · 웹툰 12컷",
    "award": "",
    "date": "2026.09",
    "desc": "서랍에서 나온 할머니의 옛 지도에는 길 대신 \"천천히 걸어도 괜찮은 길\", \"나이 들어도 함께하는 동네\" 같은 바람이 적혀 있다. 손자와 그 지도를 들고 오늘의 강남을 걸으며 바람이 하나씩 이뤄진 걸 확인하고, 마지막엔 손자가 새 바람을 적는다. \"과거의 바람이 오늘의 강남이 되고, 오늘의 바람이 내일의 강남이 된다\"는 메시지를 홍보 문구 대신 세대가 함께 걷는 장면으로 풀었습니다.",
    "tools": [
      "시나리오 · 대사",
      "12컷 연출",
      "AI 이미지 생성",
      "말풍선 후편집"
    ],
    "imgs": [
      "gangnam_01.webp",
      "gangnam_02.webp",
      "gangnam_03.webp",
      "gangnam_04.webp",
      "gangnam_05.webp",
      "gangnam_06.webp",
      "gangnam_07.webp",
      "gangnam_08.webp",
      "gangnam_09.webp",
      "gangnam_10.webp",
      "gangnam_11.webp",
      "gangnam_12.webp"
    ],
    "ratio": "4/5"
  },
  {
    "id": "onesec",
    "title": "딱 1초만 장난칠게",
    "contest": "[교육부] 2026 우리가 바라는 안전한 학교 공모전 · 인스타툰 9페이지",
    "award": "",
    "date": "2026.09",
    "desc": "복도에서 \"딱 1초만\" 하던 장난이 친구의 부상으로 이어진다. 장난친 사람에게는 1초였지만 다친 사람에게는 매일 불편한 시간이 됐다는 것을 장난친 쪽의 후회로 따라가고, 마지막엔 같은 장난을 친구들이 먼저 멈추는 장면으로 끝냅니다. \"장난은 1초, 사고는 오래 남습니다.\" 흑백 화면에 블루 포인트 하나만 썼습니다.",
    "tools": [
      "시나리오 · 대사",
      "9페이지 구성",
      "AI 이미지 생성",
      "타이포 후편집"
    ],
    "imgs": [
      "onesec_01.webp",
      "onesec_02.webp",
      "onesec_03.webp",
      "onesec_04.webp",
      "onesec_05.webp",
      "onesec_06.webp",
      "onesec_07.webp",
      "onesec_08.webp",
      "onesec_09.webp"
    ],
    "ratio": "1/1"
  },
  {
    "id": "peace",
    "title": "2035년의 나에게 메시지가 왔다",
    "contest": "2026 평화 통일미래 콘텐츠 공모전 · 인스타툰 6페이지",
    "award": "",
    "date": "2026.09",
    "desc": "2035년의 내가 \"냉면 먹으러 갈래? 평양.\"이라고 메시지를 보낸다. 통일을 거창한 뉴스가 아니라 친구들과의 평범한 토요일 약속으로 그려, \"누군가에겐 특별한 미래, 그들에게는 그냥 토요일\"이라는 대비로 평화를 설명합니다. 메신저 화면 구성에 모노톤 인물, 미래의 나만 파란 말풍선.",
    "tools": [
      "콘셉트 · 대사",
      "메신저 UI 레이아웃",
      "AI 이미지 생성"
    ],
    "imgs": [
      "peace_01.webp",
      "peace_02.webp",
      "peace_03.webp",
      "peace_04.webp",
      "peace_05.webp",
      "peace_06.webp"
    ],
    "ratio": "1/1"
  },
  {
    "id": "fishnet",
    "title": "그물에는 물고기만 걸려야 합니다",
    "contest": "2026 해양안전 콘텐츠 공모전 · AI콘텐츠 (포스터)",
    "award": "",
    "date": "2026",
    "desc": "어선 조업 중 로프·양망기 끼임 사고. 사고 장면을 보여주는 대신 그물 그림자가 사람의 손처럼 보이도록 연출해, 자세히 보면 위험을 스스로 발견하게 했습니다. 주황 구명조끼만 강한 색으로 남기고 나머지는 남색·회청색으로 눌렀습니다. 카피·행동수칙·하단 정보는 직접 후편집했고, 프롬프트와 수정 지시는 제작과정 증빙자료로 정리했습니다.",
    "tools": [
      "카피",
      "시각 은유 설계",
      "ChatGPT · Astra",
      "후편집"
    ],
    "imgs": [
      "fishnet_poster.webp"
    ],
    "ratio": "1055/1491"
  },
  {
    "id": "koroad",
    "title": "마음은 안 보입니다. 깜빡이는 보입니다.",
    "contest": "도로교통공단 교통안전 포스터",
    "award": "",
    "date": "2026",
    "desc": "\"아이와 어르신이 당신의 방향을 알 수 있도록\" — 차로 변경·좌우회전 전 방향지시등 점등 캠페인. 할아버지와 손녀의 뒷모습, 깜빡이는 차 한 대로 메시지를 한 장면에 담았습니다.",
    "tools": [
      "카피",
      "장면 연출",
      "AI 이미지 생성"
    ],
    "imgs": [
      "koroad_poster.webp"
    ],
    "ratio": "3/4"
  },
  {
    "id": "emf",
    "title": "내 주변 기지국, 전자파는 몇 %일까?",
    "contest": "2026 생활 속 전자파 바로알기 동영상·포스터 공모전",
    "award": "",
    "date": "2026",
    "desc": "막연한 걱정 대신 실측값(인체보호기준 대비 1.35~3.92%)을 보여주고 \"우리 동네는? 직접 확인해보세요\"로 행동을 유도하는 포스터. 데이터 시각화 + QR 연결.",
    "tools": [
      "데이터 카피",
      "포스터 레이아웃"
    ],
    "imgs": [
      "emf_poster.webp"
    ],
    "ratio": "3/4"
  },
  {
    "id": "toli",
    "title": "낙동강 캐릭터 \"톨이\"",
    "contest": "낙동강 캐릭터 공모전",
    "award": "",
    "date": "2026.10",
    "desc": "흙과 새싹으로 만든 낙동강 캐릭터. 기본형·앞면·후면·걷는 모습·인사하기·작은 생명을 바라보는 장면 6컷 포즈 시트.",
    "tools": [
      "캐릭터 설정",
      "AI 이미지 생성"
    ],
    "imgs": [
      "toli_1.webp",
      "toli_2.webp",
      "toli_3.webp",
      "toli_4.webp",
      "toli_5.webp",
      "toli_6.webp"
    ],
    "ratio": "4/5"
  }
];
