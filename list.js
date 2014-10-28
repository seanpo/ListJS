var ListJS = function($element, $repeater, $container, options) {
    options = options || {};
    options = {
        starting_count: options.starting_count || 2,
        delete_class: options.delete_class || '.delete',
        value_class: options.value_class || '.value',
        maximum: options.maximum || 0
    }

    return {
        html: $element.html(),
        count: 0,

        addElement: function() {
            $container.append(this.html);
            this.count++;
        },

        getResults: function() {
            var array = $(options.value_class).map(function(index, $element) {
                var value = $($element).val();
                if (value) return value;
            });
            array.join = [].join;
            return array;
        },

        start: function() {
            var _this = this;
            $repeater.click(function() {
                if (!options.maximum || _this.count < options.maximum) {
                    _this.addElement();
                }
            });
            $element.remove();
            for (var i = 0; i < options.starting_count; i++) $repeater.click();
        }
    }
}
