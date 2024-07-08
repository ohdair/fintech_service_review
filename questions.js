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
  "2024-07-03": [
    {
      question: "::before 의 기능은 무엇인가요?",
      answers: [
        { text: "선택자의 내용 앞에 콘텐츠를 삽입한다.", correct: true },
        { text: "선택자의 내용 뒤에 콘텐츠를 삽입한다.", correct: false },
        { text: "선택자의 내용을 대체한다.", correct: false },
        { text: "선택자의 스타일을 초기화한다.", correct: false },
      ],
    },
    {
      question: "::invalid 의 기능은 무엇인가요?",
      answers: [
        { text: "유효한 폼 필드를 선택한다.", correct: false },
        { text: "비어 있는 폼 필드를 선택한다.", correct: false },
        { text: "유효하지 않은 폼 필드를 선택한다.", correct: true },
        { text: "선택된 폼 필드를 선택한다.", correct: false },
      ],
    },
    {
      question: "CSS 단위 중 상대 단위는 무엇인가요?",
      answers: [
        { text: "px", correct: false },
        { text: "em", correct: true },
        { text: "cm", correct: false },
        { text: "mm", correct: false },
      ],
    },
    {
      question: "HEX 색상 표기법에서 빨간색을 나타내는 코드는 무엇인가요?",
      answers: [
        { text: "#FF0000", correct: true },
        { text: "#00FF00", correct: false },
        { text: "#0000FF", correct: false },
        { text: "#FFFF00", correct: false },
      ],
    },
    {
      question: "CSS에서 텍스트의 두께를 조절하는 속성은 무엇인가요?",
      answers: [
        { text: "font-weight", correct: true },
        { text: "font-size", correct: false },
        { text: "text-align", correct: false },
        { text: "line-height", correct: false },
      ],
    },
    {
      question: "CSS에서 부모 요소로부터 상속되지 않는 속성은 무엇인가요?",
      answers: [
        { text: "color", correct: false },
        { text: "font-family", correct: false },
        { text: "border", correct: true },
        { text: "line-height", correct: false },
      ],
    },
    {
      question: "CSS에서 아이디 선택자는 어떻게 표시하나요?",
      answers: [
        { text: "#", correct: true },
        { text: ".", correct: false },
        { text: ":", correct: false },
        { text: "::", correct: false },
      ],
    },
    {
      question: "CSS에서 모든 요소를 선택하는 방법은 무엇인가요?",
      answers: [
        { text: "*", correct: true },
        { text: "#", correct: false },
        { text: ".", correct: false },
        { text: ":", correct: false },
      ],
    },
    {
      question: `다음 중 "/^[a-zA-Z]+$/" 규칙으로 문자열을 포함하는 것은 무엇인가요?`,
      answers: [
        { text: "정규 표현식", correct: true },
        { text: "정한 표현식", correct: false },
        { text: "특정 문자 규칙", correct: false },
        { text: "정규 문자식", correct: false },
      ],
    },
    {
      question: `다음 중 텍스트 속성이 아닌 것을 고르세요`,
      answers: [
        { text: "font-color", correct: true },
        { text: "font-weight", correct: false },
        { text: "font-variant", correct: false },
        { text: "font-family", correct: false },
      ],
    },
    {
      question: `뷰 포트의 너비를 기준으로 상태적인 크기를 가지는 상대 단위는 무엇인가요?`,
      answers: [
        { text: "vw", correct: true },
        { text: "vh", correct: false },
        { text: "%", correct: false },
        { text: "rem", correct: false },
      ],
    },
    {
      question: "요소의 외부 여백 좌우 20px을 넣을 때 어떻게 써야할까요?",
      answers: [
        { text: "margin: 0 20px;", correct: true },
        { text: "padding: 0 20px;", correct: false },
        { text: "margin: 20px 0;", correct: false },
        { text: "padding: 20px 0;", correct: false },
      ],
    },
    {
      question: "내부 여백을 설정하는 속성은 무엇인가요?",
      answers: [
        { text: "padding", correct: true },
        { text: "margin", correct: false },
        { text: "border", correct: false },
        { text: "spacing", correct: false },
      ],
    },
    {
      question: "CSS에서 요소를 중앙에 배치하는 방법은 무엇인가요?",
      answers: [
        { text: "text-align: center;", correct: false },
        { text: "margin: auto;", correct: true },
        { text: "padding: auto;", correct: false },
        { text: "display: block;", correct: false },
      ],
    },
    {
      question:
        "CSS에서 배경 이미지를 반복하지 않게 설정하는 방법은 무엇인가요?",
      answers: [
        { text: "background-color: none;", correct: false },
        { text: "background-repeat: no-repeat;", correct: true },
        { text: "background-size: cover;", correct: false },
        { text: "background-position: center;", correct: false },
      ],
    },
    {
      question:
        "요소를 화면의 오른쪽 하단에 고정시키려면 어떤 속성을 사용해야 하나요?",
      answers: [
        { text: "position: absolute; bottom: 0; right: 0;", correct: true },
        { text: "position: relative; bottom: 0; right: 0;", correct: false },
        { text: "position: fixed; top: 0; left: 0;", correct: false },
        { text: "position: sticky; bottom: 0; right: 0;", correct: false },
      ],
    },
    {
      question:
        "float 속성을 사용하여 요소를 왼쪽으로 배치하는 방법은 무엇인가요?",
      answers: [
        { text: "float: left;", correct: true },
        { text: "display: inline;", correct: false },
        { text: "margin-left: auto;", correct: false },
        { text: "align: left;", correct: false },
      ],
    },
    {
      question:
        "요소의 배경 이미지를 화면에 꽉 차게 설정하려면 어떤 속성을 사용해야 하나요?",
      answers: [
        { text: "background-size: cover;", correct: true },
        { text: "background-size: contain;", correct: false },
        { text: "background-position: cover;", correct: false },
        { text: "background-repeat: stretch;", correct: false },
      ],
    },
    {
      question:
        "position 속성 중 다른 요소와의 상대적 위치를 기준으로 배치되는 것은 무엇인가요?",
      answers: [
        { text: "position: absolute;", correct: false },
        { text: "position: fixed;", correct: false },
        { text: "position: relative;", correct: true },
        { text: "position: static;", correct: false },
      ],
    },
  ],
  "2024-07-04": [
    {
      question: "CSS Grid에서 'grid-template-columns'는 무엇을 설정하나요?",
      answers: [
        { text: "그리드 컨테이너의 행을 정의합니다.", correct: false },
        { text: "그리드 컨테이너의 열을 정의합니다.", correct: true },
        { text: "그리드 항목의 간격을 정의합니다.", correct: false },
        { text: "그리드 항목의 크기를 조정합니다.", correct: false },
      ],
    },
    {
      question: "CSS Flexbox에서 'justify-content'는 무엇을 설정하나요?",
      answers: [
        {
          text: "플렉스 컨테이너 내의 아이템의 수직 정렬을 설정합니다.",
          correct: false,
        },
        {
          text: "플렉스 컨테이너 내의 아이템의 가로 정렬을 설정합니다.",
          correct: true,
        },
        {
          text: "플렉스 컨테이너 내의 아이템의 크기를 조정합니다.",
          correct: false,
        },
        { text: "플렉스 컨테이너의 방향을 설정합니다.", correct: false },
      ],
    },
    {
      question: "'transition' 속성은 무엇을 제어하나요?",
      answers: [
        {
          text: "CSS 속성의 변화에 애니메이션 효과를 추가합니다.",
          correct: true,
        },
        { text: "CSS 속성의 초기 값을 설정합니다.", correct: false },
        { text: "CSS 속성의 우선순위를 설정합니다.", correct: false },
        { text: "CSS 속성의 상태를 리셋합니다.", correct: false },
      ],
    },
    {
      question: "CSS Flexbox에서 'flex-direction' 속성은 무엇을 설정하나요?",
      answers: [
        {
          text: "플렉스 컨테이너 내의 아이템의 가로 정렬을 설정합니다.",
          correct: false,
        },
        {
          text: "플렉스 컨테이너 내의 아이템의 수직 정렬을 설정합니다.",
          correct: false,
        },
        {
          text: "플렉스 컨테이너 내의 아이템의 배치 방향을 설정합니다.",
          correct: true,
        },
        { text: "플렉스 컨테이너의 크기를 설정합니다.", correct: false },
      ],
    },
    {
      question: "'transition' 속성의 하위 속성 중 하나가 아닌 것은 무엇인가요?",
      answers: [
        { text: "transition-delay", correct: false },
        { text: "transition-duration", correct: false },
        { text: "transition-property", correct: false },
        { text: "transition-repeat", correct: true },
      ],
    },
    {
      question: "CSS Grid에서 'grid-template-rows'는 무엇을 설정하나요?",
      answers: [
        { text: "그리드 컨테이너의 열을 정의합니다.", correct: false },
        { text: "그리드 컨테이너의 행을 정의합니다.", correct: true },
        { text: "그리드 항목의 간격을 정의합니다.", correct: false },
        { text: "그리드 항목의 크기를 조정합니다.", correct: false },
      ],
    },
    {
      question: "CSS Grid에서 'grid-area' 속성은 무엇을 설정하나요?",
      answers: [
        { text: "그리드 항목의 이름을 정의합니다.", correct: false },
        { text: "그리드 항목의 영역을 정의합니다.", correct: true },
        { text: "그리드 항목의 크기를 정의합니다.", correct: false },
        { text: "그리드 항목의 간격을 정의합니다.", correct: false },
      ],
    },
    {
      question: "CSS Flexbox에서 'flex-wrap' 속성은 무엇을 설정하나요?",
      answers: [
        {
          text: "플렉스 컨테이너 내의 아이템의 수직 정렬을 설정합니다.",
          correct: false,
        },
        {
          text: "플렉스 컨테이너 내의 아이템의 크기를 조정합니다.",
          correct: false,
        },
        {
          text: "플렉스 컨테이너 내의 아이템을 여러 줄로 배치할지 여부를 설정합니다.",
          correct: true,
        },
        { text: "플렉스 컨테이너의 방향을 설정합니다.", correct: false },
      ],
    },
    {
      question:
        "'transition' 속성에서 'transition-duration'은 무엇을 설정하나요?",
      answers: [
        { text: "애니메이션의 지연 시간을 설정합니다.", correct: false },
        { text: "애니메이션의 지속 시간을 설정합니다.", correct: true },
        { text: "애니메이션이 적용될 속성을 설정합니다.", correct: false },
        { text: "애니메이션의 반복 횟수를 설정합니다.", correct: false },
      ],
    },
    {
      question:
        "그리드 넘버를 이용해 그리드 아이템의 열 시작 위치와 종료 위치를 지정하는 속성이 아닌 것은 무엇인가요?",
      answers: [
        { text: "grid-column-start", correct: false },
        { text: "grid-row-start", correct: false },
        { text: "grid-center-start", correct: true },
        { text: "grid-column-end", correct: false },
      ],
    },
  ],
  "2024-07-05": [
    {
      question: "자바스크립트에서 한 줄 주석을 작성하는 방법은 무엇인가요?",
      answers: [
        { text: "//", correct: true },
        { text: "/*", correct: false },
        { text: "<!--", correct: false },
        { text: "#", correct: false },
      ],
    },
    {
      question: "변수 이름을 만드는 방법 중 옳은 것은 무엇인가요?",
      answers: [
        { text: "카멜 표기법", correct: true },
        { text: "파스칼 표기법", correct: false },
        { text: "스네이크 표기법", correct: false },
        { text: "케밥 표기법", correct: false },
      ],
    },
    {
      question: "템플릿 문자열을 작성하기 위해 사용하는 기호는 무엇인가요?",
      answers: [
        { text: "`", correct: true },
        { text: "\"", correct: false },
        { text: "'", correct: false },
        { text: "()", correct: false },
      ],
    },
    {
      question: "배열의 첫 번째 요소를 접근하기 위해 사용하는 인덱스는 무엇인가요?",
      answers: [
        { text: "0", correct: true },
        { text: "1", correct: false },
        { text: "-1", correct: false },
        { text: "첫번째", correct: false },
      ],
    },
    {
      question: "자바스크립트에서 '엄격한 일치 연산자'는 무엇인가요?",
      answers: [
        { text: "===", correct: true },
        { text: "==", correct: false },
        { text: "=", correct: false },
        { text: "!=", correct: false },
      ],
    },
    {
      question: "다음 중 상수형 변수를 선언할 수 있는 키워드는 무엇인가요?",
      answers: [
        { text: "const", correct: true },
        { text: "let", correct: false },
        { text: "var", correct: false },
        { text: "static", correct: false },
      ],
    },
    {
      question: "배열의 마지막 요소를 제거하는 메서드는 무엇인가요?",
      answers: [
        { text: "pop()", correct: true },
        { text: "push()", correct: false },
        { text: "shift()", correct: false },
        { text: "unshift()", correct: false },
      ],
    },
    {
      question: "자바스크립트에서 숫자를 문자열로 변환하는 방법은 무엇인가요?",
      answers: [
        { text: "String()", correct: true },
        { text: "Number()", correct: false },
        { text: "parseInt()", correct: false },
        { text: "toNumber()", correct: false },
      ],
    },
    {
      question: "자바스크립트에서 삼항 연산자의 기본 형태는 무엇인가요?",
      answers: [
        { text: "조건 ? 참일 때 값 : 거짓일 때 값", correct: true },
        { text: "조건 ? 참일 때 값;", correct: false },
        { text: "조건 : 참일 때 값 ? 거짓일 때 값", correct: false },
        { text: "조건 : 참일 때 값;", correct: false },
      ],
    },
    {
      question: "반복문에서 continue 문을 만나면 어떤 일이 발생하나요?",
      answers: [
        { text: "현재 반복을 중단하고 다음 반복을 시작합니다.", correct: true },
        { text: "반복문을 완전히 종료합니다.", correct: false },
        { text: "에러가 발생합니다.", correct: false },
        { text: "현재 반복을 계속 진행합니다.", correct: false },
      ],
    },
    {
      question: "다음 코드의 실행 결과는 무엇인가요? \nlet x = 5;\nconsole.log(++x);",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "4", correct: false },
        { text: "5.5", correct: false },
      ],
    },
    {
      question: "다음 코드의 실행 결과는 무엇인가요? \nlet y = 5;\nconsole.log(y++);",
      answers: [
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "4", correct: false },
        { text: "5.5", correct: false },
      ],
    },
  ],
  "2024-07-08": [
    {
      question: "파이썬에서 실수형 데이터를 나타내는 자료형은 무엇인가요?",
      answers: [
        { text: "float", correct: true },
        { text: "int", correct: false },
        { text: "str", correct: false },
        { text: "double", correct: false },
      ],
    },
    {
      question: "파이썬에서 여러 줄 문자열을 작성하는 방법으로 올바른 것은 무엇인가요?",
      answers: [
        { text: "\"\"\"여러 줄 문자열\"\"\"", correct: true },
        { text: "'여러 줄 문자열'", correct: false },
        { text: "`여러 줄 문자열`", correct: false },
        { text: "[여러 줄 문자열]", correct: false },
      ],
    },
    {
      question: "파이썬에서 변수의 타입을 확인하는 함수는 무엇인가요?",
      answers: [
        { text: "type()", correct: true },
        { text: "len()", correct: false },
        { text: "print()", correct: false },
        { text: "typeof()", correct: false },
      ],
    },
    {
      question: "다음 중 튜플의 특성으로 올바른 것은 무엇인가요?",
      answers: [
        { text: "변경 불가능하다(immutable)", correct: true },
        { text: "변경 가능하다(mutable)", correct: false },
        { text: "키와 값으로 이루어져 있다", correct: false },
        { text: "인덱싱이 불가능하다", correct: false },
      ],
    },
    {
      question: "다음 중 딕셔너리의 특성으로 올바른 것은 무엇인가요?",
      answers: [
        { text: "키와 값으로 이루어져 있다", correct: true },
        { text: "변경 불가능하다(immutable)", correct: false },
        { text: "인덱싱이 가능하다", correct: false },
        { text: "순서가 있다", correct: false },
      ],
    },
    {
      question: "다음 코드의 실행 결과는 무엇인가요? \nlist = [0, 1, 2, 3, 4, 5]\nprint(list[1:4])",
      answers: [
        { text: "[1, 2, 3]", correct: true },
        { text: "[0, 1, 2]", correct: false },
        { text: "[2, 3, 4]", correct: false },
        { text: "[1, 2, 3, 4]", correct: false },
      ],
    },
    {
      question: "다음 코드의 실행 결과는 무엇인가요? \nlist = [0, 1, 2, 3, 4, 5]\nprint(list[::-1])",
      answers: [
        { text: "[5, 4, 3, 2, 1, 0]", correct: true },
        { text: "[5]", correct: false },
        { text: "[0, 1, 2, 3, 4, 5]", correct: false },
        { text: "[0]", correct: false },
      ],
    },
    {
      question: "다음 코드의 실행 결과는 무엇인가요? \nlist = [0, 1, 2, 3, 4, 5]\nprint(list[3:])",
      answers: [
        { text: "[3, 4, 5]", correct: true },
        { text: "[2, 3, 4]", correct: false },
        { text: "[0, 1, 2]", correct: false },
        { text: "[1, 2, 3]", correct: false },
      ],
    },
  ]
};
