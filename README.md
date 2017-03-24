# Jaden's Questillas

Have you ever wondered what questions Jaden Smith needs answering? Now there is an entire message board dedicated to it. With Jaden's questions and your answers, maybe Will Smith will finally get a good night's sleep.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

**Step 1**: Clone this repository to your local computer

```console
git clone [url]
```

**Step 2**: Install all development and production dependencies from the project root directory

```console
npm install
```
```console
bower install
```

**Step 3**: Use Ember to run a local server instance

```console
ember s
```

**Step 4**: Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Planning

1. Configuration/dependencies
  * Install **jQuery** and save as a dependency in bower.json for easier DOM manipulation
  ```console
  bower install jquery --save
  ```
  * Install **bootstrap** and save as a dependency in bower.json for easier styling
  ```console
  bower install bootstrap --save
  ```
  * Install **moment** and save as a dependency in bower.json for easier timestamps
  ```console
  bower install moment --save
  ```
  * Install **emberfire** and save as a dependency in package.json for firebase database interface
  ```console
  ember install emberfire
  ```

2. Specs
  * **Spec 1**: Users can navigate between main pages using links in navbar
  * **Spec 2**: Users can submit a question that contains a title, body content, authorship information. The question will be saved to the firebase database.
  * **Spec 3**: All questions can be viewed on the homepage with title, author, and first line visable
  * **Spec 4**: Users can click a question on the homepage in order to view full detail and all answers attached to the question
  * **Spec 5**: Users can respond to a question with an answer consisting of an answer, and authorship information
  * **Spec 6**: Answers will be saved in the firebase database with a one-to-many relationship to the question they match
  * **Spec 7**: Users can edit or delete answers and edit questions (but not delete, but questions are eternal)

3. Integration
  * `index` route which takes all `question`(s) as a model and lists them
    * `question-tile` component to display each individual question on `index` template
  * `new-question` route for question creation
    * `create-question` component consisting of `question` creation form which passes `params` up to `new-question`
  * `question` route with a path to individual questions by id, found by clicking a question on the `index` template
    * `question-detail` component to display all details of a question
    * `edit-question` component which can be accessed to update question information that passes `params` up to `question` route
    * `deleteQuestion` action on delete button on `question` route
    * `add-answer` component consisting of a form on the `question` route which allows users to answer the question and save it as related to that question
    * `answer-tile` component to display each answer
    * `edit-answer` component which can be toggled with `answer-tile` to edit answers
    * `deleteAnswer` action on delete button for each `answer-tile`
  * `application` template to add non-dynamic content to all pages (e.g. header, footer, etc.)

4. UX/UI
  * Include bootstrap
  * Develop custom style using sass integration
  * Time permitting: photoshop Jaden Smith logo for app

5. Polish
  * make any indentation fixes
  * make sure README is updated and lookin' great

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
