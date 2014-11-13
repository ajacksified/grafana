/*! grafana - v1.6.1 - 2014-06-24
 * Copyright (c) 2014 Torkel Ödegaard; Licensed Apache License */

require.config({baseUrl:"app",paths:{config:["../config","../config.sample"],settings:"components/settings",kbn:"components/kbn",css:"../vendor/require/css",text:"../vendor/require/text",moment:"../vendor/moment",filesaver:"../vendor/filesaver",angular:"../vendor/angular/angular","angular-dragdrop":"../vendor/angular/angular-dragdrop","angular-strap":"../vendor/angular/angular-strap","angular-sanitize":"../vendor/angular/angular-sanitize",timepicker:"../vendor/angular/timepicker",datepicker:"../vendor/angular/datepicker",bindonce:"../vendor/angular/bindonce",crypto:"../vendor/crypto.min",spectrum:"../vendor/spectrum",underscore:"components/underscore.extended","underscore-src":"../vendor/underscore",bootstrap:"../vendor/bootstrap/bootstrap",jquery:"../vendor/jquery/jquery-1.8.0","jquery-ui":"../vendor/jquery/jquery-ui-1.10.3","extend-jquery":"components/extend-jquery","jquery.flot":"../vendor/jquery/jquery.flot","jquery.flot.pie":"../vendor/jquery/jquery.flot.pie","jquery.flot.events":"../vendor/jquery/jquery.flot.events","jquery.flot.selection":"../vendor/jquery/jquery.flot.selection","jquery.flot.stack":"../vendor/jquery/jquery.flot.stack","jquery.flot.stackpercent":"../vendor/jquery/jquery.flot.stackpercent","jquery.flot.time":"../vendor/jquery/jquery.flot.time","jquery.flot.byte":"../vendor/jquery/jquery.flot.byte",modernizr:"../vendor/modernizr-2.6.1",elasticjs:"../vendor/elasticjs/elastic-angular-client","bootstrap-tagsinput":"../vendor/tagsinput/bootstrap-tagsinput"},shim:{underscore:{exports:"_"},spectrum:{deps:["jquery"]},crypto:{exports:"Crypto"},angular:{deps:["jquery","config"],exports:"angular"},bootstrap:{deps:["jquery"]},modernizr:{exports:"Modernizr"},jquery:{exports:"jQuery"},"jquery-ui":["jquery"],"jquery.flot":["jquery"],"jquery.flot.byte":["jquery","jquery.flot"],"jquery.flot.pie":["jquery","jquery.flot"],"jquery.flot.events":["jquery","jquery.flot"],"jquery.flot.selection":["jquery","jquery.flot"],"jquery.flot.stack":["jquery","jquery.flot"],"jquery.flot.stackpercent":["jquery","jquery.flot"],"jquery.flot.time":["jquery","jquery.flot"],"angular-sanitize":["angular"],"angular-cookies":["angular"],"angular-dragdrop":["jquery","jquery-ui","angular"],"angular-loader":["angular"],"angular-mocks":["angular"],"angular-resource":["angular"],"angular-route":["angular"],"angular-touch":["angular"],bindonce:["angular"],"angular-strap":["angular","bootstrap","timepicker","datepicker"],timepicker:["jquery","bootstrap"],datepicker:["jquery","bootstrap"],elasticjs:["angular","../vendor/elasticjs/elastic"],"bootstrap-tagsinput":["jquery"]},waitSeconds:60});