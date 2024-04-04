import * as fs from 'fs';

enum LogLevel {
  INFO,
  WARNING,
  ERROR
}

class Logger {
  private logFile: string = 'logfile.txt';

  private getTimeStamp(): string {
    return `[${new Date().toISOString()}]`;
  }

  private logToFile(message: string): void {
    fs.appendFileSync(this.logFile, message + '\n');
  }

  private formatMessage(level: LogLevel, message: string): string {
    let prefix = '';
    switch (level) {
      case LogLevel.INFO:
        prefix = `[INFO]`;
        break;
      case LogLevel.WARNING:
        prefix = `[WARNING]`;
        break;
      case LogLevel.ERROR:
        prefix = `[ERROR]`;
        break;
      default:
        break;
    }
    return `${this.getTimeStamp()} ${prefix} ${message}`;
  }

  log(level: LogLevel, message: string): void {
    const logMessage = this.formatMessage(level, message);
    this.logToFile(logMessage);
  }

  info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  warn(message: string): void {
    this.log(LogLevel.WARNING, message);
  }

  error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }
}

const logger = new Logger();
export default logger;
