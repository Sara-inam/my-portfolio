import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  // simple hardcoded auth (later DB se kar sakti ho)
  if (email === "admin@gmail.com" && password === "admin") {
    
    const token = jwt.sign(
      { email, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return Response.json({ success: true, token });
  }

  return Response.json({
    success: false,
    message: "Invalid credentials",
  });
}