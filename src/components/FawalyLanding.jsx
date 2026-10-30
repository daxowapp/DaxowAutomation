'use client';

import { useState } from 'react';
import Link from 'next/link';
import FawalyReveal from './FawalyReveal';
import FawalyVideo from './FawalyVideo';

const copy = {
  en: {
    eyebrow: 'FAWALY BY DAXOW · YOUR AI CODING CREW',
    title: 'Save your best agent for the big thinking.', accent: 'Let the crew implement.',
    lead: 'Keep Claude Code or Codex in charge of planning and review. Fawaly connects lower-cost coding assistants to handle suitable implementation tasks using the plans and models you choose.',
    soon: 'Coming soon to the Mac App Store', guide: 'See the four setup steps', watch: 'Watch the 47-second tour',
    availability: 'Free app · macOS 14+ · Apple Silicon & Intel · Provider plans may cost extra',
    platforms: 'Not available for download yet. Windows and Linux are planned for later.',
    chips: ['One visible Mac app', 'Your order, models & permissions', 'Review before accepting work'],
    videoTitle: 'Meet your new crew.', videoCopy: 'A quick look at the app: connect assistants, choose their order and follow a task through execution and review.',
    videoNote: '47 seconds · with sound · English interface · illustrative product showcase, not proof of your connection or balance',
    videoLabel: 'Fawaly product showcase', videoError: 'The video could not load. Open it directly or read the walkthrough below.', videoLink: 'Open the showcase video',
    transcript: 'Read the video walkthrough',
    scenes: ['Your primary agent plans; connected assistants implement.', 'Choose an assistant and model, then set the team order.', 'Connect coding plans, explicitly permitted APIs or local tools.', 'Follow the active task and the assistant doing the work.', 'Your primary agent inspects the result and records its review.', 'Use a compact home screen, guided setup and Arabic or English.', 'Fawaly is coming soon to the Mac App Store; Windows and Linux are upcoming.'],
    flowEyebrow: 'STAY IN CLAUDE CODE OR CODEX', flowTitle: 'One request. A whole team behind it.',
    flow: [['You ask', 'Describe the outcome in your existing coding agent.'], ['Your agent plans', 'It sends a suitable, bounded implementation task through Fawaly.'], ['The crew implements', 'The next eligible available assistant works within the approved scope.'], ['Your agent reviews', 'It inspects the diff, reruns checks and records its verdict.']],
    teamEyebrow: 'YOUR PRIORITY ORDER ACTUALLY MATTERS', teamTitle: 'First assistant busy?\nLet the next one help.',
    teamCopy: 'Set the assistant, model and effort for simple, complex and large-context tasks. For independent work in separate workspaces, Fawaly can select the next eligible idle assistant instead of treating one busy worker as a busy team.',
    teamNote: 'An order change applies to new tasks. Conflicting workspaces or an entirely busy team wait or return a clear refusal. Paid fallback is never silently enabled.',
    teamExample: 'Illustrative routing example', busy: 'Busy on another task', next: 'Next eligible assistant', third: 'Next in your order',
    advisorEyebrow: 'NEW IN 0.4.0 · THE ADVISOR', advisorTitle: 'A second opinion before the big decisions.',
    advisorCopy: 'Your primary agent can talk a plan or a risky change through with a second model before it acts, by default one from another company: Claude Code asks Codex, or Codex asks Claude Code. The advisor only reads. It cannot edit files, run commands that change anything or start assistants, and the macOS sandbox enforces that.',
    advisorModes: [['Off', 'Fawaly refuses every consultation request.'], ['Only when I ask', 'The default. Your agent consults only when you say so, for example “ask the advisor”.'], ['Important decisions', 'Your agent may also consult on its own before a plan, a risky change or a disputed review.']],
    advisorNote: 'Discussions are bounded (three rounds by default) and every consultation is recorded with your agent’s decision: adopted, partly or rejected. The question and its context are sent to the advisor’s provider. A usage-billed advisor needs explicit permission for each request.',
    assistantsTitle: 'Bring a plan you already use.', assistantsCopy: 'Guided setup helps you choose the right coding-plan, API or local-tool connection. Start with one assistant; you do not need every service.',
    providersNote: 'Provider access, model availability and quota depend on your plan. A website chat subscription alone may not include coding or API access. New model suggestions only join your queue when you choose them. Claude Code and Codex use your own subscription through a separate Fawaly sign-in and never touch your main session.',
    setupEyebrow: 'A CLEAR FIRST RUN', setupTitle: 'Four steps to your first reviewed task.',
    steps: [['Connect your main agent', 'Review the tool connection and delegation instructions for Claude Code or Codex, then open a fresh agent session.'], ['Connect one assistant', 'Choose your service and plan. Follow guided sign-in or enter a key in the secure field, then check the connection.'], ['Choose who goes first', 'Pick the model, effort and order for each task type. Keep metered fallback off unless you explicitly want it.'], ['Try a small task', 'Ask your agent to delegate in a sample project. Match the task ID, assistant and model, then review the actual changes.']],
    setupNote: 'The app includes an optional card-by-card usage tour. You can also explore isolated Demo data without making real model calls.',
    proofTitle: 'How do I know Fawaly is working?', proofCopy: 'A connected badge is only the first check. Ask your agent to check Fawaly tools, delegate a small task, and show its task ID. The same assistant, model and task should appear in Tasks & reviews. Have the agent inspect the output and record a review. “Completed” means execution finished; it does not mean the work passed review.',
    faqTitle: 'A few things worth knowing.',
    faqs: [
      ['Does installation make every agent chat delegate automatically?', 'Complete the agent connection and approve the delegation instructions first. Start a fresh session and verify the tools. Fawaly chooses the assistant when your agent delegates; it does not guarantee delegation on every message.'],
      ['Does the app window have to stay open?', 'After setup, you can close the Fawaly interface. Its internal execution engine handles delegated work separately. Keep the coding-agent session open and your Mac awake and online during a task. Manage all settings from the single visible Fawaly app.'],
      ['How much will I save?', 'The aim is to preserve expensive-agent usage for planning and review by moving suitable implementation to lower-cost assistants. Savings vary by task and provider; no percentage is guaranteed. Main-agent briefing and review still consume usage.'],
      ['What permissions are needed?', 'Approve the connection and project scope you need. Keychain is used for provider keys; background activity may require macOS approval. Notifications are optional. Connecting assistants does not need Full Disk Access, screen recording or Accessibility control.'],
      ['Where does my code go?', 'Keys use macOS Keychain and work logs stay on your Mac. Instructions and code included in an authorized task may be sent to your selected provider. A local log does not mean local AI inference; local tools depend on their configured endpoint.'],
      ['Can I see balances and set limits?', 'Fawaly shows usage or quota where the provider supports it. An unavailable balance is not zero. Local limits can block future starts; they are not a provider-side billing reservation.']
    ],
    creditTitle: 'An idea worth crediting.', credit: 'Ahmed Nagdy created the original project idea and the name “Fawaly”. We built on and extended his idea to create a native Mac app at Daxow. Our sincere thanks to him for the idea and the name.',
    creditLink: 'Meet Ahmed Nagdy', sourceLink: 'Original delegate-skills project',
    closing: 'Your agent leads. Your crew gets to work.', closingCopy: 'Coming soon to the Mac App Store. Explore the setup guide while we prepare the release.', privacy: 'Privacy & data',
  },
  ar: {
    eyebrow: 'الفواعلي من داكسو · فريق مساعدي البرمجة',
    title: 'خلّي اشتراكك الغالي للشغل الكبير.', accent: 'والفواعلي ينفّذوا.',
    lead: 'خلّي Claude Code أو Codex مسؤول عن التخطيط والمراجعة، والفواعلي يوصّل له مساعدين أقل تكلفة ينفّذوا المهام المناسبة، بالاشتراكات والموديلات اللي تختارها.',
    soon: 'قريبًا على Mac App Store', guide: 'شوف خطوات البداية الأربع', watch: 'شوف الفكرة في ٤٧ ثانية',
    availability: 'التطبيق مجاني · macOS 14 أو أحدث · Apple Silicon وIntel · اشتراكات المساعدين قد تكون مدفوعة',
    platforms: 'مش متاح للتحميل حاليًا. نسخ Windows وLinux مخطط لها لاحقًا.',
    chips: ['تطبيق واحد ظاهر على الماك', 'ترتيبك وموديلاتك وصلاحياتك', 'مراجعة الشغل قبل قبوله'],
    videoTitle: 'اتعرّف على فريقك الجديد.', videoCopy: 'جولة سريعة في التطبيق: ربط المساعدين، وترتيب الفريق، ومتابعة المهمة من التنفيذ لحد المراجعة.',
    videoNote: '٤٧ ثانية · بصوت · واجهة إنجليزية · عرض توضيحي للمنتج، مش إثبات اتصال حسابك أو رصيدك',
    videoLabel: 'فيديو تعريفي بتطبيق الفواعلي', videoError: 'الفيديو مش قادر يحمّل. افتحه مباشرة أو اقرأ خطوات الجولة تحت.', videoLink: 'افتح الفيديو مباشرة',
    transcript: 'اقرأ شرح الجولة',
    scenes: ['وكيلك الرئيسي يخطّط، والمساعدين المتصلين ينفّذوا.', 'اختار المساعد والموديل، وحدّد ترتيب الفريق.', 'اربط خطة برمجة أو API بإذنك أو أدوات موديلات محلية.', 'تابع المهمة الجارية والمساعد اللي بينفّذها.', 'وكيلك الرئيسي يفحص النتيجة ويسجّل المراجعة.', 'رئيسية مختصرة وخطوات بداية واضحة بالعربي والإنجليزي.', 'الفواعلي قريبًا على متجر الماك، وWindows وLinux لاحقًا.'],
    flowEyebrow: 'كمّل من جوّه Claude Code أو Codex', flowTitle: 'طلب واحد، وراه فريق كامل.',
    flow: [['أنت تطلب', 'قول المطلوب في وكيل البرمجة اللي بتستخدمه.'], ['وكيلك يخطّط', 'يبعت مهمة تنفيذ مناسبة ومحددة للفواعلي.'], ['الفريق ينفّذ', 'المساعد المتاح والمؤهل يشتغل في نطاق الصلاحيات المتفق عليه.'], ['وكيلك يراجع', 'يفحص التغييرات، ويعيد الاختبارات، ويسجّل رأيه في النتيجة.']],
    teamEyebrow: 'ترتيب الفريق له دور حقيقي', teamTitle: 'الأول مشغول؟\nاللي بعده يساعد.',
    teamCopy: 'اختار المساعد والموديل ومستوى التفكير للمهام البسيطة والمعقدة واللي محتاجة سياق كبير. في الشغل المستقل بمجلدات منفصلة، الفواعلي يقدر يختار المساعد التالي المتاح، بدل ما يعتبر الفريق كله مشغول علشان واحد بيشتغل.',
    teamNote: 'تغيير الترتيب يطبّق على المهام الجديدة. لو المجلدات متعارضة أو كل الفريق مشغول، المهمة تنتظر أو ترجع برسالة واضحة. البديل المدفوع ما يتفعّلش من غير إذنك.',
    teamExample: 'مثال توضيحي لتوزيع الشغل', busy: 'مشغول بمهمة تانية', next: 'المساعد التالي المتاح', third: 'التالي حسب ترتيبك',
    advisorEyebrow: 'جديد في 0.4.0 · المستشار', advisorTitle: 'رأي تاني قبل القرارات الكبيرة.',
    advisorCopy: 'وكيلك الرئيسي يقدر يناقش خطة أو تغيير خطير مع موديل تاني قبل ما ينفّذ، والافتراضي يكون من شركة مختلفة: Claude Code يسأل Codex، أو Codex يسأل Claude Code. المستشار بيقرا بس؛ ما يقدرش يعدّل ملفات ولا يشغّل أوامر بتغيّر حاجة ولا يشغّل مساعدين، وحماية macOS بتفرض ده.',
    advisorModes: [['مقفول', 'الفواعلي يرفض أي طلب استشارة.'], ['لما أطلب بس', 'الافتراضي. وكيلك يستشير بس لما تقوله، مثلًا «اسأل المستشار».'], ['القرارات المهمة', 'كمان يقدر يستشير لوحده قبل خطة، أو تغيير خطير، أو لما يختلف مع مراجعة.']],
    advisorNote: 'النقاش محدود (٣ جولات افتراضيًا)، وكل استشارة بتتسجّل مع قرار وكيلك: اتاخد بيها، أو جزئيًا، أو اترفضت. السؤال وسياقه بيتبعتوا لمزوّد المستشار. المستشار المدفوع بالاستخدام محتاج إذن صريح لكل طلب.',
    assistantsTitle: 'ابدأ باشتراك بتستخدمه بالفعل.', assistantsCopy: 'خطوات الربط بتساعدك تختار الاتصال المناسب لخطة البرمجة أو API أو الأدوات المحلية. ابدأ بمساعد واحد؛ مش محتاج تشترك في كل الخدمات.',
    providersNote: 'توافر الاتصال والموديلات والرصيد حسب الباقة والمزوّد. اشتراك الدردشة على الموقع مش دايمًا يشمل البرمجة أو API. الموديلات الجديدة تظهر كاقتراحات، وما تدخلش الطابور إلا باختيارك. Claude Code وCodex بيشتغلوا باشتراكك من خلال تسجيل دخول منفصل للفواعلي، ومن غير ما يلمسوا جلستك الأساسية.',
    setupEyebrow: 'بداية واضحة من أول مرة', setupTitle: 'أربع خطوات لأول مهمة متراجعة.',
    steps: [['اربط الوكيل الرئيسي', 'راجع اتصال الأدوات وتعليمات التفويض لـClaude Code أو Codex، وبعد الموافقة افتح جلسة جديدة.'], ['اربط مساعد واحد', 'اختار الخدمة والباقة، واتبع تسجيل الدخول أو حط المفتاح في الحقل الآمن، وبعدها اختبر الاتصال.'], ['اختار مين الأول', 'حدّد الموديل ومستوى التفكير وترتيب الفريق لكل نوع مهمة. خلّي البديل المدفوع مقفول إلا لو اخترته بوضوح.'], ['جرّب مهمة صغيرة', 'اطلب من وكيلك التفويض في مشروع تجريبي، وطابق رقم المهمة والمساعد والموديل، وبعدها راجع التغييرات الفعلية.']],
    setupNote: 'جوه التطبيق مقدمة اختيارية بكروت تشرح الاستخدام خطوة بخطوة. وتقدر تستكشف وضع Demo ببيانات تجريبية منفصلة من غير تشغيل موديل حقيقي.',
    proofTitle: 'أعرف إزاي إن الفواعلي شغّال؟', proofCopy: 'علامة الاتصال أول فحص بس. اطلب من وكيلك يفحص أدوات الفواعلي ويفوّض مهمة صغيرة ويقول رقمها. نفس الرقم والمساعد والموديل لازم يظهروا في «المهام والمراجعات». خلّيه يفحص الناتج ويسجّل المراجعة. «اكتملت» معناها التنفيذ خلص، مش إن الشغل اتراجع واتقبل.',
    faqTitle: 'إجابات قبل ما تبدأ.',
    faqs: [
      ['بمجرد التثبيت، كل المحادثات هتستخدم الفواعلي تلقائيًا؟', 'كمّل ربط الوكيل ووافق على تعليمات التفويض الأول، وبعدها افتح جلسة جديدة واتأكد من ظهور الأدوات. لما وكيلك يفوّض، الفواعلي يختار المساعد حسب إعداداتك. وجود الأداة مش ضمان إن كل رسالة هتتفوض.'],
      ['لازم نافذة التطبيق تفضل مفتوحة؟', 'بعد التجهيز، تقدر تقفل واجهة الفواعلي. المحرك الداخلي بيتولى التنفيذ بشكل مستقل. أثناء المهمة، سيب جلسة وكيل البرمجة مفتوحة والماك صاحي ومتصل. كل الإعدادات من تطبيق الفواعلي الواحد الظاهر عندك.'],
      ['هوفّر قد إيه؟', 'الهدف تحافظ على استخدام الوكيل الغالي للتخطيط والمراجعة، وتنقل التنفيذ المناسب لمساعدين أقل تكلفة. التوفير بيختلف حسب المهمة والمزوّد؛ مفيش نسبة مضمونة. شرح المهمة ومراجعتها برضه بيستهلكوا من الوكيل الرئيسي.'],
      ['إيه الصلاحيات المطلوبة؟', 'وافق على الاتصال ونطاق المشروع اللي محتاجه. المفاتيح في Keychain، والتشغيل الخلفي ممكن يحتاج موافقة macOS. الإشعارات اختيارية. ربط المساعدين مش محتاج وصول كامل للقرص أو تسجيل الشاشة أو صلاحية التحكم في الجهاز.'],
      ['الكود بتاعي بيروح فين؟', 'المفاتيح في Keychain وسجل الشغل على الماك. تعليمات وكود المهمة اللي تسمح بيها ممكن يتبعتوا للمزوّد اللي تختاره. حفظ السجل محليًا مش معناه إن الموديل شغّال محليًا؛ الأدوات المحلية حسب عنوان الخدمة المتضبط فيها.'],
      ['أقدر أشوف الرصيد وأحط حدود؟', 'الفواعلي بيعرض الاستخدام أو الرصيد لما المزوّد يدعمه. الرصيد غير المتاح مش معناه صفر. الحدود المحلية ممكن تمنع بدء مهام جديدة، لكنها مش حجز أو سقف فوترة مضمون عند المزوّد.']
    ],
    creditTitle: 'شكر لصاحب الفكرة والاسم.', credit: 'أحمد نجدي هو صاحب الفكرة الأساسية للمشروع واسم «الفواعلي». أخذنا الفكرة وطوّرناها وأضفنا عليها في داكسو لتصبح تطبيقًا أصليًا للماك. كل الشكر والتقدير له على الفكرة والاسم.',
    creditLink: 'تعرّف على أحمد نجدي', sourceLink: 'مشروع delegate-skills الأصلي',
    closing: 'وكيلك يقود، والفواعلي ينفّذوا.', closingCopy: 'قريبًا على متجر أبل للماك. لحد الإصدار، شوف دليل البداية وطريقة الربط.', privacy: 'الخصوصية والبيانات',
  },
};

export default function FawalyLanding() {
  const [language, setLanguage] = useState('en');
  const c = copy[language];
  const arabic = language === 'ar';

  return <div lang={language} dir={arabic ? 'rtl' : 'ltr'} className="fw-landing">
    <div className="fw-wrap fw-language" aria-label="Page language / لغة الصفحة">
      <button type="button" lang="en" aria-pressed={!arabic} onClick={() => setLanguage('en')}>English</button>
      <button type="button" lang="ar" aria-pressed={arabic} onClick={() => setLanguage('ar')}>العربية</button>
    </div>
    <div className="fw-wrap fw-intro"><section className="fw-new-hero">
      <p className="fw-eyebrow">{c.eyebrow}</p><h1>{c.title}<br /><em>{c.accent}</em></h1><p className="fw-lead">{c.lead}</p>
      <div className="fw-actions"><span className="fw-soon">{c.soon}</span><a className="fw-outline" href="#showcase">{c.watch} ↓</a></div>
      <p className="fw-small">{c.availability}</p><p className="fw-small">{c.platforms}</p>
      <ul className="fw-chips">{c.chips.map(item => <li key={item}>{item}</li>)}</ul>
    </section>
    <section className="fw-showcase" id="showcase" aria-labelledby="showcase-title">
      <div className="fw-section-heading"><div><p className="fw-eyebrow">FAWALY / 00:47</p><h2 id="showcase-title">{c.videoTitle}</h2></div><p>{c.videoCopy}</p></div>
      <FawalyVideo label={c.videoLabel} error={c.videoError} link={c.videoLink} />
      <p className="fw-small">{c.videoNote}</p>
      <details className="fw-walkthrough"><summary>{c.transcript}</summary><ol>{c.scenes.map(scene => <li key={scene}>{scene}</li>)}</ol></details>
    </section></div>
    <section className="fw-wrap fw-section"><p className="fw-eyebrow">{c.flowEyebrow}</p><h2>{c.flowTitle}</h2><div className="fw-flow">{c.flow.map(([title, text], i) => <FawalyReveal key={i}><article><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></FawalyReveal>)}</div></section>
    <section className="fw-wrap fw-section fw-team"><div className="fw-split"><div><p className="fw-eyebrow">{c.teamEyebrow}</p><h2 className="fw-lines">{c.teamTitle}</h2><p>{c.teamCopy}</p><p className="fw-small">{c.teamNote}</p></div><div className="fw-routing" role="group" aria-label={c.teamExample}><p className="fw-small">{c.teamExample}</p>{[c.busy, c.next, c.third].map((text, i) => <div className={`fw-worker ${i === 1 ? 'fw-worker-next' : ''}`} key={i}><span className="fw-worker-number">0{i + 1}</span><span>{text}</span><span aria-hidden="true">{['◷', '→', '·'][i]}</span></div>)}<img src="/fawaly-assets/crew-shift.png" width="1376" height="1143" alt="" loading="lazy" /></div></div></section>
    <section className="fw-wrap fw-section fw-advisor" id="advisor"><p className="fw-eyebrow">{c.advisorEyebrow}</p><h2>{c.advisorTitle}</h2><p>{c.advisorCopy}</p><div className="fw-flow">{c.advisorModes.map(([title, text], i) => <FawalyReveal key={i}><article><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></FawalyReveal>)}</div><p className="fw-small fw-after-cards">{c.advisorNote}</p></section>
    <section className="fw-wrap fw-section fw-assistants"><h2>{c.assistantsTitle}</h2><p>{c.assistantsCopy}</p><ul className="fw-provider-list" dir="ltr">{['Claude Code · subscription', 'Codex · ChatGPT subscription', 'MiniMax · M Plan', 'Kimi Code', 'Z.ai · GLM', 'DeepSeek', 'Ollama', 'LM Studio'].map(name => <li key={name}>{name}</li>)}</ul><p className="fw-small">{c.providersNote}</p></section>
    <section className="fw-wrap fw-section" id="getting-started"><p className="fw-eyebrow">{c.setupEyebrow}</p><h2>{c.setupTitle}</h2><div className="fw-flow">{c.steps.map(([title, text], i) => <FawalyReveal key={i}><article><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></FawalyReveal>)}</div><p className="fw-small fw-after-cards">{c.setupNote}</p><Link className="fw-outline" href={arabic ? '/fawaly/support#arabic' : '/fawaly/support'}>{c.guide} →</Link></section>
    <section className="fw-wrap fw-section fw-proof"><p className="fw-eyebrow">FAWALY / CHECK</p><h2>{c.proofTitle}</h2><p>{c.proofCopy}</p></section>
    <section className="fw-wrap fw-section fw-faq"><h2>{c.faqTitle}</h2>{c.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <section className="fw-wrap fw-section fw-credit"><h2>{c.creditTitle}</h2><p>{c.credit}</p><div className="fw-credit-links"><a href="https://nagdy.me/">{c.creditLink} ↗</a><a href="https://github.com/amElnagdy/delegate-skills">{c.sourceLink} ↗</a></div></section>
    <section className="fw-wrap fw-section fw-install"><img src="/fawaly-assets/Fawaly-1024.png" width="82" height="82" alt="" /><div><h2>{c.closing}</h2><p>{c.closingCopy}</p><div className="fw-actions"><span className="fw-soon">{c.soon}</span><Link className="fw-outline" href="/fawaly/privacy">{c.privacy}</Link></div></div></section>
  </div>;
}
