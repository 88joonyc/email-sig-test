const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const { google } = require('googleapis');
const credentials = require('./credentials.json');
const scopes = ['https://www.googleapis.com/auth/drive'];

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(cors());
app.use(express.json());

const port = 8282;
app.listen(port, () => console.log(`listening on port ${port}`));

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);
const drive = google.drive({ version: 'v3', auth });

// app.get('/', (req, res) => {
//   res.sendStatus(200);
// });

function getFiles() {
  let filess = [];
  drive.files.list({ fields: 'files(name, webViewLink)' }, (err, res) => {
    if (err) throw err;
    const files = res.data.files;
    console.log(res);
    if (files.length) {
      files.map((file) => {
        filess.push(file);
      });
    } else {
      console.log('No files found');
    }
  });
  return filess;
}

app.get('/', (req, res) => {
  getFiles()
    .then((files) => res.json(files))
    .catch((err) => res.status(404).json(err));
});
