// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const app = express();
// const cors = require("cors");

// app.use(cors());

// app.use(express.static("./uploads"));

// const storageConfig = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// app.post(
//   "/uploads",
//   multer({ storage: storageConfig }).single("filedata"),
//   async function (req, res) {
//     let filedata = req.file;
//     let userId = req.query?.userId;

//     if (!filedata) res.send("Ошибка при загрузке файла");
//     else {
//       // Сохраняем путь до изображения в файле db.json
//       console.log("userId", userId);
//       saveData(userId, "imageUrl", filedata.filename);
//       res.send(filedata.filename);
//     }
//   },
// );

// app.post(
//   "/upload-avatar",
//   multer({ storage: storageConfig }).single("filedata"),
//   async function (req, res) {
//     let filedata = req.file;
//     let userId = req.query?.userId;

//     if (!filedata) res.send("Ошибка при загрузке файла");
//     else {
//       // Сохраняем путь до изображения в файле db.json
//       console.log("userId", userId);
//       saveData(userId, "avatarImageUrl", filedata.filename);

//       res.send(filedata.filename);
//     }
//   },
// );

// app.post(
//   "/upload-photos-gallery",
//   multer({ storage: storageConfig }).single("filedata"),
//   async function (req, res) {
//     let filedata = req.file;
//     let userId = req.query?.userId;
//     let date = req.query?.date;

//     if (!filedata) res.send("Ошибка при загрузке файла");
//     else {
//       // Сохраняем путь до изображения в файле db.json
//       console.log("userId", userId);
//       saveData(userId, "gallery", [{ galleryUrl: filedata.filename, date }]);
//       res.send(filedata.filename);
//     }
//   },
// );

// function saveData(userId, propertyKey, propertyValue) {
//   const dbFilePath = "db.json";
//   let fileData = {};

//   try {
//     // Пытаемся прочитать существующие данные из файла
//     const existingData = fs.readFileSync(dbFilePath, "utf8");
//     fileData = JSON.parse(existingData);
//   } catch (error) {
//     // Если файл не существует или возникла ошибка при чтении, создаем пустой объект
//     fileData = {};
//   }

//   // Обновляем данные в объекте
//   fileData.users = fileData.users.map((user) => {
//     if (user.id === Number(userId)) {
//       let newValue = propertyValue;
//       if (Array.isArray(user[propertyKey]) && Array.isArray(propertyValue)) {
//         // Если свойство - это массив, добавляем новые данные к существующему массиву
//         newValue = [...user[propertyKey], ...propertyValue];
//       }

//       return {
//         ...user,
//         [propertyKey]: newValue,
//       };
//     } else {
//       return user;
//     }
//   });

//   // Записываем обновленные данные обратно в файл
//   fs.writeFileSync(dbFilePath, JSON.stringify(fileData, null, 2), "utf8");
// }

// app.listen(3003, () => {
//   console.log("Server is running on port 3003");
// });

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./public/db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

const PORT = process.env.PORT || 3003;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log("Server is running");
});
