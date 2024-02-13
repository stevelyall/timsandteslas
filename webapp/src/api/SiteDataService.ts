
import IDataSource from './IDataSource';

export default class SiteDataService {

    private dataSource: IDataSource;

    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    async getTeslaSites() {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(this.dataSource.getTeslaSites())}, 500);
        });
    }

    async getTimsSites() {
        return new Promise((resolve) => {
            setTimeout(() => {resolve(this.dataSource.getTimsSites())},500);
        });
    }

}