class Logger {
    private static instance: Logger;

    private constructor() {
        console.log('Logger instance created');
    }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance   ;
    }

    log(message: string) {
        console.log(`[LOG]: ${message}`);
    }
}

export default Logger;
