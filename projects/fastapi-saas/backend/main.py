from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import uuid
from typing import Optional

app = FastAPI(
    title="FastAPI SaaS Platform",
    description="A high-performance, Dockerized SaaS backend powered by FastAPI & Pydantic.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── In-Memory "Database" ──────────────────────────────────────────────────────
users_db: dict = {}

PLANS = {
    "free":       {"name": "Free",       "price": 0,   "requests": 100,  "features": ["100 API calls/mo", "Community support", "1 project"]},
    "pro":        {"name": "Pro",        "price": 29,  "requests": 10000,"features": ["10K API calls/mo", "Priority support", "Unlimited projects", "Analytics"]},
    "enterprise": {"name": "Enterprise", "price": 99,  "requests": -1,   "features": ["Unlimited API calls", "24/7 SLA support", "Custom domain", "SSO", "Audit logs"]},
}

# ── Models ────────────────────────────────────────────────────────────────────
class UserCreate(BaseModel):
    email: str
    name: str

class Subscription(BaseModel):
    plan_id: str

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

# ── Routes ────────────────────────────────────────────────────────────────────
@app.get("/", tags=["Health"])
def health_check():
    return {
        "status": "ok",
        "message": "🚀 FastAPI SaaS Backend is live!",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/api/plans", tags=["Plans"])
def get_plans():
    """Returns all available subscription plans."""
    return {"success": True, "plans": PLANS}

@app.post("/api/users", tags=["Users"])
def create_user(user: UserCreate):
    """Register a new user and assign a free plan."""
    # Check for duplicate email
    for u in users_db.values():
        if u["email"] == user.email:
            raise HTTPException(status_code=400, detail="Email already registered.")
    user_id = str(uuid.uuid4())
    users_db[user_id] = {
        "id": user_id,
        "email": user.email,
        "name": user.name,
        "plan": "free",
        "api_key": f"sk-{str(uuid.uuid4()).replace('-', '')[:24]}"
    }
    return {"success": True, "user": users_db[user_id]}

@app.get("/api/users/{user_id}", tags=["Users"])
def get_user(user_id: str):
    """Fetch a user by their ID."""
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="User not found.")
    return {"success": True, "user": users_db[user_id]}

@app.get("/api/users", tags=["Users"])
def list_users():
    """List all registered users."""
    return {"success": True, "count": len(users_db), "users": list(users_db.values())}

@app.post("/api/users/{user_id}/subscribe", tags=["Subscriptions"])
def subscribe(user_id: str, sub: Subscription):
    """Upgrade or downgrade a user's subscription plan."""
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="User not found.")
    if sub.plan_id not in PLANS:
        raise HTTPException(status_code=400, detail=f"Invalid plan. Choose from: {list(PLANS.keys())}")
    users_db[user_id]["plan"] = sub.plan_id
    plan_info = PLANS[sub.plan_id]
    return {
        "success": True,
        "message": f"✅ Subscribed to {plan_info['name']} plan!",
        "user": users_db[user_id],
        "plan_details": plan_info
    }

@app.post("/api/contact", tags=["Support"])
def contact(msg: ContactMessage):
    """Submit a contact / support message."""
    return {
        "success": True,
        "message": f"Thanks {msg.name}! We'll get back to you at {msg.email} within 24 hours."
    }

@app.get("/api/stats", tags=["Admin"])
def stats():
    """Platform-level statistics."""
    plan_counts = {"free": 0, "pro": 0, "enterprise": 0}
    for u in users_db.values():
        plan_counts[u.get("plan", "free")] += 1
    return {
        "success": True,
        "stats": {
            "total_users": len(users_db),
            "plan_distribution": plan_counts,
        }
    }
