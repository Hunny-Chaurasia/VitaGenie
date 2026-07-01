from fastapi import FastAPI

# FastAPI ka instance create kar rahe hain
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello! Aapka FastAPI server successfully chal raha hai."}