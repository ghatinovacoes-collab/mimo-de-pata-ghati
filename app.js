import { CONTACT } from './config.js';

const services = {
  banho: { name: 'Banho', title: 'Banho, do focinho às patinhas.', copy: 'Limpeza com produtos escolhidos para o tipo de pelo, seguida de secagem e escovação. Antes de começar, queremos saber como seu pet gosta de ser cuidado.', action: 'Conversar sobre banho' },
  tosa: { name: 'Tosa', title: 'Um corte com a cara dele.', copy: 'Aparo dos pelos com tesoura ou máquina, conforme o tipo de pelagem e o corte combinado. O tutor conta o que imagina, e o cuidado considera a condição do pelo.', action: 'Conversar sobre tosa' },
  higienica: { name: 'Tosa higiênica', title: 'Pequenos detalhes, cuidado diário.', copy: 'Aparo em áreas específicas, como patinhas e região íntima, de acordo com as necessidades do animal. Ajuda a facilitar a higiene da rotina, sem substituir o acompanhamento veterinário.', action: 'Conversar sobre tosa higiênica' },
  hidratacao: { name: 'Hidratação dos pelos', title: 'Uma pausa para cuidar da pelagem.', copy: 'Aplicação de um produto cosmético adequado ao tipo de pelo, com atenção ao tempo de ação e ao enxágue. A escolha considera textura, condição da pelagem e sensibilidades informadas.', action: 'Conversar sobre hidratação' }
};

document.querySelectorAll('[data-ghati-wa]').forEach(link => {
  link.href = `${CONTACT.ghatiWhatsapp}?text=${encodeURIComponent(CONTACT.ghatiMessage)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelectorAll('[data-ghati-site]').forEach(link => { link.href = CONTACT.ghatiSite; link.target = '_blank'; link.rel = 'noopener noreferrer'; });
document.querySelectorAll('[data-ghati-email]').forEach(link => { link.href = `mailto:${CONTACT.ghatiEmail}`; });
document.getElementById('year').textContent = new Date().getFullYear();

const serviceButtons = document.querySelectorAll('[data-service]');
const serviceSelect = document.getElementById('servico');
function chooseService(key) {
  const service = services[key];
  if (!service) return;
  serviceButtons.forEach(button => { const active = button.dataset.service === key; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  document.getElementById('service-title').textContent = service.title;
  document.getElementById('service-copy').textContent = service.copy;
  const contact = document.getElementById('service-contact');
  contact.replaceChildren(document.createTextNode(`${service.action} `));
  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  arrow.classList.add('arrow-icon');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.setAttribute('focusable', 'false');
  arrow.setAttribute('viewBox', '0 0 24 24');
  const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  arrowPath.setAttribute('d', 'M7 17 17 7M7 7h10v10');
  arrow.append(arrowPath);
  contact.append(arrow);
  serviceSelect.value = key;
}
serviceButtons.forEach(button => button.addEventListener('click', () => { chooseService(button.dataset.service); clearResult(); }));
serviceSelect.addEventListener('change', () => chooseService(serviceSelect.value));

const dialogs = document.querySelectorAll('dialog');
function openDialog(dialog) { dialog.showModal(); document.body.classList.add('modal-open'); }
dialogs.forEach(dialog => {
  dialog.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
});
const mobileMenu = document.getElementById('mobile-menu');
document.querySelector('.menu-toggle').addEventListener('click', () => openDialog(mobileMenu));
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mobileMenu.close()));
window.addEventListener('resize', () => { if (window.innerWidth > 800 && mobileMenu.open) mobileMenu.close(); });
const photoDialog = document.getElementById('photo-dialog');
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  const photo = document.getElementById('expanded-photo');
  photo.src = button.dataset.photo; photo.alt = button.querySelector('img').alt;
  document.getElementById('photo-dialog-caption').textContent = button.dataset.caption;
  openDialog(photoDialog);
}));
document.querySelector('.instagram-trigger').addEventListener('click', () => {
  if (CONTACT.instagram) { window.open(CONTACT.instagram, '_blank', 'noopener,noreferrer'); return; }
  openDialog(document.getElementById('instagram-dialog'));
});
document.querySelectorAll('[data-post]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-post]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.getElementById('post-caption').textContent = button.dataset.post;
}));

const form = document.getElementById('message-form');
const result = document.getElementById('message-result');
const message = document.getElementById('prepared-message');
const copyStatus = document.getElementById('copy-status');
function clearResult() { result.hidden = true; message.value = ''; copyStatus.textContent = ''; }
form.addEventListener('input', event => { if (event.target.setCustomValidity) event.target.setCustomValidity(''); event.target.removeAttribute('aria-invalid'); clearResult(); });
form.addEventListener('change', clearResult);
form.addEventListener('submit', event => {
  event.preventDefault();
  for (const id of ['tutor','pet']) {
    const input = document.getElementById(id);
    if (!input.value.trim()) { input.setCustomValidity('Preencha este nome, por favor.'); input.setAttribute('aria-invalid', 'true'); input.reportValidity(); return; }
  }
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  message.value = `Olá! Meu nome é ${data.get('tutor').trim()} e gostaria de saber mais sobre ${services[data.get('servico')].name.toLowerCase()} para ${data.get('pet').trim()}.\n\nEspécie: ${data.get('especie')}.\nPorte: ${data.get('porte')}.\n\nPodem me explicar como funciona o cuidado e como seria o orçamento?\n\nMensagem preparada no site demonstrativo Mimo de Pata. Nenhum agendamento foi realizado.`;
  result.hidden = false;
  message.focus({ preventScroll: true });
  result.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
});
document.getElementById('copy-message').addEventListener('click', async () => {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(message.value);
    copyStatus.textContent = 'Mensagem copiada. Nada foi enviado; você pode colar onde preferir.';
  } catch {
    message.focus(); message.select();
    copyStatus.textContent = 'Não foi possível copiar automaticamente. A mensagem está selecionada: use Ctrl+C ou a opção Copiar do seu celular.';
  }
});

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const floatingContact = document.querySelector('.floating-contact');
const protectedContent = [...document.querySelectorAll('main p, main h1, main h2, main h3, main a, main button, main summary, main input, main select, main textarea, main label')];
let floatingFrame = 0;
function positionFloatingContact() {
  if (floatingFrame) return;
  floatingFrame = requestAnimationFrame(() => {
    floatingFrame = 0;
    if (floatingContact.hidden) return;
    const area = floatingContact.getBoundingClientRect();
    const obscuresContent = protectedContent.some(element => {
      const r = element.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && r.left < area.right && r.right > area.left && r.top < area.bottom && r.bottom > area.top;
    });
    floatingContact.classList.toggle('obscured', obscuresContent);
  });
}
window.addEventListener('scroll', positionFloatingContact, { passive: true });
window.addEventListener('resize', positionFloatingContact);
positionFloatingContact();
if ('IntersectionObserver' in window) {
  const visibleSections = new Set();
  const floating = document.querySelector('.floating-contact');
  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) visibleSections.add(entry.target); else visibleSections.delete(entry.target); });
    floating.hidden = visibleSections.size > 0;
    positionFloatingContact();
  });
  contactObserver.observe(document.getElementById('contato'));
  contactObserver.observe(document.querySelector('.footer'));
}
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('motion-ready');
  reducedMotion.addEventListener('change', event => { if (event.matches) document.documentElement.classList.remove('motion-ready'); });
}
