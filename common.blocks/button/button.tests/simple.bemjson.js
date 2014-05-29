({
    block : 'page',
    title : 'bem-components: button',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : { block : 'button', text : 'default' } },
        { tag : 'p', content : {
            block : 'button',
            text : 'disabled',
            mods : { disabled : true }
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { type : 'link' },
            url : '#',
            text : 'link'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { type : 'link', disabled : true },
            url : '#',
            text : 'link'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple' },
            text : 'simple'
        } },
        { tag : 'p', content : {
            block : 'button',
            text : 'disabled',
            mods : { theme : 'simple', disabled : true }
        } },

        { tag : 'p', content : {
            block : 'button',
            text : 'with icon',
            mods : { theme : 'simple' },
            icon : { block : 'icon', mods : { social : 'twitter' } }
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple' },
            icon : { block : 'icon', mods : { social : 'vk' } }
        } },

        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'simple', type : 'link' },
            url : '#',
            text : 'link'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'm' },
            text : 'normal'
        } },
        { tag : 'p', content : {
            block : 'button',
            text : 'disabled',
            mods : { theme : 'normal', size : 'm', disabled : true }
        } },

        { tag : 'h3', content : 'view' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                text : 'normal'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', disabled : true },
                text : 'normal'
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', pseudo : true },
                text : 'pseudo'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
                text : 'pseudo'
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', action : true },
                text : 'action'
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', action : true, disabled : true },
                text : 'action'
            }
        ] },

        { tag : 'h3', content : 'size' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 's' },
            text : 'size s'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'm' },
            text : 'size m'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'l' },
            text : 'size l'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'xl' },
            text : 'size xl'
        } },

        { tag : 'h3', content : 'link' },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'normal',
                size : 'm',
                type : 'link'
            },
            url : '#',
            text : 'default link'
        } },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'normal',
                size : 'm',
                type : 'link',
                disabled : true
            },
            url : '#',
            text : 'disabled link'
        } },

        { tag : 'h3', content : 'icon' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                // Здесь иконка прописана через content, чтобы появилась в deps.js
                content : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                text : 'download',
                mods : { theme : 'normal', size : 's', disabled : true },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                text : 'layers',
                mods : { theme : 'normal', size : 's' },
                icon : {
                    block : 'icon',
                    content :
                        '<svg class="image" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 32 32">' +
                            '<path d="M21.5,13.5 L21.5,14.5 L11.5,21 L10.5,21 L0.5,14.5 L0.5,13.5 L3,12 L3.5,12.5 L1.5,14 L10.5,20 L11.5,20 L20.5,14 L18.5,12.5 L19,12 L21.5,13.5 Z"></path>' +
                            '<path d="M11.5,15 L21.5,8.5 L21.5,7.5 L11.5,1 L10.5,1 L0.5,7.5 L0.5,8.5 L10.5,15 L10.5,15 Z M10.5,2 L11.5,2 L20.5,8 L11.5,14 L10.5,14 L1.5,8 Z"></path>' +
                        '</svg>'
                }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'text', content : 'down' },
                    { block : 'icon', mods : { action : 'down' } }
                ]
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { block : 'icon', mods : { action : 'right' } }
                ]
            },
            ' ololo ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { elem : 'text', content : 'o' },
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : '^' },
                    { elem : 'text', content : '_' },
                    { elem : 'text', content : '^' },
                    { block : 'icon', mods : { action : 'right' } },
                    { elem : 'text', content : 'o' }
                ]
            },
            ' trololo ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : '0' },
                    { block : 'icon', mods : { action : 'up' } },
                    { elem : 'text', content : 'o' },
                    { block : 'icon', mods : { action : 'right' } }
                ]
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                text : 'layers',
                mods : { theme : 'normal', size : 'm' },
                icon : {
                    block : 'icon',
                    content :
                        '<svg class="image" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 32 32">' +
                            '<path d="M21.5,13.5 L21.5,14.5 L11.5,21 L10.5,21 L0.5,14.5 L0.5,13.5 L3,12 L3.5,12.5 L1.5,14 L10.5,20 L11.5,20 L20.5,14 L18.5,12.5 L19,12 L21.5,13.5 Z"></path>' +
                            '<path d="M11.5,15 L21.5,8.5 L21.5,7.5 L11.5,1 L10.5,1 L0.5,7.5 L0.5,8.5 L10.5,15 L10.5,15 Z M10.5,2 L11.5,2 L20.5,8 L11.5,14 L10.5,14 L1.5,8 Z"></path>' +
                        '</svg>'
                }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                content : [
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { block : 'icon', mods : { action : 'right' } }
                ]
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'l' },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                text : 'layers',
                mods : { theme : 'normal', size : 'l' },
                icon : {
                    block : 'icon',
                    content :
                        '<svg class="image" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 32 32">' +
                            '<path d="M21.5,13.5 L21.5,14.5 L11.5,21 L10.5,21 L0.5,14.5 L0.5,13.5 L3,12 L3.5,12.5 L1.5,14 L10.5,20 L11.5,20 L20.5,14 L18.5,12.5 L19,12 L21.5,13.5 Z"></path>' +
                            '<path d="M11.5,15 L21.5,8.5 L21.5,7.5 L11.5,1 L10.5,1 L0.5,7.5 L0.5,8.5 L10.5,15 L10.5,15 Z M10.5,2 L11.5,2 L20.5,8 L11.5,14 L10.5,14 L1.5,8 Z"></path>' +
                        '</svg>'
                }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'l' },
                content : [
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { block : 'icon', mods : { action : 'right' } }
                ]
            }
        ] },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'xl' },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            ' ',
            {
                block : 'button',
                text : 'layers',
                mods : { theme : 'normal', size : 'xl' },
                icon : {
                    block : 'icon',
                    content :
                        '<svg class="image" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 32 32">' +
                            '<path d="M21.5,13.5 L21.5,14.5 L11.5,21 L10.5,21 L0.5,14.5 L0.5,13.5 L3,12 L3.5,12.5 L1.5,14 L10.5,20 L11.5,20 L20.5,14 L18.5,12.5 L19,12 L21.5,13.5 Z"></path>' +
                            '<path d="M11.5,15 L21.5,8.5 L21.5,7.5 L11.5,1 L10.5,1 L0.5,7.5 L0.5,8.5 L10.5,15 L10.5,15 Z M10.5,2 L11.5,2 L20.5,8 L11.5,14 L10.5,14 L1.5,8 Z"></path>' +
                        '</svg>'
                }
            },
            ' ',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'xl' },
                content : [
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { block : 'icon', mods : { action : 'right' } }
                ]
            }
        ] },

        { tag : 'p', content : [
            { tag : 'span', content : {
                block : 'button',
                mods : { theme : 'normal', size : 'm', togglable : 'check' },
                text : 'check'
            } },
            ' ',
            { tag : 'span', content : [
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'radio' },
                    text : 'radio'
                },
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'radio' },
                    text : 'radio'
                },
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'radio', checked : true },
                    text : 'radio'
                }
            ] }
        ] },

        { tag : 'p', content : [
            { tag : 'span', content : {
                block : 'button',
                mods : { theme : 'normal', size : 'm', togglable : 'check', pseudo : true },
                text : 'check'
            } },
            ' ',
            { tag : 'span', content : [
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'radio', pseudo : true },
                    text : 'radio'
                },
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'radio', pseudo : true },
                    text : 'radio'
                },
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'radio', pseudo : true, checked : true },
                    text : 'radio'
                }
            ] }
        ] }
    ]
});
