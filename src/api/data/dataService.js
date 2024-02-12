import teslaSiteData from "./allSites.json";
import timsSiteData from "./timsSitesMock.json"

  // TODO test this
  function isSiteInBounds(siteLat, siteLong, bounds) {
    // return true
    const isInLongBounds = siteLong > bounds._southWest.long && siteLong < bounds._northEast.long;
    const isInLatBounds = siteLat < bounds._northEast.lat && siteLat > bounds._southWest.lat;
    return isInLongBounds && isInLatBounds;
  };

const DataService = {
  getTeslaSites: function () {
    // debugger;
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
  },

  getTimsSites: function () {
    return timsSiteData
      .map((site) => {
        return {
          id: site.storeId,
          name: "Tim Hortons - " + site.physicalAddress.address1,
          hasDineIn: site.hasDineIn,
          hasDriveThru: site.hasDriveThru,
          lat: site.latitude,
          long: site.longitude,
          address: {
            street: site.physicalAddress.address1 + ' ' + site.physicalAddress.address2,
            city: site.physicalAddress.city,
            province: site.physicalAddress.stateProvince,
            postalCode: site.physicalAddress.postalCode
          }
        }
    });
  }
};

export default DataService;
