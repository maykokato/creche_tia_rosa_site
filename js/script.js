// Interações e textos em português/japonês — Creche Tia Rosa
const CONFIG = {
  whatsapp: "81538363225",
  whatsappMessage: "Olá! Gostaria de saber mais sobre a Creche Tia Rosa.",
  facebook: "https://www.facebook.com/search/top?q=Escola%20Objetivo%20de%20Iwata%20Tia%20Rosa",
  instagram: "https://www.instagram.com/explore/search/keyword/?q=Creche%20Tia%20Rosa%20Iwata"
};

const traducoes = {
  pt: {
    topStrip:"🇧🇷 Acolhimento brasileiro no Japão 🇯🇵", navFeatures:"Diferenciais", navRoutine:"Nossa rotina", navEvents:"Eventos", navCta:"Fale conosco",
    eyebrow:"Um lugar para crescer feliz", heroTitle1:"Infância feliz.", heroTitle2:"Aprendizado para a vida.", heroText:"Um ambiente acolhedor onde as crianças aprendem, brincam e crescem conectadas à cultura brasileira, vivendo no Japão.", heroButton:"Conheça a creche", heroButton2:"Descubra nossos diferenciais", heroNote:"Carinho, cuidado e descobertas todos os dias.",
    featuresKicker:"NOSSA ESSÊNCIA", featuresTitle1:"Um começo cheio de", featuresTitle2:"possibilidades.", featuresIntro:"Cada criança tem seu jeito de descobrir o mundo. Nosso papel é acompanhar essa jornada com carinho, segurança e alegria.",
    feature1Title:"Cultura e acolhimento", feature1Text:"Um espaço onde a língua, os costumes e a cultura brasileira fazem parte do dia a dia das crianças.", feature2Title:"Alimentação preparada com carinho", feature2Text:"Refeições e lanches preparados na cozinha da creche, com cuidado na rotina alimentar.", feature3Title:"Aprender fazendo", feature3Text:"Brincadeiras, atividades e experiências que estimulam a curiosidade, a convivência e a autonomia.",
    routineKicker:"DIA A DIA", routineTitle1:"Uma rotina que combina", routineTitle2:"cuidado e diversão.", routineText:"Entre brincadeiras, refeições, atividades e momentos de convivência, cada dia oferece novas oportunidades para aprender e criar laços.", routine1:"Brincadeiras e atividades educativas", routine2:"Convivência e desenvolvimento da autonomia", routine3:"Momentos de alimentação e descanso", routine4:"Contato com a cultura brasileira", routineLink:"Tire suas dúvidas",
    eventsKicker:"MEMÓRIAS ESPECIAIS", eventsTitle1:"Celebrar, brincar e", eventsTitle2:"compartilhar.", eventsIntro:"As datas especiais tornam a infância ainda mais colorida e aproximam as crianças das tradições brasileiras.",
    event1Kicker:"TRADIÇÃO BRASILEIRA", event1Title:"Festa Junina", event1Text:"Música, dança, brincadeiras e muita alegria.", event2Kicker:"EXPLORAR O MUNDO", event2Title:"Passeios", event2Text:"Novos lugares e descobertas em grupo.", event3Kicker:"ÉPOCA DE CELEBRAR", event3Title:"Natal", event3Text:"Momentos de união, música e lembranças.", event4Kicker:"APRENDER COM SEGURANÇA", event4Title:"Trânsito seguro", event4Text:"Orientações para circular com mais segurança.",
    contactKicker:"VAMOS CONVERSAR?", contactTitle1:"Venha conhecer a", contactTitle2:"Creche Tia Rosa!", contactText:"Entre em contato para tirar dúvidas e saber mais sobre nossa rotina. Será um prazer conversar com sua família.", contactButton:"Conversar pelo WhatsApp",
    addressLabel:"ENDEREÇO", phoneLabel:"TELEFONE", emailLabel:"E-MAIL", mapLink:"Ver no mapa ↗", callLink:"Ligar para a creche ↗", emailLink:"Enviar e-mail ↗", footerText:"Um lugar para crescer com carinho. ♥"
  },
  ja: {
    topStrip:"🇧🇷 ブラジルの温かさを日本で 🇯🇵", navFeatures:"園の特徴", navRoutine:"園での一日", navEvents:"イベント", navCta:"お問い合わせ",
    eyebrow:"笑顔で成長できる場所", heroTitle1:"笑顔いっぱいの幼少期。", heroTitle2:"未来につながる学び。", heroText:"ブラジルの文化を大切にしながら、日本で暮らす子どもたちが学び、遊び、成長できる温かい環境です。", heroButton:"園について知る", heroButton2:"園の特徴を見る", heroNote:"毎日、愛情と発見にあふれた時間を。",
    featuresKicker:"私たちの大切にしていること", featuresTitle1:"可能性に満ちた", featuresTitle2:"はじまり。", featuresIntro:"子どもたちは一人ひとり違う方法で世界を発見します。私たちは愛情と安心、そして喜びをもって成長を見守ります。",
    feature1Title:"文化と温かい保育", feature1Text:"ブラジルの言葉や習慣、文化を日々の生活の中で大切にしています。", feature2Title:"心を込めた食事", feature2Text:"園内のキッチンで食事やおやつを準備し、毎日の食生活を大切にしています。", feature3Title:"体験しながら学ぶ", feature3Text:"遊びやさまざまな活動を通して、好奇心、協調性、自立心を育みます。",
    routineKicker:"毎日の生活", routineTitle1:"毎日の生活に", routineTitle2:"安心と楽しさを。", routineText:"遊び、食事、活動、友だちとの時間。毎日が新しいことを学び、絆を育む機会になります。", routine1:"遊びと学びの活動", routine2:"友だちとの交流と自立心", routine3:"食事と休息の時間", routine4:"ブラジル文化に触れる機会", routineLink:"お問い合わせはこちら",
    eventsKicker:"大切な思い出", eventsTitle1:"祝い、遊び、", eventsTitle2:"分かち合う。", eventsIntro:"特別な行事は子どもたちの毎日をさらに彩り、ブラジルの伝統に親しむ機会になります。",
    event1Kicker:"ブラジルの伝統", event1Title:"フェスタ・ジュニーナ", event1Text:"音楽やダンス、遊びをみんなで楽しみます。", event2Kicker:"新しい発見", event2Title:"遠足", event2Text:"みんなで出かけ、新しい場所を発見します。", event3Kicker:"お祝いの季節", event3Title:"クリスマス", event3Text:"歌や音楽を楽しみ、思い出を作ります。", event4Kicker:"安全を学ぶ", event4Title:"交通安全", event4Text:"道路の歩き方や安全について学びます。",
    contactKicker:"お気軽にご相談ください", contactTitle1:"ぜひ一度", contactTitle2:"チアホーザ保育所へ！", contactText:"園の生活についてのご質問など、お気軽にお問い合わせください。ご家族とお話しできることを楽しみにしています。", contactButton:"WhatsAppで問い合わせる",
    addressLabel:"住所", phoneLabel:"電話番号", emailLabel:"メール", mapLink:"地図を見る ↗", callLink:"電話をかける ↗", emailLink:"メールを送る ↗", footerText:"愛情に包まれて成長できる場所。 ♥"
  }
};

function alterarIdioma(idioma) {
  const textos = traducoes[idioma];
  if (!textos) return;
  document.documentElement.lang = idioma === "pt" ? "pt-BR" : "ja";
  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const chave = elemento.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(textos, chave)) elemento.textContent = textos[chave];
  });
  document.querySelectorAll("[data-language]").forEach(botao => {
    const ativo = botao.dataset.language === idioma;
    botao.classList.toggle("active", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });
}

document.querySelectorAll("[data-language]").forEach(botao => {
  botao.addEventListener("click", () => alterarIdioma(botao.dataset.language));
});

const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
document.querySelectorAll('[data-social="whatsapp"], .floating-whatsapp, .contact-copy .button').forEach(link => link.href = whatsappUrl);
const facebookLink = document.querySelector('[data-social="facebook"]');
const instagramLink = document.querySelector('[data-social="instagram"]');
if (facebookLink) facebookLink.href = CONFIG.facebook;
if (instagramLink) instagramLink.href = CONFIG.instagram;

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const aberto = mainNav.classList.toggle("open");
    menuToggle.classList.toggle("active", aberto);
    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute("aria-label", aberto ? "メニューを閉じる" : "メニューを開く");
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

const elementosReveal = document.querySelectorAll(".reveal");
const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduzirMovimento) {
  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("is-visible");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  elementosReveal.forEach(elemento => {
    elemento.classList.add("motion-ready");
    observador.observe(elemento);
  });
}

const header = document.querySelector(".site-header");
const backToTop = document.getElementById("back-to-top");
function atualizarScroll() {
  const rolado = window.scrollY > 24;
  if (header) header.classList.toggle("scrolled", rolado);
  if (backToTop) backToTop.classList.toggle("show", window.scrollY > 450);
}
window.addEventListener("scroll", atualizarScroll, { passive: true });
atualizarScroll();
if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduzirMovimento ? "auto" : "smooth" }));
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Inicializa em português.
alterarIdioma("pt");
