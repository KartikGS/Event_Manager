# Event Manager
Update and view the latest events
* The server side of the project runs on Node.js environment and is set up using express framework. All the packages used are maintained using npm package manager.
* The client side of the project is rendered using the ejs view engine. The Frontend is designed using the bootstrap framework and utilizing various bootstrap components.
* The data is stored in the MongoDB Atlas Cloud Database. The mongoose package is used for server‑database communication. Client‑Server communication is done with the help of Javascript’s Fetch API
* Google Calender API used so that the events can be saved on users google calender
* Packages: Node.js, MongoDB atlas, Express, EJS, Mongoose, Multer, GoogleAPI.

## Database
MongoDB Atlas<br>
![Alt text](images/db.png "Title")<br>

## Home page
Most recent upcoming events visible<br>
![Alt text](images/home.png "Title")<br>
<br>
Events from Specific Committees<br>
![Alt text](images/committees.png "Title")<br>

## Sign-up page
![Alt text](images/su.png "Title")<br>
Successfull Sign-up<br>
![Alt text](images/sus.png "Title")<br>
![Alt text](images/susd.png "Title")<br>
Unsuccessfull Sign-up<br>
![Alt text](images/suu.png "Title")<br>
<br>
Other checks also in place for email, invalid input and injection attacks.

## Login page
![Alt text](images/login.png "Title")

## Event Creation
![Alt text](images/add.png "Title")<br>
<br>
Sucessfull Creation<br>
![Alt text](images/adds.png "Title")
![Alt text](images/addsd.png "Title")
![Alt text](images/addsh1.png "Title")
![Alt text](images/addsh2.png "Title")<br>
<br>
Event can be added to Google Calender<br>
![Alt text](images/addc.png "Title")
![Alt text](images/addcs.png "Title")
![Alt text](images/addcsc.png "Title")

## Update User Information
![Alt text](images/u.png "Title")
![Alt text](images/us.png "Title")<br>
<br>
Following form is loaded<br>
![Alt text](images/usc.png "Title")
![Alt text](images/uscs.png "Title")
![Alt text](images/uscsd.png "Title")

## Future Scope
* Adding a client-side rendering feature using framework like React, instead of Server-side rendering using EJS
* Increasing ease of use by adding featurs like one click registration and importing student info from college database 