from fastapi import FastAPI, Response, Request, Form
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/index.html")
def get_index_html():
    return Response(open("index.html").read(), media_type="text/html")

@app.get("/index.css")
def get_index_css():
    return Response(open("index.css").read(), media_type="text/css")

@app.get("/index.js")
def get_index_js():
    return Response(open("index.js").read(), media_type="application/javascript")

@app.get("/contests.json")
def get_contests_json() :
    return Response(open("contests.json").read(), media_type="application/json")

@app.post("/submit")
async def submit(request: Request):
    data = await request.json()
    contest = {
        "title": data["title"],
        "author": data["author"],
        "description": data["description"],
    }

    contest.update({"tags": [], "designs": 0, "days": 0})
    with open("contests.json", "r") as f:
        contests = json.load(f)

    contests.append(contest)

    with open("contests.json", "w") as f:
        json.dump(contests, f, indent=4)
    return
