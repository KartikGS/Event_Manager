const express=require('express')

const multer = require('multer')
const event= require('../modules/events')
const fs1 = require('fs');

const router=express.Router();
const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

async function listEvents(auth) {
  const calendar = google.calendar({version: 'v3', auth});
  const event = {
    'summary': 'Google I/O 2015',
    'location': '800 Howard St., San Francisco, CA 94103',
    'description': 'A chance to hear more about Google\'s developer products.',
    'start': {
      'dateTime': '2022-10-31T09:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'end': {
      'dateTime': '2022-11-01T17:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
      {'email': 'lpage@example.com'},
      {'email': 'sbrin@example.com'},
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
      ],
    },
  };
  
  calendar.events.insert({
    auth: auth,
    calendarId: 'primary',
    resource: event,
  }, function(err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created: %s', event.htmlLink);
  });  
}

var Storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,'public/uploads')
  },
  filename: (req, file, cb)=>{
    cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname))
  }
})

var upload = multer({ storage: Storage });

router.post('/',upload.single('file'),(req,res)=>{
  const saveEvent = new event({
    title: req.body.title,
    venue: req.body.venue,
    start: req.body.start,
    end: req.body.end,
    img:{
      data: fs1.readFileSync('public/uploads/' + req.file.filename),
      contentType:"image/png"
    },
    club: req.body.club,
    desc: req.body.desc
  });
  saveEvent.save(err=>{
    if(err){
      res.send(err);
    }else{
      console.log('Event added')
      res.send({message : "Sucessfully Added Event"})
    }
  })
  //var success=req.file.filename+"uploaded successfully";
  //authorize().then(listEvents).catch(console.error);
  
});

router.get('/',(req,res)=>{
    res.render('add_event');
})

module.exports = router;