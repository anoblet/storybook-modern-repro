import { customElement, html, LitElement } from 'lit-element';

@customElement('sample-header')
export class SampleHeaderElement extends LitElement {
  render() {
    return html`
      <header>
        <h1>Sample Header</h1>
      </header>
    `;
  }
}
