export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';
export const TYPE_ERROR= 'error';
// viet tat
// export {default} from './logger' ;
// export {default as logger2} from './logger' ;

function logger(log, type=TYPE_LOG) {
    console[type](log);
}

export default logger;