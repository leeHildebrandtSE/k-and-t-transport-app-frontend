// Production logging utility
// Replace console.log with proper logging for production builds

interface LogLevel {
  DEBUG: 'debug';
  INFO: 'info';
  WARN: 'warn';
  ERROR: 'error';
}

const LOG_LEVELS: LogLevel = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

// Set to false in production
const IS_DEVELOPMENT = __DEV__;

class Logger {
  private shouldLog(level: keyof LogLevel): boolean {
    if (!IS_DEVELOPMENT) {
      // In production, only log warnings and errors
      return level === 'WARN' || level === 'ERROR';
    }
    return true;
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog('DEBUG')) {
      console.log(`🐛 [DEBUG] ${message}`, ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog('INFO')) {
      console.log(`ℹ️ [INFO] ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog('WARN')) {
      console.warn(`⚠️ [WARN] ${message}`, ...args);
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog('ERROR')) {
      console.error(`❌ [ERROR] ${message}`, ...args);
    }
  }

  // Navigation logging (only in development)
  navigation(action: string, destination: string): void {
    if (IS_DEVELOPMENT) {
      console.log(`🧭 [NAV] ${action} → ${destination}`);
    }
  }

  // User action logging (only in development)
  userAction(action: string, details?: any): void {
    if (IS_DEVELOPMENT) {
      console.log(`👤 [USER] ${action}`, details || '');
    }
  }
}

export const logger = new Logger();

// Convenience exports
export const logNavigation = logger.navigation.bind(logger);
export const logUserAction = logger.userAction.bind(logger);
export const logDebug = logger.debug.bind(logger);
export const logInfo = logger.info.bind(logger);
export const logWarn = logger.warn.bind(logger);
export const logError = logger.error.bind(logger);
