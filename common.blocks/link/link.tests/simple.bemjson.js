({
    block : 'page',
    title : 'bem-components: link',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : { block : 'link', text : 'default' } },
        {
            block : 'link',
            content : 'Empty link'
        },
        {
            tag : 'span',
            content : ' – with no url'
        },

        { tag : 'br' },

        {
            block : 'link',
            url : 'http://yandex.ru',
            content : 'yandex.ru'
        },
        {
            tag : 'span',
            content : ' – simple url'
        },

        { tag : 'br' },

        {
            block : 'link',
            url : {
                block : 'link-content',
                tag : '',
                content : '/action'
            },
            content : 'My url – bemjson'
        },
        {
            tag : 'span',
            content : ' – bemjson url'
        },

        { tag : 'br' },

        {
            block : 'link',
            url : 'http://yandex.com',
            title : 'One of the largest internet companies in Europe',
            content : 'yandex.com'
        },
        {
            tag : 'span',
            content : ' – with title'
        },

        { tag : 'br' },

        {
            block : 'link',
            url : 'http://yandex.com.tr',
            title : 'One of the largest internet companies in Europe',
            target : '_blank',
            content : 'yandex.com.tr'
        },
        {
            tag : 'span',
            content : ' – blank target'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { pseudo : true },
            content : 'Pseudo link'
        },
        {
            tag : 'span',
            content : ' – pseudo link'
        },

        { tag : 'br' },

        {
            block : 'link',
            url : 'http://yandex.com.tr',
            tabIndex : -1,
            content : 'yandex.ru'
        },
        {
            tag : 'span',
            content : ' – out of tab order'
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : { block : 'link', text : 'simple' } },
        {
            block : 'link',
            mods : { theme : 'simple' },
            content : 'Empty link'
        },
        {
            tag : 'span',
            content : ' – with no url'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'simple' },
            url : 'http://yandex.ru',
            content : 'yandex.ru'
        },
        {
            tag : 'span',
            content : ' – simple url'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'simple' },
            url : {
                block : 'link-content',
                tag : '',
                content : '/action'
            },
            content : 'My url – bemjson'
        },
        {
            tag : 'span',
            content : ' – bemjson url'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'simple' },
            url : 'http://yandex.com',
            title : 'One of the largest internet companies in Europe',
            content : 'yandex.com'
        },
        {
            tag : 'span',
            content : ' – with title'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'simple' },
            url : 'http://yandex.com.tr',
            title : 'One of the largest internet companies in Europe',
            target : '_blank',
            content : 'yandex.com.tr'
        },
        {
            tag : 'span',
            content : ' – blank target'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { pseudo : true, theme : 'simple' },
            content : 'Pseudo link'
        },
        {
            tag : 'span',
            content : ' – pseudo link'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'simple' },
            url : 'http://yandex.com.tr',
            tabIndex : -1,
            content : 'yandex.ru'
        },
        {
            tag : 'span',
            mods : { theme : 'simple' },
            content : ' – out of tab order'
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        { tag : 'p', content : { block : 'link', text : 'normal' } },
        {
            block : 'link',
            mods : { theme : 'normal' },
            content : 'Empty link'
        },
        {
            tag : 'span',
            content : ' – with no url'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'normal' },
            url : 'http://yandex.ru',
            content : 'yandex.ru'
        },
        {
            tag : 'span',
            content : ' – simple url'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'normal' },
            url : {
                block : 'link-content',
                tag : '',
                content : '/action'
            },
            content : 'My url – bemjson'
        },
        {
            tag : 'span',
            content : ' – bemjson url'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'normal' },
            url : 'http://yandex.com',
            title : 'One of the largest internet companies in Europe',
            content : 'yandex.com'
        },
        {
            tag : 'span',
            content : ' – with title'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'normal' },
            url : 'http://yandex.com.tr',
            title : 'One of the largest internet companies in Europe',
            target : '_blank',
            content : 'yandex.com.tr'
        },
        {
            tag : 'span',
            content : ' – blank target'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { pseudo : true, theme : 'normal' },
            content : 'Pseudo link'
        },
        {
            tag : 'span',
            content : ' – pseudo link'
        },

        { tag : 'br' },

        {
            block : 'link',
            mods : { theme : 'normal' },
            url : 'http://yandex.com.tr',
            tabIndex : -1,
            content : 'yandex.ru'
        },
        {
            tag : 'span',
            content : ' – out of tab order'
        }

    ]
})
