(function() {
	'use strict';

	/**
	 * Authentication Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.commons.authentication.channel', ['ngDrupal7Services-3_x.commons.baseChannel', 'ngDrupal7Services-3_x.commons.authentication.channelConstant'])
		   .factory('AuthenticationChannel', AuthenticationChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	AuthenticationChannel.$inject = [ 'BaseChannel', 'AuthenticationChannelConstant' ];
	
	/**
	 * Notification channel for authentication service 
	 **/
	/** @ngInject */
	function AuthenticationChannel(BaseChannel, AuthenticationChannelConstant) {
	
		//setup and return service            	
        var authenticationChannelService = {
        		
    		//Authentication login request
    		pubAuthenticationLoginConfirmed 	: pubAuthenticationLoginConfirmed,
    		subAuthenticationLoginConfirmed		: subAuthenticationLoginConfirmed,
    		pubAuthenticationLoginFailed 		: pubAuthenticationLoginFailed,
    		subAuthenticationLoginFailed		: subAuthenticationLoginFailed,	
        		
        	// Connection state updated
    		pubAuthenticationConnectionStateUpdated 	: pubAuthenticationConnectionStateUpdated,
    		subAuthenticationConnectionStateUpdated		: subAuthenticationConnectionStateUpdated,
    		
    		// Current user updated
    		pubAuthenticationCurrentUserUpdated		: pubAuthenticationCurrentUserUpdated,
    		subAuthenticationCurrentUserUpdated		: subAuthenticationCurrentUserUpdated,
        };
        
        return authenticationChannelService;

        ////////////
        
        //Authentication login request functions
        
        /**
		 * pubAuthenticationLoginConfirmed
		 * 
		 * Publish the AuthenticationLoginConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubAuthenticationLoginConfirmed(args) {
    		var args = {loginionState: args};
    		 
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.user_loginConfirmed, args);
    	};
    	
    	 /**
		 * subAuthenticationLoginConfirmed
		 * 
		 * subscribe for the AuthenticationLoginConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subAuthenticationLoginConfirmed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationLoginConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subAuthenticationLoginConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.user_loginConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubAuthenticationLoginFailed
		 * 
		 * Publish the AuthenticationLoginConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubAuthenticationLoginFailed(args) {
    		var args = {errors: args};
    		
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.user_loginFailed, args);
    	};
    	
    	/**
		 * subAuthenticationLoginFailed
		 * 
		 * subscribe for the AuthenticationLoginFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subAuthenticationLoginFailed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationLoginFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subAuthenticationLoginFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.user_loginFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//Authentication logout request functions

    	/**
    	 * pubAuthenticationLogoutConfirmed
    	 * 
    	 * Publish the AuthenticationLogoutConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubAuthenticationLogoutConfirmed(args) {
    		var args = args;
    		console.log('channel pubAuthenticationLogoutConfirmed'); 
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.user_logoutConfirmed, args);
    	};

    	/**
    	 * subAuthenticationLogoutConfirmed
    	 * 
    	 * subscribe for the AuthenticationLogoutConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subAuthenticationLogoutConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for AuthenticationLogoutConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subAuthenticationLogoutConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.user_logoutConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubAuthenticationLogoutFailed
    	 * 
    	 * Publish the AuthenticationLogoutConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubAuthenticationLogoutFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubAuthenticationLogoutFailed'); 
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.user_logoutFailed, args);
    	};

    	/**
    	 * subAuthenticationLogoutFailed
    	 * 
    	 * subscribe for the AuthenticationLogoutFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subAuthenticationLogoutFailed function
    	 * @param 	{function} scopeHandler The callback handler for AuthenticationLogoutFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subAuthenticationLogoutFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_logoutFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//__________________________________________________________________________________________________________________________________________
    	
        
        /**
		 * pubAuthenticationConnectionStateUpdated
		 * 
		 * Publish the ConnectionStateUpdated updated event with given args
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubAuthenticationConnectionStateUpdated(args) {
    		var args = {state: args};
    		
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.authentication_connectionStateUpdated, args);
    	};
    	
    	 /**
		 * subAuthenticationConnectionStateUpdated
		 * 
		 * subscribe for the ConnectionStateUpdated event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subAuthenticationConnectConfirmed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationConnectConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subAuthenticationConnectionStateUpdated(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.authentication_connectionStateUpdated, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubAuthenticationCurrentUserUpdated
		 * 
		 * Publish the CurrentUserUpdated event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubAuthenticationCurrentUserUpdated(args) {
    		var args = {user: args};

    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.authentication_currentUserUpdated, args);
    	};
    	
    	/**
		 * subAuthenticationCurrentUserUpdated
		 * 
		 * subscribe for the CurrentUserUpdated event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subAuthenticationConnectFailed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationConnectFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subAuthenticationCurrentUserUpdated(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.authentication_currentUserUpdated, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
	};

})();