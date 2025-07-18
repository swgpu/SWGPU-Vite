import { UIWidget } from 'swgpu';
// ---------------------------------------------------------------------------------------

class UIDebug extends UIWidget {
  constructor() {
    super({
      className: 'UIDebug',
      template: `
      <div>
        <span class="UIDebug-enabled">Welcome on our Quick Starter.</br>Start from here and write your own game.<span>
      </div>`
    });
  }
}

export { UIDebug };