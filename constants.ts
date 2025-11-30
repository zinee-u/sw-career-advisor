import { JobRole, Question } from './types';

export const JOB_DESCRIPTIONS: Record<JobRole, string> = {
  [JobRole.FRONTEND]: "웹사이트의 사용자 인터페이스(UI)와 사용자 경험(UX)을 구현하는 기술직군입니다. React, CSS, 브라우저 동작 원리에 대한 이해가 필요합니다.",
  [JobRole.BACKEND]: "서버, 데이터베이스, API 디자인 등 눈에 보이지 않는 시스템의 핵심 로직을 담당합니다. 데이터 처리, 보안, 성능 최적화가 중요합니다.",
  [JobRole.EMBEDDED]: "하드웨어를 제어하는 소프트웨어를 개발합니다. C/C++, OS 커널, 메모리 관리 및 하드웨어 인터페이스에 대한 깊은 이해가 필요합니다.",
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
    }
  ],
  [JobRole.BACKEND]: [
    {
      id: 11,
      text: "RDBMS에서 Index를 사용하는 주된 목적은?",
      options: ["데이터의 중복 저장을 방지하기 위해", "테이블의 검색 속도를 향상시키기 위해", "데이터 무결성을 보장하기 위해", "데이터베이스 용량을 줄이기 위해"],
      correctIndex: 1,
      category: "Database"
    },
    {
      id: 12,
      text: "ACID 트랜잭션 속성 중 'Atomicity(원자성)'의 의미는?",
      options: ["트랜잭션이 완료된 후 데이터는 일관되어야 한다.", "트랜잭션 내의 모든 연산은 모두 수행되거나, 아예 수행되지 않아야 한다(All or Nothing).", "동시에 실행되는 트랜잭션은 서로 영향을 주지 않아야 한다.", "트랜잭션 결과는 영구적으로 반영되어야 한다."],
      correctIndex: 1,
      category: "Database"
    },
    {
      id: 13,
      text: "REST API에서 리소스의 '수정(전체 교체)'을 의미하는 HTTP 메서드는?",
      options: ["GET", "POST", "PATCH", "PUT"],
      correctIndex: 3,
      category: "Network"
    },
    {
      id: 14,
      text: "JWT(Json Web Token)의 구성 요소가 아닌 것은?",
      options: ["Header", "Payload", "Signature", "Session ID"],
      correctIndex: 3,
      category: "Authentication"
    },
    {
      id: 15,
      text: "Scale-up과 Scale-out의 차이점은?",
      options: ["Scale-up은 서버 대수를 늘리는 것이고, Scale-out은 서버 성능을 높이는 것이다.", "Scale-up은 서버 자체의 성능(CPU, RAM)을 높이는 것이고, Scale-out은 서버 대수를 늘려 부하를 분산하는 것이다.", "둘 다 동일한 개념이다.", "Scale-out은 데이터베이스 용량만 늘리는 것이다."],
      correctIndex: 1,
      category: "Architecture"
    },
    {
      id: 16,
      text: "OSI 7계층 중 전송 계층(Transport Layer)에 해당하는 프로토콜은?",
      options: ["IP, ICMP", "HTTP, FTP", "TCP, UDP", "Ethernet, Wi-Fi"],
      correctIndex: 2,
      category: "Network"
    },
    {
      id: 17,
      text: "Docker 컨테이너와 가상머신(VM)의 가장 큰 차이점은?",
      options: ["Docker는 OS 커널을 공유하지만 VM은 게스트 OS를 별도로 가진다.", "VM이 더 가볍고 실행 속도가 빠르다.", "Docker는 리눅스에서만 실행 가능하다.", "VM은 격리된 환경을 제공하지 않는다."],
      correctIndex: 0,
      category: "DevOps"
    },
    {
      id: 18,
      text: "다음 중 NoSQL 데이터베이스에 해당하는 것은?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      correctIndex: 2,
      category: "Database"
    },
    {
      id: 19,
      text: "CI/CD 파이프라인에서 CI(Continuous Integration)가 의미하는 것은?",
      options: ["지속적인 서비스 배포", "코드 변경 사항을 주기적으로 빌드 및 테스트하여 통합하는 과정", "서버 모니터링 자동화", "고객 피드백 수집"],
      correctIndex: 1,
      category: "DevOps"
    },
    {
      id: 20,
      text: "프로세스와 스레드의 차이점 중 틀린 것은?",
      options: ["프로세스는 독립적인 메모리 영역을 가진다.", "스레드는 프로세스 내의 힙(Heap) 메모리를 공유한다.", "스레드 간의 문맥 교환(Context Switch) 비용이 프로세스보다 크다.", "하나의 프로세스는 여러 개의 스레드를 가질 수 있다."],
      correctIndex: 2,
      category: "OS"
    }
  ],
  [JobRole.EMBEDDED]: [
    {
      id: 21,
      text: "volatile 키워드의 용도로 가장 적절한 것은?",
      options: ["변수를 상수로 선언할 때", "컴파일러 최적화를 방지하고 항상 메모리에서 값을 읽도록 강제할 때", "메모리 할당을 동적으로 할 때", "함수의 반환값을 무시할 때"],
      correctIndex: 1,
      category: "C Language"
    },
    {
      id: 22,
      text: "RTOS(Real-Time Operating System)의 가장 중요한 특징은?",
      options: ["화려한 그래픽 인터페이스 제공", "정해진 시간(Deadline) 내에 작업 수행을 보장하는 결정성(Determinism)", "무제한 멀티태스킹", "대용량 데이터 처리 속도"],
      correctIndex: 1,
      category: "RTOS"
    },
    {
      id: 23,
      text: "인터럽트(Interrupt) 처리 루틴(ISR) 작성 시 주의할 점으로 틀린 것은?",
      options: ["가능한 짧고 빠르게 수행되어야 한다.", "긴 지연(delay) 함수를 사용하면 안 된다.", "우선순위가 낮은 인터럽트는 무시해도 된다.", "공유 자원 접근 시 경쟁 조건(Race Condition)을 고려해야 한다."],
      correctIndex: 2,
      category: "Interrupts"
    },
    {
      id: 24,
      text: "I2C 통신 프로토콜의 특징이 아닌 것은?",
      options: ["2개의 선(SDA, SCL)만 사용한다.", "Full Duplex(전이중) 통신을 지원한다.", "Master-Slave 구조를 가진다.", "각 장치는 고유한 주소를 가진다."],
      correctIndex: 1,
      category: "Communication"
    },
    {
      id: 25,
      text: "메모리 영역 중 지역 변수와 매개 변수가 저장되는 곳은?",
      options: ["Code (Text)", "Data", "Heap", "Stack"],
      correctIndex: 3,
      category: "Memory"
    },
    {
      id: 26,
      text: "Watchdog Timer(WDT)의 역할은?",
      options: ["현재 시간을 측정한다.", "시스템 오류로 인해 프로그램이 멈추거나 무한 루프에 빠졌을 때 시스템을 리셋한다.", "외부 통신 속도를 조절한다.", "배터리 전압을 감시한다."],
      correctIndex: 1,
      category: "MCU Peripherals"
    },
    {
      id: 27,
      text: "리틀 엔디안(Little Endian) 시스템에서 0x12345678을 메모리에 저장할 때 낮은 주소부터 저장되는 순서는?",
      options: ["12 34 56 78", "78 56 34 12", "78 12 34 56", "34 12 78 56"],
      correctIndex: 1,
      category: "Computer Architecture"
    },
    {
      id: 28,
      text: "Mutex와 Semaphore의 가장 큰 차이점은?",
      options: ["Mutex는 소유권(Ownership)이 있어 락을 건 스레드만 해제할 수 있다.", "Semaphore는 한 번에 하나의 스레드만 접근 가능하다.", "Mutex는 카운팅 기능이 있다.", "차이점이 없다."],
      correctIndex: 0,
      category: "OS"
    },
    {
      id: 29,
      text: "C언어에서 구조체 멤버 정렬(Structure Padding)이 발생하는 이유는?",
      options: ["메모리를 절약하기 위해", "CPU의 메모리 접근 효율성을 높이기 위해", "컴파일러 버그 때문에", "코드 가독성을 위해"],
      correctIndex: 1,
      category: "C Language"
    },
    {
      id: 30,
      text: "부동 소수점(Floating Point) 연산을 임베디드 시스템에서 주의해서 사용해야 하는 이유는?",
      options: ["정확도가 너무 높아서", "FPU(Floating Point Unit)가 없는 MCU에서는 연산 속도가 매우 느려질 수 있어서", "C언어에서 지원하지 않아서", "메모리를 전혀 사용하지 않아서"],
      correctIndex: 1,
      category: "Performance"
    }
  ]
};