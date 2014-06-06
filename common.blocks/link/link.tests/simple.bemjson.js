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
        { tag : 'p', content : {
            block : 'link',
            content : 'Empty link 1'
        } },
        { tag : 'p', content : {
            block : 'link',
            url : {
                block : 'link-content',
                tag : '',
                content : '/action'
            },
            content : 'url with bemjson'
        } },
        { tag : 'p', content : {
            block : 'link',
            url : 'http://yandex.ru',
            content : 'yandex.ru'
        } },
        { tag : 'p', content : {
            block : 'link',
            url : 'http://yandex.com',
            title : 'One of the largest internet companies in Europe',
            content : 'yandex.com'
        } },
        { tag : 'p', content : {
            block : 'link',
            url : 'http://yandex.com.tr',
            title : 'One of the largest internet companies in Europe',
            target : '_blank',
            content : 'yandex.com.tr'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { pseudo : true },
            content : 'Pseudo link'
        } },
        { tag : 'p', content : {
            block : 'link',
            tabIndex : -1,
            content : 'yandex.ru'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : { block : 'link', text : 'simple' } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'simple' },
            content : 'Empty link 1'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'simple' },
            url : {
                block : 'link-content',
                tag : '',
                content : '/action'
            },
            content : 'url with bemjson'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'simple' },
            url : 'http://yandex.ru',
            content : 'yandex.ru'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'simple' },
            url : 'http://yandex.com',
            title : 'One of the largest internet companies in Europe',
            content : 'yandex.com'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'simple' },
            url : 'http://yandex.com.tr',
            title : 'One of the largest internet companies in Europe',
            target : '_blank',
            content : 'yandex.com.tr'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'simple' },
            mods : { pseudo : true },
            content : 'Pseudo link'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'simple' },
            tabIndex : -1,
            content : 'yandex.ru'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        { tag : 'p', content : { block : 'link', text : 'normal' } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'normal' },
            content : 'Empty link 1'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'normal' },
            url : {
                block : 'link-content',
                tag : '',
                content : '/action'
            },
            content : 'url with bemjson'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'normal' },
            url : 'http://yandex.ru',
            content : 'yandex.ru'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'normal' },
            url : 'http://yandex.com',
            title : 'One of the largest internet companies in Europe',
            content : 'yandex.com'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'normal' },
            url : 'http://yandex.com.tr',
            title : 'One of the largest internet companies in Europe',
            target : '_blank',
            content : 'yandex.com.tr'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'normal' },
            mods : { pseudo : true },
            content : 'Pseudo link'
        } },
        { tag : 'p', content : {
            block : 'link',
            mods : { theme : 'normal' },
            tabIndex : -1,
            content : 'yandex.ru'
        } }
    ].map(function(l) { return { tag : 'div', content : l } })
})
