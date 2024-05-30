"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";

const page = () => {
  const { id } = useParams;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!loading && !property) {
    return <div>No Propery Found</div>;
  }

  return (
    <>
      {!loading && property && (
        <PropertyHeaderImage image={property.images[0]} />
      )}
    </>

    // {!loading && property && (
    //     <PropertyHeaderImage image={property.images[0]}
    // )}
  );
};

export default page;
