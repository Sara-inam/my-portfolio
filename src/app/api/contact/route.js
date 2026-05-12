import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const contact = await Contact.create(body);

    return Response.json({ success: true, data: contact });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}




export async function GET(req) {
  try {
    // 🔐 Token check
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return Response.json({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET);

    await dbConnect();

    // 📄 pagination params
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 5;

    const skip = (page - 1) * limit;

    // 📊 data + total count
    const total = await Contact.countDocuments();

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return Response.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Unauthorized or error",
    });
  }
}