const links = document.querySelectorAll<HTMLAnchorElement>('header nav a[href^="#"]');
const sections = document.querySelectorAll<HTMLElement>('main section[id]');

function activate(id: string) {
  links.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

if ('IntersectionObserver' in window && sections.length > 0) {
  // a faixa central da viewport decide a seção ativa
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activate(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  sections.forEach((section) => observer.observe(section));
}
