class Observable {
  constructor() {
    this.observers = [];
  }

  suscribe(c) {
    this.observers.push(c);
  }

  unsuscribe(c) {
    this.observers = this.suscribe.filter(
      observer => observer instanceof c !== true
    );
  }

  notify(model) {
    this.observers.forEach(observer => {
      observer.notify(model);
    });
  }
}

class NumberExample extends Observable {
  constructor() {
    super();
    this.value = 0;
  }

  increment() {
    this.value++;

    //llama a los suscriptores
    this.notify(this);
  }
}

// definir suscriptores
class NumberExampleSpanishConsole {
  notify(model) {
    console.log(`El nuevo numero es ${model.value}`);
  }
}
class NumberEnglishConsole {
  notify(model) {
    console.log(`The new number is ${model.value}`);
  }
}

// A suscribir
let numberExample = new NumberExample();
//sucribimos
numberExample.suscribe(new NumberExampleSpanishConsole());
numberExample.suscribe(new NumberEnglishConsole());

//Execute the increment
numberExample.increment();

