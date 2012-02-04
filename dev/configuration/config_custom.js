/*
 * Licensed to the Sakai Foundation (SF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The SF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
define(["config/config"], function(config) {

    // Custom CSS Files to load in
    config.skinCSS = ["/dev/skins/default/skin.css", "/dev/skins/rsmart/skin.css"];
    config.displayTimezone = true;
    config.displayLanguage = true;

    /**
    * Change this variable to modify what widget is shown on each user's
    * default dashboard page
    */
    var carouselWidget = 'carousel';

    config.defaultprivstructure["${refid}0"] = {
        "page": "<div class='fl-force-right'><button type='button' class='s3d-button s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_change_layout' data-tuid='${refid}5'>__MSG__EDIT_LAYOUT__</button><button type='button' class='s3d-button s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_global_add_widget' data-tuid='${refid}5'>__MSG__ADD_WIDGET__</button></div><div class='s3d-contentpage-title'>__MSG__MY_DASHBOARD__</div><div id='widget_" + carouselWidget + "' class='widget_inline'\></div><br/><div id='widget_dashboard_${refid}5' class='widget_inline'></div>"
    };

    /**
     * Example of overriding the default widget on the top of the user's
     * dashboard with the remotecontent widget
     * The tricky part here is we need to set the data for the widget, which
     * is why the widget is the id + a refid, and there is another refid
     * line below to set the widget's data
     */
    // var carouselWidget = 'remotecontent_${refid}6';
    // config.defaultprivstructure["${refid}0"] = {
    //     "page": "<div class='fl-force-right'><button type='button' class='s3d-button s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_change_layout' data-tuid='${refid}5'>__MSG__EDIT_LAYOUT__</button><button type='button' class='s3d-button s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_global_add_widget' data-tuid='${refid}5'>__MSG__ADD_WIDGET__</button></div><div class='s3d-contentpage-title'>__MSG__MY_DASHBOARD__</div><div id='widget_" + carouselWidget + "' class='widget_inline'\></div><br/><div id='widget_dashboard_${refid}5' class='widget_inline'></div>"
    // };
    //
    // config.defaultprivstructure["${refid}6"] = {
    //     "remotecontent": {
    //         "border_color": "ffffff",
    //         "border_size": 0,
    //         "height": "400",
    //         "url": "http://rsmart.com",
    //         "width": "100",
    //         "width_unit": "%"
    //     }
    // };

    /**
     * Kaltura Settings
     */
    config.kaltura = {
        enabled: false, // Enable/disable Kaltura player
        serverURL:  "http://www.kaltura.com", //INSERT_KALTURA_INSTALLATION_URL_HERE
        partnerId:  100, //INSERT_YOUR_PARTNER_ID_HERE
        playerId: 100 //INSERT_YOUR_PLAYER_ID_HERE
    };

    return config;
});
