#############################################################################################
# Project ListJS
#############################################################################################

ListJS is a simple javascript library that allows you to create lists of an 
element.

![alt tag](https://github.com/seanpo/ListJS/blob/master/img/example.PNG)

Usage is simple. For the above example, the following code is needed:

Javascript:

var listJS = ListJS($('#share-email'), $('#add-email'), $('#share-email-container'), { maximum: 5 });
listJS.start();

HTML:

```html
<div id='share-email' hidden>
    <input type="email" placeholder="Email">
</div>
<div id="share-email-container"> </div>
<div id="add-email"> </div>
```

To get the results as an array:

listJS.getResults();

To reset the results:

listJS.reset();

If you want, you can use Twitter's typeahead to autocomplete.

You just need to import typeahead and provide appropriate options.
