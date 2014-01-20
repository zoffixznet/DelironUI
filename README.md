DelironUI
=========

A rudimentary web page UI collection (User Interface Elements/Behaviour)

This collection uses [MooTools JavaScript Framework](http://mootools.net/)

You Will Need
-------------

1. Perl to run dynamically generated CSS and HTML; or at least to run the two scripts and save the output into a static CSS/JS file
2. The [MooTools JavaScript Framework](http://mootools.net/). Figuring out
which elements are/will be needed is currently left as an exercise
(just get full _Core_ and full _More_ (extra locales are not needed))

Usage
-----

### Directory

Clone this repo into ``UI`` directory in the web root of your website.
Other locations are currently not supported.

### Setup Code

In your HTML add DelironUI CSS and JavaScript files (and MooTools):

```html
    <link rel="stylesheet" type="text/css"
        href="/UI/CSS/deliron-ui--0.001.css.pl"
        media="screen,tv,projection">

    <script type="text/javascript" src="/mootools-core.js"></script>
    <script type="text/javascript" src="/mootools-more.js"></script>

    <script type="text/javascript"
        src="/UI/JS/deliron-ui--0.001.js.pl"></script>
```

### Using UI Elements

Specify the UI element by apply several class names to it. e.g.:

```html
    <a href="/foo" class="dui plain button">This is a button</a>

    <ul class="dui plain list">
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
    </ul>
```

**ALL DelironUI elements have `dui` class on them**

A group of DelironUI classes will be replaced with a single class during
run time, to avoid conflicts with other code. For example,
`.dui.plain.button` is changed to a single class `dui_control_button_plain`
(the names of the classes to which the change is being made is
currently likely to change in the future).

### Available UI Elements

#### Buttons

##### Plain Button
- **Class group:** `class="dui plain button"`
- **Class group gets replaced to:** `.dui_control_button_plain`
- **Description:** a plain, gray button
- **Applies to:** possibly any element that has a click handler setup;
    in particular `<a>`, `<input type="submit">`, `<input type="submit">`
    `<button>`
- **Sample display:**
    |   View       |                   |
    |--------------|-------------------|
    |   Standard   | ![Plain Button](/docs/images/samples/buttons/plain.png)|--------------|-------------------|
    |On mouse over | ![Plain Button, on hover](/docs/images/samples/buttons/plain-hover.png) (on mouse over) |
