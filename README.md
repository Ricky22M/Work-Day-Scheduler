# Work Day Scheduler

Have you ever wanted to plan out your work day? Well you're in luck because this application allows you, the user, to organize a schedule that is suitable for a 9 AM to 5 PM work schedule. How this application works is allowing the user to take down notes on certain hours of the day, which this application follows the user's date and time to fit their note-taking experience, and keeps track of what needs to be done throughout the day. An amazing feature that this application also has in store is saving the note-taking process and keeps the user's notes saved through the user's device so that no progress can be lost when getting off or refreshing the application.

![Video of the Work Day Scheduler working as intended](./Assets/Images/05-third-party-apis-homework-demo.gif)

## Direct Link to Deployed Page

https://ricky22m.github.io/Work-Day-Scheduler/

## Repository Link

[Link to  GitHub Repository](https://github.com/Ricky22M/Work-Day-Scheduler)

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Step One

```md
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
```

![Image of code enabling step one to work properly](./Assets/Images/Step-1-Code.png)
![Image of Webpage working alongside the acceptance criteria](./Assets/Images/Step-1-Webpage.png)

In these two images we are able to see that the current user date is being applied through the JavaScript onto the HTML using Moment.JS to get the user's current time and date.

## Step Two

```md
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
```

![The first image of two shows the code used to create time blocks](./Assets/Images/Step-2-Code(1%3A2).png)
![The second image of two shows the code used to create time blocks](./Assets/Images/Step-2-Code(2%3A2).png)
![This image shows the webpage following step two acceptance criteria](./Assets/Images/Step-2&3-Webpage.png)

In the first two images above, the code that is being provided in HTML is creating the time blocks that are shown onto to the webpage display. We are also able to see the kinds of classes within the different time blocks that are being used to create a quick, easy, and slick design with the use of bootstrap. Also keeping in mind that not all the classes within the divs are being used for CSS but also for JavaScript. Finally, the third image displays the effectiveness of bootstrap and how useful it can be by creating timeblocks within the body of the HTML.

## Step Three

```md
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
```

![Alt text](./posts/path/to/img.jpg)
![Alt text](./posts/path/to/img.jpg)

D

## Step Four

```md
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
```

![Alt text](./posts/path/to/img.jpg)
![Alt text](./posts/path/to/img.jpg)

D

## Step Fivw

```md
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
```

![Alt text](./posts/path/to/img.jpg)
![Alt text](./posts/path/to/img.jpg)

D

## Step Six

```md
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
```

![Alt text](./posts/path/to/img.jpg)
![Alt text](./posts/path/to/img.jpg)

D
