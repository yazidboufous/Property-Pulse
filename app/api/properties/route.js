import connectDB from "@/config/database";
import Property from "@/models/Property";

//GET /api/properties
export const GET = async (req) => {
  try {
    await connectDB();

    //Get the query params
    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", {
      status: 500,
    });
  }
};
