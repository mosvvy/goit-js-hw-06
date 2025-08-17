class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value = this.#value.concat(str);
  }

  padStart(str) {
    this.#value = str.concat(this.#value);
  }

  padBoth(str) {
    // можна використати наявні функції (де вже можуть бути якість додаткові перевітки чи обробки), або написати заново:
    // this.#value = str.concat(this.#value.concat(str));
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
