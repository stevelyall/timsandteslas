import DataService from './data/dataService';

const API = {
    getTeslaSites: async function (bounds) {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(DataService.getTeslaSites(bounds))}, 500);
        });
    },

    getTimsSites: async function (bounds) {
        return new Promise((resolve) => {
            setTimeout(() => {resolve(DataService.getTimsSites(bounds))},500);
        });
    },
};

export default API