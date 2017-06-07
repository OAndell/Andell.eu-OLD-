from flask import Flask
from ftplib import FTP
app = Flask(__name__)

def get_all_images():
    print("hello")
    ftp = FTP('ftp.andell.eu')
    print(1)
    ftp.login("andell.eu", "birdie")
    ftp.cwd("Bilder")
    print(2)
    categories = ftp.nlst()
    categories.remove(".")
    categories.remove("..")
    out = open("out.txt", "w")
    for dir_ in categories:
        out.write(dir_+" ")
        ftp.cwd(dir_)
        for pic in ftp.nlst():
            if pic not in [".", ".."]:
                out.write("     "+ pic +" ")
        ftp.cwd("..")
    out.close()
    ftp.cwd("..")
    f = open("out.txt", "rb")

    ftp.storbinary("STOR bildernamn.txt",  f)




@app.route("/")
def hello():
    get_all_images()
    return "Hello World!"

if __name__ == "__main__":
    app.run()
