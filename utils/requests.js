const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
//for deployement

//fetch all properties
const fetchProperties = async () => {
  try {
    //when the domain (the env file) is not available yet
    if (!apiDomain) {
      return [];
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`
    );
    if (!response.ok) throw new Error("Failed to fetch Data");
    return await response.json();
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

//fetch a single properties
const fetchProperty = async (id) => {
  try {
    //when the domain (the env file) is not available yet
    if (!apiDomain) {
      return null;
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`
    );
    if (!response.ok) throw new Error("Failed to fetch Data");
    return await response.json();
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

const fetchAllDataProperties = async (id) => {
  try {
    //when the domain (the env file) is not available yet

    if (!apiDomain) {
      return null;
    }
    if (!response.ok) throw new Error("Failed to fetch Data");
  } catch (err) {
    console.err(err.msg);
    return;
  }
};

const fetchDataAnalytics = async (id) => {};
export { fetchProperties, fetchProperty };
