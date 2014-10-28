var ListJS = function($element, $repeater, $container, options) {
    options = options || {};
    options = {
        starting_count: options.starting_count || 2,
        delete_class: options.delete_class || '.delete',
        value_class: options.value_class || '.value'
    }

    return {
        html: $element.html(),

        addElement: function() {
            $container.append(this.html);
        },

        getResults: function() {
            return $(options.value_class).map(function(index, $element) {
                var value = $($element).val();
                if (value) return value;
            });
        },

        start: function() {
            var _this = this;
            $repeater.click(function() {
                _this.addElement();
            });
            $element.remove();
            for (var i = 0; i < options.starting_count; i++) $repeater.click();
        }
    }
}