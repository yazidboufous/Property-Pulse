import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <div>
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox
              heading="For Renters"
              BackgroundColor="bg-gray-100"
              buttonInfo={{
                text: "Browse Properties",
                link: "/properites",
                BackgroundColor: "bg-black",
              }}
            >
              Find your dream rental property. Bookmark properties and contact
              owners.
            </InfoBox>
            <InfoBox
              heading="For Property Owners"
              BackgroundColor="bg-blue-100"
              buttonInfo={{
                text: "Add Property",
                link: "/properites/add",
                BackgroundColor: "bg-blue-500",
              }}
            >
              List your properties and reach potential tenants. Rent as an
              Airbnb or long term.
            </InfoBox>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoBoxes;
