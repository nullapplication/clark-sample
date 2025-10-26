const logger = {
    info(...args: Array<any>) {
       console.log('INFO', ...args);
    },
    error(...args: Array<any>) {
       console.log('ERROR', ...args);
    },
 };
 
 export { logger };
 