/*jshint node:true */
/*jshint node:true */

'use strict';

var React = require('react');
var Formsy = require('formsy-react');
var InnerDateTimePicker = require('react-bootstrap-datetimepicker');

var ComponentMixin = require('./mixins/component');
var Row = require('./row');
var DateTimePicker = React.createClass({

    mixins: [Formsy.Mixin, ComponentMixin],

    changeValue: function(value) {
        this.setValue(value);
        this.props.onChange(this.props.name, value);
    },

    renderElement: function() {
        return (
            <InnerDateTimePicker
                ref="element"
                {...this.props}
                id={this.getId()}
                defaultText={this.getValue()||''}
                onChange={this.changeValue}
                disabled={this.isFormDisabled() || this.props.disabled}
            ></InnerDateTimePicker>
        );
    },

    render: function() {

        if (this.getLayout() === 'elementOnly') {
            return this.renderElement();
        }

        return (
            <Row
                {...this.getRowProperties()}
                htmlFor={this.getId()}
            >
                {this.renderElement()}
                {this.renderHelp()}
                {this.renderErrorMessage()}
            </Row>
        );
    }
});

module.exports = DateTimePicker;
