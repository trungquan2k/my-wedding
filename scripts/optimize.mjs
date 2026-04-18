import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir = "./src/assets";
const files = fs.readdirSync(assetsDir);

for (const file of files) {
  if (file.toLowerCase().endsWith(".jpg") && file.startsWith("KENN")) {
    const input = path.join(assetsDir, file);
    const output = path.join(assetsDir, file.replace(".jpg", ".webp"));

    console.log(`Optimizing ${file}...`);
    sharp(input)
      .resize(2000, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log(`Finished ${file}`))
      .catch((err) => console.error(`Error ${file}:`, err));
  }
}
