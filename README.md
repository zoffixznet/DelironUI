DelironUI
=========

A rudimentary web page UI collection (User Interface Elements/Behaviour)

This collection uses [MooTools JavaScript Framework](http://mootools.net/)

Table of contents
-----------------

- [You Will Need](#you-will need)
- [Usage](#usage)
    - [Directory](#directory)
    - [Setup Code](#setup-code)
    - [Using UI Elements](#using-ui-elements)
- [Available UI Elements](#available-ui-elements)
    - [Buttons](#buttons)
        - [Plain Button](#plain-button)
        - [Danger Button](#danger-button)
        - [Go Back Button](#go-back-button)

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

Specify the UI element by applying several class names to an
appropriate element in the markup. e.g.:

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
`.dui.plain.button` is changed to a single class `.dui_control_button_plain`
(the names of the classes to which the change is being made is
currently likely to change in the future).

Available UI Elements
---------------------

### Buttons

#### Plain Button
- **Class group:** `class="dui plain button"`
- **Class group gets replaced to:** `.dui_control_button_plain > .dui_b_orig`
- **Description:** a plain, gray button
- **Applies to:** possibly any inline element that has a click handler
    etup; in particular `<a>`, `<input type="submit">`, `<input type="button">`, and `<button>`. Block elements might work, but
    generated markup will be invalid.
- **Fluidity:** fixed vertically / fluid horizontally
- **Extra dynamically generated markup:** 3 x `<span>`
- **Sample display:**

    |   View       |  Sample Image     |
    |--------------|-------------------|
    |   Standard   | ![Plain Button](/docs/images/samples/buttons/plain.png)|--------------|-------------------|
    |On mouse over | ![Plain Button, on hover](/docs/images/samples/buttons/plain-hover.png)|

#### Danger Button
- **Class group:** `class="dui danger button"`
- **Class group gets replaced to:** `.dui_control_button_danger > .dui_b_orig`
- **Description:** a plain, gray button that turns red on hover
- **Applies to:** possibly any inline element that has a click handler
    etup; in particular `<a>`, `<input type="submit">`, `<input type="button">`, and `<button>`. Block elements might work, but
    generated markup will be invalid.
- **Fluidity:** fixed vertically / fluid horizontally
- **Extra dynamically generated markup:** 3 x `<span>`
- **Sample display:**

    |   View       |  Sample Image     |
    |--------------|-------------------|
    |   Standard   | ![Danger Button](/docs/images/samples/buttons/danger.png)|--------------|-------------------|
    |On mouse over | ![Danger Button, on hover](/docs/images/samples/buttons/danger-hover.png)|

#### Go Back Button
- **Class group:** `class="dui go_back button"`
- **Class group gets replaced to:** `.dui_control_button_go_back > .dui_b_orig`
- **Description:** a plain, gray button with a "back" arrow on the left.
- **Applies to:** possibly any inline element that has a click handler
    etup; in particular `<a>`, `<input type="submit">`, `<input type="button">`, and `<button>`. Block elements might work, but
    generated markup will be invalid.
- **Fluidity:** fixed vertically / fluid horizontally
- **Extra dynamically generated markup:** 3 x `<span>`
- **Sample display:**

    |   View       |  Sample Image     |
    |--------------|-------------------|
    |   Standard   | ![Go Back Button](/docs/images/samples/buttons/go_back.png)|--------------|-------------------|
    |On mouse over | ![Go Back Button, on hover](/docs/images/samples/buttons/go_back-hover.png)|



