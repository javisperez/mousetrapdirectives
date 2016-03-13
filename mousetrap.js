'use strict';

/**
 * Mousetrap directives for angularJS
 *
 * @author Javis Pérez <javisperez@gmail.com> <http://www.javisperez.com>
 * 03-16-2016
 */

angular.module('mousetrap-directives')

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
