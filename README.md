# Kanbanno Documentation

## Visit the Live App!

[Click me to try Kanbanno](https://kanbanno.herokuapp.com "Kanbanno")
![Kanbanno splash page](https://drive.google.com/uc?id=1CmE_6nU_QaqiZnbRnggLD57LEQoinbRS)

## Welcome to Kanbanno!

Kanbanno is a single page appplication modelled after [Trello](https://trello.com "Trello"). It implements the [kanban](https://en.wikipedia.org/wiki/Kanban "Kanban") system developed by engineers at Toyota, which presents an intuitive, board-based interface for teams to stay informed on the progression of their projects and quickly update the status of tasks.

## Technologies

* Backend: Ruby on Rails, PostgreSQL
* Frontend: React.js, Redux
* Hosting: Heroku
* Other libraries: 
  * [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) for drag-and-drop capability
  * [react-onclickoutside](https://github.com/Pomax/react-onclickoutside) for user interaction with menus
  * [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) for icons

## Features

### User Authentication

Visitors go through a simple, no-nonsense, yet visually appealing signup process designed to get them started with Kanbanno as soon as possible. 

User passwords are secured with bcrypt. Sessions are tracked by storing randomly generated session tokens in cookies.

### Boards, Lists, and Cards

Dashboard

![Kanbanno dashboard](https://drive.google.com/uc?id=1-Fz-O23mK93A4ImLUjHfgd3hOWbrQtux)

Upon login, users will see the a dashboard displaying all the boards that they can access. These boards are categorized as personal or shared.

### Drag-and-Drop*

\* Feature under construction

Users will be able to rearrange their lists and cards around a board by simply dragging them around, just like an actual bulletin board.

### Sharing*

\* Feature under construction

Boards can be shared with a team so everyone can stay informed about the progression of their project. Team members can interact with lists and cards just like the board's owner.

## Future Updates