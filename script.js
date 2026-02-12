const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

items.forEach((item) => observer.observe(item));

const steps = Array.from(document.querySelectorAll('[data-chat-step]'));
let chatIndex = -1;

if (steps.length > 0) {
  const resetChat = () => {
    steps.forEach((step) => step.classList.remove('active'));
    chatIndex = -1;
  };

  const runChatLoop = () => {
    chatIndex += 1;
    if (chatIndex >= steps.length) {
      setTimeout(() => {
        resetChat();
      }, 900);
      return;
    }
    steps[chatIndex].classList.add('active');
  };

  setInterval(runChatLoop, 1100);
  resetChat();
}
