/*jshint node:true */
/*jshint node:true */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Formsy = require('formsy-react');
var InnerDateTimePicker = require('react-bootstrap-datetimepicker');

var ComponentMixin = require('./mixins/component');
var Row = require('./row');
var DateTimePicker = React.createClass({
    displayName: 'DateTimePicker',


    mixins: [Formsy.Mixin, ComponentMixin],

    changeValue: function changeValue(value) {
        this.setValue(value);
        this.props.onChange(this.props.name, value);
    },

    renderElement: function renderElement() {
        return React.createElement(InnerDateTimePicker, _extends({
            ref: 'element'
        }, this.props, {
            id: this.getId(),
            dateTime: this.getValue(),
            defaultText: this.getValue() || '',
            onChange: this.changeValue,
            disabled: this.isFormDisabled() || this.props.disabled
        }));
    },

    render: function render() {

        if (this.getLayout() === 'elementOnly') {
            return this.renderElement();
        }

        return React.createElement(
            Row,
            _extends({}, this.getRowProperties(), {
                htmlFor: this.getId()
            }),
            this.renderElement(),
            this.renderHelp(),
            this.renderErrorMessage()
        );
    }
});

module.exports = DateTimePicker;