from fastapi import FastAPI, Response

app = FastAPI()

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
