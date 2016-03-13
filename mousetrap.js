'use strict';

/**
 * Mousetrap directives for angularJS
 *
 * @author Javis Pérez <javisperez@gmail.com> <http://www.javisperez.com>
 * 03-16-2016
 */

angular.module('mousetrap-directives', [])

    // Generic mousetrap factory
    .factory('$mousetrap', function ($window, $route, $rootScope, $uibModal, $timeout) {

        var isMac = $window.navigator.platform.toLowerCase().indexOf('mac') > -1;

        function parseModKey(key) {
            if (isMac) {
                return key.replace(/(mod)/ig, 'command');
            }

            return key.replace(/(mod)/ig, 'ctrl');
        }

        return function (hotkeys, $element, attrs) {

            var keys = Object.keys(hotkeys);

            keys.forEach(function (key) {
                var fn = hotkeys[key];

                Mousetrap.bind(key, function (ev, combo) {
                    ev.preventDefault();

                    if ($element.is(':disabled')) {
                        return false;
                    }

                    fn(ev, combo);
                    return false;
                });
            });

        };

    })

    /**
     * mousetrap directive to execute the given action with a keyboard shortcut
     */
    .directive('mousetrap', function ($timeout, $mousetrap) {
        return {
            restrict: 'A',
            link: function ($scope, $element, attrs) {
                var evald = $scope.$eval(attrs.mousetrap);

                $timeout(function () {
                    if (!angular.isObject(evald) && typeof evald === 'string') {
                        var tmp = {};

                        tmp[evald] = function () {
                            $element[0].click();
                        };

                        evald = tmp;
                    }

                    $mousetrap(evald, $element, attrs);
                });
            }
        };
    })

    /**
     * Set the focus to a given field by using a custom keyboard shortcut
     */
    .directive('mousetrapFocus', function ($timeout, $mousetrap) {
        return {
            restrict: 'A',
            link: function ($scope, $element, attrs) {

                var evald = $scope.$eval(attrs.mousetrapFocus);

                $timeout(function () {
                    if (typeof evald !== 'string') {
                        return;
                    }

                    var tmp = {};

                    tmp[evald] = function () {
                        $element.focus();
                    };

                    $mousetrap(tmp, $element, attrs);
                });
            }
        };
    });
