
## <b><span style="color:#F0ED86">A feedback form based on the one used at Prime Academy.</b>
<br />

---

#### <span style="color: #9ED2F0">_Duration: Two-Day Sprint_</span>
  
<br />
This is my version of Prime Digital Academy's Daily Reflections Form.  This was the perfect opportunity to practice Routing through different pages, and using Redux Store to better move data around your app. Although it wasn't the original intention, I was introduced to React Icons and MUI during the project; and I thought it'd be good practice to put some of those icons on the page..

<br />
  
---
  
## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. After cloning this repository, set up a PostgreSQL database called `prime_feedback` on port 5432. You might want to use [Postico](https://eggerapps.at/postico/) as a GUI to help this setup process.
2. Use the commands in the `data.sql` file in the root directory of the project to set up a table in the database with some dummy data.
3. Run `npm install` to install dependencies in this project.
4. Run `npm server start` to start the server, which will run on port 5000.
5. Run `npm client start` to start the client, which will run on port 3000.
6. Running the client should open up a browser window to `localhost:3000` where you can view and use the app. You can also manually type in this address in your browser.

## Usage
  
![Alttext](https://media2.giphy.com/media/yuNbS9vj4SnTEnM3XX/giphy.gif)

1. Navigating to `localhost:3000/` will start the feedback process. Select the rating that you would like to give for each of the three categories (feeling, understanding, and support) by entering a number between 1 and 5. Any number above or below will prompt an error message. 
2. Each of the three categories need to be given a rating. The "Submit" button will be disabled for each category until that category is given a rating.
3. You can always opt to change a rating or comments provided previously by navigating backward with the "Back" button.
4. Once all the categories have ratings and comments have optionally been provided, you will land on the review page, where you can review the feedback before final submission. From here, you can always navigate backward to adjust the feedback in any of the four categories.
5. You will not be able to submit the feedback if the first three categories have not been rated—in that case, the "Submit" button will be disabled.
6. After reviewing your feedback, select "Submit" to submit the feedback.
7. You will be taken to a screen notifying you that your feedback has been captured, and offering the chance to provide new feedback by selecting the "Retake Survey" button.
8. Admin users will have access to all the feedback by navigating to `localhost:3000/#/admin`.
9. Here, admin users can review all the feedback given in a table.
10. Admin users can toggle whether a post should be flagged by clicking on the "flag" icon in the "Flagged" column. A gray, empty flag will indicate that the feedback has not been flagged. When a post is flagged, the row will turn a dark red color.
11. Admin users can delete specific feedback by clicking on the "trash can" icon in the "Delete" column. A modal will appear to let the user know the post was deleted.

## Built With

1. [Node.js](https://nodejs.org/en/)
2. [Express](https://expressjs.com/)
3. [React](https://reactjs.org/)
4. [Redux](https://redux.js.org/)
5. [PostgreSQL](https://www.postgresql.org/)
6. [Material-UI](https://mui.com/)
7. [axios](https://www.npmjs.com/package/axios)
8. HTML
9. CSS

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.


  

##### _[My GitHub](https://github.com/franckbushbaum)_ 
##### _[My LinkedIn](https://www.linkedin.com/in/franck-bushbaum-482b16220/)_ 
