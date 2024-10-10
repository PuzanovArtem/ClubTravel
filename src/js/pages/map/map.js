export const map = () => {
const mapContainers = document.querySelectorAll('.contacts-map__container');

    const lazyLoadMap = (container) => {
      const iframe = document.createElement('iframe');
      iframe.src = container.getAttribute('data-src');
      iframe.style.border = '0';
      iframe.allowFullscreen = '';
      iframe.loading = 'lazy';
      iframe.className = 'contacts-map__frame';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      container.innerHTML = ''; 
      container.appendChild(iframe);
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lazyLoadMap(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    mapContainers.forEach(container => {
      observer.observe(container);
    });
}
