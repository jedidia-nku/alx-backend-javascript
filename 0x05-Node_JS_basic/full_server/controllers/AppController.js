/**
 * Contains the miscellaneous route handlers.
 * @author Jedidia Nkunzumwami <https://github.com/jedidia-nku>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;