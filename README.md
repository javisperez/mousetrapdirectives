# Mousetrap Directives
Some moustrap directives for angularJS

# What is this?
This repo has two angular directives useful when you need to have easy keyboard access to basic app actions. It depends on mousetrapJS for the keyboard shortcuts

# About mousetrap
This module depends on [mousetrap](https://craig.is/killing/mice) which is a library for making keyboard shortcuts (and works great!). 

Please check the [mousetrap documentation](https://craig.is/killing/mice) to see the posibilities of shortcuts combinations and more, i highly recommend it.

# The directives
So far i've just done two directives:

## mousetrap
The first directive is **mousetrap** which is a trigger of actions, based on keyboard shortcuts (as mousetrap works)

## mousetrap-focus
Another directive is **mousetrap-focus** which (as the name says) it will focus on a given field by pressing a keyboard shortcut.

# Install
You can use bower to install it:

`bower install --save mousetrap-directives`

Or you can download the zip on this repo and upload it to your server. Don't forget to include it in your html.

# Usage
Just include the module:

`mousetrap-directives`

in your angular app as dependency and bingo! you can use the directives.

# Examples
First, include it in your module:

```javascript
angular.module('app', ['mousetrap-directives']);
```

## mousetrap directive
Now, to use the mousetrap directive, in the html just:

```html
<span mousetrap="{'o': open}">Open</span>
```

Or you can just use a string, to trigger the click event (i.e. ng-click):

```html
<button ng-click="alert()" mousetrap="'c'">Click me</button>
```

that would fire the alert function when the **c** key is press (by triggering the ng-click attribute)

**Please notice** that if the tag is disabled, the moustrap actions wont fire, this is useful if you have a form that want to submit with keyboard only, but want to prevent disabled buttons to trigger anyway.

## mousetrap-focus directive

You can focus on a field by using just the keyboard, like this:

```html
<input type="text" ng-model="myModel" class="mousetrap" mousetrap-focus="'ctrl+b'" />
```

When ctrl+b is pressed, the input will focus

**Please notice** that [mousetrap](https://craig.is/killing/mice) disable the keyboard shortcuts on input fields by default, so, if you want to trigger the hotkey on an input you must add a **mousetrap** class.
