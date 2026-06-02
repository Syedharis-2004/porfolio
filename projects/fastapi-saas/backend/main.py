from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uuid

app = FastAPI(title="SaaS Backend API", description="Dockerized FastAPI Backend for SaaS Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    email: str
    name: str

class Subscription(BaseModel):
    plan_id: str

users_db = {}

@app.get("/")
def read_root():
    return {"status": "ok", "message": "FastAPI SaaS Backend is running!"}

@app.post("/api/users")
def create_user(user: User):
    user_id = str(uuid.uuid4())
    users_db[user_id] = {"id": user_id, "email": user.email, "name": user.name, "plan": "free"}
    return {"success": True, "user": users_db[user_id]}

@app.get("/api/users/{user_id}")
def get_user(user_id: str):
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    return {"success": True, "user": users_db[user_id]}

@app.post("/api/users/{user_id}/subscribe")
def subscribe(user_id: str, sub: Subscription):
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    users_db[user_id]["plan"] = sub.plan_id
    return {"success": True, "message": f"Successfully subscribed to {sub.plan_id}", "user": users_db[user_id]}
