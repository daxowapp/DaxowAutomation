import Link from 'next/link';
export const metadata = { title: 'The internal execution engine', alternates: { canonical: 'https://daxow.com/fawaly/engine' } };

export default function EnginePage() {
  return <article className="fw-wrap fw-document"><p className="fw-eyebrow">ONE VISIBLE APP. AN INTERNAL ENGINE.</p><h1>The engine works behind Fawaly.</h1><p className="fw-lead">Fawaly is the single app you open to manage your coding crew. Its internal execution engine runs delegated work separately, so the interface does not need to stay open after setup.</p><a className="fw-button" href="/fawaly/download">Download for Mac</a><p className="fw-small">macOS 14+ · Apple Silicon & Intel</p>
    <h2>Setup stays inside Fawaly</h2><p>The direct Mac download includes the engine. Install Sudo Interns in Applications, connect your primary agent and a supported assistant, then try a small task and inspect the result.</p>
    <h2>Updates without disrupting work</h2><p>Wait until active tasks finish before replacing execution components. Preserve your local state and use the setup or recovery guidance inside Fawaly. Provider tools and subscriptions are separate; never disable Gatekeeper or other security protections.</p>
    <section lang="ar" dir="rtl"><h2>تطبيق واحد قدامك، والمحرك من جوّه</h2><p><a href="/fawaly/download">حمّل الفواعلي للماك</a>. المحرك موجود في نسخة الموقع، وكل التوصيلات والإعدادات من التطبيق.</p><p>بعد التجهيز تقدر تقفل الواجهة. أثناء المهمة سيب جلسة Claude Code أو Codex مفتوحة والماك صاحي ومتصل. استنى المهام الجارية تخلص قبل تحديث المحرك، وحافظ على بياناتك وإعداداتك.</p></section><Link href="/fawaly/support">Full setup and troubleshooting →</Link></article>;
}
