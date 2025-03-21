// import CryptoJS from 'crypto-js';

// // Encrypting function using AES
// const encryptLog = (logData, secretKey) => {
//     const encryptedData = CryptoJS.AES.encrypt(logData, secretKey).toString();
//     return encryptedData;
// };

// // Example log data
// const logData = 'Sensitive network activity log';

// // Encrypt the log
// const encryptedLog = encryptLog(logData, 'your-secret-key');

// Send encrypted log to server
// fetch('https://api.example.com/logs', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ log: encryptedLog }),
// })
//     .then(response => response.json())
//     .then(data => console.log('Log sent successfully'))
//     .catch(error => console.error('Error:', error));
