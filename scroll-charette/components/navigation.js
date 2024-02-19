class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
          <nav>
            <a href="index.html">Home</a>
            <a href="page1.html">Page 1</a>
            <a href="page2.html">Page 2</a>
            <a href="page3.html">Page 3</a>
            <a href="page4.html">Page 4</a>
            <a href="page5.html">Page 5</a>
            <a href="page6.html">Page 6</a>
            <a href="page7.html">Page 7</a>
            <a href="page8.html">Page 8</a>
            <a href="page9.html">Page 9</a>
            <a href="page10.html">Page 10</a>
            <a href="page11.html">Page 11</a>
            <a href="page12.html">Page 12</a>
            <a href="page13.html">Page 13</a>
            <a href="page14.html">Page 14</a>
            <a href="page15.html">Page 15</a>
            <a href="page16.html">Page 16</a>
            <a href="page17.html">Page 17</a>
            <a href="page18.html">Page 18</a>
            <a href="page19.html">Page 19</a>
            <a href="page20.html">Page 20</a>
            <a href="page21.html">Page 21</a>
            <a href="page22.html">Page 22</a>
            <a href="page23.html">Page 23</a>
            <a href="page24.html">Page 24</a>
            <a href="page25.html">Page 25</a>
          </nav>
        </header>
      `;
  }
}

customElements.define("header-component", Header);
