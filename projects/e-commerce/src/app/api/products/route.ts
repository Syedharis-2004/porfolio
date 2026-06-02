import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.00, stock: 45, category: "Electronics" },
    { id: 2, name: "Mechanical Keyboard", price: 149.00, stock: 12, category: "Electronics" },
    { id: 3, name: "Running Shoes", price: 89.00, stock: 0, category: "Sports" },
  ];

  return NextResponse.json({ success: true, count: products.length, products });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // E-commerce logic: check stock, create order in DB, trigger Stripe/Payment Gateway
    // const order = await db.orders.create({ ...body });

    return NextResponse.json({ 
      success: true, 
      message: "Order placed successfully",
      orderId: `ORD-${Math.floor(Math.random() * 10000)}`,
      total: body.total
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Payment or Order failed" }, { status: 400 });
  }
}
