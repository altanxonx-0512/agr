/**
 * @typedef {"draft"|"active"|"completed"} ExamStatus
 * @typedef {"multiple_choice"|"true_false"|"short_answer"} QuestionType
 *
 * @typedef {Object} Course
 * @property {string} id
 * @property {string} code
 * @property {string} title
 * @property {string} semester
 * @property {string} teacher
 * @property {string} teacherEmail
 * @property {number} students
 *
 * @typedef {Object} Exam
 * @property {string} id
 * @property {string} courseId
 * @property {string} title
 * @property {string} description
 * @property {number} duration
 * @property {number} totalScore
 * @property {string} start
 * @property {string} end
 * @property {ExamStatus} status
 * @property {string} instructions
 * @property {string} gradingSettings
 */

const STATUS_LABEL = {
  draft: "Ноорог",
  active: "Идэвхтэй",
  completed: "Дууссан"
};

const DIFFICULTY_LABEL = {
  easy: "Хөнгөн",
  medium: "Дунд",
  hard: "Хүнд"
};

/** @type {Course[]} */
const courses = [
  {
    id: "course-1",
    code: "CS301",
    title: "Алгоритм ба өгөгдлийн бүтэц",
    semester: "2025-2026 Намар",
    teacher: "Д.Энхтүвшин",
    teacherEmail: "enkhtuvshin@univ.edu.mn",
    students: 86
  },
  {
    id: "course-2",
    code: "MTH204",
    title: "Магадлал ба статистик",
    semester: "2025-2026 Намар",
    teacher: "Л.Баярмаа",
    teacherEmail: "bayarmaa@univ.edu.mn",
    students: 74
  },
  {
    id: "course-3",
    code: "ECO112",
    title: "Эдийн засгийн үндэс",
    semester: "2025-2026 Хавар",
    teacher: "С.Отгон",
    teacherEmail: "otgon@univ.edu.mn",
    students: 102
  }
];

/** @type {Exam[]} */
const exams = [
  {
    id: "exam-1",
    courseId: "course-1",
    title: "I явцын шалгалт",
    description: "Сортлолт, хайлт, рекурсийн сэдвүүд.",
    duration: 80,
    totalScore: 100,
    start: "2026-03-15T09:00:00",
    end: "2026-03-15T10:20:00",
    status: "active",
    instructions: "Асуулт бүрийг анхааралтай уншиж хамгийн зөв хариултыг сонгоно уу.",
    gradingSettings: "60+ оноо бол тэнцсэн."
  },
  {
    id: "exam-2",
    courseId: "course-1",
    title: "Улирлын эцсийн шалгалт",
    description: "Алгоритмын төвөгшил ба мод бүтэц.",
    duration: 120,
    totalScore: 120,
    start: "2026-01-20T08:30:00",
    end: "2026-01-20T10:30:00",
    status: "completed",
    instructions: "Логик үндэслэлээ товч бичих.",
    gradingSettings: "72+ оноо бол тэнцсэн."
  },
  {
    id: "exam-3",
    courseId: "course-2",
    title: "Дунд шалгалт",
    description: "Тархалт ба санамсаргүй хувьсагч.",
    duration: 90,
    totalScore: 100,
    start: "2026-03-18T11:00:00",
    end: "2026-03-18T12:30:00",
    status: "draft",
    instructions: "Калькулятор ашиглаж болно.",
    gradingSettings: "Нийлбэр оноогоор үнэлнэ."
  },
  {
    id: "exam-4",
    courseId: "course-2",
    title: "Богино сорил 2",
    description: "Нөхцөлт магадлалын сорил.",
    duration: 45,
    totalScore: 50,
    start: "2026-02-03T09:00:00",
    end: "2026-02-03T09:45:00",
    status: "completed",
    instructions: "Нэг асуултад 4-5 минут зарцуул.",
    gradingSettings: "30+ оноо бол тэнцсэн."
  },
  {
    id: "exam-5",
    courseId: "course-3",
    title: "I улирлын шалгалт",
    description: "Эрэлт нийлүүлэлтийн шинжилгээ.",
    duration: 70,
    totalScore: 80,
    start: "2026-03-22T07:00:00",
    end: "2026-03-22T08:10:00",
    status: "active",
    instructions: "Зурагтай асуултыг анхааралтай унш.",
    gradingSettings: "48+ оноо бол тэнцсэн."
  },
  {
    id: "exam-6",
    courseId: "course-3",
    title: "Эцсийн шалгалтын ноорог",
    description: "Санхүүгийн анхан шатны ойлголт.",
    duration: 90,
    totalScore: 100,
    start: "2026-05-10T10:00:00",
    end: "2026-05-10T11:30:00",
    status: "draft",
    instructions: "Ноорог хувилбар.",
    gradingSettings: "Нийт 100 оноо."
  }
];

const students = [
  {
    id: "student-1",
    code: "20B1NUM001",
    name: "Б.Мөнхтулга",
    major: "Програм хангамж",
    year: 3,
    email: "munkhtulga@student.edu.mn",
    avatar: "БМ"
  },
  {
    id: "student-2",
    code: "20B1NUM014",
    name: "Т.Солонго",
    major: "Програм хангамж",
    year: 3,
    email: "solongo@student.edu.mn",
    avatar: "ТС"
  },
  {
    id: "student-3",
    code: "21B1NUM031",
    name: "Э.Номин",
    major: "Мэдээллийн систем",
    year: 2,
    email: "nomin@student.edu.mn",
    avatar: "ЭН"
  },
  {
    id: "student-4",
    code: "21B1NUM044",
    name: "Г.Анударь",
    major: "Статистик",
    year: 2,
    email: "anudari@student.edu.mn",
    avatar: "ГА"
  },
  {
    id: "student-5",
    code: "19B1NUM009",
    name: "Н.Эрдэнэчимэг",
    major: "Эдийн засаг",
    year: 4,
    email: "erdenechimeg@student.edu.mn",
    avatar: "НЭ"
  },
  {
    id: "student-6",
    code: "19B1NUM012",
    name: "П.Тэмүүлэн",
    major: "Эдийн засаг",
    year: 4,
    email: "temuulen@student.edu.mn",
    avatar: "ПТ"
  },
  {
    id: "student-7",
    code: "22B1NUM005",
    name: "О.Сувд",
    major: "Математик",
    year: 1,
    email: "suvd@student.edu.mn",
    avatar: "ОС"
  },
  {
    id: "student-8",
    code: "22B1NUM016",
    name: "Ч.Батзориг",
    major: "Математик",
    year: 1,
    email: "batzorig@student.edu.mn",
    avatar: "ЧБ"
  }
];

function buildQuestions(examTitle, variantId, shift) {
  return [
    {
      id: `${variantId}-q1`,
      type: "multiple_choice",
      text: `${examTitle}: Үндсэн ойлголтыг тодорхойлсон зөв хариултыг сонгоно уу.`,
      score: 10,
      options: [
        { id: "A", text: "A. Онолын зөв тайлбар" },
        { id: "B", text: "B. Дутуу тайлбар" },
        { id: "C", text: "C. Буруу хэрэглээ" },
        { id: "D", text: "D. Хамааралгүй ойлголт" }
      ],
      correctAnswer: ["A", "B", "C"][shift % 3],
      explanation: "Нэр томьёоны зөв ойлголтыг шалгана."
    },
    {
      id: `${variantId}-q2`,
      type: "true_false",
      text: "Өгөгдсөн өгүүлбэр үнэн эсэхийг тодорхойлно уу.",
      score: 8,
      correctAnswer: shift % 2 === 0 ? "true" : "false",
      explanation: "Онолын үндсэн логикийг шалгана."
    },
    {
      id: `${variantId}-q3`,
      type: "short_answer",
      text: "Асуудлыг 2-3 алхмаар тайлбарлан богино хариулт бичнэ үү.",
      score: 12,
      correctAnswer: "Зөв бодолтын бүтэцтэй тайлбар",
      explanation: "Алхамт сэтгэлгээг үнэлнэ."
    },
    {
      id: `${variantId}-q4`,
      type: "multiple_choice",
      text: "Доорх өгөгдлийн аль нь зөв шийдэлд хүргэх вэ?",
      score: 10,
      options: [
        { id: "A", text: "A. Хувилбар 1" },
        { id: "B", text: "B. Хувилбар 2" },
        { id: "C", text: "C. Хувилбар 3" },
        { id: "D", text: "D. Хувилбар 4" }
      ],
      correctAnswer: ["C", "B", "D"][shift % 3],
      explanation: "Өгөгдлийн шинжилгээний ойлголтыг шалгана."
    },
    {
      id: `${variantId}-q5`,
      type: "short_answer",
      text: "Практик хэрэглээний жишээ дурдана уу.",
      score: 10,
      correctAnswer: "Практик хэрэглээний зөв жишээ",
      explanation: "Онолыг бодит нөхцөлд ашиглах чадварыг үнэлнэ."
    }
  ];
}

const variants = exams.flatMap((exam) => {
  return [0, 1, 2].map((index) => {
    const variantId = `${exam.id}-variant-${index + 1}`;
    return {
      id: variantId,
      examId: exam.id,
      name: `${exam.title} - Вариант ${String.fromCharCode(65 + index)}`,
      code: `${exam.id.toUpperCase()}-${String.fromCharCode(65 + index)}`,
      difficulty: ["easy", "medium", "hard"][index],
      assignedStudentIds: students.filter((_, sIdx) => (sIdx + index) % 2 === 0).map((s) => s.id),
      estimatedDuration: exam.duration - index * 5,
      questions: buildQuestions(exam.title, variantId, index)
    };
  });
});

const submissions = [
  {
    id: "sub-1",
    examId: "exam-1",
    variantId: "exam-1-variant-1",
    studentId: "student-1",
    submittedAt: "2026-03-15T10:05:00",
    totalScore: 42,
    percentage: 84,
    grade: "A-",
    passed: true,
    answers: [
      { questionSuffix: "q1", answer: "A", score: 10 },
      { questionSuffix: "q2", answer: "true", score: 8 },
      { questionSuffix: "q3", answer: "Бодлогын тайлбар", score: 8 },
      { questionSuffix: "q4", answer: "C", score: 10 },
      { questionSuffix: "q5", answer: "Практик жишээ", score: 6 }
    ]
  },
  {
    id: "sub-2",
    examId: "exam-1",
    variantId: "exam-1-variant-2",
    studentId: "student-2",
    submittedAt: "2026-03-15T10:12:00",
    totalScore: 37,
    percentage: 74,
    grade: "B",
    passed: true,
    answers: [
      { questionSuffix: "q1", answer: "B", score: 10 },
      { questionSuffix: "q2", answer: "false", score: 8 },
      { questionSuffix: "q3", answer: "Товч хариулт", score: 6 },
      { questionSuffix: "q4", answer: "A", score: 4 },
      { questionSuffix: "q5", answer: "Жишээ", score: 9 }
    ]
  },
  {
    id: "sub-3",
    examId: "exam-2",
    variantId: "exam-2-variant-1",
    studentId: "student-1",
    submittedAt: "2026-01-20T10:28:00",
    totalScore: 96,
    percentage: 80,
    grade: "B+",
    passed: true,
    answers: []
  },
  {
    id: "sub-4",
    examId: "exam-2",
    variantId: "exam-2-variant-2",
    studentId: "student-3",
    submittedAt: "2026-01-20T10:20:00",
    totalScore: 88,
    percentage: 73,
    grade: "B",
    passed: true,
    answers: []
  },
  {
    id: "sub-5",
    examId: "exam-2",
    variantId: "exam-2-variant-3",
    studentId: "student-7",
    submittedAt: "2026-01-20T10:29:00",
    totalScore: 62,
    percentage: 52,
    grade: "D",
    passed: false,
    answers: []
  },
  {
    id: "sub-6",
    examId: "exam-4",
    variantId: "exam-4-variant-1",
    studentId: "student-4",
    submittedAt: "2026-02-03T09:40:00",
    totalScore: 40,
    percentage: 80,
    grade: "A",
    passed: true,
    answers: []
  },
  {
    id: "sub-7",
    examId: "exam-4",
    variantId: "exam-4-variant-2",
    studentId: "student-8",
    submittedAt: "2026-02-03T09:44:00",
    totalScore: 33,
    percentage: 66,
    grade: "C+",
    passed: true,
    answers: []
  },
  {
    id: "sub-8",
    examId: "exam-5",
    variantId: "exam-5-variant-1",
    studentId: "student-5",
    submittedAt: "2026-03-22T08:00:00",
    totalScore: 38,
    percentage: 76,
    grade: "B+",
    passed: true,
    answers: []
  },
  {
    id: "sub-9",
    examId: "exam-5",
    variantId: "exam-5-variant-2",
    studentId: "student-6",
    submittedAt: "2026-03-22T08:05:00",
    totalScore: 31,
    percentage: 62,
    grade: "C",
    passed: true,
    answers: []
  },
  {
    id: "sub-10",
    examId: "exam-5",
    variantId: "exam-5-variant-3",
    studentId: "student-2",
    submittedAt: "2026-03-22T08:09:00",
    totalScore: 21,
    percentage: 42,
    grade: "F",
    passed: false,
    answers: []
  }
];

let pageCleanup = null;

function el(id) {
  return document.getElementById(id);
}

function formatDate(value) {
  const d = new Date(value);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
}

function statusBadge(status) {
  return `<span class="badge status-${status}">${STATUS_LABEL[status]}</span>`;
}

function showToast(title, text, isError) {
  const wrap = el("toastWrap");
  const node = document.createElement("div");
  node.className = `toast${isError ? " error" : ""}`;
  node.innerHTML = `<p class="toast-title">${title}</p><p class="toast-text">${text || ""}</p>`;
  wrap.appendChild(node);
  window.setTimeout(() => node.remove(), 3500);
}

function openModal({ title, text, confirmText, onConfirm, danger }) {
  const root = el("modalRoot");
  root.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <div class="modal-card">
      <h3 class="modal-title">${title}</h3>
      <p class="modal-text">${text || ""}</p>
      <div class="action-row" style="margin-top:14px;justify-content:flex-end">
        <button class="btn btn-secondary" data-close-modal>Болих</button>
        <button class="btn ${danger ? "btn-danger" : "btn-primary"}" data-confirm-modal>${confirmText}</button>
      </div>
    </div>
  `;
  root.classList.add("show");

  root.querySelectorAll("[data-close-modal]").forEach((node) => {
    node.addEventListener("click", closeModal);
  });
  root.querySelector("[data-confirm-modal]").addEventListener("click", () => {
    closeModal();
    onConfirm();
  });
}

function closeModal() {
  const root = el("modalRoot");
  root.classList.remove("show");
  root.innerHTML = "";
}

function reportForExam(examId) {
  const examSubs = submissions.filter((s) => s.examId === examId);
  const examVariants = variants.filter((v) => v.examId === examId);
  const count = examSubs.length;
  const average = count
    ? Math.round(examSubs.reduce((sum, item) => sum + item.totalScore, 0) / count)
    : 0;
  const highest = count ? Math.max(...examSubs.map((s) => s.totalScore)) : 0;
  const lowest = count ? Math.min(...examSubs.map((s) => s.totalScore)) : 0;
  const passRate = count ? Math.round((examSubs.filter((s) => s.passed).length / count) * 100) : 0;
  const distribution = [
    { label: "0-40%", value: examSubs.filter((s) => s.percentage <= 40).length },
    { label: "41-60%", value: examSubs.filter((s) => s.percentage > 40 && s.percentage <= 60).length },
    { label: "61-80%", value: examSubs.filter((s) => s.percentage > 60 && s.percentage <= 80).length },
    { label: "81-100%", value: examSubs.filter((s) => s.percentage > 80).length }
  ];
  const variantPerformance = examVariants.map((variant) => {
    const related = examSubs.filter((s) => s.variantId === variant.id);
    return {
      label: variant.code,
      value: related.length
        ? Math.round(related.reduce((sum, item) => sum + item.totalScore, 0) / related.length)
        : 0
    };
  });
  const questionStats = (examVariants[0]?.questions || []).map((question, index) => ({
    label: `Асуулт ${index + 1}`,
    correctRate: Math.max(44, 92 - index * 8),
    avgScore: Math.max(2, question.score - index * 1.4).toFixed(1)
  }));

  return {
    average,
    highest,
    lowest,
    passRate,
    submissions: count,
    distribution,
    variantPerformance,
    questionStats
  };
}

function routeLink(path, params) {
  const qp = new URLSearchParams(params || {});
  const q = qp.toString();
  return q ? `${path}?${q}` : path;
}

function getContext() {
  const page = document.body.dataset.page || "dashboard";
  const qs = new URLSearchParams(window.location.search);
  return {
    page,
    courseId: qs.get("course") || document.body.dataset.courseId || "course-1",
    examId: qs.get("exam") || document.body.dataset.examId || "exam-1",
    variantId: qs.get("variant") || document.body.dataset.variantId || "",
    studentId: qs.get("student") || document.body.dataset.studentId || "student-1"
  };
}

function pickCourse(courseId) {
  return courses.find((c) => c.id === courseId) || courses[0];
}

function pickExam(examId) {
  return exams.find((e) => e.id === examId) || exams[0];
}

function pickVariant(examId, variantId) {
  const pool = variants.filter((v) => v.examId === examId);
  return pool.find((v) => v.id === variantId) || pool[0];
}

function pickStudent(studentId) {
  return students.find((s) => s.id === studentId) || students[0];
}

function pageHeader(title, subtitle, actionsHtml) {
  return `
    <div class="panel">
      <div class="panel-inner">
        <div class="page-header">
          <div>
            <h1 class="page-title">${title}</h1>
            <p class="page-subtitle">${subtitle || ""}</p>
          </div>
          <div class="action-row">${actionsHtml || ""}</div>
        </div>
      </div>
    </div>
  `;
}

function statCard(label, value, hint) {
  return `
    <div class="stat-card">
      <div class="stat-label">${label}</div>
      <div class="stat-value">${value}</div>
      ${hint ? `<div class="stat-hint">${hint}</div>` : ""}
    </div>
  `;
}

function barChart(title, rows, color) {
  const max = Math.max(1, ...rows.map((row) => row.value));
  return `
    <div class="chart-box">
      <h3 class="chart-title">${title}</h3>
      <div class="bar-chart">
        ${rows
          .map(
            (row) => `
          <div class="bar-row">
            <div>${row.label}</div>
            <div class="bar-track"><div class="bar-fill ${color}" style="width:${Math.max(3, (row.value / max) * 100)}%"></div></div>
            <div style="text-align:right">${row.value}</div>
          </div>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function loadingSkeleton() {
  return `
    <div class="loading-stack">
      <div class="skeleton" style="height:46px"></div>
      <div class="grid grid-4">
        <div class="skeleton" style="height:90px"></div>
        <div class="skeleton" style="height:90px"></div>
        <div class="skeleton" style="height:90px"></div>
        <div class="skeleton" style="height:90px"></div>
      </div>
      <div class="skeleton" style="height:280px"></div>
    </div>
  `;
}

function setBreadcrumbs() {
  const path = window.location.pathname.split("/").filter(Boolean);
  const map = {
    courses: "Хичээлүүд",
    course_id: "Хичээлийн ID",
    exams: "Шалгалтууд",
    exam_id: "Шалгалтын ID",
    create: "Шинэ бүртгэл",
    edit: "Засах",
    report: "Тайлан",
    variants: "Вариантууд",
    id: "Вариант ID",
    students: "Оюутнууд",
    student_id: "Оюутны ID",
    check: "Шалгах",
    result: "Үр дүн"
  };
  const crumbs = ["<span><a href='/'>Нүүр</a></span>"];
  let currentPath = "";
  path.forEach((segment, idx) => {
    currentPath += `/${segment}`;
    const label = map[segment] || segment;
    const isLast = idx === path.length - 1;
    crumbs.push(
      `<span>/</span><span class="${isLast ? "crumb-current" : ""}">${isLast ? label : `<a href="${currentPath}/">${label}</a>`}</span>`
    );
  });
  el("breadcrumbs").innerHTML = crumbs.join("");
}

function createShell() {
  const root = el("root");
  root.innerHTML = `
    <div class="app-layout">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">ES</div>
          <div>
            <p class="brand-title">Exam Studio</p>
            <p class="brand-subtitle">Их сургуулийн систем</p>
          </div>
        </div>
        <div class="menu-group">
          <p class="menu-title">Ерөнхий</p>
          <a class="menu-link" data-menu="home" href="/">Хяналтын самбар</a>
        </div>
        <div class="menu-group">
          <p class="menu-title">Хичээлүүд</p>
          <a class="menu-link" data-menu="courses" href="/courses/course_id/exams/">Хичээлийн шалгалтууд</a>
        </div>
        <div class="menu-group">
          <p class="menu-title">Шалгалтууд</p>
          <a class="menu-link" data-menu="exams" href="/exams/">Бүх шалгалт</a>
          <a class="menu-link" data-menu="exam-detail" href="/exams/exam_id/">Шалгалтын дэлгэрэнгүй</a>
        </div>
        <div class="menu-group">
          <p class="menu-title">Вариантууд</p>
          <a class="menu-link" data-menu="variants" href="/exams/exam_id/variants/">Вариантын удирдлага</a>
        </div>
        <div class="menu-group">
          <p class="menu-title">Тайлан</p>
          <a class="menu-link" data-menu="report" href="/exams/exam_id/report/">Шалгалтын тайлан</a>
        </div>
      </aside>
      <div class="workspace">
        <header class="topbar">
          <div class="topbar-row">
            <div class="top-actions">
              <button class="btn btn-secondary menu-toggle" id="sidebarToggle">☰</button>
              <div class="search-wrap">
                <input class="search-input" placeholder="Шалгалт, оюутан, хичээл хайх..." />
              </div>
            </div>
            <div class="top-actions">
              <button class="btn btn-linkish">Мэдэгдэл</button>
              <div class="chip-user">Д.Энхтүвшин</div>
            </div>
          </div>
          <div class="breadcrumbs" id="breadcrumbs"></div>
        </header>
        <main class="content" id="app"></main>
      </div>
    </div>
    <div class="toast-wrap" id="toastWrap"></div>
    <div class="modal-root" id="modalRoot"></div>
  `;

  const toggle = el("sidebarToggle");
  if (toggle) {
    toggle.addEventListener("click", () => document.body.classList.toggle("sidebar-open"));
  }
}

function setActiveMenu() {
  const p = window.location.pathname;
  const key =
    p === "/"
      ? "home"
      : p.startsWith("/courses")
        ? "courses"
        : p.includes("/variants")
          ? "variants"
          : p.includes("/report")
            ? "report"
            : p === "/exams/" || p === "/exams"
              ? "exams"
              : p.includes("/exams/")
                ? "exam-detail"
                : "home";
  document.querySelectorAll(".menu-link").forEach((node) => {
    node.classList.toggle("active", node.dataset.menu === key);
  });
}

function renderDashboard() {
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const active = exams.filter((exam) => exam.status === "active").length;
  const completed = exams.filter((exam) => exam.status === "completed").length;
  const draft = exams.filter((exam) => exam.status === "draft").length;

  el("app").innerHTML = `
    ${pageHeader(
      "Сургалтын шалгалтын удирдлагын самбар",
      "Шалгалт төлөвлөлт, вариантын удирдлага, оюутны гүйцэтгэлийг нэг дор хянах академик dashboard.",
      `
        <a class="btn btn-secondary" href="/exams/">Бүх шалгалт</a>
        <a class="btn btn-primary" href="/courses/course_id/exams/create/">Шинэ шалгалт үүсгэх</a>
      `
    )}

    <div class="grid grid-4">
      ${statCard("Нийт шалгалт", exams.length, "Бүх хичээл")}
      ${statCard("Идэвхтэй шалгалт", active, "Одоогоор явагдаж буй")}
      ${statCard("Дууссан шалгалт", completed, "Тайлан гарсан")}
      ${statCard("Ноорог", draft, "Төлөвлөсөн")}
    </div>

    <div class="grid grid-2">
      <div class="panel"><div class="panel-inner">
        <h3 style="margin-top:0">7 хоногийн идэвхжил</h3>
        ${barChart(
          "",
          [
            { label: "Даваа", value: 18 },
            { label: "Мягмар", value: 25 },
            { label: "Лхагва", value: 21 },
            { label: "Пүрэв", value: 29 },
            { label: "Баасан", value: 16 }
          ],
          "blue"
        )}
      </div></div>
      <div class="panel"><div class="panel-inner">
        <h3 style="margin-top:0">Хурдан холбоос</h3>
        <div class="cards-list">
          <a class="list-row" href="/courses/course_id/exams/">Хичээлийн шалгалтууд <span>→</span></a>
          <a class="list-row" href="/exams/exam_id/variants/">Вариантын удирдлага <span>→</span></a>
          <a class="list-row" href="/exams/exam_id/report/">Тайлан ба статистик <span>→</span></a>
          <div class="list-row">Нийт оюутан <strong>${totalStudents}</strong></div>
        </div>
      </div></div>
    </div>

    <div class="panel">
      <div class="panel-inner">
        <h3 style="margin-top:0">Сүүлийн шалгалтууд</h3>
        <div class="cards-list">
          ${exams
            .slice(0, 6)
            .map(
              (exam) => `
              <div class="list-row">
                <div>
                  <div style="font-weight:700">${exam.title}</div>
                  <div class="mini-subtitle">${formatDate(exam.start)}</div>
                </div>
                <div class="inline-actions">
                  ${statusBadge(exam.status)}
                  <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/", { exam: exam.id })}">Нээх</a>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderCourseExams(ctx) {
  const course = pickCourse(ctx.courseId);
  const courseExams = exams.filter((exam) => exam.courseId === course.id);
  el("app").innerHTML = `
    ${pageHeader(
      `${course.title} - Шалгалтын жагсаалт`,
      `${course.code} | ${course.semester} | Багш: ${course.teacher}`,
      `<a class="btn btn-primary" href="${routeLink("/courses/course_id/exams/create/", { course: course.id })}">Шинэ шалгалт бүртгэх</a>`
    )}

    <div class="grid grid-3">
      ${statCard("Багш", course.teacher, course.teacherEmail)}
      ${statCard("Оюутны тоо", course.students, "Нийт бүртгэлтэй")}
      ${statCard("Нийт шалгалт", courseExams.length, "Энэ хичээлд")}
    </div>

    <div class="panel"><div class="panel-inner">
      <div class="filters">
        <input id="courseExamSearch" class="input" placeholder="Шалгалтын нэрээр хайх..." />
        <select id="courseExamStatus" class="select">
          <option value="all">Төлөв: Бүгд</option>
          <option value="draft">Ноорог</option>
          <option value="active">Идэвхтэй</option>
          <option value="completed">Дууссан</option>
        </select>
        <select id="courseExamSort" class="select">
          <option value="new">Огноо: Шинэ эхэнд</option>
          <option value="old">Огноо: Хуучин эхэнд</option>
        </select>
        <button id="courseExamReset" class="btn btn-secondary">Цэвэрлэх</button>
      </div>
    </div></div>

    <div id="courseExamTableWrap"></div>
  `;

  const searchEl = el("courseExamSearch");
  const statusEl = el("courseExamStatus");
  const sortEl = el("courseExamSort");

  function draw() {
    const keyword = searchEl.value.trim().toLowerCase();
    const status = statusEl.value;
    const sort = sortEl.value;

    let rows = courseExams.filter((exam) => {
      const byKeyword = exam.title.toLowerCase().includes(keyword);
      const byStatus = status === "all" ? true : exam.status === status;
      return byKeyword && byStatus;
    });

    rows.sort((a, b) => {
      const d = new Date(a.start).getTime() - new Date(b.start).getTime();
      return sort === "new" ? -d : d;
    });

    if (!rows.length) {
      el("courseExamTableWrap").innerHTML = `<div class="empty-state">Шүүлтүүрт тохирох шалгалт олдсонгүй.</div>`;
      return;
    }

    el("courseExamTableWrap").innerHTML = `
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Шалгалт</th>
              <th>Төлөв</th>
              <th>Огноо</th>
              <th>Хугацаа</th>
              <th>Үйлдэл</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (exam) => `
                <tr>
                  <td>
                    <div style="font-weight:700">${exam.title}</div>
                    <div class="mini-subtitle">${exam.description}</div>
                  </td>
                  <td>${statusBadge(exam.status)}</td>
                  <td>${formatDate(exam.start)}</td>
                  <td>${exam.duration} мин</td>
                  <td>
                    <div class="inline-actions">
                      <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/", { exam: exam.id })}">Харах</a>
                      <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/edit/", { exam: exam.id })}">Засах</a>
                      <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/report/", { exam: exam.id })}">Тайлан</a>
                      <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/variants/", { exam: exam.id })}">Вариант</a>
                    </div>
                  </td>
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  searchEl.addEventListener("input", draw);
  statusEl.addEventListener("change", draw);
  sortEl.addEventListener("change", draw);
  el("courseExamReset").addEventListener("click", () => {
    searchEl.value = "";
    statusEl.value = "all";
    sortEl.value = "new";
    draw();
  });
  draw();
}

function renderExamForm({ initialExam, mode, cancelHref, defaultCourseId }) {
  const isCreate = mode === "create";
  const title = isCreate ? "Шинэ шалгалт бүртгэх" : "Шалгалтын мэдээлэл засах";
  const subtitle = isCreate
    ? "Шалгалтын мета мэдээлэл, заавар, үнэлгээний тохиргоог бөглөнө."
    : "Шалгалтын мэдээллийг шинэчилж, тохиргоог өөрчилнө.";

  el("app").innerHTML = `
    ${pageHeader(title, subtitle, `<a class="btn btn-secondary" href="${cancelHref}">Буцах</a>`)}

    <div class="panel">
      <div class="panel-inner">
        <div class="form-grid two">
          <div class="field" style="grid-column:1/-1">
            <label>Шалгалтын нэр</label>
            <input class="input" id="examTitle" value="${initialExam?.title || ""}" />
            <div class="field-error" id="errTitle"></div>
          </div>
          <div class="field" style="grid-column:1/-1">
            <label>Тайлбар</label>
            <textarea class="textarea" id="examDescription">${initialExam?.description || ""}</textarea>
            <div class="field-error" id="errDescription"></div>
          </div>
          <div class="field">
            <label>Хичээл</label>
            <select class="select" id="examCourse">
              ${courses
                .map(
                  (course) =>
                    `<option value="${course.id}" ${
                      initialExam?.courseId === course.id || (!initialExam && defaultCourseId === course.id)
                        ? "selected"
                        : ""
                    }>${course.code} - ${course.title}</option>`
                )
                .join("")}
            </select>
            <div class="field-error" id="errCourse"></div>
          </div>
          <div class="field">
            <label>Төлөв</label>
            <select class="select" id="examStatus">
              <option value="draft" ${initialExam?.status === "draft" || !initialExam ? "selected" : ""}>Ноорог</option>
              <option value="active" ${initialExam?.status === "active" ? "selected" : ""}>Идэвхтэй</option>
              <option value="completed" ${initialExam?.status === "completed" ? "selected" : ""}>Дууссан</option>
            </select>
          </div>
          <div class="field">
            <label>Хугацаа (мин)</label>
            <input class="input" id="examDuration" type="number" min="1" value="${initialExam?.duration || 60}" />
            <div class="field-error" id="errDuration"></div>
          </div>
          <div class="field">
            <label>Нийт оноо</label>
            <input class="input" id="examScore" type="number" min="1" value="${initialExam?.totalScore || 100}" />
            <div class="field-error" id="errScore"></div>
          </div>
          <div class="field">
            <label>Эхлэх огноо</label>
            <input class="input" id="examStart" type="datetime-local" value="${(initialExam?.start || "2026-03-15T09:00:00").slice(0, 16)}" />
            <div class="field-error" id="errStart"></div>
          </div>
          <div class="field">
            <label>Дуусах огноо</label>
            <input class="input" id="examEnd" type="datetime-local" value="${(initialExam?.end || "2026-03-15T10:30:00").slice(0, 16)}" />
            <div class="field-error" id="errEnd"></div>
          </div>
          <div class="field" style="grid-column:1/-1">
            <label>Зааварчилгаа</label>
            <textarea class="textarea" id="examInstructions">${initialExam?.instructions || ""}</textarea>
            <div class="field-error" id="errInstructions"></div>
          </div>
          <div class="field" style="grid-column:1/-1">
            <label>Үнэлгээний тохиргоо</label>
            <textarea class="textarea" id="examGrading">${initialExam?.gradingSettings || ""}</textarea>
            <div class="field-error" id="errGrading"></div>
          </div>
        </div>

        <div class="action-row" style="margin-top:14px">
          <button id="saveDraft" class="btn btn-secondary">${isCreate ? "Ноорог хадгалах" : "Өөрчлөлт хадгалах"}</button>
          <button id="publishExam" class="btn btn-primary">${isCreate ? "Нийтлэх" : "Шинэчлэх"}</button>
          <a class="btn btn-linkish" href="${cancelHref}">Цуцлах</a>
        </div>
      </div>
    </div>
  `;

  function clearErrors() {
    ["Title", "Description", "Course", "Duration", "Score", "Start", "End", "Instructions", "Grading"].forEach(
      (k) => {
        el(`err${k}`).textContent = "";
      }
    );
  }

  function validate() {
    clearErrors();
    let ok = true;
    const titleValue = el("examTitle").value.trim();
    const descriptionValue = el("examDescription").value.trim();
    const durationValue = Number(el("examDuration").value || 0);
    const scoreValue = Number(el("examScore").value || 0);
    const startValue = el("examStart").value;
    const endValue = el("examEnd").value;
    const instructionsValue = el("examInstructions").value.trim();
    const gradingValue = el("examGrading").value.trim();

    if (!titleValue) {
      el("errTitle").textContent = "Шалгалтын нэр оруулна уу.";
      ok = false;
    }
    if (!descriptionValue) {
      el("errDescription").textContent = "Тайлбар хоосон байж болохгүй.";
      ok = false;
    }
    if (durationValue <= 0) {
      el("errDuration").textContent = "Хугацаа 1-ээс их байх ёстой.";
      ok = false;
    }
    if (scoreValue <= 0) {
      el("errScore").textContent = "Нийт оноо зөв оруулна уу.";
      ok = false;
    }
    if (!startValue) {
      el("errStart").textContent = "Эхлэх огноо шаардлагатай.";
      ok = false;
    }
    if (!endValue) {
      el("errEnd").textContent = "Дуусах огноо шаардлагатай.";
      ok = false;
    }
    if (startValue && endValue && new Date(startValue) >= new Date(endValue)) {
      el("errEnd").textContent = "Дуусах огноо эхлэхээс хойш байх ёстой.";
      ok = false;
    }
    if (!instructionsValue) {
      el("errInstructions").textContent = "Зааварчилгаа оруулна уу.";
      ok = false;
    }
    if (!gradingValue) {
      el("errGrading").textContent = "Үнэлгээний тохиргоо оруулна уу.";
      ok = false;
    }
    return ok;
  }

  el("saveDraft").addEventListener("click", () => {
    if (!validate()) {
      showToast("Алдаа", "Талбаруудыг шалгаад дахин оролдоно уу.", true);
      return;
    }
    showToast("Амжилттай", "Шалгалтын ноорог хадгалагдлаа.");
  });

  el("publishExam").addEventListener("click", () => {
    if (!validate()) {
      showToast("Алдаа", "Талбаруудыг шалгаад дахин оролдоно уу.", true);
      return;
    }
    showToast("Амжилттай", isCreate ? "Шалгалт нийтлэгдлээ." : "Шалгалтын өөрчлөлт хадгалагдлаа.");
  });
}

function renderGlobalExams() {
  let view = "table";
  el("app").innerHTML = `
    ${pageHeader(
      "Бүх шалгалтын төвлөрсөн жагсаалт",
      "Бүх хичээлийн шалгалтыг нэг дороос шүүх, эрэмбэлэх, хянах боломжтой.",
      `<a class="btn btn-primary" href="/courses/course_id/exams/create/">Шинэ шалгалт бүртгэх</a>`
    )}
    <div class="grid grid-4">
      ${statCard("Нийт шалгалт", exams.length)}
      ${statCard("Идэвхтэй шалгалт", exams.filter((e) => e.status === "active").length)}
      ${statCard("Дууссан шалгалт", exams.filter((e) => e.status === "completed").length)}
      ${statCard("Ноорог", exams.filter((e) => e.status === "draft").length)}
    </div>
    <div class="panel"><div class="panel-inner">
      <div class="filters">
        <input id="globalSearch" class="input" placeholder="Шалгалт эсвэл хичээлээр хайх..." />
        <select id="globalStatus" class="select">
          <option value="all">Төлөв: Бүгд</option>
          <option value="draft">Ноорог</option>
          <option value="active">Идэвхтэй</option>
          <option value="completed">Дууссан</option>
        </select>
        <select id="globalSort" class="select">
          <option value="new">Шинэ эхэнд</option>
          <option value="old">Хуучин эхэнд</option>
        </select>
        <div class="inline-actions">
          <button id="viewTable" class="btn btn-secondary">Хүснэгт</button>
          <button id="viewCard" class="btn btn-secondary">Карт</button>
        </div>
      </div>
    </div></div>
    <div id="globalListWrap"></div>
  `;

  const searchEl = el("globalSearch");
  const statusEl = el("globalStatus");
  const sortEl = el("globalSort");

  function filteredRows() {
    const keyword = searchEl.value.trim().toLowerCase();
    const status = statusEl.value;
    const sort = sortEl.value;
    const rows = exams.filter((exam) => {
      const course = pickCourse(exam.courseId);
      const byKeyword = `${exam.title} ${course.title} ${course.code}`.toLowerCase().includes(keyword);
      const byStatus = status === "all" ? true : exam.status === status;
      return byKeyword && byStatus;
    });
    rows.sort((a, b) => {
      const d = new Date(a.start).getTime() - new Date(b.start).getTime();
      return sort === "new" ? -d : d;
    });
    return rows;
  }

  function draw() {
    const rows = filteredRows();
    if (!rows.length) {
      el("globalListWrap").innerHTML = `<div class="empty-state">Хайлтад тохирох шалгалт олдсонгүй.</div>`;
      return;
    }

    if (view === "table") {
      el("globalListWrap").innerHTML = `
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Шалгалтын нэр</th>
                <th>Хичээл</th>
                <th>Төлөв</th>
                <th>Огноо</th>
                <th>Үйлдэл</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map((exam) => {
                  const course = pickCourse(exam.courseId);
                  return `
                    <tr>
                      <td>
                        <div style="font-weight:700">${exam.title}</div>
                        <div class="mini-subtitle">${exam.description}</div>
                      </td>
                      <td>${course.code}<div class="mini-subtitle">${course.title}</div></td>
                      <td>${statusBadge(exam.status)}</td>
                      <td>${formatDate(exam.start)}</td>
                      <td><a class="btn btn-secondary" href="${routeLink("/exams/exam_id/", { exam: exam.id })}">Дэлгэрэнгүй</a></td>
                    </tr>`;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      `;
      return;
    }

    el("globalListWrap").innerHTML = `
      <div class="cards-list three">
        ${rows
          .map((exam) => {
            const course = pickCourse(exam.courseId);
            return `
              <div class="mini-card">
                <div class="inline-actions" style="justify-content:space-between">
                  <div style="font-weight:700">${exam.title}</div>
                  ${statusBadge(exam.status)}
                </div>
                <div class="mini-subtitle">${course.code} - ${course.title}</div>
                <div class="mini-subtitle">Эхлэх: ${formatDate(exam.start)}</div>
                <div class="mini-subtitle">Хугацаа: ${exam.duration} мин | Оноо: ${exam.totalScore}</div>
                <div class="action-row" style="margin-top:10px">
                  <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/", { exam: exam.id })}">Нээх</a>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  searchEl.addEventListener("input", draw);
  statusEl.addEventListener("change", draw);
  sortEl.addEventListener("change", draw);
  el("viewTable").addEventListener("click", () => {
    view = "table";
    draw();
  });
  el("viewCard").addEventListener("click", () => {
    view = "card";
    draw();
  });
  draw();
}

function renderExamDetail(ctx) {
  const exam = pickExam(ctx.examId);
  const report = reportForExam(exam.id);
  const examVariants = variants.filter((v) => v.examId === exam.id);
  const participantIds = new Set(examVariants.flatMap((variant) => variant.assignedStudentIds));
  const participants = students.filter((s) => participantIds.has(s.id));
  const examSubs = submissions.filter((s) => s.examId === exam.id);

  el("app").innerHTML = `
    ${pageHeader(
      exam.title,
      `${formatDate(exam.start)} | ${exam.duration} мин | Нийт ${exam.totalScore} оноо`,
      `
        ${statusBadge(exam.status)}
        <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/edit/", { exam: exam.id })}">Засах</a>
        <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/report/", { exam: exam.id })}">Тайлан</a>
        <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/variants/create/", { exam: exam.id })}">Вариант нэмэх</a>
        <a class="btn btn-primary" href="${routeLink("/exams/exam_id/students/student_id/", { exam: exam.id, student: "student-1" })}">Шалгалт preview</a>
      `
    )}
    <div class="grid grid-4">
      ${statCard("Нийт оролцогч", participants.length)}
      ${statCard("Илгээсэн хариулт", examSubs.length)}
      ${statCard("Дундаж оноо", report.average)}
      ${statCard("Тэнцсэн хувь", `${report.passRate}%`)}
    </div>
    <div class="panel"><div class="panel-inner">
      <div class="tabs" id="examTabs">
        <button class="tab-btn active" data-tab="overview">Ерөнхий мэдээлэл</button>
        <button class="tab-btn" data-tab="variants">Вариантууд</button>
        <button class="tab-btn" data-tab="participants">Оролцогчид</button>
        <button class="tab-btn" data-tab="results">Үр дүн</button>
      </div>
      <div class="tab-panel" id="examTabContent"></div>
    </div></div>
  `;

  function drawTab(tab) {
    if (tab === "overview") {
      el("examTabContent").innerHTML = `
        <div class="grid grid-3">
          ${statCard("Эхлэх", formatDate(exam.start))}
          ${statCard("Дуусах", formatDate(exam.end))}
          ${statCard("Төлөв", STATUS_LABEL[exam.status])}
        </div>
        <div class="mini-card" style="margin-top:12px">
          <div style="font-weight:700">Тайлбар</div>
          <div class="mini-subtitle">${exam.description}</div>
        </div>
        <div class="mini-card" style="margin-top:8px">
          <div style="font-weight:700">Зааварчилгаа</div>
          <div class="mini-subtitle">${exam.instructions}</div>
        </div>
      `;
      return;
    }

    if (tab === "variants") {
      el("examTabContent").innerHTML = `
        <div class="cards-list three">
          ${examVariants
            .map(
              (variant) => `
              <div class="mini-card">
                <div class="inline-actions" style="justify-content:space-between">
                  <div style="font-weight:700">${variant.name}</div>
                  <span class="badge badge-outline">${variant.code}</span>
                </div>
                <div class="mini-subtitle">Асуулт: ${variant.questions.length}</div>
                <div class="mini-subtitle">Хүндрэл: ${DIFFICULTY_LABEL[variant.difficulty]}</div>
                <div class="mini-subtitle">Оюутан: ${variant.assignedStudentIds.length}</div>
                <div class="action-row" style="margin-top:10px">
                  <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/variants/id/", {
                    exam: exam.id,
                    variant: variant.id
                  })}">Нээх</a>
                </div>
              </div>`
            )
            .join("")}
        </div>
      `;
      return;
    }

    if (tab === "participants") {
      el("examTabContent").innerHTML = `
        <div class="cards-list">
          ${participants
            .map((student) => {
              const sent = examSubs.some((s) => s.studentId === student.id);
              return `
                <div class="list-row">
                  <div class="inline-actions">
                    <div class="brand-mark" style="width:32px;height:32px">${student.avatar}</div>
                    <div>
                      <div style="font-weight:700">${student.name}</div>
                      <div class="mini-subtitle">${student.code}</div>
                    </div>
                  </div>
                  <div class="inline-actions">
                    <span class="badge ${sent ? "status-completed" : "status-draft"}">${sent ? "Илгээсэн" : "Илгээгээгүй"}</span>
                    <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/students/student_id/", {
                      exam: exam.id,
                      student: student.id
                    })}">Нээх</a>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
      return;
    }

    const ranking = [...examSubs].sort((a, b) => b.totalScore - a.totalScore);
    el("examTabContent").innerHTML = `
      <div class="cards-list">
        ${
          ranking.length
            ? ranking
                .map((sub, idx) => {
                  const student = pickStudent(sub.studentId);
                  return `
                    <div class="list-row">
                      <div class="inline-actions">
                        <span class="badge badge-outline">#${idx + 1}</span>
                        <div style="font-weight:700">${student.name}</div>
                      </div>
                      <div>${sub.totalScore} оноо (${sub.percentage}%)</div>
                    </div>
                  `;
                })
                .join("")
            : `<div class="empty-state">Одоогоор илгээсэн хариулт байхгүй байна.</div>`
        }
      </div>
    `;
  }

  el("examTabs").addEventListener("click", (event) => {
    const target = event.target.closest(".tab-btn");
    if (!target) {
      return;
    }
    document.querySelectorAll("#examTabs .tab-btn").forEach((node) => node.classList.remove("active"));
    target.classList.add("active");
    drawTab(target.dataset.tab);
  });
  drawTab("overview");
}

function renderExamEdit(ctx) {
  const exam = pickExam(ctx.examId);
  renderExamForm({
    initialExam: exam,
    mode: "edit",
    cancelHref: routeLink("/exams/exam_id/", { exam: exam.id })
  });

  const zone = document.createElement("div");
  zone.className = "danger-zone";
  zone.innerHTML = `
    <div style="font-weight:700">Эрсдэлтэй бүс</div>
    <div class="mini-subtitle" style="margin-top:4px">Эдгээр нь mock үйлдэл бөгөөд бодит устгал хийгдэхгүй.</div>
    <div class="action-row" style="margin-top:10px">
      <button id="archiveExamBtn" class="btn btn-secondary">Архивлах</button>
      <button id="deleteExamBtn" class="btn btn-danger">Устгах</button>
    </div>
  `;
  el("app").appendChild(zone);

  el("archiveExamBtn").addEventListener("click", () => showToast("Mock үйлдэл", "Шалгалтыг архивлалаа."));
  el("deleteExamBtn").addEventListener("click", () => showToast("Mock үйлдэл", "Шалгалтыг устгалаа.", true));
}

function renderExamReport(ctx) {
  const exam = pickExam(ctx.examId);
  const report = reportForExam(exam.id);
  const examSubs = submissions.filter((s) => s.examId === exam.id).sort((a, b) => b.totalScore - a.totalScore);
  const examVariants = variants.filter((v) => v.examId === exam.id);
  el("app").innerHTML = `
    ${pageHeader(
      `${exam.title} - Тайлан ба статистик`,
      "Онооны тархалт, асуултын түвшний гүйцэтгэл, вариантын харьцуулалт.",
      `
        <button class="btn btn-secondary" id="pdfExportBtn">PDF экспорт</button>
        <button class="btn btn-secondary" id="xlsExportBtn">Excel экспорт</button>
      `
    )}
    <div class="grid grid-4">
      ${statCard("Дундаж оноо", report.average)}
      ${statCard("Хамгийн өндөр", report.highest)}
      ${statCard("Хамгийн бага", report.lowest)}
      ${statCard("Тэнцсэн хувь", `${report.passRate}%`)}
    </div>
    <div class="grid grid-2">
      ${barChart("Онооны тархалт", report.distribution, "blue")}
      ${barChart("Вариантын гүйцэтгэлийн харьцуулалт", report.variantPerformance, "teal")}
    </div>
    <div class="panel"><div class="panel-inner">
      <h3 style="margin-top:0">Асуултын түвшний статистик</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Асуулт</th><th>Зөв хариулсан хувь</th><th>Дундаж оноо</th></tr></thead>
          <tbody>
            ${report.questionStats
              .map((q) => `<tr><td>${q.label}</td><td>${q.correctRate}%</td><td>${q.avgScore}</td></tr>`)
              .join("")}
          </tbody>
        </table>
      </div>
    </div></div>
    <div class="panel"><div class="panel-inner">
      <h3 style="margin-top:0">Оюутны эрэмбэ</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>#</th><th>Оюутан</th><th>Вариант</th><th>Оноо</th><th>Үнэлгээ</th></tr></thead>
          <tbody>
            ${
              examSubs.length
                ? examSubs
                    .map((s, idx) => {
                      const student = pickStudent(s.studentId);
                      const variant = examVariants.find((v) => v.id === s.variantId);
                      return `<tr><td>${idx + 1}</td><td>${student.name}</td><td>${variant ? variant.code : "-"}</td><td>${s.totalScore} (${s.percentage}%)</td><td>${s.grade}</td></tr>`;
                    })
                    .join("")
                : `<tr><td colspan="5">Илгээсэн хариулт одоогоор алга.</td></tr>`
            }
          </tbody>
        </table>
      </div>
    </div></div>
  `;

  el("pdfExportBtn").addEventListener("click", () => showToast("Mock экспорт", "PDF тайлан бэлтгэгдлээ."));
  el("xlsExportBtn").addEventListener("click", () => showToast("Mock экспорт", "Excel тайлан бэлтгэгдлээ."));
}

function renderVariantsPage(ctx) {
  const exam = pickExam(ctx.examId);
  const examVariants = variants.filter((variant) => variant.examId === exam.id);
  el("app").innerHTML = `
    ${pageHeader(
      "Шалгалтын вариантын жагсаалт",
      `${exam.title} шалгалтын вариантууд.`,
      `<a class="btn btn-primary" href="${routeLink("/exams/exam_id/variants/create/", { exam: exam.id })}">Вариант нэмэх</a>`
    )}
    <div class="panel"><div class="panel-inner">
      <input class="input" id="variantSearch" placeholder="Вариантын нэр эсвэл кодоор хайх..." />
    </div></div>
    <div id="variantTableWrap"></div>
    <div id="variantCardWrap"></div>
  `;

  function draw() {
    const keyword = el("variantSearch").value.trim().toLowerCase();
    const rows = examVariants.filter((variant) => `${variant.name} ${variant.code}`.toLowerCase().includes(keyword));
    if (!rows.length) {
      el("variantTableWrap").innerHTML = `<div class="empty-state">Тохирох вариант олдсонгүй.</div>`;
      el("variantCardWrap").innerHTML = "";
      return;
    }

    el("variantTableWrap").innerHTML = `
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Вариант</th><th>Асуулт</th><th>Хүндрэл</th><th>Оюутан</th><th>Үйлдэл</th></tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (variant) => `
              <tr>
                <td><strong>${variant.name}</strong><div class="mini-subtitle">${variant.code}</div></td>
                <td>${variant.questions.length}</td>
                <td>${DIFFICULTY_LABEL[variant.difficulty]}</td>
                <td>${variant.assignedStudentIds.length}</td>
                <td>
                  <div class="inline-actions">
                    <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/variants/id/", { exam: exam.id, variant: variant.id })}">Харах</a>
                    <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/variants/id/edit/", { exam: exam.id, variant: variant.id })}">Засах</a>
                    <button class="btn btn-secondary" data-dup="${variant.id}">Хувилах</button>
                    <button class="btn btn-danger" data-del="${variant.id}">Устгах</button>
                  </div>
                </td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    el("variantCardWrap").innerHTML = `
      <div class="cards-list three">
        ${rows
          .slice(0, 3)
          .map(
            (variant) => `
            <div class="mini-card">
              <div class="inline-actions" style="justify-content:space-between">
                <div style="font-weight:700">${variant.code}</div>
                <span class="badge badge-outline">${DIFFICULTY_LABEL[variant.difficulty]}</span>
              </div>
              <div class="mini-subtitle">${variant.name}</div>
              <div class="mini-subtitle">${variant.questions.length} асуулт | ${variant.assignedStudentIds.length} оюутан</div>
            </div>`
          )
          .join("")}
      </div>
    `;
  }

  el("variantSearch").addEventListener("input", draw);
  el("app").addEventListener("click", (event) => {
    const dup = event.target.closest("[data-dup]");
    const del = event.target.closest("[data-del]");
    if (dup) {
      showToast("Mock үйлдэл", "Вариант амжилттай хувилагдлаа.");
    }
    if (del) {
      showToast("Mock үйлдэл", "Вариант устгагдлаа.", true);
    }
  });
  draw();
}

function createQuestionDraft(index) {
  return {
    id: `draft-${Date.now()}-${index}`,
    type: "multiple_choice",
    text: "",
    score: 5,
    options: ["", "", "", ""],
    correctAnswer: "",
    explanation: ""
  };
}

function variantToDraft(variant) {
  if (!variant) {
    return [createQuestionDraft(1)];
  }
  return variant.questions.map((question, index) => ({
    id: `existing-${index + 1}`,
    type: question.type,
    text: question.text,
    score: question.score,
    options: question.options ? question.options.map((o) => o.text) : ["", "", "", ""],
    correctAnswer: String(question.correctAnswer),
    explanation: question.explanation
  }));
}

function renderVariantFormPage(ctx, mode) {
  const exam = pickExam(ctx.examId);
  const variant = mode === "edit" ? pickVariant(exam.id, ctx.variantId) : null;
  let preview = false;
  const state = {
    name: variant ? variant.name : "",
    code: variant ? variant.code : "",
    difficulty: variant ? variant.difficulty : "medium",
    assigned: new Set((variant ? variant.assignedStudentIds : students.slice(0, 3).map((s) => s.id)).slice(0)),
    questions: variantToDraft(variant)
  };

  el("app").innerHTML = `
    ${pageHeader(
      mode === "edit" ? "Шалгалтын вариант засах" : "Шалгалтын вариант нэмэх",
      `${exam.title} шалгалтын вариантын мэдээлэл`,
      `<a class="btn btn-secondary" href="${routeLink("/exams/exam_id/variants/", { exam: exam.id })}">Буцах</a>`
    )}
    <div class="panel"><div class="panel-inner">
      <div class="form-grid three">
        <div class="field" style="grid-column:1 / span 2">
          <label>Вариантын нэр</label>
          <input id="variantName" class="input" value="${state.name}" />
          <div class="field-error" id="errVariantName"></div>
        </div>
        <div class="field">
          <label>Вариант код</label>
          <input id="variantCode" class="input" value="${state.code}" />
          <div class="field-error" id="errVariantCode"></div>
        </div>
        <div class="field">
          <label>Хүндрэл</label>
          <select id="variantDifficulty" class="select">
            <option value="easy" ${state.difficulty === "easy" ? "selected" : ""}>Хөнгөн</option>
            <option value="medium" ${state.difficulty === "medium" ? "selected" : ""}>Дунд</option>
            <option value="hard" ${state.difficulty === "hard" ? "selected" : ""}>Хүнд</option>
          </select>
        </div>
        <div class="field" style="grid-column:1 / -1">
          <label>Хуваарилах оюутнууд</label>
          <div class="cards-list two" id="studentCheckList"></div>
        </div>
      </div>
    </div></div>
    <div class="panel"><div class="panel-inner">
      <div class="inline-actions" style="justify-content:space-between">
        <h3 style="margin:0">Асуултын бүтэц</h3>
        <div class="inline-actions">
          <button class="btn btn-secondary" id="togglePreview">${preview ? "Засвар горим" : "Урьдчилан харах"}</button>
          <button class="btn btn-primary" id="addQuestion">Асуулт нэмэх</button>
        </div>
      </div>
      <div class="field-error" id="errVariantQuestions"></div>
      <div id="questionBuilderWrap" style="margin-top:10px"></div>
      <div class="action-row" style="margin-top:14px">
        <button class="btn btn-primary" id="saveVariantBtn">Хадгалах</button>
        <a class="btn btn-linkish" href="${routeLink("/exams/exam_id/variants/", { exam: exam.id })}">Цуцлах</a>
      </div>
    </div></div>
  `;

  function drawStudentChecks() {
    el("studentCheckList").innerHTML = students
      .slice(0, 6)
      .map((student) => {
        const checked = state.assigned.has(student.id);
        return `
          <label class="option-line">
            <input type="checkbox" data-student-check="${student.id}" ${checked ? "checked" : ""} />
            ${student.name}
          </label>
        `;
      })
      .join("");
  }

  function drawQuestions() {
    const totalScore = state.questions.reduce((sum, question) => sum + Number(question.score || 0), 0);
    el("questionBuilderWrap").innerHTML = `
      <div class="inline-actions" style="margin-bottom:8px">
        <span class="badge badge-outline">Нийт асуулт: ${state.questions.length}</span>
        <span class="badge badge-outline">Нийт оноо: ${totalScore}</span>
      </div>
      ${state.questions
        .map((question, index) => {
          if (preview) {
            return `
              <div class="question-item">
                <div class="question-header">
                  <div>
                    <div style="font-weight:700">Асуулт ${index + 1}</div>
                    <div class="mini-subtitle">${question.type} | ${question.score} оноо</div>
                  </div>
                </div>
                <div style="margin-top:8px;font-size:14px">${question.text || "<span class='mini-subtitle'>Текст оруулаагүй</span>"}</div>
                ${
                  question.type === "multiple_choice"
                    ? `<div class="question-options">${question.options
                        .map((option, i) => `<div class="option-line">${String.fromCharCode(65 + i)}. ${option || "..."}</div>`)
                        .join("")}</div>`
                    : ""
                }
                <div class="mini-subtitle" style="margin-top:8px">Зөв хариулт: ${question.correctAnswer || "-"}</div>
                <div class="mini-subtitle">Тайлбар: ${question.explanation || "-"}</div>
              </div>
            `;
          }

          return `
            <div class="question-item" data-question-index="${index}">
              <div class="question-header">
                <div style="font-weight:700">Асуулт ${index + 1}</div>
                <div class="question-controls">
                  <button class="btn btn-linkish" data-up="${index}">↑</button>
                  <button class="btn btn-linkish" data-down="${index}">↓</button>
                  <button class="btn btn-danger" data-remove="${index}">Устгах</button>
                </div>
              </div>
              <div class="form-grid three" style="margin-top:10px">
                <div class="field" style="grid-column:1 / span 2">
                  <label>Асуултын текст</label>
                  <textarea class="textarea" data-q-text="${index}">${question.text}</textarea>
                </div>
                <div class="field">
                  <label>Төрөл</label>
                  <select class="select" data-q-type="${index}">
                    <option value="multiple_choice" ${question.type === "multiple_choice" ? "selected" : ""}>Multiple choice</option>
                    <option value="true_false" ${question.type === "true_false" ? "selected" : ""}>True/False</option>
                    <option value="short_answer" ${question.type === "short_answer" ? "selected" : ""}>Short answer</option>
                  </select>
                  <label style="margin-top:6px">Оноо</label>
                  <input class="input" type="number" min="1" data-q-score="${index}" value="${question.score}" />
                </div>
              </div>
              ${
                question.type === "multiple_choice"
                  ? `<div class="question-options">
                      ${question.options
                        .map(
                          (option, i) =>
                            `<input class="input" data-q-option="${index}-${i}" placeholder="Сонголт ${String.fromCharCode(65 + i)}" value="${option}" />`
                        )
                        .join("")}
                    </div>`
                  : ""
              }
              <div class="form-grid two" style="margin-top:10px">
                <div class="field">
                  <label>Зөв хариулт</label>
                  <input class="input" data-q-answer="${index}" value="${question.correctAnswer}" />
                </div>
                <div class="field">
                  <label>Тайлбар</label>
                  <input class="input" data-q-expl="${index}" value="${question.explanation}" />
                </div>
              </div>
            </div>
          `;
        })
        .join("")}
    `;
  }

  function validate() {
    el("errVariantName").textContent = "";
    el("errVariantCode").textContent = "";
    el("errVariantQuestions").textContent = "";
    let ok = true;
    if (!el("variantName").value.trim()) {
      el("errVariantName").textContent = "Вариантын нэр заавал оруулна.";
      ok = false;
    }
    if (!el("variantCode").value.trim()) {
      el("errVariantCode").textContent = "Вариантын код оруулна.";
      ok = false;
    }
    if (!state.questions.length) {
      el("errVariantQuestions").textContent = "Дор хаяж 1 асуулт нэмнэ үү.";
      ok = false;
    }
    for (let i = 0; i < state.questions.length; i += 1) {
      const q = state.questions[i];
      if (!q.text.trim() || !String(q.correctAnswer || "").trim()) {
        el("errVariantQuestions").textContent = `${i + 1}-р асуултын мэдээлэл дутуу байна.`;
        ok = false;
        break;
      }
    }
    return ok;
  }

  function handleQuestionFieldChange(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    if (target.dataset.qText) {
      const idx = Number(target.dataset.qText);
      state.questions[idx].text = target.value;
    } else if (target.dataset.qType) {
      const idx = Number(target.dataset.qType);
      state.questions[idx].type = target.value;
      if (target.value !== "multiple_choice") {
        state.questions[idx].options = ["", "", "", ""];
      }
      drawQuestions();
    } else if (target.dataset.qScore) {
      const idx = Number(target.dataset.qScore);
      state.questions[idx].score = Number(target.value || 0);
    } else if (target.dataset.qOption) {
      const [idx, opt] = target.dataset.qOption.split("-").map(Number);
      state.questions[idx].options[opt] = target.value;
    } else if (target.dataset.qAnswer) {
      const idx = Number(target.dataset.qAnswer);
      state.questions[idx].correctAnswer = target.value;
    } else if (target.dataset.qExpl) {
      const idx = Number(target.dataset.qExpl);
      state.questions[idx].explanation = target.value;
    }
  }

  el("questionBuilderWrap").addEventListener("input", handleQuestionFieldChange);
  el("questionBuilderWrap").addEventListener("change", handleQuestionFieldChange);

  el("questionBuilderWrap").addEventListener("click", (event) => {
    const upBtn = event.target.closest("[data-up]");
    const downBtn = event.target.closest("[data-down]");
    const removeBtn = event.target.closest("[data-remove]");
    if (upBtn) {
      const idx = Number(upBtn.dataset.up);
      if (idx > 0) {
        const temp = state.questions[idx - 1];
        state.questions[idx - 1] = state.questions[idx];
        state.questions[idx] = temp;
        drawQuestions();
      }
    }
    if (downBtn) {
      const idx = Number(downBtn.dataset.down);
      if (idx < state.questions.length - 1) {
        const temp = state.questions[idx + 1];
        state.questions[idx + 1] = state.questions[idx];
        state.questions[idx] = temp;
        drawQuestions();
      }
    }
    if (removeBtn) {
      const idx = Number(removeBtn.dataset.remove);
      if (state.questions.length > 1) {
        state.questions.splice(idx, 1);
        drawQuestions();
      }
    }
  });

  el("studentCheckList").addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.dataset.studentCheck) {
      return;
    }
    const studentId = target.dataset.studentCheck;
    if (target.checked) {
      state.assigned.add(studentId);
    } else {
      state.assigned.delete(studentId);
    }
  });

  el("addQuestion").addEventListener("click", () => {
    state.questions.push(createQuestionDraft(state.questions.length + 1));
    drawQuestions();
  });

  el("togglePreview").addEventListener("click", () => {
    preview = !preview;
    el("togglePreview").textContent = preview ? "Засвар горим" : "Урьдчилан харах";
    drawQuestions();
  });

  el("saveVariantBtn").addEventListener("click", () => {
    state.name = el("variantName").value.trim();
    state.code = el("variantCode").value.trim();
    state.difficulty = el("variantDifficulty").value;
    if (!validate()) {
      showToast("Алдаа", "Талбаруудыг шалгаад дахин оролдоно уу.", true);
      return;
    }
    showToast("Амжилттай", mode === "edit" ? "Вариант шинэчлэгдлээ." : "Вариант амжилттай нэмэгдлээ.");
  });

  drawStudentChecks();
  drawQuestions();
}

function renderVariantDetail(ctx) {
  const exam = pickExam(ctx.examId);
  const variant = pickVariant(exam.id, ctx.variantId);
  let teacherPreview = false;
  const totalScore = variant.questions.reduce((sum, q) => sum + q.score, 0);

  el("app").innerHTML = `
    ${pageHeader(
      "Шалгалтын вариант харах",
      `${variant.name} | ${variant.code}`,
      `
        <button id="toggleTeacherPreview" class="btn btn-secondary">Teacher preview</button>
        <a class="btn btn-primary" href="${routeLink("/exams/exam_id/variants/id/edit/", { exam: exam.id, variant: variant.id })}">Засах</a>
      `
    )}
    <div class="grid grid-3">
      ${statCard("Асуултын тоо", variant.questions.length)}
      ${statCard("Нийт оноо", totalScore)}
      ${statCard("Тооцоолсон хугацаа", `${variant.estimatedDuration} мин`, DIFFICULTY_LABEL[variant.difficulty])}
    </div>
    <div id="variantQuestionWrap"></div>
  `;

  function draw() {
    el("variantQuestionWrap").innerHTML = variant.questions
      .map(
        (q, idx) => `
      <div class="question-item" style="margin-bottom:10px">
        <div class="question-header">
          <div style="font-weight:700">Асуулт ${idx + 1}: ${q.text}</div>
          <span class="badge badge-outline">${q.score} оноо</span>
        </div>
        ${
          q.options
            ? `<div class="question-options">${q.options
                .map((option) => `<div class="option-line">${option.text}</div>`)
                .join("")}</div>`
            : ""
        }
        ${
          teacherPreview
            ? `
              <div class="answer-box correct" style="margin-top:8px">Зөв хариулт: ${q.correctAnswer}</div>
              <div class="answer-box" style="margin-top:6px">Тайлбар: ${q.explanation}</div>
            `
            : `<div class="mini-subtitle" style="margin-top:8px">Зөв хариулт нууцлагдсан. Teacher preview-ээр харна уу.</div>`
        }
      </div>
    `
      )
      .join("");
  }

  el("toggleTeacherPreview").addEventListener("click", () => {
    teacherPreview = !teacherPreview;
    el("toggleTeacherPreview").textContent = teacherPreview ? "Хариулт нуух" : "Teacher preview";
    draw();
  });
  draw();
}

function renderStudentStart(ctx) {
  const exam = pickExam(ctx.examId);
  const student = pickStudent(ctx.studentId);
  const variant = variants.find((v) => v.examId === exam.id && v.assignedStudentIds.includes(student.id)) || variants[0];

  el("app").innerHTML = `
    ${pageHeader(
      "Шалгалт эхлүүлэх",
      "Оюутны мэдээлэл болон дүрэмтэй танилцаад шалгалтаа эхлүүлнэ үү.",
      ""
    )}
    <div class="grid grid-2">
      <div class="panel"><div class="panel-inner">
        <h3 style="margin-top:0">Оюутны мэдээлэл</h3>
        <div class="inline-actions">
          <div class="brand-mark">${student.avatar}</div>
          <div>
            <div style="font-weight:700">${student.name}</div>
            <div class="mini-subtitle">${student.code}</div>
          </div>
        </div>
        <div class="mini-card" style="margin-top:10px">
          <div class="mini-subtitle">Мэргэжил: ${student.major}</div>
          <div class="mini-subtitle">Курс: ${student.year}</div>
          <div class="mini-subtitle">Имэйл: ${student.email}</div>
        </div>
      </div></div>
      <div class="panel"><div class="panel-inner">
        <h3 style="margin-top:0">Шалгалтын хураангуй</h3>
        <div class="inline-actions">
          <span class="badge badge-outline">${variant.code}</span>
          <span class="badge badge-outline">${variant.questions.length} асуулт</span>
          <span class="badge badge-outline">${exam.totalScore} оноо</span>
        </div>
        <div class="mini-card" style="margin-top:10px">
          <div class="mini-subtitle">Хугацаа: ${exam.duration} минут</div>
          <div class="mini-subtitle" style="margin-top:6px">${exam.instructions}</div>
        </div>
        <div class="danger-zone" style="margin-top:10px">
          <div style="font-weight:700">Анхааруулга</div>
          <div class="mini-subtitle">Шалгалтын үеэр таб солихгүй байх.</div>
          <div class="mini-subtitle">Хугацаа дуусахад автоматаар илгээгдэнэ.</div>
        </div>
        <div class="action-row" style="margin-top:12px">
          <button id="startExamBtn" class="btn btn-primary">Шалгалт эхлүүлэх</button>
        </div>
      </div></div>
    </div>
  `;

  el("startExamBtn").addEventListener("click", () => {
    openModal({
      title: "Шалгалт эхлүүлэх үү?",
      text: "Эхлүүлсний дараа таймер ажиллаж эхэлнэ. Та итгэлтэй байна уу?",
      confirmText: "Тийм, эхлүүлье",
      onConfirm: () => {
        window.location.href = routeLink("/exams/exam_id/students/student_id/edit/", {
          exam: exam.id,
          student: student.id
        });
      }
    });
  });
}

function renderStudentTaking(ctx) {
  const exam = pickExam(ctx.examId);
  const student = pickStudent(ctx.studentId);
  const variant =
    variants.find((v) => v.examId === exam.id && v.assignedStudentIds.includes(student.id)) ||
    variants.find((v) => v.examId === exam.id) ||
    variants[0];
  const state = {
    index: 0,
    layout: "single",
    answers: {},
    seconds: Math.min(exam.duration * 60, 25 * 60),
    submitted: false,
    autoSubmitted: false
  };

  el("app").innerHTML = `
    ${pageHeader("Шалгалт авах хэсэг", `${student.name} | ${exam.title} | ${variant.code}`, "")}
    <div class="panel"><div class="panel-inner">
      <div class="inline-actions" style="justify-content:space-between">
        <div>
          <div style="font-weight:700">${student.name}</div>
          <div class="mini-subtitle">${exam.title}</div>
        </div>
        <div class="timer">Үлдсэн хугацаа: <span id="countdownText">00:00</span></div>
      </div>
      <div class="progress-wrap">
        <div class="mini-subtitle" id="progressLabel">Явц: 0/${variant.questions.length}</div>
        <div class="progress-line"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
      </div>
      <div class="action-row" style="margin-top:10px">
        <button class="btn btn-secondary" id="layoutSingle">Нэг нэгээр</button>
        <button class="btn btn-secondary" id="layoutAll">Бүгдийг харах</button>
      </div>
      <div id="autoSubmitBanner" style="display:none" class="danger-zone">
        Хугацаа дууссан тул шалгалтыг автоматаар илгээлээ.
      </div>
    </div></div>
    <div class="grid" style="grid-template-columns:minmax(0,1fr) 280px;align-items:start" id="examTakingGrid">
      <div id="questionStage"></div>
      <div class="panel">
        <div class="panel-inner">
          <h3 style="margin:0 0 8px">Асуултын палитр</h3>
          <div class="palette" id="paletteWrap"></div>
          <div class="mini-subtitle" style="margin-top:8px">Ногоон: Хариулсан | Цагаан: Хариулаагүй</div>
          <div class="action-row" style="margin-top:12px">
            <button class="btn btn-secondary" id="saveAnswerBtn">Хариулт хадгалах</button>
            <button class="btn btn-primary" id="submitExamBtn">Илгээх</button>
          </div>
        </div>
      </div>
    </div>
  `;

  function answeredCount() {
    return variant.questions.filter((q) => (state.answers[q.id] || "").toString().trim()).length;
  }

  function updateProgress() {
    const done = answeredCount();
    const pct = Math.round((done / variant.questions.length) * 100);
    el("progressLabel").textContent = `Явц: ${done}/${variant.questions.length}`;
    el("progressFill").style.width = `${pct}%`;
  }

  function drawPalette() {
    el("paletteWrap").innerHTML = variant.questions
      .map((question, idx) => {
        const answered = (state.answers[question.id] || "").toString().trim().length > 0;
        const active = state.layout === "single" && idx === state.index;
        return `<button data-palette="${idx}" class="${answered ? "answered" : ""} ${active ? "active" : ""}">${idx + 1}</button>`;
      })
      .join("");
  }

  function renderSingleQuestion(question, idx) {
    return `
      <div class="question-item">
        <div class="question-header">
          <div style="font-weight:700">Асуулт ${idx + 1}: ${question.text}</div>
          <span class="badge badge-outline">${question.score} оноо</span>
        </div>
        <div class="question-options">
          ${renderAnswerInput(question)}
        </div>
      </div>
      <div class="action-row" style="margin-top:10px">
        <button class="btn btn-secondary" id="prevQuestionBtn" ${idx === 0 ? "disabled" : ""}>Өмнөх</button>
        <button class="btn btn-secondary" id="nextQuestionBtn" ${idx === variant.questions.length - 1 ? "disabled" : ""}>Дараах</button>
      </div>
    `;
  }

  function renderAnswerInput(question) {
    const saved = state.answers[question.id] || "";
    if (question.type === "multiple_choice") {
      return question.options
        .map(
          (option) => `
        <label class="option-line">
          <input type="radio" name="${question.id}" value="${option.id}" ${saved === option.id ? "checked" : ""} ${state.submitted ? "disabled" : ""} />
          ${option.text}
        </label>`
        )
        .join("");
    }
    if (question.type === "true_false") {
      return ["true", "false"]
        .map(
          (value) => `
        <label class="option-line">
          <input type="radio" name="${question.id}" value="${value}" ${saved === value ? "checked" : ""} ${state.submitted ? "disabled" : ""} />
          ${value === "true" ? "Үнэн" : "Худал"}
        </label>`
        )
        .join("");
    }
    return `<textarea class="textarea" data-short-answer="${question.id}" ${state.submitted ? "disabled" : ""}>${saved}</textarea>`;
  }

  function drawQuestionStage() {
    if (state.layout === "single") {
      const question = variant.questions[state.index];
      el("questionStage").innerHTML = renderSingleQuestion(question, state.index);
    } else {
      el("questionStage").innerHTML = variant.questions
        .map(
          (question, idx) => `
          <div class="question-item" style="margin-bottom:10px">
            <div class="question-header">
              <div style="font-weight:700">Асуулт ${idx + 1}: ${question.text}</div>
              <span class="badge badge-outline">${question.score} оноо</span>
            </div>
            <div class="question-options">${renderAnswerInput(question)}</div>
          </div>
        `
        )
        .join("");
    }
    bindQuestionEvents();
  }

  function bindQuestionEvents() {
    el("questionStage").querySelectorAll("input[type='radio']").forEach((node) => {
      node.addEventListener("change", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLInputElement)) {
          return;
        }
        state.answers[target.name] = target.value;
        updateProgress();
        drawPalette();
      });
    });
    el("questionStage").querySelectorAll("textarea[data-short-answer]").forEach((node) => {
      node.addEventListener("input", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLTextAreaElement)) {
          return;
        }
        const qid = target.dataset.shortAnswer;
        state.answers[qid] = target.value;
        updateProgress();
        drawPalette();
      });
    });
    const prevBtn = el("prevQuestionBtn");
    const nextBtn = el("nextQuestionBtn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        state.index = Math.max(0, state.index - 1);
        drawQuestionStage();
        drawPalette();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        state.index = Math.min(variant.questions.length - 1, state.index + 1);
        drawQuestionStage();
        drawPalette();
      });
    }
  }

  function submitExam(isAuto) {
    state.submitted = true;
    state.autoSubmitted = Boolean(isAuto);
    if (state.autoSubmitted) {
      el("autoSubmitBanner").style.display = "block";
      showToast("Автоматаар илгээгдлээ", "Хугацаа дууссан тул шалгалт автоматаар илгээгдсэн.");
    } else {
      showToast("Амжилттай", "Шалгалтын хариулт илгээгдлээ.");
    }
    drawQuestionStage();
  }

  function updateTimer() {
    const min = Math.floor(state.seconds / 60);
    const sec = state.seconds % 60;
    el("countdownText").textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  const timer = window.setInterval(() => {
    if (state.submitted) {
      return;
    }
    state.seconds -= 1;
    if (state.seconds <= 0) {
      state.seconds = 0;
      updateTimer();
      window.clearInterval(timer);
      submitExam(true);
      return;
    }
    updateTimer();
  }, 1000);
  pageCleanup = () => window.clearInterval(timer);

  el("layoutSingle").addEventListener("click", () => {
    state.layout = "single";
    drawQuestionStage();
    drawPalette();
  });
  el("layoutAll").addEventListener("click", () => {
    state.layout = "all";
    drawQuestionStage();
    drawPalette();
  });
  el("paletteWrap").addEventListener("click", (event) => {
    const target = event.target.closest("[data-palette]");
    if (!target) {
      return;
    }
    state.layout = "single";
    state.index = Number(target.dataset.palette);
    drawQuestionStage();
    drawPalette();
  });
  el("saveAnswerBtn").addEventListener("click", () => {
    showToast("Хадгалагдлаа", "Асуултын хариултууд түр хадгалагдлаа.");
  });
  el("submitExamBtn").addEventListener("click", () => {
    if (state.submitted) {
      window.location.href = routeLink("/exams/exam_id/students/student_id/result/", {
        exam: exam.id,
        student: student.id
      });
      return;
    }
    openModal({
      title: "Шалгалтыг илгээх үү?",
      text: "Илгээсний дараа хариултаа засах боломжгүй.",
      confirmText: "Тийм, илгээе",
      onConfirm: () => {
        submitExam(false);
        window.setTimeout(() => {
          window.location.href = routeLink("/exams/exam_id/students/student_id/result/", {
            exam: exam.id,
            student: student.id
          });
        }, 600);
      }
    });
  });

  updateTimer();
  updateProgress();
  drawQuestionStage();
  drawPalette();
}

function renderStudentCheck(ctx) {
  const exam = pickExam(ctx.examId);
  const student = pickStudent(ctx.studentId);
  const submission = submissions.find((s) => s.examId === exam.id && s.studentId === student.id);
  const variant =
    (submission && variants.find((v) => v.id === submission.variantId)) ||
    variants.find((v) => v.examId === exam.id) ||
    variants[0];

  el("app").innerHTML = `
    ${pageHeader("Шалгалтын зөв хариулт шалгах", `${student.name} | ${exam.title}`, "")}
    <div id="checkQuestionsWrap"></div>
  `;

  el("checkQuestionsWrap").innerHTML = variant.questions
    .map((question, idx) => {
      const suffix = question.id.split("-").pop();
      const answerItem = submission?.answers.find((a) => a.questionSuffix === suffix);
      const studentAnswer = answerItem ? answerItem.answer : "Хариулаагүй";
      const gotScore = answerItem ? answerItem.score : 0;
      const isCorrect = gotScore >= question.score - 1;
      return `
        <div class="question-item" style="margin-bottom:10px">
          <div class="question-header">
            <div style="font-weight:700">Асуулт ${idx + 1}: ${question.text}</div>
            <span class="badge badge-outline">${gotScore}/${question.score} оноо</span>
          </div>
          <div class="grid grid-2" style="margin-top:10px">
            <div class="answer-box ${isCorrect ? "correct" : "wrong"}">
              <div class="mini-subtitle">Оюутны хариулт</div>
              <div style="margin-top:4px">${studentAnswer}</div>
            </div>
            <div class="answer-box correct">
              <div class="mini-subtitle">Зөв хариулт</div>
              <div style="margin-top:4px">${question.correctAnswer}</div>
            </div>
          </div>
          <div class="answer-box" style="margin-top:8px">Тайлбар: ${question.explanation}</div>
          <div class="mini-subtitle" style="margin-top:6px;color:${isCorrect ? "#166534" : "#b91c1c"}">${isCorrect ? "Зөв" : "Буруу"}</div>
        </div>
      `;
    })
    .join("");
}

function renderStudentResult(ctx) {
  const exam = pickExam(ctx.examId);
  const student = pickStudent(ctx.studentId);
  const submission =
    submissions.find((s) => s.examId === exam.id && s.studentId === student.id) || submissions[0];
  el("app").innerHTML = `
    ${pageHeader(
      "Шалгалтын үр дүн",
      `${student.name} | ${exam.title}`,
      `
        <a class="btn btn-secondary" href="/exams/">Шалгалтууд руу буцах</a>
        <button class="btn btn-secondary" id="printResultBtn">Хэвлэх / Татах</button>
      `
    )}
    <div class="panel">
      <div class="panel-inner">
        <div class="grid grid-4">
          ${statCard("Нийт оноо", submission.totalScore)}
          ${statCard("Хувь", `${submission.percentage}%`)}
          ${statCard("Үсгэн үнэлгээ", submission.grade)}
          ${statCard("Төлөв", submission.passed ? "Тэнцсэн" : "Унасан")}
        </div>
      </div>
    </div>
    <div class="grid grid-2">
      ${barChart(
        "Гүйцэтгэлийн харьцуулалт",
        [
          { label: "Оноо", value: submission.totalScore },
          { label: "Хувь", value: submission.percentage },
          { label: "Босго", value: 60 }
        ],
        "blue"
      )}
      <div class="panel"><div class="panel-inner">
        <h3 style="margin-top:0">Хариулт шалгах</h3>
        <p class="mini-subtitle">Асуулт бүрийн зөв/буруу, тайлбар болон оноог харах.</p>
        <div class="action-row" style="margin-top:10px">
          <a class="btn btn-secondary" href="${routeLink("/exams/exam_id/students/student_id/check/", {
            exam: exam.id,
            student: student.id
          })}">Хариулт шалгах хэсэг</a>
        </div>
      </div></div>
    </div>
  `;
  el("printResultBtn").addEventListener("click", () => showToast("Mock үйлдэл", "Үр дүнгийн файл бэлтгэгдлээ."));
}

function renderPage() {
  if (pageCleanup) {
    pageCleanup();
    pageCleanup = null;
  }
  const ctx = getContext();
  const app = el("app");
  app.innerHTML = loadingSkeleton();
  window.setTimeout(() => {
    switch (ctx.page) {
      case "dashboard":
        renderDashboard();
        break;
      case "course-exams":
        renderCourseExams(ctx);
        break;
      case "create-exam":
        renderExamForm({
          initialExam: null,
          mode: "create",
          cancelHref: routeLink("/courses/course_id/exams/", { course: ctx.courseId }),
          defaultCourseId: ctx.courseId
        });
        break;
      case "global-exams":
        renderGlobalExams();
        break;
      case "exam-detail":
        renderExamDetail(ctx);
        break;
      case "exam-edit":
        renderExamEdit(ctx);
        break;
      case "exam-report":
        renderExamReport(ctx);
        break;
      case "variant-list":
        renderVariantsPage(ctx);
        break;
      case "variant-create":
        renderVariantFormPage(ctx, "create");
        break;
      case "variant-detail":
        renderVariantDetail(ctx);
        break;
      case "variant-edit":
        renderVariantFormPage(ctx, "edit");
        break;
      case "student-start":
        renderStudentStart(ctx);
        break;
      case "student-taking":
        renderStudentTaking(ctx);
        break;
      case "student-check":
        renderStudentCheck(ctx);
        break;
      case "student-result":
        renderStudentResult(ctx);
        break;
      default:
        renderDashboard();
    }
  }, 220);
}

window.addEventListener("DOMContentLoaded", () => {
  createShell();
  setActiveMenu();
  setBreadcrumbs();
  renderPage();
});
