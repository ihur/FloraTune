from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="FloraTune API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "Welcome to FloraTune API"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/subscribe")
async def subscribe(email: str):
    # Mock subscription
    return {"status": "success", "message": f"Subscribed {email}"}
