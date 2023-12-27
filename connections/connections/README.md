### Milestone 1. Registration: 
- page with dedicated url: 5 points
- validation for _name_ and _email_ fields with error messages: 5 points
- validation for _password_ field with error messages: 5 points
- redirection to sign-in page after successful registration: 5 points
- toast messages with appropriate text are displayed if http-request fails or
  succeed: 10 points
- _Submit_ button is disabled if form is invalid. Also, it should be disabled after http error with
  type PrimaryDuplicationException until the user changes the field value: 10 points
- _Submit_ button is disabled (user cannot click it) and email field has error message of taken
  account if user type the same email address that he tried to send before and got an
  error PrimaryDuplicationException: 10 points
- _Submit_ button is disabled (user cannot click it) after clicking while http-request is in
  progress: 10 points

---
### Milestone 2. Login:
- default page for unauthorized user: 10 points
- validation for _email_ field with error messages: 5 points
- validation for _password_ field with error messages: 5 points
- redirection to the main page after successful authentication: 10 points
- toast messages with appropriate text are displayed if http-request fails or
  succeed: 10 points
- _Submit_ button is disabled (user cannot click it) if form is invalid. Also, it should be disabled
  after http error with type NotFoundException until the user changes email or password field
  value: 10 points
- _Submit_ button is disabled (user cannot click it) after clicking while http-request is in
  progress: 10 points
- token, uid and email value is saved in localStorage after successful sign in and used
  again in the following http-requests even after page reloading (it allows user to omit
  sign in again after page reloading): 10 points

---
### Milestone 3. Profile:
- user id, email, creation time, user name data of current user is displayed
  on the page: 30 points
- error message with appropriate text are displayed on the page if loading http-request fails
  (for instance, if internet connection is lost): 10 points

---
### Milestone 4. Profile updating:
- button _Edit_ makes name field editable: 10 points
- button _Cancel_ returns initial page state (static appearance): 5 points
- clicking the button _Save_ sends 1 http-request to save new data without the ability to click it
  again (along with _Cancel_ button) until process is end: 20 points
- buttons _Cancel_ and _Save_ are visible ony for editable form: 5 points
- button _Edit_ is visible only for static page: 5 points
- toast messages with appropriate text are displayed if http-request fails or
  succeed: 10 points

---
### Milestone 5. Logout:
- clicking on Logout button the http-request is sent
  with DELETE method: 10 points
- user is redirected to Sign-In page after successful logout process: 10 points
- all data in cookies, localStorage is deleted: 10 points
- toast messages] with appropriate text are displayed if http-request fails or
  succeed: 10 points

---
### Milestone 6. People & Groups:
#### Group section (left)

- the list of available groups is loaded if user opens this page first time: 5 points
- the list item created by current user should contain _Delete_ button: 10 points
- the confirmation modal appears after clicking on _Delete_ button on list item with _Cancel_,
  _Delete_ button inside. If user clicks _Cancel_ the modal disappears. If user clicks _Delete_ the
  http-request is sent and item is removed from the list after succeeded response: 15 points
- clicking on _Update_ button sends corresponding http-request and update group
  list if succeeded: 10 points
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs): 10 points
- _Update_ button is disabled (user cannot click it) after clicking during updating and until the
timer is active: 5 points
- clicking on _Create_ button the modal window is opened. There is form with validation and
  submit button: 10 points
- submit button in modal window should be disabled (user cannot click it) until form
  is valid: 5 points
- clicking on submit button in modal window the appropriate http-request is sent to create new
  group. Modal window is closed only if http-request succeeded: 15 points
- toast messages with appropriate text are displayed if http-request fails or
  succeed: 10 points
- clicking on list item the user is redirected to group dialog page: 5 points

#### People list (right)

- the list of people is loaded if user opens this page first time: 10 points
- the list item with which current user already has active conversation has
  special background: 10 points
- clicking on _Update_ button sends corresponding http-request and update people list
  if succeeded: 10 points
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs): 10 points
- _Update_ button is disabled (user cannot click it) after clicking during updating and until the
  timer is active: 5 points
- clicking on list item the user is redirected to personal conversation page. New conversation (via
  certain http-request) is created if it has not already created before transition: 15 points

---
### Milestone 7. Group dialog:
- the page is protected by a guard only for authorized user: 5 points
- the error message is displayed if group with provided id does not exist: 10 points
- _Return back_ is a link, not a button: 5 points
- the full message history is loaded if user visit this page first time: 10 points
- only the last messages (using since parameter) are loaded if user opens this group conversation
  again: 20 points
- only the last messages (using since parameter) are loaded if user clicks on
  _Update_ button: 20 points
- messages in corresponding area are sorted by time. New messages are appended at
  the bottom: 5 points
- message item contains readable time, user name and text. Own messages are displayed on the right.
  Other messages are displayed on the left: 10 points
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs): 10 points
- _Update_ button is disabled (user cannot click it) after clicking during updating and until the
  timer is active: 5 points
- group is created by current user should contain _Delete_ button: 10 points
- the confirmation modal appears after clicking on _Delete_ button with _Cancel_,
  _Delete_ button inside. If user clicks _Cancel_ the modal disappears. If user clicks _Delete_ the
  http-request is sent and the user is redirected to main page after succeeded
  response: 10 points
- form field has required validator. _Send new message_ button is disabled (user cannot click it)
  until field has text: 5 points
- new messages are loaded (using since parameter) after successful sending
  new message: 15 points

---
### Milestone 8. Person conversation:
- the page is protected by a guard only for authorized user: 5 points
- the error message is displayed if conversation with provided id does not exist: 10 points
- _Return back_ is a link, not a button: 5 points
- the full message history is loaded if user visit this page first time: 10 points
- only the last messages (using since parameter) are loaded if user opens this group conversation
  again: 25 points
- only the last messages (using since parameter) are loaded if user clicks on
  _Update_ button: 25 points
- messages in corresponding area are sorted by time. New messages are appended at
  the bottom: 5 points
- message item contains readable time, user name and text. Own messages are displayed on the right.
  Other messages are displayed on the left: 10 points
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs): 10 points
- _Update_ button is disabled (user cannot click it) after clicking during updating and until the
  timer is active: 5 points
- the confirmation modal appears after clicking on _Delete_ button with _Cancel_,
  _Delete_ button inside. If user clicks _Cancel_ the modal disappears. If user clicks _Delete_ the
  http-request is sent and the user is redirected to main page after succeeded
  response: 10 points
- form field has required validator. _Send new message_ button is disabled (user cannot click it)
  until field has text: 5 points
- new messages are loaded (using since parameter) after successful sending
  new message: 15 points

---
### Milestone 9. 404 page:
- error message is displayed about wrong url/page: 30 points

---
### Milestone 10. Dark/Light theme:
- chosen state is saved in localStorage and used/applied after reloading. User can refresh the
  page and see the same theme: 20 points
- light/dark styles are applied to main page: 10 points
- light/dark styles are applied to group dialog page: 10 points
- light/dark styles are applied to personal conversation page: 10 points
