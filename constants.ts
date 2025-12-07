import { JobRole, Question } from './types';

export const JOB_DESCRIPTIONS: Record<JobRole, string> = {
  [JobRole.FRONTEND]: "웹사이트의 사용자 인터페이스(UI)와 사용자 경험(UX)을 구현하는 기술직군입니다. React, CSS, 브라우저 동작 원리에 대한 이해가 필요합니다.",
  [JobRole.BACKEND]: "서버, 데이터베이스, API 디자인 등 눈에 보이지 않는 시스템의 핵심 로직을 담당합니다. 데이터 처리, 보안, 성능 최적화가 중요합니다.",
  [JobRole.EMBEDDED]: "하드웨어를 제어하는 소프트웨어를 개발합니다. C/C++, OS 커널, 메모리 관리 및 하드웨어 인터페이스에 대한 깊은 이해가 필요합니다.",
  [JobRole.DATA_ANALYST]: "데이터를 수집, 처리, 분석하여 비즈니스 인사이트를 도출하고 의사결정을 돕는 직군입니다. SQL, Python, 통계 지식 및 시각화 능력이 중요합니다.",
};

export const QUESTIONS: Record<JobRole, Question[]> = {
  [JobRole.FRONTEND]: [
    {
      id: 1,
      text: "브라우저의 렌더링 과정(Critical Rendering Path)에서 리플로우(Reflow)가 발생하는 원인이 아닌 것은?",
      options: ["윈도우 리사이징", "DOM 노드 추가/제거", "font-size 변경", "visibility: hidden 속성 변경"],
      correctIndex: 3,
      category: "Browser Internal"
    },
    {
      id: 2,
      text: "JavaScript의 클로저(Closure)에 대한 설명으로 가장 적절한 것은?",
      options: ["함수가 선언될 때의 렉시컬 환경을 기억하여, 함수가 외부 스코프의 변수에 접근할 수 있게 하는 기능", "비동기 작업을 동기적으로 처리하기 위한 문법", "객체 지향 프로그래밍에서 클래스의 private 변수를 만드는 유일한 방법", "메모리 누수를 방지하기 위해 가비지 컬렉터를 강제로 실행하는 함수"],
      correctIndex: 0,
      category: "JavaScript Core"
    },
    {
      id: 3,
      text: "React의 useEffect Hook에서 의존성 배열(dependency array)을 빈 배열([])로 설정했을 때의 동작은?",
      options: ["컴포넌트가 렌더링될 때마다 실행된다.", "컴포넌트가 마운트될 때 한 번만 실행된다.", "컴포넌트가 언마운트될 때만 실행된다.", "의존성 배열은 비워둘 수 없다."],
      correctIndex: 1,
      category: "React"
    },
    {
      id: 4,
      text: "RESTful API 설계 원칙 중 멱등성(Idempotence)을 가지지 않는 HTTP 메서드는?",
      options: ["GET", "PUT", "DELETE", "POST"],
      correctIndex: 3,
      category: "Network"
    },
    {
      id: 5,
      text: "CSS Box Model에서 요소의 실제 너비(width) 계산에 포함되지 않는 속성은? (box-sizing: content-box 기준)",
      options: ["content width", "padding", "border", "margin"],
      correctIndex: 3,
      category: "CSS"
    },
    {
      id: 6,
      text: "Redux나 Context API와 같은 상태 관리 라이브러리를 사용하는 주된 이유는?",
      options: ["컴포넌트의 스타일을 전역으로 관리하기 위해", "Props Drilling 문제를 해결하고 전역 상태를 효율적으로 관리하기 위해", "API 요청 속도를 높이기 위해", "React의 렌더링 성능을 무조건적으로 향상시키기 위해"],
      correctIndex: 1,
      category: "State Management"
    },
    {
      id: 7,
      text: "Cross-Origin Resource Sharing (CORS) 오류는 누구의 보안 정책에 의해 발생하는가?",
      options: ["서버", "데이터베이스", "브라우저", "DNS"],
      correctIndex: 2,
      category: "Security"
    },
    {
      id: 8,
      text: "TypeScript에서 'any' 타입과 'unknown' 타입의 차이점은?",
      options: ["차이점이 없다.", "unknown은 어떤 값이든 할당할 수 있지만, 사용 전 타입을 좁혀야(narrowing) 한다.", "any는 타입 검사를 엄격하게 수행한다.", "unknown은 null과 undefined만 할당 가능하다."],
      correctIndex: 1,
      category: "TypeScript"
    },
    {
      id: 9,
      text: "SPA(Single Page Application)의 단점인 초기 로딩 속도 저하와 SEO 문제를 해결하기 위한 대표적인 방법은?",
      options: ["CSR (Client Side Rendering)", "SSR (Server Side Rendering)", "jQuery 사용", "이미지 해상도 낮추기"],
      correctIndex: 1,
      category: "Architecture"
    },
    {
      id: 10,
      text: "Promise.all()과 Promise.race()의 차이점 설명으로 옳은 것은?",
      options: ["Promise.all은 하나만 성공해도 종료된다.", "Promise.race는 모든 프로미스가 완료될 때까지 기다린다.", "Promise.all은 모든 프로미스가 이행(fulfilled)되거나, 하나라도 거부(rejected)되면 종료된다.", "Promise.race는 항상 가장 늦게 끝나는 작업을 반환한다."],
      correctIndex: 2,
      category: "Async Programming"
    },
    {
      id: 11,
      text: "JavaScript 이벤트 루프(Event Loop)에서 마이크로 태스크(Microtask) 큐에 들어가는 작업이 아닌 것은?",
      options: ["Promise.then", "MutationObserver", "setTimeout", "queueMicrotask"],
      correctIndex: 2,
      category: "JavaScript Core"
    },
    {
      id: 12,
      text: "쿠키(Cookie)와 로컬 스토리지(Local Storage)의 가장 큰 차이점 중 하나는?",
      options: ["쿠키는 클라이언트에 저장되지 않는다.", "로컬 스토리지는 만료 기한이 있어 자동으로 삭제된다.", "쿠키는 모든 HTTP 요청 시 헤더에 포함되어 서버로 전송된다.", "로컬 스토리지는 용량 제한이 없다."],
      correctIndex: 2,
      category: "Browser Storage"
    },
    {
      id: 13,
      text: "React Virtual DOM이 실제 DOM보다 빠른 이유는?",
      options: ["메모리를 사용하지 않기 때문에", "브라우저 엔진을 거치지 않기 때문에", "변경된 부분만 실제 DOM에 한 번에 적용(Batch Update)하여 리렌더링 연산을 최소화하기 때문에", "C++로 작성되었기 때문에"],
      correctIndex: 2,
      category: "React"
    },
    {
      id: 14,
      text: "웹 접근성(Web Accessibility) 향상을 위해 이미지 태그에 반드시 포함해야 하는 속성은?",
      options: ["title", "alt", "data-desc", "aria-hidden"],
      correctIndex: 1,
      category: "HTML/Accessibility"
    },
    {
      id: 15,
      text: "CSS Flexbox에서 아이템들을 주축(Main Axis) 방향으로 정렬할 때 사용하는 속성은?",
      options: ["align-items", "justify-content", "align-content", "flex-direction"],
      correctIndex: 1,
      category: "CSS"
    },
    {
      id: 16,
      text: "HTTPS 통신 과정에서 SSL Handshake가 수행하는 주된 역할은?",
      options: ["데이터베이스 연결", "DNS 조회", "서버 인증 및 암호화 키 교환", "HTML 파싱"],
      correctIndex: 2,
      category: "Network/Security"
    },
    {
      id: 17,
      text: "JavaScript에서 'this' 바인딩이 결정되는 시점은?",
      options: ["함수가 작성될 때 (Lexical)", "함수가 호출될 때 (Dynamic)", "컴파일 될 때", "변수가 선언될 때"],
      correctIndex: 1,
      category: "JavaScript Core"
    },
    {
      id: 18,
      text: "Webpack과 같은 모듈 번들러를 사용하는 이유가 아닌 것은?",
      options: ["여러 개의 JS 파일을 하나로 합쳐 네트워크 요청 횟수를 줄이기 위해", "최신 문법(ES6+)을 구형 브라우저 호환 코드로 변환(Transpiling)하기 위해", "데이터베이스 쿼리를 최적화하기 위해", "이미지, CSS 등 정적 자원을 모듈처럼 관리하기 위해"],
      correctIndex: 2,
      category: "Build Tools"
    },
    {
      id: 19,
      text: "브라우저 캐싱 전략 중, 리소스가 변경되었는지 확인하기 위해 서버에 유효성을 검사하는 헤더는?",
      options: ["Content-Type", "ETag", "Set-Cookie", "User-Agent"],
      correctIndex: 1,
      category: "Network"
    },
    {
      id: 20,
      text: "디자인 패턴 중, 객체의 상태 변화를 관찰하고 있다가 변화가 생기면 연관된 객체들에게 알림을 보내는 패턴은?",
      options: ["Singleton Pattern", "Factory Pattern", "Observer Pattern", "Strategy Pattern"],
      correctIndex: 2,
      category: "Design Pattern"
    }
  ],
  [JobRole.BACKEND]: [
    {
      id: 21,
      text: "RDBMS에서 Index를 사용하는 주된 목적은?",
      options: ["데이터의 중복 저장을 방지하기 위해", "테이블의 검색 속도를 향상시키기 위해", "데이터 무결성을 보장하기 위해", "데이터베이스 용량을 줄이기 위해"],
      correctIndex: 1,
      category: "Database"
    },
    {
      id: 22,
      text: "ACID 트랜잭션 속성 중 'Atomicity(원자성)'의 의미는?",
      options: ["트랜잭션이 완료된 후 데이터는 일관되어야 한다.", "트랜잭션 내의 모든 연산은 모두 수행되거나, 아예 수행되지 않아야 한다(All or Nothing).", "동시에 실행되는 트랜잭션은 서로 영향을 주지 않아야 한다.", "트랜잭션 결과는 영구적으로 반영되어야 한다."],
      correctIndex: 1,
      category: "Database"
    },
    {
      id: 23,
      text: "REST API에서 리소스의 '수정(전체 교체)'을 의미하는 HTTP 메서드는?",
      options: ["GET", "POST", "PATCH", "PUT"],
      correctIndex: 3,
      category: "Network"
    },
    {
      id: 24,
      text: "JWT(Json Web Token)의 구성 요소가 아닌 것은?",
      options: ["Header", "Payload", "Signature", "Session ID"],
      correctIndex: 3,
      category: "Authentication"
    },
    {
      id: 25,
      text: "Scale-up과 Scale-out의 차이점은?",
      options: ["Scale-up은 서버 대수를 늘리는 것이고, Scale-out은 서버 성능을 높이는 것이다.", "Scale-up은 서버 자체의 성능(CPU, RAM)을 높이는 것이고, Scale-out은 서버 대수를 늘려 부하를 분산하는 것이다.", "둘 다 동일한 개념이다.", "Scale-out은 데이터베이스 용량만 늘리는 것이다."],
      correctIndex: 1,
      category: "Architecture"
    },
    {
      id: 26,
      text: "OSI 7계층 중 전송 계층(Transport Layer)에 해당하는 프로토콜은?",
      options: ["IP, ICMP", "HTTP, FTP", "TCP, UDP", "Ethernet, Wi-Fi"],
      correctIndex: 2,
      category: "Network"
    },
    {
      id: 27,
      text: "Docker 컨테이너와 가상머신(VM)의 가장 큰 차이점은?",
      options: ["Docker는 OS 커널을 공유하지만 VM은 게스트 OS를 별도로 가진다.", "VM이 더 가볍고 실행 속도가 빠르다.", "Docker는 리눅스에서만 실행 가능하다.", "VM은 격리된 환경을 제공하지 않는다."],
      correctIndex: 0,
      category: "DevOps"
    },
    {
      id: 28,
      text: "다음 중 NoSQL 데이터베이스에 해당하는 것은?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      correctIndex: 2,
      category: "Database"
    },
    {
      id: 29,
      text: "CI/CD 파이프라인에서 CI(Continuous Integration)가 의미하는 것은?",
      options: ["지속적인 서비스 배포", "코드 변경 사항을 주기적으로 빌드 및 테스트하여 통합하는 과정", "서버 모니터링 자동화", "고객 피드백 수집"],
      correctIndex: 1,
      category: "DevOps"
    },
    {
      id: 30,
      text: "프로세스와 스레드의 차이점 중 틀린 것은?",
      options: ["프로세스는 독립적인 메모리 영역을 가진다.", "스레드는 프로세스 내의 힙(Heap) 메모리를 공유한다.", "스레드 간의 문맥 교환(Context Switch) 비용이 프로세스보다 크다.", "하나의 프로세스는 여러 개의 스레드를 가질 수 있다."],
      correctIndex: 2,
      category: "OS"
    },
    {
      id: 31,
      text: "분산 시스템 이론인 CAP 정리(Theorem)의 구성 요소가 아닌 것은?",
      options: ["Consistency (일관성)", "Availability (가용성)", "Performance (성능)", "Partition Tolerance (분할 허용)"],
      correctIndex: 2,
      category: "System Design"
    },
    {
      id: 32,
      text: "SQL Injection 공격을 막기 위한 가장 기본적인 방법은?",
      options: ["비밀번호를 평문으로 저장한다.", "PreparedStatement(Parameterized Query)를 사용한다.", "데이터베이스 포트를 변경한다.", "GET 요청만 사용한다."],
      correctIndex: 1,
      category: "Security"
    },
    {
      id: 33,
      text: "로드 밸런서(Load Balancer) 중 L4와 L7의 주된 차이점은?",
      options: ["L4는 IP/Port 기반, L7은 애플리케이션 계층(URL, 쿠키 등) 내용을 기반으로 분산한다.", "L4가 더 느리고 비싸다.", "L7은 TCP/UDP 패킷만 분석한다.", "차이점이 없다."],
      correctIndex: 0,
      category: "Network"
    },
    {
      id: 34,
      text: "Redis와 같은 인메모리(In-Memory) 캐시를 사용할 때 주의해야 할 'Cache Stampede(Thundering Herd)' 현상은?",
      options: ["캐시 용량이 가득 차는 현상", "캐시 만료 시점에 다수의 요청이 동시에 DB로 몰려 부하가 급증하는 현상", "데이터가 영구적으로 삭제되는 현상", "캐시 키가 중복되는 현상"],
      correctIndex: 1,
      category: "System Design"
    },
    {
      id: 35,
      text: "비동기 메시지 큐(Message Queue - Kafka, RabbitMQ)를 사용하는 이유로 적절하지 않은 것은?",
      options: ["서비스 간 결합도(Coupling)를 낮추기 위해", "트래픽 폭주 시 버퍼링(Buffering) 역할을 하기 위해", "즉각적인 응답(Real-time Response)이 필요한 동기 처리를 위해", "비동기 작업을 처리하기 위해"],
      correctIndex: 2,
      category: "Architecture"
    },
    {
      id: 36,
      text: "데이터베이스 정규화(Normalization)의 주된 목적은?",
      options: ["쿼리 성능을 최대로 높이기 위해", "데이터 중복을 최소화하고 이상 현상(Anomaly)을 방지하기 위해", "테이블 개수를 줄이기 위해", "백업을 빠르게 하기 위해"],
      correctIndex: 1,
      category: "Database"
    },
    {
      id: 37,
      text: "교착 상태(Deadlock)의 발생 조건 4가지에 해당하지 않는 것은?",
      options: ["상호 배제 (Mutual Exclusion)", "점유 대기 (Hold and Wait)", "비선점 (No Preemption)", "선점 허용 (Preemption Allowed)"],
      correctIndex: 3,
      category: "OS"
    },
    {
      id: 38,
      text: "OAuth 2.0 인증 방식에서 'Access Token'의 역할은?",
      options: ["사용자의 비밀번호를 대체하여 로그인한다.", "리소스 서버의 보호된 자원에 접근할 수 있는 권한을 증명한다.", "DB 관리자 권한을 획득한다.", "네트워크 암호화를 담당한다."],
      correctIndex: 1,
      category: "Authentication"
    },
    {
      id: 39,
      text: "gRPC 프로토콜의 특징으로 틀린 것은?",
      options: ["Google이 개발한 오픈소스 RPC 프레임워크다.", "HTTP/2를 기반으로 동작한다.", "데이터 전송 포맷으로 주로 JSON을 사용한다.", "Protocol Buffers를 IDL(Interface Description Language)로 사용한다."],
      correctIndex: 2,
      category: "Network"
    },
    {
      id: 40,
      text: "데이터베이스에서 '커버링 인덱스(Covering Index)'란 무엇인가?",
      options: ["모든 컬럼에 인덱스를 거는 것", "쿼리에 필요한 모든 컬럼이 인덱스에 포함되어 있어, 실제 테이블 조회 없이 인덱스만으로 쿼리를 완료하는 것", "인덱스가 손상되었을 때 복구하는 기술", "가장 용량이 큰 인덱스"],
      correctIndex: 1,
      category: "Database"
    }
  ],
  [JobRole.EMBEDDED]: [
    {
      id: 41,
      text: "volatile 키워드의 용도로 가장 적절한 것은?",
      options: ["변수를 상수로 선언할 때", "컴파일러 최적화를 방지하고 항상 메모리에서 값을 읽도록 강제할 때", "메모리 할당을 동적으로 할 때", "함수의 반환값을 무시할 때"],
      correctIndex: 1,
      category: "C Language"
    },
    {
      id: 42,
      text: "RTOS(Real-Time Operating System)의 가장 중요한 특징은?",
      options: ["화려한 그래픽 인터페이스 제공", "정해진 시간(Deadline) 내에 작업 수행을 보장하는 결정성(Determinism)", "무제한 멀티태스킹", "대용량 데이터 처리 속도"],
      correctIndex: 1,
      category: "RTOS"
    },
    {
      id: 43,
      text: "인터럽트(Interrupt) 처리 루틴(ISR) 작성 시 주의할 점으로 틀린 것은?",
      options: ["가능한 짧고 빠르게 수행되어야 한다.", "긴 지연(delay) 함수를 사용하면 안 된다.", "우선순위가 낮은 인터럽트는 무시해도 된다.", "공유 자원 접근 시 경쟁 조건(Race Condition)을 고려해야 한다."],
      correctIndex: 2,
      category: "Interrupts"
    },
    {
      id: 44,
      text: "I2C 통신 프로토콜의 특징이 아닌 것은?",
      options: ["2개의 선(SDA, SCL)만 사용한다.", "Full Duplex(전이중) 통신을 지원한다.", "Master-Slave 구조를 가진다.", "각 장치는 고유한 주소를 가진다."],
      correctIndex: 1,
      category: "Communication"
    },
    {
      id: 45,
      text: "메모리 영역 중 지역 변수와 매개 변수가 저장되는 곳은?",
      options: ["Code (Text)", "Data", "Heap", "Stack"],
      correctIndex: 3,
      category: "Memory"
    },
    {
      id: 46,
      text: "Watchdog Timer(WDT)의 역할은?",
      options: ["현재 시간을 측정한다.", "시스템 오류로 인해 프로그램이 멈추거나 무한 루프에 빠졌을 때 시스템을 리셋한다.", "외부 통신 속도를 조절한다.", "배터리 전압을 감시한다."],
      correctIndex: 1,
      category: "MCU Peripherals"
    },
    {
      id: 47,
      text: "리틀 엔디안(Little Endian) 시스템에서 0x12345678을 메모리에 저장할 때 낮은 주소부터 저장되는 순서는?",
      options: ["12 34 56 78", "78 56 34 12", "78 12 34 56", "34 12 78 56"],
      correctIndex: 1,
      category: "Computer Architecture"
    },
    {
      id: 48,
      text: "Mutex와 Semaphore의 가장 큰 차이점은?",
      options: ["Mutex는 소유권(Ownership)이 있어 락을 건 스레드만 해제할 수 있다.", "Semaphore는 한 번에 하나의 스레드만 접근 가능하다.", "Mutex는 카운팅 기능이 있다.", "차이점이 없다."],
      correctIndex: 0,
      category: "OS"
    },
    {
      id: 49,
      text: "C언어에서 구조체 멤버 정렬(Structure Padding)이 발생하는 이유는?",
      options: ["메모리를 절약하기 위해", "CPU의 메모리 접근 효율성을 높이기 위해", "컴파일러 버그 때문에", "코드 가독성을 위해"],
      correctIndex: 1,
      category: "C Language"
    },
    {
      id: 50,
      text: "부동 소수점(Floating Point) 연산을 임베디드 시스템에서 주의해서 사용해야 하는 이유는?",
      options: ["정확도가 너무 높아서", "FPU(Floating Point Unit)가 없는 MCU에서는 연산 속도가 매우 느려질 수 있어서", "C언어에서 지원하지 않아서", "메모리를 전혀 사용하지 않아서"],
      correctIndex: 1,
      category: "Performance"
    },
    {
      id: 51,
      text: "DMA(Direct Memory Access)의 주된 역할은?",
      options: ["CPU 개입 없이 메모리와 주변장치 간 데이터를 전송하여 CPU 부하를 줄인다.", "메모리 용량을 동적으로 늘린다.", "네트워크 패킷을 암호화한다.", "전원 공급을 관리한다."],
      correctIndex: 0,
      category: "Computer Architecture"
    },
    {
      id: 52,
      text: "SPI(Serial Peripheral Interface) 통신의 특징이 아닌 것은?",
      options: ["4선식(MISO, MOSI, SCK, CS) 방식을 주로 사용한다.", "I2C보다 전송 속도가 빠르다.", "반이중(Half Duplex) 통신만 지원한다.", "Master-Slave 구조를 가진다."],
      correctIndex: 2,
      category: "Communication"
    },
    {
      id: 53,
      text: "임베디드 시스템에서 풀업(Pull-up) 저항을 사용하는 이유는?",
      options: ["전류를 증폭시키기 위해", "플로팅(Floating) 상태를 방지하고 입력 신호를 High 레벨로 고정하기 위해", "열을 발생시키기 위해", "전압을 낮추기 위해"],
      correctIndex: 1,
      category: "Electronics"
    },
    {
      id: 54,
      text: "Stack Overflow가 발생하는 원인으로 적절하지 않은 것은?",
      options: ["재귀 함수(Recursive Function)의 깊이가 너무 깊을 때", "지역 변수로 너무 큰 배열을 선언했을 때", "동적 메모리(malloc) 할당을 해제하지 않았을 때", "무한 루프에 빠진 재귀 호출"],
      correctIndex: 2,
      category: "Memory"
    },
    {
      id: 55,
      text: "C언어의 비트 연산자 중 특정 비트를 0으로 만드는(Clear) 연산은?",
      options: ["OR (|)", "AND (&) 와 NOT (~)", "XOR (^)", "Shift (<<)"],
      correctIndex: 1,
      category: "C Language"
    },
    {
      id: 56,
      text: "부트로더(Bootloader)가 실행되는 시점과 역할은?",
      options: ["OS 실행 중 백그라운드에서 실행된다.", "전원 인가 후 가장 먼저 실행되며, 하드웨어를 초기화하고 OS 커널을 메모리에 로드한다.", "컴파일 타임에 실행되어 코드를 최적화한다.", "인터럽트 발생 시 실행된다."],
      correctIndex: 1,
      category: "System Startup"
    },
    {
      id: 57,
      text: "캐시 일관성(Cache Coherency) 문제가 발생하는 상황은?",
      options: ["단일 코어 시스템에서 프로그램 실행 시", "멀티 코어 시스템이나 DMA가 사용될 때, 메인 메모리와 캐시 메모리의 값이 불일치할 때", "하드디스크 용량이 부족할 때", "네트워크 속도가 느릴 때"],
      correctIndex: 1,
      category: "Computer Architecture"
    },
    {
      id: 58,
      text: "ADC(Analog to Digital Converter)의 분해능(Resolution)이 10bit이고 기준 전압이 3.3V일 때, 1 LSB(Least Significant Bit)의 대략적인 전압 값은?",
      options: ["약 3.2mV", "약 1mV", "약 33mV", "약 0.3V"],
      correctIndex: 0,
      category: "Electronics"
    },
    {
      id: 59,
      text: "임베디드 디버깅 장비인 로직 분석기(Logic Analyzer)의 주된 용도는?",
      options: ["소스 코드의 문법 오류를 찾는다.", "디지털 신호의 파형을 시간 축에 따라 캡처하고 분석한다.", "아날로그 전압의 미세한 변화를 측정한다.", "메모리 누수를 탐지한다."],
      correctIndex: 1,
      category: "Tools"
    },
    {
      id: 60,
      text: "우선순위 역전(Priority Inversion) 현상을 해결하기 위한 기법은?",
      options: ["우선순위 상속(Priority Inheritance)", "라운드 로빈 스케줄링", "인터럽트 비활성화", "워치독 타이머 리셋"],
      correctIndex: 0,
      category: "RTOS"
    }
  ],
  [JobRole.DATA_ANALYST]: [
    {
      id: 61,
      text: "SQL에서 LEFT JOIN과 INNER JOIN의 가장 큰 차이점은 무엇인가요?",
      options: ["LEFT JOIN은 왼쪽 테이블의 모든 레코드를 포함하지만, INNER JOIN은 두 테이블의 교집합만 반환한다.", "INNER JOIN의 성능이 항상 더 빠르다.", "LEFT JOIN은 중복된 데이터를 허용하지 않는다.", "두 JOIN은 기능적으로 동일하다."],
      correctIndex: 0,
      category: "SQL"
    },
    {
      id: 62,
      text: "P-value(유의확률)에 대한 설명으로 가장 적절한 것은?",
      options: ["귀무가설이 틀렸을 확률", "대립가설이 맞을 확률", "귀무가설이 사실일 때, 관측된 데이터와 같거나 더 극단적인 데이터가 나타날 확률", "데이터의 평균값"],
      correctIndex: 2,
      category: "Statistics"
    },
    {
      id: 63,
      text: "Python Pandas 라이브러리에서 DataFrame의 결측치(NaN)를 특정 값(예: 0)으로 채우는 메소드는?",
      options: ["replace()", "fillna()", "dropna()", "isnull()"],
      correctIndex: 1,
      category: "Python/Pandas"
    },
    {
      id: 64,
      text: "LTV(고객 생애 가치)가 CAC(고객 획득 비용)보다 중요한 이유는 무엇인가요?",
      options: ["고객 한 명으로부터 얻는 총이익이 고객을 데려오는 비용보다 커야 비즈니스가 지속 가능하기 때문", "LTV가 높으면 항상 매출이 높기 때문", "CAC는 계산하기 너무 어렵기 때문", "LTV와 CAC는 서로 관련 없는 지표이기 때문"],
      correctIndex: 0,
      category: "Business Acumen"
    },
    {
      id: 65,
      text: "데이터 웨어하우스에서 OLTP와 OLAP 시스템의 주된 차이점은 무엇인가요?",
      options: ["OLTP는 분석용, OLAP은 트랜잭션 처리용이다.", "OLTP는 대량의 과거 데이터를 저장한다.", "OLAP은 실시간 데이터 업데이트에 최적화되어 있다.", "OLTP는 빠른 트랜잭션 처리에, OLAP은 복잡한 쿼리와 분석에 최적화되어 있다."],
      correctIndex: 3,
      category: "Data Engineering"
    },
    {
      id: 66,
      text: "시간에 따른 연속적인 데이터의 변화 추세를 시각화하기에 가장 적합한 차트 유형은?",
      options: ["라인 차트 (Line Chart)", "파이 차트 (Pie Chart)", "막대 차트 (Bar Chart)", "산점도 (Scatter Plot)"],
      correctIndex: 0,
      category: "Data Visualization"
    },
    {
      id: 67,
      text: "'고객의 이탈 여부(이탈/유지)'를 예측하는 문제는 어떤 유형의 머신러닝에 속하는가?",
      options: ["분류 (Classification)", "회귀 (Regression)", "군집화 (Clustering)", "강화학습 (Reinforcement Learning)"],
      correctIndex: 0,
      category: "Machine Learning"
    },
    {
      id: 68,
      text: "SQL에서 `GROUP BY` 절과 함께 사용되며, 그룹화된 결과에 대한 조건을 필터링하는 구문은?",
      options: ["WHERE", "HAVING", "LIMIT", "ORDER BY"],
      correctIndex: 1,
      category: "SQL"
    },
    {
      id: 69,
      text: "A/B 테스트에서 '통계적 유의성'을 확보했다는 것은 무엇을 의미하는가?",
      options: ["A안과 B안의 차이가 매우 크다는 것", "관찰된 결과가 우연에 의한 것이 아닐 가능성이 높다는 것", "테스트에 참여한 사용자 수가 충분하다는 것", "모든 사용자가 동일한 경험을 했다는 것"],
      correctIndex: 1,
      category: "Statistics"
    },
    {
      id: 70,
      text: "ETL 프로세스에서 'Transform(변환)' 단계의 역할로 가장 적절한 것은?",
      options: ["여러 소스에서 데이터를 추출하는 단계", "데이터를 최종 목적지에 적재하는 단계", "추출된 데이터의 형식을 맞추고 정제하는 단계", "데이터 파이프라인을 모니터링하는 단계"],
      correctIndex: 2,
      category: "Data Engineering"
    },
    {
      id: 71,
      text: "Python Pandas에서 여러 DataFrame을 특정 기준(key)으로 병합할 때 사용하는 함수는?",
      options: ["merge()", "concat()", "join()", "append()"],
      correctIndex: 0,
      category: "Python/Pandas"
    },
    {
      id: 72,
      text: "월간 활성 사용자 수(MAU)를 올바르게 정의한 것은?",
      options: ["한 달 동안 앱을 설치한 총 사용자 수", "특정 한 달 동안 한 번 이상 서비스를 이용한 순수 사용자 수", "매일 접속한 사용자 수의 한 달 평균", "한 달 동안 발생한 총 세션 수"],
      correctIndex: 1,
      category: "Business Acumen"
    },
    {
      id: 73,
      text: "데이터 모델링에서 정규화(Normalization)의 주된 목적은?",
      options: ["데이터 검색 속도를 높이기 위해", "데이터 중복을 최소화하고 데이터 무결성을 유지하기 위해", "테이블의 개수를 최대한 늘리기 위해", "모든 데이터를 하나의 큰 테이블에 저장하기 위해"],
      correctIndex: 1,
      category: "Data Modeling"
    },
    {
      id: 74,
      text: "상관관계(Correlation)와 인과관계(Causation)의 차이점을 가장 잘 설명한 것은?",
      options: ["상관관계가 높으면 항상 인과관계가 존재한다.", "인과관계는 상관관계를 의미하지 않는다.", "상관관계는 두 변수가 함께 움직이는 경향을 의미할 뿐, 하나가 다른 하나의 원인임을 의미하지는 않는다.", "두 개념은 통계학에서 동일한 의미로 사용된다."],
      correctIndex: 2,
      category: "Statistics"
    },
    {
      id: 75,
      text: "SQL에서 윈도우 함수(Window Function)를 사용하는 주된 이유는?",
      options: ["데이터를 삭제하기 위해", "테이블을 생성하기 위해", "행의 집합에 대해 연산을 수행하면서도 개별 행의 결과를 유지하기 위해", "데이터베이스에 연결하기 위해"],
      correctIndex: 2,
      category: "SQL"
    },
    {
      id: 76,
      text: "전체에 대한 각 부분의 비율을 시각적으로 표현하기에 가장 적합한 차트는?",
      options: ["파이 차트 (Pie Chart)", "히스토그램 (Histogram)", "라인 차트 (Line Chart)", "박스 플롯 (Box Plot)"],
      correctIndex: 0,
      category: "Data Visualization"
    },
    {
      id: 77,
      text: "데이터의 숨겨진 구조나 패턴을 찾아 그룹으로 묶는 군집화(Clustering)는 어떤 머신러닝 유형에 속하는가?",
      options: ["지도학습 (Supervised Learning)", "비지도학습 (Unsupervised Learning)", "강화학습 (Reinforcement Learning)", "준지도학습 (Semi-supervised Learning)"],
      correctIndex: 1,
      category: "Machine Learning"
    },
    {
      id: 78,
      text: "Python NumPy 라이브러리를 사용하는 주된 이유 중 하나는?",
      options: ["효율적인 다차원 배열 연산과 수치 계산을 위해", "웹사이트를 만들기 위해", "데이터베이스를 관리하기 위해", "자연어 처리를 위해"],
      correctIndex: 0,
      category: "Python/NumPy"
    },
    {
      id: 79,
      text: "이상치(Outlier)가 데이터 분석 결과에 미치는 영향으로 가장 적절한 것은?",
      options: ["항상 데이터의 분포를 정규분포로 만든다.", "분석 결과에 아무런 영향을 미치지 않는다.", "평균, 표준편차와 같은 통계량을 왜곡시킬 수 있다.", "데이터의 신뢰도를 항상 높여준다."],
      correctIndex: 2,
      category: "Statistics"
    },
    {
      id: 80,
      text: "퍼널 분석(Funnel Analysis)을 통해 주로 파악하고자 하는 핵심 지표는?",
      options: ["사용자 여정의 각 단계별 전환율 및 이탈률", "사용자의 일일 평균 접속 시간", "가장 인기 있는 기능", "서버의 응답 속도"],
      correctIndex: 0,
      category: "Business Acumen"
    }
  ]
};