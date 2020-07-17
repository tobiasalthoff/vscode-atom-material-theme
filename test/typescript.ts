
// Example -----------------------------

class Greeter {
  greeting = 'test';

  constructor(text) {
    this.greeting = text;
  }

  showGreeting() {
    return this.greeting;
  }
}

const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();

class SpecialGreeter extends Greeter {
  constructor() {
    super("Very special greetings");
  }
}


// Tests -----------------------------

declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }
  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}