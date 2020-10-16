# Client Side JavaScript

## Select Element
In this challange your going to use the value attribute of a select element to create the image path in order to change the src attribute to show the icon of the current selected browser.  
Below you will find the markup for both the browser icon display and the select element. When using select elements make sure to listen for the change event. [view demo live on Netlify](https://crackcode-browser-icon.netlify.app/)

```html
<select id="browserTypes" class="browsers-types">
  <option value="opera" data-runtime="v8" data-version="71">opera</option>
  <option value="safari" data-runtime="javascript core" data-version="14">
    safari
  </option>
  <option value="firefox" data-runtime="spider monkey" data-version="83">
    firefox
  </option>
  <option value="edge" data-runtime="v8" data-version="85">edge</option>
  <option value="explorer" data-runtime="chakra" data-version="11">
    explorer
  </option>
  <option value="chrome" data-runtime="v8" data-version="88">chrome</option>
</select>
```

 The markup of the browser icon container  is shown below

```html
<div class="icon-container">
  <img class="browser-icon" src="img/icons/browsers/opera.svg" alt="opera" />
</div>
```

##  JavaScript Code Help.
The javascript snippet below gives you boiler plate code to perform the following tasks: 
- add change event listener.
- access the value of the selected option.
- access the currently selected option element.  

```javascript
selectElement.addEventListener("change", function (e) {
  // get the value of the selected item
  e.currentTarget.value;
  // get the current selected option
  const currentOption = e.currentTarget.options[e.currentTarget.selectedIndex];
});
```

## Resources
- Form Element List [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- Select Element [MDN Docs ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
