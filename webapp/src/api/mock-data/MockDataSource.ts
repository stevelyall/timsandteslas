import teslaSiteData from "./allSites.json";
import timsSiteData from "./timsSitesMock.json";
import IDataSource from "./IDataSource.ts";

export class MockDataSource implements IDataSource {

  getTeslaSites() {
    return teslaSiteData
      .filter(
        (site) => site.address.countryId === 101 && site.status === "OPEN"
      )
      .map((site) => {
        return {
          id: site.id,
          name: "Tesla Supercharger - " + site.name,
          lat: site.gps.latitude,
          long: site.gps.longitude,
          power: site.powerKilowatt,
          stallCount: site.stallCount,
          address: {
            street: site.address.street,
            city: site.address.city,
            province: site.address.state,
            postalCode: site.address.zip,
          },
        };
      });
  }
  
  getTimsSites() {
    return timsSiteData.map((site) => {
      return {
        id: site.storeId,
        name: "Tim Hortons - " + site.physicalAddress.address1,
        hasDineIn: site.hasDineIn,
        hasDriveThru: site.hasDriveThru,
        lat: site.latitude,
        long: site.longitude,
        address: {
          street:
            site.physicalAddress.address1 + " " + site.physicalAddress.address2,
          city: site.physicalAddress.city,
          province: site.physicalAddress.stateProvince,
          postalCode: site.physicalAddress.postalCode,
        },
      };
    });
  }
}
