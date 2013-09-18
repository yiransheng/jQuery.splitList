(function ($) {
    var _splitList_deafults = {
        count: 6,
        childSelector: null,
        resolveId: true,
        addWrapper: true,
        wrapperTag: 'div',
        wrapperClass: ""
    },
    _splitList_methods = {
        split: function ($this, options) {
            var children, i, n, list, lists = [];

            children = options.childSelector ? $this.children(options.childSelector) : $this.children();
            n = Math.ceil(children.length / options.count);
            if (n < 2) {
                return $this;
            }
            // lists.push($this);
            for (i = 1; i < n; i++) {
                list = $this.clone().empty();
                if (list.attr('id')) {
                    list.removeAttr('id');
                }
                list.append(children.slice(i * options.count, (i + 1) * options.count));
                lists.push(list);
            }
            
            if (options.addWrapper) {
                var $wrapper = $this.wrap('<' + options.wrapperTag + '>').parent();
                if (options.resolveId) {
                    $wrapper.attr('id', $this.attr('id'));
                    $this.removeAttr('id');
                }
                while (list = lists.shift()) {
                    $wrapper.append(list.clone());
                }
                $wrapper.addClass(options.wrapperClass || "");
            } else {
                var last = $this;
                while (list = lists.shift()) {
                    list = list.clone();
                    list.insertAfter(last);
                    last = list
                }
            }
            children.slice(options.count).remove();
            return $this;
        }
    };

    $.fn.splitList = function (count, child_selector, add_wrapper, wrapper_tag, wrapper_class, resolve_id) {
        var options = {};
        if (Object(count) === count) {
            $.extend(options, _splitList_deafults, count);
        } else if (!(+count)) {
            return this
        } else {
            $.extend(options, {
                count: count,
                childSelector: child_selector || _splitList_deafults.childSelector,
                addWrapper: add_wrapper || _splitList_deafults.addWrapper,
                wrapperClass: wrapper_class || _splitList_deafults.wrapperClass,
                resolveId: resolve_id || _splitList_deafults.resolveId,
                wrapperTag: wrapper_tag || _splitList_deafults.wrapperTag,
            });
        }
        this.each(function () {
            _splitList_methods.split($(this), options);
        });
        return this
    }

})(jQuery);
