// 主题切换
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = function() {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
};
// 自动主题适配
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
  themeBtn.textContent = '☀️';
}

// 语言切换
const langBtn = document.getElementById('lang-toggle');
const texts = {
  zh: {
    name: "你好，我是 DawnDot",
    role: "Web开发者 | 设计爱好者",
    about: "欢迎来到我的主页！",
    "skills-title": "技能",
    "portfolio-title": "作品展示",
    "work1-title": "作品1：个人博客",
    "work1-desc": "基于React���风格化博客系统",
    "work2-title": "作品2：图片画廊",
    "work2-desc": "响应式图片展示网站，支持暗/明主题",
    "view-source": "查看源码",
    "contact-title": "联系我",
    "form-name": "姓名",
    "form-email": "邮箱",
    "form-message": "留言内容",
    "form-submit": "发送",
  },
  en: {
    name: "Hi, I'm DawnDot",
    role: "Web Developer | Design Enthusiast",
    about: "Welcome to my homepage!",
    "skills-title": "Skills",
    "portfolio-title": "Portfolio",
    "work1-title": "Project 1: Blog",
    "work1-desc": "A stylized blogging system based on React",
    "work2-title": "Project 2: Gallery",
    "work2-desc": "Responsive image gallery website with dark/light theme",
    "view-source": "View Source",
    "contact-title": "Contact Me",
    "form-name": "Name",
    "form-email": "Email",
    "form-message": "Message",
    "form-submit": "Submit",
  }
};
function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-text]').forEach(el=>{
    const key = el.getAttribute('data-text');
    if (texts[lang][key]) el.textContent = texts[lang][key];
  });
  document.querySelectorAll('#contact-form input[name="name"]').forEach(el=>{
    el.placeholder = texts[lang]["form-name"];
  });
  document.querySelectorAll('#contact-form input[name="email"]').forEach(el=>{
    el.placeholder = texts[lang]["form-email"];
  });
  document.querySelectorAll('#contact-form textarea').forEach(el=>{
    el.placeholder = texts[lang]["form-message"];
  });
}
langBtn.onchange = () => applyLang(langBtn.value);
// 自动根据浏览器语言切换
const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
langBtn.value = browserLang;
applyLang(browserLang);

// 联系表单（静态邮件提示、真实环境建议用第三方如Formspree）
document.getElementById('contact-form').onsubmit = function(e) {
  e.preventDefault();
  alert(langBtn.value==='zh' ? "感谢您的留言！" : "Thank you for your message!");
  this.reset();
};
