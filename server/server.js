const express = require("express");
const multer = require("multer");
const fs = require("fs");
const app = express();

app.use(express.static("./uploads"));

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

app.post(
  "/uploads",
  multer({ storage: storageConfig }).single("filedata"),
  async function (req, res) {
    let filedata = req.file;
    let userId = req.query?.userId;

    console.log(filedata);

    if (!filedata) res.send("Ошибка при загрузке файла");
    else {
      // Сохраняем путь до изображения в файле db.json
      console.log(userId);
      saveImageData(userId, filedata.filename);

      res.send(user);
    }
  },
);

// Функция для сохранения данных в файле db.json
function saveImageData(userId, imageUrl) {
  const dbFilePath = "db.json";
  let data = {};

  try {
    // Пытаемся прочитать существующие данные из файла
    const existingData = fs.readFileSync(dbFilePath, "utf8");
    data = JSON.parse(existingData);
  } catch (error) {
    // Если файл не существует или возникла ошибка при чтении, создаем пустой объект
    data = {};
  }

  // Обновляем данные в объекте
  data[userId] = imageUrl;

  // Записываем обновленные данные обратно в файл
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), "utf8");
}

app.listen(3003, () => {
  console.log("Server is running on port 6000");
});
