var React = require('react');
var ReactDOM = require('react-dom'); 

//clase que crea la lista de tareas
var TodoList = React.createClass({
    render: function()
    {   
        var createItem = function(itemText, index)
        { 
            return <li key={index +"-"+ itemText}>{itemText}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
 
//clase que crea el formulario y lo muestra junto con la lista de tareas
var FormApp = React.createClass({
    getInitialState: function()
    {
        return {
            text: '',
            items: []
        };
    },
    onChange: function(e)
    {
        this.setState({text: e.target.value});
        console.log(e.target.value);
    },
    handleSubmit: function(e)
    {
        e.preventDefault();
        console.log(this.state.items);
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function()
    {
        return (
            <div>
                <h3>React Todo List</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                  <input type="text" onChange={this.onChange} value={this.state.text} />
                  <button type="submit">Add</button>
                </form>
            </div>
        );
    }
});

var LinksRedes = React.createClass({
    render:function(){
        return (<ul className='noLightbox social_bookmarks icon_count_5'>
                <li className='social_bookmarks_facebook av-social-link-facebook social_icon_1'>
                    <a target='_blank' href='https://www.facebook.com/royalresort' aria-hidden='true' data-av_icon='' className='icon-facebook' data-av_iconfont='entypo-fontello' title='Facebook'><span className='avia_hidden_link_text'>Facebook</span></a>
                </li>
                <li className='social_bookmarks_twitter av-social-link-twitter social_icon_2'>
                    <a target='_blank' href='https://twitter.com/royalresorts' aria-hidden='true' data-av_icon='' data-av_iconfont='entypo-fontello' className='icon-twitter' title='Twitter'><span className='avia_hidden_link_text'>Twitter</span></a>
                </li>
                <li className='social_bookmarks_instagram av-social-link-instagram social_icon_3'>
                    <a target='_blank' href='http://instagr.am/royalresorts' aria-hidden='true' data-av_icon='' data-av_iconfont='entypo-fontello' className='icon-instagram' title='Instagram'><span className='avia_hidden_link_text'>Instagram</span></a>
                </li>
                <li className='social_bookmarks_pinterest av-social-link-pinterest social_icon_4'>
                    <a target='_blank' href='https://pinterest.com/royalresorts/' aria-hidden='true' data-av_icon='' data-av_iconfont='entypo-fontello' className='icon-pinterest' title='Pinterest'><span className='avia_hidden_link_text'>Pinterest</span></a>
                </li>
                <li className='social_bookmarks_mail av-social-link-mail social_icon_5'>
                    <a className='icon-mail' href='mailto:rrvacations@royalresorts.com' aria-hidden='true' data-av_icon='' data-av_iconfont='entypo-fontello' title='Mail'><span className='avia_hidden_link_text'>Mail</span></a>
                </li>                                
                </ul>
            )
    }
});


var LinksMenuTop = React.createClass({
    render:function(){
        return (
                <nav  className="sub_menu" role="navigation"  itemtype="https://schema.org/SiteNavigationElement"><ul id="avia2-menu" className="menu"><li id="menu-item-16179" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16179"><a href="https://server.iad.liveperson.net/hc/59361898/?cmd=file&amp;file=visitorWantsToChat&amp;site=59361898&amp;SESSIONVAR!skill=Mexican%20Team&amp;referrer=%27+document.location" onclick="__gaTracker('send', 'event', 'outbound-widget', 'https://server.iad.liveperson.net/hc/59361898/?cmd=file&amp;file=visitorWantsToChat&amp;site=59361898&amp;SESSIONVAR!skill=Mexican%20Team&amp;referrer=%27+document.location', ' Live Chat');" target="_blank"><i className="fa-comment-o fa"></i><span className="fontawesome-text"> Live Chat</span></a></li>
                <li id="menu-item-16352" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16352"><a href="https://www.royalresorts.com/weather-and-webcams-in-cancun-and-riviera-maya/"><i className="fa-video-camera fa"></i><span className="fontawesome-text"> Webcams</span></a></li>
                <li id="menu-item-16742" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16742"><a href="https://app.royalresorts.com/members_login.aspx">Members Login</a></li>
                <li id="menu-item-16180" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16180"><a href="http://royalresorts.com.mx/" onclick="__gaTracker('send', 'event', 'outbound-widget', 'http://royalresorts.com.mx/', 'Spanish');">Spanish</a></li>
                <li id="menu-item-16181" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16181"><a href="tel:+18888387842"><i className="fa-phone fa"></i><span className="fontawesome-text"> 1-888-838-7842</span></a></li>
                </ul></nav>         
            )

    }
});

var MenuTopContainer = React.createClass({
    render:function(){
        return (
                <div className='container'>
                    <LinksRedes />
                    <LinksMenuTop />
                </div>         
               )

    }
});


var LogoMenuPrin = React.createClass({
    render:function(){
        return (
            <strong className="logo"><a href="https://www.royalresorts.com/" ><img height="100" width="300" src="https://www.royalresorts.com/wp-content/uploads/2016/01/Royal-Resorts-Logo.png" alt="Royal Resorts" scale="0" /></a></strong>
               )

    }
});

var NavMenuPrin = React.createClass({
    render:function(){
        return (
                <nav className="main_menu" data-selectname="Select a page" role="navigation"  itemtype="https://schema.org/SiteNavigationElement"><div className="avia-menu av-main-nav-wrap"><ul id="avia-menu" className="menu av-main-nav"><li id="menu-item-16196" className="parent-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-mega-parent  menu-item-top-level menu-item-top-level-1 dropdown_ul_available" ><a href="/discover-royal-resorts/" itemprop="url" ><span className="avia-bullet"></span><span className="avia-menu-text">DISCOVER ROYAL RESORTS</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span><span className="dropdown_available"></span><span className="dropdown_available"></span></a>
                <div className="avia_mega_div avia_mega2 six units" >

                <ul className="sub-menu">
                    <li id="menu-item-17827" className="columna-resorts menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children avia_mega_menu_columns_2 three units  avia_mega_menu_columns_first"><span className="mega_menu_title heading-color av-special-font">RESORTS</span>
                    <ul className="sub-menu">
                        <li id="menu-item-16357" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-sands/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">THE ROYAL SANDS</span></a></li>
                        <li id="menu-item-16223" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-haciendas/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">THE ROYAL HACIENDAS</span></a></li>
                        <li id="menu-item-16361" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-cancun/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">THE ROYAL CANCUN</span></a></li>
                        <li id="menu-item-16230" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-caribbean/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">THE ROYAL CARIBBEAN</span></a></li>
                        <li id="menu-item-16231" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-islander/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">THE ROYAL ISLANDER</span></a></li>
                        <li id="menu-item-16364" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/discover-royal-resorts/grand-residences/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">GRAND RESIDENCES</span></a></li>
                        <li id="menu-item-17903" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="http://www.royalresortscaribbean.com/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">CARIBBEAN RESORTS</span></a></li>
                    </ul>
                    </li>
                    <li id="menu-item-16214" className="menu-item menu-item-type-custom menu-item-object-custom avia_mega_menu_columns_2 three units avia_mega_menu_columns_last"><img className="avia_image avia_image_team imagen-resorts" src="https://www.royalresorts.com/wp-content/uploads/2016/01/the-royal-cancun-2.jpg" alt="" itemprop="image" /></li>
                </ul>

                </div>
                </li>
                <li id="menu-item-16297" className="parent-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-top-level menu-item-top-level-2 dropdown_ul_available"><a href="https://www.royalresorts.com/guest-services-and-amenities/" itemprop="url" ><span className="avia-bullet"></span><span className="avia-menu-text">SERVICE &amp; AMENITIES</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span><span className="dropdown_available"></span><span className="dropdown_available"></span></a>


                <ul className="sub-menu" >
                    <li id="menu-item-16200" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://app.royalresorts.com/forms/airport_transfers.aspx" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">AIRPORT TRANSFERS</span></a></li>
                    <li id="menu-item-16284" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/guest-services-and-amenities/refine-all-inclusive-package/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">ALL-INCLUSIVE PACKAGE</span></a></li>
                    <li id="menu-item-16285" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/guest-services-and-amenities/restaurants-in-cancun-playa-del-carmen/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">RESTAURANTS &amp; BARS</span></a></li>
                    <li id="menu-item-16286" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/guest-services-and-amenities/spa/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">SPA</span></a></li>
                    <li id="menu-item-16287" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/guest-services-and-amenities/fitness-center/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">FITNESS CENTER</span></a></li>
                    <li id="menu-item-16288" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/guest-services-and-amenities/gift-shops/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">GIFT SHOPS</span></a></li>
                    <li id="menu-item-16289" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/guest-services-and-amenities/the-royal-market/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">THE ROYAL MARKET</span></a></li>
                    <li id="menu-item-16291" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/guest-services-and-amenities/weddings-and-special-events/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">WEDDINGS &amp; SPECIAL EVENTS</span></a></li>
                    <li id="menu-item-16199" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://app.royalresorts.com/cybermall/specialGifts.aspx" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">GIFTS &amp; CERTIFICATE</span></a></li>
                    <li id="menu-item-16536" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/guest-services-and-amenities/activities-sports/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">ACTIVITIES &amp; SPORTS</span></a></li>
                </ul>
                </li>
                <li id="menu-item-16400" className="parent-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-top-level menu-item-top-level-3 dropdown_ul_available"><a href="https://www.royalresorts.com/destinations/" itemprop="url" ><span className="avia-bullet"></span><span className="avia-menu-text">DESTINATIONS</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span><span className="dropdown_available"></span><span className="dropdown_available"></span></a>


                <ul className="sub-menu" >
                    <li id="menu-item-16403" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/destinations/cancun-destination-guide/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">CANCUN DESTINATION GUIDE</span></a></li>
                    <li id="menu-item-16402" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/destinations/riviera-maya-destination-guide/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">RIVIERA MAYA DESTINATION GUIDE</span></a></li>
                    <li id="menu-item-16401" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/destinations/yucatan-destination-guide/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">YUCATAN DESTINATION GUIDE</span></a></li>
                    <li id="menu-item-16404" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/destinations/our-recommendations/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">OUR RECOMMENDATIONS</span></a></li>
                    <li id="menu-item-16405" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/destinations/weather-in-cancun-and-riviera-maya/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">WEATHER</span></a></li>
                    <li id="menu-item-17881" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.royalresorts.com/weather-and-webcams-in-cancun-and-riviera-maya/" itemprop="url"><span className="avia-bullet"></span><span className="avia-menu-text">WEBCAMS</span></a></li>
                </ul>
                </li>
                <li id="menu-item-16768" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-4"><a href="http://rrsignatureclub.com/" onclick="__gaTracker('send', 'event', 'outbound-widget', 'http://rrsignatureclub.com/', 'SIGNATURE CLUB');" itemprop="url"  target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">SIGNATURE CLUB</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span></a></li>
                <li id="menu-item-16294" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-top-level menu-item-top-level-5"><a href="https://www.royalresorts.com/blog-and-newsletter/" itemprop="url" ><span className="avia-bullet"></span><span className="avia-menu-text">BLOG</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span></a></li>
                <li id="menu-item-16296" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-top-level menu-item-top-level-6"><a href="https://www.royalresorts.com/special-offers/" itemprop="url" ><span className="avia-bullet"></span><span className="avia-menu-text">VACATION SPECIALS</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span></a></li>
                <li id="menu-item-16178" className="child_menu_bookin active menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-7"><a href="#" itemprop="url" ><span className="avia-bullet"></span><span className="avia-menu-text">RESERVE NOW</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span></a></li>
                </ul></div>
                </nav>
               )

    }
});
var ContainerMenuPrin = React.createClass({
    render:function(){
        return (
            <div className="inner-container">
                <LogoMenuPrin />
                    <a id="advanced_menu_toggle" href="#" aria-hidden="true" data-av_icon="" className="icon-menu" data-av_iconfont="entypo-fontello"></a>
                <NavMenuPrin /> 
            </div>
            )

    }
});



ReactDOM.render(<MenuTopContainer />, document.getElementById('header_meta')); 
ReactDOM.render(<ContainerMenuPrin />, document.getElementById('containerMenuPrincipal'));  


  