class BasicData {
  constructor(name, lv, job) {
    this._name = name;
    this._lv = lv;
    this._job = job;
  }

  set _name(value) {
    if (isNaN(value)) {
      this.name = value;
    } else {
      throw new Error(`이름 세팅 에러`);
    }
  }
  get _name() {
    return this.lv;
  }

  set _lv(value) {
    if (typeof value === `number`) {
      this.lv = value;
    } else {
      throw new Error(`레벨 세팅 에러`);
    }
  }

  //   set _lv(value) {
  //     if (!isNaN(value)) {
  //       this.lv = value;
  //     } else {
  //       throw new Error(`레벨 세팅 에러`);
  //     }
  //   }

  get _lv() {
    return this.lv;
  }

  set _job(value) {
    if (isNaN(value)) {
      this.job = value;
    } else {
      throw new Error(`직업 세팅 에러`);
    }
  }
  get _job() {
    return this.job;
  }
}

const component = () => {
  const obj = new BasicData(`이종수`, 999, `어쌔신`);

  console.log(obj);

  const decision = () => {
    if (obj instanceof BasicData) {
      return `
                  <html>
                  </html>
                  `;
    } else {
      throw new Error(`검증되지 않은 객체임`);
    }
  };

  console.log(decision());
};

component();
