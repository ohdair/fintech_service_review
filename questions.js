const questions = {
  "2024-07-01": [
    {
      question: "이 태그는 하이퍼링크를 정의하는 데 사용됩니다.",
      answers: [
        { text: "<a>", correct: true },
        { text: "<link>", correct: false },
        { text: "<nav>", correct: false },
        { text: "<href>", correct: false },
      ],
    },
    {
      question: "이 태그는 단락을 만드는 데 사용됩니다.",
      answers: [
        { text: "<p>", correct: true },
        { text: "<para>", correct: false },
        { text: "<pg>", correct: false },
        { text: "<text>", correct: false },
      ],
    },
    {
      question: "이 태그는 이미지를 정의하는 데 사용됩니다.",
      answers: [
        { text: "<img>", correct: true },
        { text: "<picture>", correct: false },
        { text: "<src>", correct: false },
        { text: "<image>", correct: false },
      ],
    },
    {
      question: "이 태그는 표 행을 만드는 데 사용됩니다.",
      answers: [
        { text: "<tr>", correct: true },
        { text: "<td>", correct: false },
        { text: "<th>", correct: false },
        { text: "<row>", correct: false },
      ],
    },
  ],
  "2024-07-02": [
    {
      question: "이 태그는 표에서 헤더 셀을 정의하는 데 사용됩니다.",
      answers: [
        { text: "<th>", correct: true },
        { text: "<thead>", correct: false },
        { text: "<header>", correct: false },
        { text: "<h1>", correct: false },
      ],
    },
    {
      question: "이 태그는 폼을 만드는 데 사용됩니다.",
      answers: [
        { text: "<form>", correct: true },
        { text: "<input>", correct: false },
        { text: "<textarea>", correct: false },
        { text: "<fieldset>", correct: false },
      ],
    },
    {
      question: "이 태그는 리스트 아이템을 정의하는 데 사용됩니다.",
      answers: [
        { text: "<li>", correct: true },
        { text: "<ul>", correct: false },
        { text: "<ol>", correct: false },
        { text: "<item>", correct: false },
      ],
    },
    {
      question: "이 태그는 디비전 또는 섹션을 정의하는 데 사용됩니다.",
      answers: [
        { text: "<div>", correct: true },
        { text: "<span>", correct: false },
        { text: "<section>", correct: false },
        { text: "<part>", correct: false },
      ],
    },
    {
      question: "이 태그는 줄 바꿈을 정의하는 데 사용됩니다.",
      answers: [
        { text: "<br>", correct: true },
        { text: "<break>", correct: false },
        { text: "<lb>", correct: false },
        { text: "<newline>", correct: false },
      ],
    },
    {
      question: "이 태그는 순서가 있는 리스트를 정의하는 데 사용됩니다.",
      answers: [
        { text: "<ol>", correct: true },
        { text: "<ul>", correct: false },
        { text: "<list>", correct: false },
        { text: "<order>", correct: false },
      ],
    },
    {
      question: "이 태그는 순서가 없는 리스트를 정의하는 데 사용됩니다.",
      answers: [
        { text: "<ul>", correct: true },
        { text: "<ol>", correct: false },
        { text: "<list>", correct: false },
        { text: "<unordered>", correct: false },
      ],
    },
  ],
  "2024-07-05": [
    {
      question: "이 태그는 브라우저 툴바의 제목을 정의하는 데 사용됩니다.",
      answers: [
        { text: "<title>", correct: true },
        { text: "<head>", correct: false },
        { text: "<meta>", correct: false },
        { text: "<header>", correct: false },
      ],
    },
    {
      question:
        "이 태그는 HTML 문서에 대한 메타데이터를 정의하는 데 사용됩니다.",
      answers: [
        { text: "<meta>", correct: true },
        { text: "<link>", correct: false },
        { text: "<script>", correct: false },
        { text: "<style>", correct: false },
      ],
    },
    {
      question: "이 태그는 문서 내 섹션을 정의하는 데 사용됩니다.",
      answers: [
        { text: "<section>", correct: true },
        { text: "<div>", correct: false },
        { text: "<article>", correct: false },
        { text: "<header>", correct: false },
      ],
    },
    {
      question:
        "이 태그는 좌우로 플로팅할 수 있는 콘텐츠 블록을 정의하는 데 사용됩니다.",
      answers: [
        { text: "<float>", correct: false },
        { text: "<div>", correct: true },
        { text: "<section>", correct: false },
        { text: "<aside>", correct: false },
      ],
    },
    {
      question: "이 태그는 인라인 컨테이너를 정의하는 데 사용됩니다.",
      answers: [
        { text: "<span>", correct: true },
        { text: "<div>", correct: false },
        { text: "<container>", correct: false },
        { text: "<inline>", correct: false },
      ],
    },
    {
      question: "이 태그는 강조된 텍스트를 정의하는 데 사용됩니다.",
      answers: [
        { text: "<em>", correct: true },
        { text: "<i>", correct: false },
        { text: "<strong>", correct: false },
        { text: "<italic>", correct: false },
      ],
    },
    {
      question: "이 태그는 강한 텍스트를 정의하는 데 사용됩니다.",
      answers: [
        { text: "<strong>", correct: true },
        { text: "<b>", correct: false },
        { text: "<em>", correct: false },
        { text: "<bold>", correct: false },
      ],
    },
    {
      question: "이 태그는 블록 인용을 정의하는 데 사용됩니다.",
      answers: [
        { text: "<blockquote>", correct: true },
        { text: "<quote>", correct: false },
        { text: "<q>", correct: false },
        { text: "<cite>", correct: false },
      ],
    },
    {
      question: "이 태그는 문서나 섹션의 푸터를 정의하는 데 사용됩니다.",
      answers: [
        { text: "<footer>", correct: true },
        { text: "<bottom>", correct: false },
        { text: "<foot>", correct: false },
        { text: "<end>", correct: false },
      ],
    },
  ],
};
