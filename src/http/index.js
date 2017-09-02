import { generate as id } from 'shortid';

const asyncAwaitTime = 1000;
export const get = (url, cb) => {
    // simulate wait
    setTimeout(() => {
        cb(id());
    }, asyncAwaitTime);
}
