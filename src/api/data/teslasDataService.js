import siteData from "./allSites.json";

const TeslasDataService = {
  getTeslaSites: function () {
    return siteData
      .filter(
        (site) => site.address.countryId === 101 && site.status === "OPEN"
      )
      .map((site) => {
        return {
          id: site.id,
          name: site.name,
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
};

export default TeslasDataService;
