const express = require("express");
const multer = require("multer");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.static("./uploads"));

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
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

    if (!filedata) res.send("Ошибка при загрузке файла");
    else {
      // Сохраняем путь до изображения в файле db.json
      console.log("userId", userId);
      saveImageData(userId, filedata.filename);

      res.send(filedata.filename);
    }
  },
);

app.post(
  "/upload-avatar",
  multer({ storage: storageConfig }).single("filedata"),
  async function (req, res) {
    let filedata = req.file;
    let userId = req.query?.userId;

    if (!filedata) res.send("Ошибка при загрузке файла");
    else {
      // Сохраняем путь до изображения в файле db.json
      console.log("userId", userId);
      saveImageAvatar(userId, filedata.filename);

      res.send(filedata.filename);
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
  const newData = {
    ...data,
    users: data?.users?.map((user) => {
      if (user.id === Number(userId)) {
        return {
          ...user,
          imageUrl,
        };
      } else return user;
    }),
  };

  // Записываем обновленные данные обратно в файл
  fs.writeFileSync(dbFilePath, JSON.stringify(newData, null, 2), "utf8");
}

function saveImageAvatar(userId, avatarImageUrl) {
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
  const newData = {
    ...data,
    users: data?.users?.map((user) => {
      if (user.id === Number(userId)) {
        return {
          ...user,
          avatarImageUrl,
        };
      } else return user;
    }),
  };

  // Записываем обновленные данные обратно в файл
  fs.writeFileSync(dbFilePath, JSON.stringify(newData, null, 2), "utf8");
}

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
