const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const generateBtn = document.getElementById('generateBtn');
const resultBox = document.getElementById('resultBox');
const copyBtn = document.getElementById('copyBtn');

generateBtn.addEventListener('click', () => {
  const name = document.getElementById('businessName').value.trim();
  const type = document.getElementById('productType').value;
  const audience = document.getElementById('audience').value.trim();
  const details = document.getElementById('details').value.trim();

  if (!name || !details) {
    resultBox.textContent = 'Please enter your business/product name and what makes it special.';
    copyBtn.hidden = true;
    return;
  }

  const offer = type === 'service' ? 'service' : type === 'event' ? 'offer' : 'product';
  const audienceLine = audience ? `Made for ${audience}. ` : '';
  const draft = `${name.toUpperCase()} — ${offer === 'offer' ? 'Something worth looking forward to!' : 'A smarter choice for you!'}\n\n${audienceLine}${details}\n\nInterested? Send us a message to learn more or place an order.\n\n#${name.replace(/[^a-z0-9]/gi, '')} #ShopSmall #DiscoverLocal`;

  resultBox.textContent = draft;
  copyBtn.hidden = false;
});

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(resultBox.textContent);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy draft', 1600);
  } catch {
    copyBtn.textContent = 'Select and copy the text above';
  }
});
