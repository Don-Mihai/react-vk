const fetch = require('node-fetch');

// Замените 'YOUR_BOT_TOKEN' на ваш токен бота
const BOT_TOKEN = '6847252164:AAGDgDFEJdxEkjzhliq72OVTEtHFOrqOp24';

// Замените 'YOUR_CHAT_ID' на ID чата, в который вы хотите отправить сообщение
const CHAT_ID = '839884715';

// Функция для отправки сообщения
async function sendMessage(message) {
  const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
  const params = {
    chat_id: CHAT_ID,
    text: message,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
  }
}

module.exports = sendMessage;