const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(148, 163, 184, 0.14);
      border-radius: 26px;
      padding: 28px;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    :host(:hover) {
      transform: translateY(-4px);
      border-color: rgba(34, 197, 94, 0.5);
    }
    .icon {
      display: inline-flex;
      font-size: 2rem;
      margin-bottom: 18px;
    }
    h3 {
      margin: 0 0 12px;
      font-size: 1.45rem;
    }
    p {
      margin: 0;
      line-height: 1.75;
      color: #cbd5e1;
    }
  </style>
  <div class="icon">🏋️</div>
  <h3></h3>
  <p></p>
`;

class GymCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['title', 'description', 'icon'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Gym Class';
    const description = this.getAttribute('description') || '';
    const icon = this.getAttribute('icon') || '💪';

    this.shadowRoot.querySelector('h3').textContent = title;
    this.shadowRoot.querySelector('p').textContent = description;
    this.shadowRoot.querySelector('.icon').textContent = icon;
  }
}

customElements.define('gym-card', GymCard);
