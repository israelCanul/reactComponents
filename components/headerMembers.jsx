var React = require('react');
var ReactDOM = require('react-dom'); 


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
                <nav className="sub_menu" role="navigation" itemScope="itemScope" itemType="https://schema.org/SiteNavigationElement">
                    <ul id="avia2-menu" className="menu">
                        <li id="menu-item-2411" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2411"><a href="https://server.iad.liveperson.net/hc/59361898/?cmd=file&amp;file=visitorWantsToChat&amp;site=59361898&amp;SESSIONVAR!skill=Mexican%20Team&amp;referrer=%27+document.location"><i className="fa-comment-o fa"></i><span className="fontawesome-text"> Live Chat</span></a></li>
                        <li id="menu-item-2579" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2579"><a href="https://membersarea.royalresorts.com/weather-and-webcams-in-cancun-and-riviera-maya/"><i className="fa-video-camera fa"></i><span className="fontawesome-text"> Webcams</span></a></li>
                        <li id="menu-item-2412" className="member-login menu-item menu-item-type-custom menu-item-object-custom menu-item-2412"><a href="https://app.royalresorts.com/"><i className="fa-user fa"></i><span className="fontawesome-text"> Logout</span></a></li>
                        <li id="menu-item-2413" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2413"><a href="http://www.royalresorts.com.mx">Spanish</a></li>
                        <li id="menu-item-2414" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2414"><a href="tel:+18888387842"><i className="fa-phone fa"></i><span className="fontawesome-text"> 1-888-838-7842</span></a></li>

                    </ul>
                </nav>         
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
            <nav className='main_menu' data-selectname='Select a page'  role="navigation" itemScope="itemScope" itemType="https://schema.org/SiteNavigationElement" >
                <div className="avia-menu av-main-nav-wrap">
                    <ul id="avia-menu" className="menu av-main-nav">
                        <li id="menu-item-2416" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-top-level menu-item-top-level-1"><a href="https://membersarea.royalresorts.com/news/" itemProp="url" ><span className="avia-bullet"></span><span className="avia-menu-text">NEWS</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span></a></li>
                        <li id="menu-item-7" className="member-forum-link menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-2"><a href="#" itemProp="url"  target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">MEMBER FORUM</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span></a></li>
                        <li id="menu-item-2826" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-top-level menu-item-top-level-3 dropdown_ul_available"><a href="#" itemProp="url" ><span className="avia-bullet"></span><span className="avia-menu-text">USING MY UNIT</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span><span className="dropdown_available"></span></a>
                            <ul className="sub-menu" >
                                <li id="menu-item-2827" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/using-your-week/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Using your Week</span></a></li>
                                <li id="menu-item-2829" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://app.royalresorts.com/Preregister/staylist.aspx" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Preregistration</span></a></li>
                                <li id="menu-item-2830" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/internal-exchanges/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Internal Exchanges</span></a></li>
                                <li id="menu-item-2831" className="member-update-information agrega-blank menu-item menu-item-type-custom menu-item-object-custom" href="https://my.intervalservicing.com/iscomember/rrsc_login"><a title="loans/contract_select" href="https://my.intervalservicing.com/iscomember/rrsc_login?" itemProp="url" target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">Owner loans</span></a></li>
                                <li id="menu-item-2832" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/rent-my-unit/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Rent My Unit</span></a></li>
                                <li id="menu-item-2833" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="mailto:rrvacations@royalresorts.com" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Get Additional Nights</span></a></li>
                                <li id="menu-item-2834" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/villa-occupancy-limits/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Villa Occupancy limits</span></a></li>
                                <li id="menu-item-2836" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/interval-calendar/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Weekly Interval Calendar</span></a></li>
                                <li id="menu-item-2837" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/royal-resorts-signature-club/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Royal Resorts Signature Club</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-2403" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-top-level menu-item-top-level-4 dropdown_ul_available"><a href="#" itemProp="url" ><span className="avia-bullet"></span><span className="avia-menu-text">CONTRACT &amp; MEMBERSHIP</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span><span className="dropdown_available"></span></a>
                            <ul className="sub-menu" >
                                <li id="menu-item-2405" className="agrega-blank member-update-information menu-item menu-item-type-custom menu-item-object-custom" href="https://my.intervalservicing.com/iscomember/rrsc_login"><a title="iscomember/membership_contract" href="https://my.intervalservicing.com/iscomember/rrsc_login?" itemProp="url" target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">Request a Replacement Contract</span></a></li>
                                <li id="menu-item-2406" className="agrega-blank member-update-information menu-item menu-item-type-custom menu-item-object-custom" href="https://my.intervalservicing.com/iscomember/rrsc_login"><a title="iscomember/membership_contract" href="https://my.intervalservicing.com/iscomember/rrsc_login?" itemProp="url" target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">Request a Membership Card</span></a></li>
                                <li id="menu-item-2407" className="agrega-blank member-update-information menu-item menu-item-type-custom menu-item-object-custom" href="https://my.intervalservicing.com/iscomember/rrsc_login"><a title="iscomember/membership_contract" href="https://my.intervalservicing.com/iscomember/rrsc_login?" itemProp="url" target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">Request a Title Change</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-2839" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-top-level menu-item-top-level-5 dropdown_ul_available"><a href="#" itemProp="url" ><span className="avia-bullet"></span><span className="avia-menu-text">ADVISORY COUNCIL</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span><span className="dropdown_available"></span></a>
                            <ul className="sub-menu" >
                                <li id="menu-item-2841" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/advisory-council-members-and-terms/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Members and Terms</span></a></li>
                                <li id="menu-item-2840" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/advisory-council-meeting-reports/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Meeting Reports</span></a></li>
                                <li id="menu-item-2842" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/making-your-application/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Making your Application</span></a></li>
                            </ul>
                        </li>                        
                        <li id="menu-item-2397" className="child_menu_bookin active menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-top-level menu-item-top-level-4"><a href="http://#" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">PAYMENTS</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span></a>
                            <ul className="sub-menu">
                                <li id="menu-item-2418" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/club-service-fee/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">My Club Service Fee Covers</span></a></li>
                                <li id="menu-item-2419" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://membersarea.royalresorts.com/club-service-fees-for-2016/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">Club Service Fees for 2016</span></a></li>
                                <li id="menu-item-2398" className="agrega-blank member-update-information menu-item menu-item-type-custom menu-item-object-custom" href="https://my.intervalservicing.com/iscomember/rrsc_login"><a title="iscomember_iscopay_blnc" href="https://my.intervalservicing.com/iscomember/rrsc_login?" itemProp="url" target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">Request Balance</span></a></li>
                                <li id="menu-item-2399" className="agrega-blank member-update-information menu-item menu-item-type-custom menu-item-object-custom" href="https://my.intervalservicing.com/iscomember/rrsc_login"><a title="iscomember_iscopay_blnc" href="https://my.intervalservicing.com/iscomember/rrsc_login?" itemProp="url" target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">Pay your Club Service Fee Online</span></a></li>
                                <li id="menu-item-2400" className="agrega-blank member-update-information menu-item menu-item-type-custom menu-item-object-custom" href="https://my.intervalservicing.com/iscomember/rrsc_login"><a title="iscomember_iscopay_blnc" href="https://my.intervalservicing.com/iscomember/rrsc_login?" itemProp="url" target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">Make payments using your Royal Resorts Rewards</span></a></li>
                                <li id="menu-item-2401" className="agrega-blank menu-item menu-item-type-custom menu-item-object-custom"><a href="http://www2.intervalservicing.com/index.php/csfescrow" itemProp="url" target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">Create your Easy CSF deposit plan</span></a></li>
                                <li id="menu-item-2402" className="agrega-blank member-update-information menu-item menu-item-type-custom menu-item-object-custom" href="https://my.intervalservicing.com/iscomember/rrsc_login"><a title="iscomember_iscopay_blnc" href="https://my.intervalservicing.com/iscomember/rrsc_login?" itemProp="url" target="_blank"><span className="avia-bullet"></span><span className="avia-menu-text">Request Copy of Bill</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-2417" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-top-level menu-item-top-level-5"><a href="https://membersarea.royalresorts.com/faq/" itemProp="url"><span className="avia-bullet"></span><span className="avia-menu-text">FAQ&#8217;s</span><span className="avia-menu-fx"><span className="avia-arrow-wrap"><span className="avia-arrow"></span></span></span></a></li>
                        
                    </ul>
                </div>
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







