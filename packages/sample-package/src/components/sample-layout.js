import { customElement, html, LitElement } from 'lit-element';

@customElement('sample-layout')
export class SampleLayoutElement extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>
        <slot></slot>
      </div>
    `;
  }
}
