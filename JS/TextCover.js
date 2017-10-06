window.onresize = function (event)
{
    NW.Dom.select('.text-cover', null, (el) =>
    {
        let ratio = parseFloat(el.getAttribute('ratio'));
        if (isNaN(ratio))
        {
            ratio = 16 / el.offsetWidth;
            el.setAttribute('ratio', ratio.toString());
        }

        let maxHeight = parseInt(document.defaultView.getComputedStyle(el.parentNode, null).maxHeight, 10);
        let newSize = Math.min(maxHeight, Math.round(el.parentNode.offsetWidth * ratio)) + 'px';
        el.style.fontSize = newSize;
    });
    // $('.TextByWidth').each(function ()
    // {
    //
    //     if ($(this).attr('ratio') === undefined)
    //     {
    //         $(this).attr('ratio', 16 / $(this).width());
    //     }
    //     let parentWidth = $(this).parent().width();
    //
    //     let newSize = Math.round(parentWidth * $(this).attr('ratio')) + 'px';
    //
    //     if ($(this).css('font-size') !== newSize)
    //     {
    //         $(this).css('font-size', newSize);
    //     }
    // });
    //
    // $('.HiddenDown').each(function ()
    // {
    //     $(this).css('margin-bottom', -$(this).height() + 'px');
    // });
};