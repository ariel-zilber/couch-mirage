/********************************************************************************************/
/*******************************            IOS 7              ******************************/
/********************************************************************************************/
/********************************************************************************************/

var _library = 'ios7';
var _path = '/ios7/';

prx.library_scales = prx.library_scales || {};
prx.library_scales.ios7 = 2;

prx.comps.ios7Colors = [{value: '#FF4351',displayValue: '#FF4351'},{vagruntlue: '#FD6631',displayValue: '#FD6631'},{value: '#FC880F',displayValue: '#FC880F'},{value: '#FEAE1B',displayValue: '#FEAE1B'},{value: '#FFD426',displayValue: '#FFD426'},
                             {value: '#A5DE37',displayValue: '#A5DE37'},{value: '#49E845',displayValue: '#49E845'},{value: '#55DAE1',displayValue: '#55DAE1'},{value: '#1B9AF7',displayValue: '#1B9AF7'},{value: '#7B72E9',displayValue: '#7B72E9'},
                             {value: '#DB49D8',displayValue: '#DB49D8'},{value: '#ED4694',displayValue: '#ED4694'},{value: '#000000',displayValue: '#000000'},{value: '#333333',displayValue: '#333333'},
                             {value: '#FF667A',displayValue: '#FF667A'},{value: '#FE9949',displayValue: '#FE9949'},{value: '#FEC418',displayValue: '#FEC418'},{value: '#FFD728',displayValue: '#FFD728'},{value: '#FFE93B',displayValue: '#FFE93B'},
                             {value: '#D1EF51',displayValue: '#D1EF51'},{value: '#6FF467',displayValue: '#6FF467'},{value: '#80EDF0',displayValue: '#80EDF0'},{value: '#28CDFB',displayValue: '#28CDFB'},{value: '#B9ACF4',displayValue: '#B9ACF4'},
                             {value: '#EC6EEC',displayValue: '#EC6EEC'},{value: '#F668CA',displayValue: '#F668CA'},{value: '#666666',displayValue: '#666666'},{value: '#999999',displayValue: '#999999'},
                             {value: '#FFB2BC',displayValue: '#FFB2BC'},{value: '#FFCCA4',displayValue: '#FFCCA4'},{value: '#FFE18B',displayValue: '#FFE18B'},{value: '#FFEB94',displayValue: '#FFEB94'},{value: '#FFF49B',displayValue: '#FFF49B'},
                             {value: '#E9F7A8',displayValue: '#E9F7A8'},{value: '#B6F9B2',displayValue: '#B6F9B2'},{value: '#BFF7F8',displayValue: '#BFF7F8'},{value: '#94E6FE',displayValue: '#94E6FE'},{value: '#DCD4F9',displayValue: '#DCD4F9'},
                             {value: '#F6B5F5',displayValue: '#F6B5F5'},{value: '#FCB4E6',displayValue: '#FCB4E6'},{value: '#CCCCCC',displayValue: '#CCCCCC'},{value: '#FFFFFF',displayValue: '#FFFFFF'}];
prx.commonproperties.ios7BackgroundColor = { caption: 'Background', proptype: 'background-color' , name: 'backgroundColor', type: 'combo-colorpicker', value: function(item,name) { return item.backgroundColor; }, values: prx.comps.ios7Colors, liveUpdate: 'background-color', changeProperty: {caption: 'Background color', selector: '.changeProperty-backgroundColor', property: 'background-color', transitionable: true } }
prx.commonproperties.ios7BackgroundColorSolid = { caption: 'Background', proptype: 'background-color' , name: 'backgroundColor', type: 'solid-colorpicker', value: function(item,name) { return item.backgroundColor; }, values: prx.comps.ios7Colors, liveUpdate: 'background-color', changeProperty: {caption: 'Background color', selector: '.changeProperty-backgroundColor', property: 'background-color', transitionable: true } }
prx.commonproperties.ios7BorderColor = { caption: false, name: 'borderColor', proptype: 'border-color', type: 'solid-colorpicker', value: function(item,name) { return item.borderColor; }, values: prx.comps.ios7Colors, liveUpdate: 'border-color', changeProperty: { caption: 'Border Color', selector: '.changeProperty-borderColor', property: 'border-top-color,border-bottom-color,border-left-color,border-right-color', transitionable: true } }
prx.commonproperties.ios7ButtonsTextColor = { caption: 'Color', name: 'textColor', proptype: 'font-color-button', type: 'solid-colorpicker', pffSettings: prx.commonproperties.pffSettingsColor, value: function(item,name,index) { return item.buttons[index].textColor; }, values: prx.comps.ios7Colors, liveUpdate: 'color', changeProperty: { caption: 'Text color', selector: '.changeProperty-textColor-button', property: 'color', transitionable: true } }
prx.commonproperties.ios7ListItemsTextColor = { caption: 'Color', name: 'textColor', proptype: 'font-color-listitem', type: 'solid-colorpicker',  value: function(item,name,index) { return item.listitems[index].textColor; }, values: prx.comps.ios7Colors, liveUpdate: 'color', changeProperty: { caption: 'Text color', selector: '.changeProperty-textColor-listitem', property: 'color', transitionable: true } }

prx.commonproperties.ios7TextColor = function(_label) {
    _label = typeof(_label) != 'undefined' ? _label : 'Color';
    return {
        caption: _label, name: 'textColor', proptype: 'font-color', type: 'solid-colorpicker',
        pffSettings: prx.commonproperties.pffSettingsColor,
        value: function(item,name) { return item.textColor; },
        values: prx.comps.ios7Colors, liveUpdate: 'color',
        changeProperty: { caption: 'Text color', selector: '.changeProperty-textColor', property: 'color', transitionable: true } }
}

/* NAVBAR BUTTONS */
prx.types.ios7_navbar_buttons = {
    name: "ios7_navbar_buttons"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        if(typeof(item.textFont) == "undefined") {
            item.textFont = 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif';
        }

        // if(typeof(item.textFontStyle) == "undefined"){
        //     item.textFontStyle = '500';
        // }
        //
        // if(typeof(item.btnTextFontStyle) == "undefined"){
        //     item.btnTextFontStyle = '200';
        // }

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
        var _btnprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.btnTextProperties,'props-text') : '';
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-navbar" '+((prx.componentsHelper.getProp(item.overlay,'boolean'))? 'data-mpoverlay="1"': '')+'>';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-navbar-inner { '+prx.utils.getBgCss(item.backgroundColor)+'; border-'+prx.componentsHelper.getProp(item.borderPos,'other')+': '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }';
        cR += '#'+_id+' .ios7-navbar-title { '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
        if(item.type == "ios7_navbar_buttons") {
            cR += '#'+_id+' .ios7-navbar-button-text { '+prx.componentsHelper.getProp(item.btnTextFont + '|' + item.btnTextFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.btnTextColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.btnTextSize,'num-text-size')+'px; '+_btnprops+' }';
        }
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-navbar-inner liveUpdate-backgroundColor-background-color liveUpdate-borderColor-border-color changeProperty-backgroundColor changeProperty-borderWidth changeProperty-borderColor">';
        cR += '<div class="ios7-navbar-title liveUpdate-textColor-color changeProperty-textColor changeProperty-textSize changeProperty-textFont" data-editableproperty="title">'+prx.componentsHelper.getProp(item.title,'text-html')+'</div>';
        if(prx.componentsHelper.getProp(item.type,'other') == "ios7_navbar_buttons" && prx.componentsHelper.getProp(item.leftBtnType,'button-type') != "none") {
            cR += '<div class="ios7-navbar-button ios7-navbar-button-left ios7-navbar-button-left-'+prx.componentsHelper.getProp(item.leftBtnType,'button-type')+'">';
            if((prx.componentsHelper.getProp(item.leftBtnType,'button-type') == "icon" || prx.componentsHelper.getProp(item.leftBtnType,'button-type') == "texticon") && prx.componentsHelper.getProp(item.leftBtnIcon.fileId,'other') != '') {
                cR += '<img class="ios7-navbar-button-icon" src="'+prx.componentsHelper.getProp(item.leftBtnIcon,'asset')+'">';
            }
            if(prx.componentsHelper.getProp(item.leftBtnType,'button-type') == "text" || prx.componentsHelper.getProp(item.leftBtnType,'button-type') == "texticon") {
                cR += '<div class="ios7-navbar-button-text liveUpdate-btnTextColor-color changeProperty-btnTextColor changeProperty-btnTextSize changeProperty-btnTextFont" data-editableproperty="leftBtnText">'+prx.componentsHelper.getProp(item.leftBtnText,'text-html')+'</div>';
            }
            cR += '</div>';
        }
        if(prx.componentsHelper.getProp(item.type,'other') == "ios7_navbar_buttons" && prx.componentsHelper.getProp(item.rightBtnType,'button-type') != "none") {
            cR += '<div class="ios7-navbar-button ios7-navbar-button-right ios7-navbar-button-right-'+prx.componentsHelper.getProp(item.rightBtnType,'button-type')+'">';
            if(prx.componentsHelper.getProp(item.rightBtnType,'button-type') == "text" || prx.componentsHelper.getProp(item.rightBtnType,'button-type') == "texticon") {
                cR += '<div class="ios7-navbar-button-text liveUpdate-btnTextColor-color changeProperty-btnTextColor changeProperty-btnTextSize changeProperty-btnTextFont" data-editableproperty="rightBtnText">'+prx.componentsHelper.getProp(item.rightBtnText,'text-html')+'</div>';
            }
            if((prx.componentsHelper.getProp(item.rightBtnType,'button-type') == "icon" || prx.componentsHelper.getProp(item.rightBtnType,'button-type') == "texticon") && prx.componentsHelper.getProp(item.rightBtnIcon.fileId,'other') != '') {
                cR += '<img class="ios7-navbar-button-icon" src="'+prx.componentsHelper.getProp(item.rightBtnIcon,'asset')+'">';
            }
            cR += '</div>';
        }
        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,editableProperties: [
        {
            caption: 'Title'
            ,name: 'title'
            ,type: 'input'
            ,value: function(item,name) {
                return item.title;
            }
            ,changeProperty: {
                caption: 'Title',
                property: 'text',
                selector: '.ios7-navbar-title',
                transitionable: false
            }
        },
        {
            caption: 'Left Button'
            ,name: 'leftBtnText'
            ,type: 'input'
            ,value: function(item,name) {
                return item.leftBtnText;
            }
            ,hiddenByDefault: function(item) {
                return (item.leftBtnType == "none" || item.leftBtnType == "icon");
            }
            ,changeProperty: {
                caption: 'Left Button Text',
                property: 'text',
                selector: '.ios7-navbar-button-left .ios7-navbar-button-text',
                transitionable: false
            }
        },
        {
            caption: 'Right Button'
            ,name: 'rightBtnText'
            ,type: 'input'
            ,value: function(item,name) {
                return item.rightBtnText;
            },
            hiddenByDefault: function(item) {
                return (item.rightBtnType == "none" || item.rightBtnType == "icon");
            }
            ,changeProperty: {
                caption: 'Right Button Text',
                property: 'text',
                selector: '.ios7-navbar-button-right .ios7-navbar-button-text',
                transitionable: false
            }
        }
    ]
    ,interactions: [
        {
            caption: 'Title',
            name: 'ios7NavbarActionsTitle',
            type: 'action',
            value: function(item,name) { if (typeof(item.ios7NavbarActionsTitle) == "undefined") { item.ios7NavbarActionsTitle = []; } return item.ios7NavbarActionsTitle.length; },
            changeProperty: {
                caption: 'Title Interactions',
                selector: '',
                property: 'action',
                transitionable: false,
                changeable: false
            }
        },
        {
            caption: 'Left Button',
            name: 'ios7NavbarActionsLeftBtn',
            type: 'action',
            value: function(item,name) { if (typeof(item.ios7NavbarActionsLeftBtn) == "undefined") { item.ios7NavbarActionsLeftBtn = []; } return item.ios7NavbarActionsLeftBtn.length; },
            hiddenByDefault: function(item) {
                return item.leftBtnType == "none";
            },
            changeProperty: {
                caption: 'Left Button Interactions',
                selector: '',
                property: 'action',
                transitionable: false,
                changeable: false
            }
        },
        {
            caption: 'Right Button',
            name: 'ios7NavbarActionsRightBtn',
            type: 'action',
            value: function(item,name) { if (typeof(item.ios7NavbarActionsRightBtn) == "undefined") { item.ios7NavbarActionsRightBtn = []; } return item.ios7NavbarActionsRightBtn.length; },
            hiddenByDefault: function(item) {
                return item.rightBtnType == "none";
            },
            changeProperty: {
                caption: 'Right Button Interactions',
                selector: '',
                property: 'action',
                transitionable: false,
                changeable: false
            }
        }
    ]
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor
                ]
                ,[
                    prx.commonproperties.borderWidth
                    ,{
                        caption: false,
                        name: 'borderPos',
                        proptype: 'border-position',
                        type: 'select',
                        value: function(item,name) { return item.borderPos; },
                        values: [{ value: 'none', displayValue: 'None' },{ value: 'top', displayValue: 'Top' },{ value: 'bottom', displayValue: 'Bottom' }],
                        changeProperty: {
                            caption: 'Border position',
                            rerender: true,
                            changeable: false
                        }
                    }
                    ,prx.commonproperties.ios7BorderColor
                ]
            ]
        },
        {
            caption: 'Title',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','title')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'title', false, {propName: 'textFontStyle', caption: 'Title Font Style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','title')
                ]
                ,[
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'title',  false, {propName: 'textProperties', caption: 'Title underline', useAsDynProp: false})
                    ,prx.commonproperties.ios7TextColorRichText('color','title',void(0))
                ]
            ]
        },
        {
            caption: 'Buttons',
            properties: [
                [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'btnTextFont',
                        proptype: 'font-family-2-buttons',
                        type: 'select',
                        relatedEditableProperties: ['leftBtnText','rightBtnText'],
                        relatedCSSProperties: 'font-family',
                        value: function(item,name) { return item.btnTextFont; },
                        values: function(){ return prx.comps.fonts },
                        changeProperty: {
                            caption: 'Button Text font',
                            selector: '.changeProperty-btnTextFont',
                            property: 'font-family',
                            transitionable: false
                        }

                    }
                    ],

                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'], ['leftBtnText','rightBtnText'], false, {propName: 'btnTextFontStyle', caption: 'Button Text font Style', useAsDynProp: false}),
                    {
                        caption: false,
                        name: 'btnTextSize',
                        proptype: 'font-size-2-buttons',
                        type: 'combo-select',
                        relatedEditableProperties: ['leftBtnText','rightBtnText'],
                        relatedCSSProperties: 'font-size',
                        value: function(item,name) { return item.btnTextSize; },
                        values: prx.comps.textsize,
                        changeProperty: {
                            caption: 'Text size',
                            selector: '.changeProperty-btnTextSize',
                            property: 'font-size',
                            transitionable: true
                        }
                    }
                    ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'], ['leftBtnText','rightBtnText'], false, {propName: 'btnTextProperties', caption: 'Button underline', useAsDynProp: false}),
                    {
                        caption: { label: 'Color', class: 'text-properties-label text-color-label' },
                        name: 'btnTextColor',
                        proptype: 'font-color-2-buttons',
                        type: 'solid-colorpicker',
                        relatedEditableProperties: ['leftBtnText','rightBtnText'],
                        relatedCSSProperties: 'color',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item,name) { return item.btnTextColor; },
                        values: prx.comps.ios7Colors,
                        liveUpdate: 'color',
                        changeProperty: {
                            caption: 'Button text color',
                            selector: '.changeProperty-btnTextColor',
                            property: 'color',
                            transitionable: true
                        }
                    }
                ],
            ]
        },
        {
            caption: 'Left Button',
            properties: [
                [
                    {
                        caption: false,
                        name: 'leftBtnType',
                        type: 'select',
                        value: function(item,name) { return item.leftBtnType; },
                        values: [{ value: 'none', displayValue: 'None'}, { value: 'text', displayValue: 'Text'}, { value: 'icon', displayValue: 'Icon'}, { value: 'texticon', displayValue: 'Text & Icon'}],
                        onChange: function(item){
                            if(item.leftBtnType == "none" || item.leftBtnType == "text") {
                                $('#property-leftBtnIcon').hide();
                            } else {
                                $('#property-leftBtnIcon').show();
                            }
                            if(item.leftBtnType == "text" || item.leftBtnType == "texticon") {
                                $('#property-leftBtnText').show();
                            } else {
                                $('#property-leftBtnText').hide();
                            }
                            if(item.leftBtnType == "none") {
                                $('.interaction-property-group[data-action-property=ios7NavbarActionsLeftBtn]').hide();
                            } else {
                                $('.interaction-property-group[data-action-property=ios7NavbarActionsLeftBtn]').show();
                            }
                        },
                        changeProperty: {
                            caption: 'Left button style',
                            rerender: true
                        }
                    }
                ],
                [
                    {
                        caption: false
                        ,name: 'leftBtnIcon'
                        ,type: 'combo-asset'
                        ,displayValue: function(item,name,index) {
                            if(item.leftBtnIcon.fileId == '') {
                                return 'No icon selected';
                            }
                            return item.leftBtnIcon.name;
                        }
                        ,value: function(item,name,index) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.leftBtnIcon
                            });
                        }
                        ,hiddenByDefault: function(item,name,index){
                            return (item.leftBtnType == 'none' || item.leftBtnType == "text");
                        }
                        ,changeProperty: {
                            caption: 'Left Button Icon',
                            rerender: true
                         }
                    }
                ]
            ]
        },
        {
            caption: 'Right Button',
            properties: [
                [
                    {
                        caption: false,
                        name: 'rightBtnType',
                        type: 'select',
                        value: function(item,name) { return item.rightBtnType; },
                        values: [{ value: 'none', displayValue: 'None'}, { value: 'text', displayValue: 'Text'}, { value: 'icon', displayValue: 'Icon'}, { value: 'texticon', displayValue: 'Text & Icon'}],
                        onChange: function(item){
                            if(item.rightBtnType == "none" || item.rightBtnType == "text") {
                                $('#property-rightBtnIcon').hide();
                            } else {
                                $('#property-rightBtnIcon').show();
                            }
                            if(item.rightBtnType == "text" || item.rightBtnType == "texticon") {
                                $('#property-rightBtnText').show();
                            } else {
                                $('#property-rightBtnText').hide();
                            }
                            if(item.rightBtnType == "none") {
                                $('.interaction-property-group[data-action-property=ios7NavbarActionsRightBtn]').hide();
                            } else {
                                $('.interaction-property-group[data-action-property=ios7NavbarActionsRightBtn]').show();
                            }
                        },
                        changeProperty: {
                            caption: 'Right button style',
                            rerender: true
                        }
                    }
                ],
                [
                    {
                        caption: false
                        ,name: 'rightBtnIcon'
                        ,type: 'combo-asset'
                        ,displayValue: function(item,name,index) {
                            if(item.rightBtnIcon.fileId == '') {
                                return 'No icon selected';
                            }
                            return item.rightBtnIcon.name;
                        }
                        ,value: function(item,name,index) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.rightBtnIcon
                            });
                        }
                        ,hiddenByDefault: function(item,name,index){
                            return (item.rightBtnType == 'none' || item.rightBtnType == "text");
                        }
                        ,changeProperty: {
                            caption: 'Right Button Icon',
                            rerender: true
                         }
                    }
                ]
            ]
        },
          {
            caption: 'Advanced',
            properties: [[
                {
                    caption: 'Position fixed on transitions'
                    ,name: 'overlay'
                    ,type: 'onoff'
                    ,value: function(item,name) {
                        if(typeof(item.overlay)=="undefined") {
                            return false;
                        }
                        return item.overlay;
                    }

                    ,changeProperty: {
                        caption: 'Position fixed',
                        rerender: true
                    }
                }
            ]]
        }
    ]
}

/* SIMPLE NAVBAR */

prx.types.ios7_navbar = prx.componentsHelper.cloneobject(prx.types.ios7_navbar_buttons);
prx.types.ios7_navbar.name = 'ios7_navbar';
prx.componentsHelper.removeProperties(prx.types.ios7_navbar.editableProperties, ['leftBtnText','rightBtnText'])
prx.componentsHelper.removeProperties(prx.types.ios7_navbar.interactions, ['ios7NavbarActionsTitle','ios7NavbarActionsLeftBtn','ios7NavbarActionsRightBtn'])
prx.componentsHelper.removeProperties(prx.types.ios7_navbar.propertyGroups, ['btnTextFont','btnTextFontStyle', 'btnTextSize','btnTextColor','btnTextProperties','leftBtnType','leftBtnIcon','rightBtnType','rightBtnIcon'])

/* TABBAR */

prx.types.ios7_tabbar = prx.componentsHelper.cloneobject(prx.types.basic_tabbar);
prx.types.ios7_tabbar.name = 'ios7_tabbar';
prx.componentsHelper.removeProperties(prx.types.ios7_tabbar.propertyGroups, ['activeBackgroundColor','borderWidth','borderColor','iconpos','iconSize'])
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'backgroundColor', 'type', 'gradients-colorpicker');
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'backgroundColor', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'textColor', 'type', 'solid-colorpicker');
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'textColor', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'activeTextColor', 'type', 'solid-colorpicker');
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'activeTextColor', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'maskActive', 'type', 'solid-colorpicker');
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'maskActive', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'maskInactive', 'type', 'solid-colorpicker');
prx.types.ios7_tabbar.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_tabbar.propertyGroups, 'maskInactive', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.dynamicProperties.blankItem = {
    text: 'Label',
    icon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_8d8d8d.svg","color":"8d8d8d"},
    activeicon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_007aff.svg","color":"007aff"},
    actions: []
}

/* TOOLBAR */
prx.types.ios7_toolbar = {
    name: "ios7_toolbar"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item,symbol);
        var cR = '';

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-toolbar" '+((prx.componentsHelper.getProp(item.overlay,'boolean'))? 'data-mpoverlay="1"': '')+'>';
        cR += '<style>'
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-toolbar-inner { '+prx.utils.getBgCss(item.backgroundColor)+'; border-'+prx.componentsHelper.getProp(item.borderPos,'other')+': '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }';
        //cR += '#'+_id+' .ios7-toolbar-button { width: '+(_dims.width/item.buttons.length) +'px; }';
        cR += '</style>'
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-toolbar-inner liveUpdate-backgroundColor-background-color liveUpdate-borderColor-border-color changeProperty-backgroundColor changeProperty-borderColor">';

        $.each(item.buttons, function(i,elm){
            cR += '<div class="ios7-toolbar-button dynamic-property" data-dynamic-property-index="'+i+'" id="'+_id+'-buttons-'+i+'" style="background-image: url(' +prx.componentsHelper.getProp(elm.icon,'asset')+');"></div>'
        });

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,propertyGroups: [
          {
              caption: 'Style',
              properties: [
                  [
                      prx.commonproperties.ios7BackgroundColor
                  ]
                  ,[
                      prx.commonproperties.borderWidth
                      ,{
                          caption: false,
                          name: 'borderPos',
                          proptype: 'border-position',
                          type: 'select',
                          value: function(item,name) { return item.borderPos; },
                          values: [{ value: 'none', displayValue: 'None' },{ value: 'top', displayValue: 'Top' },{ value: 'bottom', displayValue: 'Bottom' }],
                          changeProperty: {
                              caption: 'Border position',
                              rerender: true,
                              changeable: false
                          }
                      }
                      ,prx.commonproperties.ios7BorderColor
                  ]
              ]
          },
          {
            caption: 'Advanced',
            properties: [[
                {
                    caption: 'Position fixed on transitions'
                    ,name: 'overlay'
                    ,type: 'onoff'
                    ,value: function(item,name) {
                        if(typeof(item.overlay)=="undefined") {
                            return false;
                        }
                        return item.overlay;
                    }

                    ,changeProperty: {
                        caption: 'Position fixed',
                        rerender: true
                    }
                }
            ]]
        }
    ]
    ,dynamicProperties: {
           data: 'buttons'
           ,propertyCaption: 'Buttons'
        ,propertyName: 'Button'
           ,addCaption: 'Add button'
           ,deleteCaption: 'Delete'
           ,blankItem: {
            icon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_007aff.svg","color":"007aff"},
               actions: []
           }
           ,interactions: [ prx.commonproperties.actions_buttons ]
          ,propertyGroups: [{
            caption: 'Icon',
            properties: [[
                  {
                      caption: false
                      ,name: 'icon'
                      ,type: 'combo-asset'
                      ,displayValue: function(item,name,index) {
                          if(item.buttons[index].icon.fileId == '') {
                              return 'No icon selected';
                          }
                          return item.buttons[index].icon.name;
                      }
                      ,value: function(item,name,index) {
                          return JSON.stringify({
                              allow: 'image',
                              asset: item.buttons[index].icon
                          });
                      }
                      ,changeProperty: {
                          caption: 'Icon',
                          rerender: true
                       }
                  }
              ]]
          }]
    }
}

/* TITLEBAR */
prx.types.ios11_titlebar = {
    name: "ios11_titlebar"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios11-titlebar" '+((prx.componentsHelper.getProp(item.overlay,'boolean'))? 'data-mpoverlay="1"': '')+'>';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios11-titlebar-title { '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios11-titlebar-inner">';
        cR += '<div class="ios11-titlebar-title liveUpdate-textColor-color changeProperty-textColor changeProperty-textSize changeProperty-textFont" data-editableproperty="title">'+prx.componentsHelper.getProp(item.title,'text-html')+'</div>';
        cR += '</div>';

        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,editableProperties: [
        {
            caption: 'Title'
            ,name: 'title'
            ,type: 'input'
            ,value: function(item,name) {
                return item.title;
            }
            ,changeProperty: {
                caption: 'Title',
                property: 'text',
                selector: '.ios11-titlebar-title',
                transitionable: false
            }
        },
    ],
    interactions: [
        prx.commonproperties.actions
    ]
    ,propertyGroups: [
        {
            caption: 'Title',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','title')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'title', false, {propName: 'textFontStyle', caption: 'Text font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','title')
                ]
                ,[
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'title', false, {propName: 'textProperties', caption: 'Title underline', useAsDynProp: false})
                    ,prx.commonproperties.ios7TextColorRichText('color','title',void(0))
                ]
            ]
        },
        {
            caption: 'Advanced',
            properties: [[
                {
                    caption: 'Position fixed on transitions'
                    ,name: 'overlay'
                    ,type: 'onoff'
                    ,value: function(item,name) {
                    if(typeof(item.overlay)=="undefined") {
                        return false;
                    }
                    return item.overlay;
                }

                    ,changeProperty: {
                    caption: 'Position fixed',
                    rerender: true
                }
                }
            ]]
        }
    ]
}

/* STATUSBAR */
prx.types.ios7_statusbar = {
    name: "ios7_statusbar"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item, symbol);

        var signalDotDims= 5*prx.componentsHelper.getScale(item.lib);
        var signalDotMargin= 7*prx.componentsHelper.getScale(item.lib);
        var batteryMarginTop= 5*prx.componentsHelper.getScale(item.lib);
        var batteryHeight= 10*prx.componentsHelper.getScale(item.lib);
        var batteryWidth= 20*prx.componentsHelper.getScale(item.lib);
        var batteryInnerDims= 3*prx.componentsHelper.getScale(item.lib);
        var batteryInnerLeftPos= -2*prx.componentsHelper.getScale(item.lib);
        var batteryInnerTopPos= 3*prx.componentsHelper.getScale(item.lib);
        var textSize= 12*prx.componentsHelper.getScale(item.lib);
        var now = new Date();

        now.getMinutes()

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-statusbar" '+((prx.componentsHelper.getProp(item.overlay,'boolean'))? 'data-mpoverlay="1"': '')+'>';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);

        cR += '#'+_id+' .ios7-statusbar-inner { '+ prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family') + ' ' + prx.componentsHelper.getProp(item.textFontStyle, 'font-style') +prx.utils.getBgCss(item.backgroundColor)+'; color: '+prx.gradients.prxToCss(item.foregroundColor)+'; }';
        cR += '#'+_id+' .ios7-statusbar-signal-dot { width: '+signalDotDims+'px; height: '+signalDotDims+'px; margin-top: '+signalDotMargin+'px; margin-bottom: '+signalDotMargin+'px; background-color: '+prx.gradients.prxToCss(item.foregroundColor)+'; border-color: '+prx.gradients.prxToCss(item.foregroundColor)+'; }';
        cR += '#'+_id+' .ios7-statusbar-battery-life-icon { width: '+batteryWidth+'px; height: '+batteryHeight+'px; margin-top: '+batteryMarginTop+'px; background-color: '+prx.gradients.prxToCss(item.foregroundColor)+'; border-color: '+prx.gradients.prxToCss(item.foregroundColor)+'; }';
        cR += '#'+_id+' .ios7-statusbar-battery-life-icon-battery-pole-inner { width: '+batteryInnerDims+'px; height: '+batteryInnerDims+'px; left: '+batteryInnerLeftPos+'px; top: '+batteryInnerTopPos+'px; background-color: '+prx.gradients.prxToCss(item.foregroundColor)+'; }';
        cR += '#'+_id+' .ios7-statusbar-provider, .ios7-statusbar-battery-life-text { line-height: '+_dims.height+'px; }';
        cR += '#'+_id+' .ios7-statusbar-provider, .ios7-statusbar-battery-life-text, .ios7-statusbar-time { font-size: '+textSize+'px; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-statusbar-inner liveUpdate-backgroundColor-background-color liveUpdate-foregroundColor-color changeProperty-backgroundColor">';
        cR += '<div class="ios7-statusbar-signal">';
        cR += '<div class="ios7-statusbar-signal-dot liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color"></div>';
        cR += '<div class="ios7-statusbar-signal-dot liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color"></div>';
        cR += '<div class="ios7-statusbar-signal-dot liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color"></div>';
        cR += '<div class="ios7-statusbar-signal-dot liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color"></div>';
        cR += '<div class="ios7-statusbar-signal-dot ios7-statusbar-signal-dot-empty liveUpdate-foregroundColor-border-color"></div>';
        cR += '<div class="ios7-statusbar-provider">PROTO.IO</div>';
        cR += '</div>';
        cR += '<div class="ios7-statusbar-time">'+("0" + now.getHours()).substr(-2,2)+':'+("0" + now.getMinutes()).substr(-2,2)+'</div>';
        cR += '<div class="ios7-statusbar-battery-life">';
        cR += '<div class="ios7-statusbar-battery-life-icon liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color">';
        cR += '<div class="ios7-statusbar-battery-life-icon-battery-pole">';
        cR += '<div class="ios7-statusbar-battery-life-icon-battery-pole-inner liveUpdate-foregroundColor-background-color"></div>';
        cR += '</div>';
        cR += '</div>';
        cR += '<div class="ios7-statusbar-battery-life-text">90%</div>';
        cR += '</div>';
        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor,
                    {
                        caption: 'Foreground',
                        name: 'foregroundColor',
                        proptype: 'foreground-color',
                        type: 'solid-colorpicker',
                        value: function(item,name) { return item.foregroundColor; },
                        values: prx.comps.ios7Colors,
                        //help: 'Will always revert to white in native app mode',
                        liveUpdate: 'color,border-color,background-color',
                        changeProperty: {
                            caption: 'Foreground color',
                            rerender: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Advanced',
            properties: [[
                {
                    caption: 'Position fixed on transitions'
                    ,name: 'overlay'
                    ,type: 'onoff'
                    ,value: function(item,name) {
                        if(typeof(item.overlay)=="undefined") {
                            return false;
                        }
                        return item.overlay;
                    }

                    ,changeProperty: {
                        caption: 'Position fixed',
                        rerender: true
                    }
                }
            ]]
        }
    ]
}

prx.types.ios11_statusbar = {
    name: "ios11_statusbar"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item, symbol);
        var now = new Date();

        if(typeof(item.textFontStyle) == "undefined")
            item.textFontStyle = '300';

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios11-statusbar" '+((prx.componentsHelper.getProp(item.overlay,'boolean'))? 'data-mpoverlay="1"': '')+'>';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);

        cR += '#'+_id+' .ios11-statusbar-inner { '+ prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family') + ' ' + prx.componentsHelper.getProp(item.textFontStyle, 'font-style') + prx.utils.getBgCss(item.backgroundColor)+'; color: '+prx.gradients.prxToCss(item.foregroundColor)+'; }';
        cR += '#'+_id+' svg path, #'+_id+' svg rect:not(.stroke-only-rect) { fill: '+ prx.gradients.prxToCss(item.foregroundColor) +'}';
        cR += '#'+_id+' svg rect.stroke-only-rect { stroke: '+ prx.gradients.prxToCss(item.foregroundColor) +'}';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios11-statusbar-inner liveUpdate-backgroundColor-background-color liveUpdate-foregroundColor-color changeProperty-backgroundColor">';

        cR += '<div class="ios11-statusbar-time">'+("0" + now.getHours()).substr(-2,2)+':'+("0" + now.getMinutes()).substr(-2,2)+'</div>';

        cR += '<div class="ios11-statusbar-icons">';

        cR += '<div class="ios11-statusbar-signal">';
        cR += '<svg width="'+18*prx.componentsHelper.getScale(_library)+'" height="'+12*prx.componentsHelper.getScale(_library)+'" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">';
        cR += '<path class="liveUpdate-foregroundColor-fill" d="M1.667 7.333h1c.552 0 1 .448 1 1v2c0 .553-.448 1-1 1h-1c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1zm4.666-2h1c.553 0 1 .448 1 1v4c0 .553-.447 1-1 1h-1c-.552 0-1-.447-1-1v-4c0-.552.448-1 1-1zM11 3h1c.552 0 1 .448 1 1v6.333c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1V4c0-.552.448-1 1-1zM15.667.667h1c.552 0 1 .447 1 1v8.666c0 .553-.448 1-1 1h-1c-.553 0-1-.447-1-1V1.667c0-.553.447-1 1-1z" fill-rule="nonzero"/>';
        cR += '</svg>';
        cR += '</div>';

        cR += '<div class="ios11-statusbar-wifi">';
        cR += '<svg width="'+16*prx.componentsHelper.getScale(_library)+'" height="'+12*prx.componentsHelper.getScale(_library)+'" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">';
        cR += '<path class="liveUpdate-foregroundColor-fill" d="M8.33 2.608c2.216 0 4.347.852 5.953 2.378.12.118.315.117.434-.003l1.156-1.167c.06-.06.094-.143.093-.228 0-.086-.035-.168-.096-.228C11.655-.68 5.005-.68.79 3.36c-.06.06-.096.142-.096.228 0 .085.033.168.093.228l1.156 1.167c.12.12.313.12.434.003C3.983 3.46 6.114 2.608 8.33 2.608zm0 3.796c1.218 0 2.392.452 3.294 1.27.122.115.315.113.434-.006L13.212 6.5c.06-.06.095-.143.094-.23 0-.086-.036-.168-.098-.228-2.75-2.556-7.004-2.556-9.753 0-.062.06-.097.142-.098.23 0 .085.033.168.094.23l1.155 1.166c.12.12.312.12.434.005.9-.816 2.074-1.27 3.29-1.27zm2.22 2.784c.06-.06.095-.144.093-.23 0-.087-.04-.17-.103-.227-1.276-1.078-3.144-1.078-4.42 0-.064.06-.1.14-.103.227-.002.087.032.17.094.23l2 2.017c.057.06.137.092.22.092.084 0 .163-.033.222-.092l1.997-2.016z" fill-rule="nonzero"/>';
        cR += '</svg>';
        cR += '</div>';

        cR += '<div class="ios11-statusbar-battery-life">';
        cR += '<svg width="'+25*prx.componentsHelper.getScale(_library)+'" height="'+12*prx.componentsHelper.getScale(_library)+'" viewBox="0 0 25 12" xmlns="http://www.w3.org/2000/svg">';
        cR += '<g fill="none" fill-rule="evenodd">';
        cR += '<rect class="stroke-only-rect liveUpdate-foregroundColor-stroke" opacity="0.35" x="0.5" y="0.833" width="21" height="10.333" rx="2.667"/>';
        cR += '<path class="liveUpdate-foregroundColor-fill" d="M23 4v4c.805-.34 1.328-1.127 1.328-2S23.805 4.34 23 4" fill-rule="nonzero" opacity=".4"/>';
        cR += '<rect class="liveUpdate-foregroundColor-fill" fill-rule="nonzero" x="2" y="2.333" width="18" height="7.333" rx="1.333"/>';
        cR += '</g>';
        cR += '</svg>';
        cR += '</div>';

        cR += '</div>';

        cR += '</div>';

        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor,
                    {
                        caption: 'Foreground',
                        name: 'foregroundColor',
                        proptype: 'foreground-color',
                        type: 'combo-colorpicker',
                        value: function(item,name) { return item.foregroundColor; },
                        values: prx.comps.ios7Colors,
                        //help: 'Will always revert to white in native app mode',
                        liveUpdate: 'color,fill,stroke',
                        changeProperty: {
                            caption: 'Foreground color',
                            rerender: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Advanced',
            properties: [[
                {
                    caption: 'Position fixed on transitions'
                    ,name: 'overlay'
                    ,type: 'onoff'
                    ,value: function(item,name) {
                        if(typeof(item.overlay)=="undefined") {
                            return false;
                        }
                        return item.overlay;
                    }

                    ,changeProperty: {
                        caption: 'Position fixed',
                        rerender: true
                    }
                }
            ]]
        }
    ]
}


/* TYPE: BUTTON */

prx.types.ios7_button_bg = prx.componentsHelper.cloneobject(prx.types.basic_button_bg);
prx.types.ios7_button_bg.name = 'ios7_button_bg';
prx.componentsHelper.removeProperties(prx.types.ios7_button_bg.propertyGroups, ['iconSize'])
prx.types.ios7_button_bg.propertyGroups = prx.componentsHelper.removePropertySetting(prx.types.ios7_button_bg.propertyGroups, 'borderWidth', 'expandableType');
prx.types.ios7_button_bg.propertyGroups = prx.componentsHelper.removePropertySetting(prx.types.ios7_button_bg.propertyGroups, 'borderWidth', 'expandedValues');

prx.types.ios7_button = prx.componentsHelper.cloneobject(prx.types.ios7_button_bg);
prx.types.ios7_button.name = 'ios7_button';
prx.componentsHelper.removeProperties(prx.types.ios7_button.propertyGroups, ['backgroundColor','borderWidth','borderColor','borderRadius'])

prx.types.ios7_button_text = prx.componentsHelper.cloneobject(prx.types.ios7_button);
prx.types.ios7_button_text.name = 'ios7_button_text';
prx.componentsHelper.removeProperties(prx.types.ios7_button_text.propertyGroups, ['img','iconpos'])

prx.types.ios7_button_icon_square = prx.componentsHelper.cloneobject(prx.types.ios7_button_bg);
prx.types.ios7_button_icon_square.name = 'ios7_button_icon_square';
prx.componentsHelper.removeProperties(prx.types.ios7_button_icon_square.propertyGroups, ['textFont','textSize', 'textFontStyle', 'textColor','textProperties','textAlign','iconpos', 'borderRadius'])

prx.types.ios7_button_icon_circular = prx.componentsHelper.cloneobject(prx.types.ios7_button_icon_square);
prx.types.ios7_button_icon_circular.name = 'ios7_button_icon_circular';
prx.componentsHelper.removeProperties(prx.types.ios7_button_icon_circular.propertyGroups, ['borderRadius'])

prx.types.ios7_button_ui = prx.componentsHelper.cloneobject(prx.types.ios7_button_icon_circular);
prx.types.ios7_button_ui.name = 'ios7_button_ui';
prx.componentsHelper.removeProperties(prx.types.ios7_button_ui.propertyGroups, ['borderWidth', 'borderColor'])

prx.types.ios7_button_icon = prx.componentsHelper.cloneobject(prx.types.ios7_button_ui);
prx.types.ios7_button_icon.name = 'ios7_button_icon';
prx.componentsHelper.removeProperties(prx.types.ios7_button_icon.propertyGroups, ['backgroundColor'])


/* SEGMENTED CONTROL */
prx.types.ios7_segmentedcontrol = {
    name: "ios7_segmentedcontrol"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        // if(typeof(item.textFontStyle) == 'undefined')
        //     item['textFontStyle'] = '300';

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
        var cR = '';

        if(typeof(item.changeActive) == "undefined") { item.changeActive = true; }

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-segmentedcontrol ' + (item.ios13 ? 'type-ios13-segmentedcontrol' : '') + ' ">';
        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        if (item.ios13) {
            cR += '#'+_id+' .ios7-segmentedcontrol-inner { '+prx.utils.getBgCss(item.backgroundColor)+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
            cR += '#'+_id+' .ios7-segmentedcontrol-button input + label { box-sizing: border-box; background-clip: content-box; border: '+(prx.componentsHelper.getScale(item.lib)*prx.componentsHelper.getProp(item.borderWidth,'num-border-width'))+'px solid transparent; }';
            cR += '#'+_id+' .ios7-segmentedcontrol-button input:not(:checked) + label .label-separator { border-color: '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }';
            cR += '#'+_id+' .ios7-segmentedcontrol-button label { border-radius: '+parseInt(prx.componentsHelper.getProp(item.borderRadius,'border-radius')) + 'px; } ';
        } else {
            cR += '#'+_id+' .ios7-segmentedcontrol-inner { '+prx.utils.getBgCss(item.backgroundColor)+'; border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
            cR += '#'+_id+' .ios7-segmentedcontrol-button { border-left: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }';
            cR += '#'+_id+' .ios7-segmentedcontrol-button:first-child label { border-radius: '+(prx.componentsHelper.getProp(parseInt(prx.componentsHelper.getProp(item.borderRadius,'border-radius')) - parseInt(prx.componentsHelper.getProp(item.borderWidth,'num-border-width')) - 1,'border-radius'))+' 0 0 '+(prx.componentsHelper.getProp(parseInt(prx.componentsHelper.getProp(item.borderRadius,'border-radius')) - parseInt(prx.componentsHelper.getProp(item.borderWidth,'num-border-width')) - 1,'border-radius'))+'; }';
            cR += '#'+_id+' .ios7-segmentedcontrol-button:last-child label { border-radius: 0 '+(prx.componentsHelper.getProp(parseInt(prx.componentsHelper.getProp(item.borderRadius,'border-radius')) - parseInt(prx.componentsHelper.getProp(item.borderWidth,'num-border-width')) - 1,'border-radius'))+' '+(prx.componentsHelper.getProp(parseInt(prx.componentsHelper.getProp(item.borderRadius,'border-radius')) - parseInt(prx.componentsHelper.getProp(item.borderWidth,'num-border-width')) - 1,'border-radius'))+' 0; }';
        }
        cR += '#'+_id+' .ios7-segmentedcontrol-button input:checked + label { '+prx.utils.getBgCss(item.activeBackgroundColor)+'; color: '+prx.componentsHelper.getProp(item.activeTextColor,'color-text')+'; }';

        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-segmentedcontrol-inner liveUpdate-backgroundColor-background-color liveUpdate-textColor ' + (item.ios13 ? '' : 'liveUpdate-borderColor-border-color changeProperty-borderColor ') + 'changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textSize changeProperty-textFont">';

        $.each(item.buttons, function(i,elm) {
            cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-segmentedcontrol-button dynamic-property '+ (item.ios13 ? '' : 'liveUpdate-borderColor-border-color') +((i == 0 || i == item.buttons.length-1)? ' changeProperty-borderRadius' : '')+'" data-dynamic-property-index="'+i+'">';
            cR += '<input type="radio" name="'+_id+'-radio-input" id="'+_id+'-radio-'+i+'" '+((prx.componentsHelper.getProp(item.selected,'num-other') == i) ? 'checked' : '')+' data-role="none" '+((prx.componentsHelper.getProp(item.active,'num-other') == i) ? 'class="liveUpdate-activeBackgroundColor-background-color liveUpdate-activeTextColor-color"' : '')+' ' +((!prx.componentsHelper.getProp(item.changeActive,'boolean')) ? 'disabled' : '')+ '>'
            cR += '<label for="'+_id+'-radio-'+i+'" '+((prx.componentsHelper.getProp(item.selected,'num-other') == i) ? 'class="liveUpdate-activeBackgroundColor-background-color liveUpdate-activeTextColor-color' +  (item.ios13 ? '' : ' liveUpdate-borderColor-border-color') : '')+' >'
            cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + prx.componentsHelper.getProp(elm.text,'text-textarea') + '</span>';
            if(item.ios13) {
                cR += '<span class="label-separator liveUpdate-borderColor-border-color changeProperty-borderColor"></span>';
            }

            cR += '</label>'
            cR += '</div>';
        });

		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	},
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
					{
						caption: 'Active',
						name: 'activeBackgroundColor',
						proptype: 'background-color-2-active',
						type: 'gradients-colorpicker',
						value: function(item,name) { return item.activeBackgroundColor; },
						values: prx.comps.ios7Colors,
						liveUpdate: 'background-color',
						changeProperty: {
							caption: 'Active background color',
							transitionable: false,
                            changeFunction: function(item, containerid){
                                var _id = (!containerid) ? item.id : containerid+'-'+item.id;
                                $('#' + _id).append('<style>#'+_id+' .ios7-segmentedcontrol-button input:checked + label { '+prx.utils.getBgCss(item.activeBackgroundColor)+'; } </style>')
                            }
						}
					}
				]
				,[
					prx.commonproperties.borderWidth
					,{
		                caption: false,
                        name: 'borderColor',
                        proptype: 'border-color',
                        type: 'solid-colorpicker',
                        value: function(item,name) { return item.borderColor; },
                        values: prx.comps.ios7Colors,
                        liveUpdate: 'border-color',
                        changeProperty: {
		                    caption: 'Border Color',
                            transitionable: false,
                            changeFunction: function(item, containerid){
                                var _id = (!containerid) ? item.id : containerid+'-'+item.id;
                                $('#' + _id).append('<style>#'+_id+' .ios7-segmentedcontrol-button input:not(:checked) + label .label-separator { border-color: '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; } </style>')
                            }
		                },
                        hiddenByDefault: function() {
                            return item.ios13 !== true;
                        }
		             }
					,{
                        caption: '<span class="icon icon-border-radius" title="Border radius"></span>',
                        name: 'borderRadius',
                        proptype: 'border-radius',
                        type: 'combo-select',
                        value: function(item, name) {
                            return typeof item.borderRadius == 'undefined' ? '' : item.borderRadius;
                        },
                        values: {min: 0, max: 20, step: 1},
                        changeProperty: {
                            caption: 'Border radius',
                            rerender: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','buttons.text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'buttons.text', false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false}),
                     prx.commonproperties.textSizeRichText('font-size','buttons.text')
                ],
                [
                     prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'buttons.text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false})
                    ,prx.commonproperties.ios7TextColorRichText('color','buttons.text',void(0), 'Default')
                    ,{
                    caption: { label: 'Active', class: 'text-properties-label text-color-label' },
                    name: 'activeTextColor',
                    proptype: 'font-color-2-active',
                    type: 'solid-colorpicker',
                    value: function(item,name) { return item.activeTextColor; },
                    values: prx.comps.ios7Colors,
                    pffSettings: prx.commonproperties.pffSettingsColor,
                    liveUpdate: 'color',
                    changeProperty: {
                        caption: 'Active Text color',
                        transitionable: false,
                        changeFunction: function(item, containerid){
                            var _id = (!containerid) ? item.id : containerid+'-'+item.id;
                            $('#' + _id).append('<style>#'+_id+' .ios7-segmentedcontrol-button input:checked + label { color: '+prx.componentsHelper.getProp(item.activeTextColor,'color-text')+'; } </style>')
                        }
                    }
                    }
                ]
            ]
        },
        {
            caption: 'Advanced',
            properties: [
               [
                    {
                            caption: 'Active Button'
                            ,name: 'selected'
                            ,type: 'select'
                            ,value: function(item,name) {
                                return item.selected;
                            }
                            ,values: function(item,name) {
                                //var _rA = [];
                                var _rA = [{value: '999',displayValue: 'None'}];
                                for (var n = 0; n < item.buttons.length; n++) {
                                    _rA.push({value: n,displayValue: prx.utils.escapeHTML(item.buttons[n].text.replace(/<br>/g, "\n").replace(/(<([^>]+)>|(&nbsp;))/ig, ''))});
                                }
                                return _rA;
                            }
                            ,changeProperty: {
                                caption: 'Active Button',
                                rerender: true
                            }

                    }
            ],
            [
                   {
                        caption: 'Change active state on click'
                        ,name: 'changeActive'
                        ,type: 'onoff'
                        ,value: function(item,name) {
                            return item.changeActive;
                        }
                      ,changeProperty: {
                        caption: 'Change active state on click',
                        rerender: true
                    }
                }
               ]
            ]
        }
    ]
    ,dynamicProperties: {
           data: 'buttons'
           ,propertyCaption: 'Buttons'
        ,propertyName: 'Button'
           ,addCaption: 'Add button'
           ,deleteCaption: 'Delete'
           ,captionProperty: 'text'
           ,blankItem: {
            text: 'Label',
               actions: []
           }
           ,interactions: [ prx.commonproperties.actions_buttons ]
           ,editableProperties: [
              {
                 caption: 'Text'
                 ,name: 'text'
                 ,type: 'input'
                 ,value: function(item,name,index) {
                     return item.buttons[index].text;
                 }
                 ,changeProperty: {
                    caption: 'Text',
                    selector: 'label',
                    property: 'text',
                    transitionable: false
                 }
             }
          ]
    }
}

/* PAGE CONTROLLER */
prx.types.ios7_pagecontroller = {
    name: "ios7_pagecontroller"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item,symbol);
        var cR = '';

        if(typeof(item.changeActive) == "undefined") { item.changeActive = true; }

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-pagecontroller">';
        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-pagecontroller-button label { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; width: '+_dims.height+'px; }';
        cR += '#'+_id+' .ios7-pagecontroller-button input:checked + label { background-color: '+prx.componentsHelper.getProp(item.activeBackgroundColor,'color-background')+'; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<div class="ios7-pagecontroller-inner">';
		$.each(item.buttons, function(i,elm) {
			cR += '<div class="ios7-pagecontroller-button dynamic-property" data-dynamic-property-index="'+i+'" id="'+_id+'-buttons-'+i+'">';
			cR += '<input type="radio" name="'+_id+'-radio-input" id="'+_id+'-radio-'+i+'" '+((prx.componentsHelper.getProp(item.selected,'num-other') == i) ? 'checked' : '')+' data-role="none" ' +((!prx.componentsHelper.getProp(item.changeActive,'num-other')) ? 'disabled' : '')+ '>'
			cR += '<label for="'+_id+'-radio-'+i+'" class="changeProperty-borderRadius '+((prx.componentsHelper.getProp(item.selected,'num-other') == i) ? 'changeProperty-activeBackgroundColor liveUpdate-activeBackgroundColor-background-color' : 'changeProperty-backgroundColor liveUpdate-backgroundColor-background-color')+'" ></label>';
			cR += '</div>';
		});
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	},
	onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item,symbol);

		$('#'+_id+' label').width(_dims.height);
	},
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					{
						caption: 'Background',
						proptype: 'background-color' ,
						name: 'backgroundColor',
						type: 'solid-colorpicker',
						value: function(item,name) {
							return item.backgroundColor;
						},
						values: prx.comps.ios7Colors,
						liveUpdate: 'background-color',
						changeProperty: {
							caption: 'Background color',
							selector: '.changeProperty-backgroundColor',
							property: 'background-color',
							rerender: true
						}
					},
					{
						caption: 'Active',
						name: 'activeBackgroundColor',
						proptype: 'background-color-2-active',
						type: 'solid-colorpicker',
						value: function(item,name) { return item.activeBackgroundColor; },
						values: prx.comps.ios7Colors,
						liveUpdate: 'background-color',
						changeProperty: {
							caption: 'Active background color',
							selector: '.changeProperty-activeBackgroundColor',
							property: 'background-color',
							rerender: true
						}
					}
				]
				,[
					{
						caption: 'Border <span class="icon icon-border-radius" title="Border radius"></span>',
						name: 'borderRadius',
						proptype: 'border-radius',
						type: 'combo-select',
						value: function(item,name) { return item.borderRadius; },
						values: { min: 0, max: 20, step: 1 },
                        expandableType: 'borderRadius',
						expandedValues: ["tl", "tr", "bl", "br"],
						changeProperty: {
							caption: 'Border radius',
							selector: '.changeProperty-borderRadius',
							property: 'border-radius',
							transitionable: true
						}
					}
				]
			]
		},
		{
      	  caption: 'Advanced',
      	  properties: [
			   [
					{
							caption: 'Active Button'
							,name: 'selected'
							,type: 'select'
							,value: function(item,name) {
								return item.selected;
							}
							,values: function(item,name) {
								//var _rA = [];
								var _rA = [{value: '999',displayValue: 'None'}];
								for (var n = 0; n < item.buttons.length; n++) {
									_rA.push({value: n,displayValue: 'Button ' + (n+1) });
								}
								return _rA;
							}
							,changeProperty: {
								caption: 'Button',
								rerender: true
							}

                    }
            ],
            [
                   {
                        caption: 'Change active state on click'
                        ,name: 'changeActive'
                        ,type: 'onoff'
                        ,value: function(item,name) {
                            return item.changeActive;
                        }
                      ,changeProperty: {
                        caption: 'Change active state on click',
                        rerender: true
                    }
                }
               ]
            ]
        }
    ]
    ,dynamicProperties: {
           data: 'buttons'
           ,propertyCaption: 'Buttons'
        ,propertyName: 'Button'
           ,addCaption: 'Add button'
           ,deleteCaption: 'Delete'
           ,blankItem: {
            text: 'Label',
               actions: []
           }
           ,interactions: [ prx.commonproperties.actions_buttons ]
    }
}

/* TYPE: LABEL */
prx.types.ios7_label = {
    name: "ios7_label"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        // if(typeof(item.textFontStyle) == 'undefined')
        //     item['textFontStyle'] = '300';

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
        var cR = '';

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-label">';
        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-label-inner { '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+' text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; }'
        cR += '#'+_id+' .ios7-label-text { '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-label-inner">';
        cR += '<div class="ios7-label-text liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont changeProperty-textSize"><span data-editableproperty="text">'+prx.componentsHelper.getProp(item.text,'text-textarea')+'</span></div>';
        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    },
    editableProperties: [{
        caption: 'Text',
        name: 'text',
        type: 'textarea',
        value: function(item,name) { return item.text; },
        changeProperty: {
            caption: 'Text',
            selector: '.ios7-label-text',
            property: 'text',
            transitionable: false
        }
    }],
    propertyGroups: [
           {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'text', false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','text')
                ]
                ,[
                     prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false}),
                     prx.commonproperties.ios7TextColorRichText('color','text',void(0))
                ],
                [
                     prx.commonproperties.textAlignRichText('text-align','text')
                ]
            ]
        }
    ]
}

//TYPE: TEXTFIELD
prx.types.ios7_textfield = {
    name: 'ios7_textfield'
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        // if(typeof(item.textFontStyle) == 'undefined')
        //     item['textFontStyle'] = '300';

        var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');
            _props += prx.componentsHelper.getProp(item.textFontStyle,'props-text-style');
        var _dims = prx.componentsHelper.getRealDims(item, symbol);
        var cR = '';

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-textfield type-ios7-textfield-'+prx.componentsHelper.getProp(item.inputtype,'text-other')+'">';
        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' input, #'+_id+' .faux-input { '+prx.gradients.getBgCssByProperty(item.backgroundColor,'color-background')+'; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+ _props + ' }';
        cR += '#'+_id+' .faux-input.placeholder-input { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'; }'
        cR += '#'+_id+' .faux-input { '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+'; }'
        cR += '#'+_id+' input:-moz-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important;'+_props+' }'
        cR += '#'+_id+' input::-moz-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important;'+_props+' }'
        cR += '#'+_id+' input::-webkit-input-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important;'+_props+' }'
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		if(prx.editor) {
			cR += '<div class="faux-input liveUpdate-textColor-color liveUpdate-borderColor-border-color liveUpdate-backgroundColor-background-color" data-editableproperty="value">'+prx.componentsHelper.getProp(item.value,'text')+'</div>';
			cR += '<div class="faux-input placeholder-input liveUpdate-placeholderColor-color liveUpdate-borderColor-border-color liveUpdate-backgroundColor-background-color">'+prx.componentsHelper.getProp(item.placeholder,'other')+'</div>'
		} else {
			cR += '<input autocomplete="new-password" data-lpignore="true" type="'+prx.componentsHelper.getProp(item.inputtype,'other')+'" value="'+prx.componentsHelper.getProp(item.value,'other')+'" placeholder="'+prx.componentsHelper.getProp(item.placeholder,'other')+'" data-role="none" class="real-input changeProperty-backgroundColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textAlign" />'
		}
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(!prx.editor) {
			$('#'+_id)
				.hammer()
				.find('.real-input')
				.focus(function(){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
					$('#'+_id).trigger('inputfocus');
				})
				.blur(function(){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
			        $('#'+_id).trigger('inputblur');
				})
				.keyup(function(e){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
					var event = $.Event("inputkeyup");
					event.which = e.which;
					$('#'+_id).trigger(event);
				})

            prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');

        }
    }
    ,interactions: [ prx.commonproperties.actions ]
    ,mpactions: {
        specialEvents: ['inputfocus','inputblur','inputkeyup']
    }
    ,editableProperties: [
                      {
            caption: 'Value'
            ,name: 'value'
            ,type: 'input'
            ,isRichText: false
            ,value: function(item,name) {
                return item.value;
            }
            ,changeProperty: {
                caption: 'Value',
                property: 'input-value',
                selector: 'input.real-input',
                transitionable: false
            }
        }
      ]
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColorSolid
                ]
                ,[
                    prx.commonproperties.borderWidth
                    ,prx.commonproperties.ios7BorderColor
                    ,prx.commonproperties.borderRadiusExpandable
                ]
            ]
        },{
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFont
                ],
                [
                    prx.commonproperties.textFontStyle,
                    prx.commonproperties.textSize
                ],
                [
                     prx.commonproperties.textProperties
                    ,prx.commonproperties.ios7TextColor()
                ],
                [
                    prx.commonproperties.textAlign
                ]
            ]
        },{
            caption: 'Placeholder (If field is empty)',
            properties: [
                [
                    {
                        caption: 'Placeholder Text',
                        name: 'placeholder',
                        type: 'input',
                        value: function(item,name) {
                            return item.placeholder;
                        }
                        ,changeProperty: {
                            caption: 'Placeholder',
                            rerender: true
                        }
                    }
                ],
                [
                    {
                       caption: 'Placeholder Color',
                       name: 'placeholderColor',
                       proptype: 'placeholder-color',
                       type: 'solid-colorpicker',
                       value: function(item,name) { if(typeof(item.placeholderColor)=='undefined') { return '999999'; } return item.placeholderColor; }
                        ,values: prx.comps.ios7Colors
                       ,liveUpdate:'color'
                       ,changeProperty: {
                            caption: 'Placeholder color',
                            rerender: true
                        }
                   }
                ]
            ]
        },
        {
            caption: 'Input type',
            properties: [
                [
                    {
                        caption: false,
                        name: 'inputtype',
                        type: 'select',
                        value: function(item,name) {
                            return item.inputtype;
                        }
                        ,values: [{ value: 'text', displayValue: 'Text' }, { value: 'number', displayValue: 'Numeric' }, { value: 'email', displayValue: 'Email' }, { value: 'password', displayValue: 'Password' }, { value: 'tel', displayValue: 'Telephone' }]
                        ,changeProperty: {
                            caption: 'Input type',
                            rerender: true
                        }
                        ,hiddenByDefault: function(item) {
                            //return (item.inputtype=="password")
                            return (item.name == "ios7_passwordfield")
                        }
                    }
                ]
            ]
        }
    ]

};

//TYPE: TEXTAREA
prx.types.ios7_textarea = {
    name: 'ios7_textarea'
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        // if(typeof(item.textFontStyle) == 'undefined')
        // 	item['textFontStyle'] = '300';

        var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');
            _props += prx.componentsHelper.getProp(item.textFontStyle,'props-text-style');
        var cR = '';

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-textarea">';
        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' > textarea, #'+_id+' .faux-input { '+prx.utils.getBgCss(item.backgroundColor)+'; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+';  '+ _props + '}';
        cR += '#'+_id+' .faux-input { '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+'; }'
        cR += '#'+_id+' .faux-input.placeholder-input { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'; }'
        cR += '#'+_id+' textarea:-moz-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important; '+_props+'}'
        cR += '#'+_id+' textarea::-webkit-input-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important;'+_props+' }'
        cR += '#'+_id+' textarea::-moz-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important; '+_props+'}'
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
        if(prx.editor) {
            cR += '<div class="faux-input liveUpdate-textColor-color liveUpdate-borderColor-border-color liveUpdate-backgroundColor-background-color" data-editableproperty="value">'+prx.componentsHelper.getProp(item.value,'text-textarea')+'</div>';
            cR += '<div class="faux-input placeholder-input liveUpdate-placeholderColor-color liveUpdate-borderColor-border-color liveUpdate-backgroundColor-background-color">'+prx.componentsHelper.getProp(item.placeholder,'other')+'</div>'
        } else {
            cR += '<textarea class="real-input liveUpdate-placeholderColor-color liveUpdate-backgroundColor-background-color liveUpdate-textColor-color liveUpdate-borderColor-border-color changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textSize changeProperty-textFont changeProperty-textColor changeProperty-textAlign" placeholder="'+prx.componentsHelper.getProp(item.placeholder,'other')+'" data-role="none">'+prx.componentsHelper.getProp(item.value,'text-textarea').replace(/<br \/>/g, "\n")+'</textarea>'
        }
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,afterDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(!prx.editor) {
			$('#'+_id)
				.hammer()
				.find('textarea')
				.focus(function(){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
					$('#'+_id).trigger('inputfocus');
				})
				.blur(function(){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
			        $('#'+_id).trigger('inputblur');
				})
				.keyup(function(e){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
					var event = $.Event("inputkeyup");
					event.which = e.which;
					$('#'+_id).trigger(event);
				});

            prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
        }
    }
    ,editableProperties: [
          {
              caption: 'Value'
              ,name: 'value'
              ,type: 'textarea'
            ,isRichText: false
              ,value: function(item,name) {
                  return item.value;
              }
              ,changeProperty: {
                caption: 'Value',
                property: 'textarea-value',
                selector: 'textarea',
                transitionable: false
            }
          }
      ]
    ,interactions: [ prx.commonproperties.actions ]
    ,mpactions: {
        specialEvents: ['inputfocus','inputblur','inputkeyup']
    }
	,propertyGroups:	[
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.ios7BackgroundColorSolid
				],
				[
					prx.commonproperties.borderWidth
					,prx.commonproperties.ios7BorderColor
					,prx.commonproperties.borderRadiusExpandable

                ]
            ]

        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFont
                ],
                [
                    prx.commonproperties.textFontStyle,
                    prx.commonproperties.textSize
                ],
                [
                    prx.commonproperties.textProperties,
                    prx.commonproperties.ios7TextColor()
                ],
                [
                    prx.commonproperties.textAlign
                ]
            ]
        },{
            caption: 'Placeholder  (If field is empty)',
            properties: [
                [
                    {
                        caption: 'Placeholder Text'
                        ,name: 'placeholder'
                        ,type: 'input'
                        ,value: function(item,name) {
                            return item.placeholder;
                        }
                          ,changeProperty: {
                            caption: 'Placeholder',
                            rerender: true
                        }
                    }
                ],
                [
                    {
                        caption: 'Placeholder Color',
                        name: 'placeholderColor',
                        proptype: 'placeholder-color',
                        type: 'solid-colorpicker',
                        value: function(item,name) { if(typeof(item.placeholderColor)=='undefined') { return '999999'; } return item.placeholderColor; }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate:'color'
                          ,changeProperty: {
                            caption: 'Placeholder color',
                            rerender: true
                        }
                    }
                ]
            ]
        }
    ]
};

/* TYPE: CHECKBOX */
prx.types.ios7_checkbox = {
	name: "ios7_checkbox"
	,onDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var cR = '';

        if(typeof(item.radioButtonsGroupName) == 'undefined') {
            item.radioButtonsGroupName = '';
        }

        var _hasRadioButtonsGroupName = typeof(item.radioButtonsGroupName) != 'undefined' && item.radioButtonsGroupName.length > 0;
        var _type = !_hasRadioButtonsGroupName ? 'checkbox' : 'radio';
        var radioButtonsGroupName = _hasRadioButtonsGroupName ? 'name="' + containerid + '-radioButtonsGroup-' + item.radioButtonsGroupName + '"' : '';

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-checkbox">';

		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .ios7-checkbox-inner { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; }'
		cR += '#'+_id+' input:checked + .ios7-checkbox-inner { background-color: '+prx.componentsHelper.getProp(item.activeBackgroundColor,'color-background')+'; }'
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<input type="'+_type+'" id="'+_id+'-checkbox" '+((prx.componentsHelper.getProp(item.active,'boolean')) ? 'checked="checked"' : '') + ' data-role="none" ' + radioButtonsGroupName + '/>';
		cR += '<label for="'+_id+'-checkbox" class="ios7-checkbox-inner '+((prx.componentsHelper.getProp(item.active,'boolean')) ? 'liveUpdate-activeBackgroundColor-background-color' : 'liveUpdate-backgroundColor-background-color liveUpdate-borderColor-border-color') + ' changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius" data-clickable="true">';
		cR += '<img class="ios7-checkbox-icon" src="'+prx.componentsHelper.getProp(item.img,'asset')+'">';
		cR += '</label>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        var _hasRadioButtonsGroupName = typeof(item.radioButtonsGroupName) != 'undefined' && item.radioButtonsGroupName.length > 0;
        //checkbox by default
        var _isCheckboxAndRadioGrouped = _hasRadioButtonsGroupName;

		if(!prx.editor) {

            $('#'+_id+'-checkbox').on('change.custom-change-event', function(e){
                if(typeof(prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']) == "undefined") { prx.variables._triggerData['input:checked[id='+_id+'-checkbox]'] = {}; }
                prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']['checkboxchange'] = { state: $(this).is(':checked') };
                if(typeof(prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']) == "undefined") { prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {}; }
                prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
                if(typeof(prx.variables._triggerData['#' + _id]) == "undefined") { prx.variables._triggerData['#' + _id] = {}; }
                prx.variables._triggerData['#' + _id]['checkboxchange'] = { state: $(this).is(':checked') };
                $(this).trigger('checkboxchange');
            })

            if(_isCheckboxAndRadioGrouped) {
                $('label[for="'+_id+'-checkbox"]').hammer().on('mousedown touchstart', function(event) {
                    var $checkbox = $('#'+_id+'-checkbox');
                    var checked = $checkbox.prop('checked');
                    $("input[type='radio'][name='"+$checkbox.attr('name')+"']").each(function(){
                        if($(this).is(':checked')){
                            $(this).prop('checked', false).trigger('change');
                        } else {
                            $(this).prop('checked', false);
                        }
                    });
                    $checkbox.prop('checked', !checked).trigger('change');
                    event.preventDefault();
                });

                $('label[for="'+_id+'-checkbox"]').hammer().on('click tap', function(event) {
                    event.preventDefault();
                });

                $('#'+_id+'-checkbox').on('change', function(event) {
                    event.preventDefault();
                });


            }
			$('#'+_id).hammer();
			prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
		}
	}
	,interactions: [
		{
			caption: 'Change',
			name: 'actions',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			changeProperty: {
				caption: 'Interactions on change',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{
			caption: 'Activation',
			name: 'checkboxActionsOnActive',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.checkboxActionsOnActive) == "undefined") {
					item.checkboxActionsOnActive = [];
				}
				return item.checkboxActionsOnActive.length;
			}
		},
		{
			caption: 'Deactivation',
			name: 'checkboxActionsOnDeactive',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.checkboxActionsOnDeactive) == "undefined") {
					item.checkboxActionsOnDeactive = [];
				}
				return item.checkboxActionsOnDeactive.length;
			}
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange']
	}
	,propertyGroups: [
   		{
		    caption: 'Style',
		    properties: [
		        [
					{
						caption: 'Background',
						name: 'backgroundColor',
						proptype: 'background-color',
						type: 'solid-colorpicker',
						value: function(item,name) { return item.backgroundColor; },
						values: prx.comps.ios7Colors,
						liveUpdate: 'background-color',
						changeProperty: {
							caption: 'Background color',
							rerender: true
						}
					},
					{
						caption: 'Active',
						name: 'activeBackgroundColor',
						proptype: 'background-color-2-active',
						type: 'solid-colorpicker',
						value: function(item,name) { return item.activeBackgroundColor; },
						values: prx.comps.ios7Colors,
						liveUpdate: 'background-color',
						changeProperty: {
							caption: 'Active background color',
							rerender: true
						}
					}
				]
				,[
					prx.commonproperties.borderWidth
					,prx.commonproperties.ios7BorderColor
					,prx.commonproperties.borderRadiusExpandable
				]
			]
		},
		{
      		caption: 'Icon',
      		properties: [[
            		{
						caption: false
						,name: 'img'
						,type: 'combo-asset'
						,displayValue: function(item,name,index) {
							if(item.img.fileId == '') {
								return 'No icon selected';
							}
							return item.img.name;
						}
						,value: function(item,name,index) {
							return JSON.stringify({
								allow: 'image',
								asset: item.img
							});
						}
						,changeProperty: {
							caption: 'Icon',
							rerender: true
						 }
					}
		        ]
	        ]
		},
		{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,type: 'onoff'
                        ,onChange: function(item, name) {
                            return prx.commonproperties.radioButtonsActiveStatusOnChange(item, name);
                        }
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active state',
							rerender: true
						}

					}
				],
				[
                    prx.commonproperties.radioButtonsGroupNameInput
				]
			]
		}
	]
}

//TYPE: ON OFF SWITCH
prx.types.ios7_switch = {
	name: 'ios7_switch'
	,onDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item,symbol);

		if(typeof(item.radioButtonsGroupName) == 'undefined') {
			item.radioButtonsGroupName = '';
		}

        var _hasRadioButtonsGroupName = typeof(item.radioButtonsGroupName) != 'undefined' && item.radioButtonsGroupName.length > 0;
        var _type = !_hasRadioButtonsGroupName ? 'checkbox' : 'radio';
        var radioButtonsGroupName = _hasRadioButtonsGroupName ? 'name="' + containerid + '-radioButtonsGroup-' + item.radioButtonsGroupName + '"' : '';


        var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-switch">';

		cR += '<style>'
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' label { border-radius: '+prx.componentsHelper.getProp(_dims.height/2,'border-radius')+'; border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.inactiveBorderColor,'color-border')+'; background-color: '+prx.componentsHelper.getProp(item.inactiveLabelColor,'color-background')+'; }'
		cR += '#'+_id+' input:checked + label { border-color: '+((item.name=='ios10_switch') ? prx.componentsHelper.getProp(item.activeLabelColor,'color-background') : prx.componentsHelper.getProp(item.activeBorderColor,'color-border'))+'; background-color: '+prx.componentsHelper.getProp(item.activeLabelColor,'color-background')+'; }';
		cR += '#'+_id+' .switch { width: '+ ((item.name=='ios10_switch') ? (_dims.height - (2*prx.componentsHelper.getProp(item.borderWidth,'num-border-width'))) : _dims.height)+'px; '+prx.utils.getBgCss(item.switchColor)+'; border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.inactiveBorderColor,'color-border')+'; '+((item.name=='ios10_switch') ? 'top: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px; left: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px; bottom: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px; box-shadow: 0px '+(3*prx.componentsHelper.getProp(item.borderWidth,'num-border-width'))+'px '+(8*prx.componentsHelper.getProp(item.borderWidth,'num-border-width'))+'px 0px rgba(0,0,0,0.15);' : 'top: 0; left: 0; bottom: 0;')+'}';
		cR += '#'+_id+' input:checked + label .switch { left: '+((item.name=='ios10_switch') ? (_dims.width - _dims.height + parseInt(prx.componentsHelper.getProp(item.borderWidth,'num-border-width'))) : (_dims.width - _dims.height))+'px; '+((item.name=='ios10_switch') ? '' : 'border-color: '+prx.componentsHelper.getProp(item.activeBorderColor,'color-border')+';')+' }';
		cR += '</style>'
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<input type="'+_type+'" '+((prx.componentsHelper.getProp(item.active,'boolean')) ? 'checked' : '')+ ' id="'+_id+'-flipswitch" data-role="none" ' + radioButtonsGroupName + ' />';

        var labelClasses,
            switchClasses;

        if(prx.componentsHelper.getProp(item.active,'boolean')) {

            if( item.name=='ios10_switch' ) {
                labelClasses = ' liveUpdate-activeLabelColor-background-color liveUpdate-activeLabelColor-border-color';
			}
			else {
                labelClasses = ' liveUpdate-activeLabelColor-background-color liveUpdate-activeBorderColor-border-color';
			}

            if( item.name=='ios10_switch' ) {
                switchClasses = 'liveUpdate-inactiveBorderColor-border-color';
            }
            else {
                switchClasses = 'liveUpdate-activeBorderColor-border-color';
			}
		}
		else {

            if( item.name=='ios10_switch' ) {
                labelClasses = ' liveUpdate-inactiveLabelColor-background-color liveUpdate-inactiveBorderColor-border-color';
            }
            else {
                labelClasses = ' liveUpdate-inactiveLabelColor-background-color liveUpdate-inactiveBorderColor-border-color';
			}

            switchClasses = 'liveUpdate-inactiveBorderColor-border-color';
		}

        cR += '<label for="'+_id+'-flipswitch" class="'+ labelClasses +'" data-clickable="true">'; // data-clickable for greensock draggable - if draggable or in draggable container clicking on the flipswitch wont change state

		cR += '<div class="switch liveUpdate-switchColor-background-color changeProperty-switchColor '+ switchClasses +'"></div>';

        cR += '</label>';

        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,onResize: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item,symbol);

        $('#'+_id+' label').css('border-radius', (_dims.height/2)+'px');

        if(item.name=='ios10_switch')
            $('#'+_id+' .switch').css({'width': (_dims.height - (2*prx.componentsHelper.getProp(item.borderWidth,'num-border-width'))) + 'px'})
        else
            $('#'+_id+' .switch').css({'width': (_dims.height) + 'px'})

        if($('#'+_id+'-flipswitch').is(':checked')) {

            if(item.name=='ios10_switch')
                $('#'+_id+' .switch').css('left', (_dims.width - _dims.height + parseInt(prx.componentsHelper.getProp(item.borderWidth,'num-border-width')))+'px');
            else
                $('#'+_id+' .switch').css('left', (_dims.width - _dims.height)+'px');
        }
    }
    ,afterDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(!prx.editor) {

            var _hasRadioButtonsGroupName = typeof(item.radioButtonsGroupName) != 'undefined' && item.radioButtonsGroupName.length > 0;
            //this is checkbox by default
            var _isCheckboxAndRadioGrouped = _hasRadioButtonsGroupName;

            $('#'+_id+'-flipswitch').on('change.custom-change-event', function(e){

                if(typeof(prx.variables._triggerData['#'+_id+'-flipswitch:checked']) == "undefined") { prx.variables._triggerData['#'+_id+'-flipswitch:checked'] = {}; }
                prx.variables._triggerData['#'+_id+'-flipswitch:checked']['checkboxchange'] = { state: $(this).is(':checked') };
                if(typeof(prx.variables._triggerData['#'+_id+'-flipswitch:not(:checked)']) == "undefined") { prx.variables._triggerData['#'+_id+'-flipswitch:not(:checked)'] = {}; }
                prx.variables._triggerData['#'+_id+'-flipswitch:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
                if(typeof(prx.variables._triggerData['#' + _id]) == "undefined") { prx.variables._triggerData['#' + _id] = {}; }
                prx.variables._triggerData['#' + _id]['checkboxchange'] = { state: $(this).is(':checked') };
                $(this).trigger('checkboxchange');

            })

            if(_isCheckboxAndRadioGrouped) {

                $('label[for="'+_id+'-flipswitch"]').hammer().on('mousedown touchstart', function(event) {
                    var $checkbox = $('#'+_id+'-flipswitch');
                    var checked = $checkbox.prop('checked');
                    $("input[type='radio'][name='"+$checkbox.attr('name')+"']").each(function(){
                        if($(this).is(':checked')){
                            $(this).prop('checked', false).trigger('change');
                        } else {
                            $(this).prop('checked', false);
                        }
                    });
                    $checkbox.prop('checked', !checked).trigger('change');
                    event.preventDefault();
                });
                //
                $('label[for="'+_id+'-flipswitch"]').hammer().on('click tap change', function(event) {
                    event.preventDefault();
                });

                $('#'+_id+'-flipswitch').hammer().on('click tap change', function(event) {
                    event.preventDefault();
                });

            }

            $('#'+_id).hammer();
            prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
        }
    }
    ,interactions: [
        {
            caption: 'Change',
            name: 'actions',
            type: 'action',
            value: function (item, name) {
                if (typeof(item.actions) == "undefined") {
                    item.actions = [];
                }
                return item.actions.length;
            },
            changeProperty: {
                caption: 'Interactions on change',
                selector: '',
                property: 'action',
                transitionable: false,
                changeable: false
            }
        }, {
            caption: 'Activation',
            name: 'flipswitchActionsOnActive',
            type: 'action',
            value: function (item, name) {
                if (typeof(item.flipswitchActionsOnActive) == "undefined") {
                    if (typeof(item.actionsOnActive) == "undefined") {
                        item.flipswitchActionsOnActive = [];
                    } else {
                        item.flipswitchActionsOnActive = item.actionsOnActive;
                    }
                }
                return item.flipswitchActionsOnActive.length;
            }
        }, {
            caption: 'Deactivation',
            name: 'flipswitchActionsOnDeactive',
            type: 'action',
            value: function (item, name) {
                if (typeof(item.flipswitchActionsOnDeactive) == "undefined") {
                    if (typeof(item.actionsOnDeactive) == "undefined") {
                        item.flipswitchActionsOnDeactive = [];
                    } else {
                        item.flipswitchActionsOnDeactive = item.actionsOnDeactive;
                    }
                }
                return item.flipswitchActionsOnDeactive.length;
            }
        }
    ]
    ,mpactions: {
        specialEvents: ['checkboxchange'],
    }
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [

                [
                    {
                        caption: 'Label Inactive'
                        ,name: 'inactiveLabelColor'
                        ,proptype: 'background-color'
                        ,type: 'solid-colorpicker'
                        ,value: function(item,name) {
                            return item.inactiveLabelColor;
                        }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate:'background-color'
                        ,changeProperty: {
                            caption: 'Inactive color',
                            rerender: true
                        }
                    },
                    {
                        caption: 'Active'
                        ,name: 'activeLabelColor'
                        ,proptype: 'background-color-active'
                        ,type: 'solid-colorpicker'
                        ,value: function(item,name) {
                            return item.activeLabelColor;
                        }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate:'background-color,border-color'
                        ,changeProperty: {
                            caption: 'Active label color',
                            rerender: true
                        }
                    }
                ]
                ,[
                     prx.commonproperties.borderWidth
                    ],
                [
                    {
                        caption: 'Border color active',
                        name: 'activeBorderColor',
                        proptype: 'border-color-2-active',
                        type: 'combo-colorpicker',
                        value: function(item,name) { return item.activeBorderColor; },
                        values: prx.comps.ios7Colors,
                        liveUpdate: 'border-color'
                        ,changeProperty: {
                            caption: 'Active border color',
                            rerender: true
                        },
                        hiddenByDefault: function() {
                            return item.name == 'ios10_switch';
                        }
                    }
                ],
                [
                    {
                        caption: function(item, name) {

                            if(item.name !== 'ios10_switch')
                                return 'Border color inactive';

                            return false;
                        },
                        name: 'inactiveBorderColor',
                        proptype: 'border-color',
                        type: 'solid-colorpicker',
                        value: function(item,name) { return item.inactiveBorderColor; },
                        values: prx.comps.ios7Colors,
                        liveUpdate: 'border-color'
                        ,changeProperty: {
                            caption: 'Inactive border color',
                            rerender: true
                        }
                    }
				 	,{
						caption: 'Active',
						name: 'activeBorderColor',
						proptype: 'border-color-2-active',
						type: 'solid-colorpicker',
						value: function(item,name) { return item.activeBorderColor; },
						values: prx.comps.ios7Colors,
						liveUpdate: 'border-color'
						,changeProperty: {
							caption: 'Active border color',
							rerender: true
						},
                        hiddenByDefault: function(item) {
						    return item.name == 'ios10_switch';
                        }
					}
				],[
					{
						caption: 'Switch'
						,name: 'switchColor'
						,proptype: 'background-color-3-switch'
						,type: 'gradients-colorpicker'
						,value: function(item,name) {
							return item.switchColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate: 'background-color'
						,changeProperty: {
							caption: 'Switch color',
							property: 'background-color',
							selector: '.changeProperty-switchColor',
							transitionable: true
						}
					}
				]
			]
		},{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,onChange: function(item, name) {
							return prx.commonproperties.radioButtonsActiveStatusOnChange(item, name);
						}
						,changeProperty: {
							caption: 'Active',
							selector: 'input',
							property: 'checkbox-state',
							transitionable: false
						}
					},
				],
				[
                    prx.commonproperties.radioButtonsGroupNameInput
				]
			]
		}
	]

}

//TYPE: SLIDER
prx.types.ios7_slider = prx.componentsHelper.cloneobject(prx.types.basic_slider);
prx.types.ios7_slider.name = 'ios7_slider';
prx.componentsHelper.removeProperties(prx.types.ios7_slider.propertyGroups, ['borderColor', 'sliderBorderWidth', 'barBorderRadius']);

/* PICKER */
prx.types.ios7_picker = {
    name: 'ios7_picker'
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        var _dims = prx.componentsHelper.getRealDims(item,symbol);
        var _options = prx.componentsHelper.getProp(item.values,'text-list').split("<br />");

        // if(typeof(item.textFontStyle) == 'undefined')
        // 	item['textFontStyle'] = '300';

        var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');
            _props += prx.componentsHelper.getProp(item.textFontStyle,'props-text-style');

        var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-picker"><div class="outer">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .inner { '+prx.utils.getBgCss(item.backgroundColor)+'; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' '+_props+' }'
        // cR += '#'+_id+' ul { padding: '+(_dims.height/2-32)+'px 0; }'; // chrome needs this to be inline otherwise iscroll height is not correctly calculated :S
        cR += '#'+_id+' input:checked + label { color: '+prx.componentsHelper.getProp(item.activeTextColor,'color-text')+'; }'
        cR += '#'+_id+' .bar { border-color: '+prx.componentsHelper.getProp(item.textColor,'color-border')+'; } ';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="inner liveUpdate-backgroundColor-background-color changeProperty-backgroundColor liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont  changeProperty-textFontStyle changeProperty-textSize changeProperty-textAlign" id="' + _id + '-inner">';
        cR += '<ul style="padding: '+(_dims.height/2-(16*prx.componentsHelper.getScale(item.lib)))+'px 0;">';

		for(var i = 0; i < _options.length; i++) {
			cR += '<li>';
			cR += '<input type="radio" data-role="none" id="'+_id+'-option'+i+'" name="'+_id+'-input" '+((i == prx.componentsHelper.getProp(item.selectedValue,'boolean')) ? 'checked' : '' )+'/>';
			cR += '<label '+((i == prx.componentsHelper.getProp(item.selectedValue,'boolean')) ? 'class="liveUpdate-activeTextColor-color"' : '' )+' for="'+_id+'-option'+i+'">' + prx.utils.escapeHTML(_options[i]) + '</label>';
			cR += '</li>';
		};
		cR += '</ul>';

		cR += '<div class="bar liveUpdate-textColor-border-color"></div>';
		cR += '</div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		$('#' + _id + ' ul').css('padding', (prx.componentsHelper.getProp(item.height,'num-other')/2-(16*prx.componentsHelper.getScale(item.lib)))+'px 0');
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var manualScroll = false;
		if(!prx.editor) {



			//if (typeof(prx.scrollable._scrollables[_id + '-inner'])=='undefined') {
				try {

				    var startX = 0;
				    var startY = 0;

                    // DEFAULT SELECTED ITEM
                    var _options = item.values.split("<br />");
                    if(item.selectedValue <= _options.length && item.selectedValue!=-1) {
                        startY = -item.selectedValue * (32*prx.componentsHelper.getScale(item.lib));
                        $('#' + _id + ' li').eq(item.selectedValue).find('input').prop('checked', true);
                    }

					prx.scrollable._scrollables[_id + '-inner'] = new IScroll('#'+_id + '-inner',{
						scrollX: false,
						scrollbars: false,
                        startX: startX,
                        startY: startY,
						mousewheel: false,
						probeType: 1,
						bounce: false,
						twoWayScroll: true,
						deceleration: 0.008,
						//momentum: false
					});

                    prx.scrollable._scrollables[_id + '-inner'].on('scrollStart', function() {

                        $(this.wrapper).parents('.box').not('.type-ios7-picker').each(function() {
                            if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
                                prx.scrollable._scrollables[this.id + '-inner'].disable();
                            }
                        })

                    });

                    prx.scrollable._scrollables[_id + '-inner'].on('scrollEnd', function() {

                        // ROUND POSITION TO NEAREST LI (64 = LI HEIGHT)
                        var index = Math.abs(Math.round(prx.scrollable._scrollables[_id + '-inner'].y/(32*prx.componentsHelper.getScale(item.lib))));
                        $('#'+_id+' li').eq(index).find('input').prop('checked', true)

                        prx.scrollable._scrollables[_id + '-inner'].scrollTo(0, index * -(32 * prx.componentsHelper.getScale(item.lib)));

                        if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                        prx.variables._triggerData['#'+_id]['pickerchange'] = { selected: $('#'+_id+' li').eq(index).find('label').text() }
                        $('#'+_id).trigger('pickerchange');
                        /*
                         $('#'+_id).attr('data-justscrolled', 1)
                         setTimeout(function(){$('#'+_id).attr('data-justscrolled', 0)}, 20)
                         */

                        $(this.wrapper).parents('.box').not('.type-ios7-picker').each(function() {
                            if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
                                prx.scrollable._scrollables[this.id + '-inner'].enable();
                            }
                        })


                    });

                    prx.scrollable._scrollables[_id + '-inner'].on('scroll', function(a,b) {
                        var index = Math.abs(Math.round(prx.scrollable._scrollables[_id + '-inner'].y/(32*prx.componentsHelper.getScale(item.lib))));
                        $('#'+_id+' li').eq(index).find('input').prop('checked', true)
                    });

                    //BRINGS SELECTED LI TO CENTER, UNDER INDICATOR, ON CLICK
                    // $('#' + _id + ' li').hammer().on('tap', function(e){
                    $('#' + _id + ' li').on('click', function(e){
                        /* i think no longer needed
                        if($('#'+_id).attr('data-justscrolled') == 1) {
                            e.preventDefault();
                            return true;
                        }
                        */

                        prx.scrollable._scrollables[_id + '-inner'].scrollTo(0,-$(this).index() * (32*prx.componentsHelper.getScale(item.lib)), 150*prx.componentsHelper.getScale(item.lib));

                        if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                        prx.variables._triggerData['#'+_id]['pickerchange'] = { selected: $(this).text() }
                        $('#'+_id).trigger('pickerchange');

                        $(this).find('input').prop('checked', true);
                        //$(this).find('input').attr('checked', 'checked');
                        e.preventDefault();
                    })

                    prx.actions.disableFlashActionOnItemTap('#' + _id + ' li', '.flashactiontap-afterdisplay');


                } catch(err){};
            //}
        } else {
            var _options = item.values.split("<br />");
            if(item.selectedValue < _options.length && item.selectedValue!=-1) {
                $('#' + _id + ' ul').css('margin-top', (-item.selectedValue * (32*prx.componentsHelper.getScale(item.lib))) + 'px');
            }
        }

    }
    ,interactions: [ prx.commonproperties.actions ]
    ,mpactions: {
        specialEvents: ['pickerchange']
    }
    ,propertyGroups:	[

        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor
                ]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFont
                ],
                [
                    prx.commonproperties.textFontStyle,
                    prx.commonproperties.textSize
                ],
                [
                    prx.commonproperties.textProperties,
                    {
                        caption: { label: 'Default', class: 'text-properties-label text-color-label' },
                        name: 'textColor',
                        proptype: 'font-color',
                        type: 'combo-colorpicker',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item,name) { return item.textColor; },
                        values: prx.comps.ios7Colors, liveUpdate: 'color,border-color',
                        changeProperty: { caption: 'Text color', rerender: true }
                    },
                    {
                        caption: { label: 'Active', class: 'text-properties-label text-color-label' }
                        ,name: 'activeTextColor'
                        ,proptype: 'font-color-2-active'
                        ,type: 'solid-colorpicker'
                        ,pffSettings: prx.commonproperties.pffSettingsColor
                        ,value: function(item,name) {
                            return item.activeTextColor
                        }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate:'color'
                        ,changeProperty: {
                            caption: 'Active text color',
                            property: 'color',
                            selector: 'input:checked + label',
                            transitionable: true
                        }
                    }
                ],
                [
                    prx.commonproperties.textAlign
                ]
            ]
        },
        {
            caption: 'Values',
            properties: [

                [
                    {
                        caption: false
                        ,name: 'values'
                        ,type: 'textarea'
                        ,value: function(item,name) {
                            return item.values;
                        }
                        ,hint: 'Separated by line breaks'
                        ,onChange: function(item,name) {
                            var _options = item.values.split("<br />");

                            var cR = '';

                            var _values = [];
                            for(var i = 0; i < _options.length; i++) {
                                cR += '<option value="'+i+'" '+((item.selectedValue == i) ? 'selected' : '')+'>'+prx.utils.escapeHTML(_options[i])+'</option>'
                            }

                            $('#property-selectedValue select').html(cR);
                        }
                        ,changeProperty: {
                            caption: 'Values',
                            rerender: true
                        }
                    }
                ],
                [
                    {
                        caption: 'Selected value'
                        ,name: 'selectedValue'
                        ,type: 'select'
                        ,value: function(item,name) {
                            return item.selectedValue;
                        }
                        ,values: function(item,name){
                            var _options = (item.values !== undefined) ? item.values.split("<br />") : [];
                            var _values = [];
                            for(var i = 0; i < _options.length; i++) {
                                _values.push({
                                    displayValue: prx.utils.escapeHTML(_options[i].replace(/<br>/g, "\n").replace(/(<([^>]+)>|(&nbsp;))/ig, '')),
                                    value: i
                                });
                            }
                            return _values;
                        }
                        ,changeProperty: {
                            caption: 'Selected value',
                            rerender: true
                        }
                    }
                ]
            ]
        }
    ]
}

/* SEARCH BAR */
prx.types.ios8_searchbar = {
    name: 'ios8_searchbar'
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        // if(typeof(item.textFontStyle) == 'undefined')
        // 	item['textFontStyle'] = '300';

        var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');
            _props += prx.componentsHelper.getProp(item.textFontStyle,'props-text-style');
        var _dims = prx.componentsHelper.getRealDims(item, symbol);
        var cR = '';

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios8-searchbar type-ios8-searchbar-text">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+'  input { color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' '+ _props + ' ;}';
        cR += '#'+_id+' .ios8-searchbar-faux-input { color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' line-height: '+_dims.height+'px; '+ _props + ' }';
        cR += '#'+_id+' .ios8-searchbar-faux-input-overlay .placeholder-input, #'+_id+' .ios8-searchbar-input-overlay .placeholder-input { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+';  font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' '+ _props + ' }';
        if(prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '') {
            cR += '#' + _id + ' .ios8-searchbar-icon { width: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; background-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+');}';
            cR += '#' + _id + ' .ios8-searchbar-icon-faux { width: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px;}';
        }
        cR += '#'+_id+' .ios8-searchbar-input-flex { '+prx.utils.getBgCss(item.backgroundColor)+'; border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; }';
        cR += '#' + _id + ' .ios8-searchbar-icon-erase { width: '+(_dims.height*0.4)+'px; background-image: url('+prx.componentsHelper.getProp(item.imgSrc2,'asset')+'); color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+';}';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		if(prx.editor) {
			cR += '<div class="ios8-searchbar-input-flex liveUpdate-backgroundColor-background-color liveUpdate-borderColor-border-color changeProperty-backgroundColor  changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius">';
			if(prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '') {
			cR += '<span class="ios8-searchbar-icon-faux"></span>';
			}
			cR += '<div class="ios8-searchbar-faux-input liveUpdate-textColor-color changeProperty-textColor changeProperty-textSize changeProperty-textFont" data-editableproperty="value">'+prx.componentsHelper.getProp(item.value,'text')+'</div>';
			cR += '<div class="ios8-searchbar-faux-input-overlay liveUpdate-backgroundColor-background-color ' + (item.ios13 === true ? 'ios13' : '') + '">'+(prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '' ? '<span class="ios8-searchbar-icon"></span>': '')+'<span class="liveUpdate-placeholderColor-color placeholder-input">'+prx.componentsHelper.getProp(item.placeholder,'other')+'</span></div>';
			cR += '<span class="ios8-searchbar-icon-erase"></span>';
			cR += '</div>';
		} else {
			cR += '<div class="ios8-searchbar-input-flex liveUpdate-backgroundColor-background-color liveUpdate-borderColor-border-color changeProperty-backgroundColor  changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius">';
			if(prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '') {
			cR += '<span class="ios8-searchbar-icon-faux"></span>';
			}
			cR += '<input autocomplete="new-password" data-lpignore="true" type="text" value="'+prx.componentsHelper.getProp(item.value,'other')+'" data-role="none" required class="real-input changeProperty-textColor changeProperty-textSize changeProperty-textFont" />';
			cR += '<div class="ios8-searchbar-input-overlay ' + (item.ios13 === true ? 'ios13' : '') + '">'+(prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '' ? '<span class="ios8-searchbar-icon"></span>': '')+'<span class="placeholder-input">'+prx.componentsHelper.getProp(item.placeholder,'other')+'</span></div>';
			cR += '<span class="ios8-searchbar-icon-erase"></span>';
			cR += '</div>';
		}
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item,symbol);

        if(prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '') {
            $('#' + _id + ' .ios8-searchbar-icon, #' + _id + ' .ios8-searchbar-icon-faux').css('width', prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px');
        }
        $('#'+_id).find('.ios8-searchbar-icon-erase').css('width', (_dims.height*0.4)+'px')
        $('#'+_id).find('.ios8-searchbar-faux-input').css('line-height', _dims.height+'px')
    }
    ,afterDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item, symbol);


		if(!prx.editor) {
			$('#'+_id)
				.hammer()
				.find('.real-input')
				.focus(function(){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
					$('#'+_id).trigger('inputfocus');
				})
				.blur(function(){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
			        $('#'+_id).trigger('inputblur');
				})
				.keyup(function(e){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
					var event = $.Event("inputkeyup");
					event.which = e.which;
					$('#'+_id).trigger(event);
				})
				.on('input', function(){
					if($(this).val() == "") {
						$('#'+_id+' input + div .placeholder-input').css('display', 'block');
					} else {
						$('#'+_id+' input + div .placeholder-input').css('display', 'none');
					}
				}).trigger('input');

            prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');

            $('#' + _id + ' .ios8-searchbar-icon-erase').hammer().on('tap', function() {
                $('#'+_id+' .real-input').val('').focus().trigger('input');
            });
            prx.actions.disableFlashActionOnItemTap('#' + _id + ' .ios8-searchbar-icon-erase', '.flashactiontap-afterdisplay');
        }
    }
    ,interactions: [ prx.commonproperties.actions ]
    ,mpactions: {
        specialEvents: ['inputfocus','inputblur','inputkeyup']
    }
    ,editableProperties: [
                      {
            caption: 'Value'
            ,name: 'value'
            ,type: 'input'
            ,isRichText: false
            ,value: function(item,name) {
                return item.value;
            }
            ,changeProperty: {
                caption: 'Value',
                property: 'input-value',
                selector: 'input.real-input',
                transitionable: false,
                changeFunction: function(item, containerid) {
                    var _id = (!containerid) ? item.id : containerid + '-' + item.id;

                    if ($.trim(item.value) == "") {
                        $('#' + _id + ' input + div .placeholder-input').css('display', 'block');
                    } else {
                        $('#' + _id + ' input + div .placeholder-input').css('display', 'none');
                    }

                    $('#' + _id + ' input.real-input').val(item.value);
                }
            }
        }
      ]
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor
                ]
                ,[
                    prx.commonproperties.borderWidth
                    ,prx.commonproperties.ios7BorderColor
                    ,prx.commonproperties.borderRadiusExpandable
                ]
            ]
        },{
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFont
                ],
                [
                    prx.commonproperties.textFontStyle,
                    prx.commonproperties.textSize
                ],
                [
                    prx.commonproperties.textProperties
                    ,prx.commonproperties.ios7TextColor()
                ]
            ]
        },{
            caption: 'Placeholder (If field is empty)',
            properties: [
                [
                    {
                        caption: 'Placeholder Text',
                        name: 'placeholder',
                        type: 'input',
                        value: function(item,name) {
                            return item.placeholder;
                        }
                        ,changeProperty: {
                            caption: 'Placeholder',
                            rerender: true
                        }
                    }
                ],
                [
                    {
                       caption: 'Placeholder Color',
                       name: 'placeholderColor',
                       proptype: 'placeholder-color',
                       type: 'solid-colorpicker',
                       value: function(item,name) {
                           if(typeof(item.placeholderColor)=='undefined') { return '999999'; }
                           return item.placeholderColor;
                       }
                       ,values: prx.comps.ios7Colors
                       ,liveUpdate:'color'
                       ,changeProperty: {
                            caption: 'Placeholder color',
                            rerender: true
                        }
                   }
                ]
            ]
        },
        {
              caption: 'Icon',
              properties: [
                  [
                      {
                        caption: false,
                        name: 'imgSrc',
                        type: 'combo-asset',
                        displayValue: function(item,name) {
                            if(item.imgSrc.fileId == '') {
                                  return 'No asset selected.';
                              }
                              return item.imgSrc.name;
                        }
                        ,value: function(item,name) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc
                            });
                        }
                        ,changeProperty: {
                            caption: 'Icon',
                            rerender: true
                        }
                    }
                  ]
              ]
          }
    ]

};

//TYPE: LISTCOMPLEX
prx.types.ios7_listcomplex = {
    name: 'ios7_listcomplex'
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        var cR = '';

        if(typeof(item.textProperties) == "undefined") { item.textProperties = []; }

        var _textprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        if(typeof(item.subProperties) != "undefined") {
            var _subprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.subProperties,'props-text') : '';
        }

        if(typeof(item.valueProperties) != "undefined") {
            var _valueprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.valueProperties,'props-text') : '';
        }

        if(typeof(item.badgeProperties) != "undefined") {
            var _badgeprops = prx.componentsHelper.getProp(item.badgeProperties,'props-text');
        }

        if(typeof(item.badgeFont) == "undefined") {
            item.badgeFont = item.textFont;
        }

        if(typeof(item.badgeFontStyle) == "undefined") {
            item.badgeFontStyle = item.textFontStyle;
        }

        if(typeof(item.maintainstate) == "undefined") { item.maintainstate = false; }


        var _dims = prx.componentsHelper.getRealDims(item,symbol);

        // :(
        var _listitemH = (_dims.height - prx.componentsHelper.getProp(item.borderWidth,'num-border-width')*(item.listitems.length+1))/item.listitems.length;

        var hasThumbs = false;
        for(var i=0;i<item.listitems.length;i++) {
            if(typeof(item.listitems[i].thumbnail) != "undefined" && item.listitems[i].thumbnail.fileId != '') {
                hasThumbs = true;
                break;
            }
        }

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-list">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .ios7-list-inner { text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+' '+prx.utils.getBgCss(item.backgroundColor)+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+';  }';
        cR += '#' + _id + ' .ios7-list-thumb { width: '+parseInt(_listitemH*0.6)+'px }';
        if(typeof(item.iconSize) != "undefined") {
            cR += '#' + _id + ' .ios7-list-icon { width: '+parseInt(_listitemH*(prx.componentsHelper.getProp(item.iconSize,'icon-size')/5))+'px; height: '+parseInt(_listitemH*(prx.componentsHelper.getProp(item.iconSize,'icon-size')/5))+'px; }';
        }
        cR += '#' + _id + ' .bordered-container { border-top: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }'
        cR += '#' + _id + ' .ios7-list-text { '+_textprops+' }';
        cR += '#' + _id + ' .ios7-list-subtitle { '+prx.componentsHelper.getProp(item.subFont + '|' + item.subFontStyle,'font-family')+_subprops+' font-size: '+prx.componentsHelper.getProp(item.subSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.subColor,'color-text')+'; }'
        cR += '#' + _id + ' .ios7-list-badge { '+prx.componentsHelper.getProp(item.badgeFont + '|' + item.badgeFontStyle,'font-family')+_badgeprops+'; font-size: '+prx.componentsHelper.getProp(item.badgeSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.badgeColor,'color-text')+'; '+prx.utils.getBgCss(item.badgeBackgroundColor)+'; }';
        cR += '#' + _id + ' .ios7-list-value { '+prx.componentsHelper.getProp(item.valueFont + '|' + item.valueFontStyle,'font-family')+_valueprops+'; font-size: '+prx.componentsHelper.getProp(item.valueSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.valueColor,'color-text')+'; }'
        cR += '#' + _id + ' label:active, #' + _id + ' input:checked + label { '+prx.utils.getBgCss(item.activeBackgroundColor)+'; color: '+prx.componentsHelper.getProp(item.activeTextColor,'color-text')+'; }'
        cR += '#' + _id + ' label:active .ios7-list-value, #' + _id + ' input:checked +  label .ios7-list-value { color: '+prx.componentsHelper.getProp(item.activeValueColor,'color-text')+'; }'
        cR += '#' + _id + ' label:active .ios7-list-subtitle, #' + _id + ' input:checked + label .ios7-list-subtitle { color: '+prx.componentsHelper.getProp(item.activeSubColor,'color-text')+'; }'
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<div class="ios7-list-inner liveUpdate-borderColor-border-color liveUpdate-textColor-color liveUpdate-backgroundColor-background-color changeProperty-backgroundColor changeProperty-textColor changeProperty-borderColor changeProperty-textAlign changeProperty-textFont changeProperty-textSize">';


        $.each(item.listitems, function(i,elm){

            var icon = '';
            if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'nested' ||
                prx.componentsHelper.getProp(elm.itemtype,'other') == 'checkbox' ||
                prx.componentsHelper.getProp(elm.itemtype,'other') == 'radio' ||
                prx.componentsHelper.getProp(elm.itemtype,'other') == 'nestedWithValue' ||
                prx.componentsHelper.getProp(elm.itemtype,'other') == 'withIcon' ||
                prx.componentsHelper.getProp(elm.itemtype,'other') == 'withIconAndValue' ||
                prx.componentsHelper.getProp(elm.itemtype,'other') == 'nestedWithBadge' ||
                prx.componentsHelper.getProp(elm.itemtype,'other') == 'withIconAndBadge' ||
                prx.componentsHelper.getProp(elm.itemtype,'other') == 'nestedWithBadgeAndValue') {
                icon = '<div class="ios7-list-icon ios7-list-icon-'+prx.componentsHelper.getProp(item.iconpos,'icon-position')+'" '+((typeof (elm.buttonicon) != "undefined" && prx.componentsHelper.getProp(elm.buttonicon.fileId,'other') != '') ? 'style="background-image: url('+ prx.componentsHelper.getProp(elm.buttonicon,'asset')+');"' : '' ) + '></div>';
            }

			cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property ios7-list-listitem ios7-list-listitem-type-'+prx.componentsHelper.getProp(elm.itemtype,'other')+'" data-dynamic-property-index="'+i+'">';
			if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'checkbox' || prx.componentsHelper.getProp(elm.itemtype,'other') == 'radio' || prx.componentsHelper.getProp(item.maintainstate,'boolean')) {
				cR += '<input type="'+((prx.componentsHelper.getProp(elm.itemtype,'other') == 'checkbox') ? 'checkbox': 'radio') +'" name="'+_id+'-checkbox" id="'+_id+'-checkbox-'+i+'" data-role="none" '+ ((typeof(elm.checked) != "undefined" && prx.componentsHelper.getProp(elm.checked,'boolean')) ? 'checked' : '') +' />';
			}
			//cR +='<label '+ (((elm.itemtype == 'checkbox' || elm.itemtype == 'radio') && elm.checked) ? 'class="liveUpdate-activeTextColor liveUpdate-activeBackgroundColor-background-color"' : '') +' for="'+_id+'-checkbox-'+i+'" ' +((elm.itemtype == 'checkbox' || elm.itemtype == 'radio' || item.maintainstate) ? ' data-clickable="true"' : '') + '>'
			cR +='<label '+ (((prx.componentsHelper.getProp(elm.itemtype,'other') == 'checkbox' || prx.componentsHelper.getProp(elm.itemtype,'other') == 'radio') && prx.componentsHelper.getProp(elm.checked,'boolean')) ? 'class="liveUpdate-activeTextColor-color liveUpdate-activeBackgroundColor-background-color"' : '') +' for="'+_id+'-checkbox-'+i+'">'

            if(prx.componentsHelper.getProp(item.iconpos,'icon-position') == "left") { cR += icon; }

            if(hasThumbs) {
                cR += '<div class="ios7-list-thumb" '+((typeof(elm.thumbnail) != "undefined" && prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') != '') ? 'style="background-image: url('+ prx.componentsHelper.getProp(elm.thumbnail,'asset')+');"' : '') + '></div>';
            }

			cR += '<div class="bordered-container liveUpdate-borderColor-border-color">';

            cR += '<div class="text-and-subtitle">';
            cR += '<div class="ios7-list-text">';
            cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.text,'text-textarea')+'</span>';
            cR += '</div>';
            cR += '<div class="ios7-list-subtitle liveUpdate-subColor-color changeProperty-subColor changeProperty-subFont changeProperty-subFontStyle changeProperty-subSize">';
            cR += '<span data-editableproperty="subtitle" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.subtitle,'text-textarea')+'</span>';
            cR += '</div>';
            cR += '</div>';

			if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'withValue' ||
				prx.componentsHelper.getProp(elm.itemtype,'other') == 'nestedWithValue' ||
				prx.componentsHelper.getProp(elm.itemtype,'other') == 'withIconAndValue' ||
				prx.componentsHelper.getProp(elm.itemtype,'other') == 'nestedWithBadgeAndValue') {
				cR += '<div class="ios7-list-value liveUpdate-valueColor-color changeProperty-valueColor changeProperty-valueFont changeProperty-valueSize">';
				cR += '<span data-editableproperty="value" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.value,'text-textarea')+'</span>';
				cR += '</div>';
			}

            if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'withBadge' ||
                    prx.componentsHelper.getProp(elm.itemtype,'other') == 'nestedWithBadge' ||
                    prx.componentsHelper.getProp(elm.itemtype,'other') == 'withIconAndBadge' ||
                    prx.componentsHelper.getProp(elm.itemtype,'other') == 'nestedWithBadgeAndValue') {
                cR += '<div class="ios7-list-badge liveUpdate-badgeColor-color changeProperty-badgeColor liveUpdate-badgeBackgroundColor-background-color changeProperty-badgeBackgroundColor changeProperty-badgeFont changeProperty-badgeSize">';
                cR += '<span data-editableproperty="badgeText" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.badgeText,'text-textarea')+'</span>';
                cR += '</div>';
            }

            if(prx.componentsHelper.getProp(item.iconpos,'icon-position') == "right") { cR += icon; }

            cR += '</div>';

            cR += '</label>';
            cR += '</div>';
        });
        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,onResize: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item,symbol);
        var _listitemH = (_dims.height - item.borderWidth*(item.listitems.length+1))/item.listitems.length;

		$('#' + _id + ' .ios7-list-thumb').width(parseInt(_listitemH*0.6));
		$('#' + _id + ' .ios7-list-icon').width(parseInt(_listitemH*(prx.componentsHelper.getProp(item.iconSize,'icon-size')/5))).height(parseInt(_listitemH*(prx.componentsHelper.getProp(item.iconSize,'icon-size')/5)));
	}
	,propertyGroups:	[
		{
			caption: 'List',
	    	properties: [
				[
					prx.commonproperties.ios7BackgroundColor
					,{
						caption: 'Active',
						name: 'activeBackgroundColor',
						proptype: 'background-color-2-active',
						type: 'gradients-colorpicker',
						value: function(item,name){
							return item.activeBackgroundColor
						}
						,values: prx.comps.ios7Colors
						,liveUpdate: 'background-color'
						,changeProperty: {
							caption: 'Active background color',
							rerender: true
						}

                    }
                ],[
                    {
                        caption: 'Border (px)',
                        name: 'borderWidth',
                        proptype: 'border-width',
                        type: 'combo-select',
                        value: function(item,name)
                        {
                            if(typeof(item.borderWidth) == "undefined") {
                                return 1;
                            }
                            return item.borderWidth;
                        },
                        values: { min: 0, max: 20, step: 2 }
                        ,changeProperty: {
                            caption: 'Border width',
                            rerender: true
                        }

                    }
                    ,prx.commonproperties.ios7BorderColor
                ],
                [
                {
                    caption: 'Maintain active state after touch end',
                    name: 'maintainstate',
                    type: 'onoff',
                    help: 'Enable to allow "Select active list item" interactions',
                    value: function(item,name)
                    {
                        if(typeof(item.maintainstate) == "undefined") {
                            return false;
                        }
                        return item.maintainstate;
                    }
                    ,hiddenByDefault: function(item,name){
                        return (item.type == 'ios7_listcheckbox' || item.type == 'ios7_listradio');
                    }
                    ,changeProperty: {
                        caption: 'Maintain active state',
                        rerender: true
                    }
                }
                ]
            ]
        },{
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','listitems.text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],['listitems.text'], false, {propName: 'textFontStyle', caption: 'Text Font Style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','listitems.text')
                ],
                [
                     prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],['listitems.text'], false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false})
                    ,prx.commonproperties.ios7TextColorRichText('color','listitems.text',void(0), 'Default')
                    ,{
                        caption: { label: 'Active', class: 'text-properties-label text-color-label' },
                        name: 'activeTextColor',
                        proptype: 'font-color-2-active',
                        type: 'solid-colorpicker',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item,name){
                            return item.activeTextColor
                        }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate: 'color'
                        ,changeProperty: {
                            caption: 'Active text color',
                            property: 'color',
                            selector: 'input:checked + label',
                            transitionable: true
                        }

                    }
                ],
                [
                     prx.commonproperties.textAlignRichText('text-align','listitems.text')
                ]
            ]
        },{
            caption: 'Subtitle',
            properties: [
                [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'subFont',
                        proptype: 'font-family-2-subtitle',
                        type: 'select',
                        relatedEditableProperties: 'listitems.subtitle',
                        relatedCSSProperties: 'font-family',
                        value: function(item,name) { if (typeof(item.subFont) == "undefined") { return 'Helvetica, Arial, sans-serif'; } return item.subFont; },
                        values: function() { return prx.comps.fonts; }
                        ,changeProperty: {
                            caption: 'Subtitle font',
                            property: 'font-family',
                            selector: '.changeProperty-subFont',
                            transitionable: false
                        }

                    }
                ],[
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],['listitems.subtitle'],false, {propName: 'subFontStyle', caption: 'Subtitle Font Style', useAsDynProp: false}),
                    {
                        caption: false,
                        name: 'subSize',
                        proptype: 'font-size-2-subtitle',
                        type: 'combo-select',
                        relatedEditableProperties: ['listitems.subtitle'],
                        relatedCSSProperties: 'font-size',
                        value: function(item,name) { if (typeof(item.subSize) == "undefined") {return 12;} return item.subSize; },
                        values: prx.comps.textsize
                        ,changeProperty: {
                            caption: 'Subtitle font size',
                            property: 'font-size',
                            selector: '.subtitle',
                            transitionable: true
                        }

                    },
                    ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],['listitems.subtitle'], false, {propName: 'subProperties', caption: 'Subtitle underline', useAsDynProp: false}),
                    {
                        caption: { label: 'Default', class: 'text-properties-label text-color-label' },
                        name: 'subColor',
                        proptype: 'font-color-3-subtitle',
                        type: 'solid-colorpicker',
                        relatedEditableProperties: ['listitems.subtitle'],
                        relatedCSSProperties: 'color',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item,name) { if (typeof(item.subColor) == "undefined") {return '999999';} return item.subColor; }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate: 'color'
                        ,changeProperty: {
                            caption: 'Subtitle color',
                            property: 'color',
                            selector: '.subtitle',
                            transitionable: true
                        }

                    },
                    {
                        caption: { label: 'Active', class: 'text-properties-label text-color-label' },
                        name: 'activeSubColor',
                        proptype: 'font-color-4-subtitle-active',
                        type: 'solid-colorpicker',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item,name){
                            if(typeof(item.activeSubColor) == "undefined") { return 'FFFFFF'; }
                            return item.activeSubColor
                        }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate: 'color'
                        ,changeProperty: {
                            caption: 'Subtitle color',
                            property: 'color',
                            selector: 'input:checked + label .subtitle',
                            transitionable: true
                        }

                    }
                ]
            ]
        },{
            caption: 'Value',
            properties: [
                [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'valueFont',
                        proptype: 'font-family-3-value',
                        type: 'select',
                        relatedEditableProperties: ['listitems.value'],
                        relatedCSSProperties: 'font-family',
                        value: function(item,name) { return item.valueFont; },
                        values: function() { return prx.comps.fonts; }
                        ,changeProperty: {
                            caption: 'Value font',
                            property: 'font-family',
                            selector: '.ios7-list-value',
                            transitionable: false
                        }

                    }
                ],[
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],['listitems.value'], false, {propName: 'valueFontStyle', caption: 'Value font style', useAsDynProp: false}),
                    {
                        caption: false,
                        name: 'valueSize',
                        proptype: 'font-size-3-value',
                        type: 'combo-select',
                        relatedEditableProperties: ['listitems.value'],
                        relatedCSSProperties: 'font-size',
                        value: function(item,name) { return item.valueSize; },
                        values: prx.comps.textsize
                        ,changeProperty: {
                            caption: 'Value font size',
                            property: 'font-size',
                            selector: '.ios7-list-value',
                            transitionable: true
                        }

                    }
                    ],
                    [
                        prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],['listitems.value'], false, {propName: 'valueProperties', caption: 'Value underline', useAsDynProp: false}),
                        {
                            caption: { label: 'Default', class: 'text-properties-label text-color-label' },
                        name: 'valueColor',
                        proptype: 'font-color-5-value',
                        type: 'solid-colorpicker',
                        relatedEditableProperties: ['listitems.value'],
                        relatedCSSProperties: 'color',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item,name) { return item.valueColor; }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate: 'color'
                        ,changeProperty: {
                            caption: 'Value color',
                            property: 'color',
                            selector: '.ios7-list-value',
                            transitionable: true
                        }
                    }
                    ,{
                        caption: { label: 'Active', class: 'text-properties-label text-color-label' },
                        name: 'activeValueColor',
                        proptype: 'font-color-6-value-active',
                        type: 'solid-colorpicker',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item,name){
                            return item.activeValueColor
                        }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate: 'color'
                        ,changeProperty: {
                            caption: 'Active value color',
                            property: 'color',
                            selector: 'input:checked + label .value',
                            transitionable: true
                        }

                    }
                ]
            ]
        },
        {
            caption: 'Badge',
            properties: [
                [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'badgeFont',
                        proptype: 'font-family-4-badge',
                        type: 'select',
                        value: function(item,name) { return item.badgeFont; },
                        values: function() { return prx.comps.fonts; }
                        ,changeProperty: {
                            caption: 'Badge font',
                            property: 'font-family',
                            selector: '.badge',
                            transitionable: false
                        }

                    }
                ],[
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],['listitems.badgeText'], false, {propName: 'badgeFontStyle', caption: 'Badge font style', useAsDynProp: false}),
                    {
                        caption: false,
                        name: 'badgeSize',
                        proptype: 'font-size-4-badge',
                        type: 'combo-select',
                        value: function(item,name) { return item.badgeSize; },
                        values: prx.comps.textsize
                        ,changeProperty: {
                            caption: 'Badge font size',
                            property: 'font-size',
                            selector: '.badge',
                            transitionable: true
                        }

                    }
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],['listitems.badgeText'], false, {propName: 'badgeProperties', caption: 'Badge underline', useAsDynProp: false})
                    ,{
                        caption: { label: 'Color', class: 'text-properties-label text-color-label' },
                        name: 'badgeColor',
                        proptype: 'font-color-7-badge',
                        type: 'solid-colorpicker',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item,name) { return item.badgeColor; }
                        ,values: prx.comps.ios7Colors
                        ,liveUpdate: 'color'
                        ,changeProperty: {
                            caption: 'Badge font color',
                            property: 'color',
                            selector: '.badge',
                            transitionable: true
                        }
                    }
                    ],
                [
                    {
                    caption: { label: 'Background', class: 'text-properties-label text-fontfamily-label' },
                    name: 'badgeBackgroundColor',
                    proptype: 'background-color-3-badge',
                    type: 'gradients-colorpicker',
                    value: function(item,name){
                        return item.badgeBackgroundColor
                    }
                    ,values: prx.comps.ios7Colors
                    ,liveUpdate:'background-color'
                    ,changeProperty: {
                        caption: 'Badge background color',
                        property: 'background-color',
                        selector: '.badge',
                        transitionable: true
                    }

                }
                ]

            ]
        },{
            caption: 'Icon',
            properties: [
                [
                    {
                        caption: false
                        ,name: 'iconpos'
                        ,type: 'select'
                        ,value: function(item,name) {
                            return item.iconpos;
                        }
                        ,values: [{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'}]
                        ,changeProperty: {
                            caption: 'Icon position',
                            rerender: true,
                            changeable: false
                        }

                    }
                    ,
                    {
                        caption: false
                        ,name: 'iconSize'
                        ,proptype: 'icon-size'
                        ,type: 'select'
                        ,value: function(item,name) {
                            return item.iconSize;
                        }
                        ,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
                        ,changeProperty: {
                            caption: 'Icon size',
                            rerender: true,
                            changeable: false
                        }
                    }

                ]
            ]
        }
    ]
    ,dynamicProperties: {
        data: 'listitems'
        ,propertyCaption: 'List items'
          ,propertyName: 'List item'
        ,addCaption: 'Add list item'
        ,deleteCaption: 'Delete'
        ,blankItem: {
            text: 'Label'
            ,itemtype: 'basic'
            ,value: 'Insert value'
            ,subtitle: ''
            ,badgeText: '1'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"","name":"","assetType":"icon","url":""},
            checked: false,
            actions: [],
            actions1: [],
            actions2: []
        }
        ,captionProperty: 'text'
            ,editableProperties: [
                {
                    caption: 'Label'
                    ,name: 'text'
                    ,type: 'input'
                    ,value: function(item,name,index) {
                        return item.listitems[index].text;
                    }
                    ,changeProperty: {
                        caption: 'Label',
                        property: 'text',
                        selector: '.ios7-list-text',
                        transitionable: false
                    }

                }
            ,
            {
                caption: 'Value'
                ,name: 'value'
                ,type: 'input'
                ,value: function(item,name,index) {
                    return item.listitems[index].value;
                }
                ,hiddenByDefault: function(item,name,index){
                    return (item.listitems[index].itemtype != 'nestedWithValue' && item.listitems[index].itemtype != 'withValue' && item.listitems[index].itemtype != 'withIconAndValue' && item.listitems[index].itemtype != 'nestedWithBadgeAndValue');
                }
                ,changeProperty: {
                    caption: 'Value Text',
                    property: 'text',
                    selector: '.ios7-list-value',
                    transitionable: false
                }

            }
            ,
            {
                caption: 'Badge text'
                ,name: 'badgeText'
                ,type: 'input'
                ,value: function(item,name,index) {
                    return item.listitems[index].badgeText;
                }
                ,hiddenByDefault: function(item,name,index){
                    return (item.listitems[index].itemtype != 'withBadge' && item.listitems[index].itemtype != 'nestedWithBadge' && item.listitems[index].itemtype != 'withIconAndBadge' && item.listitems[index].itemtype != 'nestedWithBadgeAndValue');
                }
                ,changeProperty: {
                    caption: 'Badge text',
                    property: 'text',
                    selector: '.ios7-list-badge',
                    transitionable: false
                }


            }
            ,
            {
                caption: 'Subtitle'
                ,name: 'subtitle'
                ,type: 'input'
                ,value: function(item,name,index) {
                    if(typeof(item.listitems[index].subtitle) == 'undefined') { return ''; }
                    return item.listitems[index].subtitle;
                }
                ,changeProperty: {
                    caption: 'Subtitle Text',
                    property: 'text',
                    selector: '.ios7-list-subtitle',
                    transitionable: false
                }
            }
        ]
        ,interactions: [ prx.commonproperties.actions_listitems ]
        ,propertyGroups: [
            {
                caption:  'Style',
                properties: [
                    [
                        {
                            caption: false //'List item Type'
                            ,name: 'itemtype'
                            ,type: 'select'
                            ,value: function(item,name,index) {
                                if(typeof(item.listitems[index].itemtype) == "undefined") {
                                    item.listitems[index].itemtype = 'basic'
                                }
                                return item.listitems[index].itemtype;
                            }
                            ,values: [
                                      { value: 'basic', displayValue: 'Basic'}
                                      ,{ value: 'nested', displayValue: 'Nested'}
                                      ,{ value: 'withIcon', displayValue: 'With Icon' }
                                      ,{ value: 'checkbox', displayValue: 'Checkbox (On/off)'}
                                      ,{ value: 'radio', displayValue: 'Radio (On/off)'}
                                      ,{ value: 'withBadge', displayValue: 'With Badge' }
                                      ,{ value: 'withValue', displayValue: 'With Value'}
                                      ,{ value: 'nestedWithValue', displayValue: 'Nested with Value'}
                                      ,{ value: 'withIconAndValue', displayValue: 'With icon and value' }
                                      ,{ value: 'nestedWithBadge', displayValue: 'Nested with Badge' }
                                      ,{ value: 'withIconAndBadge', displayValue: 'With icon and badge' }
                                      ,{ value: 'nestedWithBadgeAndValue', displayValue: 'Nested with badge and value' }
                            ],
                            onChange: function(item, index) {
                                switch(item.itemtype) {
                                case 'basic':
                                    $('#property-buttonicon, #property-value, #property-checked, #property-badgeText').hide();
                                    break;
                                case 'withIcon':
                                case 'withIconAndValue':
                                case 'withIconAndBadge':
                                    item.buttonicon = {"fileId":"","name":"","assetType":"icon","url":""};
                                    return item;
                                    break;
                                case 'nested':
                                case 'nestedWithValue':
                                case 'nestedWithBadge':
                                case 'nestedWithBadgeAndValue':
                                    item.buttonicon = {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"};
                                    return item;
                                    break;
                                case 'checkbox':
                                case 'radio':
                                    item.buttonicon = {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"};
                                    return item;
                                    break;
                                case 'withValue':
                                    $('#property-buttonicon, #property-checked, #property-badgeText').hide()
                                    $('#property-value').show();
                                    break;
                                case 'withBadge':
                                    $('#property-buttonicon, #property-checked, #property-value').hide()
                                    $('#property-badgeText').show();
                                    break;
                                default: break;
                                }
                                return false;
                            }
                            ,changeProperty: {
                                caption: 'Listitem type',
                                rerender: true
                            }


                        }
                    ]]
                }
                ,
                {
                    caption: 'Thumbnail',
                    properties: [
                    [
                        {
                            caption: false
                            ,name: 'thumbnail'
                            ,type: 'combo-asset'
                            ,displayValue: function(item,name,index) {
                                if(typeof(item.listitems[index].thumbnail) == 'undefined' || item.listitems[index].thumbnail.fileId == '') {
                                    return 'No thumbnail selected';
                                }
                                return item.listitems[index].thumbnail.name;
                            }
                            ,value: function(item,name,index) {
                                return JSON.stringify({
                                    allow: 'image',
                                    asset: item.listitems[index].thumbnail
                                });
                            }
                            ,changeProperty: {
                                caption: 'Thumbnail',
                                rerender: true
                            }

                        }
                    ]]
                }
                ,
                {
                    caption: 'Icon',
                    properties: [[
                        {
                            caption: false
                            ,name: 'buttonicon'
                            ,type: 'combo-asset'
                            ,displayValue: function(item,name,index) {
                                if(item.listitems[index].buttonicon.fileId == '') {
                                    return 'No icon selected';
                                }
                                return item.listitems[index].buttonicon.name;
                            }
                            ,value: function(item,name,index) {
                                return JSON.stringify({
                                    allow: 'image',
                                    asset: item.listitems[index].buttonicon
                                });
                            }
                            ,hiddenByDefault: function(item,name,index){
                                return (item.listitems[index].itemtype != 'nested' && item.listitems[index].itemtype != 'withIcon' && item.listitems[index].itemtype != 'withIconAndValue' && item.listitems[index].itemtype != 'nestedWithValue' && item.listitems[index].itemtype != 'checkbox' && item.listitems[index].itemtype != 'withIconAndBadge' && item.listitems[index].itemtype != 'nestedWithBadgeAndValue' && item.listitems[index].itemtype != 'nestedWithBadge' && item.listitems[index].itemtype != 'radio');
                            }
                            ,changeProperty: {
                                caption: 'Icon',
                                rerender: true
                            }

                        }
                    ]]
                },
                {
                    caption: 'Checkbox state',
                    properties: [[
                        {
                            caption: 'Checked?'
                            ,name: 'checked'
                            ,type: 'onoff'
                            ,value: function(item,name,index){
                                return item.listitems[index].checked;
                            }
                            ,hiddenByDefault: function(item,name,index){
                                return (item.listitems[index].itemtype != 'checkbox' && item.listitems[index].itemtype != 'radio');
                            }
                            ,changeProperty: {
                                caption: 'Checkbox active state',
                                rerender: true
                            }

                        }
                    ]
                ]
            }
        ]
    }
}

// TYPE = LISTNESTED
prx.types.ios7_listnested = prx.componentsHelper.cloneobject(prx.types.ios7_listcomplex);
prx.types.ios7_listnested.name = 'ios7_listnested';
prx.componentsHelper.removeProperties(prx.types.ios7_listnested.propertyGroups, ['valueFont', 'valueSize', 'valueColor', 'valueProperties', 'valueFontStyle', 'activeValueColor', 'badgeFont', 'badgeFontStyle', 'badgeSize', 'badgeColor', 'badgeProperties', 'badgeGlassStyle', 'badgeBackgroundColor']);
prx.componentsHelper.removeProperties(prx.types.ios7_listnested.dynamicProperties.propertyGroups, ['itemtype', 'value', 'badgeText']);
prx.types.ios7_listnested.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.ios7_listnested.dynamicProperties.blankItem, ['value', 'checked', 'badgeText']);
prx.types.ios7_listnested.dynamicProperties.blankItem.itemtype = 'nested';
prx.types.ios7_listnested.dynamicProperties.blankItem.buttonicon = {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"};
prx.types.ios7_listnested.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listnested.dynamicProperties.propertyGroups, 'itemtype', 'value', 'nested');
prx.types.ios7_listnested.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listnested.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);
prx.types.ios7_listnested.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listnested.dynamicProperties.propertyGroups, 'buttonicon', 'hiddenByDefault', false);

// TYPE = LISTBASIC
prx.types.ios7_listbasic = prx.componentsHelper.cloneobject(prx.types.ios7_listnested);
prx.types.ios7_listbasic.name = 'ios7_listbasic';
prx.componentsHelper.removeProperties(prx.types.ios7_listbasic.propertyGroups, ['iconpos', 'iconSize'])
prx.componentsHelper.removeProperties(prx.types.ios7_listbasic.dynamicProperties.propertyGroups, ['buttonicon']);
prx.types.ios7_listbasic.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.ios7_listbasic.dynamicProperties.blankItem, ['buttonicon']);
prx.types.ios7_listbasic.dynamicProperties.blankItem.itemtype = 'basic';
prx.types.ios7_listbasic.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listbasic.dynamicProperties.propertyGroups, 'itemtype', 'value', 'basic');

// TYPE = LISTWITHICON
prx.types.ios7_listwithicon = prx.componentsHelper.cloneobject(prx.types.ios7_listnested);
prx.types.ios7_listwithicon.name = 'ios7_listwithicon';
prx.types.ios7_listwithicon.dynamicProperties.blankItem.itemtype = 'withIcon';
prx.types.ios7_listwithicon.dynamicProperties.blankItem.buttonicon = {"fileId":"","name":"","assetType":"icon","url":""};
prx.types.ios7_listwithicon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listwithicon.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withIcon');

// TYPE = LISTWITHICONANDVALUE
prx.types.ios7_listwithiconandvalue = prx.componentsHelper.cloneobject(prx.types.ios7_listcomplex);
prx.types.ios7_listwithiconandvalue.name = 'ios7_listwithiconandvalue';
prx.componentsHelper.removeProperties(prx.types.ios7_listwithiconandvalue.propertyGroups, [ 'badgeFont', 'badgeFontStyle', 'badgeSize', 'badgeColor', 'badgeProperties', 'badgeGlassStyle', 'badgeBackgroundColor'])
prx.componentsHelper.removeProperties(prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups, ['itemtype', 'checked', 'badgeText']);
prx.types.ios7_listwithiconandvalue.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.ios7_listwithiconandvalue.dynamicProperties.blankItem, ['checked', 'badgeText']);
prx.types.ios7_listwithiconandvalue.dynamicProperties.blankItem.itemtype = 'withIconAndValue';
prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withIconAndValue');
prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);
prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups, 'value', 'hiddenByDefault', false);


// TYPE = LISTNESTEDWITHVALUE
prx.types.ios7_listnestedwithvalue = prx.componentsHelper.cloneobject(prx.types.ios7_listwithiconandvalue);
prx.types.ios7_listnestedwithvalue.name = 'ios7_listnestedwithvalue';
prx.types.ios7_listnestedwithvalue.dynamicProperties.blankItem.itemtype = 'nestedWithValue';
prx.types.ios7_listnestedwithvalue.dynamicProperties.blankItem.buttonicon = {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"};
prx.types.ios7_listnestedwithvalue.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listnestedwithvalue.dynamicProperties.propertyGroups, 'itemtype', 'value', 'nestedWithValue');

// TYPE = LISTWITHVALUE
prx.types.ios7_listwithvalue = prx.componentsHelper.cloneobject(prx.types.ios7_listnestedwithvalue);
prx.types.ios7_listwithvalue.name = 'ios7_listwithvalue';
prx.componentsHelper.removeProperties(prx.types.ios7_listwithvalue.propertyGroups, ['iconpos', 'iconSize'])
prx.componentsHelper.removeProperties(prx.types.ios7_listwithvalue.dynamicProperties.propertyGroups, ['buttonicon']);
prx.types.ios7_listwithvalue.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.ios7_listwithvalue.dynamicProperties.blankItem, ['buttonicon']);
prx.types.ios7_listwithvalue.dynamicProperties.blankItem.itemtype = 'withValue';
prx.types.ios7_listwithvalue.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listwithvalue.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withValue');

// TYPE = LISTNESTEDWITHBADGE
prx.types.ios7_listnestedwithbadge = prx.componentsHelper.cloneobject(prx.types.ios7_listcomplex);
prx.types.ios7_listnestedwithbadge.name = 'ios7_listnestedwithbadge';
prx.componentsHelper.removeProperties(prx.types.ios7_listnestedwithbadge.propertyGroups, ['valueFont', 'valueSize', 'valueFontStyle', 'valueColor', 'valueProperties', 'activeValueColor'])
prx.componentsHelper.removeProperties(prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups, ['itemtype', 'value', 'checked']);
prx.types.ios7_listnestedwithbadge.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.ios7_listnestedwithbadge.dynamicProperties.blankItem, ['value', 'checked']);
prx.types.ios7_listnestedwithbadge.dynamicProperties.blankItem.itemtype = 'nestedWithBadge';
prx.types.ios7_listnestedwithbadge.dynamicProperties.blankItem.buttonicon = {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"};
prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups, 'itemtype', 'value', 'nestedWithBadge');
prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);
prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups, 'buttonicon', 'hiddenByDefault', false);

// TYPE = LISTWITHICONANDBADGE
prx.types.ios7_listwithiconandbadge = prx.componentsHelper.cloneobject(prx.types.ios7_listnestedwithbadge);
prx.types.ios7_listwithiconandbadge.name = 'ios7_listwithiconandbadge';
prx.types.ios7_listwithiconandbadge.dynamicProperties.blankItem.itemtype = 'withIconAndBadge';
prx.types.ios7_listwithiconandbadge.dynamicProperties.blankItem.buttonicon = {"fileId":"","name":"","assetType":"icon","url":""};
prx.types.ios7_listwithiconandbadge.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listwithiconandbadge.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withIconAndBadge');


// TYPE = LISTWITHBADGE
prx.types.ios7_listwithbadge = prx.componentsHelper.cloneobject(prx.types.ios7_listnestedwithbadge);
prx.types.ios7_listwithbadge.name = 'ios7_listwithbadge';
prx.componentsHelper.removeProperties(prx.types.ios7_listwithbadge.propertyGroups, ['iconpos', 'iconSize'])
prx.componentsHelper.removeProperties(prx.types.ios7_listwithbadge.dynamicProperties.propertyGroups, ['buttonicon']);
prx.types.ios7_listwithbadge.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.ios7_listwithbadge.dynamicProperties.blankItem, ['buttonicon']);
prx.types.ios7_listwithbadge.dynamicProperties.blankItem.itemtype = 'withBadge';
prx.types.ios7_listwithbadge.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listwithbadge.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withBadge');

//TYPE = LISTRADIO
prx.types.ios7_listradio = prx.componentsHelper.cloneobject(prx.types.ios7_listnested);
prx.types.ios7_listradio.name = 'ios7_listradio';
prx.types.ios7_listradio.dynamicProperties.blankItem.itemtype = 'radio';
prx.types.ios7_listradio.dynamicProperties.blankItem.buttonicon = {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"};
prx.types.ios7_listradio.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listradio.dynamicProperties.propertyGroups, 'itemtype', 'value', 'radio');

//TYPE = LISTCHECKBOX
prx.types.ios7_listcheckbox = prx.componentsHelper.cloneobject(prx.types.ios7_listradio);
prx.types.ios7_listcheckbox.name = 'ios7_listcheckbox';
prx.types.ios7_listcheckbox.dynamicProperties.blankItem.itemtype = 'checkbox';
prx.types.ios7_listcheckbox.dynamicProperties.blankItem.buttonicon = {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"};
prx.types.ios7_listcheckbox.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.ios7_listcheckbox.dynamicProperties.propertyGroups, 'itemtype', 'value', 'checkbox');
prx.types.ios7_listcheckbox.dynamicProperties.interactions = [
    {
        caption: 'Change',
        name: 'actions',
        type: 'action'
        ,value: function(item,name,index) {
            if (typeof(item.listitems[index].actions) == 'undefined') {
                item.listitems[index].actions = [];
            }
            return item.listitems[index].actions.length;
        },
        changeProperty: {
            caption: 'Change',
            selector: '',
            property: 'action',
            transitionable: false,
            changeable: false
        }
    },
    {
        caption: 'Activation',
        name: 'actions1',
        type: 'action',
        value: function (item, name,index) {
            if (typeof(item.listitems[index].actions1) == "undefined") {
                item.listitems[index].actions1 = [];
            }
            return item.listitems[index].actions1.length;
        },
        changeProperty: {
            caption: 'Activation',
            selector: '',
            property: 'action',
            transitionable: false,
            changeable: false
        }
    },
    {
        caption: 'Deactivation',
        name: 'actions2',
        type: 'action',
        value: function (item, name,index) {
            if (typeof(item.listitems[index].actions2) == "undefined") {
                item.listitems[index].actions2 = [];
            }
            return item.listitems[index].actions2.length;
        },
        changeProperty: {
            caption: 'Deactivation',
            selector: '',
            property: 'action',
            transitionable: false,
            changeable: false
        }
    }

];
prx.types.ios7_listcheckbox.dynamicProperties.mpactions = {
    specialEvents: ['checkboxchange']
};
prx.types.ios7_listcheckbox.afterDisplay = function(item,containerid,symbol){
    var _id = (!containerid) ? item.id : containerid+'-'+item.id;
    if(!prx.editor) {
        $('#' + _id).hammer();
        prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
    }
};

/* LIST HEADER */
prx.types.ios7_list_header = {
    name: "ios7_list_header"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        // if(typeof(item['textFontStyle']) == 'undefined')
        //     item['textFontStyle'] = '500';

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
            _props += (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textFontStyle,'props-text-style') : '';

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-list-header">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-list-header-inner { '+prx.utils.getBgCss(item.backgroundColor)+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+_props+' }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<div class="ios7-list-header-inner liveUpdate-backgroundColor-background-color liveUpdate-textColor-color liveUpdate-borderColor-border-color changeProperty-backgroundColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-text">';
		cR += '<span data-editableproperty="text">'+prx.componentsHelper.getProp(item.text,'text-textarea')+'</span>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	},
	editableProperties: [
        prx.commonproperties.text
    ],
    propertyGroups: [
            {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor,
                ]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],'text', false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','text')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false})
                    ,prx.commonproperties.ios7TextColorRichText('color','text',void(0))
                ],
                [
                     prx.commonproperties.textAlignRichText('text-align','text')
                ]
            ]
        }
    ]
}

/* ALERT */
prx.types.ios7_alert = {
    name: "ios7_alert"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        if(typeof(item['textProperties']) == 'undefined') { item['textProperties'] = []; }

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-alert'+((item.name == 'ios10_vertical_alert') ? ' type-ios10-vertical-alert' : '')+'">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-alert-inner { '+prx.utils.getBgCss(item.backgroundColor)+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; }';
        cR += '#'+_id+' .ios7-alert-buttons, #'+_id+' .ios7-alert-button { border-color: '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-alert-inner liveUpdate-backgroundColor-background-color liveUpdate-textColor-color liveUpdate-borderColor-border-color changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textSize changeProperty-textFont">';
        cR += '<div class="ios7-alert-title changeProperty-title">';
        cR += '<span data-editableproperty="title">'+prx.componentsHelper.getProp(item.title,'text-html')+'</span>';
        cR += '</div>';
        cR += '<div class="ios7-alert-text changeProperty-text">';
        cR += '<span data-editableproperty="text">'+prx.componentsHelper.getProp(item.text,'text-html')+'</span>';
        cR += '</div>';
        cR += '<div class="ios7-alert-buttons liveUpdate-borderColor" id="ios7-alert-dynamic-expand-wrapper" data-dynamic-expand="v">'
        $.each(item.buttons, function(i,elm) {
            if(typeof(elm['textFontStyle']) == 'undefined')
                elm['textFontStyle'] = '300';

            var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(elm.textProperties,'props-text',false) : '';
                _props += (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(elm.textFontStyle,'props-text-style',false) : '';

            // if(typeof(elm.textSize) == 'undefined') elm.textSize = item.textSize;
            if(typeof(elm.textFont) == 'undefined') elm.textFont = item.textFont;

            cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-alert-button dynamic-property liveUpdate-borderColor-border-color liveUpdate-textColor-'+i+'-color changeProperty-borderColor changeProperty-textColor changeProperty-textFontButton" data-dynamic-property-index="'+i+'" style="'+_props+' color: '+prx.componentsHelper.getProp(elm.textColor,'color-text')+'; '+prx.componentsHelper.getProp(elm.textFont + '|' + elm.textFontStyle,'font-family')+'; font-size: '+ prx.componentsHelper.getProp(elm.textSize,'num-text-size')+'px;">';
            cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + prx.componentsHelper.getProp(elm.text,'text-textarea') + '</span>';
            cR += '</div>';
        });
        cR += '</div>';
        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    },
    editableProperties: [
            {
                 caption: 'Title',
                 name: 'title',
                 type: 'input',
                 value: function(item,name) { return item.title; },
                 changeProperty: {
                     caption: 'Title',
                     selector: '.changeProperty-title',
                     property: 'text',
                     transitionable: false
                 }
            }
            ,prx.commonproperties.text
    ],
    propertyGroups: [
            {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor
                ],
                [
                    { caption: 'Border', name: 'borderColor', proptype: 'border-color', type: 'solid-colorpicker', value: function(item,name) { return item.borderColor; }, values: prx.comps.ios7Colors, liveUpdate: 'border-color', changeProperty: { caption: 'Border width', selector: '.changeProperty-borderWidth', property: 'border-width', transitionable: true } }
                    ,prx.commonproperties.borderRadiusExpandable
                ]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family',['text','title'])
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],['text','title'], false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size',['text','title'])
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],['text','title'], false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false})
                    ,prx.commonproperties.ios7TextColorRichText('color',['text','title'],void(0))
                ]
            ]
        }
    ]
    ,dynamicProperties: {
           data: 'buttons'
           ,propertyCaption: 'Buttons'
        ,propertyName: 'Button'
           ,addCaption: 'Add button'
           ,deleteCaption: 'Delete'
           ,captionProperty: 'text'
           ,blankItem: {
            text: 'Label',
               actions: [],
               textColor: '#007aff',
            textFontStyle: '300',
            textProperties: [],
            textSize: 17*prx.componentsHelper.getScale(_library),
            textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif',
           }
           ,interactions: [ prx.commonproperties.actions_buttons ]
           ,editableProperties: [
              {
                 caption: 'Text'
                 ,name: 'text'
                 ,type: 'input'
                 ,value: function(item,name,index) {
                     return item.buttons[index].text;
                 }
                 ,changeProperty: {
                    caption: 'Text',
                    selector: '.ios7-alert-button',
                    property: 'text',
                    transitionable: false
                 }
             }
          ],
          propertyGroups: [
               {
                   caption: 'Text',
                   properties: [
                        [
                            prx.commonproperties.textFontButtonRichText('font-family','buttons.text')
                        ],
                        [
                            prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'buttons.text', false, {propName: 'textFontStyle', caption: 'Button Text Font style', useAsDynProp: true})
                        ],
                       [
                            prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'], 'buttons.text', false, {propName: 'textProperties', caption: 'Button underline', useAsDynProp: true}),
                            {
                                caption: { label: 'Color', class: 'text-properties-label text-color-label' },
                                name: 'textColor',
                                proptype: 'font-color-2-buttons',
                                type: 'solid-colorpicker',
                                relatedEditableProperties: 'buttons.text',
                                relatedCSSProperties: 'color',
                                pffSettings: prx.commonproperties.pffSettingsColor,
                                value: function(item,name,index) { return item.buttons[index].textColor; },
                                values: prx.comps.ios7Colors,
                                liveUpdate: 'color',
                                changeProperty: {
                                    caption: 'Text color',
                                    selector: '.changeProperty-textColor',
                                    property: 'color',
                                    transitionable: true
                                }
                            }
                       ]
                   ]
               }
           ]
    }
}


/* ALERT */
prx.types.ios7_actionsheet = {
    name: "ios7_actionsheet"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        if( prx.componentsHelper.getProp(item.detachlast,'boolean') && item.buttons.length == 1) item.detachlast = false;

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-actionsheet">';
        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-actionsheet-buttons { '+prx.utils.getBgCss(item.backgroundColor)+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+';}';
        if(prx.componentsHelper.getProp(item.detachlast,'boolean')) {
            cR += '#'+_id+' .ios7-actionsheet-buttons:first-child { '+prx.css.flexJustifyGrow(item.buttons.length-1)+' }';
        }
        cR += '#'+_id+' .ios7-actionsheet-button { border-color: '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }';
        if(prx.componentsHelper.getProp(item.showtitle,'boolean') && item.buttons.length > 0) {
            cR += '#'+_id+' .ios7-actionsheet-button-title { font-size: '+prx.componentsHelper.getProp(item.buttons[0].titleTextSize,'num-text-size')+'px!important; }';
        }
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-actionsheet-inner">';
        cR += '<div class="ios7-actionsheet-buttons liveUpdate-backgroundColor-background-color liveUpdate-textColor-color liveUpdate-borderColor-border-color changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-textFontStyle">'
        $.each(item.buttons, function(i,elm) {
            if(prx.componentsHelper.getProp(item.detachlast,'boolean') && i==item.buttons.length-1) { return }

            if(typeof(elm.textFont) == 'undefined') {elm.textFont = item.textFont;}
            if(typeof(elm.textProperties) == 'undefined') {elm.textProperties = item.textProperties;}
            if(typeof(elm.textColor) == 'undefined') {elm.textColor = item.textColor;}
            if(typeof(elm.textSize) == 'undefined') {elm.textSize = item.textSize;}


            if(typeof(elm['textFontStyle']) == 'undefined')
                    elm['textFontStyle'] = '300';

            var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(elm.textProperties,'props-text') : '';
                _props += prx.componentsHelper.getProp(elm.textFontStyle,'props-text-style');
                _props += 'font-size:' + prx.componentsHelper.getProp(elm.textSize,'text-size') + ' px;' ;
                _props += prx.componentsHelper.getProp(elm.textFont + '|' + elm.textFontStyle,'font-family');
                // _props += (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(elm.textFontStyle,'props-text-style') : '';


            cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-actionsheet-button '+((prx.componentsHelper.getProp(item.showtitle,'boolean') && i == 0) ? 'ios7-actionsheet-button-title ' : '')+'dynamic-property liveUpdate-borderColor-border-color liveUpdate-textColor-'+i+'-color changeProperty-borderColor changeProperty-textFontButton changeProperty-textColor-button" data-dynamic-property-index="'+i+'" style="'+_props+' color: '+prx.componentsHelper.getProp(elm.textColor,'color-text')+';' + 'font-size:' + prx.componentsHelper.getProp(elm.textSize,'text-size') + 'px;">';
            cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + prx.componentsHelper.getProp(elm.text,'text-textarea') + '</span>';
            cR += '</div>';
        });
        cR += '</div>';
        if(prx.componentsHelper.getProp(item.detachlast,'boolean')) {
            cR += '<div class="ios7-actionsheet-buttons liveUpdate-backgroundColor-background-color liveUpdate-textColor-color liveUpdate-borderColor-color changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textFontStyle changeProperty-textSize changeProperty-textFont">'
            var i = item.buttons.length -1;
            if(i>0) {
                if(typeof(item.buttons[i].textFont) == 'undefined') {item.buttons[i].textFont = item.textFont;}
                if(typeof(item.buttons[i].textProperties) == 'undefined') {item.buttons[i].textProperties = item.textProperties;}
                if(typeof(item.buttons[i].textColor) == 'undefined') {item.buttons[i].textColor = item.textColor;}
                if(typeof(item.buttons[i].textSize) == 'undefined') {item.buttons[i].textSize = item.textSize;}

                var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.buttons[i].textProperties,'props-text') : '';
                    // _props += (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.buttons[i].textFontStyle,'props-text-style') : '';
                    _props += prx.componentsHelper.getProp(item.buttons[i].textFontStyle,'props-text-style');
                    _props += 'font-size:' + prx.componentsHelper.getProp(item.buttons[i].textSize,'text-size') + ' px;' ;
                    _props += prx.componentsHelper.getProp(item.buttons[i].textFont + '|' + item.buttons[i].textFontStyle,'font-family');

                cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-actionsheet-button dynamic-property liveUpdate-borderColor-border-color liveUpdate-textColor-'+i+' changeProperty-borderColor changeProperty-textColor-button" data-dynamic-property-index="'+i+'" style="'+_props+' color: '+prx.componentsHelper.getProp(item.buttons[i].textColor,'color-text') + ';font-size:' + prx.componentsHelper.getProp(item.buttons[i].textSize,'text-size') + 'px;">';
                cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'" class="changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-textFontStyle">' + prx.componentsHelper.getProp(item.buttons[i].text,'text-textarea') + '</span>';
                cR += '</div>';
                cR += '</div>';
            }
        }
        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    },
    propertyGroups: [
            {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor
                ],
                [
                    { caption: 'Border', name: 'borderColor', proptype: 'border-color', type: 'solid-colorpicker', value: function(item,name) { return item.borderColor; }, values: prx.comps.ios7Colors, liveUpdate: 'border-color', changeProperty: { caption: 'Border width', selector: '.changeProperty-borderWidth', property: 'border-width', transitionable: true } }
                    ,prx.commonproperties.borderRadiusExpandable
                ]
            ]
        },
        {
            caption: 'Advanced',
            properties: [
                [
                    {
                           caption: 'Detach last button'
                           ,name: 'detachlast'
                           ,type: 'onoff'
                           ,value: function(item,name) {
                               return item.detachlast;
                           }
                          ,changeProperty: {
                               rerender: true
                           }
                      }
                ]
            ]
        }
    ]
    ,dynamicProperties: {
           data: 'buttons'
           ,propertyCaption: 'Buttons'
           ,propertyName: 'Button'
           ,addCaption: 'Add button'
           ,deleteCaption: 'Delete'
           ,captionProperty: 'text'
           ,blankItem: {
                text: 'Label',
                actions: [],
                textFont: 'San Francisco UI Text',
                textSize: 17*prx.componentsHelper.getScale(_library),
                textFontStyle: '400',
                textColor: '#007aff',
                titleTextSize: 16,
                textProperties: []
           }
           ,interactions: [ prx.commonproperties.actions_buttons_hiddenByDefault(function(item,name,index) { return (item.title && index ==0); }) ]
           ,editableProperties: [
              {
                 caption: 'Text'
                 ,name: 'text'
                 ,type: 'input'
                 ,value: function(item,name,index) {
                     return item.buttons[index].text;
                 }
                 ,changeProperty: {
                    caption: 'Text',
                    selector: '.ios7-actionsheet-button',
                    property: 'text',
                    transitionable: false
                 }
             }
          ],
          propertyGroups: [
               {
                   caption: 'Text',
                   properties: [
                       [
                            prx.commonproperties.textFontButtonRichText('font-family','buttons.text')
                        ],
                       [
                           prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],'buttons.text', false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: true}),
                           prx.commonproperties.textSizeButtonRichText('font-size','buttons.text')
                       ],
                    [
                        prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'], 'buttons.text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: true})
                        ,prx.commonproperties.ios7TextColorButtonRichText('color','buttons.text')
                       ]
                ]
               }
           ]
    }
}

/* CONTROL POPOVER */
prx.types.ios7_control_popover = {
    name: "ios7_control_popover"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        if( typeof item.tooltipSide == 'undefined' )
            item.tooltipSide = 'bottom';

        // tooltipSize is the vertical height of the half rotated rectangle. (see .popover-inner { border-bottom: tooltipSize })
        // 2y will be the width and height of the rectangle.
        var y = Math.ceil(Math.sqrt((prx.componentsHelper.getProp(item.tooltipSize,'num-other')*prx.componentsHelper.getProp(item.tooltipSize,'num-other'))/3));
        // when rotated the rectangle exceeds the bottom boundary. x is the margin in need to move it upwards.
        var x = prx.componentsHelper.getProp(item.tooltipSize,'num-other') - y;

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-control-popover">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-control-popover-inner { border-'+prx.componentsHelper.getProp(item.tooltipSide,'other')+'-width: '+prx.componentsHelper.getProp(item.tooltipSize,'num-other')+'px; }';
        cR += '#'+_id+' .ios7-control-popover-buttons { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
        cR += '#'+_id+' .ios7-control-popover-button { border-left: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }';
        cR += '#'+_id+' .ios7-control-popover-tooltip { '+prx.componentsHelper.getProp(item.tooltipSide,'other')+': 0; width: '+2*y+'px; height: '+y+'px; margin: 0 -'+(x+y)+'px; left: '+prx.componentsHelper.getProp(item.tooltipPosition,'num-percentage')+'%; padding: '+x+'px; padding-'+((prx.componentsHelper.getProp(item.tooltipSide,'other') == 'bottom') ? 'top' : 'bottom')+': 0; }';
        cR += '#'+_id+' .ios7-control-popover-tooltip-inner { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; margin-'+((prx.componentsHelper.getProp(item.tooltipSide,'other') == 'bottom') ? 'top: -50%' : 'bottom: -50%')+'; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-control-popover-inner">';
        cR += '<div class="ios7-control-popover-tooltip">';
        cR += '<div class="ios7-control-popover-tooltip-inner liveUpdate-backgroundColor-background-color  changeProperty-backgroundColor "></div>';
        cR += '</div>';
        cR += '<div class="ios7-control-popover-buttons liveUpdate-backgroundColor-background-color liveUpdate-textColor-color changeProperty-backgroundColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textSize changeProperty-textFont">';
        $.each(item.buttons, function(i,elm) {
            cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-control-popover-button dynamic-property liveUpdate-borderColor-border-color" data-dynamic-property-index="'+i+'">';
            cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + prx.componentsHelper.getProp(elm.text,'text-textarea') + '</span>';
            cR += '</div>';
        });
        cR += '</div>';
        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    },
    propertyGroups: [
            {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColorSolid,
                ]
                ,[
                    prx.commonproperties.borderWidth
                    ,prx.commonproperties.ios7BorderColor
                    ,prx.commonproperties.borderRadiusExpandable
                ]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','buttons.text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],'buttons.text', false, {propName: 'textFontStyle', caption: 'Button Text font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','buttons.text')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'buttons.text', false, {propName: 'textProperties', caption: 'Button underline', useAsDynProp: false})
                    ,prx.commonproperties.ios7TextColorRichText('color','buttons.text',void(0))
                ],
                [
                    prx.commonproperties.textAlignRichText('text-align','buttons.text')
                ]
            ]
        },
        {
            caption: 'Tooltip',
            properties: [
                [
                    {
                        caption: 'Size',
                        name: 'tooltipSize',
                        proptype: 'tooltip-size',
                        type: 'combo-select',
                        value: function(item,name) { return item.tooltipSize; },
                        values: { min: 4, max: 40, step: 2 },
                        changeProperty: {
                            caption: 'Tooltip size',
                            rerender: true
                        }
                    },
                ],
                [
                    {
                        caption: 'Position',
                        name: 'tooltipSide',
                        proptype: 'tooltip-side',
                        type: 'select',
                        value: function(item,name) { return item.tooltipSide; },
                        values: [{ displayValue: 'Top', value: 'top' },{ displayValue: 'Bottom', value: 'bottom' }],
                        changeProperty: {
                            caption: 'Tooltip vertical position',
                            rerender: true
                        }
                    },
                    {
                        caption: false,
                        name: 'tooltipPosition',
                        proptype: 'tooltip-position',
                        type: 'combo-select',
                        value: function(item,name) { return item.tooltipPosition; },
                        values: { min: 0, max: 100, step: 5 },
                        liveUpdate: 'background-color',
                        changeProperty: {
                            caption: 'Tooltip horizontal position',
                            selector: '.changeProperty-activeBackgroundColor',
                            property: 'background-color',
                            transitionable: true
                        }
                    }
                ]
            ]
        }
    ]
    ,dynamicProperties: {
           data: 'buttons'
           ,propertyCaption: 'Buttons'
           ,propertyName: 'Button'
           ,addCaption: 'Add button'
           ,deleteCaption: 'Delete'
           ,captionProperty: 'text'
           ,blankItem: {
            text: 'Label',
               actions: []
           }
           ,interactions: [ prx.commonproperties.actions_buttons ]
           ,editableProperties: [
              {
                 caption: 'Text'
                 ,name: 'text'
                 ,type: 'input'
                 ,value: function(item,name,index) {
                     return item.buttons[index].text;
                 }
                 ,changeProperty: {
                    caption: 'Text',
                    selector: '.ios7-control-popover-button',
                    property: 'text',
                    transitionable: false
                 }
             }
          ]
    }
}

/* POPOVER */
prx.types.ios7_popover = {
    name: "ios7_popover"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        // tooltipSize is the vertical height of the half rotated rectangle. (see .popover-inner { border-bottom: tooltipSize })
        // 2y will be the width and height of the rectangle.
        var y = Math.ceil(Math.sqrt((prx.componentsHelper.getProp(item.tooltipSize,'num-other')*prx.componentsHelper.getProp(item.tooltipSize,'num-other'))/3));
        // when rotated the rectangle exceeds the bottom boundary. x is the margin in need to move it upwards.
        var x = prx.componentsHelper.getProp(item.tooltipSize,'num-other') - y;

        var topbottom = (prx.componentsHelper.getProp(item.tooltipSide,'num-other') == "top" || prx.componentsHelper.getProp(item.tooltipSide,'num-other') == "bottom");
        var leftright = !topbottom;

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-popover">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-popover-inner { border-'+prx.componentsHelper.getProp(item.tooltipSide,'other')+'-width: '+prx.componentsHelper.getProp(item.tooltipSize,'num-other')+'px; }';
        cR += '#'+_id+' .ios7-popover-body { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; }';
        cR += '#'+_id+' .ios7-popover-tooltip { '+prx.componentsHelper.getProp(item.tooltipSide,'other')+': 0; width: '+((topbottom) ? 2*y : y) +'px; height: '+((leftright) ? 2*y : y)+'px; margin: '+((topbottom) ? '0 -'+(x+y)+'px' : '-'+(x+y)+'px 0' )+'; '+((topbottom) ? 'left' : 'top')+': '+prx.componentsHelper.getProp(item.tooltipPosition,'num-percentage')+'%; padding: '+x+'px; padding-'+((prx.componentsHelper.getProp(item.tooltipSide,'other') == 'bottom') ? 'top' : ((prx.componentsHelper.getProp(item.tooltipSide,'other') == "left") ? 'right' : ((prx.componentsHelper.getProp(item.tooltipSide,'other') == 'right') ? 'left' : 'bottom')))+': 0; }';
        cR += '#'+_id+' .ios7-popover-tooltip-inner { '+((topbottom) ? 'height: 200%' : 'width: 200%')+';  margin-'+((prx.componentsHelper.getProp(item.tooltipSide,'other') == 'bottom') ? 'top: -50%' : ((prx.componentsHelper.getProp(item.tooltipSide,'other') == "left") ? 'right: -50%' : ((prx.componentsHelper.getProp(item.tooltipSide,'other') == 'right') ? 'left: -100%' : 'bottom: -50%')))+'; background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<div class="ios7-popover-inner">';
		cR += '<div class="ios7-popover-tooltip">';
		cR += '<div class="ios7-popover-tooltip-inner liveUpdate-backgroundColor-background-color changeProperty-backgroundColor "></div>';
		cR += '</div>';
		cR += '<div class="ios7-popover-body liveUpdate-backgroundColor-background-color changeProperty-backgroundColor changeProperty-borderRadius"></div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	},
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColorSolid,
					{
						caption: 'Border <span class="icon icon-border-radius" title="Border radius"></span>',
						name: 'borderRadius',
						proptype: 'border-radius',
						type: 'combo-select',
						value: function(item,name) { return item.borderRadius; },
						values: { min: 0, max: 40, step: 2 },
                        expandableType: 'borderRadius',
						expandedValues: ["tl", "tr", "bl", "br"],
						changeProperty: {
							caption: 'Border radius',
							selector: '.changeProperty-borderRadius',
							property: 'border-radius',
							transitionable: true
						}
					}
				]
			]
		},
		{
		    caption: 'Tooltip',
		    properties: [
		        [
					{
						caption: 'Size',
						name: 'tooltipSize',
						proptype: 'tooltip-size',
						type: 'combo-select',
						value: function(item,name) { return item.tooltipSize; },
						values: { min: 4, max: 40, step: 2 },
						changeProperty: {
							caption: 'Tooltip size',
							rerender: true
						}
					}
				],
				[
					{
						caption: 'Position',
						name: 'tooltipSide',
						proptype: 'tooltip-side',
						type: 'select',
						value: function(item,name) { return item.tooltipSide; },
						values: [{ displayValue: 'Top', value: 'top' },{ displayValue: 'Bottom', value: 'bottom' },{ displayValue: 'Left', value: 'left' },{ displayValue: 'Right', value: 'right' }],
						changeProperty: {
							caption: 'Tooltip position',
							rerender: true
						}
					},
					{
						caption: false,
						name: 'tooltipPosition',
						proptype: 'tooltip-position',
						type: 'combo-select',
						value: function(item,name) { return item.tooltipPosition; },
						values: { min: 0, max: 100, step: 5 },
						changeProperty: {
							caption: 'Tooltip horizontal position',
							selector: '.changeProperty-activeBackgroundColor',
							property: 'background-color',
							transitionable: true
						}
					}
				]
			]
		}
	]
}


//TYPE: PROGRESSBAR
prx.types.ios7_progressbar = {
    name: 'ios7_progressbar'
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item,symbol);

		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-progressbar">';
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .progressbar-bar { background-color: '+prx.componentsHelper.getProp(item.barColor,'color-background')+'; }'
		cR += '#'+_id+' .progressbar-bar-filled { width: '+prx.componentsHelper.getProp(item.progress,'num-percetage')+'%; background-color: '+prx.componentsHelper.getProp(item.fillBarColor,'color-fill')+' }'
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		cR += '<div class="progressbar-bar liveUpdate-barColor-background-color">';
		cR += '<div class="progressbar-bar-filled liveUpdate-fillBarColor-background-color"></div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,propertyGroups:	[

		{
			caption: 'Style',
			properties: [
				[
					{
						caption: 'Color'
						,name: 'barColor'
						,proptype: 'background-color'
						,type: 'solid-colorpicker'
						,value: function(item,name) {
							return item.barColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {
							caption: 'Color',
							property: 'background-color',
							selector: '.progressbar-bar',
							transitionable: true
						}

					},
					{
						caption: 'Fill Color'
						,name: 'fillBarColor'
						,proptype: 'background-color-2-fill'
						,type: 'solid-colorpicker'
						,value: function(item,name) {
							return item.fillBarColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {
							caption: 'Fill Color',
							property: 'background-color',
							selector: '.progressbar-bar-filled',
							transitionable: true
						}
					}
				]
				,[
					{
						caption: 'Progress (%)'
						,name: 'progress'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.progress;
						}
						,values: { min: 0, max: 100, step: 10 }
						,changeProperty: {
							caption: 'Progress',
							property: 'percent-width',
							selector: '.progressbar-bar-filled',
							transitionable: true


						}
					}
				],

            ]
        }
    ]
}

/* BADGE */
prx.types.ios7_badge = {
    name: "ios7_badge"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        if(typeof(item.textFontStyle) == 'undefined')
            item['textFontStyle'] = '300';

        //var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');
        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-badge">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios7-badge-inner { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-badge-inner changeProperty-text liveUpdate-backgroundColor-background-color liveUpdate-textColor-color changeProperty-backgroundColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-borderRadius">';
        cR += '<span data-editableproperty="text">'+prx.componentsHelper.getProp(item.text,'text-textarea')+'</span> '
        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    },
    editableProperties: [ prx.commonproperties.text ],
    propertyGroups: [
            {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColorSolid,
                    {
                        caption: 'Border <span class="icon icon-border-radius" title="Border radius"></span>',
                        name: 'borderRadius',
                        proptype: 'border-radius',
                        type: 'combo-select',
                        value: function(item,name) { return item.borderRadius; },
                        values: { min: 0, max: 40, step: 2 },
                        expandableType: 'borderRadius',
                        expandedValues: ["tl", "tr", "bl", "br"],
                        changeProperty: {
                            caption: 'Border radius',
                            selector: '.changeProperty-borderRadius',
                            property: 'border-radius',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],'text', false, {propName: 'textFontStyle', caption: 'Font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','text')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false})
                    ,prx.commonproperties.ios7TextColorRichText('color','text',void(0))
                ]
            ]
        }
    ]
}

/* MAP TAG */
prx.types.ios8_map_tag = {
    name: "ios8_map_tag"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var borderRadius = 10;

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios8-map-tag">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .ios8-map-tag-wrapper { '+prx.utils.getBgCss(item.backgroundColor)+'; border-radius: '+prx.componentsHelper.getProp(borderRadius,'border-radius')+'; }';
        cR += '#' + _id + ' .ios8-map-tag-point { border-top-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-border')+';}';
        cR += '#' + _id + ' .ios8-map-tag-point { bottom: -'+Math.ceil((dims.height*0.5)-1)+'px; margin-left: -'+(Math.ceil(dims.height*0.25))+'px; border-width: '+Math.ceil(dims.height*0.25)+'px;}';
        cR += '#' + _id + ' .ios8-map-tag-text { color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px;}';
        cR += '#' + _id + ' .ios8-map-tag-duration { color: '+prx.componentsHelper.getProp(item.durationColor,'color-text')+'; '+prx.componentsHelper.getProp(item.durationFont + '|' + item.durationFontStyle,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.durationSize,'num-text-size')+'px;}';

        cR += '#' + _id + ' .ios8-map-tag-left-info { width: '+dims.height+'px; background-color: '+prx.componentsHelper.getProp(item.durationBgColor,'color-background')+'; border-radius: '+prx.componentsHelper.getProp(borderRadius,'border-radius')+' 0 0 '+prx.componentsHelper.getProp(borderRadius,'border-radius')+';}';
        if(prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '') {
            cR += '#' + _id + ' .ios8-map-tag-icon-left {  background-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+'); }';
        }
        if(prx.componentsHelper.getProp(item.imgSrc2.fileId,'other') != '') {
            cR += '#' + _id + ' .ios8-map-tag-icon-right { background-image: url('+prx.componentsHelper.getProp(item.imgSrc2,'asset')+'); }';
        }
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<span class="ios8-map-tag-point liveUpdate-backgroundColor-border-top-color changeProperty-backgroundColor-border-top-color"></span>';
		cR += '<div class="ios8-map-tag-wrapper liveUpdate-backgroundColor-background-color changeProperty-backgroundColor-background-color">';
		if(prx.componentsHelper.getProp(item.showThumb,'boolean') == true) {
			cR += '<div class="ios8-map-tag-left-info liveUpdate-durationBgColor-background-color changeProperty-durationBgColor">';
			if(prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '') {
				cR += '<div class="ios8-map-tag-icon-left"></div>';
			}
			cR += '<div class="ios8-map-tag-duration liveUpdate-durationColor-color changeProperty-durationColor changeProperty-durationSize changeProperty-durationFont" data-editableproperty="duration">'+prx.componentsHelper.getProp(item.duration,'text-textarea')+'</div>';
			cR += '</div>';
		}
		cR += '<div class="ios8-map-tag-text liveUpdate-textColor-color changeProperty-textColor changeProperty-textSize changeProperty-textFont"><span data-editableproperty="text">'+prx.componentsHelper.getProp(item.text,'text-textarea')+'</span></div>';
		if(prx.componentsHelper.getProp(item.imgSrc2.fileId,'other') != '') {
			cR += '<div class="ios8-map-tag-icon-right actions-actions1"></div>';
		}
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _height = prx.componentsHelper.getRealDims(item, symbol).height;

        $('#'+_id).find('.ios8-map-tag-left-info').width(_height);

        $('#' + _id).find('.ios8-map-tag-point').css({
            'border-width': Math.ceil(prx.componentsHelper.getProp(item.height,'num-other')*0.25)+'px',
            'margin-left': '-'+(Math.ceil(prx.componentsHelper.getProp(item.height,'num-other')*0.25))+'px',
            'bottom': '-'+Math.ceil((prx.componentsHelper.getProp(item.height,'num-other')*0.5)-1)+'px'
        });

    }
    ,interactions: [
        prx.commonproperties.actions,
        {
            caption: 'Arrow',
            name: 'actions1',
            type: 'action',
            value: function(item,name) {
                if(typeof(item.actions1) == "undefined") {
                    if (typeof(item.actions) == "undefined") {
                        item.actions1 = [];
                    } else {
                        item.actions1 = item.actions;
                    }
                }
                return item.actions1.length;
            }
            ,hiddenByDefault: function(item) {
                return (item.imgSrc2.fileId == '');
            }
        }
    ]
    ,editableProperties: [
        {
            caption: 'Text'
            ,name: 'text'
            ,type: 'input'
            ,value: function(item,name) {
                return item.title;
            }
            ,changeProperty: {
                caption: 'Text',
                selector: '.ios8-map-tag-text',
                property: 'text',
                transitionable: false
            }
        },
        {
            caption: 'Duration'
            ,name: 'duration'
            ,type: 'input'
            ,value: function(item,name) {
                return item.duration;
            }
            ,changeProperty: {
                caption: 'Duration',
                selector: '.ios8-map-tag-duration',
                property: 'text',
                transitionable: false
            }
        }
      ]
    ,propertyGroups: [
          {
              caption: 'Style',
              properties: [
                  [
                       {
                           caption: 'Background',
                           name: 'backgroundColor',
                           proptype: 'background-color',
                           type: 'solid-colorpicker',
                           value: function(item,name) { return item.backgroundColor; },
                           liveUpdate: 'background-color,border-top-color',
                           changeProperty: {
                               caption: 'Background color',
                               selector: '.changeProperty-backgroundColor',
                               property: 'background-color,border-top-color',
                               transitionable: true
                         }
                     }
                  ]
              ]
          },
          {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                ],[
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],'text', false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false})
                    ,prx.commonproperties.textSizeRichText('font-size','text')
                ],
                [
                     prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false})
                     ,prx.commonproperties.textColorRichText('color','text')
                ]
            ]
        },
          {
              caption: 'Duration box',
              properties: [
                  [
                       {
                        caption: 'Show?'
                        ,name: 'showThumb'
                        ,type: 'onoff'
                        ,value: function(item,name,index){
                            return item.showThumb;
                        }
                           ,onChange: function(item){
                            if(item.showThumb) {
                                $('#property-durationFont, #property-durationFontStyle, #property-durationSize, #property-durationColor, #property-durationProperties, #property-durationBgColor, #property-imgSrc').show();
                            } else {
                                $('#property-durationFont, #property-durationFontStyle, #property-durationSize, #property-durationColor, #property-durationProperties, #property-durationBgColor, #property-imgSrc').hide();
                            }
                        }
                        ,changeProperty: {
                            caption: 'Show Thumbnail',
                            rerender: true
                        }

                    }
                   ],
                   [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'durationFont',
                        proptype: 'font-family-2-duration',
                        type: 'select',
                        relatedEditableProperties: 'duration',
                        relatedCSSProperties: 'font-family',
                        value: function(item,name) { return item.durationFont; },
                        values: function(){ return prx.comps.fonts },
                        changeProperty: { caption: 'Duration font', selector: '.changeProperty-durationFont', property: 'font-family', transitionable: false }
                        ,hiddenByDefault: function(item) {
                            return !item.showThumb;
                        }
                    }
                ],
                  [
                      {
                          caption: { label: 'Font style', class: 'text-properties-label text-fontstyle-label' },
                          name: 'durationFontStyle',
                          proptype: 'font-style-2-duration',
                          type: 'select',
                          relatedEditableProperties: 'duration',
                          relatedCSSProperties: ['font-weight','font-style'],
                          pffSettings: prx.commonproperties.pffSettingsTextFontStyle,
                          value: function(item,name) { return (typeof(item.durationFontStyle) == 'undefined' ? '300' : item.durationFontStyle); },
                          values: function() {
                              return prx.comps.fontStyles
                          },
                          changeProperty: {
                              changeFunction:  function(item, containerid, duration, easing, dynPropI){prx.componentsHelper.changeFunctionForTextFontStyleProperties(item, containerid, dynPropI, 'durationFontStyle')},
                              caption: 'Duration Text Font Style'
                          },
                          hiddenByDefault: function(item) {
                              return !item.showThumb;
                          }
                      },
                    {
                        caption: false,
                        name: 'durationSize',
                        proptype: 'font-size-2-duration',
                        type: 'combo-select',
                        relatedEditableProperties: 'duration',
                        relatedCSSProperties: 'font-size',
                        value: function(item,name) { return item.durationSize; },
                        values: prx.comps.textsize,
                        changeProperty: {
                            caption: 'Duration size',
                            selector: '.changeProperty-durationSize',
                            property: 'font-size',
                            transitionable: true
                        }
                        ,hiddenByDefault: function(item) {
                            return !item.showThumb;
                        }
                    }
                    ],
                    [
                    {
                        caption: { label: 'Underline', class: 'colorpicker-wrapper text-underline-label' },
                        name: 'durationProperties',
                        proptype: 'text-properties-2-duration',
                        type: 'checkbox',
                        relatedEditableProperties: 'duration',
                        relatedCSSProperties: ['font-weight','font-style','text-decoration'],
                        pffSettings: prx.commonproperties.pffSettingsTextProperties,
                        value: function(item,name) {

                            if(typeof(item.durationProperties) == "undefined") {
                                item.durationProperties = item.textProperties;
                            }

                            return item.durationProperties;
                        },
                        values: [
                            { value: 'underline', displayValue: '', icon: 'text-underline'}
                        ],
                        changeProperty: {
                            caption: 'Duration properties',
                            rerender: true
                        }
                        ,hiddenByDefault: function(item) {
                            return !item.showThumb;
                        }
                    },
                    {
                        caption: { label: 'Color', class: 'text-properties-label text-color-label' },
                        name: 'durationColor',
                        proptype: 'font-color-2-duration',
                        type: 'solid-colorpicker',
                        relatedEditableProperties: 'duration',
                        relatedCSSProperties: 'color',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item,name) { return item.durationColor; },
                        liveUpdate: 'color',
                        changeProperty: {
                            caption: 'Duration color',
                            selector: '.changeProperty-durationColor',
                            property: 'color',
                            transitionable: true
                        }
                        ,hiddenByDefault: function(item) {
                            return !item.showThumb;
                        }
                    }
                    ],
                  [
                    {
                           caption: { label: 'Background', class: 'text-properties-label text-fontstyle-label' }
                          ,name: 'durationBgColor'
                          ,proptype: 'background-color-2-duration'
                          ,type: 'gradients-colorpicker'
                          ,value: function(item,name) {
                              return item.durationBgColor;
                          }
                          ,liveUpdate: 'background-color'
                          ,changeProperty: {
                            caption: 'Thumbnail background color',
                            selector: '.changeProperty-durationBgColor',
                            property: 'background-color',
                            transitionable: true
                        }
                          ,hiddenByDefault: function(item) {
                            return !item.showThumb;
                        }
                      }
                  ],
                  [
                    {
                        caption: 'Thumbnail Icon',
                        name: 'imgSrc',
                        type: 'combo-asset',
                        displayValue: function(item,name) {
                            if(item.imgSrc.fileId == '') {
                                    return 'No asset selected.';
                                }
                                return item.imgSrc.name;
                        }
                        ,value: function(item,name) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc
                            });
                        }
                        ,changeProperty: {
                            caption: 'Thumbnail Icon',
                            rerender: true
                        }
                        ,hiddenByDefault: function(item) {
                            return !item.showThumb;
                        }
                    }
                  ]
              ]
          },
          {
              caption: 'Right Icon',
              properties: [
                  [
                      {
                        caption: false,
                        name: 'imgSrc2',
                        type: 'combo-asset',
                        displayValue: function(item,name) {
                            if(item.imgSrc2.fileId == '') {
                                  return 'No asset selected.';
                              }
                              return item.imgSrc2.name;
                        }
                        ,value: function(item,name) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc2
                            });
                        }
                        ,changeProperty: {
                            caption: 'Icon',
                            rerender: true
                        }
                    }
                  ]
              ]
          }
      ]
}

/* MESSAGE BUBBLE */
prx.types.ios8_message_bubble = {
    name: "ios8_message_bubble"
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item,symbol);

        // if(typeof(item.textFontStyle) == 'undefined')
        //     item['textFontStyle'] = '300';

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios8-message-bubble">'

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .ios8-message-bubble-wrapper { '+prx.utils.getBgCss(item.backgroundColor)+'; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; }';
        cR += '#' + _id + ' .ios8-message-bubble-text { color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+'}';
        if(prx.componentsHelper.getProp(item.thumbnail.fileId,'other') != '') {
            cR += '#' + _id + ' .ios8-message-bubble-thumb { background-image: url('+prx.componentsHelper.getProp(item.thumbnail,'asset')+');}';
        }
        cR += '#' + _id + ' .ios8-message-bubble-tip { border-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-border')+';}';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios8-message-bubble-wrapper '+(item.isSender ? 'right ' : '')+'liveUpdate-backgroundColor-background-color changeProperty-backgroundColor-background-color changeProperty-borderRadius changeProperty-textAlign">';
        cR += '<div class="ios8-message-bubble-text liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont"><span data-editableproperty="text">'+prx.componentsHelper.getProp(item.text,'text-textarea')+'</span></div>';
        cR += '<div class="ios8-message-bubble-thumb-wrapper">';
        if(prx.componentsHelper.getProp(item.thumbnail.fileId,'other') != '') {
        cR += '<div class="ios8-message-bubble-thumb"></div>';
        }
        cR += '</div>';
        cR += '</div>';
        cR += '<div class="ios8-message-bubble-tip '+(prx.componentsHelper.getProp(item.isSender,'boolean') ? 'right ' : '')+'liveUpdate-backgroundColor-border-color changeProperty-backgroundColor-border-color"></div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,interactions: [ prx.commonproperties.actions ]
    ,editableProperties: [
        {
            caption: 'Text',
            name: 'text',
            type: 'textarea',
            value: function(item,name) { return item.text; },
            changeProperty: {
                property: 'text',
                selector: '.ios8-message-bubble-text',
                transitionable: false
            }
         }
    ]
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                     {
                        caption: 'Background',
                        name: 'backgroundColor',
                        proptype: 'background-color',
                        type: 'solid-colorpicker',
                        value: function(item,name) { return item.backgroundColor; },
                        liveUpdate: 'background-color,border-color',
                        changeProperty: {
                            caption: 'Background color',
                            selector: '.changeProperty-backgroundColor',
                            property: 'background-color,border-color',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],'text', false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','text')
                ],
                [
                     prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false}),
                     prx.commonproperties.textColorRichText('color','text')
                ],
                [
                     prx.commonproperties.textAlignRichText('text-align','text')
                ]
            ]
        },
        {
              caption: 'Thumbnail',
              properties: [
                  [
                      {
                        caption: false,
                        name: 'thumbnail',
                        type: 'combo-asset',
                        displayValue: function(item,name) {
                            if(item.thumbnail.fileId == '') {
                                  return 'No asset selected.';
                              }
                              return item.thumbnail.name;
                        }
                        ,value: function(item,name) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.thumbnail
                            });
                        }
                        ,changeProperty: {
                            caption: 'Thumbnail',
                            rerender: true
                        }
                    }
                  ]
            ]
        },
        {
            caption: 'Message direction',
            properties: [
                [
                    {
                        caption: 'Sender?'
                        ,name: 'isSender'
                        ,type: 'onoff'
                        ,value: function(item,name,index){
                            return item.isSender;
                        }
                        ,changeProperty: {
                            caption: 'Message direction',
                            rerender: true
                        }

                    }
                ]
            ]
        }
    ]

}


/* WIDGET / NOTIFICATION */
prx.types.ios10_widget = {
    name: "ios10_widget"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item,symbol);

        var cR = '';
        cR += '<div id="'+_id+'" class="box pos type-ios10-widget '+((item.name=='ios10_notification') ? 'type-ios10-notification' : '')+' ' + prx.items.getComponentBaseClasses(item, containerid, symbol) + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + '>';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .ios10-widget-title-bar { height: '+(32*prx.componentsHelper.getScale(_library))+'px; '+prx.utils.getBgCss(item.titleBackgroundColor)+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+' '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+' 0px 0px; }';
        cR += '#'+_id+' .ios10-title-text { '+prx.componentsHelper.getProp(item.titleFont + '|' + item.titleFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.titleColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.titleSize,'num-text-size')+'px; }';
        cR += '#' + _id + ' .ios10-more-text { '+prx.componentsHelper.getProp(item.titleFont + '|' + item.titleFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.titleColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.titleSize,'num-text-size')+'px; }';
        if(prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '') {
            cR += '#' + _id + ' .ios10-widget-title-bar-icon { background: url(' + prx.componentsHelper.getProp(item.imgSrc, 'asset') + '); }';
        }
        cR += '#'+_id+' .ios10-widget-content { height: '+(_dims.height - (32*prx.componentsHelper.getScale(_library)))+'px; '+prx.utils.getBgCss(item.backgroundColor)+'; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; border-radius: 0px 0px '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+' '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; }';
        if( item.name == 'ios10_notification' ) {
            cR += '#'+_id+' .ios10-content-text { '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; }';
        }
        cR += '</style>';

        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios10-widget-wrapper">';

		cR += '<div class="ios10-widget-title-bar liveUpdate-titleBackgroundColor-background-color changeProperty-titleBackgroundColor">';

        cR += '<div class="ios10-widget-title-bar-icon"></div>';

        cR += '<div class="ios10-widget-title-bar-title liveUpdate-titleColor-color">';
        cR += '<div class="ios10-title-text changeProperty-titleColor changeProperty-titleSize changeProperty-titleFont changeProperty-titleFontStyle changeProperty-title">';
        cR += '<span data-editableproperty="title">'+prx.componentsHelper.getProp(item.title,'text-textarea')+'</span>';
        cR += '</div>';
        cR += '</div>';

        cR += '<div class="ios10-widget-title-bar-more liveUpdate-titleColor">';
        cR += '<div class="ios10-more-text actions-actions1 changeProperty-titleColor changeProperty-titleSize changeProperty-titleFont changeProperty-titleFontStyle changeProperty-more">';
        cR += '<span data-editableproperty="more">'+prx.componentsHelper.getProp(item.more,'text-textarea')+'</span>';
        cR += '</div>';
        cR += '</div>';

        cR += '</div>';


        if( item.name != 'ios10_notification' ) {
            cR += '<div class="ios10-widget-content liveUpdate-backgroundColor-background-color changeProperty-backgroundColor liveUpdate-textColor-color changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-textFontStyle changeProperty-textAlign changeProperty-text">';
        }
        else{
            cR += '<div class="ios10-widget-content">';
            cR += '<div class="ios10-content-text liveUpdate-backgroundColor changeProperty-backgroundColor liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-textFontStyle changeProperty-textAlign changeProperty-text">';
            cR += '<span data-editableproperty="text">' + prx.componentsHelper.getProp(item.text, 'text-textarea') + '</span>';
            cR += '</div>';
        }

        cR += '</div>';

        cR += '</div>';

        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);

        cR += '</div>';

        return cR;
    },
    interactions: [
        prx.commonproperties.actions,
        {
            caption: 'Secondary title text',
            name: 'actions1',
            type: 'action',
            value: function(item,name) {
                if(typeof(item.actions1) == "undefined") {
                    if (typeof(item.actions) == "undefined") {
                        item.actions1 = [];
                    } else {
                        item.actions1 = item.actions;
                    }
                }
                return item.actions1.length;
            },
            hiddenByDefault: function(item) {
                return item.name === 'ios10_notification';
            }
        }
    ],
    editableProperties: [
        {
            caption: 'Title',
            name: 'title',
            type: 'input',
            value: function(item, name) {
                return typeof item.title == 'undefined' ? '' : item.title;
            },
            changeProperty: {
                caption: 'Title',
                selector: '.changeProperty-title',
                property: 'title',
                transitionable: false
            }
        },
        {
            caption: 'Secondary title text',
            name: 'more',
            type: 'input',
            value: function(item, name) {
                return typeof item.more == 'undefined' ? '' : item.more;
            },
            changeProperty: {
                caption: 'Secondary title text',
                selector: '.changeProperty-more',
                property: 'title',
                transitionable: false
            }
        },
        {
            caption: 'Text',
            name: 'text',
            type: 'textarea',
            value: function(item, name) {
                return typeof item.text == 'undefined' ? '' : item.text;
            },
            changeProperty: {
                caption: 'Text',
                selector: '.changeProperty-text',
                property: 'text',
                transitionable: false
            },
            hiddenByDefault: function(item) {
                return item.name !== 'ios10_notification';
            }
        }
    ],
    propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor,
                    {
                        caption: 'Title bar',
                        proptype: 'background-color-2-bar',
                        name: 'titleBackgroundColor',
                        type: 'gradients-colorpicker',
                        value: function(item,name) {
                            return item.titleBackgroundColor;
                        },
                        values: prx.comps.ios7Colors,
                        liveUpdate: 'background-color',
                        changeProperty: {
                            caption: 'Background color',
                            selector: '.changeProperty-titleBackgroundColor',
                            property: 'background-color',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Title',
            properties: [
                [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'titleFont',
                        proptype: 'font-family-2-title',
                        type: 'select',
                        relatedEditableProperties: ['title', 'more'],
                        relatedCSSProperties: 'font-family',
                        value: function(item,name) {
                            if (typeof(item.titleFont) == "undefined") { return 'Helvetica, Arial, sans-serif'; }
                            return item.titleFont;
                        },
                        values: function() { return prx.comps.fonts; }
                        ,changeProperty: {
                            caption: 'Title font',
                            selector: '.changeProperty-titleFont',
                            property: 'font-family',
                            transitionable: false
                        }

                    }
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],['title', 'more'], false, {propName: 'titleFontStyle', caption: 'Title font style', useAsDynProp: false}),
                    {
                        caption: false,
                        name: 'titleSize',
                        proptype: 'font-size-2-title',
                        type: 'combo-select',
                        relatedEditableProperties: ['title', 'more'],
                        relatedCSSProperties: 'font-size',
                        value: function(item, name) {
                            return typeof item.titleSize == 'undefined' ? '' : item.titleSize;
                        },
                        values: prx.comps.textsize,
                        changeProperty: {
                            caption: 'Title size',
                            selector: '.changeProperty-titleSize',
                            property: 'font-size',
                            transitionable: true
                        }
                    }
                    ],
                    [
                        prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],['title', 'more'], false, {propName: 'titleProperties', caption: 'Title underline', useAsDynProp: false}),
                        {
                            caption: { label: 'Color', class: 'text-properties-label text-color-label' },
                            name: 'titleColor',
                            proptype: 'font-color-2-title',
                            type: 'solid-colorpicker',
                            relatedEditableProperties: ['title', 'more'],
                            relatedCSSProperties: 'color',
                            pffSettings: prx.commonproperties.pffSettingsColor,
                            value: function(item,name) {
                                return typeof item.titleColor == 'undefined' ? '' : item.titleColor;
                            },
                            values: prx.comps.ios7Colors,
                            liveUpdate: 'color',
                            changeProperty: {
                                caption: 'Title color',
                                selector: '.changeProperty-titleColor',
                                property: 'color',
                                transitionable: true
                            }
                        }
                ]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text', {eq:'neq',condition:'ios10_notification'})
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],'text', {eq:'neq',condition:'ios10_notification'}, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','text', {eq:'neq',condition:'ios10_notification'})
                ],
                [
                     prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', {eq:'neq',condition:'ios10_notification'}, {propName: 'textProperties', caption: 'Text style', useAsDynProp: false}),
                     prx.commonproperties.ios7TextColorRichText('color','text', {eq:'neq',condition:'ios10_notification'})
                ],
                [
                     prx.commonproperties.textAlignRichText('text-align','text', {eq:'neq',condition:'ios10_notification'})
                ]
            ]
        },
        {
            caption: 'Icon',
            properties: [
                [
                    {
                        caption: false,
                        name: 'imgSrc',
                        type: 'combo-asset',
                        displayValue: function(item,name) {
                            if(item.imgSrc.fileId == '') {
                                return 'No asset selected.';
                            }
                            return item.imgSrc.name;
                        }
                        ,value: function(item,name) {
                        return JSON.stringify({
                            allow: 'image',
                            asset: item.imgSrc
                        });
                    }
                        ,changeProperty: {
                        caption: 'Icon',
                        rerender: true
                    }
                    }
                ]
            ]
        }
    ]
}

/* HOME INDICATOR */
prx.types.ios11_home_indicator = {
    name: "ios11_home_indicator"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item,symbol);

        var cR = '';
        cR += '<div id="'+_id+'" class="box pos type-ios11-home-indicator ' + prx.items.getComponentBaseClasses(item, containerid, symbol) + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' '+((prx.componentsHelper.getProp(item.overlay,'boolean'))? 'data-mpoverlay="1"': '')+'>';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        if(item.propagateevents) {
            cR += '#'+_id+' .ios11-home-indicator-inner { pointer-events: none; }';
        }
        cR += '#'+_id+' .ios11-home-indicator-wrapper { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
        cR += '#'+_id+' .ios11-home-indicator-icon { background-color: '+prx.componentsHelper.getProp(item.indicatorColor,'color-background')+'; }';
        cR += '</style>';

        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios11-home-indicator-wrapper liveUpdate-backgroundColor-background-color changeProperty-backgroundColor">';

        cR += '<div class="ios11-home-indicator-inner actions-actions1">';

        cR += '<div class="ios11-home-indicator-icon liveUpdate-indicatorColor-background-color changeProperty-indicatorColor"></div>';

        cR += '</div>';

        cR += '</div>';

        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);

        cR += '</div>';

        return cR;
    },
    interactions: [
        {
            caption: 'Indicator Interactions',
            name: 'actions1',
            type: 'action',
            value: function(item,name) {
                return item.actions1.length;
            },
            hiddenByDefault: function(item){
                if(item.propagateevents) {
                    return true;
                }
                return false;
            },
            changeProperty: { caption: 'Indicator Interactions', selector: '.actions-actions1', property: 'action', transitionable: false, changeable: false }
        },
    ],
    propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor,
                    {
                        caption: 'Indicator',
                        proptype: 'background-color' ,
                        name: 'indicatorColor',
                        type: 'combo-colorpicker',
                        value: function(item,name) {
                            return item.indicatorColor;
                            },
                        values: prx.comps.ios7Colors,
                        liveUpdate: 'background-color',
                        changeProperty: {
                            caption: 'Indicator color',
                            selector: '.changeProperty-indicatorColor',
                            property: 'background-color',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Advanced',
            properties: [
                [
                    {
                        caption: 'Propagate events'
                        ,name: 'propagateevents'
                        ,type: 'onoff'
                        ,value: function(item,name) {
                            if(typeof(item.propagateevents) == "undefined") {
                                return false;
                            }
                            return item.propagateevents;
                        }
                        ,changeProperty: {
                            caption: 'Propagate events',
                            rerender: true
                        }
                    },
                    {
                        caption: 'Position fixed on transitions'
                        ,name: 'overlay'
                        ,type: 'onoff'
                        ,value: function(item,name) {
                            return item.overlay;
                        }
                        ,changeProperty: {
                            caption: 'Position fixed',
                            rerender: true
                        }
                    }
                ]
            ]
        }
    ]
}

//TYPE: CONTEXTMENU
prx.types.ios13_contextmenu = {
    name: 'ios13_contextmenu'
    ,onDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        var cR = '';

        if(typeof(item.textProperties) == "undefined") { item.textProperties = []; }

        var _textprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var _dims = prx.componentsHelper.getRealDims(item,symbol);

        // :(
        var _listitemH = (_dims.height - prx.componentsHelper.getProp(item.borderWidth,'num-border-width')*(item.listitems.length+1))/item.listitems.length;

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-ios7-list type-ios13-contextmenu">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .ios7-list-inner { text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+' '+prx.utils.getBgCss(item.backgroundColor)+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+';  }';
        if(typeof(item.iconSize) != "undefined") {
            cR += '#' + _id + ' .ios7-list-icon { width: '+parseInt(_listitemH*(prx.componentsHelper.getProp(item.iconSize,'icon-size')/5))+'px; height: '+parseInt(_listitemH*(prx.componentsHelper.getProp(item.iconSize,'icon-size')/5))+'px; }';
        }
        cR += '#' + _id + ' .bordered-container { border-top: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }'
        cR += '#' + _id + ' .ios7-list-text { '+_textprops+' }';
        cR += '#' + _id + ' label:active, #' + _id + ' input:checked + label { '+prx.utils.getBgCss(item.activeBackgroundColor)+';}'
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="ios7-list-inner liveUpdate-borderColor-border-color liveUpdate-backgroundColor-background-color changeProperty-backgroundColor changeProperty-textColor changeProperty-borderColor changeProperty-textAlign changeProperty-textFont changeProperty-textSize">';

        $.each(item.listitems, function(i,elm){

            var icon = '';
            icon = '<div class="ios7-list-icon ios7-list-icon-'+prx.componentsHelper.getProp(item.iconpos,'icon-position')+'" '+((typeof (elm.buttonicon) != "undefined" && prx.componentsHelper.getProp(elm.buttonicon.fileId,'other') != '') ? 'style="background-image: url('+ prx.componentsHelper.getProp(elm.buttonicon,'asset')+');"' : '' ) + '></div>';

            cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property changeProperty-textColor ios7-list-listitem ios7-list-listitem-type-'+prx.componentsHelper.getProp(elm.itemtype,'other')+'" data-dynamic-property-index="'+i+'">';

            //cR +='<label '+ (((elm.itemtype == 'checkbox' || elm.itemtype == 'radio') && elm.checked) ? 'class="liveUpdate-activeTextColor liveUpdate-activeBackgroundColor-background-color"' : '') +' for="'+_id+'-checkbox-'+i+'" ' +((elm.itemtype == 'checkbox' || elm.itemtype == 'radio' || item.maintainstate) ? ' data-clickable="true"' : '') + '>'
            cR +='<label for="'+_id+'-checkbox-'+i+'">'


            cR += '<div class="bordered-container liveUpdate-borderColor-border-color liveUpdate-textColor-'+i+'-color changeProperty-borderColor changeProperty-textColor-listitem" style="color: ' + prx.componentsHelper.getProp(elm.textColor, 'color-text') + ';">';

            if(prx.componentsHelper.getProp(item.iconpos,'icon-position') == "left") { cR += icon; }

            cR += '<div class="text-and-subtitle">';
            cR += '<div class="ios7-list-text">';
            cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.text,'text-textarea')+'</span>';
            cR += '</div>';
            cR += '</div>';

            if(prx.componentsHelper.getProp(item.iconpos,'icon-position') == "right") { cR += icon; }

            cR += '</div>';

            cR += '</label>';
            cR += '</div>';
        });
        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,onResize: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var _dims = prx.componentsHelper.getRealDims(item,symbol);
        var _listitemH = (_dims.height - item.borderWidth*(item.listitems.length+1))/item.listitems.length;

        $('#' + _id + ' .ios7-list-icon').width(parseInt(_listitemH*(prx.componentsHelper.getProp(item.iconSize,'icon-size')/5))).height(parseInt(_listitemH*(prx.componentsHelper.getProp(item.iconSize,'icon-size')/5)));
    }
    ,propertyGroups:	[
        {
            caption: 'Context Menu',
            properties: [
                [
                    prx.commonproperties.ios7BackgroundColor
                    ,{
                    caption: 'Active',
                    name: 'activeBackgroundColor',
                    proptype: 'background-color-2-active',
                    type: 'gradients-colorpicker',
                    value: function(item,name){
                        return item.activeBackgroundColor
                    }
                    ,values: prx.comps.ios7Colors
                    ,liveUpdate: 'background-color'
                    ,changeProperty: {
                        caption: 'Active background color',
                        rerender: true
                    }

                }
                ],[
                    {
                        caption: 'Border (px)',
                        name: 'borderWidth',
                        proptype: 'border-width',
                        type: 'combo-select',
                        value: function(item,name)
                        {
                            if(typeof(item.borderWidth) == "undefined") {
                                return 1;
                            }
                            return item.borderWidth;
                        },
                        values: { min: 0, max: 20, step: 2 }
                        ,changeProperty: {
                            caption: 'Border width',
                            rerender: true
                        }

                    }
                    ,prx.commonproperties.ios7BorderColor
                ],
            ]
        },{
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','listitems.text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight','font-style'],['listitems.text'], false, {propName: 'textFontStyle', caption: 'Text Font Style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','listitems.text')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],['listitems.text'], false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false})
                ],
                [
                    prx.commonproperties.textAlignRichText('text-align','listitems.text')
                ]
            ]
        },{
            caption: 'Icon',
            properties: [
                [
                    {
                        caption: false
                        ,name: 'iconpos'
                        ,type: 'select'
                        ,value: function(item,name) {
                            return item.iconpos;
                        }
                        ,values: [{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'}]
                        ,changeProperty: {
                            caption: 'Icon position',
                            rerender: true,
                            changeable: false
                        }

                    }
                    ,
                    {
                        caption: false
                        ,name: 'iconSize'
                        ,proptype: 'icon-size'
                        ,type: 'select'
                        ,value: function(item,name) {
                            return item.iconSize;
                        }
                        ,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
                        ,changeProperty: {
                            caption: 'Icon size',
                            rerender: true,
                            changeable: false
                        }
                    }

                ]
            ]
        }
    ]
    ,dynamicProperties: {
        data: 'listitems'
        ,propertyCaption: 'List items'
        ,propertyName: 'List item'
        ,addCaption: 'Add list item'
        ,deleteCaption: 'Delete'
        ,blankItem: {
            text: 'Label',
            itemtype: 'withIcon',
            value: 'Insert value',
            buttonicon: {"fileId":"374d51d6a3787a051e8b4c22393a462a.svg","name":"heart 2.svg","assetType":"icon","bucketsource":"static","url":"f1515489095293/374d51d6a3787a051e8b4c22393a462a.svg","targetSrc":"generated/374d51d6a3787a051e8b4c22393a462a_000000.svg","color":"000000"},
            textColor: '#000000',
            actions: [],
            iconpos: 'right',
            iconSize: 2,

        }
        ,captionProperty: 'text'
        ,editableProperties: [
            {
                caption: 'Label'
                ,name: 'text'
                ,type: 'input'
                ,value: function(item,name,index) {
                    return item.listitems[index].text;
                }
                ,changeProperty: {
                    caption: 'Label',
                    property: 'text',
                    selector: '.ios7-list-text',
                    transitionable: false
                }
            }
        ]
        ,interactions: [ prx.commonproperties.actions_listitems ]
        ,propertyGroups: [
            {
                caption: 'Icon',
                properties: [[
                    {
                        caption: false
                        ,name: 'buttonicon'
                        ,type: 'combo-asset'
                        ,displayValue: function(item,name,index) {
                            if(item.listitems[index].buttonicon.fileId == '') {
                                return 'No icon selected';
                            }
                            return item.listitems[index].buttonicon.name;
                        }
                        ,value: function(item,name,index) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.listitems[index].buttonicon
                            });
                        }
                        ,hiddenByDefault: function(item,name,index){
                            return (item.listitems[index].itemtype != 'nested' && item.listitems[index].itemtype != 'withIcon' && item.listitems[index].itemtype != 'withIconAndValue' && item.listitems[index].itemtype != 'nestedWithValue' && item.listitems[index].itemtype != 'checkbox' && item.listitems[index].itemtype != 'withIconAndBadge' && item.listitems[index].itemtype != 'nestedWithBadgeAndValue' && item.listitems[index].itemtype != 'nestedWithBadge' && item.listitems[index].itemtype != 'radio');
                        }
                        ,changeProperty: {
                            caption: 'Icon',
                            rerender: true
                        }

                    }
                ]]
            },
            {
                caption: 'Text',
                properties: [
                    [
                        prx.commonproperties.ios7TextColorListItemRichText('color','listitems.text')
                    ]
                ]
            }
        ]
    }
}





/************************************************************************************************/
/************************************* COMPONENTS (OBJECTS) *************************************/
/************************************************************************************************/



/****** TOOLBARS ******/

//TYPE: NAVBAR
prx.components.ios7_navbar = {
    name: 'ios7_navbar'
    ,type: 'ios7_navbar'
    ,lib: _library
    ,caption: 'Nav Bar'
    ,icon: '-1800px 0'
    ,helper: prx.url.devices + '/ios9/light/navbar/helper.png'
    ,width: 'full'
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(255,255,255,0.95)'
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderPos: 'bottom'
    ,borderColor: '#CCCCCC'
    ,title: 'Label'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '500'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textColor: '#000000'
    ,textProperties: []
    ,leftBtnType: 'none'
    ,rightBtnType: 'none'
    ,overlay: false
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1800px 0',
                helper: prx.url.devices + '/ios9/light/navbar/helper.png',
            },
            components: {
                icon: '-1800px 0',
                helper: prx.url.devices + '/ios9/light/navbar/helper.png',
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#8e8e93',
                borderWidth: 0*prx.componentsHelper.getScale(_library),
                textColor: '#000000',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1400px -1100px',
                helper: prx.url.devices + '/ios9/dark/navbar/helper.png',
            },
            components: {
                icon: '-1400px -1100px',
                helper: prx.url.devices + '/ios9/dark/navbar/helper.png',
                backgroundColor: 'rgba(29,29,29,0.94)',
                borderColor: '#cccccc',
                borderWidth: 0*prx.componentsHelper.getScale(_library),
                textColor: '#FFFFFF',
            },
        },
    }
};

//TYPE: NAVBAR WITH BUTTONS
prx.components.ios7_navbar_buttons = {
    name: 'ios7_navbar_buttons'
    ,type: 'ios7_navbar_buttons'
    ,lib: _library
    ,caption: 'Nav Bar With Buttons'
    ,icon: '-1900px 0'
    ,helper: prx.url.devices + '/ios9/light/navbar_buttons/helper.png'
    ,width: 'full'
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(255,255,255,0.95)'
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderPos: 'bottom'
    ,borderColor: '#CCCCCC'
    ,title: 'Label'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textColor: '#000000'
    ,textFontStyle: '600'
    ,textProperties: []
    ,btnTextFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,btnTextSize: 17*prx.componentsHelper.getScale(_library)
    ,btnTextColor: 'rgba(0,122,255,1)'
    ,btnTextProperties: []
    ,btnTextFontStyle: '600'
    ,leftBtnText: 'Back'
    ,rightBtnText: 'Done'
    ,leftBtnType: 'texticon'
    ,leftBtnIcon: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/c0877fc419aa836a4097f4f982a53a59.svg","targetSrc":"generated/c0877fc419aa836a4097f4f982a53a59_007aff.svg","color":"007aff"}
    ,rightBtnType: 'text'
    ,rightBtnIcon: {"fileId":"","name":"","assetType":"icon","url":""}
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1900px 0',
                helper: prx.url.devices + '/ios9/light/navbar_buttons/helper.png',
            },
            components: {
                icon: '-1900px 0',
                helper: prx.url.devices + '/ios9/light/navbar_buttons/helper.png',
                backgroundColor: 'rgba(255,255,255,0.95)',
                textColor: '#000000',
                borderColor: '#8e8e93',
                borderWidth: 0*prx.componentsHelper.getScale(_library),
                btnTextColor: 'rgba(0,122,255,1)',
                leftBtnIcon: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/c0877fc419aa836a4097f4f982a53a59.svg","targetSrc":"generated/c0877fc419aa836a4097f4f982a53a59_007aff.svg","color":"007aff"},
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1500px -1100px',
                helper: prx.url.devices + '/ios9/dark/navbar_buttons/helper.png',
            },
            components: {
                icon: '-1500px -1100px',
                helper: prx.url.devices + '/ios9/dark/navbar_buttons/helper.png',
                backgroundColor: 'rgba(29,29,29,0.94)',
                textColor: '#FFFFFF',
                borderColor: '#cccccc',
                borderWidth: 0*prx.componentsHelper.getScale(_library),
                btnTextColor: 'rgba(10,132,255,1)',
                leftBtnIcon: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/c0877fc419aa836a4097f4f982a53a59.svg","targetSrc":"generated/c0877fc419aa836a4097f4f982a53a59_0a84ff.svg","color":"0a84ff"},
            },
        },
    }
};

//TYPE: TABBAR
prx.components.ios7_tabbar = {
    name: 'ios7_tabbar'
    ,type: 'ios7_tabbar'
    ,lib: _library
    ,caption: 'Tabbar'
    ,icon: '0 -100px'
    ,helper: prx.url.devices + '/ios9/light/tabbar/helper.png'
    ,width: "full"
    ,height: 49*prx.componentsHelper.getScale(_library)
    ,vpos: "bottom"
    ,resizable : true
    ,backgroundColor: 'rgba(255,255,255,0.95)'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,borderColor: 'rgba(0,0,0,0'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '400'
    ,textSize: 10*prx.componentsHelper.getScale(_library)
    ,textColor:  '#8D8D8D'
    ,textProperties: []
    ,iconpos: 'top'
    ,iconSize: 3
    ,activeBackgroundColor: 'as-inactive'
    ,activeTextColor: 'rgba(0,122,255,1)'
    ,maskEnabled: true
    ,maskInactive: '#8D8D8D'
    ,maskActive: 'rgba(0,122,255,1)'
    ,activeTab: 0
    ,overlay: false
    ,tabs: [
        {
            text: 'Home'
            ,icon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e4e7dbcddba77b96954aa3602719162c_8d8d8d.svg","color":"8d8d8d"}
            ,activeicon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e4e7dbcddba77b96954aa3602719162c_007aff.svg","color":"007aff"}
            ,actions: []
        },
        {
            text: 'Messages'
            ,icon: {"fileId":"04b27f56e3cbdeedfafcf2b349de07f9.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/04b27f56e3cbdeedfafcf2b349de07f9_8d8d8d.svg","color":"8d8d8d"}
            ,activeicon: {"fileId":"04b27f56e3cbdeedfafcf2b349de07f9.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/04b27f56e3cbdeedfafcf2b349de07f9_007aff.svg","color":"007aff"}
            ,actions: []
        }
    ]
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '0 -100px',
                helper: prx.url.devices + '/ios9/light/tabbar/helper.png',
            },
            components: {
                icon: '0 -100px',
                helper: prx.url.devices + '/ios9/light/tabbar/helper.png',
                backgroundColor: 'rgba(255,255,255,0.95)',
                textColor:  '#8D8D8D',
                activeTextColor: 'rgba(0,122,255,1)',
                maskActive: 'rgba(0,122,255,1)',
                maskInactive: '#8D8D8D',
                tabs: [
                    {
                        text: 'Home'
                        ,icon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e4e7dbcddba77b96954aa3602719162c_8d8d8d.svg","color":"8d8d8d"}
                        ,activeicon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e4e7dbcddba77b96954aa3602719162c_007aff.svg","color":"007aff"}
                        ,actions: []
                    },
                    {
                        text: 'Messages'
                        ,icon: {"fileId":"04b27f56e3cbdeedfafcf2b349de07f9.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/04b27f56e3cbdeedfafcf2b349de07f9_8d8d8d.svg","color":"8d8d8d"}
                        ,activeicon: {"fileId":"04b27f56e3cbdeedfafcf2b349de07f9.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/04b27f56e3cbdeedfafcf2b349de07f9_007aff.svg","color":"007aff"}
                        ,actions: []
                    }
                ],
            },
            blankItem: {
                text: 'Label',
                icon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_8d8d8d.svg","color":"8d8d8d"},
                activeicon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_007aff.svg","color":"007aff"},
                actions: []
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1600px -1100px',
                helper: prx.url.devices + '/ios9/dark/tabbar/helper.png'
            },
            components: {
                icon: '-1600px -1100px',
                helper: prx.url.devices + '/ios9/dark/tabbar/helper.png',
                backgroundColor: 'rgba(29,29,29,0.94)',
                textColor: 'rgba(90,90,94,1)',
                activeTextColor: 'rgba(10,132,255,1)',
                maskActive: 'rgba(10,132,255,1)',
                maskInactive: 'rgba(90,90,94,1)',
                tabs: [
                    {
                        text: 'Home'
                        ,icon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e4e7dbcddba77b96954aa3602719162c_5a5a5e.svg","color":"5a5a5e"}
                        ,activeicon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e4e7dbcddba77b96954aa3602719162c_0a84ff.svg","color":"0a84ff"}
                        ,actions: []
                    },
                    {
                        text: 'Messages'
                        ,icon: {"fileId":"04b27f56e3cbdeedfafcf2b349de07f9.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/04b27f56e3cbdeedfafcf2b349de07f9_5a5a5e.svg","color":"5a5a5e"}
                        ,activeicon: {"fileId":"04b27f56e3cbdeedfafcf2b349de07f9.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/04b27f56e3cbdeedfafcf2b349de07f9_0a84ff.svg","color":"0a84ff"}
                        ,actions: []
                    }
                ],
            },
            blankItem: {
                text: 'Label',
                icon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_5a5a5e.svg","color":"5a5a5e"},
                activeicon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_0a84ff.svg","color":"0a84ff"},
                actions: []
            },
        },
    }
};

//TYPE: TOOLBAR
prx.components.ios7_toolbar = {
    name: 'ios7_toolbar'
    ,type: 'ios7_toolbar'
    ,lib: _library
    ,caption: 'Toolbar'
    ,icon: '-100px -100px'
    ,helper: prx.url.devices + '/ios9/light/toolbar/helper.png'
    ,width: "full"
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,vpos: "bottom"
    ,resizable : true
    ,backgroundColor: 'rgba(255,255,255,0.95)'
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderPos: 'top'
    ,borderColor: '#CCCCCC'
    ,overlay: false
    ,buttons: [
        {
            icon: {"fileId":"ef774542eca2f2136562f18561e024b9.svg","name":"flag-1.svg","assetType":"icon","bucketsource":"static","url":"f1352393585280/dd79283d0c018b90ddaddd64e4f6e528.svg","targetSrc":"generated/ef774542eca2f2136562f18561e024b9_007aff.svg","color":"007aff"}
            ,actions: []
        },
        {
            icon: {"fileId":"031673aaf750846323dbce519ac7ae57.svg","name":"folder-open.svg","assetType":"icon","bucketsource":"static","url":"f1352392599447/509bc66ab2b78cb8be33f5d5a09565f2.svg","targetSrc":"generated/031673aaf750846323dbce519ac7ae57_007aff.svg","color":"007aff"}
            ,actions: []
        },
        {
            icon: {"fileId":"465e32d9ef45ce932507e2d8510aad65.svg","name":"kub-trash.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/e61a10b75e24969c112f42511678b129.svg","targetSrc":"generated/465e32d9ef45ce932507e2d8510aad65_007aff.svg","color":"007aff"}
            ,actions: []
        },
        {
            icon: {"fileId":"4e597fba679249aba28c9cbd14537157.svg","name":"tl-undo.svg","assetType":"icon","bucketsource":"static","url":"f1352389411295/2b44a2094b283cf56e0b407d4fe110d1.svg","targetSrc":"generated/4e597fba679249aba28c9cbd14537157_007aff.svg","color":"007aff"}
            ,actions: []
        },
        {
            icon: {"fileId":"4541ee15e29d3c0c5df5326fc45d385d.svg","name":"tl-pencil.svg","assetType":"icon","bucketsource":"static","url":"f1352449133232/64193ce12d7f3b0eecf327262aec508f.svg","targetSrc":"generated/4541ee15e29d3c0c5df5326fc45d385d_007aff.svg","color":"007aff"}
            ,actions: []
        },
    ]
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-100px -100px',
                helper: prx.url.devices + '/ios9/light/toolbar/helper.png',
            },
            components: {
                icon: '-100px -100px',
                helper: prx.url.devices + '/ios9/light/toolbar/helper.png',
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#8e8e93',
                borderWidth: 0*prx.componentsHelper.getScale(_library),
                buttons: [
                    {
                        icon: {"fileId":"ef774542eca2f2136562f18561e024b9.svg","name":"flag-1.svg","assetType":"icon","bucketsource":"static","url":"f1352393585280/dd79283d0c018b90ddaddd64e4f6e528.svg","targetSrc":"generated/ef774542eca2f2136562f18561e024b9_007aff.svg","color":"007aff"}
                        ,actions: []
                    },
                    {
                        icon: {"fileId":"031673aaf750846323dbce519ac7ae57.svg","name":"folder-open.svg","assetType":"icon","bucketsource":"static","url":"f1352392599447/509bc66ab2b78cb8be33f5d5a09565f2.svg","targetSrc":"generated/031673aaf750846323dbce519ac7ae57_007aff.svg","color":"007aff"}
                        ,actions: []
                    },
                    {
                        icon: {"fileId":"465e32d9ef45ce932507e2d8510aad65.svg","name":"kub-trash.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/e61a10b75e24969c112f42511678b129.svg","targetSrc":"generated/465e32d9ef45ce932507e2d8510aad65_007aff.svg","color":"007aff"}
                        ,actions: []
                    },
                    {
                        icon: {"fileId":"4e597fba679249aba28c9cbd14537157.svg","name":"tl-undo.svg","assetType":"icon","bucketsource":"static","url":"f1352389411295/2b44a2094b283cf56e0b407d4fe110d1.svg","targetSrc":"generated/4e597fba679249aba28c9cbd14537157_007aff.svg","color":"007aff"}
                        ,actions: []
                    },
                    {
                        icon: {"fileId":"4541ee15e29d3c0c5df5326fc45d385d.svg","name":"tl-pencil.svg","assetType":"icon","bucketsource":"static","url":"f1352449133232/64193ce12d7f3b0eecf327262aec508f.svg","targetSrc":"generated/4541ee15e29d3c0c5df5326fc45d385d_007aff.svg","color":"007aff"}
                        ,actions: []
                    },
                ],
            },
            blankItem: {
                icon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_007aff.svg","color":"007aff"},
                actions: []
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1700px -1100px',
                helper: prx.url.devices + '/ios9/dark/toolbar/helper.png'
            },
            components: {
                icon: '-1700px -1100px',
                helper: prx.url.devices + '/ios9/dark/toolbar/helper.png',
                backgroundColor: 'rgba(22,22,24,0.96)',
                borderColor: '#cccccc',
                borderWidth: 0*prx.componentsHelper.getScale(_library),
                buttons: [
                    {
                        icon: {"fileId":"ef774542eca2f2136562f18561e024b9.svg","name":"flag-1.svg","assetType":"icon","bucketsource":"static","url":"f1352393585280/dd79283d0c018b90ddaddd64e4f6e528.svg","targetSrc":"generated/ef774542eca2f2136562f18561e024b9_0a84ff.svg","color":"0a84ff"}
                        ,actions: []
                    },
                    {
                        icon: {"fileId":"031673aaf750846323dbce519ac7ae57.svg","name":"folder-open.svg","assetType":"icon","bucketsource":"static","url":"f1352392599447/509bc66ab2b78cb8be33f5d5a09565f2.svg","targetSrc":"generated/031673aaf750846323dbce519ac7ae57_0a84ff.svg","color":"0a84ff"}
                        ,actions: []
                    },
                    {
                        icon: {"fileId":"465e32d9ef45ce932507e2d8510aad65.svg","name":"kub-trash.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/e61a10b75e24969c112f42511678b129.svg","targetSrc":"generated/465e32d9ef45ce932507e2d8510aad65_0a84ff.svg","color":"0a84ff"}
                        ,actions: []
                    },
                    {
                        icon: {"fileId":"4e597fba679249aba28c9cbd14537157.svg","name":"tl-undo.svg","assetType":"icon","bucketsource":"static","url":"f1352389411295/2b44a2094b283cf56e0b407d4fe110d1.svg","targetSrc":"generated/4e597fba679249aba28c9cbd14537157_0a84ff.svg","color":"0a84ff"}
                        ,actions: []
                    },
                    {
                        icon: {"fileId":"4541ee15e29d3c0c5df5326fc45d385d.svg","name":"tl-pencil.svg","assetType":"icon","bucketsource":"static","url":"f1352449133232/64193ce12d7f3b0eecf327262aec508f.svg","targetSrc":"generated/4541ee15e29d3c0c5df5326fc45d385d_0a84ff.svg","color":"0a84ff"}
                        ,actions: []
                    },
                ]
            },
            blankItem: {
                icon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_0a84ff.svg","color":"0a84ff"},
                actions: []
            },
        },
    }
};

//TYPE: TITLEBAR
prx.components.ios11_titlebar = {
    name: 'ios11_titlebar'
    ,type: 'ios11_titlebar'
    ,lib: _library
    ,caption: 'Titlebar'
    ,icon: '-100px -1000px'
    ,helper: prx.url.devices + '/ios9/light/titlebar/helper.png'
    ,width: 250*prx.componentsHelper.getScale(_library)
    ,height: 41*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '#FFF'
    ,title: 'Title'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '500'
    ,textSize: 34*prx.componentsHelper.getScale(_library)
    ,textColor: '#000000'
    ,textProperties: []
    ,themes: {
        ios_light : {
            allcomponents: {
                helper: prx.url.devices+'/ios9/light/titlebar/helper.png',
                icon: '-100px -1000px',
            },
            components: {
                helper: prx.url.devices + '/ios9/light/titlebar/helper.png',
                icon: '-100px -1000px',
                textColor: '#000000',
            },
        },
        ios_dark: {
            allcomponents: {
                helper: prx.url.devices+'/ios9/dark/titlebar/helper.png',
                icon: '-400px -1400px',
            },
            components: {
                helper: prx.url.devices + '/ios9/dark/titlebar/helper.png',
                icon: '-400px -1400px',
                textColor: '#FFFFFF',
            },
        },
    }
};

//TYPE: STATUSBAR
prx.components.ios7_statusbar = {
    name: 'ios7_statusbar'
    ,type: 'ios7_statusbar'
    ,lib: _library
    ,caption: 'Statusbar'
    ,icon: '-200px -100px'
    ,helper: prx.url.devices + '/ios9/light/statusbar/helper.png'
    ,width: "full"
    ,height: 20*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rga(0,0,0,0)'
    ,foregroundColor: '#000000'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '300'
    ,overlay: false
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-200px -100px',
                helper: prx.url.devices + '/ios9/light/statusbar/helper.png',
            },
            components: {
                icon: '-200px -100px',
                helper: prx.url.devices + '/ios9/light/statusbar/helper.png',
                backgroundColor: 'rga(0,0,0,0)',
                foregroundColor: '#000000',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1800px -1100px',
                helper: prx.url.devices + '/ios9/dark/statusbar/helper.png',
            },
            components: {
                icon: '-1800px -1100px',
                helper: prx.url.devices + '/ios9/dark/statusbar/helper.png',
                backgroundColor: 'rga(255,255,255,0)',
                foregroundColor: '#ffffff',
            },
        },
    }
};

prx.components.ios11_statusbar = {
    name: 'ios11_statusbar'
    ,type: 'ios11_statusbar'
    ,lib: _library
    ,caption: 'iPhone X Statusbar'
    ,icon: '0 -1000px'
    ,helper: prx.url.devices + '/ios9/light/ios11_statusbar/helper.png'
    ,width: "full"
    ,height: 43*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rga(0,0,0,0)'
    ,foregroundColor: '#000000'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '300'
    ,overlay: false
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '0 -1000px',
                helper: prx.url.devices + '/ios9/light/ios11_statusbar/helper.png',
            },
            components: {
                icon: '0 -1000px',
                helper: prx.url.devices + '/ios9/light/ios11_statusbar/helper.png',
                backgroundColor: 'rga(0,0,0,0)',
                foregroundColor: '#000000',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-300px -1400px',
                helper: prx.url.devices + '/ios9/dark/ios11_statusbar/helper.png',
            },
            components: {
                icon: '-300px -1400px',
                helper: prx.url.devices + '/ios9/dark/ios11_statusbar/helper.png',
                backgroundColor: 'rga(255,255,255,0)',
                foregroundColor: '#ffffff',
            },
        },
    }
};



/****** BUTTONS ******/

//TYPE: TEXT BUTTON
prx.components.ios7_button_text = {
    name: 'ios7_button_text'
    ,type: 'ios7_button_text'
    ,lib: _library
    ,caption: 'Text Button'
    ,icon: '-300px -100px'
    ,helper: prx.url.devices + '/ios9/light/button_text/helper.png'
    ,width: 100*prx.componentsHelper.getScale(_library)
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,text: 'Label'
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '400'
    ,textSize: 18*prx.componentsHelper.getScale(_library)
    ,textColor: '#007aff'
    ,textProperties: []
    ,textAlign: 'center'
    ,iconpos: 'none'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-300px -100px',
                helper: prx.url.devices + '/ios9/light/button_text/helper.png',
            },
            components: {
                icon: '-300px -100px',
                helper: prx.url.devices + '/ios9/light/button_text/helper.png',
                textColor: '#007aff',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1900px -1100px',
                helper: prx.url.devices + '/ios9/dark/button_text/helper.png',
            },
            components: {
                icon: '-1900px -1100px',
                helper: prx.url.devices + '/ios9/dark/button_text/helper.png',
                textColor: '#0a84ff',
            },
        },
    }
};

//TYPE: COMBO BUTTON
prx.components.ios7_button = {
    name: 'ios7_button'
    ,type: 'ios7_button'
    ,lib: _library
    ,caption: 'Combo Button'
    ,icon: '-400px -100px'
    ,helper: prx.url.devices + '/ios9/light/button/helper.png'
    ,width: 100*prx.componentsHelper.getScale(_library)
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,text: 'Label'
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '400'
    ,textSize: 18*prx.componentsHelper.getScale(_library)
    ,textColor: '#007aff'
    ,textProperties: []
    ,textAlign: 'center'
    ,iconpos: 'left'
    ,img: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","targetSrc":"generated/b0a2a6e58cba73da2d0b8dc3e0ac8fe8_007aff.svg","color":"007aff"}
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-400px -100px',
                helper: prx.url.devices + '/ios9/light/button/helper.png',
            },
            components: {
                icon: '-400px -100px',
                helper: prx.url.devices + '/ios9/light/button/helper.png',
                textColor: '#007aff',
                img: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","targetSrc":"generated/b0a2a6e58cba73da2d0b8dc3e0ac8fe8_007aff.svg","color":"007aff"},
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '0px -1200px',
                helper: prx.url.devices + '/ios9/dark/button/helper.png',
            },
            components: {
                icon: '0px -1200px',
                helper: prx.url.devices + '/ios9/dark/button/helper.png',
                textColor: '#0a84ff',
                img: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","targetSrc":"generated/c0877fc419aa836a4097f4f982a53a59_0a84ff.svg","color":"0a84ff"},
            },
        },
    }
};

//TYPE: BUTTON WITH BACKGROUND
prx.components.ios7_button_bg = {
    name: 'ios7_button_bg'
    ,type: 'ios7_button_bg'
    ,lib: _library
    ,caption: 'Button with Background'
    ,icon: '-500px -100px'
    ,helper: prx.url.devices + '/ios9/light/button_bg/helper.png'
    ,width: 200*prx.componentsHelper.getScale(_library)
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '#007aff'
    ,borderWidth: 0
    ,borderColor: '#FFFFFF'
    ,borderRadius: 8*prx.componentsHelper.getScale(_library)
    ,text: 'Label'
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '400'
    ,textSize: 18*prx.componentsHelper.getScale(_library)
    ,textColor: '#FFFFFF'
    ,textProperties: []
    ,textAlign: 'center'
    ,iconpos: 'none'
    ,img: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","targetSrc":"generated/b0a2a6e58cba73da2d0b8dc3e0ac8fe8_ffffff.svg","color":"ffffff"}
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-500px -100px',
                helper: prx.url.devices + '/ios9/light/button_bg/helper.png',
            },
            components: {
                icon: '-500px -100px',
                helper: prx.url.devices + '/ios9/light/button_bg/helper.png',
                backgroundColor: '#007aff',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-100px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_bg/helper.png',
            },
            components: {
                icon: '-100px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_bg/helper.png',
                backgroundColor: '#0a84ff',
            },
        },
    }
};

//TYPE: ICON BUTTON
prx.components.ios7_button_icon = {
    name: 'ios7_button_icon'
    ,type: 'ios7_button_icon'
    ,lib: _library
    ,caption: 'Icon Button'
    ,icon: '-600px -100px'
    ,helper: prx.url.devices + '/ios9/light/button_icon/helper.png'
    ,width: 44*prx.componentsHelper.getScale(_library)
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textAlign: 'center'
    ,iconpos: 'notext'
    ,img: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","targetSrc":"generated/b0a2a6e58cba73da2d0b8dc3e0ac8fe8_007aff.svg","color":"007aff"}
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-600px -100px',
                helper: prx.url.devices + '/ios9/light/button_icon/helper.png',
            },
            components: {
                icon: '-600px -100px',
                helper: prx.url.devices + '/ios9/light/button_icon/helper.png',
                img: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","targetSrc":"generated/b0a2a6e58cba73da2d0b8dc3e0ac8fe8_007aff.svg","color":"007aff"},
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-200px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_icon/helper.png',
            },
            components: {
                icon: '-200px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_icon/helper.png',
                img: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","targetSrc":"generated/c0877fc419aa836a4097f4f982a53a59_0a84ff.svg","color":"0a84ff"},
            },
        },
    }
};

//TYPE: ICON BUTTON CIRCULAR
prx.components.ios7_button_icon_circular = {
    name: 'ios7_button_icon_circular'
    ,type: 'ios7_button_icon_circular'
    ,lib: _library
    ,caption: 'Icon Button Circular'
    ,icon: '-700px -100px'
    ,helper: prx.url.devices + '/ios9/light/button_icon_circular/helper.png'
    ,width: 44*prx.componentsHelper.getScale(_library)
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(0,0,0,0)'
    ,borderWidth: 2*prx.componentsHelper.getScale(_library)
    ,borderColor: '#000000'
    ,borderRadius: '50%'
    ,textAlign: 'center'
    ,iconpos: 'notext'
    ,img: {"fileId":"ce8e4cb4b87ca1ae337f04fffd878cde.svg","name":"lock-close.svg","assetType":"icon","bucketsource":"static","url":"f1352393041300/a0de48396fb6d6a99bc13cb51fbddf36.svg"}
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-700px -100px',
                helper: prx.url.devices + '/ios9/light/button_icon_circular/helper.png'
            },
            components: {
                icon: '-700px -100px',
                helper: prx.url.devices + '/ios9/light/button_icon_circular/helper.png',
                img: {"fileId":"ce8e4cb4b87ca1ae337f04fffd878cde.svg","name":"lock-close.svg","assetType":"icon","bucketsource":"static","url":"f1352393041300/a0de48396fb6d6a99bc13cb51fbddf36.svg"},
                borderColor: '#000000'
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-300px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_icon_circular/helper.png'
            },
            components: {
                icon: '-300px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_icon_circular/helper.png',
                img: {"fileId":"ce8e4cb4b87ca1ae337f04fffd878cde.svg","name":"lock-close.svg","assetType":"icon","bucketsource":"static","url":"f1352393041300/a0de48396fb6d6a99bc13cb51fbddf36.svg","targetSrc":"generated/ce8e4cb4b87ca1ae337f04fffd878cde_ffffff.svg","color":"ffffff"},
                borderColor: '#ffffff'
            },
        },
    }
};

//TYPE: ICON BUTTON SQUARE
prx.components.ios7_button_icon_square = {
    name: 'ios7_button_icon_square'
    ,type: 'ios7_button_icon_square'
    ,lib: _library
    ,caption: 'Icon Button Square'
    ,icon: '-800px -100px'
    ,helper: prx.url.devices + '/ios9/light/button_icon_square/helper.png'
    ,width: 44*prx.componentsHelper.getScale(_library)
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(0,0,0,0)'
    ,borderWidth: 2*prx.componentsHelper.getScale(_library)
    ,borderColor: '#000000'
    ,borderRadius: 7.5*prx.componentsHelper.getScale(_library)
    ,textAlign: 'center'
    ,iconpos: 'notext'
    ,img: {"fileId":"061330b5e4e68e5a8108e06f0da84821.svg","name":"camera.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/2180c33c348538f1cfb9e6f56b65f4a5.svg"}
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-800px -100px',
                helper: prx.url.devices + '/ios9/light/button_icon_square/helper.png'
            },
            components: {
                icon: '-800px -100px',
                helper: prx.url.devices + '/ios9/light/button_icon_square/helper.png',
                img: {"fileId":"061330b5e4e68e5a8108e06f0da84821.svg","name":"camera.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/2180c33c348538f1cfb9e6f56b65f4a5.svg"},
                borderColor: '#000000'
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-400px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_icon_square/helper.png'
            },
            components: {
                icon: '-400px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_icon_square/helper.png',
                img: {"fileId":"061330b5e4e68e5a8108e06f0da84821.svg","name":"camera.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/2180c33c348538f1cfb9e6f56b65f4a5.svg","targetSrc":"generated/061330b5e4e68e5a8108e06f0da84821_ffffff.svg","color":"ffffff"},
                borderColor: '#ffffff'
            },
        },
    }
};

//TYPE: UI BUTTON
prx.components.ios7_button_ui = {
    name: 'ios7_button_ui'
    ,type: 'ios7_button_ui'
    ,lib: _library
    ,caption: 'UI Button'
    ,icon: '-900px -100px'
    ,helper: prx.url.devices + '/ios9/light/button_ui/helper.png'
    ,width: 22*prx.componentsHelper.getScale(_library)
    ,height: 22*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(52,199,89,1)'
    ,borderRadius: '50%'
    ,textAlign: 'center'
    ,iconpos: 'notext'
    ,img: {"fileId":"24ba15d6600898b19f36e32c16c2728d.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/558b9ee9b4a9123e4df38f815f297650_ffffff.svg","color":"ffffff"}
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-900px -100px',
                helper: prx.url.devices + '/ios9/light/button_ui/helper.png'
            },
            components: {
                icon: '-900px -100px',
                helper: prx.url.devices + '/ios9/light/button_ui/helper.png',
                backgroundColor: 'rgba(52,199,89,1)',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-500px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_ui/helper.png'
            },
            components: {
                icon: '-500px -1200px',
                helper: prx.url.devices + '/ios9/dark/button_ui/helper.png',
                backgroundColor: 'rgba(48,209,88,1)',
            },
        },
    }
};

//TYPE: SEGMENTED CONTROL
prx.components.ios7_segmentedcontrol = {
    name: 'ios7_segmentedcontrol',
    type: 'ios7_segmentedcontrol',
    lib: _library,
    caption: 'Segmented Control',
    icon: '-1000px -100px',
    helper: prx.url.devices + '/ios9/light/segmentedcontrol/helper.png',
    width: 225*prx.componentsHelper.getScale(_library),
    height: 30*prx.componentsHelper.getScale(_library),
    resizable : true,
    backgroundColor: 'rgba(118,118,128,0.24)',
    activeBackgroundColor: '#ffffff',
    borderWidth: 1*prx.componentsHelper.getScale(_library),
    borderColor: 'rgba(142,142,147,0.3)',
    borderRadius: 6*prx.componentsHelper.getScale(_library),
    textFont: 'San Francisco UI Text',
    textFontStyle: '400',
    textSize: 13*prx.componentsHelper.getScale(_library),
    textColor: '#000000',
    textProperties: [],
    activeTextColor: '#000000',
    selected: 0,
    buttons: [
        {
            actions: [],
            text: 'Label 1'
        },
        {
            actions: [],
            text: 'Label 2'
        }
    ],
    dynamicSizeExpand: 'h',
    ios13: true,
    themes: {
        ios_light : {
            allcomponents: {
                icon: '-1000px -100px',
                helper: prx.url.devices + '/ios9/light/segmentedcontrol/helper.png'
            },
            components: {
                icon: '-1000px -100px',
                helper: prx.url.devices + '/ios9/light/segmentedcontrol/helper.png',
                activeBackgroundColor: '#ffffff',
                textColor: '#000000',
                activeTextColor: '#000000',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-600px -1200px',
                helper: prx.url.devices + '/ios9/dark/segmentedcontrol/helper.png'
            },
            components: {
                icon: '-600px -1200px',
                helper: prx.url.devices + '/ios9/dark/segmentedcontrol/helper.png',
                activeBackgroundColor: '#636366',
                textColor: '#ffffff',
                activeTextColor: '#ffffff',
            },
        },
    }
};

//TYPE: PAGE CONTROLLER
prx.components.ios7_pagecontroller = {
    name: 'ios7_pagecontroller'
    ,type: 'ios7_pagecontroller'
    ,lib: _library
    ,caption: 'Page Controller'
    ,icon: '-1100px -100px'
    ,helper: prx.url.devices + '/ios9/light/pagecontroller/helper.png'
    ,width: 75*prx.componentsHelper.getScale(_library)
    ,height: 8*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '#007aff'
    ,activeBackgroundColor: '#aeaeb2'
    ,borderRadius: '50%'
    ,selected: 999
    ,buttons: [{
        actions: []
    },{
        actions: []
    },{
        actions: []
    }]
    ,themes: {
        ios_light: {
            allcomponents: {
                icon: '-1100px -100px',
                helper: prx.url.devices + '/ios9/light/pagecontroller/helper.png'
            },
            components: {
                icon: '-1100px -100px',
                helper: prx.url.devices + '/ios9/light/pagecontroller/helper.png',
                backgroundColor: '#aeaeb2',
                activeBackgroundColor: '#000000'
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-700px -1200px',
                helper: prx.url.devices + '/ios9/dark/pagecontroller/helper.png'
            },
            components: {
                icon: '-700px -1200px',
                helper: prx.url.devices + '/ios9/dark/pagecontroller/helper.png',
                backgroundColor: '#48484a',
                activeBackgroundColor: '#ffffff'
            }
        }
    }
};



/****** FORMS ******/

//TYPE: LABEL
prx.components.ios7_label = {
    name: 'ios7_label'
    ,type: 'ios7_label'
    ,lib: _library
    ,caption: 'Label'
    ,icon: '-1200px -100px'
    ,helper: prx.url.devices+_path + 'label/helper.png'
    ,width: 250*prx.componentsHelper.getScale(_library)
    ,height: 44*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '400'
    ,textSize: 13*prx.componentsHelper.getScale(_library)
    ,textColor: '#999999'
    ,textProperties: []
    ,textAlign: 'center'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1200px -100px',
            },
            components: {
                icon: '-1200px -100px',
                textColor: '#999999',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1400px -1100px',
            },
            components: {
                icon: '-1400px -1100px',
                textColor: 'rgba(235,235,245,0.6)',
            },
        },
    }
};

//TYPE: TEXT FIELD
prx.components.ios7_textfield = {
    name: 'ios7_textfield'
    ,type: 'ios7_textfield'
    ,lib: _library
    ,caption: 'Text Field'
    ,icon: '-1300px -100px'
    ,helper: prx.url.devices+_path + 'textfield/helper.png'
    ,width: 270*prx.componentsHelper.getScale(_library)
    ,height: 42*prx.componentsHelper.getScale(_library)
    ,value: ''
    ,placeholder: 'Placeholder'
    ,inputtype: 'text'
    ,backgroundColor: 'rgba(0,0,0,0)'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '400'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,placeholderColor: '999999'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,borderStyle: 'solid'
	,borderRadius: 3*prx.componentsHelper.getScale(_library)
    ,borderColor: 'cccccc'
    ,textAlign: 'left'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1300px -100px',
            },
            components: {
                icon: '-1300px -100px',
                backgroundColor: 'rgba(0,0,0,0)',
                textColor:  '#000000',
                placeholderColor: '#999999',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-900px -1200px',
            },
            components: {
                icon: '-900px -1200px',
                backgroundColor: 'rgba(255,255,255,0)',
                textColor:  '#ffffff',
                placeholderColor: 'rgba(235,235,245,0.6)',
            },
        },
    }
}

//TYPE: PASSWORD FIELD
prx.components.ios7_passwordfield = {
    name: 'ios7_passwordfield'
    ,type: 'ios7_textfield'
    ,lib: _library
    ,caption: 'Password Field'
    ,icon: '-1400px -100px'
    ,helper: prx.url.devices+_path + 'textfield/helper.png'
    ,width: 270*prx.componentsHelper.getScale(_library)
    ,height: 42*prx.componentsHelper.getScale(_library)
    ,value: ''
    ,placeholder: 'Placeholder'
    ,inputtype: 'password'
    ,backgroundColor: 'rgba(0,0,0,0)'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '400'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textColor: '000000'
    ,placeholderColor: '999999'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,borderStyle: 'solid'
	,borderRadius: 3*prx.componentsHelper.getScale(_library)
    ,borderColor: 'cccccc'
    ,textAlign: 'left'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1300px -100px',
            },
            components: {
                icon: '-1300px -100px',
                    backgroundColor: 'rgba(0,0,0,0)',
                    textColor:  '#000000',
                    placeholderColor: '#999999',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1000px -1200px',
            },
            components: {
                icon: '-1000px -1200px',
                    backgroundColor: 'rgba(255,255,255,0)',
                    textColor:  '#ffffff',
                    placeholderColor: 'rgba(235,235,245,0.6)',
            },
        },
    }
}

//TYPE: TEXTAREA
prx.components.ios7_textarea = {
    name: 'ios7_textarea'
    ,type: 'ios7_textarea'
    ,lib: _library
    ,caption: 'Textarea'
    ,icon: '-1500px -100px'
    ,helper: prx.url.devices+_path + 'textarea/helper.png'
    ,width: 270*prx.componentsHelper.getScale(_library)
    ,height: 84*prx.componentsHelper.getScale(_library)
    ,value: ''
    ,placeholder: 'Placeholder'
    ,backgroundColor: 'rgba(0,0,0,0)'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '300'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textColor: '000000'
    ,placeholderColor: '999999'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,borderStyle: 'solid'
	,borderRadius: 3*prx.componentsHelper.getScale(_library)
    ,borderColor: 'cccccc'
    ,textAlign: 'left'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1500px -100px',
            },
            components: {
                icon: '-1500px -100px',
                backgroundColor: 'rgba(0,0,0,0)',
                textColor:  '#000000',
                placeholderColor: '#999999',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1100px -1200px',
            },
            components: {
                icon: '-1100px -1200px',
                backgroundColor: 'rgba(255,255,255,0)',
                textColor:  '#ffffff',
                placeholderColor: 'rgba(235,235,245,0.6)',
            },
        },
    }
}

//TYPE: CHECKBOX
prx.components.ios7_checkbox = {
	name: 'ios7_checkbox'
	,type: 'ios7_checkbox'
	,lib: _library
	,caption: 'Checkbox'
	,icon: '-1600px -100px'
	,helper: prx.url.devices+_path + 'checkbox/helper.png'
	,width: 22*prx.componentsHelper.getScale(_library)
	,height: 22*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'rgba(0,0,0,0)'
	,activeBackgroundColor: '#007aff'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: '#999999'
	,borderRadius: '50%'
	,img: {"fileId":"498e767b8d1969245862682798acb78f.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_ffffff.svg","color":"ffffff"}
	,active: true
	,radioButtonsGroupName: ''
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1600px -100px',
            },
            components: {
                icon: '-1600px -100px',
                activeBackgroundColor: '#007aff',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1200px -1200px',
            },
            components: {
                icon: '-1200px -1200px',
                activeBackgroundColor: '#0a84ff',
            },
        },
    }
};

//TYPE: IOS9 ON/OFF SWITCH
prx.components.ios7_switch = {
	name: 'ios7_switch'
	,type: 'ios7_switch'
	,lib: _library
	,caption: 'iOS 9 On/Off Switch'
	,icon: '-1800px -100px'
	,helper: prx.url.devices+_path + 'switch/helper.png'
	,width: 50*prx.componentsHelper.getScale(_library)
	,height: 30*prx.componentsHelper.getScale(_library)
	,inactiveLabelColor: '#FFFFFF'
	,activeLabelColor: '#49E845'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,inactiveBorderColor: '#CCCCCC'
	,activeBorderColor: '#49E845'
	,switchColor: 'FFFFFF'
	,radioButtonsGroupName: ''
};

//TYPE: ON/OFF SWITCH
prx.components.ios10_switch = {
    name: 'ios10_switch'
    ,type: 'ios7_switch'
    ,lib: _library
    ,caption: 'On/Off Switch'
    ,icon: '-1800px -100px'
    ,helper: prx.url.devices+_path + 'ios10-switch/helper.png'
    ,width: 50*prx.componentsHelper.getScale(_library)
    ,height: 30*prx.componentsHelper.getScale(_library)
    ,inactiveLabelColor: 'rgba(120,120,128,0.16)'
    ,activeLabelColor: '#34c759'
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,inactiveBorderColor: 'rgba(120,120,128,0.16)'
    ,activeBorderColor: '#34c759'
    ,switchColor: '#ffffff'
    ,radioButtonsGroupName: ''
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1700px -100px',
                helper: prx.url.devices + '/ios9/light/ios10-switch/helper.png',
            },
            components: {
                icon: '-1700px -100px',
                helper: prx.url.devices + '/ios9/light/ios10-switch/helper.png',
                inactiveLabelColor: 'rgba(120,120,128,0.16)',
                activeLabelColor: '#34c759',
                inactiveBorderColor: 'rgba(120,120,128,0.16)',
                activeBorderColor: '#34c759',
                switchColor: '#ffffff',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1400px -1200px',
                helper: prx.url.devices + '/ios9/dark/ios10-switch/helper.png',
            },
            components: {
                icon: '-1400px -1200px',
                helper: prx.url.devices + '/ios9/dark/ios10-switch/helper.png',
                inactiveLabelColor: 'rgba(120,120,128,0.32)',
                activeLabelColor: '#30d158',
                inactiveBorderColor: 'rgba(120,120,128,0.32)',
                activeBorderColor: '#30d158',
                switchColor: '#ffffff',
            },
        },
    }
};

//TYPE: SLIDER
prx.components.ios7_slider = {
    name: 'ios7_slider'
    ,type: 'ios7_slider'
    ,lib: _library
    ,caption: 'Slider'
    ,icon: '-1900px -100px'
    ,helper: prx.url.devices+_path + 'slider/helper.png'
    ,width: 150*prx.componentsHelper.getScale(_library)
    ,height: 15*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,barThickness: 2*prx.componentsHelper.getScale(_library)
    ,barColor: '#999999'
    ,fillBarColor: '#007aff'
    ,sliderColor: '#ffffff'
    ,borderColor: '#ffffff'
    ,sliderBorderWidth: 0
    ,sliderBorderRadius: '50%'
    ,sliderPosition: 50
    ,properties: "v,l,o,hpos,vpos,w,h,dr,f,ds"
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1900px -100px',
                helper: prx.url.devices + '/ios9/light/slider/helper.png',
            },
            components: {
                icon: '-1900px -100px',
                helper: prx.url.devices + '/ios9/light/slider/helper.png',
                barColor: '#999999',
                fillBarColor: '#007aff',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1500px -1200px',
                helper: prx.url.devices + '/ios9/dark/slider/helper.png',
            },
            components: {
                icon: '-1500px -1200px',
                helper: prx.url.devices + '/ios9/dark/slider/helper.png',
                barColor: '#d8d8d8',
                fillBarColor: '#0a84ff',
            },
        },
    }
};

//TYPE: PICKER
prx.components.ios7_picker = {
    name: 'ios7_picker'
    ,type: 'ios7_picker'
    ,lib: _library
    ,caption: 'Picker'
    ,icon: '0 -200px'
    ,helper: prx.url.devices+_path + 'picker/helper.png'
    ,width: "full"
    ,height: 150*prx.componentsHelper.getScale(_library)
    ,vpos: "bottom"
    ,resizable : true
    ,backgroundColor: '#ffffff'
    ,textColor: '#CCCCCC'
    ,activeTextColor: '#333333'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '400'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textProperties: []
    ,textAlign: 'center'
    ,values: "Label 1<br />Label 2<br />Label 3<br />Label 4<br />Label 5"
    ,selectedValue: 0
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '0 -200px',
                helper: prx.url.devices +'/ios9/light/picker/helper.png',
            },
            components: {
                icon: '0 -200px',
                helper: prx.url.devices + '/ios9/light/picker/helper.png',
                backgroundColor: '#ffffff',
                textColor: '#CCCCCC',
                activeTextColor: '#333333',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1600px -1200px',
                helper: prx.url.devices + '/ios9/dark/picker/helper.png',
            },
            components: {
                icon: '-1600px -1200px',
                helper: prx.url.devices + '/ios9/dark/picker/helper.png',
                backgroundColor: '#1c1c1e',
                textColor: 'rgba(235,235,245,0.6)',
                activeTextColor: '#ffffff',
            },
        },
    }
};

//TYPE: SEARCH BAR
prx.components.ios8_searchbar = {
    name: 'ios8_searchbar'
    ,type: 'ios8_searchbar'
    ,lib: _library
    ,caption: 'Search Bar'
    ,icon: '-100px -200px'
    ,helper: prx.url.devices+_path + 'searchbar/helper.png'
    ,width: 343*prx.componentsHelper.getScale(_library)
    ,height: 36*prx.componentsHelper.getScale(_library)
    ,value: ''
    ,placeholder: 'Search'
    ,backgroundColor: '#ffffff'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '300'
    ,textProperties: []
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textColor:  '#000000'
    ,placeholderColor: '#999999'
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderRadius: 10*prx.componentsHelper.getScale(_library)
    ,borderColor: 'cccccc'
    ,imgSrc: {"fileId":"92e25d8093bef9eb0ec44968eff32c0f.svg","name":"search.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/14870b88002e540a4d1fc9c2d2a88384.svg","targetSrc":"generated/92e25d8093bef9eb0ec44968eff32c0f_999999.svg","color":"999999"}
    ,imgSrc2: {"fileId":"e648f99b268782f39ea1442529369aa3.svg","name":"cr-delete.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/61a2922cfa9b623512ce97a21983a037.svg","targetSrc":"generated/61a2922cfa9b623512ce97a21983a037_999999.svg","color":"999999"}
    ,ios13: true
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-100px -200px',
                helper: prx.url.devices +'/ios9/light/searchbar/helper.png',
            },
            components: {
                icon: '-100px -200px',
                helper: prx.url.devices + '/ios9/light/searchbar/helper.png',
                backgroundColor: '#ffffff',
                textColor:  '#000000',
                placeholderColor: '#999999',
                borderWidth: 0*prx.componentsHelper.getScale(_library),
                imgSrc: {"fileId":"92e25d8093bef9eb0ec44968eff32c0f.svg","name":"search.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/14870b88002e540a4d1fc9c2d2a88384.svg","targetSrc":"generated/92e25d8093bef9eb0ec44968eff32c0f_999999.svg","color":"999999"},
                imgSrc2: {"fileId":"e648f99b268782f39ea1442529369aa3.svg","name":"cr-delete.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/61a2922cfa9b623512ce97a21983a037.svg","targetSrc":"generated/61a2922cfa9b623512ce97a21983a037_999999.svg","color":"999999"},
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1700px -1200px',
                helper: prx.url.devices + '/ios9/dark/searchbar/helper.png',
            },
            components: {
                icon: '-1700px -1200px',
                helper: prx.url.devices + '/ios9/dark/searchbar/helper.png',
                backgroundColor: 'rgba(118,118,128,0.12)',
                textColor:  '#ffffff',
                placeholderColor: 'rgba(60,60,67,0.6)',
                borderWidth: 0*prx.componentsHelper.getScale(_library),
                imgSrc: {"fileId":"92e25d8093bef9eb0ec44968eff32c0f.svg","name":"search.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/14870b88002e540a4d1fc9c2d2a88384.svg","targetSrc":"generated/92e25d8093bef9eb0ec44968eff32c0f_6b6b6e.svg","color":"6b6b6e"},
                imgSrc2: {"fileId":"e648f99b268782f39ea1442529369aa3.svg","name":"cr-delete.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/61a2922cfa9b623512ce97a21983a037.svg","targetSrc":"generated/e648f99b268782f39ea1442529369aa3_6b6b6e.svg","color":"6b6b6e"},
            },
        },
    }
};



/****** LISTS ******/

//TYPE: BASIC LIST
prx.components.ios7_listbasic = {
    name: 'ios7_listbasic'
    ,type: 'ios7_listbasic'
    ,lib: _library
    ,caption: 'Basic List'
    ,icon: '-200px -200px'
    ,helper: prx.url.devices + '/ios9/light/listbasic/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subColor: '999999'
    ,subProperties: []
    ,subFontStyle: '300'
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeSubColor: '999999'
    ,iconpos: ''
    ,iconSize: 2
    ,listitems: [
       {
           itemtype: 'basic'
           ,text: 'Label 1'
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''
       },
       {
           itemtype: 'basic'
           ,text: 'Label 2'
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''
       }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-200px -200px',
                helper: prx.url.devices + '/ios9/light/listbasic/helper.png',
            },
            components: {
                icon: '-200px -200px',
                helper: prx.url.devices + '/ios9/light/listbasic/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1800px -1200px',
                helper: prx.url.devices + '/ios9/dark/listbasic/helper.png',
            },
            components: {
                icon: '-1800px -1200px',
                helper: prx.url.devices + '/ios9/dark/listbasic/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
            },
        },
    }
};

//TYPE: NESTED LIST
prx.components.ios7_listnested = {
    name: 'ios7_listnested'
    ,type: 'ios7_listnested'
    ,lib: _library
    ,caption: 'Nested List'
    ,icon: '-300px -200px'
    ,helper: prx.url.devices + '/ios9/light/listnested/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeSubColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 1
    ,listitems: [
       {
           itemtype: 'nested'
           ,text: 'Label 1'
           ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''
       },
       {
           itemtype: 'nested'
           ,text: 'Label 2'
           ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''
       }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-300px -200px',
                helper: prx.url.devices + '/ios9/light/listnested/helper.png',
            },
            components: {
                icon: '-300px -200px',
                helper: prx.url.devices + '/ios9/light/listnested/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
                listitems: [
                    {
                        itemtype: 'nested'
                        ,text: 'Label 1'
                        ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
                        ,actions: []
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,subtitle: ''
                    },
                    {
                        itemtype: 'nested'
                        ,text: 'Label 2'
                        ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
                        ,actions: []
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,subtitle: ''
                    }
                ]
            },
            blankItem: {
                itemtype: 'nested'
                ,text: 'Label'
                ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
                ,actions: []
                ,hasThumbnail: false
                ,thumbnail: {"fileId":"","name":"","assetType":""}
                ,subtitle: ''
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-1900px -1200px',
                helper: prx.url.devices + '/ios9/dark/listnested/helper.png',
            },
            components: {
                icon: '-1900px -1200px',
                helper: prx.url.devices + '/ios9/dark/listnested/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
                listitems: [
                    {
                        itemtype: 'nested'
                        ,text: 'Label 1'
                        ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/b821d85ca40ce5ec744f7c97418d2b93_5a5a5e.svg","color":"5a5a5e"}
                        ,actions: []
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,subtitle: ''
                    },
                    {
                        itemtype: 'nested'
                        ,text: 'Label 2'
                        ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/b821d85ca40ce5ec744f7c97418d2b93_5a5a5e.svg","color":"5a5a5e"}
                        ,actions: []
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,subtitle: ''
                    }
                ],
            },
            blankItem: {
                itemtype: 'nested'
                ,text: 'Label'
                ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/b821d85ca40ce5ec744f7c97418d2b93_5a5a5e.svg","color":"5a5a5e"}
                ,actions: []
                ,hasThumbnail: false
                ,thumbnail: {"fileId":"","name":"","assetType":""}
                ,subtitle: ''
            }
        },
    }
};

//TYPE: LIST WITH ICON
prx.components.ios7_listwithicon = {
    name: 'ios7_listwithicon'
    ,type: 'ios7_listwithicon'
    ,lib: _library
    ,caption: 'List with Icon'
    ,icon: '-400px -200px'
    ,helper: prx.url.devices + '/ios9/light/listbasic/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeSubColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 2
    ,listitems: [
       {
           itemtype: 'withIcon'
           ,text: 'Label 1'
           ,buttonicon: {"fileId":"","name":"","assetType":"icon","url":""}
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''

       },
       {
           itemtype: 'withIcon'
           ,text: 'Label 2'
           ,buttonicon: {"fileId":"","name":"","assetType":"icon","url":""}
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''
       }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-400px -200px',
                helper: prx.url.devices + '/ios9/light/listbasic/helper.png',
            },
            components: {
                icon: '-400px -200px',
                helper: prx.url.devices + '/ios9/light/listbasic/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '0px -1300px',
                helper: prx.url.devices + '/ios9/dark/listbasic/helper.png',
            },
            components: {
                icon: '0px -1300px',
                helper: prx.url.devices + '/ios9/dark/listbasic/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
            },
        },
    }
};

//TYPE: LIST WITH VALUE
prx.components.ios7_listwithvalue = {
    name: 'ios7_listwithvalue'
    ,type: 'ios7_listwithvalue'
    ,lib: _library
    ,caption: 'List with Value'
    ,icon: '-500px -200px'
    ,helper: prx.url.devices + '/ios9/light/listwithvalue/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,valueSize: 17*prx.componentsHelper.getScale(_library)
    ,valueFont: 'San Francisco UI Text'
    ,valueFontStyle: '400'
    ,valueColor: '999999'
    ,valueProperties: []
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeValueColor: '999999'
    ,activeSubColor: '999999'
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'withValue'
            ,value: 'Insert value'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,actions: []
            ,subtitle: ''
        },
        {
            text: 'Label 2'
            ,itemtype: 'withValue'
            ,value: 'Insert value'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,actions: []
            ,subtitle: ''
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-500px -200px',
                helper: prx.url.devices + '/ios9/light/listwithvalue/helper.png',
            },
            components: {
                icon: '-500px -200px',
                helper: prx.url.devices + '/ios9/light/listwithvalue/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-100px -1300px',
                helper: prx.url.devices + '/ios9/dark/listwithvalue/helper.png',
            },
            components: {
                icon: '-100px -1300px',
                helper: prx.url.devices + '/ios9/dark/listwithvalue/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
            },
        },
    }
};

//TYPE: NESTEC LIST WITH VALUE
prx.components.ios7_listnestedwithvalue = {
    name: 'ios7_listnestedwithvalue'
    ,type: 'ios7_listnestedwithvalue'
    ,lib: _library
    ,caption: 'Nested List with Value'
    ,icon: '-600px -200px'
    ,helper: prx.url.devices + '/ios9/light/listnestedwithvalue/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,valueSize: 17*prx.componentsHelper.getScale(_library)
    ,valueFont: 'San Francisco UI Text'
    ,valueFontStyle: '300'
    ,valueColor: '999999'
    ,valueProperties: []
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeValueColor: '999999'
    ,activeSubColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 1
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'nestedWithValue'
            ,value: 'Insert value'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
            ,actions: []
            ,subtitle: ''
        },
        {
            text: 'Label 2'
            ,itemtype: 'nestedWithValue'
            ,value: 'Insert value'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
            ,actions: []
            ,subtitle: ''
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-600px -200px',
                helper: prx.url.devices + '/ios9/light/listnestedwithvalue/helper.png',
            },
            components: {
                icon: '-600px -200px',
                helper: prx.url.devices + '/ios9/light/listnestedwithvalue/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
                listitems: [
                    {
                        text: 'Label 1'
                        ,itemtype: 'nestedWithValue'
                        ,value: 'Insert value'
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
                        ,actions: []
                        ,subtitle: ''
                    },
                    {
                        text: 'Label 2'
                        ,itemtype: 'nestedWithValue'
                        ,value: 'Insert value'
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
                        ,actions: []
                        ,subtitle: ''
                    }
                ]
            },
            blankItem: {
                text: 'Label'
                ,itemtype: 'nestedWithValue'
                ,value: 'Insert value'
                ,hasThumbnail: false
                ,thumbnail: {"fileId":"","name":"","assetType":""}
                ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
                ,actions: []
                ,subtitle: ''
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-200px -1300px',
                helper: prx.url.devices + '/ios9/dark/listnestedwithvalue/helper.png',
            },
            components: {
                icon: '-200px -1300px',
                helper: prx.url.devices + '/ios9/dark/listnestedwithvalue/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
                listitems: [
                    {
                        text: 'Label 1'
                        ,itemtype: 'nestedWithValue'
                        ,value: 'Insert value'
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/b821d85ca40ce5ec744f7c97418d2b93_5a5a5e.svg","color":"5a5a5e"}
                        ,actions: []
                        ,subtitle: ''
                    },
                    {
                        text: 'Label 2'
                        ,itemtype: 'nestedWithValue'
                        ,value: 'Insert value'
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/b821d85ca40ce5ec744f7c97418d2b93_5a5a5e.svg","color":"5a5a5e"}
                        ,actions: []
                        ,subtitle: ''
                    }
                ]
            },
            blankItem: {
                text: 'Label'
                ,itemtype: 'nestedWithValue'
                ,value: 'Insert value'
                ,hasThumbnail: false
                ,thumbnail: {"fileId":"","name":"","assetType":""}
                ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/b821d85ca40ce5ec744f7c97418d2b93_5a5a5e.svg","color":"5a5a5e"}
                ,actions: []
                ,subtitle: ''
            }
        },
    }
};

//TYPE: LIST WITH ICON AND VALUE
prx.components.ios7_listwithiconandvalue = {
    name: 'ios7_listwithiconandvalue'
    ,type: 'ios7_listwithiconandvalue'
    ,lib: _library
    ,caption: 'List with Icon and Value'
    ,icon: '-700px -200px'
    ,helper: prx.url.devices + '/ios9/light/listwithvalue/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,valueSize: 17*prx.componentsHelper.getScale(_library)
    ,valueFont: 'San Francisco UI Text'
    ,valueFontStyle: '300'
    ,valueColor: '999999'
    ,valueProperties: []
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeValueColor: '999999'
    ,activeSubColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 2
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'withIconAndValue'
            ,value: 'Insert value'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
            ,subtitle: ''
        },
        {
            text: 'Label 2'
            ,itemtype: 'withIconAndValue'
            ,value: 'Insert value'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
            ,subtitle: ''
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,richText: {
        value : 'listitems'
    }
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-700px -200px',
                helper: prx.url.devices + '/ios9/light/listwithvalue/helper.png',
            },
            components: {
                icon: '-700px -200px',
                helper: prx.url.devices + '/ios9/light/listwithvalue/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-300px -1300px',
                helper: prx.url.devices + '/ios9/dark/listwithvalue/helper.png',
            },
            components: {
                icon: '-300px -1300px',
                helper: prx.url.devices + '/ios9/dark/listwithvalue/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
            },
        },
    }
};

//TYPE: LIST WITH BADGE
prx.components.ios7_listwithbadge = {
    name: 'ios7_listwithbadge'
    ,type: 'ios7_listwithbadge'
    ,lib: _library
    ,caption: 'List with Badge'
    ,icon: '-800px -200px'
    ,helper: prx.url.devices + '/ios9/light/listwithbadge/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,badgeSize: 9*prx.componentsHelper.getScale(_library)
    ,badgeFont: 'San Francisco UI Text'
    ,badgeFontStyle: '300'
    ,badgeColor: 'ffffff'
    ,badgeProperties: []
    ,badgeBackgroundColor: 'ff3b30'
    ,textAlign: 'left'
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeSubColor: '999999'
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'withBadge'
            ,subtitle: ''
            ,badgeText: '1'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'withBadge'
            ,subtitle: ''
            ,badgeText: '1'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-800px -200px',
                helper: prx.url.devices + '/ios9/light/listwithbadge/helper.png',
            },
            components: {
                icon: '-800px -200px',
                helper: prx.url.devices + '/ios9/light/listwithbadge/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
                badgeBackgroundColor: 'ff3b30',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-400px -1300px',
                helper: prx.url.devices + '/ios9/dark/listwithbadge/helper.png',
            },
            components: {
                icon: '-400px -1300px',
                helper: prx.url.devices + '/ios9/dark/listwithbadge/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
                badgeBackgroundColor: 'ff453a',
            },
        },
    }
};

//TYPE: NESTED LIST WITH BADGE
prx.components.ios7_listnestedwithbadge = {
    name: 'ios7_listnestedwithbadge'
    ,type: 'ios7_listnestedwithbadge'
    ,lib: _library
    ,caption: 'Nested List with Badge'
    ,icon: '-900px -200px'
    ,helper: prx.url.devices + '/ios9/light/listnestedwithbadge/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,badgeSize: 9*prx.componentsHelper.getScale(_library)
    ,badgeFont: 'San Francisco UI Text'
    ,badgeFontStyle: '300'
    ,badgeColor: 'ffffff'
    ,badgeProperties: []
    ,badgeBackgroundColor: 'ff3b30'
    ,textAlign: 'left'
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeSubColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 1
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'nestedWithBadge'
            ,subtitle: ''
            ,badgeText: '1'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'nestedWithBadge'
            ,subtitle: ''
            ,badgeText: '1'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-900px -200px',
                helper: prx.url.devices + '/ios9/light/listnestedwithbadge/helper.png'
            },
            components: {
                icon: '-900px -200px',
                helper: prx.url.devices + '/ios9/light/listnestedwithbadge/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
                badgeBackgroundColor: 'ff3b30',
                listitems: [
                    {
                        text: 'Label 1'
                        ,itemtype: 'nestedWithBadge'
                        ,subtitle: ''
                        ,badgeText: '1'
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
                        ,actions: []
                    },
                    {
                        text: 'Label 2'
                        ,itemtype: 'nestedWithBadge'
                        ,subtitle: ''
                        ,badgeText: '1'
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
                        ,actions: []
                    }
                ]
            },
            blankItem: {
                text: 'Label'
                ,itemtype: 'nestedWithBadge'
                ,subtitle: ''
                ,badgeText: '1'
                ,hasThumbnail: false
                ,thumbnail: {"fileId":"","name":"","assetType":""}
                ,buttonicon: {"fileId":"308d48427cd7846bd86b679eabd077ae.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
                ,actions: []
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-500px -1300px',
                helper: prx.url.devices + '/ios9/dark/listnestedwithbadge/helper.png',
            },
            components: {
                icon: '-500px -1300px',
                helper: prx.url.devices + '/ios9/dark/listnestedwithbadge/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
                badgeBackgroundColor: 'ff453a',
                listitems: [
                    {
                        text: 'Label 1'
                        ,itemtype: 'nestedWithBadge'
                        ,subtitle: ''
                        ,badgeText: '1'
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/b821d85ca40ce5ec744f7c97418d2b93_5a5a5e.svg","color":"5a5a5e"}
                        ,actions: []
                    },
                    {
                        text: 'Label 2'
                        ,itemtype: 'nestedWithBadge'
                        ,subtitle: ''
                        ,badgeText: '1'
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/b821d85ca40ce5ec744f7c97418d2b93_5a5a5e.svg","color":"5a5a5e"}
                        ,actions: []
                    }
                ]
            },
            blankItem: {
                text: 'Label'
                ,itemtype: 'nestedWithBadge'
                ,subtitle: ''
                ,badgeText: '1'
                ,hasThumbnail: false
                ,thumbnail: {"fileId":"","name":"","assetType":""}
                ,buttonicon: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/b821d85ca40ce5ec744f7c97418d2b93_5a5a5e.svg","color":"5a5a5e"}
                ,actions: []
            }
        },
    }
};

//TYPE: LIST WITH ICON AND BADGE
prx.components.ios7_listwithiconandbadge = {
    name: 'ios7_listwithiconandbadge'
    ,type: 'ios7_listwithiconandbadge'
    ,lib: _library
    ,caption: 'List with Icon and Badge'
    ,icon: '-1000px -200px'
    ,helper: prx.url.devices + '/ios9/light/listwithbadge/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,badgeSize: 9*prx.componentsHelper.getScale(_library)
    ,badgeFont: 'San Francisco UI Text'
    ,badgeFontStyle: '300'
    ,badgeColor: 'ffffff'
    ,badgeProperties: []
    ,badgeBackgroundColor: 'ff3b30'
    ,textAlign: 'left'
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeSubColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 2
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'nestedWithBadge'
            ,subtitle: ''
            ,badgeText: '1'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'nestedWithBadge'
            ,subtitle: ''
            ,badgeText: '1'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1000px -200px',
                helper: prx.url.devices + '/ios9/light/listwithbadge/helper.png',
            },
            components: {
                icon: '-1000px -200px',
                helper: prx.url.devices + '/ios9/light/listwithbadge/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-600px -1300px',
                helper: prx.url.devices + '/ios9/dark/listwithbadge/helper.png',
            },
            components: {
                icon: '-600px -1300px',
                helper: prx.url.devices + '/ios9/dark/listwithbadge/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
            },
        },
    }
};

//TYPE: RADIO LIST
prx.components.ios7_listradio = {
    name: 'ios7_listradio'
    ,type: 'ios7_listradio'
    ,lib: _library
    ,caption: 'Radio List'
    ,icon: '-1100px -200px'
    ,helper: prx.url.devices + '/ios9/light/listradio/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeSubColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 2
    ,listitems: [
       {
           itemtype: 'radio'
           ,text: 'Label 1'
           ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"}
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''
           ,checked: true

       },
       {
           itemtype: 'radio'
           ,text: 'Label 2'
           ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"}
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''
           ,checked: false
       }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1100px -200px',
                helper: prx.url.devices + '/ios9/light/listradio/helper.png',
            },
            components: {
                icon: '-1100px -200px',
                helper: prx.url.devices + '/ios9/light/listradio/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
                subColor: '999999',
                listitems: [
                    {
                        itemtype: 'radio'
                        ,text: 'Label 1'
                        ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"}
                        ,actions: []
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,subtitle: ''
                        ,checked: true

                    },
                    {
                        itemtype: 'radio'
                        ,text: 'Label 2'
                        ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"}
                        ,actions: []
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,subtitle: ''
                        ,checked: false
                    }
                ]
            },
            blankItem: {
                itemtype: 'radio'
                ,text: 'Label'
                ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"}
                ,actions: []
                ,hasThumbnail: false
                ,thumbnail: {"fileId":"","name":"","assetType":""}
                ,subtitle: ''
                ,checked: false
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-700px -1300px',
                helper: prx.url.devices + '/ios9/dark/listradio/helper.png',
            },
            components: {
                icon: '-700px -1300px',
                helper: prx.url.devices + '/ios9/dark/listradio/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
                subColor: '919191',
                listitems: [
                    {
                        itemtype: 'radio'
                        ,text: 'Label 1'
                        ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_0a84ff.svg","color":"0a84ff"}
                        ,actions: []
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,subtitle: ''
                        ,checked: true

                    },
                    {
                        itemtype: 'radio'
                        ,text: 'Label 2'
                        ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_0a84ff.svg","color":"0a84ff"}
                        ,actions: []
                        ,hasThumbnail: false
                        ,thumbnail: {"fileId":"","name":"","assetType":""}
                        ,subtitle: ''
                        ,checked: false
                    }
                ]
            },
            blankItem: {
                itemtype: 'radio'
                ,text: 'Label'
                ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_0a84ff.svg","color":"0a84ff"}
                ,actions: []
                ,hasThumbnail: false
                ,thumbnail: {"fileId":"","name":"","assetType":""}
                ,subtitle: ''
                ,checked: false
            }
        },
    }
};

//TYPE: CHECKBOX LIST
prx.components.ios7_listcheckbox = {
    name: 'ios7_listcheckbox'
    ,type: 'ios7_listcheckbox'
    ,lib: _library
    ,caption: 'Checkbox List'
    ,icon: '-1200px -200px'
    ,helper: prx.url.devices + '/ios9/light/listcheckbox/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeSubColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 2
    ,listitems: [
       {
           itemtype: 'checkbox'
           ,text: 'Label 1'
           ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"}
           ,actions1: []
           ,actions2: []
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''
           ,checked: true

       },
       {
           itemtype: 'checkbox'
           ,text: 'Label 2'
           ,buttonicon: {"fileId":"0e4b53af477f69a7a69a6e13e4a63640.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","targetSrc":"generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg","color":"007aff"}
           ,actions1: []
           ,actions2: []
           ,actions: []
           ,hasThumbnail: false
           ,thumbnail: {"fileId":"","name":"","assetType":""}
           ,subtitle: ''
           ,checked: true
       }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light: {
            allcomponents: {
                icon: '-1200px -200px',
                helper: prx.url.devices + '/ios9/light/listcheckbox/helper.png',
            },
            components: {
                icon: '-1200px -200px',
                helper: prx.url.devices + '/ios9/light/listcheckbox/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor: 'CCCCCC',
                textColor: '333333',
                subColor: '999999',
                listitems: [
                    {
                        itemtype: 'checkbox',
                        text: 'Label 1',
                        buttonicon: {
                            "fileId": "0e4b53af477f69a7a69a6e13e4a63640.svg",
                            "name": "check.svg",
                            "assetType": "icon",
                            "bucketsource": "static",
                            "url": "f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg",
                            "targetSrc": "generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg",
                            "color": "007aff"
                        },
                        actions1: [],
                        actions2: [],
                        actions: [],
                        hasThumbnail: false,
                        thumbnail: { "fileId": "", "name": "", "assetType": "" },
                        subtitle: '',
                        checked: true
                    },
                    {
                        itemtype: 'checkbox',
                        text: 'Label 2',
                        buttonicon: {
                            "fileId": "0e4b53af477f69a7a69a6e13e4a63640.svg",
                            "name": "check.svg",
                            "assetType": "icon",
                            "bucketsource": "static",
                            "url": "f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg",
                            "targetSrc": "generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg",
                            "color": "007aff"
                        },
                        actions1: [],
                        actions2: [],
                        actions: [],
                        hasThumbnail: false,
                        thumbnail: { "fileId": "", "name": "", "assetType": "" },
                        subtitle: '',
                        checked: true
                    }
                ]
            },
            blankItem: {
                itemtype: 'checkbox',
                text: 'Label',
                buttonicon: {
                    "fileId": "0e4b53af477f69a7a69a6e13e4a63640.svg",
                    "name": "check.svg",
                    "assetType": "icon",
                    "bucketsource": "static",
                    "url": "f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg",
                    "targetSrc": "generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg",
                    "color": "007aff"
                },
                actions1: [],
                actions2: [],
                actions: [],
                hasThumbnail: false,
                thumbnail: { "fileId": "", "name": "", "assetType": "" },
                subtitle: '',
                checked: true
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-800px -1300px',
                helper: prx.url.devices + '/ios9/dark/listcheckbox/helper.png',
            },
            components: {
                icon: '-800px -1300px',
                helper: prx.url.devices + '/ios9/dark/listcheckbox/helper.png',
                backgroundColor: '1c1c1e',
                borderColor: 'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
                subColor: '919191',
                listitems: [
                    {
                        itemtype: 'checkbox',
                        text: 'Label 1',
                        buttonicon: {
                            "fileId": "0e4b53af477f69a7a69a6e13e4a63640.svg",
                            "name": "check.svg",
                            "assetType": "icon",
                            "bucketsource": "static",
                            "url": "f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg",
                            "targetSrc": "generated/0e4b53af477f69a7a69a6e13e4a63640_0a84ff.svg",
                            "color": "0a84ff"
                        },
                        actions1: [],
                        actions2: [],
                        actions: [],
                        hasThumbnail: false,
                        thumbnail: { "fileId": "", "name": "", "assetType": "" },
                        subtitle: '',
                        checked: true

                    },
                    {
                        itemtype: 'checkbox',
                        text: 'Label 2',
                        buttonicon: {
                            "fileId": "0e4b53af477f69a7a69a6e13e4a63640.svg",
                            "name": "check.svg",
                            "assetType": "icon",
                            "bucketsource": "static",
                            "url": "f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg",
                            "targetSrc": "generated/0e4b53af477f69a7a69a6e13e4a63640_0a84ff.svg",
                            "color": "0a84ff"
                        },
                        actions1: [],
                        actions2: [],
                        actions: [],
                        hasThumbnail: false,
                        thumbnail: { "fileId": "", "name": "", "assetType": "" },
                        subtitle: '',
                        checked: true
                    }
                ]
            },
            blankItem: {
                itemtype: 'checkbox',
                text: 'Label',
                buttonicon: {
                    "fileId": "0e4b53af477f69a7a69a6e13e4a63640.svg",
                    "name": "check.svg",
                    "assetType": "icon",
                    "bucketsource": "static",
                    "url": "f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg",
                    "targetSrc": "generated/0e4b53af477f69a7a69a6e13e4a63640_007aff.svg",
                    "color": "007aff"
                },
                actions1: [],
                actions2: [],
                actions: [],
                hasThumbnail: false,
                thumbnail: { "fileId": "", "name": "", "assetType": "" },
                subtitle: '',
                checked: true
            },
        }
    }
};

//TYPE: COMPLEX LIST
prx.components.ios7_listcomplex = {
    name: 'ios7_listcomplex'
    ,type: 'ios7_listcomplex'
    ,lib: _library
    ,caption: 'Complex List'
    ,icon: '-1300px -200px'
    ,helper: prx.url.devices + '/ios9/light/listbasic/helper.png'
    ,width: "full"
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'CCCCCC'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '300'
    ,textColor: '333333'
    ,textAlign: 'left'
    ,textProperties: []
    ,subSize: 13*prx.componentsHelper.getScale(_library)
    ,subFont: 'San Francisco UI Text'
    ,subFontStyle: '300'
    ,subColor: '999999'
    ,subProperties: []
    ,valueSize: 17*prx.componentsHelper.getScale(_library)
    ,valueFont: 'San Francisco UI Text'
    ,valueFontStyle: '300'
    ,valueColor: '999999'
    ,valueProperties: []
    ,badgeSize: 9*prx.componentsHelper.getScale(_library)
    ,badgeFont: 'San Francisco UI Text'
    ,badgeFontStyle: '300'
    ,badgeColor: 'ffffff'
    ,badgeProperties: []
    ,badgeBackgroundColor: 'ff3b30'
    ,textAlign: 'left'
    ,backgroundColor: 'FFFFFF'
    ,activeBackgroundColor: 'CCCCCC'
    ,activeTextColor: '333333'
    ,activeSubColor: '999999'
    ,activeValueColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 2
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'basic'
            ,value: 'Insert value'
            ,subtitle: ''
            ,badgeText: '1'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: false
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'basic'
            ,value: 'Insert value'
            ,subtitle: ''
            ,badgeText: '1'
            ,hasThumbnail: false
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,buttonicon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: false
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,richText: {
        text: ['listitems','index','text'],
        value : ['listitems','index','value'],
        subtitle: ['listitems','index','subtitle']
    }
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1300px -200px',
                helper: prx.url.devices + '/ios9/light/listbasic/helper.png',
            },
            components: {
                icon: '-1300px -200px',
                helper: prx.url.devices + '/ios9/light/listbasic/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-900px -1300px',
                helper: prx.url.devices + '/ios9/dark/listbasic/helper.png',
            },
            components: {
                icon: '-900px -1300px',
                helper: prx.url.devices + '/ios9/dark/listbasic/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
            },
        },
    }
};

//TYPE: LIST HEADER
prx.components.ios7_list_header = {
    name: 'ios7_list_header'
    ,type: 'ios7_list_header'
    ,lib: _library
    ,caption: 'List Header'
    ,icon: '-1400px -200px'
    ,helper: prx.url.devices + '/ios9/light/list_header/helper.png'
    ,width: "full"
    ,height: 20*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '500'
    ,textColor: '000000'
    ,textAlign: 'left'
    ,textProperties: []
    ,backgroundColor: 'rgba(240, 240, 240, 0.95)'
    ,text: 'LABEL'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1400px -200px',
                helper: prx.url.devices + '/ios9/light/list_header/helper.png',
            },
            components: {
                icon: '-1400px -200px',
                helper: prx.url.devices + '/ios9/light/list_header/helper.png',
                backgroundColor: 'FFFFFF',
                borderColor:  'CCCCCC',
                textColor: '333333',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1000px -1300px',
                helper: prx.url.devices + '/ios9/dark/list_header/helper.png',
            },
            components: {
                icon: '-1000px -1300px',
                helper: prx.url.devices + '/ios9/dark/list_header/helper.png',
                backgroundColor: '1c1c1e',
                borderColor:  'rgba(84,84,88,0.65)',
                textColor: 'ffffff',
            },
        },
    }
};



/****** OTHER CONTROLS ******/

//TYPE: ALERT
prx.components.ios7_alert = {
    name: 'ios7_alert'
    ,type: 'ios7_alert'
    ,lib: _library
    ,caption: 'Alert'
    ,icon: '-1500px -200px'
    ,helper: prx.url.devices + '/ios9/light/alert/helper.png'
    ,width: 250*prx.componentsHelper.getScale(_library)
    ,height: 150*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(255,255,255,0.95)'
    ,borderColor: '#CCCCCC'
    ,borderRadius: 3*prx.componentsHelper.getScale(_library)
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '300'
    ,textProperties: []
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textColor: '#333333'
    ,title: '<span style="font-weight: 600;">Alert title</span>'
    ,text: '<span style="font-size: 13px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>'
    ,buttons: [{
        actions: [],
        text: 'Cancel',
        textColor: '#007aff',
        textFontStyle: '400',
        textProperties: [],
        // textSize: 17*prx.componentsHelper.getScale(_library),
        textFont: 'San Francisco UI Text'
    },{
        actions: [],
        text: '<strong>OK</strong>',
        textColor: '#007aff',
        textFontStyle: '600',
        textProperties: [],
        // textSize: 17*prx.componentsHelper.getScale(_library),
        textFont: 'San Francisco UI Text'
    }]
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1500px -200px',
                helper: prx.url.devices +'/ios9/light/alert/helper.png',
            },
            components: {
                icon: '-1500px -200px',
                helper: prx.url.devices + '/ios9/light/alert/helper.png',
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#CCCCCC',
                textColor: '#333333',
                buttons: [{
                    actions: [],
                    text: 'Cancel',
                    textColor: '#007aff',
                    textFontStyle: '400',
                    textProperties: [],
                    textFont: 'San Francisco UI Text'
                },{
                    actions: [],
                    text: '<strong>OK</strong>',
                    textColor: '#007aff',
                    textFontStyle: '600',
                    textProperties: [],
                    textFont: 'San Francisco UI Text'
                }]
            },
            blankItem: {
                text: 'Label',
                actions: [],
                textColor: '#007aff',
                textFontStyle: '400',
                textProperties: [],
                textFont: 'San Francisco UI Text',
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-1100px -1300px',
                helper: prx.url.devices + '/ios9/dark/alert/helper.png',
            },
            components: {
                icon: '-1100px -1300px',
                helper: prx.url.devices + '/ios9/dark/alert/helper.png',
                backgroundColor: 'rgba(30,30,30,0.75)',
                borderColor: 'rgba(84,84,88,0.65)',
                textColor: '#ffffff',
                buttons: [{
                    actions: [],
                    text: 'Cancel',
                    textColor: '#0a84ff',
                    textFontStyle: '400',
                    textProperties: [],
                    textFont: 'San Francisco UI Text'
                },{
                    actions: [],
                    text: '<strong>OK</strong>',
                    textColor: '#0a84ff',
                    textFontStyle: '600',
                    textProperties: [],
                    textFont: 'San Francisco UI Text'
                }]
            },
            blankItem: {
                text: 'Label',
                actions: [],
                textColor: '#0a84ff',
                textFontStyle: '400',
                textProperties: [],
                textFont: 'San Francisco UI Text',
            }
        },
    }
};

//TYPE: VERTICAL ALERT
prx.components.ios10_vertical_alert = {
    name: 'ios10_vertical_alert'
    ,type: 'ios7_alert'
    ,lib: _library
    ,caption: 'Vertical alert'
    ,icon: '-1600px -200px'
    ,helper: prx.url.devices + '/ios9/light/alert_vertical/helper.png'
    ,width: 250*prx.componentsHelper.getScale(_library)
    ,height: 181*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(255,255,255,0.95)'
    ,borderColor: '#CCCCCC'
    ,borderRadius: 3*prx.componentsHelper.getScale(_library)
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '400'
    ,textProperties: []
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textColor: '#333333'
    ,title: '<span style="font-weight: 600;">Alert title</span>'
    ,text: '<span style="font-size: 13px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>'
    ,buttons: [{
        actions: [],
        text: 'Cancel',
        textColor: '#007aff',
        textFontStyle: '400',
        textProperties: []
    },{
        actions: [],
        text: '<strong>OK</strong>',
        textColor: '#007aff',
        textFontStyle: '600',
        textProperties: []
    }]
    ,dynamicSizeExpand: 'ios7-alert-dynamic-expand-wrapper'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1600px -200px',
                helper: prx.url.devices +'/ios9/light/alert_vertical/helper.png',
            },
            components: {
                icon: '-1600px -200px',
                helper: prx.url.devices + '/ios9/light/alert_vertical/helper.png',
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#CCCCCC',
                textColor: '#333333',
                buttons: [{
                    actions: [],
                    text: 'Cancel',
                    textColor: '#007aff',
                    textFontStyle: '400',
                    textProperties: [],
                    textFont: 'San Francisco UI Text'
                },{
                    actions: [],
                    text: '<strong>OK</strong>',
                    textColor: '#007aff',
                    textFontStyle: '600',
                    textProperties: [],
                    textFont: 'San Francisco UI Text'
                }],
            },
            blankItem: {
                text: 'Label',
                actions: [],
                textColor: '#007aff',
                textFontStyle: '400',
                textProperties: [],
                textFont: 'San Francisco UI Text',
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-1200px -1300px',
                helper: prx.url.devices + '/ios9/dark/alert_vertical/helper.png',
            },
            components: {
                icon: '-1200px -1300px',
                helper: prx.url.devices + '/ios9/dark/alert_vertical/helper.png',
                backgroundColor: 'rgba(30,30,30,0.75)',
                borderColor: 'rgba(84,84,88,0.65)',
                textColor: '#ffffff',
                buttons: [{
                    actions: [],
                    text: 'Cancel',
                    textColor: '#0a84ff',
                    textFontStyle: '400',
                    textProperties: [],
                    textFont: 'San Francisco UI Text'
                },{
                    actions: [],
                    text: '<strong>OK</strong>',
                    textColor: '#0a84ff',
                    textFontStyle: '600',
                    textProperties: [],
                    textFont: 'San Francisco UI Text'
                }],
            },
            blankItem: {
                text: 'Label',
                actions: [],
                textColor: '#0a84ff',
                textFontStyle: '400',
                textProperties: [],
                textFont: 'San Francisco UI Text',
            }
        },
    }
};

//TYPE: ACTIONSHEET
prx.components.ios7_actionsheet = {
    name: 'ios7_actionsheet'
    ,type: 'ios7_actionsheet'
    ,lib: _library
    ,caption: 'Actionsheet'
    ,icon: '-1700px -200px'
    ,helper: prx.url.devices + '/ios9/light/actionsheet/helper.png'
    ,width: 250*prx.componentsHelper.getScale(_library)
    ,height: 125*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(255,255,255,0.95)'
    ,borderColor: '#CCCCCC'
    ,borderRadius: 3*prx.componentsHelper.getScale(_library)
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textSize: 20*prx.componentsHelper.getScale(_library)
    // ,textFontStyle: '300'
    // ,textProperties: []
    ,showtitle: false
    ,detachlast: true
    ,buttons: [{
        actions: [],
        text: 'Delete',
        textFont: 'San Francisco UI Text',
        textSize: 17*prx.componentsHelper.getScale(_library),
        textColor: '#ff3b30',
        textProperties: [],
        textFontStyle: '400'
    },{
        actions: [],
        text: 'Save',
        textFont: 'San Francisco UI Text',
        textSize: 17*prx.componentsHelper.getScale(_library),
        textColor: '#007aff',
        textProperties: [],
        textFontStyle: '400'
    },{
        actions: [],
        text: 'Cancel',
        textFont: 'San Francisco UI Text',
        textSize: 17*prx.componentsHelper.getScale(_library),
        textColor: '#007aff',
        textProperties: [],
        textFontStyle: '600'
    }]
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1700px -200px',
                helper: prx.url.devices +'/ios9/light/actionsheet/helper.png',
            },
            components: {
                icon: '-1700px -200px',
                helper: prx.url.devices + '/ios9/light/actionsheet/helper.png',
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#CCCCCC',
                buttons: [{
                    actions: [],
                    text: 'Delete',
                    textFont: 'San Francisco UI Text',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textColor: '#ff3b30',
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Save',
                    textFont: 'San Francisco UI Text',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textColor: '#007aff',
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Cancel',
                    textFont: 'San Francisco UI Text',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textColor: '#007aff',
                    textProperties: [],
                    textFontStyle: '600'
                }],
            },
            blankItem: {
                text: 'Label',
                actions: [],
                textFont: 'San Francisco UI Text',
                textSize: 17*prx.componentsHelper.getScale(_library),
                textFontStyle: '400',
                textColor: '#007aff',
                textProperties: [],
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-1300px -1300px',
                helper: prx.url.devices + '/ios9/dark/actionsheet/helper.png',
            },
            components: {
                icon: '-1300px -1300px',
                helper: prx.url.devices + '/ios9/dark/actionsheet/helper.png',
                backgroundColor: 'rgba(30,30,30,0.75)',
                borderColor: 'rgba(84,84,88,0.65)',
                buttons: [{
                    actions: [],
                    text: 'Delete',
                    textFont: 'San Francisco UI Text',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textColor: '#ff453a',
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Save',
                    textFont: 'San Francisco UI Text',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textColor: '#0a84ff',
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Cancel',
                    textFont: 'San Francisco UI Text',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textColor: '#0a84ff',
                    textProperties: [],
                    textFontStyle: '600'
                }]
            },
            blankItem: {
                text: 'Label',
                actions: [],
                textFont: 'San Francisco UI Text',
                textSize: 17*prx.componentsHelper.getScale(_library),
                textFontStyle: '400',
                textColor: '#0a84ff',
                textProperties: [],
            }
        },
    }
};

//TYPE: ACTIONSHEET WITH TITLE
prx.components.ios7_actionsheet_title = {
    name: 'ios7_actionsheet_title'
    ,type: 'ios7_actionsheet'
    ,lib: _library
    ,caption: 'Actionsheet with title'
    ,icon: '-1800px -200px'
    ,helper: prx.url.devices + '/ios9/light/actionsheet_title/helper.png'
    ,width: 250*prx.componentsHelper.getScale(_library)
    ,height: 224*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(255,255,255,0.95)'
    ,borderColor: '#CCCCCC'
    ,borderRadius: 3*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    // ,textFontStyle: '300'
    // ,textProperties: []
    ,textSize: 20*prx.componentsHelper.getScale(_library)
    ,showtitle: true
    ,detachlast: true
    ,buttons: [{
        actions: [],
        textFont: 'San Francisco UI Text',
        text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?',
        textColor: '#999999',
        textSize: 13*prx.componentsHelper.getScale(_library),
        textProperties: [],
        textFontStyle: '400'
    },{
        actions: [],
        text: 'Delete',
        textFont: 'San Francisco UI Text',
        textColor: '#ff3b30',
        textSize: 17*prx.componentsHelper.getScale(_library),
        textProperties: [],
        textFontStyle: '400'
    },{
        actions: [],
        text: 'Save',
        textFont: 'San Francisco UI Text',
        textColor: '#007aff',
        textSize: 17*prx.componentsHelper.getScale(_library),
        textProperties: [],
        textFontStyle: '400'
    },{
        actions: [],
        text: 'Cancel',
        textFont: 'San Francisco UI Text',
        textColor: '#007aff',
        textSize: 17*prx.componentsHelper.getScale(_library),
        textProperties: [],
        textFontStyle: '600'
    }]
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-1800px -200px',
                helper: prx.url.devices +'/ios9/light/actionsheet_title/helper.png',
            },
            components: {
                icon: '-1800px -200px',
                helper: prx.url.devices + '/ios9/light/actionsheet_title/helper.png',
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#CCCCCC',
                buttons: [{
                    actions: [],
                    textFont: 'San Francisco UI Text',
                    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?',
                    textColor: '#999999',
                    textSize: 13*prx.componentsHelper.getScale(_library),
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Delete',
                    textFont: 'San Francisco UI Text',
                    textColor: '#ff3b30',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Save',
                    textFont: 'San Francisco UI Text',
                    textColor: '#007aff',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Cancel',
                    textFont: 'San Francisco UI Text',
                    textColor: '#007aff',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textProperties: [],
                    textFontStyle: '600'
                }],
            },
            blankItem: {
                text: 'Label',
                actions: [],
                textFont: 'San Francisco UI Text',
                textSize: 17*prx.componentsHelper.getScale(_library),
                textFontStyle: '400',
                textColor: '#007aff',
                textProperties: [],
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-1400px -1300px',
                helper: prx.url.devices + '/ios9/dark/actionsheet_title/helper.png',
            },
            components: {
                icon: '-1400px -1300px',
                helper: prx.url.devices + '/ios9/dark/actionsheet_title/helper.png',
                backgroundColor: 'rgba(30,30,30,0.75)',
                borderColor: 'rgba(84,84,88,0.65)',
                buttons: [{
                    actions: [],
                    textFont: 'San Francisco UI Text',
                    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?',
                    textColor: '#ffffff',
                    textSize: 13*prx.componentsHelper.getScale(_library),
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Delete',
                    textFont: 'San Francisco UI Text',
                    textColor: '#ff3b30',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Save',
                    textFont: 'San Francisco UI Text',
                    textColor: '#0a84ff',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textProperties: [],
                    textFontStyle: '400'
                },{
                    actions: [],
                    text: 'Cancel',
                    textFont: 'San Francisco UI Text',
                    textColor: '#0a84ff',
                    textSize: 17*prx.componentsHelper.getScale(_library),
                    textProperties: [],
                    textFontStyle: '600'
                }],
            },
            blankItem: {
                text: 'Label',
                actions: [],
                textFont: 'San Francisco UI Text',
                textSize: 17*prx.componentsHelper.getScale(_library),
                textFontStyle: '400',
                textColor: '#0a84ff',
                textProperties: [],
            }
        },
    }
};

//TYPE: CONTROL POPOVER
prx.components.ios7_control_popover = {
    name: 'ios7_control_popover'
    ,type: 'ios7_control_popover'
    ,lib: _library
    ,caption: 'Control Popover'
    ,icon: '-1900px -200px'
    ,helper: prx.url.devices + '/ios9/light/control_popover/helper.png'
    ,width: 225*prx.componentsHelper.getScale(_library)
    ,height: 40*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(32,32,32,0.92)'
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: '#505050'
    ,borderRadius: 5*prx.componentsHelper.getScale(_library)
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '300'
    ,textSize: 13*prx.componentsHelper.getScale(_library)
    ,textColor: '#ffffff'
    ,textProperties: []
    ,tooltipSize: 10*prx.componentsHelper.getScale(_library)
    ,tooltipPosition: 10
    ,tooltipSide: 'bottom'
    ,buttons: [{
        actions: [],
        text: 'Copy'
    },{
        actions: [],
        text: 'Paste'
    },{
        actions: [],
        text: 'Select All'
    }]
};

//TYPE: POPOVER
prx.components.ios7_popover = {
    name: 'ios7_popover'
    ,type: 'ios7_popover'
    ,lib: _library
    ,caption: 'Popover'
    ,icon: '0 -300px'
    ,helper: prx.url.devices + '/ios9/light/popover/helper.png'
    ,width: 225*prx.componentsHelper.getScale(_library)
    ,height: 150*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(255,255,255,0.95)'
    ,borderRadius: 5*prx.componentsHelper.getScale(_library)
    ,tooltipSize: 10*prx.componentsHelper.getScale(_library)
    ,tooltipSide: 'top'
    ,tooltipPosition: 50
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '0 -300px',
                helper: prx.url.devices +'/ios9/light/popover/helper.png',
            },
            components: {
                icon: '0 -300px',
                helper: prx.url.devices + '/ios9/light/popover/helper.png',
                backgroundColor: 'rgba(255,255,255,0.95)'
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1600px -1300px',
                helper: prx.url.devices + '/ios9/dark/popover/helper.png',
            },
            components: {
                icon: '-1600px -1300px',
                helper: prx.url.devices + '/ios9/dark/popover/helper.png',
                backgroundColor: 'rgba(32,32,32,0.92)'
            },
        },
    }
};

//TYPE: PROGRESS BAR
prx.components.ios7_progressbar = {
    name: 'ios7_progressbar'
    ,type: 'ios7_progressbar'
    ,lib: _library
    ,caption: 'Progress bar'
    ,icon: '-100px -300px'
    ,helper: prx.url.devices + '/ios9/light/progressbar/helper.png'
    ,width: 150*prx.componentsHelper.getScale(_library)
    ,height: 2*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,barColor: '#CCCCCC'
    ,fillBarColor: '#007aff'
    ,progress: 50
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-100px -300px',
                helper: prx.url.devices +'/ios9/light/progressbar/helper.png',
            },
            components: {
                icon: '-100px -300px',
                helper: prx.url.devices + '/ios9/light/progressbar/helper.png',
                barColor: '#cccccc',
                fillBarColor: '#007aff',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1700px -1300px',
                helper: prx.url.devices + '/ios9/dark/progressbar/helper.png',
            },
            components: {
                icon: '-1700px -1300px',
                helper: prx.url.devices + '/ios9/dark/progressbar/helper.png',
                barColor: '#d8d8d8',
                fillBarColor: '#0a84ff',
            },
        },
    }
};

//TYPE: BADGE
prx.components.ios7_badge = {
    name: 'ios7_badge'
    ,type: 'ios7_badge'
    ,lib: _library
    ,caption: 'Badge'
    ,icon: '-200px -300px'
    ,helper: prx.url.devices + '/ios9/light/badge/helper.png'
    ,width: 18*prx.componentsHelper.getScale(_library)
    ,height: 13*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,text: '1'
    ,textSize: 9*prx.componentsHelper.getScale(_library)
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '300'
    ,textColor: '#ffffff'
    ,textProperties: []
    ,backgroundColor: '#ff3b30'
    ,borderRadius: 6*prx.componentsHelper.getScale(_library)
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-200px -300px',
                helper: prx.url.devices +'/ios9/light/badge/helper.png',
            },
            components: {
                icon: '-200px -300px',
                helper: prx.url.devices + '/ios9/light/badge/helper.png',
                backgroundColor: '#ff3b30',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1800px -1300px',
                helper: prx.url.devices + '/ios9/dark/badge/helper.png',
            },
            components: {
                icon: '-1800px -1300px',
                helper: prx.url.devices + '/ios9/dark/badge/helper.png',
                backgroundColor: '#ff453a',
            },
        },
    }
};

//TYPE: MAP TAG
prx.components.ios8_map_tag = {
    name: 'ios8_map_tag'
    ,type: 'ios8_map_tag'
    ,lib: _library
    ,caption: 'Map tag'
    ,icon: '-300px -300px'
    ,helper: prx.url.devices + '/ios9/light/map_tag/helper.png'
    ,width: 250*prx.componentsHelper.getScale(_library)
    ,height: 52*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '300'
    ,textSize: 18*prx.componentsHelper.getScale(_library)
    ,textColor:  '#000000'
    ,textProperties: []
    ,text: 'Map Tag'
    ,durationFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,durationFontStyle: '300'
    ,durationSize: 12*prx.componentsHelper.getScale(_library)
    ,durationColor:  '#ffffff'
    ,durationProperties: []
    ,durationBgColor:  '#007aff'
    ,duration: '50min'
    ,backgroundColor: '#ffffff'
    ,showThumb: true
    ,imgSrc: {"fileId":"e15a1c8db6de07dd76c19879e0d3d168.svg","name":"car2.svg","assetType":"icon","bucketsource":"static","url":"f1352447787435/cb7ab2793057d244a681e0bd37d66024.svg","targetSrc":"generated/cb7ab2793057d244a681e0bd37d66024_ffffff.svg","color":"ffffff"}
    ,imgSrc2: {"fileId":"b821d85ca40ce5ec744f7c97418d2b93.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_c6c6c6.svg","color":"C6C6C6"}
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-300px -300px',
                helper: prx.url.devices +'/ios9/light/map_tag/helper.png',
            },
            components: {
                icon: '-300px -300px',
                helper: prx.url.devices + '/ios9/light/map_tag/helper.png',
                durationBgColor:  '#007aff',
                textColor:  '#000000',
                backgroundColor: '#ffffff',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-1900px -1300px',
                helper: prx.url.devices + '/ios9/dark/map_tag/helper.png',
            },
            components: {
                icon: '-1900px -1300px',
                helper: prx.url.devices + '/ios9/dark/map_tag/helper.png',
                durationBgColor:  '#0a84ff',
                textColor:  '#ffffff',
                backgroundColor: '#1c1c1e',
            },
        },
    }
};

//TYPE: MESSAGE BUBBLE
prx.components.ios8_message_bubble = {
    name: 'ios8_message_bubble'
    ,type: 'ios8_message_bubble'
    ,lib: _library
    ,caption: 'Message bubble'
    ,icon: '-400px -300px'
    ,helper: prx.url.devices + '/ios9/light/message_bubble/helper.png'
    ,width: 175*prx.componentsHelper.getScale(_library)
    ,height: 75*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '#e5e5ea'
    ,text: 'Hi! I am the default message.'
    ,textFont: 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif'
    ,textFontStyle: '300'
    ,textSize: 9*prx.componentsHelper.getScale(_library)
    ,textColor: '#000000'
    ,textAlign: 'left'
    ,textProperties: []
    ,isSender: false
    ,thumbnail: {"fileId": "d310bece0e91b91b485ed62166d1fc2e.svg","assetType": "gallery","bucketsource": "static","name": " image_placeholder.svg", "url": "f1353077251107/01eb56561388a5a9015bcab43ddeeab5.svg"}
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-400px -300px',
                helper: prx.url.devices +'/ios9/light/message_bubble/helper.png',
            },
            components: {
                icon: '-400px -300px',
                helper: prx.url.devices + '/ios9/light/message_bubble/helper.png',
                backgroundColor: '#e5e5ea',
                textColor: '#000000',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '0 -1400px',
                helper: prx.url.devices + '/ios9/dark/message_bubble/helper.png',
            },
            components: {
                icon: '0 -1400px',
                helper: prx.url.devices + '/ios9/dark/message_bubble/helper.png',
                backgroundColor: 'rgba(32,32,32,92)',
                textColor: '#98989d',
            },
        },
    }
};

//TYPE: WIDGET
prx.components.ios10_widget = {
    name: 'ios10_widget'
    ,type: 'ios10_widget'
    ,lib: _library
    ,caption: 'Widget'
    ,icon: '-500px -300px'
    ,helper: prx.url.devices + '/ios9/light/widget/helper.png'
    ,width: 359*prx.componentsHelper.getScale(_library)
    ,height: 141*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,title: 'WIDGET'
    ,titleSize: 12*prx.componentsHelper.getScale(_library)
    ,titleFont: 'San Francisco UI Text'
    ,titleFontStyle: '300'
    ,titleColor: '#7f7f7f'
    ,titleProperties: []
    ,more: 'Show More'
    ,text: ''
    ,textSize: 13*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '400'
    ,textColor: '#000000'
    ,textProperties: []
    ,textAlign: 'left'
    ,imgSrc: {"fileId":"aac69ca20d90665f9b88e1fe1c04337b.svg","name":"protoio2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/aac69ca20d90665f9b88e1fe1c04337b.svg","targetSrc":"generated/aac69ca20d90665f9b88e1fe1c04337b_35a7c1.svg","color":"35A7C1"}
    ,titleBackgroundColor: 'rgba(255,255,255,0.6)'
    ,backgroundColor: 'rgba(255,255,255,0.6)'
    ,borderRadius: 12*prx.componentsHelper.getScale(_library)
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-500px -300px',
                helper: prx.url.devices +'/ios9/light/widget/helper.png',
            },
            components: {
                icon: '-500px -300px',
                helper: prx.url.devices + '/ios9/light/widget/helper.png',
                titleColor: '#7f7f7f',
                titleBackgroundColor: 'rgba(255,255,255,0.6)',
                backgroundColor: 'rgba(255,255,255,0.6)',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-100px -1400px',
                helper: prx.url.devices + '/ios9/dark/widget/helper.png',
            },
            components: {
                icon: '-100px -1400px',
                helper: prx.url.devices + '/ios9/dark/widget/helper.png',
                titleColor: '#c5c5cb',
                titleBackgroundColor: 'rgba(37,37,37,0.6)',
                backgroundColor: 'rgba(37,37,37,0.6)',
            },
        },
    }
};

//TYPE: NOTIFICATION
prx.components.ios10_notification = {
    name: 'ios10_notification'
    ,type: 'ios10_widget'
    ,lib: _library
    ,caption: 'Notification'
    ,icon: '-600px -300px'
    ,helper: prx.url.devices + '/ios9/light/notification/helper.png'
    ,width: 359*prx.componentsHelper.getScale(_library)
    ,height: 76*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,title: 'NOTIFICATION'
    ,titleSize: 13*prx.componentsHelper.getScale(_library)
    ,titleFont: 'San Francisco UI Text'
    ,titleFontStyle: '400'
    ,titleColor: '#7f7f7f'
    ,titleProperties: []
    ,more: '9m ago'
    ,text: 'Notification text'
    ,textSize: 15*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '400'
    ,textColor: '#000000'
    ,textAlign: 'left'
    ,textProperties: []
    ,imgSrc: {"fileId":"aac69ca20d90665f9b88e1fe1c04337b.svg","name":"protoio2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/aac69ca20d90665f9b88e1fe1c04337b.svg","targetSrc":"generated/aac69ca20d90665f9b88e1fe1c04337b_35a7c1.svg","color":"35A7C1"}
    ,titleBackgroundColor: 'rgba(255,255,255,0.6)'
    ,backgroundColor: 'rgba(255,255,255,0.6)'
    ,borderRadius: 12*prx.componentsHelper.getScale(_library)
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-600px -300px',
                helper: prx.url.devices +'/ios9/light/notification/helper.png',
            },
            components: {
                icon: '-600px -300px',
                helper: prx.url.devices + '/ios9/light/notification/helper.png',
                titleColor: '#7f7f7f',
                titleBackgroundColor: 'rgba(255,255,255,0.6)',
                backgroundColor: 'rgba(255,255,255,0.6)',
                textColor: '#000000',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-200px -1400px',
                helper: prx.url.devices + '/ios9/dark/notification/helper.png',
            },
            components: {
                icon: '-200px -1400px',
                helper: prx.url.devices + '/ios9/dark/notification/helper.png',
                titleColor: '#c5c5cb',
                titleBackgroundColor: 'rgba(37,37,37,0.6)',
                backgroundColor: 'rgba(37,37,37,0.6)',
                textColor: '#ffffff',
            },
        },
    }
};

//TYPE: NOTIFICATION
prx.components.ios11_home_indicator = {
    name: 'ios11_home_indicator'
    ,type: 'ios11_home_indicator'
    ,lib: _library
    ,caption: 'Home indicator'
    ,icon: '-200px -1000px'
    ,helper: prx.url.devices + '/ios9/light/home_indicator/helper.png'
    ,width: 'full'
    ,height: 34*prx.componentsHelper.getScale(_library)
    ,resizable : false
    ,properties: "v,l,o,hpos,vpos,r"
    ,indicatorColor: '#000000'
    ,backgroundColor: 'rgba(255,255,255,0)'
    ,propagateevents: false
    ,overlay: true
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-200px -1000px',
                helper: prx.url.devices +'/ios9/light/home_indicator/helper.png',
            },
            components: {
                icon: '-200px -1000px',
                helper: prx.url.devices + '/ios9/light/home_indicator/helper.png',
                indicatorColor: '#000000',
                backgroundColor: 'rgba(255,255,255,0)',
            },
        },
        ios_dark: {
            allcomponents: {
                icon: '-500px -1400px',
                helper: prx.url.devices + '/ios9/dark/home_indicator/helper.png',
            },
            components: {
                icon: '-500px -1400px',
                helper: prx.url.devices + '/ios9/dark/home_indicator/helper.png',
                indicatorColor: '#ffffff',
                backgroundColor: 'rgba(0,0,0,0)',
            },
        },
    }
};

//TYPE: CONTEXTMENU
prx.components.ios13_contextmenu= {
    name: 'ios13_contextmenu'
    ,type: 'ios13_contextmenu'
    ,lib: _library
    ,caption: 'Context Menu'
    ,icon: '-400px -200px'
    ,helper: prx.url.devices+_path + 'contextmenu/helper.png'
    ,width: 250*prx.componentsHelper.getScale(_library)
    ,height: 89*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'rgba(60,60,67,0.28)'
    ,textSize: 17*prx.componentsHelper.getScale(_library)
    ,textFont: 'San Francisco UI Text'
    ,textFontStyle: '400'
    ,textAlign: 'left'
    ,textProperties: []
    ,backgroundColor: 'rgba(249,249,249,0.78)'
    ,activeBackgroundColor: '#cccccc'
    ,activeTextColor: '000000'
    ,activeSubColor: '999999'
    ,iconpos: 'right'
    ,iconSize: 2
    ,listitems: [
        {
            text: 'Label 1',
            itemtype: 'withIcon',
            value: 'Insert value',
            buttonicon: {"fileId":"200a2a4818f752c60e00618c544b28cf.svg","name":"share-square 2.svg","assetType":"icon","bucketsource":"static","url":"f1515426461912/200a2a4818f752c60e00618c544b28cf.svg"},
            textColor: '#000000',
            actions: [],
            iconpos: 'right',
            iconSize: 2,
        },
        {
            text: 'Label 2',
            itemtype: 'withIcon',
            value: 'Insert value',
            buttonicon: {"fileId":"5df8af8484e120c791324ddef64efdaf.svg","name":"copy.svg","assetType":"icon","bucketsource":"static","url":"f1515489019276/5df8af8484e120c791324ddef64efdaf.svg"},
            textColor: '#000000',
            actions: [],
            iconpos: 'right',
            iconSize: 2,
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,themes: {
        ios_light : {
            allcomponents: {
                icon: '-400px -200px',
                helper: prx.url.devices +'/ios9/light/contextmenu/helper.png',
            },
            components: {
                icon: '-400px -200px',
                helper: prx.url.devices + '/ios9/light/contextmenu/helper.png',
                backgroundColor: 'rgba(249,249,249,0.78)',
                activeBackgroundColor: '#cccccc',
                borderColor: 'rgba(60,60,67,0.28)',
                listitems: [
                    {
                        text: 'Label 1',
                        itemtype: 'withIcon',
                        value: 'Insert value',
                        buttonicon: {"fileId":"200a2a4818f752c60e00618c544b28cf.svg","name":"share-square 2.svg","assetType":"icon","bucketsource":"static","url":"f1515426461912/200a2a4818f752c60e00618c544b28cf.svg"},
                        textColor: '#000000',
                        actions: [],
                        iconpos: 'right',
                        iconSize: 2,
                    },
                    {
                        text: 'Label 2',
                        itemtype: 'withIcon',
                        value: 'Insert value',
                        buttonicon: {"fileId":"5df8af8484e120c791324ddef64efdaf.svg","name":"copy.svg","assetType":"icon","bucketsource":"static","url":"f1515489019276/5df8af8484e120c791324ddef64efdaf.svg"},
                        textColor: '#000000',
                        actions: [],
                        iconpos: 'right',
                        iconSize: 2,
                    }
                ],
            },
            blankItem: {
                text: 'Label',
                itemtype: 'withIcon',
                value: 'Insert value',
                buttonicon: {"fileId":"374d51d6a3787a051e8b4c22393a462a.svg","name":"heart 2.svg","assetType":"icon","bucketsource":"static","url":"f1515489095293/374d51d6a3787a051e8b4c22393a462a.svg","targetSrc":"generated/374d51d6a3787a051e8b4c22393a462a_000000.svg","color":"000000"},
                textColor: '#000000',
                actions: [],
                iconpos: 'right',
                iconSize: 2,
            }
        },
        ios_dark: {
            allcomponents: {
                icon: '-600px -1400px',
                helper: prx.url.devices + '/ios9/dark/contextmenu/helper.png',
            },
            components: {
                icon: '-600px -1400px',
                helper: prx.url.devices + '/ios9/dark/contextmenu/helper.png',
                backgroundColor: 'rgba(37,37,37,0.78)',
                activeBackgroundColor: '#e5e5ea',
                borderColor: 'rgba(84,84,88,0.65)',
                listitems: [
                    {
                        text: 'Label 1',
                        itemtype: 'withIcon',
                        value: 'Insert value',
                        buttonicon: {"fileId":"e85638835699db48e2c180cc783bc15d.svg","name":"share-square.svg","assetType":"icon","bucketsource":"static","url":"f1515426461912/e85638835699db48e2c180cc783bc15d.svg","targetSrc":"generated/e85638835699db48e2c180cc783bc15d_ffffff.svg","color":"ffffff"},
                        textColor: '#ffffff',
                        actions: [],
                        iconpos: 'right',
                        iconSize: 2,
                    },
                    {
                        text: 'Label 2',
                        itemtype: 'withIcon',
                        value: 'Insert value',
                        buttonicon: {"fileId":"5df8af8484e120c791324ddef64efdaf.svg","name":"copy.svg","assetType":"icon","bucketsource":"static","url":"f1515489019276/5df8af8484e120c791324ddef64efdaf.svg","targetSrc":"generated/5df8af8484e120c791324ddef64efdaf_ffffff.svg","color":"ffffff"},
                        textColor: '#ffffff',
                        actions: [],
                        iconpos: 'right',
                        iconSize: 2,
                    }
                ]
            },
            blankItem: {
                text: 'Label',
                itemtype: 'withIcon',
                value: 'Insert value',
                buttonicon: {"fileId":"374d51d6a3787a051e8b4c22393a462a.svg","name":"heart 2.svg","assetType":"icon","bucketsource":"static","url":"f1515489095293/374d51d6a3787a051e8b4c22393a462a.svg","targetSrc":"generated/374d51d6a3787a051e8b4c22393a462a_ffffff.svg","color":"ffffff"},
                textColor: '#000000',
                actions: [],
                iconpos: 'right',
                iconSize: 2,
            }
        },
    }
};