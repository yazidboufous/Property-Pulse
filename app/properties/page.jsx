import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

const PropertiesPage = async () => {
  const properties = await fetchProperties();
  console.log(properties);
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <h1> No Properties Found</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => {
              return <PropertyCard key={property._id} property={property} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;