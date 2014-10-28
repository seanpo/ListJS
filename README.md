#############################################################################################
# Project ListJS
#############################################################################################

ListJS is a simple javascript library that allows you to create lists of an 
element.

![alt tag](https://github.com/seanpo/ListJS/blob/master/img/example.PNG)

Usage is simple. For the above example, the following code is needed:

Javascript:

var listJS = ListJS($('#share-email'), $('#add-email'), $('#share-email-container'));
listJS.start();

HTML:

```html
<div id='share-email' hidden>
    <div>
        <input type="email" placeholder="Email">
    </div>
</div>
<div id="share-email-container">
    <input type="button" value="Share">
    <div id="add-email"> </div>
</div>
```
