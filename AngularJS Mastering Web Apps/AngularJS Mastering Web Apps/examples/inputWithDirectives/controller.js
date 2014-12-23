(function () {
    'use strict';

    angular
        .module('app')
        .controller('TextAreaWithLimitCtrl', TextAreaWithLimitCtrl);

    function TextAreaWithLimitCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'TextAreaWithLimitCtrl';
        vm.message = '';
        vm.send = send;
        vm.clear = clear;

        function send() { alert("Sent message \"" + vm.message + "\" to the Server (*not really!*)")}
        function clear() { }

    }
})();