module.exports = function header() {
  return `
  <div class="brand-logo">
    <div>
      <svg role="img" aria-labelledby="brand-id" viewBox="0 0 406 157" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
        <style>.text { fill: #000000; } .dark-mode .text { fill: #00c815; }</style>
        <path role="presentation" d="M9.871 156.231v-24.383H.115v-3.869h25.163v3.869h-9.757v24.383h-5.65Z" class="text"/><path d="M31.91 127.979h5.65v28.252h-5.65z" class="text"/><path d="M47.228 156.231v-28.252h7.534l6.516 19.89 6.781-19.89h6.554v28.252h-5.198v-21.296l-6.668 19.42H58.19l-6.517-19.733v21.609h-4.445ZM84.25 156.231v-28.252h17.026v3.869H89.938v7.893h9.304v3.79h-9.304v8.675h12.205v4.025H84.25ZM127.02 156.231v-24.383h-9.756v-3.869h25.162v3.869h-9.756v24.383h-5.65ZM149.059 156.231v-28.252h10.208c5.538 0 8.287 2.345 8.287 7.034 0 1.719-.452 3.321-1.393 4.728-.942 1.446-2.223 2.54-3.88 3.321l8.89 13.169h-6.894l-6.742-11.528h-3.127v11.528h-5.349Zm5.349-15.435h1.318c4.106 0 6.14-1.719 6.14-5.158 0-2.501-1.808-3.79-5.499-3.79h-1.959v8.948Z" class="text"/><path d="M177.879 127.979h5.65v28.252h-5.65z" class="text"/><path d="m190.221 156.231 10.585-28.252h5.688l10.584 28.252h-5.801l-2.825-7.542h-11.263l-2.825 7.542h-4.143Zm8.362-11.293h8.476l-4.257-11.254-4.219 11.254ZM223.763 156.231v-28.252h5.688v24.227h12.242v4.025h-17.93ZM256.865 155.996v-4.845c2.938 1.25 5.424 1.876 7.534 1.876 1.431 0 2.599-.313 3.427-.977.829-.704 1.281-1.602 1.281-2.775 0-.898-.264-1.68-.791-2.305-.527-.625-1.544-1.368-3.013-2.227l-1.808-1.055c-2.449-1.446-4.182-2.814-5.199-4.103-.979-1.29-1.506-2.814-1.506-4.572 0-2.345.828-4.181 2.486-5.627 1.657-1.407 3.842-2.11 6.554-2.11 2.147 0 4.596.351 7.308.977v4.532c-2.75-1.094-4.973-1.641-6.592-1.641-1.243 0-2.26.313-3.014.899-.753.547-1.13 1.329-1.13 2.266 0 .782.264 1.446.791 2.032.528.586 1.545 1.329 2.976 2.149l1.959 1.134c2.637 1.524 4.445 2.93 5.424 4.22 1.017 1.289 1.507 2.852 1.507 4.689 0 2.618-.942 4.689-2.825 6.174-1.884 1.485-4.445 2.227-7.76 2.227-2.185 0-4.709-.312-7.609-.938ZM282.72 156.231v-28.252h17.026v3.869h-11.338v7.893h9.304v3.79h-9.304v8.675h12.205v4.025H282.72ZM308.173 156.231v-28.252h10.209c5.537 0 8.287 2.345 8.287 7.034 0 1.719-.452 3.321-1.394 4.728-.942 1.446-2.222 2.54-3.88 3.321l8.89 13.169h-6.893l-6.743-11.528h-3.127v11.528h-5.349Zm5.349-15.435h1.319c4.106 0 6.14-1.719 6.14-5.158 0-2.501-1.808-3.79-5.5-3.79h-1.959v8.948Z" class="text"/><path d="M336.993 127.979h5.65v28.252h-5.65z" class="text"/><path d="M352.311 156.231v-28.252h17.026v3.869h-11.338v7.893h9.304v3.79h-9.304v8.675h12.204v4.025h-17.892ZM376.257 155.996v-4.845c2.938 1.25 5.425 1.876 7.534 1.876 1.431 0 2.599-.313 3.428-.977.829-.704 1.281-1.602 1.281-2.775 0-.898-.264-1.68-.791-2.305-.528-.625-1.545-1.368-3.014-2.227l-1.808-1.055c-2.448-1.446-4.181-2.814-5.198-4.103-.98-1.29-1.507-2.814-1.507-4.572 0-2.345.829-4.181 2.486-5.627 1.658-1.407 3.842-2.11 6.554-2.11 2.148 0 4.596.351 7.308.977v4.532c-2.75-1.094-4.972-1.641-6.592-1.641-1.243 0-2.26.313-3.013.899-.754.547-1.13 1.329-1.13 2.266 0 .782.263 1.446.791 2.032.527.586 1.544 1.329 2.975 2.149l1.959 1.134c2.637 1.524 4.445 2.93 5.425 4.22 1.017 1.289 1.506 2.852 1.506 4.689 0 2.618-.941 4.689-2.825 6.174-1.883 1.485-4.445 2.227-7.76 2.227-2.184 0-4.708-.312-7.609-.938Z" class="text"/><path d="M397.959 61.236c-5.074-5.142-13.904-9.098-26.492-11.902l-13.604-3.038c-6.228-1.402-10.168-2.772-11.838-4.124-1.17-.954-1.754-2.186-1.754-3.722 0-1.802.788-3.272 2.356-4.408 2.102-1.486 5.14-2.236 9.096-2.236 4.076 0 7.196.716 9.384 2.136 2.168 1.418 3.654 3.556 4.442 6.394h33.216c-.682-3.606-1.598-6.744-2.752-9.434-1.154-2.686-2.754-5.324-4.808-7.914-2.07-2.6-4.742-4.906-8.016-6.908-3.284-2.006-7.692-3.622-13.236-4.874-5.524-1.236-11.632-1.856-18.294-1.856-5.576 0-11 .534-16.278 1.62-5.174 1.07-9.882 2.874-14.09 5.428 11.988 10.966 19.518 26.742 19.518 44.254 0 3.472-.302 6.86-.868 10.166.614.15 1.23.3 1.868.434l12.202 2.772c6.278 1.4 10.1 2.706 11.5 3.922 1.404 1.218 2.088 2.824 2.088 4.808 0 1.938-.75 3.456-2.27 4.542-2.054 1.436-5.442 2.152-10.15 2.152-5.394 0-9.38-.834-11.97-2.504-2.606-1.652-4.29-4.056-5.072-7.16h-.47a59.87 59.87 0 0 1-16.642 25.374c3.474 2.07 7.546 3.74 12.186 5.008 6.476 1.754 13.372 2.638 20.734 2.638 6.71 0 13.102-.77 19.18-2.27 6.062-1.518 11.018-3.556 14.842-6.126 3.82-2.572 7.042-6.078 9.664-10.518 2.622-4.442 3.924-9.364 3.924-14.79 0-6.762-2.538-12.724-7.596-17.864M85.771 109.353c-3.576-2.338-6.572-5.096-8.984-8.262-2.39-3.166-4.288-7.414-5.684-12.714-.868-3.368-1.288-8.574-1.288-15.584V57.317L42.431 87.291v23.092h45.032c-.572-.332-1.146-.662-1.692-1.03" style="fill:#00c815;"/><path d="M63.394 12.299 30.422 44.825l.006-33.508H0v99.066h30.428v-24.9l69.294-73.184H63.394ZM80.611 49.812l30.82-35.87v58.086c0 4.002.466 7.028 1.398 9.074.934 2.046 2.612 3.708 5.042 4.99 2.424 1.28 5.194 1.922 8.316 1.922 4.554 0 8.088-1.27 10.604-3.81 2.51-2.542 3.766-6.6 3.766-12.176v-26.68h30.82V68.86c0 7.192-.544 12.882-1.63 17.062-1.082 4.184-2.87 7.882-5.36 11.096-2.492 3.214-5.538 5.98-9.138 8.296-3.596 2.314-7.832 4.07-12.71 5.262-4.878 1.19-10.172 1.786-15.894 1.786-6.674 0-12.464-.606-17.36-1.822-4.9-1.214-9.134-2.99-12.714-5.328-3.576-2.336-6.566-5.092-8.972-8.262-2.404-3.168-4.298-7.408-5.69-12.714-.87-3.372-1.298-8.564-1.298-15.58V49.812Z" style="fill:#00c815;"/><path d="M235.801 33.294c-4.036-7.5-9.562-12.834-16.548-16.008-6.986-3.178-15.34-4.766-25.062-4.766h-53.89v24.36h49.22c5.722 0 9.942.638 12.674 1.874 1.938.86 3.59 2.29 4.954 4.258 1.364 1.968 2.416 4.54 3.178 7.688.732 3.142 1.08 6.478 1.08 9.972 0 5.782-.792 10.576-2.352 14.452-1.586 3.876-3.84 6.638-6.764 8.354-2.922 1.714-7.276 2.572-13.052 2.572l-7.784.066-.572.22c-.19 1.08-.378 2.098-.636 3.018-1.112 4.192-2.892 7.876-5.368 11.116-2.51 3.21-5.558 5.972-9.144 8.29a35.081 35.081 0 0 1-2.828 1.622h30.49c7.244 0 13.346-.668 18.326-1.972 4.954-1.332 8.994-3.08 12.074-5.208 3.112-2.128 5.966-5.048 8.636-8.734 2.636-3.684 4.858-8.418 6.672-14.168 1.842-5.746 2.73-12.258 2.73-19.564 0-10.768-1.998-19.914-6.034-27.442M321.178 15.408l-3.138 5.328a53.028 53.028 0 0 0-10.052-6.347l2.956-5.022 10.234 6.041ZM262.884 13.372a53.313 53.313 0 0 0-10.335 5.875l-3.256-5.291 10.12-6.228 3.471 5.644ZM290.059 9.248a54.491 54.491 0 0 0-11.884.05l-.07-9.18L289.995 0l.064 9.248ZM306.425 55.909l-16.808.16-5.418-15.97-5.056 16.064-16.804.156 13.684 9.77-5.092 16.166 13.564-10.088 13.818 9.836-5.386-16.078 13.498-10.016Z" style="fill:#00c815;"/><path d="M309.367 63.203c0-13.834-11.214-25.046-25.046-25.046-13.836 0-25.048 11.212-25.048 25.046s11.212 25.05 25.048 25.05c13.832 0 25.046-11.216 25.046-25.05m-25.046 49.248c-27.202 0-49.248-22.048-49.248-49.248s22.046-49.248 49.248-49.248c27.196 0 49.246 22.048 49.246 49.248s-22.05 49.248-49.246 49.248" style="fill:#00c815;"/>
        <title id="brand-id">Kudos Time Trial Series logo</title>
      </svg>
    </div>
  </div>
  <h1>Kudos Time Trial Series 2022</h1>
  <h2>Supported by <a href="https://www.bioracer.co.uk/en">Bioracer (UK)</a> <wbr>and <a href="https://www.cycle-space.co.uk/">Cycle-Space Disley</a></h2>
    `;
};
