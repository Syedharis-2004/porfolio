import { NextResponse } from 'next/server';

export async function GET() {
  const donors = [
    { id: 1, name: "Ali Khan", bloodGroup: "O+", lastDonation: "2023-10-15", location: "Karachi" },
    { id: 2, name: "Sarah Ahmed", bloodGroup: "A-", lastDonation: "2024-01-20", location: "Lahore" },
    { id: 3, name: "John Doe", bloodGroup: "B+", lastDonation: "2023-11-05", location: "Islamabad" },
  ];

  return NextResponse.json({ success: true, donors });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would normally save to MongoDB/PostgreSQL
    // const newDonor = await db.donors.create(body);

    return NextResponse.json({ 
      success: true, 
      message: "Donor registered successfully",
      donor: { id: Math.floor(Math.random() * 1000), ...body }
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid data" }, { status: 400 });
  }
}
