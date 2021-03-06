# input

The **input** block is intended to create different types of text fields:

* textarea
* password field
* search form

In MSIE8 block **input** degrades to a native control `<input attribute>`; a text field is renedered as native text area `<textarea attribute>`.

## Available block's attributes

Available block's attributes could be specified in the corresponding fields of the block BEMJSON file:

<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>val</td>
        <td>String</td>
        <td>Value to be sent to the server. It is empty by default.</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>String</td>
        <td>Text to be replaced. Has an empty value by default.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique block modifier. The value is randomly generated by default. Could be specified manually.</td>
    </tr>
    <tr>
        <td>label</td>
        <td>`string`</td>
        <td>Lable above an input field.</td>
    </tr>
</table>


Available block's attributes that could be provided in `attrs` field in BEMJSON:

* name (_common_)
* tabindex (_common_)
* spellcheck (_common_)
* accesskey (_common_)
* rows (`_textarea`)
* cols (`_textarea`)
* readonly (`_textarea`)
* wrap (`_textarea`)
* maxlength (`_textarea`)

## Block's modifiers

### `_theme`

The block is available in the following themes:

 * simple
 * normal

If the theme is not specified the block obtains default values:

* Input field type: text field
* Width: 100%
* Theme: native representation
* Text area size: `cols:10`, `rows:10`

Following example demonstrates this:

#### default
```bemjson
{
    block : 'input',
    placeholder : 'default'
}
```
#### simple

```bemjson
{
    block : 'input',
    mods : { theme : 'simple' },
    placeholder : 'simple'
}
```
#### normal

```bemjson
{
    block : 'input',
    mods : { theme : 'normal' },
    placeholder : 'normal'
}
```

### `_type`

The following types of **input** block are available:

* `_textarea`
* `_password`
* `_search`

The block is available in `simple` and `normal` themes.

<table>
    <tr>
        <th>Type / Realisation</th>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td> `_textarea`</td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { type : 'textarea' },
    placeholder : 'default'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'simple',
        type : 'textarea'
    },
    placeholder : 'simple'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'normal',
        type : 'textarea'
    },
    placeholder : 'normal'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td> `_password`</td>
        <td>
            <pre><code>
{
    block : 'input',
    placeholder : 'default',
    mods : { type : 'password' }
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'simple',
        type : 'password'
    },
    placeholder : 'simple'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'normal',
        type : 'password'
    },
    placeholder : 'normal'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td> `_search`</td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { type : 'search' },
    placeholder : 'default'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'simple',
        type : 'search'
    },
    placeholder : 'simple'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'normal',
        type : 'search'
    },
    placeholder : 'normal'
}
            </code></pre>
        </td>
    </tr>
</table>

### Block's state

#### `_disabled`

If block is disabled all its elements become unavailable for user's action.

The **input** block is active by default even it disabled modifier is not specified.

The block is available in `simple` and `normal` themes.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', disabled : true },
    val : 'disabled'
}
```

#### `_focused`

The input field is focused if a block has a `_focused` modifier with `true` vlue.

The block is available in `simple` and `normal` themes.

```
{
    block : 'input',
    mods : { theme : 'normal', focused : true },
    val : 'focused'
}
```

### `_has-clear`

A `clear` cross element appears in the input field if a block has a `_has-clear` modifier with `true` value.

The block is available in `simple` and `normal` themes.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { 'has-clear' : true },
    placeholder : 'default'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'simple',
        'has-clear' : true
    },
    placeholder : 'simple'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'normal',
        'has-clear' : true
    },
    placeholder : 'normal'
}
            </code></pre>
        </td>
    </tr>
</table>


---
**NB** Be aware the modifier `has-clear` is not available for a `search field` in *simple* theme.

---

### `_has-label`

A lable (`__label` element) above the input field is available if a block has a `_has-label` modifier with `true` value.

The block is available in `simple` and `normal` themes.

<table>
    <tr>
        <th>default</th>
        <th>simple</th>
        <th>normal</th>
    </tr>
    <tr>
        <td>
            <pre><code>
{
    block : 'input',
    mods : { 'has-clear' : true },
    label : 'Label',
    placeholder : 'default'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'simple',
        'has-label' : true
    },
    label : 'Label',
    placeholder : 'simple'
}
            </code></pre>
        </td>
        <td>
            <pre><code>
{
    block : 'input',
    mods : {
        theme : 'normal',
        'has-label' : true
    },
    label : 'Label',
    placeholder : 'normal'
}
            </code></pre>
        </td>
    </tr>
</table>

## Block's elements

The following elements provide visual representation of a **input** block:

### __box

A mandatory element.

An element fot input field forming (native input field is hidden).

### __clear

A button (cross element) intended to clear an input field content.

The cross element is unavailable if a block has a `has-clear` modifier with `false` value.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', 'has-clear' : true },
    label : 'label'
}
```

### __control

A mndatory element.

This element is processed by BEMHTML or BH template engine to a native `<input attribute>` control.

### __label

A lablel above an input field.

This element provides a lable above an input field. In HTML is rendered as a `<label>` tag. A lable is linked with an `<input>` tag by the unique `id` identifier, that is generated random by default.

Click the input field to set a `focused` modifier.

```bemjson
{
    block : 'input',
    mods : { theme : 'normal', 'has-label' : true },
    label : 'label'
}
```

## Block's dependencies

An **input** block depends on:

* `base-control`, that provides public API;
* `i-bem__dom` block.
