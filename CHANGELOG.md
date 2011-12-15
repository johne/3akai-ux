rSmart 3akai-ux Changelog
=========================

acad-1.0.2-M4-20111208
----------------------

* ACAD-137 & ACAD-141 changes to reflect rSmart branding 07c9852
* ACAD-260: block public access to user world memberships & contacts d04f57f
* ACAD-257: making all user profile areas public by default e9fc232
* ACAD-269 fixed path to images by preventing URL encoding where it is not necessary c02a109
* SAKIII-4417 Make all iframes the same size when embedding them in a document, for internal and external HTMl files (cherry picked from com
* SAKIII-4417 Make all iframes the same size when embedding them in a document, for internal and external HTMl files 631b0bf

acad-1.0.2-M3-20111202
----------------------

* NOJIRA rev version number for release f3f2ea6
* ACAD-138: restrucutre user profiles for sense/privacy 7077f4a
* ACAD-45 s/rSmart LL/rSmart Academic/ b38c05a
* ACAD-45 Change Sakai Goodies -> rSmart LL Goodies. 9b19f9f
* ACAD-45 Convert more Sakai references to rSmart. 829ac09
* ACAD-45 Change Sakai OAE to rSmart LL. This change text in the browser title and welcome screen. 3e3c28f
* ACAD-242 Assignments LTI widget does not launch 2cc527b
* ACAD-167 added link to reset password stuff (cherry picked from commit f5605071b16e5a1bdba82e27ba61d138c90d189b) 2970bed
* fixing EOL 80d1f69
* completed alignment of user reg page to rSmart branding for ACAD-57" 322ff70
* fixing EOL cee2426
* first attempt at reworking profile structure 18a0716
* start of work on ACAD-57 to match user reg to rSmart branding dec767d

acad-1.0.2-M2-20111116
----------------------

* NOJIRA change version number for tag acad-1.0.2-M2-20111116 ee6fbcb
* fixing EOL issue 9a75e6c
* painting custom Help button in top toolbar leading to GetSat 5fe08f2
* fixing EOL issues once and for all 92ce6b4
* fixing EOL issues 88cb9a1
* ACAD-168 imported changes to Ui to support move of tagging to sparse ddb5b9f
* fixes for ACAD-46: ensuring system emails refer to global PLATFORM_SHORT var eb99d85
* SAKIII-4216 - OAE doesn't work in compatibility mode (cherry picked from commit c380c5449d182d4d5c06188f0eda31efe0d234d3) d8109d6
* ACAD-110 Switch GetSatisfaction over to REAL GS product (i.e. not test product) 59b44ae
* SAKIII-4206 - Fixing missing space (cherry picked from commit 54004edf8b5e76f9633345609f906c7159d5e3be) fee39d7
* SAKIII-4206 - Math equations don't render in the discussion widget (cherry picked from commit 983d5aecca855e6652287402acf113b08844401e) a2
* NOJIRA Added CHANGELOG 23639cb

acad-1.0.2-M1-20111024
----------------------

* updating version number for 1.0.2 release eb34ea3
* ACAD-56 hardcoded override of tool's json parameter 'frame_height' to 800px a457a09
* OAE-84 Rename unloader artifact to: com.rsmart.nakamura.uxloader f7ffd60
* OAE-51 added fix from Bert Pareyn's pull request on github.com/sakaiproject (b08d76ab4b277057a7206393818c989b3257a6d3) a744400
* OAE-70 added .json extension to AJAX calls 304e1ff
* changing version number for release bfd9ac0
* SAKIII-4098 Changing tool to page to match Sakai 2 parlance (and in case we need to pass in actual tool id's in the future. 5d33453
* SAKIII-4086 - Clicking my name should go to my dashboard 5d83f38
* NOJIRA - Adding missing translation 68098b4
* SAKIII-4084 implement maven-license-plugin, add/update .css and .js headers 1174032
* SAKIII-4063 - Removal of user from all sites causes errors in My Sakai2 Favourites widget ee43103
* SAKIII-3710 - Provide text alternatives for any non-text content 98c7afd
* SAKIII-3093 - Gritter messages are invisible to a screen reader 8e75ce7
* SAKIII-4001 Fix malformed HTML in template b4416ab
* SAKIII-3710 reverted from getPossessive function dca7043
* SAKIII-3710 reverted from getPossessive function 3f64785
* SAKIII-4047 - No Handling for when CLE is down 605ea9e
* SAKIII-4043 - Links from the My Sakai 2 sites page go to main portal SAKIII-4042 - Improve styling of My Sakai 2 sites page SAKIII-4041 - Add My Sakai 2 sites to You menu SAKIII-4040 - Move My Sakai 2 sites to personal space d4ed0f9
* SAKIII-4056 - Browser history does no longer work on s23site SAKIII-4060 - Provide clean URL for Sakai 2 sites 987f214
* SAKIII-4045 - Sites included in Sakai 2 favorites - positioning is off 03ca3b7
* SAKIII-4038 - Change "No favorites" style to match other default messages SAKIII-4039 - Sakai 2 favorites bottom links should have divider SAKIII-4046 - Switching from no sites to sites breaks appearance acc5da5
* SAKIII-4026 - My Sakai 2 favourites is not on dashboard by default for new users b753683
* SAKIII-4028 - Creating a new user in OAE automatically is associated with CLE user. CLE pages do not display 06ab928
* SAKIII-3661 changes to topnav keyboard accessibility ea658b5
* SAKIII-4057 Ask for a million discussion posts ce429be
* NOJIRA - Some cleanup c4a7fb7
* SAKIII-4055 - s23site doesn't show site title in browser title bar SAKIII-4044 - Styling issue with top of s23site page cac8a32
* SAKIII-3710 remove title attributes from acknowledgements page f078206
* SAKIII-3710 fix failure in wcag unit test 81181b0
* SAKIII-3710 fix remaining wcag unit test failures 4faff17
* SAKIII-3710 changes per code review 8772308
* SAKIII-3710 change to wcag unit test 562d96e
* SAKIII-3710 changes per code review 0d1168a
* SAKIII-3710 removing unneccessary title attributes acc52ba
* SAKIII-3710 removing unneccessary title attributes 50b53fd
* SAKIII-3710 removing unneccessary title attributes 4bfdd14
* SAKIII-3710 adjust wcag unit test c85dda0
* SAKIII-3840 add title to textareas b8a3da0
* SAKIII-3710 adding link title to wcag unit test and added title to links c1cee9c
* SAKIII-3710 added title attribute to buttons ed4f9dd
* SAKIII-3710 check button tags in wcag unit test 1e11e01
* SAKIII-3710 checking templates in wcag unit test and fixing some failures f9370af
* SAKIII-3709 checking templates in wcag unit test and fixing some failures edc692d
* SAKIII-3905 Increased left pane font (from s3d-link-button) to match other panes. Removed zebra striping in middle pane.  Moved x buttons to right side in right pane. Fixed an event issue where the same class was binding the event to more elements than it should have been (resulting in removing random entries). 32dcbb6
* SAKIII-4001 - Make it possible for the category hierarchy to have multiple sections d8d9832
* SAKIII-3173 - Embed files in a Sakai document 02d142d
* SAKIII-3985 - Add pagination to the participants widget 5ec4ae7
* SAKIII-3905 Updated more dialog styles and removed some markup not needed anymore. 4084627
* SAKIII-3963 Some cleanup * Fixed some jshint errors * Replaced a `href="#"` with the URL it should point to (the user's profile) 58ea27a
* SAKIII-3963 Check for a pre-parsed picture in constructProfilePicture ea97ecb
* SAKIII-3981 - Pass on redirect parameter to SSO login page dde5557
* SAKIII-3985 Fix the items parameter 520a934
* SAKIII-3985 Add pagination to the participants widget * Adds in data caching for group/role functions in sakai.api.groups.js to prevent massive amounts of requests from firing * Added A-Z and Z-A sorting for the participants widget (was in the NYU fork of it, so I figured it could be useful) ec7905c
* SAKIII-3911 Adding infinity option to sakai.api.widgets.loadWidgetData and using that in blti based widgets. Also using sakai.api.widget namespace for calling library functions rather than passing it in through js require. d7b4dfa
* SAKIIII-3905 Setting removeTree option on saveJSON to true, and removing previous hack for saving empty lists. efd76c0
* SAKIII-3911 Adding .json that got fixed in the basiclti widget but not moved to the sakai2tools widget. b32c7f3
* SAKIII-3845 Removing size settings for Sakai 2 Tools since they self adjust thier size. Fixing populating the tool type on the settings dialog. 5534f2b
* SAKIII-3846 Adding rootel's to all the selectors 77f15cc
* SAKIII-3844 Updating styles and some markup. acf820a
* updating version number to 1.1-SNAPSHOT fec33bb
* changing version number for release aca3ab5
* Try up to 10 times to apply ThreeDots before giving up if the element still has a height of zero. 79b4734
* SAKIII-3981 - Pass on redirect parameter to SSO login page 71a7d32
* SAKIII-4001 - Removing divider example 4f93419
* NOJIRA Fix issue where the user's name would be occasionally truncated to the first letter. 6ba08c4
* SAKIII-4001 - Make it possible for the category hierarchy to have multiple sections 41f1582
* SAKIII-3906 Updating icon to say Sakai 2 Tool rather than Remote Content since its not a straight BLTI widget. 11672b5
* NOJIRA - Leave a gap of 1 cb951b6
* NOJIRA - Allowing dividers inside of categories 38021ba
* NOJIRA - Adding link to idea suggest page to footer 22fa84d
* KERN-2151 change hardcoded localhosts to relative urls 4788893
* SAKIII-3910 making add new content widget keyboard accessible e515d0f
* SAKIII-3680 - Description and tags inline-edit fields overflow yellow background f544bdb
* SAKIII-3739 fix bug with lists in tinymce editor 37f3c54
* SAKIII-3903 detect when user tabs out of last menu item and close menu 2677158
* SAKIII-3720 - Tab Order and Source Order Location... cf160f3
* SAKIII-3838 - Search results are not coded as a list (add no results message as list item as well) b1bbb62
* SAKIII-3836 add tinymce language packs bad6bc0
* SAKIII-3098 fixing issue where menus would reopen when they shouldnt 25850d6
* SAKIII-3098 add binding for arrow key navigation for lhnav ed82ab0
* SAKIII-3098 fixing issue with lhnav keyboard navigation 72dbbf1
* SAKIII-3098 fixing issue with lhnav keyboard navigation d02e4a9
* SAKIII-3098 fixing issue with lhnav keyboard navigation 65106c9
* SAKIII-3723 - Inbox link on top navigation bar doesn't make sense to non-visual users, prefixed css with s3d de13d77
* SAKIII-3723 - Inbox link on top navigation bar doesn't make sense to non-visual users, prefixed css with f1c848a
* SAKIII-3723 - Inbox link on top navigation bar doesn't make sense to non-visual users, moved css 90a73c3
* SAKIII-3723 - Inbox link on top navigation bar doesn't make sense to non-visual users, add comments f981b91
* SAKIII-3723 - Inbox link on top navigation bar doesn't make sense to non-visual users 22b0f74
* SAKIII-3838 Search results are not coded as a list 2a84164
* SAKIII-3835 setting language attribute for html tag b795a89
* SAKIII-3098 making lhnav sub menus accessible by keyboard dc3cf81
* SAKIII-3346 hide search results when navigating away from search field e19bedf
* SAKIII-3661 fix top naivgation hovering on signin page 8129b96
* SAKIII-3661 fix css issue when switching to mouse 73038ea
* SAKIII-3661 fix css issue when switching to mouse e2aa0e8
* SAKIII-3661 improving tab order and keyboard navigation with arrow keys in topnavigation db05a1c
* SAKIII-3680 modify background colour when editing copyright field 284c6b2
* SAKIII-3661 add arrow key bindings to top navigation 564af91
* SAKIII-3661 remove focus of menu item if mouse is used 9fc2bd5
* SAKIII-3680 remove hover background colour when editing 864ff5f
* SAKIII-3680 make textarea background the same colour as edit area 32a0a95
* SAKIII-3661 work on topnavigation widget 0adbad0
* SAKIII-3661 work on topnavigation widget bd6f397
* SAKIII-3661 some work on keyboard nav for topnavigation 7fc3a35
* SAKIII-3661 some work on making topnavigation keyboard friendly d6d572d
* SAKIII-3095 making profile required field error messages configurable 69b3e06
* SAKIII-3093 add aria-live attribute to dynamic pages 065e5e1

oae-v1.0.0-M4-20111006
----------------------

* skinning rSmart gateway & footer & changing the favicon to skippy 4dcc380
* OAE-61 removed check for same origin; simply resizing content height since we know it is a specific CLE tool from our configured source 108e0c2
* OAE-32 revised LTI params to adjust for virtual tool changes f3276ec
* OAE-60 Move GetSatisfaction widget to bottom of screen fa0ee4a
* OAE-55 removed debug flag whose javascript always evaluated to true due to logic error 7337851
* OAE-54 disabled Sakai 2 Tools ad00ef6
* OAE-32 switched toolId to use GB2 instead of GB 1ec0753
* changing name of 1 top-level category & realphabetizing to better match academic terminology c02e832

oae-v1.0.0-M3-20111004
----------------------

* OAE-48 be0ab12
* OAE-47,OAE-23 Fixed javascript for AutoSuggest.setup - it had contained undefined references from erroneous copy/paste beb071c
* OAE-48 Deploy rSmart Categories 69edea9
* OAE-32 added revision to text request by Nate. 1f8fc2e
* OAE-17 implemented changes to contact preferences 8832faa
* OAE-32 revised text for settings pages. b2a9768
* OAE-18 9c764ad
* OAE-32 72b4731
* OAE-23 renamed resource files 037cca0
* OAE-23 added version of sakai2calendar based upon sakai repo's version of sakai2tools 241421c
* OAE-23 3310f66
* OAE-32 Create discrete widgets for CLE tools - inital commit; copied from sakai2tools widget 338b31e

oae-v1.0.0-M2-20110927
----------------------

* OAE-23 b05fb34
* OAE-23 abd3c21
* Define the path to jquery in each html file before requiring it, as sakai.dependencies.js isn't guaranteed to have finished before the require() statement loads. 911fe30

oae-v1.0.0-M1-20110921
----------------------

* Embed the Get Satisfaction widget code and fix its bindings 46fd0f3
* OAE-3 376772e
* OAE-3 3aaf0ed
* OAE-3 7c0d56d
* NOJIRA Enable Sakai 2 Tools widget df8a58f
* NOJIRA Enable BasicLTI widget 58aa118
* OAE-3 a47332b
* OAE-3 35c9a7d
* OAE-3 7d2663f
* OAE-3 22bf783
* OAE-3 eebda92

