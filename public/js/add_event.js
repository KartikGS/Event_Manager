const CLIENT_ID = '';
const API_KEY = '';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar';
let tokenClient;
let gapiInited = false;
let gisInited = false;
document.getElementById('add').style.visibility = 'hidden';
function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}
async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  maybeEnableButtons();
}
function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
  maybeEnableButtons();
}
function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    document.getElementById('add').style.visibility = 'visible';
  }
}
 function handleAuthClick() {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      await listUpcomingEvents();
    };

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({prompt: ''});
    }
  }

  async function listUpcomingEvents() {
    const event = {
        'summary': document.getElementById('inputName4').value,
        'location': document.getElementById('inputPassword4').value,
        'description': document.getElementById('about').value,
        'start': {
          'dateTime': document.getElementById('dateOfBirth').value+':00+0530',
          'timeZone': 'Asia/Kolkata',
        },
        'end': {
          'dateTime': document.getElementById('inputNumber4').value+':59+0530',
          'timeZone': 'Asia/Kolkata',
        },
        'recurrence': [
          'RRULE:FREQ=DAILY;COUNT=1'
        ],
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
          ]
        }
      };
      
      const request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
      });
      
      request.execute(function(event) {
        document.getElementById('content').innerText='Event created: ' + event.htmlLink;
      });      
  }

  function sendtob(){
    const url = "http://localhost:5000/add_event";
const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify({
    a: 10,
    b: 20,
  }),
};
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
  }

const form = document.forms['submit-to-google-sheet']
const url = "http://localhost:5000/add_event";

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(url, { method: 'POST',body: new FormData(form)})
  .then((response) =>response.json())
  .then((data) => {
    alert(`${data.message}`);
  });
})