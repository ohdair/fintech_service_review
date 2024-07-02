const questions = {
  "2024-07-01": [
    {
      question:
        "현재 디렉토리의 파일과 폴더 목록을 표시하는 명령어는 무엇인가요?",
      answers: [
        { text: "dir", correct: true },
        { text: "cd", correct: false },
        { text: "mkdir", correct: false },
        { text: "del", correct: false },
      ],
    },
    {
      question: "상위 폴더로 이동하려면 어떤 명령어를 사용해야 하나요?",
      answers: [
        { text: "cd ..", correct: true },
        { text: "cd /", correct: false },
        { text: "cd", correct: false },
        { text: "cd \\..", correct: false },
      ],
    },
    {
      question: "새로운 디렉토리를 생성하는 명령어는 무엇인가요?",
      answers: [
        { text: "mkdir", correct: true },
        { text: "rmdir", correct: false },
        { text: "mkfile", correct: false },
        { text: "newdir", correct: false },
      ],
    },
    {
      question: "파일을 삭제하는 명령어는 무엇인가요?",
      answers: [
        { text: "del", correct: true },
        { text: "erase", correct: false },
        { text: "remove", correct: false },
        { text: "delete", correct: false },
      ],
    },
    {
      question:
        "절대 경로를 사용하여 C 드라이브의 Program Files로 이동하려면 어떤 명령어를 사용해야 하나요?",
      answers: [
        { text: "cd C:\\Program Files", correct: true },
        { text: "cd ..\\Program Files", correct: false },
        { text: "cd Program Files", correct: false },
        { text: "cd C:/Program Files", correct: false },
      ],
    },
    {
      question:
        "상대 경로를 사용하여 현재 위치에서 Documents 폴더로 이동하려면 어떤 명령어를 사용해야 하나요?",
      answers: [
        { text: "cd Documents", correct: true },
        { text: "cd \\Documents", correct: false },
        { text: "cd C:\\Documents", correct: false },
        { text: "cd /Documents", correct: false },
      ],
    },
    {
      question: "현재 디렉토리의 내용을 지우는 명령어는 무엇인가요?",
      answers: [
        { text: "cls", correct: true },
        { text: "clear", correct: false },
        { text: "erase", correct: false },
        { text: "clean", correct: false },
      ],
    },
    {
      question: "네트워크 연결 상태를 테스트하는 명령어는 무엇인가요?",
      answers: [
        { text: "ping", correct: true },
        { text: "testnet", correct: false },
        { text: "netping", correct: false },
        { text: "checknet", correct: false },
      ],
    },
    {
      question: "파일을 복사하는 명령어는 무엇인가요?",
      answers: [
        { text: "copy", correct: true },
        { text: "cp", correct: false },
        { text: "duplicate", correct: false },
        { text: "clone", correct: false },
      ],
    },
    {
      question: "파일을 이동하거나 이름을 변경하는 명령어는 무엇인가요?",
      answers: [
        { text: "move", correct: true },
        { text: "rename", correct: false },
        { text: "shift", correct: false },
        { text: "transfer", correct: false },
      ],
    },
    {
      question:
        "C 드라이브의 모든 파일과 폴더 목록을 표시하려면 어떤 명령어를 사용해야 하나요?",
      answers: [
        { text: "dir C:\\", correct: true },
        { text: "cd C:\\", correct: false },
        { text: "dir", correct: false },
        { text: "list C:\\", correct: false },
      ],
    },
    {
      question:
        "새로운 디렉토리를 생성하고 그 디렉토리로 이동하려면 어떤 명령어를 사용해야 하나요?",
      answers: [
        { text: "mkdir NewDir && cd NewDir", correct: true },
        { text: "mkdir NewDir & cd NewDir", correct: false },
        { text: "mkdir NewDir; cd NewDir", correct: false },
        { text: "mkdir NewDir | cd NewDir", correct: false },
      ],
    },
  ],
  "2024-07-02": [
    {
      question:
        "텍스트를 굵게 표시하기 위해 사용하는 태그는 무엇인가요? (현재 자주 사용되는)",
      answers: [
        { text: "<b>", correct: false },
        { text: "<strong>", correct: true },
        { text: "<bold>", correct: false },
        { text: "<em>", correct: false },
      ],
    },
    {
      question: "순서가 있는 목록을 만들기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<ol>", correct: true },
        { text: "<ul>", correct: false },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false },
      ],
    },
    {
      question: "하이퍼링크를 만들기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<a>", correct: true },
        { text: "<link>", correct: false },
        { text: "<href>", correct: false },
        { text: "<anchor>", correct: false },
      ],
    },
    {
      question: "이미지를 삽입하기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<img>", correct: true },
        { text: "<image>", correct: false },
        { text: "<pic>", correct: false },
        { text: "<picture>", correct: false },
      ],
    },
    {
      question:
        "텍스트를 기울여 표시하기 위해 사용하는 태그는 무엇인가요? (현재 자주 사용되는)",
      answers: [
        { text: "<i>", correct: false },
        { text: "<em>", correct: true },
        { text: "<italic>", correct: false },
        { text: "<tilt>", correct: false },
      ],
    },
    {
      question: "체크박스를 만드는 태그는 무엇인가요?",
      answers: [
        { text: "<input type='checkbox'>", correct: true },
        { text: "<checkbox>", correct: false },
        { text: "<check>", correct: false },
        { text: "<input type='check'>", correct: false },
      ],
    },
    {
      question: "표를 만들기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<table>", correct: true },
        { text: "<tr>", correct: false },
        { text: "<td>", correct: false },
        { text: "<th>", correct: false },
      ],
    },
    {
      question: "표의 행을 정의하는 태그는 무엇인가요?",
      answers: [
        { text: "<tr>", correct: true },
        { text: "<table>", correct: false },
        { text: "<td>", correct: false },
        { text: "<row>", correct: false },
      ],
    },
    {
      question: "표의 셀을 정의하는 태그는 무엇인가요?",
      answers: [
        { text: "<td>", correct: true },
        { text: "<tr>", correct: false },
        { text: "<table>", correct: false },
        { text: "<cell>", correct: false },
      ],
    },
    {
      question: "순서가 없는 목록을 만들기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<ul>", correct: true },
        { text: "<ol>", correct: false },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false },
      ],
    },
    {
      question:
        "순서가 있는 목록에서 항목을 추가하기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<li>", correct: true },
        { text: "<ol>", correct: false },
        { text: "<ul>", correct: false },
        { text: "<item>", correct: false },
      ],
    },
    {
      question: "텍스트 입력 필드를 만들기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<input type='text'>", correct: true },
        { text: "<textbox>", correct: false },
        { text: "<input>", correct: false },
        { text: "<textarea>", correct: false },
      ],
    },
    {
      question: "드롭다운 목록을 만들기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<select>", correct: true },
        { text: "<dropdown>", correct: false },
        { text: "<list>", correct: false },
        { text: "<option>", correct: false },
      ],
    },
    {
      question:
        "이미지의 대체 텍스트를 지정하기 위해 사용하는 속성은 무엇인가요?",
      answers: [
        { text: "alt", correct: true },
        { text: "title", correct: false },
        { text: "src", correct: false },
        { text: "description", correct: false },
      ],
    },
    {
      question: "폼을 제출하는 버튼을 만들기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<input type='submit'>", correct: true },
        { text: "<button>", correct: false },
        { text: "<submit>", correct: false },
        { text: "<input type='button'>", correct: false },
      ],
    },
    {
      question:
        "폼의 입력 필드와 레이블을 그룹화하기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<fieldset>", correct: true },
        { text: "<form>", correct: false },
        { text: "<group>", correct: false },
        { text: "<field>", correct: false },
      ],
    },
  ],
};
