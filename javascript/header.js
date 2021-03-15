class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          nav {
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background: linear-gradient(270deg, #745ECE 0%, rgba(105, 72, 237, 0.41) 47.4%, #5E63C8 82.29%);
;
          }
          
          img {
              margin-left:100px;
              width:100px;
              height:60px
          }
          
          a {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <header>
          <nav>
          <img src="https://s3-alpha-sig.figma.com/img/6f5a/7869/66731118b44c8d04a67c18e2a44cd84e?Expires=1616371200&Signature=CcPXoefIfkkzfY8Saqv44wBT1zJxp2pl~rPeQSA-YUdB0bqQVB9xgcHqvwYhnQzInWbcpH27~kncLl-d3Ft1NIgBpdEoAMmhiH1r0aoOTQwgXEv-MSF6ev-jw3ESGtWGhzq0yBt4j8DT4lynrUIL~Z-W2Q-2XFV0M6tPlMJn3PBfaTcQdt2XQHgEG3dF9rBOKuUPR-P~ka1djUe3adTIgX4kwPRWWiirDDvgZldhW-XRuKQRXiS49kLgYQ7mwmlw0y3pKXtSqOfPnKpeE5f03fRo8fv7JcNVqgRkjKfMQEm05PogcHt6Y6vqCzsWF08qZER42xKObIUFbSxX0D9mYw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" class="img-thumbnail" alt="holi">
          </nav>
        </header>
      `;
  }
}

customElements.define("header-component", Header);
