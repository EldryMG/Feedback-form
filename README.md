# Project Name
weekend-redux-feedback-loop

## Description

This is my version of Prime Digital Academy's Daily Reflections Form.  This was the perfect opportunity to practice Routing through different pages, and using Redux Store to better move data around your app.

[x]-update README. ~15 mins, but ongoing.
[x]-Create the form components; "/feeling", "/understanding", "/support", "/comments" ~1 hour
[x]-Link together each blank page, importing from 'react-router-dom' HashRouter. ~45 mins, but these will likely need to be tweaked once data is being passed around.
[]-Complete Form on "/feeling", pass data to Redux.~1 hour
[]-Receive data from "/feeling".
[]-Repeat for "/understanding".

Aha moments: 
    -I did 2 different styles of the first page. The first was a form that had an input field that pushed the user input via 'event.target.value' into a useState pair.  on Submit, another function would be called that would use the useState value and dispatch it to Redux.

    The second method used the same input with event.target.value which would push to useState; the button onClick would call dispatch with the useState data to send to Redux; no second function needed.

    -console.log can be used inside a Reducer. I'm still using logger but at this stage I like to have eyes on data as much as possible.
