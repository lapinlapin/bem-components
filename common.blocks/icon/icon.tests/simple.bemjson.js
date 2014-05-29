({
    block : 'page',
    title : 'bem-components: icon',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' }
    ],
    content : [
        { tag : 'h2', content : 'icon' },
        {
            block : 'test',
            content : [
                'Style background: ',
                {
                    block : 'icon',
                    url : '../../../test.blocks/icon/_action/download.svg'
                }
            ]
        },
        { tag : 'br' },
        {
            block : 'test',
            content : [
                'CSS background: ',
                {
                    block : 'icon',
                    mods : { social : 'twitter' }
                }
            ]
        },
        { tag : 'br' },
        {
            block : 'test',
            content : [
                'IMG content: ',
                {
                    block : 'icon',
                    content : {
                        block : 'image',
                        url : '../../../test.blocks/icon/_action/download.svg'
                    }
                }
            ]
        },
        { tag : 'br' },
        {
            block : 'test',
            content : [
                'SVG content: ',
                {
                    block : 'icon',
                    content :
                        '<svg class="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">' +
                            '<path d="M21.5,13.5 L21.5,14.5 L11.5,21 L10.5,21 L0.5,14.5 L0.5,13.5 L3,12 L3.5,12.5 L1.5,14 L10.5,20 L11.5,20 L20.5,14 L18.5,12.5 L19,12 L21.5,13.5 Z"></path>' +
                            '<path d="M11.5,15 L21.5,8.5 L21.5,7.5 L11.5,1 L10.5,1 L0.5,7.5 L0.5,8.5 L10.5,15 L10.5,15 Z M10.5,2 L11.5,2 L20.5,8 L11.5,14 L10.5,14 L1.5,8 Z"></path>' +
                        '</svg>'
                }
            ]
        }
    ]
});
