/**
 * The long description of the file's purpose goes here and
 * describes in detail the complete functionality of the file.
 * This description can span several lines and ends with a period.
 *
 * @summary   A short description of the file.
 *
 * http://usejsdoc.org/
 * @link      URL
 * @since     x.x.x (if available)
 * @requires javascriptlibrary.js
 * @class
 * @classdesc This is a description of the MyClass class.
 */
var helloWorldHeading = document.querySelector('h1');
helloWorldHeading.textContent = 'Hello world!';

escapes('assets/images/bbs.ans', function () {
          document.body.appendChild(this);
      });

/*
// https://sixteencolors.net/pack/blocktronics_there_will_be_blocks/Luciano-BBS_Doc.ans
escapes('https://sixteencolors.net/pack/blocktronics_there_will_be_blocks/Luciano-BBS_Doc.ans',
	function () {
          document.body.appendChild(this);
      });
     */
