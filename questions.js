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
    {
      question:
        "HTML 문서의 head 내에서 외부 스타일시트를 연결하기 위해 사용하는 태그는 무엇인가요?",
      answers: [
        { text: "<link rel='stylesheet' href='style.css'>", correct: true },
        { text: "<style src='style.css'>", correct: false },
        { text: "<css link='style.css'>", correct: false },
        { text: "<stylesheet href='style.css'>", correct: false },
      ],
    },
    {
      question:
        "특정 ID를 가진 요소를 선택하기 위해 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: "#id", correct: true },
        { text: ".id", correct: false },
        { text: "id", correct: false },
        { text: "*id", correct: false },
      ],
    },
    {
      question:
        "특정 클래스를 가진 요소를 선택하기 위해 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: ".class", correct: true },
        { text: "#class", correct: false },
        { text: "class", correct: false },
        { text: "*class", correct: false },
      ],
    },
    {
      question:
        "특정 속성을 가진 요소를 선택하기 위해 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: "[attribute]", correct: true },
        { text: ".attribute", correct: false },
        { text: "#attribute", correct: false },
        { text: "attribute", correct: false },
      ],
    },
    {
      question:
        "특정 ID와 태그를 조합하여 선택하기 위해 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: "tag#id", correct: true },
        { text: "#tag#id", correct: false },
        { text: "tag.id", correct: false },
        { text: ".tag#id", correct: false },
      ],
    },
    {
      question:
        "특정 요소의 직계 자식을 선택하기 위해 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: "parent > child", correct: true },
        { text: "parent child", correct: false },
        { text: "parent + child", correct: false },
        { text: "parent ~ child", correct: false },
      ],
    },
    {
      question:
        "특정 요소의 모든 하위 요소를 선택하기 위해 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: "ancestor descendant", correct: true },
        { text: "ancestor > descendant", correct: false },
        { text: "ancestor + descendant", correct: false },
        { text: "ancestor ~ descendant", correct: false },
      ],
    },
    {
      question:
        "특정 요소의 인접 형제 요소를 선택하기 위해 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: "prev + next", correct: true },
        { text: "prev ~ next", correct: false },
        { text: "prev > next", correct: false },
        { text: "prev next", correct: false },
      ],
    },
    {
      question:
        "특정 요소의 모든 형제 요소를 선택하기 위해 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: "prev ~ siblings", correct: true },
        { text: "prev + siblings", correct: false },
        { text: "prev > siblings", correct: false },
        { text: "prev siblings", correct: false },
      ],
    },
    {
      question:
        "마우스를 올렸을 때 스타일을 적용하기 위해 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: ":hover", correct: true },
        { text: ":active", correct: false },
        { text: ":focus", correct: false },
        { text: ":selected", correct: false },
      ],
    },
    {
      question:
        "a 태그에서 한 번도 방문하지 않은 링크일 때 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: ":linked", correct: false },
        { text: ":link", correct: true },
        { text: ":notvisited", correct: false },
        { text: ":none", correct: false },
      ],
    },
    {
      question: "입력 요소에 커서가 활성화될 때 사용하는 선택자는 무엇인가요?",
      answers: [
        { text: ":focus", correct: true },
        { text: ":checked", correct: false },
        { text: ":enable", correct: false },
        { text: ":enabled", correct: false },
      ],
    },
    {
      question: "다음 중 가상 클래스 선택자가 아닌 것은 무엇인가요?",
      answers: [
        { text: ":first-letter", correct: true },
        { text: ":first-of-type", correct: false },
        { text: ":nth-child(n)", correct: false },
        { text: ":nth-last-of-type(n)", correct: false },
      ],
    },
    {
      question:
        "E 요소의 마지막 자식 요소를 선택자로 지정하는 것은 무엇인가요?",
      answers: [
        { text: ":last-child", correct: true },
        { text: ":last-of-child", correct: false },
        { text: ":last-of-type", correct: false },
        { text: ":last-type", correct: false },
      ],
    },
  ],
};
