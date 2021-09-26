# Project Name
weekend-redux-feedback-loop

## Description

This is my version of Prime Digital Academy's Daily Reflections Form.  This was the perfect opportunity to practice Routing through different pages, and using Redux Store to better move data around your app.

[x]-update README. ~15 mins, but ongoing.
[x]-Create the form components; "/feeling", "/understanding", "/support", "/comments" ~1 hour
[x]-Link together each blank page, importing from 'react-router-dom' HashRouter. ~45 mins, but these will likely need to be tweaked once data is being passed around.
[x]-Complete Form on "/feeling", pass data to Redux.~1 hour
[x]-Receive data from "/feeling".
[x]-Repeat for "/understanding".
[x] - test outputs and inputs into Redux.
[x] - Repeat for final 2 pages.
[x] - Display results on Review page.
[x] - Review page 'submit' button should;
       [] - Post data to server.
       [] - take user to Success page.
[x]  -Sucess page: Create button to retake survey.
    [x]- button should clear all fields from actualReducer.

[x] - small Material UI designs.


Aha moments: 
    - Was able to get 2 different combinations of new buttons, functions to create proper functionality.

    -the <form> didn't like my seperate button to change the page, added to the onSubmit function to history.push(/nextpage) instead.

    -console.log can be used inside a Reducer. I'm still using logger but at this stage I like to have eyes on data as much as possible.

    -the values are changing every time I dispatch another value in the reducer... I want to keep one reducer, though.

    - 

    
