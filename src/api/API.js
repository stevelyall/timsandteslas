import TeslasDataService from './data/teslasDataService';

const API = {
    getTeslaSites: async function () {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(TeslasDataService.getTeslaSites())}, 500);
        })
    }
};

export default API