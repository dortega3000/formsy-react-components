/*jshint node:true */
/*jshint node:true */

'use strict';

var React = require('react');
var Formsy = require('formsy-react');
var InnerDatePicker = require('react-bootstrap-date-picker');

var ComponentMixin = require('./mixins/component');
var Row = require('./row');
var DatePicker = React.createClass({

    mixins: [Formsy.Mixin, ComponentMixin],

    changeValue: function(value) {
        this.setValue(value);
        this.props.onChange(this.props.name, value);
    },

    renderElement: function() {
        return (
            <InnerDatePicker
                ref="element"
                {...this.props}
                id={this.getId()}
                value={this.getValue()||''}
                onChange={this.changeValue}
                disabled={this.isFormDisabled() || this.props.disabled}
            ></InnerDatePicker>
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

module.exports = DatePicker;
