from PIL import Image
import os

folder = "public/flavors"

for f in os.listdir(folder):
    if f.lower().endswith((".png",".jpg",".jpeg")):
        path = os.path.join(folder,f)

        img = Image.open(path)

        img.thumbnail((500,500))

        img.save(
            path,
            optimize=True
        )

print("Done")