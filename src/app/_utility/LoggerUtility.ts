export interface ILogger {
  Log();
}

export class LoggerBase implements ILogger {
  Log() {
    console.log("Logger Base");
  }
}

export class ConsoleLogger extends LoggerBase {
  Log() {
    console.log("Console Logger");
  }
}

export class FileLogger extends LoggerBase {
  Log() {
    console.log("File Logger");
  }
}

export class DBLogger extends LoggerBase {
  Log() {
    console.log("DB Logger");
  }
}
