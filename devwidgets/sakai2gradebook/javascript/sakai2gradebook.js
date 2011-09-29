
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

/*
 * Dependencies
 *
 * /dev/lib/misc/trimpath.template.js (TrimpathTemplates)
 */

require(["jquery", "sakai/sakai.api.core", "sakai/sakai.api.widgets"], function($, sakai, sakaiWidgetsAPI) {

    /**
     * @name sakai_global.basiclti
     *
     * @class basiclti
     *
     * @description
     * Basiclti widget
     *
     * @version 0.0.1
     * @param {String} tuid Unique id of the widget
     * @param {Boolean} showSettings Show the settings of the widget or not
     */
    sakai_global.sakai2gradebook = function(tuid, showSettings){


        /////////////////////////////
        // Configuration variables //
        /////////////////////////////

        var rootel = $("#" + tuid);
        var json = false;

        // Default values
        var defaultWidth = 100;
        var defaultWidthUnit = "%";
        var defaultHeight = 200;

        // Links and labels
        var basiclti = "#basiclti";
        var basicltiSettings = basiclti + "_settings";
        var basicltiSettingsCancel = basicltiSettings + "_cancel";        
        var basicltiSettingsInsert = basicltiSettings + "_insert";
        var basicltiSettingsPreviewId = tuid + "_frame";
        var basicltiSettingsPreviewFrame = "#" + basicltiSettingsPreviewId;
        var basicltiSettingsLtiKey = basicltiSettings + "_ltikey";
        var basicltiSettingsLtiSecret = basicltiSettings + "_ltisecret";

        // Containers
        var basicltiMainContainer = basiclti + "_main_container";

        // Classes

        // Templates
        var $basicltiSettingsPreviewTemplate = $("#basiclti_settings_preview_template", rootel);

        // see: http://www.ietf.org/rfc/rfc2396.txt Appendix B
        var urlRegExp = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");

        ///////////////////////
        // Utility functions //
        ///////////////////////

        /**
         * Check if the value is a decimal or not
         * @param {Object} value Value that needs to be checked
         * @return {Boolean}
         *     true: is a decimal
         *     false: is not a decimal
         */
        var isDecimal = function(value){
            return (/^\d+$/).test(value);
        };

        /**
         * Check if the input url is in fact an url or not
         * @param {String} url Url that needs to be tested
         * @return {Boolean}
         *     true: is an url
         *     false: is not an url
         */
        var isUrl = function(url){
            var matches = urlRegExp.exec(url);
            // e.g. if("http:" && "localhost")
            if(matches[1] && matches[4]) {
                return true;
            } else {
                return false;
            }
        };

        /**
         * Check to see if both URLs are in the same origin. See: http://en.wikipedia.org/wiki/Same_origin_policy.
         * @param {String} url1
         * @param {String} url2
         * @return {Boolean}
         *     true: in the same origin policy
         *     false: NOT in the same origin policy
         */
        var isSameOriginPolicy = function(url1, url2){
            if(url1 == url2) {
                return true;
            }
            // i.e. protocol, domain (and optional port numbers) must match
            if((urlRegExp.exec(url1)[2] == urlRegExp.exec(url2)[2]) &&
               (urlRegExp.exec(url1)[4] == urlRegExp.exec(url2)[4])){
                return true;
            } else {
                return false;
            }
        };

        /**
         * Called when the data has been saved to the JCR.
         */
        var savedDataToJCR = function(success, data){
            displayRemoteContent(data);
            sakai.api.Widgets.Container.informFinish(tuid, "sakai2gradebook");
        };

        //////////////////////
        // Render functions //
        //////////////////////

        /**
         * Render the iframe for the widget
         */
        var renderIframe = function(){
            if (json) {
                json.tuidFrame = basicltiSettingsPreviewId;
                $(basicltiMainContainer, rootel).html(sakai.api.Util.TemplateRenderer($basicltiSettingsPreviewTemplate, json));
                json.launchDataUrl = sakaiWidgetsAPI.widgetLoader.widgets[tuid].placement + ".launch.html";
                $("#" + json.tuidFrame).attr("src", json.launchDataUrl);

                // resize the iframe to match inner body height if in the same origin (i.e. same protocol/domain/port)
                if(isSameOriginPolicy(window.location.href, json.ltiurl)) {
                    $(basicltiSettingsPreviewFrame).load(function() {
                        $(this).height($(this).contents().find("body").height() + 15); // add 10px for IE and 5px more for Gradebook weirdness
                    });
                }

                // SAKIII-314 We need to show the container, otherwise the second item won't be shown.
                $(basicltiMainContainer, rootel).show();
            }
        };


        //////////////////////
        // Global functions //
        //////////////////////

        /**
         * Display the iframe in normal mode
         * @param {Object} parameters JSON object that contains the necessary information for the iframe
         */
        var displayRemoteContent = function(parameters){
            // default to some reasonable vaules if the settings node does not have them (maybe a legacy node)
            if (parameters.border_size === null) {
                parameters.border_size = 0;
            }
            if (parameters.border_color === null) {
                parameters.border_color = "cccccc";
            }
            if (parameters.width === null) {
                parameters.width = defaultWidth;
            }
            if (parameters.width_unit === null) {
                parameters.width_unit = defaultWidthUnit;
            }
            if (parameters.frame_height === null) {
                parameters.frame_height = defaultHeight;
            }
            json = parameters;
            renderIframe();
        };

        /**
         * Save the basiclti to the jcr
         */
        var saveRemoteContent = function(){
            var  saveContentAjax = function(json_data) {
                var url = sakaiWidgetsAPI.widgetLoader.widgets[tuid].placement;
                $.ajax({
                    type: "POST",
                    url: url,
                    data: json,
                    success: function(data) { 
                        savedDataToJCR(true, data); 
                    }
                }); 
                // Because we need to use a particular servlet (LiteBasicLTI), and it
                // requires some different options, we make our own ajax call above
                // instead of using saveWidgetData for now.
                // 
                //sakai.api.Widgets.saveWidgetData(tuid, json, savedDataToJCR);                
            };


            json["lti_virtual_tool_id"] = "sakai.gradebook.tool";
            json[":operation"] = "basiclti";
            json["sling:resourceType"] = "sakai/basiclti";
            json.ltikey = $(basicltiSettingsLtiKey).val() || "";
            json.ltisecret = $(basicltiSettingsLtiSecret).val() || "";
            json["debug@TypeHint"] = "Boolean";
            json.debug = $('#basiclti_settings_debug:checked').val() !== null;
            json["release_names@TypeHint"] = "Boolean";
            json.release_names = $('#basiclti_settings_release_names:checked').val() !== null;
            json["release_principal_name@TypeHint"] = "Boolean";
            json.release_principal_name = $('#basiclti_settings_release_principal_name:checked').val() !== null;
            json["release_email@TypeHint"] = "Boolean";
            json.release_email = $('#basiclti_settings_release_email:checked').val() !== null;
            json.launchDataUrl = ""; // does not need to be persisted
            json.tuidFrame = ""; // does not need to be persisted
            json.defined = ""; // what the heck is this? Where does it come from?
            json._MODIFIERS = null; // trimpath garbage - probably need a more selective way of saving data

            saveContentAjax(json);
        };


        //////////////
        // Bindings //
        //////////////

        /*
         * Add binding to all the elements
         */
        var addBinding = function(){
            // When you push the save button..
            $(basicltiSettingsInsert).click(function(){
                saveRemoteContent();
            });

            // Cancel it
            $(basicltiSettingsCancel).click(function(){
                sakai.api.Widgets.Container.informCancel(tuid, "sakai2gradebook");
            });
        }

        ///////////////////////
        // Initial functions //
        ///////////////////////

        /**
         * Function that fills in the input fields in the settings tab.
         * @param {Object} parameters A JSON object that contains the necessary information.
         * @param {Boolean} exists Does there exist a previous basiclti
         */
        var displaySettings = function(parameters, exists){
            if (exists && parameters.ltiurl) {
                json = parameters;
            }
            else { // use default values
                json = {
                    ltiurl: "",
                    ltikey: "",
                    ltisecret: "",
                    release_names: true,
                    release_principal_name: true,
                    release_email: true,
                    border_size: 0,
                    border_color: "cccccc",
                    frame_height: defaultHeight,
                    width: defaultWidth,
                    width_unit: defaultWidthUnit,
                    lti_virtual_tool_id: "sakai.gradebook.tool",
                    isSakai2Tool: true
                };
            }
            //saveRemoteContent();
            //renderRemoteContentSettings();
            //renderIframeSettings(true); // LDS disabled preview
            //renderColorContainer();
            addBinding(); // Add binding to the various elements
            //changeAdvancedSettingsArrow();
            //$(basicltiSettings).show(); // Show the basiclti settings
        };

        /*
         * Is the widget in settings mode or not
         */
        if (showSettings) {
            $(basicltiMainContainer).hide();
            $(basicltiSettings).show();
        }
        else {
            $(basicltiSettings).hide();
            $(basicltiMainContainer).show();
        }

        /**
         * Will fetch the URL and other parameters from the JCR and according to which
         * view we are in, fill in the settings or display an iframe.
         */
        var getRemoteContent = function() {
            // We make our own call below at the moment. Unlike most of the widgets
            // we need to interact directly with the LiteBasicLTI servlet. It's 
            // also not a recursive servlet so we can't use the default .infinity.json
            // that is used under the covers for most of the calls.
            var url = sakaiWidgetsAPI.widgetLoader.widgets[tuid].placement;
            $.ajax({
                type: "GET",
                url: url,
                dataType: 'json',
                success: function(data) {
                    if (showSettings) {
                        displaySettings(data,true);
                    }
                    else {
                        displayRemoteContent(data);
                    } 
                },
                error: function(xhr, status, e) {
                    displaySettings(null, false);
                }
            });
        };

        getRemoteContent();
    };

    sakai.api.Widgets.widgetLoader.informOnLoad("sakai2gradebook");
});
