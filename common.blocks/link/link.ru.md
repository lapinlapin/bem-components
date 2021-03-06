# link

Блок `link` используется для создания различных типов ссылок и предоставляет возможность изменять их состояние, внешний вид и поведение.


## Варианты использования ссылок

Блок **link** служит для создания следующих типов ссылок:

<table>
    <tr>
        <th>Тип</th>
        <th>Описание</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Обычная ссылка</td>
        <td>Применяется для любых ссылок веб-интерфейса. Используется по умолчанию.</td>
        <td>
            <pre><code>
{
    block : 'link',
    url : ' #',
    content : 'link'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Псевдоссылка</td>
        <td>Разновидность ссылки, при нажатии по которой в браузере не осуществляется переход. Применяется для вызова сценариев.
        </td>
        <td>
            <pre><code>
{
    block : 'link',
    mods : { pseudo : true, theme: 'normal' },
    content : 'pseudo'
}
            </code></pre>
        </td>
    </tr>
</table>


## Допустимые параметры блока

Допустимые параметры блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>url</td>
        <td><code>String|BEMJSON</code></td>
        <td>Адрес ссылки. Если указан, значение <code>url</code> становится атрибутом <code>href</code>. Обязательный параметр для обычной ссылки. Если в качестве значения передан BEMJSON, он будет обработан и вернет строку.</td>
    </tr>
    <tr>
        <td>title</td>
        <td><code>String</code></td>
        <td>Текст всплывающей подсказки</td>
    </tr>
    <tr>
        <td>target</td>
        <td><code>String</code></td>
        <td>Целевое окно. Обычно атрибут указывается со значением <code>_blank</code>, чтобы открыть адрес ссылки в новом окне.</td>
    </tr>
    <tr>
        <td>tabIndex</td>
        <td><code>Number</code></td>
        <td> Индекс, задающий последовательность перехода между ссылками при нажатии на клавишу <code>Tab</code>. Атрибут преобразуется в нативный атрибут <code>tabindex</code>.</td>
    </tr>
</table>


## Модификаторы блока

### Темы блока `_theme`

 * simple
 * normal

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером.

Например:

#### default
```bemjson
{
    block : 'link',
    url : '#',
    content : 'link'
}
```


#### simple

```bemjson
{
    block : 'link',
    mods : { theme : 'simple' },
    url : '#',
    content : 'link'
}
```


#### normal

```bemjson
{
    block : 'link',
    mods : { theme : 'normal' },
    url : '#',
    content : 'link'
}
```

### Псевдоссылка `_pseudo`

```bemjson
{
    block : 'link',
    mods : {
        theme : 'normal',
        pseudo : true
    },
    title : 'pseudo mod are toggled',
    content : 'link'
}
```


### Состояния блока

#### В фокусе `_focused`

Модификатор `_focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью. Нажатие по ней можно выполнить клавишей `Enter`.

```
{
    block : 'link',
    mods : {
        theme : 'normal',
        focused : true
    },
    url : '#',
    content : '_focused'
}
```


#### Неактивна `_disabled`

В состоянии "не активна" ссылка отображается, но недоступна для действий пользователя.

Для такой ссылки не будет:

* устанавливаться модификатор `_focused` в момент получения фокуса;
* осуществляться переход, если задан атрибут `url`;
* генерироваться БЭМ-событие `click`.

Модификатор реализован во всех темах блока.

```bemjson
{
    block : 'link',
    mods : {
        theme : 'normal',
        disabled : true
    },
    url : '#'
    content : '_disabled',
}
```


### Зависимости блока

Блок `link` зависит от следующего набора блоков и элементов:

* `base-control`
* `i-bem__dom`
