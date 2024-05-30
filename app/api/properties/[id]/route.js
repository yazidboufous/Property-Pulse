import connectDB from "@/config/database";
import Property from "@/models/Property";

//GET /api/properties/:id
export const GET = async (req, { params }) => {
  try {
    await connectDB();

    //Get the query params
    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Property Not found", { status: 404 });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", {
      status: 500,
    });
  }
};
